# Changelog

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
