# Changelog

## Unreleased

* Added filter `bu_blocks_unregister_blocks` for developers to hook into for
  unregistering blocks. Passes an array parameter to the callback function
  for the filter, that defines the blocks to unregister (empty array for now,
  but will be filled based on settings stored in the options table).
