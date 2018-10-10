module.exports = function( grunt ) {
	'use strict';

	// Project configuration
	grunt.initConfig( {

		pkg: grunt.file.readJSON( 'package.json' ),

		addtextdomain: {
			options: {
				textdomain: 'bu-blocks',
			},
			update_all_domains: {
				options: {
					updateDomains: true,
				},
				src: [ '*.php', '**/*.php', '!\.git/**/*', '!bin/**/*', '!node_modules/**/*', '!tests/**/*' ],
			},
		},

		wp_readme_to_markdown: {
			your_target: {
				files: {
					'README.md': 'readme.txt',
				},
			},
		},

		makepot: {
			target: {
				options: {
					domainPath: '/languages',
					exclude: [ '\.git/*', 'bin/*', 'node_modules/*', 'tests/*' ],
					mainFile: 'bu-blocks.php',
					potFilename: 'bu-blocks.pot',
					potHeaders: {
						poedit: true,
						'x-poedit-keywordslist': true,
					},
					type: 'wp-plugin',
					updateTimestamp: true,
				},
			},
		},
		watch: {
			grunt: {
				files: [ 'Gruntfile.js' ],
				options: {
					reload: true
				}
			},
			styles: {
				files: [
					'dist/**/**/*.css'
				],
				tasks: [ 'styles' ],
				options: {
					spawn: false
				}
			},
			kss: {
				files: [
					'src/**/*.hbs'
				],
				tasks: [ 'styles' ],
				options: {
					spawn: false
				}
			},
		},
		copy: {
			css: {
				options: {
					mode: true
				},
				src: 'dist/blocks.style.build.css',
				dest: '_styleguide/blocks.style.build.css'
			},
			kssassets: {
				cwd: 'kss-assets',  // set working folder / root to copy
				src: '**/*',           // copy all files and subfolders
				dest: '_styleguide/kss-assets',    // destination folder
				expand: true           // required when using cwd
			}
		},
		kss: {
			options: {
				title: 'BU Blocks Style Guide',
				builder: 'node_modules/id-kss-builder',
				css: [
				  "/blocks.style.build.css",
				],
				js: [
				  "/script.js",
				],
				extend: 'node_modules/id-kss-builder/extend',
				gitURL: 'https://github.com/bu-ist/bu-blocks/',
				gitURLCSSDEV: 'https://github.com/bu-ist/bu-blocks/tree/develop/src',
				exampleStylesheetURL: 'https://www.bu.edu/wp-content/themes/responsive-framework-2-x/style.min.css'
			},
			dist: {
				src: [
					['src']
				],
				dest: '_styleguide'
			}
		},

		browserSync: {
			bsFiles: {
				src : '_styleguide/*.html'
			},
			options: {
				watchTask: true,
				server: {
					baseDir: "./_styleguide"
				}
			}
		}
	} );

	// 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-kss' );
	grunt.loadNpmTasks( 'grunt-browser-sync' );
	grunt.loadNpmTasks( 'grunt-wp-i18n' );
	grunt.loadNpmTasks( 'grunt-wp-readme-to-markdown' );

	// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask( 'i18n', [ 'addtextdomain', 'makepot' ] );
	grunt.registerTask( 'readme', [ 'wp_readme_to_markdown' ] );
	grunt.registerTask( 'install',  [ 'build' ] );
	grunt.registerTask( 'styles',   [ 'kss', 'copy:css', 'copy:kssassets' ] );
	grunt.registerTask( 'build',    [ 'styles', 'kss', 'copy:css', 'copy:kssassets'  ] );
	grunt.registerTask( 'default',  [ 'kss', 'browserSync', 'watch' ] );

	grunt.util.linefeed = '\n';
};
