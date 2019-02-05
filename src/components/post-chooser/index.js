/**
 * Component: Post Chooser
 *
 * Copied from Gutenberg's URLInput component with some slight modifications.
 */

// External dependencies.
import classnames from 'classnames';

// Import CSS.
import './editor.scss';

// Internal dependencies.
import PostChooserAttributes from './attributes';
import PostChooserControls from './controls';

// WordPress dependencies.
const {
	__,
	_n,
	sprintf,
} = wp.i18n;
const {
	createRef,
	Component,
} = wp.element;
const {
	Popover,
	Spinner,
	withSpokenMessages,
} = wp.components;
const {
	decodeEntities,
} = wp.htmlEntities;
const {
	DOWN,
	ENTER,
	TAB,
	UP,
} = wp.keycodes;
const {
	withInstanceId,
} = wp.compose;
const {
	apiFetch,
} = wp;
const {
	addQueryArgs
} = wp.url;

const stopEventPropagation = ( event ) => event.stopPropagation();

class PostChooser extends Component {
	constructor( { autocompleteRef } ) {
		super( ...arguments );

		this.onChange = this.onChange.bind( this );
		this.onKeyDown = this.onKeyDown.bind( this );
		this.autocompleteRef = autocompleteRef || createRef();
		this.inputRef = createRef();
		this.updateSuggestions = this.updateSuggestions.bind( this );

		this.suggestionNodes = [];

		this.state = {
			posts: [],
			showSuggestions: false,
			selectedSuggestion: null,
		};
	}

	componentWillUnmount() {
		delete this.suggestionsRequest;
	}

	bindSuggestionNode( index ) {
		return ( ref ) => {
			this.suggestionNodes[ index ] = ref;
		};
	}

	componentWillUnmount() {
		delete this.suggestionsRequest;
	}

	bindSuggestionNode( index ) {
		return ( ref ) => {
			this.suggestionNodes[ index ] = ref;
		};
	}

	updateSuggestions( value, postTypes ) {
		// Set up the post type(s) to limit the search to.
		const defaultTypes = [ 'bu-article', 'bu-closeup', 'bu-collection', 'bu-edition' ];
		const types = ( postTypes !== undefined ) ? postTypes : defaultTypes;

		// Show the suggestions after typing at least 3 characters
		if ( value.length < 3 ) {
			this.setState( {
				showSuggestions: false,
				selectedSuggestion: null,
				loading: false,
			} );

			return;
		}

		this.setState( {
			showSuggestions: true,
			selectedSuggestion: null,
			loading: true,
		} );

		// Make the request to our custom search endpoint.
		const request = apiFetch( {
			path: addQueryArgs( '/bu-blocks/v1/search', {
				search: value,
				post_type: types,
			} ),
		} );

		request.then( ( posts ) => {
			// A fetch Promise doesn't have an abort option. It's mimicked by
			// comparing the request reference in on the instance, which is
			// reset or deleted on subsequent requests or unmounting.
			if ( this.suggestionsRequest !== request ) {
				return;
			}

			this.setState( {
				posts,
				loading: false,
			} );

			if ( !! posts.length ) {
				this.props.debouncedSpeak( sprintf( _n(
					'%d result found, use up and down arrow keys to navigate.',
					'%d results found, use up and down arrow keys to navigate.',
					posts.length
				), posts.length ), 'assertive' );
			} else {
				this.props.debouncedSpeak( __( 'No results.' ), 'assertive' );
			}
		} ).catch( () => {
			if ( this.suggestionsRequest === request ) {
				this.setState( {
					loading: false,
				} );
			}
		} );

		this.suggestionsRequest = request;
	}

	onChange( event ) {
		const inputValue = event.target.value;
		this.props.onChange( inputValue );
		this.updateSuggestions( inputValue, this.props.postTypes );
	}

