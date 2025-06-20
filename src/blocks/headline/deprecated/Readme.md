# Deprecated Versions

This folder contains deprecated versions of the Headline block. These versions are no longer supported and should not be used. When the block is parsed in existing posts, this deprecation array will be used to update old versions of the blockt to the new version. The new version will then be saved when the post is saved.

## Get Attributes Functions

These functions are used to recover the attributes from the saved content so that the block can be rendered via the dynamic PHP template for the block instead of just echoing out the $content string. The version number matches the deprecated versions of the block.

### bu_blocks_headline_v1_get_attributes()

For older static blocks when switching to a php template (dynamic block) $attributes doesn't return the saved attributes since they were saved in the markup such as in the content string. This function attempts to parse the saved content from the $content string, which exists in the post for the older instance of the static block. It then uses DOMDocument to traverse the markup and extract the attributes from the <h1-h6> tag to update the $attributes array so the block can be rendered via the dynamic PHP template for the block instead of just echoing out the $content string.