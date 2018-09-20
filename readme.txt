=== BU Blocks ===

Contributors: toddmilliken
Tags: gutenberg, blocks
Requires at least: 4.9.8
Tested up to: 4.9.8
Stable tag: trunk
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

BU Blocks is a WordPress plugin that registers additional blocks for the
new WordPress editor, and provides a way to centrally manage all available
blocks.

== Description ==

BU Blocks provides content editors with additional blocks for the new
WordPress editor. These blocks were built for various sites within the
BU WordPress ecosystem and have been tested and designed to be re-used
for any project.

Secondly, BU Blocks gives site administrators the ability to globally
enable or disable any block (from WordPress core or 3rd party plugins
and themes) on the plugin settings page. Developers also will have this
ability via hooks and filters.

BU Blocks aims to reduce development time by providing this continously
updated repository of editor blocks that have been required and used
on previous projects so less time is spent reinventing the wheel. And
since a site may __not__ need all the blocks, site administrators and
developers have the ability to turn off ones that are not relevant.

== Dependencies ==
* [Gutenberg plugin 3.8](https://wordpress.org/plugins/gutenberg/)
* [WordPress 4.9.8](https://wordpress.org/download/)

== Installation Instructions ==
1. Download this repository and either upload the zip file to the Add New plugin screen,
or upload the contents of this repository to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress

== Permissions ==
Users with the capability `manage_options` will have the ability to view and make
changes on the plugin settings page.

## Plugin Settings
Upon activation, a new submenu page will be visible under the "Settings" admin menu item.
This settings page is only visible to users who have the `manage_options` capability.
The settings page lists all registered blocks and provides a user interface for turning
on or off any block in the editor.

== Frequently Asked Questions ==

= A question someone might have =

An answer to that question

== Screenshots ==

1. This screen shot description corresponds to screenshot-1.(png|jpg|jpeg|gif). Note that the screenshot is taken from
the /assets directory or the directory that contains the stable readme.txt (tags or trunk). Screenshots in the /assets
directory take precedence. For example, `/assets/screenshot-1.png` would win over `/tags/4.3/screenshot-1.png`
(or jpg, jpeg, gif).
1. This is the second screen shot

== Running tests locally in docker ==
= Requirements =
Running tests locally in docker requires docker and docker-compose to be installed in your machine.

You can download it here https://www.docker.com/community-edition#/download.

Note: docker-compose comes with Docker for Mac and Docker for Windows. On linux you need to install docker-compose separately.

= Steps =
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

== bin/wpdc.sh commands ==
= `up` =
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

= `down` =
Stops and removes everything created with the up command.
*Usage*
```
bash bin/wpdc.sh down
```
It takes no arguments.

= `test` =
Runs the phpunit tests inside the docker container.
*Usage*
```
bash bin/wpdc.sh test
```
It takes no arguments.


== Changelog ==

= 1.0.0 =
