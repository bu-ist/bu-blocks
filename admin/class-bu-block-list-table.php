<?php
/**
 * The BU_Blocks list table in the admin settings page
 *
 * @link       www.bu.edu
 * @since      1.0.0
 *
 * @package    Bu_Blocks
 * @subpackage Bu_Blocks/includes
 */

namespace BU\Plugins\BU_Blocks\Admin;

use BU\Plugins\BU_Blocks\Admin;

/**
 * Class for displaying registered BU Blocks in a
 * WordPress-like Admin Table with row actions to
 * perform block setting opeations.
 *
 * @since      1.0.0
 * @package    Bu_Blocks
 * @subpackage Bu_Blocks/includes
 * @author     Boston University <id@bu.edu>
 */
class BU_Block_List_Table extends Admin\WP_List_Table {

	/**
	 * Array of BU Block instances.
	 *
	 * See /includes/class-bu-blocks.php for when all block classes
	 * were instantiated and passed into this class's __construct method.
	 *
	 * @since    1.0.0
	 * @var      array $block_instances An array containing "BU_Block Class name" => BU_Block instance
	 *                                  value pairs.
	 */
	public $block_instances = array();

	/**
	 * Admin URL
	 *
	 * @since    1.0.0
	 * @var      string $admin_url The link to the backend settings admin URL.
	 */
	public $admin_url;

	/**
	 * Call the parent constructor to override the defaults $args.
	 *
	 * @since    1.0.0
	 *
	 * @param    array $block_instances An array of BU_Block subclass instances.
	 */
	public function __construct( $block_instances = array() ) {
		$this->admin_url       = add_query_arg( 'page', 'bu-blocks', admin_url( 'options-general.php' ) );
		$this->block_instances = $block_instances;

		parent::__construct(
			array(
				'plural'   => 'BU Blocks', // Plural value used for labels and the objects being listed.
				'singular' => 'BU Block',  // Singular label for an object being listed, e.g. 'post'.
				'ajax'     => false,       // If true, the parent class will call the _js_vars() method in the footer.
			)
		);
	}

	/**
	 * Prepares the list of items for displaying.
	 *
	 * Query, filter data, handle sorting, and pagination, and any other
	 * data-manipulation required prior to rendering
	 *
	 * @since    1.0.0
	 */
	public function prepare_items() {

		// Check if a search was performed.
		$user_search_key = isset( $_REQUEST['s'] ) ? wp_unslash( trim( $_REQUEST['s'] ) ) : '';

		$this->_column_headers = $this->get_column_info();

		// Check and process any actions such as bulk actions.
		$this->handle_table_actions();

		// Fetch table data.
		$table_data = $this->fetch_table_data();

		// Filter the data in case of a search.
		if ( $user_search_key ) {
			$table_data = $this->filter_table_data( $table_data, $user_search_key );
		}

		// Required for pagination.
		$blocks_per_page = $this->get_items_per_page( 'blocks_per_page' );
		$table_page      = $this->get_pagenum();

		// Provide the ordered data to the List Table.
		// We need to manually slice the data based on the current pagination.
		$this->items = array_slice( $table_data, ( ( $table_page - 1 ) * $blocks_per_page ), $blocks_per_page );

		// Set the pagination arguments.
		$total_blocks = count( $table_data );
		$this->set_pagination_args(
			array(
				'total_items' => $total_blocks,
				'per_page'    => $blocks_per_page,
				'total_pages' => ceil( $total_blocks / $blocks_per_page ),
			)
		);
	}

	/**
	 * Get a list of columns. The format is:
	 * 'internal-name' => 'Title'
	 *
	 * @since    1.0.0
	 *
	 * @return   array $table_columns Array of column ids and their text values.
	 */
	public function get_columns() {

		$table_columns = array(
			'cb'                => '<input type="checkbox" />', // to display the checkbox.
			'name'              => __( 'Block Name', 'bu-blocks' ),
			'categories'        => __( 'Categories', 'bu-blocks' ),
			'description'       => __( 'Description', 'bu-blocks' ),
			'notes'             => __( 'Notes', 'bu-blocks' ),
			'activation_status' => __( 'Status', 'bu-blocks' ),
			'origin_site'       => __( 'Origin Site', 'bu-blocks' ),
		);

		return $table_columns;

	}

	/**
	 * Get a list of sortable columns. The format is:
	 * 'internal-name' => 'orderby'
	 * or
	 * 'internal-name' => array( 'orderby', true )
	 *
	 * The second format will make the initial sorting order be descending
	 *
	 * @since    1.0.0
	 *
	 * @return   array $sortable_columns An array of columns that have sorting ability.
	 */
	protected function get_sortable_columns() {

		/**
		 * Actual sorting still needs to be done by prepare_items.
		 * Specify which columns should have the sort icon.
		 *
		 * Key => Value
		 * column name_in_list_table => columnname in the db
		 */
		$sortable_columns = array(
			'activation_status' => 'activation_status',
			'name'              => 'name',
			'origin_site'       => 'origin_site',
		);

		return $sortable_columns;
	}

	/**
	 * Text displayed when no user data is available.
	 *
	 * @since    1.0.0
	 */
	public function no_items() {
		esc_html_e( 'No blocks avaliable.', 'bu-blocks' );
	}

