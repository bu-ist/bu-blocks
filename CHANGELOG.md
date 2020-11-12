# Changelog

## Unreleased
- fix stylesheet loading in WP 5.x. This wasn't noticed earlier as the current implementations of the plugin load the plugin
stylesheet via the child theme. This fixes the block styling when BU-Blocks is activated on a Responsive Framework site. 

## 0.3.1
- Photo Essay Block Improvements: 
  - Puts captions blocks closer to photo essay blocks. fixes: bu-ist/r-editorial#984
  - Adds hover effect to photo essay images to denote click-ability. fixes:bu-ist/r-editorial#896



## 0.3.0
- Official support for WordPress 5.4, including:
- Compatibility for the the listicle block https://github.com/bu-ist/bu-blocks/pull/271
- Compatibility for the Photo Essay block https://github.com/bu-ist/bu-blocks/pull/269
- Compatibility for the BUniverse block https://github.com/bu-ist/bu-blocks/pull/255
- Compabilility for the Button block https://github.com/bu-ist/bu-blocks/pull/256
- Compatibility for the Custom HTML block https://github.com/bu-ist/bu-blocks/pull/257
- Compatibility for the Headline block https://github.com/bu-ist/bu-blocks/pull/258
- Compatibility for the Intro Paragraph block https://github.com/bu-ist/bu-blocks/pull/260
- Compatibility for the Drawer block https://github.com/bu-ist/bu-blocks/pull/261
- Compatibility for the Modal block https://github.com/bu-ist/bu-blocks/pull/262
- Compatibility for the Related Stories block https://github.com/bu-ist/bu-blocks/pull/263
- Compatibility for the Stats block https://github.com/bu-ist/bu-blocks/pull/270
- Compatibility for the Listicle block https://github.com/bu-ist/bu-blocks/pull/271
- Improved parent block selection in editor by adding padding https://github.com/bu-ist/bu-blocks/pull/270
- Fixed issue with templateLock changes upstream that block child blocks from being inserted https://github.com/bu-ist/bu-blocks/pull/270

## 0.2.19
- Bug Fix: Fixes listicle sidebar sizing https://github.com/bu-ist/r-editorial/issues/783
- Fix Photo essay Modal Keyboard Navigation https://github.com/bu-ist/r-editorial/issues/827

## 0.2.18
- Leadin Block: fix image caption position for text-over-image style. This moves the caption up below the photo on small device sizes instead of the caption displaying below the hed/dek of the leadin block.

## 0.2.17
- Add new End of Article paragraph styles. Refactor to manual paragraph style fixes this issue in r-editorial: https://github.com/bu-ist/r-editorial/issues/876
- Intro Paragraph Block Bugs:
  - fixes: https://github.com/bu-ist/r-editorial/issues/869
  - Fix dropcap rendering bugs
  - update SVG output to improve rendering
  - fix bugs causing dropcap rendering problems in Responsive Framework (without BU Prepress)
  - test deprecation feature of old block markup

## 0.2.16
- Adds a caching layer for the Related Stories block manual posts option.
- Fix stats block width of small text: https://github.com/bu-ist/bu-blocks/pull/236
- Fix leadin block Admin preview rendering bug: https://github.com/bu-ist/bu-blocks/pull/237

## 0.2.15
- fixes a bug that prevented photo essay image captions from rendering HTML (bold/italic) properly. HTML was escaped as text.

## 0.2.14
- fixes: https://github.com/bu-ist/r-editorial/issues/816
- fixes: https://github.com/bu-ist/r-editorial/issues/817
- Adds a media credit field for the background photo on the pullquote block.
- renames the pullquote block "BU Pullquote" to distinguish it from the default WP pullquote block
- Fix a click-through bug with the `pop` style pullquote when the curly quote character div overlaps nearby content preventing clicks on links. `pointer-events:none` should be a sufficient fix in all browsers except old IE.
- fixes: https://github.com/bu-ist/r-editorial/issues/808
- Adjusts margin on drawer block
- Adjusts alignleft and alignright styles for drawer block
- Adjusts editor styles for drawer block
- Background Component: add styles for opacity directly on image tags added by the Background Component shared in many blocks. Specifically in this case to add opacity support to the Billboard block.
- fixes aggresive crop on photo gallery block in https://github.com/bu-ist/r-editorial/issues/746


