# BU Blocks #

**Contributors:** toddmilliken  
**Tags:** gutenberg, blocks  
**Requires at least:** 4.9.8  
**Tested up to:** 4.9.8  
**Stable tag:** trunk  
**License:** GPLv2 or later  
**License URI:** http://www.gnu.org/licenses/gpl-2.0.html  

BU Blocks is a WordPress plugin that registers additional blocks for the
new WordPress editor.

## Description ##

BU Blocks provides content editors with additional blocks for the new
WordPress editor. These blocks were built for various sites within the
BU WordPress ecosystem and have been tested and designed to be re-used
for any project.

## Dependencies ##
* [Gutenberg plugin 3.8](https://wordpress.org/plugins/gutenberg/)
* [WordPress 4.9.8](https://wordpress.org/download/) or later

## Installation Instructions ##
1. Download this repository and either upload the zip file to the Add New
   plugin screen, or upload the contents of this repository to the
   `/wp-content/plugins/` directory.
1. Activate the plugin through the 'Plugins' menu in WordPress.

## Resources ##
This plugin was built using a few open source plugin boilerplate examples:
* [Create Guten Block](https://github.com/ahmadawais/create-guten-block) --
  A zero-configuration boilerplate for creating blocks for the new editor
  without having to configure webpack or babel.
    * Provides the base structure of this plugin.
    * Provides npm scripts that transpile ES6+/Next JavaScript into traditional
      ES2015 JavaScript that all modern browsers can understand.
    * Compiles all block sass to CSS.
    * Supplies the `src/` directory where block development occurs.
    * Supplies the `dist/` directory where the npm scripts distribute the
      final build files that get enqueued into the Editor and front-end.
    * Adds the hidden eslint config files.
* [WP CLI `wp scaffold plugin` command](https://developer.wordpress.org/cli/commands/scaffold/plugin/) --
  The official WordPress plugin boilerplate.
    * Provides the initial package.json file for running Grunt tasks.
    * Adds two Grunt tasks for generating .pot file for translations and another
      task for converting the standard WordPress `readme.txt` file that is required
      for the official WordPress plugin repository to the more traditional  `README.md`
      markdown format that Github can parse.
    * Adds the hidden `.distignore`, `.gitignore`, `.editorconfig` configuration files.
    * Adds `.travis.yml`, `phpunit.xml.dist`, and initial `tests/` directory for continuous
      integration setup and PHPUnit testing.
    * Adds `phpcs.xml.dist` to define the WordPress Coding Standards this project follows.
* [WordPress Plugin Boilerplate](https://github.com/devinvinson/WordPress-Plugin-Boilerplate/) --
  The unofficial plugin boilerplate code, with an opinionated object-oriented structure.
    * Although this plugin doesn't use a lot of the code, the project provides plugin
      organization principles that still apply for separating admin from public facing hooks.
    * Consolidates all hooks in one main plugin class, which helps maintainability. This logic
      exists in `/src/init.php` where `define_admin_hooks()` exists for consolidating all
      admin-specific hooks.
* [BU Sample Plugin (feature/use_docker branch)](https://github.com/bu-ist/sample-plugin/tree/feature/use_docker)
    * Adds the `docker-compose.yml` and the `bin/wpdc.sh` scripts for running the PHPUnit
	  tests locally in an isolated docker container.
* [WDS Blocks](https://github.com/WebDevStudios/WDS-Blocks) --
  An open-source plugin by WebDevStudios for adding blocks to the new WordPress editor.
    * Borrows the autoloading strategy in `src/init.php` to help development focus on
      the creation of blocks rather than adding includes and requires for each block-specific
      PHP file that needs to be created.
    * Follows the same namespacing patterns for each PHP file so code is scoped
      to this plugin and avoids any conflicts with external dependencies that may have
      the same class names, function names, etc.

## Create Guten Block ##
This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block).

Below you will find some information on how to run scripts.

>You can find the most recent version of this guide [here](https://github.com/ahmadawais/create-guten-block).

### 👉  `npm start` ###
* Use to compile and run the block in development mode.
* Watches for any changes and reports back any errors in your code.

### 👉  `npm run build` ###
* Use to build production code for your block inside `dist` folder.
* Runs once and reports back the gzip file sizes of the produced code.

### 👉  `npm run eject` ###
* Use to eject your plugin out of `create-guten-block`.
* Provides all the configurations so you can customize the project as you want.
* It's a one-way street, `eject` and you have to maintain everything yourself.
* You don't normally have to `eject` a project because by ejecting you lose the connection with `create-guten-block`
  and from there onwards you have to update and maintain all the dependencies on your own.

## Running PHPUnit tests locally in docker ##
### Requirements ###
Running tests locally in docker requires docker and docker-compose to be installed in your machine.

You can download it here https://www.docker.com/community-edition#/download.

Note: docker-compose comes with Docker for Mac and Docker for Windows. On linux you need to install docker-compose separately.

### Steps ###
1. Go to the plugin/theme directory.
	```
	cd /path/to/plugin
	```
1. Run the [wpdc up](#up) command to initialize and setup docker containers.
	```
	bash bin/wpdc.sh up
	```
1. Run the [wpdc test](#test) command to run phpunit (as long as the containers are running, you can edit your files and run this command as many times as you want).
	```
	bash bin/wpdc.sh test
	```
1. Run the [wpdc down](#down) command to stop and remove containers when you are done testing.
	```
	bash bin/wpdc.sh down
	```

## Docker commands in bin/wpdc.sh script ##
### `up` ###
Starts docker containers and sets up WordPress testing environment so that we can use the test command.
*Usage*
```
bash bin/wpdc.sh up [php-version] [wp-version]
```
It takes 2 optional arguments:
1. `[php-version]`

	The php version we want to test. Normally a 2 digit version like `5.6`, `7.0`, `7.1`. It defaults to latest (which at the moment resolves to `7.1` but can change in the future).
1. `[wp-version]`

	The WordPress version we want to test. It can be a 1, 2 or 3 digit version like: `4`, `4.9`, `4.7.3`. It defaults to latest.

*Examples*
```
bash bin/wpdc.sh up
bash bin/wpdc.sh up latest
bash bin/wpdc.sh up latest latest
bash bin/wpdc.sh up 7.0
bash bin/wpdc.sh up 7.0 latest
bash bin/wpdc.sh up latest 4.6
bash bin/wpdc.sh up 7.1-apache 4.7
bash bin/wpdc.sh up latest 4.8
bash bin/wpdc.sh up 5.6 4.3
```

### `down` ###
Stops and removes everything created with the up command.
*Usage*
```
bash bin/wpdc.sh down
```
It takes no arguments.

### `test` ###
Runs the phpunit tests inside the docker container.
*Usage*
```
bash bin/wpdc.sh test
```
It takes no arguments.
