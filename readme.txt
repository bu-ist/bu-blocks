=== BU Blocks ===

Contributors: toddmilliken
Tags: gutenberg, blocks
Requires at least: 4.9.8
Tested up to: 4.9.8
Stable tag: trunk
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

A WordPress plugin to centrally manage all BU editor blocks for the new WordPress editor.

== Description ==

The BU Blocks plugin is intended to contain all blocks created for any BU website.
Once activated, an administrator to the site can enable or disable any number of
blocks to be used for a given site. The goal is to re-use editor blocks that may
have already been created to reduce development time, and allow site adminstrators
to control which blocks are required for a site to reduce clutter and noise in the
editor.

== Dependencies ==
* [Gutenberg plugin 3.8](https://wordpress.org/plugins/gutenberg/)
* [WordPress 4.9.8](https://wordpress.org/download/)

== Installation Instructions ==
1. Download this repository and either upload the zip file to the Add New plugin screen,
or upload the contents of this repository to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress

== Permissions ==
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

== Frequently Asked Questions ==

=== A question someone might have ===

An answer to that question

== Screenshots ==

1. This screen shot description corresponds to screenshot-1.(png|jpg|jpeg|gif). Note that the screenshot is taken from
the /assets directory or the directory that contains the stable readme.txt (tags or trunk). Screenshots in the /assets
directory take precedence. For example, `/assets/screenshot-1.png` would win over `/tags/4.3/screenshot-1.png`
(or jpg, jpeg, gif).
1. This is the second screen shot

== Changelog ==

=== 1.0.0 ===