	onKeyDown( event ) {
		const { showSuggestions, selectedSuggestion, posts, loading } = this.state;
		// If the suggestions are not shown or loading, we shouldn't handle the arrow keys
		// We shouldn't preventDefault to allow block arrow keys navigation
		if ( ! showSuggestions || ! posts.length || loading ) {
			// In the Windows version of Firefox the up and down arrows don't move the caret
			// within an input field like they do for Mac Firefox/Chrome/Safari. This causes
			// a form of focus trapping that is disruptive to the user experience. This disruption
			// only happens if the caret is not in the first or last position in the text input.
			// See: https://github.com/WordPress/gutenberg/issues/5693#issuecomment-436684747
			switch ( event.keyCode ) {
				// When UP is pressed, if the caret is at the start of the text, move it to the 0
				// position.
				case UP: {
					if ( 0 !== event.target.selectionStart ) {
						event.stopPropagation();
						event.preventDefault();

						// Set the input caret to position 0
						event.target.setSelectionRange( 0, 0 );
					}
					break;
				}
				// When DOWN is pressed, if the caret is not at the end of the text, move it to the
				// last position.
				case DOWN: {
					if ( this.props.value.length !== event.target.selectionStart ) {
						event.stopPropagation();
						event.preventDefault();

						// Set the input caret to the last position
						event.target.setSelectionRange( this.props.value.length, this.props.value.length );
					}
					break;
				}
			}

			return;
		}

		const post = this.state.posts[ this.state.selectedSuggestion ];

		switch ( event.keyCode ) {
			case UP: {
				event.stopPropagation();
				event.preventDefault();
				const previousIndex = ! selectedSuggestion ? posts.length - 1 : selectedSuggestion - 1;
				this.setState( {
					selectedSuggestion: previousIndex,
				} );
				break;
			}
			case DOWN: {
				event.stopPropagation();
				event.preventDefault();
				const nextIndex = selectedSuggestion === null || ( selectedSuggestion === posts.length - 1 ) ? 0 : selectedSuggestion + 1;
				this.setState( {
					selectedSuggestion: nextIndex,
				} );
				break;
			}
			case TAB: {
				if ( this.state.selectedSuggestion !== null ) {
					this.selectLink( post );
					// Announce a link has been selected when tabbing away from the input field.
					this.props.speak( __( 'Link selected.' ) );
				}
				break;
			}
			case ENTER: {
				if ( this.state.selectedSuggestion !== null ) {
					event.stopPropagation();
					this.selectLink( post );
				}
				break;
			}
		}
	}

	selectLink( post ) {
		this.props.onChange( post.url, post );
		this.setState( {
			selectedSuggestion: null,
			showSuggestions: false,
		} );
	}

	handleOnClick( post ) {
		this.selectLink( post );
		// Move focus to the input field when a link suggestion is clicked.
		this.inputRef.current.focus();
	}

	render() {
		const {
			value = '',
			autoFocus = true,
			instanceId,
			placeholder = __( 'Type to search for a story' ),
		} = this.props;

		const {
			showSuggestions,
			posts,
			selectedSuggestion,
			loading,
		} = this.state;

		/* eslint-disable jsx-a11y/no-autofocus */
		return (
			<div className="editor-url-input">
				<input
					autoFocus={ autoFocus }
					type="text"
					aria-label={ __( 'URL' ) }
					required
					value={ value }
					onChange={ this.onChange }
					onInput={ stopEventPropagation }
					placeholder={ placeholder }
					onKeyDown={ this.onKeyDown }
					role="combobox"
					aria-expanded={ showSuggestions }
					aria-autocomplete="list"
					aria-owns={ `editor-url-input-suggestions-${ instanceId }` }
					aria-activedescendant={ selectedSuggestion !== null ? `editor-url-input-suggestion-${ instanceId }-${ selectedSuggestion }` : undefined }
					ref={ this.inputRef }
				/>

				{ ( loading ) && <Spinner /> }

				{ showSuggestions && !! posts.length &&
					<Popover position="bottom" noArrow focusOnMount={ false }>
						<div
							className="editor-url-input__suggestions"
							id={ `editor-url-input-suggestions-${ instanceId }` }
							ref={ this.autocompleteRef }
							role="listbox"
						>
							{ posts.map( ( post, index ) => (
								<button
									key={ post.id }
									role="option"
									tabIndex="-1"
									id={ `editor-url-input-suggestion-${ instanceId }-${ index }` }
									ref={ this.bindSuggestionNode( index ) }
									className={ classnames( 'editor-url-input__suggestion', {
										'is-selected': index === selectedSuggestion,
									} ) }
									onClick={ () => this.handleOnClick( post ) }
									aria-selected={ index === selectedSuggestion }
								>
									{ decodeEntities( post.title ) || __( '(no title)' ) }
								</button>
							) ) }
						</div>
					</Popover>
				}
			</div>
		);
		/* eslint-enable jsx-a11y/no-autofocus */
	}
}

// Export dependencies for easy importing in blocks.
export {
	PostChooserAttributes,
	PostChooserControls,
};

export default withSpokenMessages( withInstanceId( PostChooser ) );