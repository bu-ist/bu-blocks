# BU Blocks #

**Contributors:** toddmilliken  
**Tags:** gutenberg, blocks  
**Requires at least:** 4.9.8  
**Tested up to:** 4.9.8  
**Stable tag:** trunk  
**License:** GPLv2 or later  
**License URI:** http://www.gnu.org/licenses/gpl-2.0.html  

A WordPress plugin to centrally manage all BU editor blocks for the new WordPress editor.

## Description ##

The BU Blocks plugin is intended to contain all blocks created for any BU website.
Once activated, an administrator to the site can enable or disable any number of
blocks to be used for a given site. The goal is to re-use editor blocks that may
have already been created to reduce development time, and allow site adminstrators
to control which blocks are required for a site to reduce clutter and noise in the
editor.

## Dependencies ##
* [Gutenberg plugin 3.8](https://wordpress.org/plugins/gutenberg/)
* [WordPress 4.9.8](https://wordpress.org/download/)

## Installation Instructions ##
1. Download this repository and either upload the zip file to the Add New plugin screen,
or upload the contents of this repository to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress

## Permissions ##
Users with the capability `manage_options` will have the ability to view the Settings
page for BU Blocks.

## Plugin Settings
BU Blocks adds an admin submenu page to the current Settings admin menu page. This
settings page is only visible to users who have the `manage_options` capability.
The settings page lists all BU Blocks using the familiar
[WP_List_Table class](https://codex.wordpress.org/Class_Reference/WP_List_Table).
Each row in the table represents a BU Block, and has information such as a
description, site(s) that it was created for, a category/tag that can be used
to find other similar BU Blocks of that type, and its current status (active/inactive).

## Frequently Asked Questions ##

### A question someone might have ###

An answer to that question

## Screenshots ##

### 1. This screen shot description corresponds to screenshot-1.(png|jpg|jpeg|gif). Note that the screenshot is taken from ###
![This screen shot description corresponds to screenshot-1.(png|jpg|jpeg|gif). Note that the screenshot is taken from](http://ps.w.org/bu-blocks/assets/screenshot-1.png)

the /assets directory or the directory that contains the stable readme.txt (tags or trunk). Screenshots in the /assets
directory take precedence. For example, `/assets/screenshot-1.png` would win over `/tags/4.3/screenshot-1.png`
(or jpg, jpeg, gif).
### 2. This is the second screen shot ###
![This is the second screen shot](http://ps.w.org/bu-blocks/assets/screenshot-2.png)


## Running tests locally in docker ##
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

## bin/wpdc.sh commands ##
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


## Changelog ##

### 1.0.0 ###