## 0.2.13
- Fixes editor side column classes for photo essay, photos now sized correctly
- Merges long running branch(s) to update plugin codebase to support upgrade to WP 5.x. from Jeremy Felt.
- Fixes error causing posttext,pretext format api formats to appear on all toolbars after update branch changes. https://github.com/bu-ist/bu-blocks/pull/222

## 0.2.12
- added theme color styles for pull quote block.
- added image opacity styles for pull quote.
- Fix photo essay caption colors in Editor
- Fix button text color when in `<p>` tag https://github.com/bu-ist/bu-blocks/pull/209
- Update headline anchor setting https://github.com/bu-ist/bu-blocks/pull/207
- Only call `onChange` on Background component if it exists as a function #206
- Use post date as pre-formatted in related stories list #205
- Remove unused "Sample" and "Block" blocks #204
- Add Post Type Block Filtering: https://github.com/bu-ist/bu-blocks/pull/199


## 0.2.11
- Fix editor bugs in Click to tweet Block
  - Twitter icons now use Dashicons in Editor and BU Icons on frontend
  - Improved editor styles
- Fixed Stat Block light and dark default colors on top circle.
- Added user friendly labels to stat block (Bottom Circle, Top Circle).
- Fixed IE related bugs preventing circle stroke from displaying correctly.

## 0.2.10
- Background Component Updates
    - Add an `onChange` property to allow blocks the opportunity for custom handling.
    - Fix uploads when an image size is defined.
    - Enhance the upload experience by temporarily setting a placeholder while the media is loading.
- Fix a JS error when Custom HTML block is first auto-saved.
- Introduce a global `publicationSlug()` component that provides either a publication slug via BU Prepress or a fallback to `bu-blocks` in cases where one is expected.
- fixes: bu-ist/r-editorial#793 drawer & modal block bug if multiple blocks are on the same page.
- Introduce the `Click to Tweet` format.
- Introduce the `Stats` block.

## 0.2.9
- Allow HTML in Listicle Caption. https://github.com/bu-ist/r-editorial/pull/775

## 0.2.8
- Fix publication class handling in Leadin block: Fixes part of #160. This was throwing an error and preventing this block and all those after it from loading up if bu-prepress was not activated.
- Initial styles and frontend markup for the Stat Block

## 0.2.7
- Leadin Block caption and Tag placement fixes when text is aligned on top of image

## 0.2.6
- Replace AaronHolbrook\Autoload with require statements
- Leadin Block Updates
    - Fixed the content ordering to accomidate the image caption.
- Add bottom margin to tag in leadin
- Increase leadin tag bottom margin
   - Fixes https://github.com/bu-ist/r-editorial/issues/698
- Adjust leadin block prepress tag line height

## 0.2.5

- Fix sizing of Square Photos in Photo Essay blocks (https://github.com/bu-ist/bu-blocks/pull/161)
- Leadin Block Updates:
 - Added an alternate default style (similar to image-to-text and text-to-image but without with any extensive styling.
 - Fixed numerous bugs with video positioning, some of the styles where tied to video as loop, but now the autoplay loop function should have no affect no how the video is positioned.
 - Added a Video Uncropped option to is-style-text-to-image and is-style-image-to-text, so that the video can work more as content rather than a cinemagraph in these layouts
  - See: https://github.com/bu-ist/bu-blocks/pull/159



## 0.2.4
- Fix Autoplay for videos switch in Background Component

## 0.2.3
- Adjust font weight of listicle header
- Update escaping in the Leadin and Related Stories blocks to allow for limited (italic and bold) HTML in post titles, heds, and deks
- Add a toggle control for hiding the bottom divider of the Listicle block (bu-ist/r-editorial#584)

## 0.2.2

Updates the master branch with the currently released codebase in production that had been developed on the #develop branch initially.

## Unreleased