	/**
	 * Fetch blocks data.
	 *
	 * @since    1.0.0
	 *
	 * @return   array $blocks An array of blocks to show rows for.
	 */
	public function fetch_table_data() {

		// Stores all the block instances.
		$blocks = $this->block_instances;

		// Retrieves any user-queried sorting/query methods.
		$orderby = ( isset( $_GET['orderby'] ) ) ? esc_sql( $_GET['orderby'] ) : 'name';
		$order   = ( isset( $_GET['order'] ) ) ? esc_sql( $_GET['order'] ) : 'ASC';

		usort(
			$blocks,
			function ( $a, $b ) {
				return call_user_func( $b, 'get_' . $orderby ) - call_user_func( $a, 'get_' . $orderby );
			}
		);

		// return result array to prepare_items.
		return $blocks;
	}

	/**
	 * Filter the table data based on the user search key
	 *
	 * @since    1.0.0
	 *
	 * @param    array  $table_data All block instances before being output in rows.
	 * @param    string $search_key The search string in the admin view.
	 * @return   array $filtered_table_data
	 */
	public function filter_table_data( $table_data, $search_key ) {
		$filtered_table_data = array_values(
			array_filter(
				$table_data,
				function( $row ) use ( $search_key ) {
					foreach ( $row as $row_val ) {
						if ( stripos( $row_val, $search_key ) !== false ) {
							return true;
						}
					}
				}
			)
		);

		return $filtered_table_data;

	}

	/**
	 * Render a column when no column specific method exists.
	 *
	 * @since    1.0.0
	 *
	 * @param    array  $item        The row of data.
	 * @param    string $column_name The column to enter data into from this row.
	 *
	 * @return   mixed
	 */
	public function column_default( $item, $column_name ) {
		return $item[ $column_name ];
	}

	/**
	 * Get value for checkbox column.
	 *
	 * The special 'cb' column
	 *
	 * @since    1.0.0
	 *
	 * @param    object $item A row's data.
	 * @return   string Text to be placed inside the column <td>.
	 */
	protected function column_cb( $item ) {
		$classname = get_class( $item );
		return sprintf(
			'<label class="screen-reader-text" for="block_' . $classname . '">' . sprintf( _x( 'Select %s', 'editor block', 'bu-blocks' ), $item->get_name() ) . '</label>'
				. "<input type='checkbox' name='users[]' id='block_{$classname}' value='{$classname}' />"
		);
	}

	/**
	 * Get value for activation_status column.
	 *
	 * @since    1.0.0
	 *
	 * @param    object $item A row's data.
	 */
	protected function column_activation_status( $item ) {
		$status  = $item->get_activation_status();

		// Sets inactive state by default.
		$classes = array( 'bu-block-activation-status' );
		$text    = __( 'Inactive', 'bu-blocks' );

		// Sets active state by defining extra class and text, if block is activated.
		if ( $status ) {
			$classes[] = 'is-active';
			$text      = __( 'Active', 'bu-blocks' );
		} else {
			$classes[] = 'is-inactive';
		}

		// Creates the string of HTML that will be output.
		$html = '
			<div class="' . esc_attr( implode( ' ', $classes ) ) . '">
				<span class="screen-reader-text">' . $text . '</span>
			</div>
		';

		// Sanitizes and prints the resuting HTML to the screen.
		echo wp_kses(
			$html,
			array(
				'div'  => array(
					'class' => array(),
				),
				'span' => array(
					'class' => array(),
				),
			)
		);
	}

	/**
	 * Get value for name column.
	 *
	 * @since    1.0.0
	 *
	 * @param    object $item A row's data.
	 */
	protected function column_name( $item ) {
		echo $item->get_name();
	}

	/**
	 * Get value for categories column.
	 *
	 * @since    1.0.0
	 *
	 * @param    object $item A row's data.
	 */
	protected function column_categories( $item ) {
		$categories  = $item->get_categories();
		$column_html = '';

		// Only continues if there are categories.
		if ( ! empty( $categories) ) {
			// Use a counter to insert break tags for subsequent categories.
			$index = 0;
			foreach ( $categories as $category_slug => $category_name ) {
				// Conditionally outputs a break tag.
				if ( $index > 0 ) {
					$column_html .= '<br />';
				}
				// Outputs a link to prefilter the table by category slug.
				$column_html .= '
					<a href="' . esc_url( add_query_arg( 'category', $category_slug, $this->admin_url ) ) . '">' .
						$category_name . '
					<a>
				';
				++$index;
			}
		}

		echo wp_kses(
			$column_html,
			array(
				'br' => array(),
				'a'  => array(
					'href' => array(),
				),
			)
		);
	}

	/**
	 * Get value for description column.
	 *
	 * @since    1.0.0
	 *
	 * @param    object $item A row's data.
	 */
	protected function column_description( $item ) {
		echo wpautop( $item->get_description() );
	}

	/**
	 * Get value for notes column.
	 *
	 * @since    1.0.0
	 *
	 * @param    object $item A row's data.
	 */
	protected function column_notes( $item ) {
		echo wpautop( $item->get_notes() );
	}

	/**
	 * Get value for origin_site column.
	 *
	 * @since    1.0.0
	 *
	 * @param    object $item A row's data.
	 */
	protected function column_origin_site( $item ) {
		echo esc_html( $item->get_origin_site() );
	}

}
