# BU Blocks #

**Contributors:** toddmilliken  
**Tags:** gutenberg, blocks  
**Requires at least:** 4.9.8  
**Tested up to:** 4.9.8  
**Stable tag:** trunk  
**License:** GPLv2 or later  
**License URI:** http://www.gnu.org/licenses/gpl-2.0.html  

BU Blocks is a WordPress plugin that registers additional blocks for the
new WordPress editor, and provides a way to centrally manage all available
blocks.

## Description ##

BU Blocks provides content editors with additional blocks for the new
WordPress editor. These blocks were built for various sites within the
BU WordPress ecosystem and have been tested and designed to be re-used
for any project.

Secondly, BU Blocks gives site administrators the ability to globally
enable or disable any block (from WordPress core or 3rd party plugins
and themes) on the plugin settings page. Developers also will have this
ability via hooks and filters.

## Dependencies ##
* [Gutenberg plugin 3.8](https://wordpress.org/plugins/gutenberg/)
* [WordPress 4.9.8](https://wordpress.org/download/) or later

## Resources ##
This plugin was built using a few open source plugin boilerplate examples:
* [WordPress Plugin Boilerplate](https://github.com/devinvinson/WordPress-Plugin-Boilerplate/)
    * The unofficial plugin boilerplate code
	* Provides organization and structure by separating code into
	 admin-facing vs public-facing functionality.
	* Consolidates all hooks in one main plugin class, which helps
	 maintainability.
* [WP CLI `wp scaffold plugin` command](https://developer.wordpress.org/cli/commands/scaffold/plugin/)
    * WordPress official plugin boilerplate.
	* Includes an initial package.json file for its Gruntfile which
	 creates pot files for translations and converts the standard WordPress
	 `readme.txt` file that is required for the official WordPress plugin
	 repository to the more traditional  `README.md` markdown format that
	 Github can parse.
	* Normalizes editor preferences, adds PHPUnit tests.
* [BU Sample Plugin (feature/use_docker branch)](https://github.com/bu-ist/sample-plugin/tree/feature/use_docker)
    * Adds `docker-compose.yml` and some scripts in `bin/` for running
	 the PHPUnit tests locally in an isolated docker container.
* [Create Guten Block](https://github.com/ahmadawais/create-guten-block)
	* A zero-configuration boilerplate for creating blocks for the new editor
	 without having to configure webpack or babel.
	* Provides the base structure of this plugin.
* [WDS Blocks](https://github.com/WebDevStudios/WDS-Blocks)
    * An open-source plugin by WebDevStudios for extending the new editor
	 with additional blocks.
	* Borrowed the autoloading strategy and namespacing to speed up
	 development workflow without needing to require each PHP file.
	 Encapsulates plugin code from the global namespace to avoid conflicts.

## Installation Instructions ##
1. Download this repository and either upload the zip file to the Add New
   plugin screen, or upload the contents of this repository to the
   `/wp-content/plugins/` directory.
1. Activate the plugin through the 'Plugins' menu in WordPress.

## Permissions ##
Any user with editing capabilities can use registered blocks.

Only users with the `manage_options` capability have access to the plugin settings
page listed under Settings > BU Blocks. From there, users have full capabilities
to unregister blocks.

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
* You don't normally have to `eject` a project because by ejecting you lose the connection with `create-guten-block` and from there onwards you have to update and maintain all the dependencies on your own.
