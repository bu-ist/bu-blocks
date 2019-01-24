!function(e){function t(l){if(n[l])return n[l].exports;var a=n[l]={i:l,l:!1,exports:{}};return e[l].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,n){var l,a;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var a=typeof l;if("string"===a||"number"===a)e.push(l);else if(Array.isArray(l)&&l.length){var o=n.apply(null,l);o&&e.push(o)}else if("object"===a)for(var i in l)r.call(l,i)&&l[i]&&e.push(i)}}return e.join(" ")}var r={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?(n.default=n,e.exports=n):(l=[],void 0!==(a=function(){return n}.apply(t,l))&&(e.exports=a))}()},function(e,t,n){"use strict";var l=(wp.i18n.__,wp.data),a=l.select,r=l.dispatch,o=a("core/editor"),i=o.getEditorSettings,c=r("core/editor"),s=c.updateEditorSettings,u=function(){var e=i().colors,t=i().buDefaultThemes,n=i().buPublicationThemes,l=document.getElementById("bu_publication_owner").value,a=n&&n[l]?n[l]:t;if(!a.some(function(t){return e.includes(t)})){var r=e.concat(a);s({colors:r})}return a};t.a=u},function(e,t,n){"use strict";function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=n(0),r=n.n(a),o=n(22),i=(n.n(o),n(23));n.d(t,"a",function(){return i.a});var c=wp.i18n.__,s=wp.element.Fragment,u=wp.components,p=u.BaseControl,m=u.IconButton,d=u.PanelBody,b=u.RangeControl,g=u.Toolbar,f=wp.editor,h=f.BlockControls,w=f.InspectorControls,v=f.MediaPlaceholder,y=f.MediaUpload,E=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bu-blocks-background",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Background Settings",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:["image","video"],i=e.attributes,u=e.setAttributes,f=i.backgroundId,E=i.backgroundType,C=i.backgroundUrl,k=i.backgroundOpacity,x=i.backgroundAlt,_=function(e){if(!e||!e.url)return void u({backgroundId:void 0,backgroundType:void 0,backgroundUrl:void 0,backgroundAlt:void 0});var t=void 0;if(e.media_type)t="image"===e.media_type?"image":"video";else{if("image"!==e.type&&"video"!==e.type)return;t=e.type}u({backgroundId:e.id,backgroundType:t,backgroundUrl:e.url,backgroundAlt:e.alt})},N=function(){u({backgroundId:void 0,backgroundType:void 0,backgroundUrl:void 0})},O=wp.element.createElement(s,null,!!C&&wp.element.createElement(h,null,wp.element.createElement(g,null,wp.element.createElement(y,{onSelect:_,allowedMediaTypes:o,value:f,render:function(e){var t=e.open;return wp.element.createElement(m,{className:"components-toolbar__control",label:c("Edit Background Media"),icon:"edit",onClick:t})}}),wp.element.createElement(m,{className:"components-toolbar__control",label:"Remove Background Media",icon:"no",onClick:N}))),wp.element.createElement(w,null,wp.element.createElement(d,{title:a},!C&&wp.element.createElement(p,null,wp.element.createElement(v,{icon:"format-image",className:n,labels:{title:c("Background Media"),instructions:c("Drag, upload, or select a file from your library.")},onSelect:_,allowedTypes:o})),!!C&&wp.element.createElement(p,{label:c("Background Media")},wp.element.createElement("div",{className:"components-bu-background-media"},wp.element.createElement(y,{onSelect:_,allowedTypes:o,value:f,render:function(e){var t=e.open;return wp.element.createElement(m,{onClick:t,icon:"edit",label:c("Edit Background Media"),isDefault:!0,isLarge:!0},c("Edit"))}}),wp.element.createElement(m,{onClick:N,icon:"no",label:"Remove Background Media",isDefault:!0,isLarge:!0},c("Remove")))),wp.element.createElement(p,null,wp.element.createElement(b,{label:c("Background Opacity"),value:k,onChange:function(e){return u({backgroundOpacity:e})},min:10,max:100,step:10}))))),T=function(e){return 100===e?null:"has-background-opacity-"+10*Math.round(e/10)},P=r()(n,(t={},l(t,"has-background-opacity",100!==k),l(t,T(k),T(k)),t)),j=wp.element.createElement("img",{className:P,src:C,alt:x}),I=wp.element.createElement("video",{className:P,autoPlay:!0,muted:!0,loop:!0,src:C});return wp.element.createElement(s,null,O,"image"===E&&j,"video"===E&&I)};t.b=E},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(4),n(7),n(13),n(18),n(24),n(27),n(31),n(34),n(37),n(40),n(44),n(47)},function(e,t,n){"use strict";var l=n(5),a=(n.n(l),n(6));n.n(a)},function(e,t){},function(e,t){},function(e,t,n){"use strict";var l=n(8),a=(n.n(l),n(9)),r=(n.n(a),n(10)),o=n(11),i=(n.n(o),n(12)),c=(n.n(i),wp.i18n.__),s=wp.blocks.registerBlockType,u=wp.element.Fragment,p=wp.editor,m=p.RichText,d=p.BlockControls,b=wp.data.select,g=document.getElementById("bu_publication_owner").value;s("editorial/headline",{title:c("Headline"),description:c("Add a section heading with an anchor and pre- and post-text formatting options."),icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},wp.element.createElement("path",{fill:"#c00",d:"M5 4v3h5.5v12h3V7H19V4z"}),wp.element.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),category:"bu-editorial",supports:{anchor:!0},attributes:{content:{type:"string",source:"html",selector:".wp-block-editorial-headline"},level:{type:"number",default:2},anchor:{type:"string",source:"attribute",attribute:"id",selector:".wp-block-editorial-headline"}},styles:[{name:"default",label:c("Regular"),isDefault:!0},{name:"emphasis-weight",label:c("Emphasize weight")},{name:"emphasis-color",label:c("Emphasize color")}],publicationClassName:g+"-block-editorial-headline",edit:function(e){var t=e.attributes,n=e.setAttributes,l=e.className,a=e.clientId,o=t.content,i=t.level,s=t.anchor,p="h"+i;if(!s){var g=b("core/editor").getBlocks(),f=g.filter(function(e){return"editorial/headline"===e.name}),h=f.findIndex(function(e){return e.clientId===a});n({anchor:"headline-"+(h+1)})}return wp.element.createElement(u,null,wp.element.createElement(d,null,wp.element.createElement(r.a,{minLevel:2,maxLevel:5,selectedLevel:i,onChange:function(e){return n({level:e})}})),wp.element.createElement(m,{tagName:p,className:l,value:o,onChange:function(e){return n({content:e})},placeholder:c("Write headline\u2026"),formattingControls:["pretext","posttext","bold","italic"]}))},save:function(e){var t=e.attributes,n=t.content,l=t.level,a="h"+l;return wp.element.createElement(m.Content,{tagName:a,value:n})}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),i=wp.i18n,c=i.__,s=i.sprintf,u=wp.element.Component,p=wp.components.Toolbar,m=function(e){function t(){return l(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),o(t,[{key:"createLevelControl",value:function(e,t,n){return{icon:"heading",title:s(c("Heading %d"),e),isActive:e===t,onClick:function(){return n(e)},subscript:String(e)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.minLevel,l=t.maxLevel,a=t.selectedLevel,r=t.onChange,o=Array.from({length:l-n},function(e,t){return t+n});return wp.element.createElement(p,{controls:o.map(function(t){return e.createLevelControl(t,a,r)})})}}]),t}(u);t.a=m},function(e,t){var n=wp.i18n.__,l=wp.element.Fragment,a=wp.richText,r=a.registerFormatType,o=a.toggleFormat,i=wp.editor,c=i.RichTextToolbarButton,s=i.RichTextShortcut,u="editorial/pretext";r(u,{title:n("Pretext"),tagName:"span",className:"wp-block-editorial-headline-pretext",edit:function(e){var t=e.isActive,a=e.value,r=e.onChange,i=function(){return r(o(a,{type:u}))};return wp.element.createElement(l,null,wp.element.createElement(s,{type:"access",character:"a",onUse:i}),wp.element.createElement(c,{name:"pretext",icon:"warning",title:n("Pretext"),onClick:i,isActive:t,shortcutType:"access",shortcutCharacter:"a"}))}})},function(e,t){var n=wp.i18n.__,l=wp.element.Fragment,a=wp.richText,r=a.registerFormatType,o=a.toggleFormat,i=wp.editor,c=i.RichTextToolbarButton,s=i.RichTextShortcut,u="editorial/posttext";r(u,{title:n("Posttext"),tagName:"span",className:"wp-block-editorial-headline-posttext",edit:function(e){var t=e.isActive,a=e.value,r=e.onChange,i=function(){return r(o(a,{type:u}))};return wp.element.createElement(l,null,wp.element.createElement(s,{type:"access",character:"b",onUse:i}),wp.element.createElement(c,{name:"posttext",icon:"warning",title:n("Posttext"),onClick:i,isActive:t,shortcutType:"access",shortcutCharacter:"b"}))}})},function(e,t,n){"use strict";function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=n(0),r=n.n(a),o=n(14),i=(n.n(o),n(15)),c=(n.n(i),n(16)),s=n(17),u=wp.i18n.__,p=wp.blocks.registerBlockType,m=wp.editor,d=m.getColorClassName,b=m.InnerBlocks,g=document.getElementById("bu_publication_owner").value,f=p("editorial/aside",{title:u("Aside"),description:u("Add an aside with related information. Accepts image, headline, paragraph, and button blocks as children."),icon:"format-aside",category:"bu-editorial",supports:{align:["left","right"]},attributes:{themeColor:{type:"string"}},publicationClassName:g+"-block-aside",edit:s.a,save:function(e){var t=e.attributes,n=e.className,a=t.themeColor,o=r()(n,l({},d("background",a),d("background",a)));return wp.element.createElement("aside",{className:o},wp.element.createElement(b.Content,null))}}),h=[["core/image"],["core/heading",{placeholder:"Enter aside title\u2026"}],["core/paragraph",{placeholder:"Enter aside content\u2026"}],["core/button"]];Object(c.a)(f,h)},function(e,t){},function(e,t){},function(e,t,n){"use strict";var l=wp.blocks.registerBlockType,a=wp.element.createElement,r=wp.hooks.addFilter,o=function(e,t){var n=e.name,o=e.title,i=e.edit,c=e.save,s=Object.assign({},e),u=n.split("/"),p=function(e,t){return s.name===t&&(e=e.replace(/-preset/i,"")),e};s.name=u[0]+"-preset/"+u[1],s.title=o+" (preset)",s.category="bu-editorial-presets",s.save=c,s.edit=function(e){return a(i,Object.assign(e,{presetTemplate:t}))},l(s.name,s),r("blocks.getBlockDefaultClassName","bu-blocks/preset-block-class-name/",p)};t.a=o},function(e,t,n){"use strict";function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),s=n(1),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),p=wp.i18n.__,m=wp.element,d=m.Component,b=m.Fragment,g=wp.compose.compose,f=wp.editor,h=f.InnerBlocks,w=f.InspectorControls,v=f.PanelColorSettings,y=f.withColors,E=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.themeColor,a=e.setThemeColor,r=e.presetTemplate,o=["core/image","core/heading","core/paragraph","core/button"],i=c()(t,l({},"has-"+n.slug+"-background",n.slug));return wp.element.createElement(b,null,wp.element.createElement(w,null,wp.element.createElement(v,{title:p("Color Settings"),colorSettings:[{value:n.color,onChange:a,label:p("Theme"),disableCustomColors:!0,colors:Object(s.a)()}]})),wp.element.createElement("aside",{className:i},wp.element.createElement(h,{allowedBlocks:o,template:r})))}}]),t}(d);t.a=g([y("themeColor")])(E)},function(e,t,n){"use strict";function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=n(0),r=n.n(a),o=n(19),i=(n.n(o),n(20)),c=(n.n(i),n(21)),s=n(2),u=wp.i18n.__,p=wp.blocks.registerBlockType,m=wp.editor.getColorClassName,d=wp.editor.InnerBlocks,b=wp.data.select,g=b("core/editor"),f=g.hasSelectedInnerBlock,h=g.isBlockSelected,w=document.getElementById("bu_publication_owner").value;p("editorial/modal",{title:u("Modal"),description:u("A block with a callout for opening a modal with supplemental or complementary information."),icon:"admin-page",category:"bu-editorial",attributes:Object.assign({clientId:{type:"number"},themeColor:{type:"string"},calloutHeading:{type:"array",source:"children",selector:"h1"},calloutText:{type:"array",source:"children",selector:".editorial-modal-callout-text"},trigger:{type:"array",source:"children",selector:".js-bu-block-modal-trigger-overlay"}},s.a),publicationClassName:w+"-block-modal",getEditWrapperProps:function(e){var t=e.clientId;if(t){return{"data-selected-modal":f(t,!0)||h(t)?"true":void 0}}},edit:c.a,save:function(e){var t,n=e.attributes,a=e.className,o=n.themeColor,i=n.calloutHeading,c=n.calloutText,u=n.trigger,p=n.backgroundId,b=r()(a,"js-bu-block-modal",(t={},l(t,m("theme",o),m("theme",o)),l(t,"has-media",p),t));return wp.element.createElement("aside",{className:b},wp.element.createElement("div",{className:"wp-block-editorial-modal-callout"},wp.element.createElement("div",{className:"wp-block-editorial-modal-media"},wp.element.createElement("figure",{className:"wp-block-editorial-modal-image"},Object(s.b)(e,"banner-placeholder"))),wp.element.createElement("div",{className:"wp-block-editorial-modal-callout-content"},wp.element.createElement("div",{className:"modal-valign"},wp.element.createElement("h1",null,i),wp.element.createElement("p",{className:"editorial-modal-callout-text"},c),wp.element.createElement("p",null,wp.element.createElement("a",{href:"#",className:"js-bu-block-modal-trigger-overlay button"},u))))),wp.element.createElement("div",{className:"wp-block-editorial-modal-content js-bu-block-modal-overlay"},wp.element.createElement("div",{className:"overlay overlay-scale"},wp.element.createElement("a",{href:"#",class:"wp-block-editorial-modal-overlay-close js-bu-block-modal-overlay-close"},"Close"),wp.element.createElement("article",null,wp.element.createElement(d.Content,null)))))}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),s=n(1),u=n(2),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),m=wp.i18n.__,d=wp.element,b=d.Component,g=d.Fragment,f=wp.compose.compose,h=wp.editor,w=h.InspectorControls,v=h.InnerBlocks,y=h.PanelColorSettings,E=h.RichText,C=h.withColors,k=wp.data.select,x=k("core/editor"),_=x.hasSelectedInnerBlock,N=x.isBlockSelected,O=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),p(t,[{key:"render",value:function(){var e,t=this.props,n=t.attributes,a=t.themeColor,r=t.setThemeColor,o=t.setAttributes,i=t.className,p=t.clientId,d=n.backgroundId,b=n.calloutHeading,f=n.calloutText,h=n.trigger,C=c()(i,(e={},l(e,"has-"+a.slug+"-theme",a.slug),l(e,"has-media",d),e));return(_(p,!0)||N(p))&&o({clientId:p}),wp.element.createElement(g,null,wp.element.createElement(w,null,wp.element.createElement(y,{title:m("Theme Settings"),colorSettings:[{value:a.color,onChange:r,label:m("Theme"),disableCustomColors:!0,colors:Object(s.a)()}]})),wp.element.createElement("aside",{className:C},wp.element.createElement("div",{className:"wp-block-editorial-modal-callout"},wp.element.createElement("div",{className:"wp-block-editorial-modal-media"},wp.element.createElement("figure",{className:"wp-block-editorial-modal-image"},Object(u.b)(this.props,"banner-placeholder","Callout Background"))),wp.element.createElement("div",{className:"wp-block-editorial-modal-callout-content"},wp.element.createElement("div",{className:"modal-valign"},wp.element.createElement(E,{tagName:"h1",onChange:function(e){return o({calloutHeading:e})},value:b,placeholder:m("Enter heading\u2026"),formattingControls:[]}),wp.element.createElement(E,{tagName:"p",onChange:function(e){return o({calloutText:e})},value:f,placeholder:m("Enter text\u2026"),formattingControls:["bold","italic","link"]}),wp.element.createElement("div",{className:"wp-block-editorial-modal-trigger-wrapper"},wp.element.createElement(E,{tagName:"p",className:"js-bu-block-modal-trigger-overlay button",onChange:function(e){return o({trigger:e})},value:h,placeholder:m("Enter trigger label\u2026"),formattingControls:[]}))))),wp.element.createElement("div",{className:"wp-block-editorial-modal-content js-bu-block-modal-overlay"},wp.element.createElement("div",{className:"overlay overlay-scale"},wp.element.createElement("a",{href:"#",class:"wp-block-editorial-modal-overlay-close js-bu-block-modal-overlay-close"},"Close"),wp.element.createElement("article",null,wp.element.createElement(v,null))))))}}]),t}(b);t.a=f([C("themeColor")])(O)},function(e,t){},function(e,t,n){"use strict";var l={backgroundId:{type:"number"},backgroundType:{type:"string"},backgroundUrl:{type:"string"},backgroundOpacity:{type:"number",default:100},backgroundAlt:{type:"string"}};t.a=l},function(e,t,n){"use strict";function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=n(25),r=(n.n(a),n(26)),o=(n.n(r),n(0)),i=n.n(o),c=n(1),s=wp.i18n.__,u=wp.blocks,p=u.createBlock,m=u.registerBlockType,d=wp.element.Fragment,b=wp.components,g=b.IconButton,f=b.PanelBody,h=b.Toolbar,w=wp.editor,v=w.RichText,y=w.PlainText,E=w.InspectorControls,C=w.MediaPlaceholder,k=w.MediaUpload,x=w.MediaUploadCheck,_=w.PanelColorSettings,N=w.withColors,O=document.getElementById("bu_publication_owner").value,T=function(e,t){return wp.element.createElement("svg",null,wp.element.createElement("pattern",{id:"dropcap-texture",viewBox:"0 0 1024 1024",patternUnits:"userSpaceOnUse",width:"100%",height:"100%",x:"0%",y:"0%"},wp.element.createElement("image",{href:t,width:"1024",height:"1024"})),wp.element.createElement("text",{textAnchor:"start",x:"0",y:"50%",dy:".404em",className:"dropcap-filltext"},e))};m("editorial/introparagraph",{title:s("Intro Paragraph"),description:s("Add an introduction with a bulleted list and styled paragraph."),icon:wp.element.createElement("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true",focusable:"false"},wp.element.createElement("path",{fill:"#c00",d:"M11 5v7H9.5C7.6 12 6 10.4 6 8.5S7.6 5 9.5 5H11m8-2H9.5C6.5 3 4 5.5 4 8.5S6.5 14 9.5 14H11v7h2V5h2v16h2V5h2V3z"})),category:"bu-editorial",supports:{anchor:!0},attributes:{heading:{type:"string",source:"html",selector:".wp-block-editorial-introparagraph h4"},list:{type:"string",source:"html",selector:".wp-block-editorial-introparagraph-toc"},content:{type:"string",source:"html",selector:".wp-block-editorial-introparagraph-content p"},dropCapColor:{type:"string",default:""},paragraphColor:{type:"string",default:""},className:{type:"string",default:""},dropCapImageURL:{type:"string",default:""},dropCapImageId:{type:"number"}},styles:[{name:"default",label:s("Regular"),isDefault:!0},{name:"large",label:s("Large paragraph text")},{name:"split",label:s("Split paragraph text")},{name:"dropcap-boxed",label:s("Boxed dropcap")},{name:"dropcap-outlined",label:s("Outlined dropcap")},{name:"dropcap-dimensional",label:s("Dimensional dropcap")},{name:"dropcap-image",label:s("Image dropcap")}],publicationClassName:O+"-block-editorial-introparagraph",edit:N("paragraphColor","dropCapColor")(function(e){var t,n=e.attributes,a=e.className,r=e.insertBlocksAfter,o=e.setAttributes,u=e.paragraphColor,m=e.setParagraphColor,b=e.dropCapColor,w=e.setDropCapColor,N=e.publicationClassName,O=n.heading,P=n.content,j=n.list,I=n.dropCapImageURL,B=n.dropCapImageId,S=a.includes("is-style-dropcap");S?o({paragraphColor:""}):S||o({dropCapColor:""});var A=a.includes("is-style-dropcap-image"),R="";"undefined"!==typeof P&&(R=P.charAt(0));var L=function(e){if(!e||!e.url)return void o({dropCapImageURL:"",dropCapImageId:null});o({dropCapImageURL:e.url,dropCapImageId:e.id})},M=function(){o({dropCapImageURL:"",dropCapImageId:null})},F=i()(a,N,(t={"has-dropcap":S},l(t,"has-dropcap-color-"+b.slug,S&&b&&b.slug),l(t,"has-paragraph-color-"+u.slug,!S&&u&&u.slug),t));return wp.element.createElement(d,null,wp.element.createElement(E,null,!S&&function(){return wp.element.createElement(_,{title:s("Paragraph color"),colorSettings:[{value:u.color,onChange:m,label:s("Paragraph"),disableCustomColors:!0,colors:Object(c.a)()}]})}(),S&&!A&&function(){return wp.element.createElement(_,{title:s("Drop cap color"),colorSettings:[{value:b.color,onChange:w,label:s("Drop cap"),disableCustomColors:!0,colors:Object(c.a)()}]})}(),S&&A&&function(){return wp.element.createElement(f,{title:s("Drop cap image settings")},""!==I&&wp.element.createElement(x,null,wp.element.createElement(h,null,wp.element.createElement(k,{onSelect:L,value:B,render:function(e){var t=e.open;return wp.element.createElement("div",null,wp.element.createElement(g,{className:"components-toolbar__control",label:"Edit image",icon:"edit",onClick:t}),wp.element.createElement(g,{icon:"no-alt",onClick:M,className:"blocks-gallery-image__remove",label:"Remove image"}))}})),wp.element.createElement("img",{src:I})),wp.element.createElement(C,{key:"drop-cap-image",icon:"format-image",label:"Drop Cap Image",labels:{title:"Drop Cap Image",name:"images"},onSelect:L}))}()),wp.element.createElement("div",{className:F},wp.element.createElement(y,{tagname:"h4",value:O,onChange:function(e){return o({heading:e})},placeholder:s("Enter Teaser Headline (optional)")}),wp.element.createElement(v,{multiline:"li",tagname:"ul",onChange:function(e){return o({list:e})},value:j,wrapperClassName:"wp-block-editorial-introparagraph-toc",placeholder:s("Enter Teaser Intro List (optional)"),formattingControls:["link"]}),wp.element.createElement("div",{className:"wp-block-editorial-introparagraph-content"},A&&T(R,I),wp.element.createElement(v,{tagname:"p",value:P,onChange:function(e){return o({content:e})},placeholder:s("Write paragraph\u2026"),formattingControls:["bold","italic"],unstableOnSplit:r?function(e,t){for(var n=arguments.length,l=Array(n>2?n-2:0),a=2;a<n;a++)l[a-2]=arguments[a];o({content:e}),r([].concat(l,[p("core/paragraph",{content:t})]))}:void 0}))))}),save:function(e){var t,n=e.attributes,a=n.heading,r=n.list,o=n.content,c=n.dropCapColor,s=n.dropCapImageURL,u=n.paragraphColor,p=n.className,m=n.publicationClassName,d=!1;"undefined"!==typeof p&&(d=p.includes("is-style-dropcap-image"));var b="";"undefined"!==typeof o&&(b=o.charAt(0));var g=!0;("undefined"===typeof r||"<li></li>"===r||v.isEmpty(r))&&(g=!1);var f=p&&p.includes("is-style-dropcap"),h=i()(p,m,(t={"has-dropcap":f},l(t,"has-dropcap-color-"+c,f&&c),l(t,"has-paragraph-color-"+u,!f&&u),t));return wp.element.createElement("div",{className:h},!v.isEmpty(a)&&wp.element.createElement(v.Content,{tagName:"h4",value:a}),g&&wp.element.createElement(v.Content,{tagName:"ul",className:"wp-block-editorial-introparagraph-toc",value:r,multiline:"li"}),!v.isEmpty(o)&&wp.element.createElement("div",{className:"wp-block-editorial-introparagraph-content"},d&&T(b,s),wp.element.createElement(v.Content,{tagName:"p",value:o})))}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=n(0),r=n.n(a),o=n(28),i=(n.n(o),n(29)),c=(n.n(i),n(30)),s=n(2),u=wp.i18n.__,p=wp.blocks.registerBlockType,m=wp.components,d=m.Path,b=m.SVG,g=wp.editor,f=g.RichText,h=g.getColorClassName,w=document.getElementById("bu_publication_owner").value,v=Object.assign({media:{},head:{type:"array",source:"children",selector:".head"},deck:{type:"array",source:"children",selector:".deck"},imageFocus:{type:"string",default:"center-middle"},textPositionX:{type:"string",default:"x-center"},textPositionY:{type:"string",default:""},wide:{type:"bool"},box:{type:"bool"},flip:{type:"bool"},className:{type:"string"},themeColor:{type:"string"},primaryTerm:{type:"string"}},s.a),y=[{name:"text-to-image",label:u("Text over Horizontal Image")},{name:"image-to-text",label:u("Horizontal Image over Text")},{name:"emphasis-on-text",label:u("Overlapping Text")},{name:"text-over-image",label:u("Image with Text Overlay")},{name:"side-by-side",label:u("Vertical Image and Text Side By Side")}],E={className:!1,customClassName:!1,multiple:!1};p("bu/leadin",{title:u("Leadin"),description:u("The opening headline and image of an article."),icon:wp.element.createElement(b,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement(d,{fill:"#c00",d:"M19 7h-1V5h-4v2h-4V5H6v2H5c-1.1 0-2 .9-2 2v10h18V9c0-1.1-.9-2-2-2zm0 10H5V9h14v8z"})),category:"bu",attributes:v,styles:y,supports:E,edit:c.a,save:function(e){var t,n=e.attributes,a=n.backgroundId,o=n.head,i=n.deck,c=n.imageFocus,u=n.textPositionX,p=n.textPositionY,m=n.wide,d=n.box,b=n.flip,g=n.className,v=n.themeColor,y=n.primaryTerm,E=g&&g.includes("is-style-emphasis-on-text"),C=g&&g.includes("is-style-text-over-image"),k=g&&g.includes("is-style-side-by-side"),x=r()("wp-block-leadin",w+"-block-leadin",g,(t={"has-box":d&&(E||C||k),"has-wider":m&&k,"has-flip":b&&k,"has-media":a},l(t,"has-image-focus-"+c,c),l(t,"has-text-position-"+u,u&&C),l(t,"has-text-position-"+p,p&&C),l(t,h("theme",v),h("theme",v)),t));return wp.element.createElement("div",{className:x},wp.element.createElement("div",{class:"container-lockup"},wp.element.createElement("div",{class:"wp-block-leadin-media"},Object(s.b)(e)),wp.element.createElement("div",{class:"container-words-outer"},wp.element.createElement("div",{class:"container-words-inner"},y&&wp.element.createElement("span",{class:"wp-prepress-tag"},y),wp.element.createElement(f.Content,{tagName:"h1",className:"head",value:o}),!f.isEmpty(i)&&wp.element.createElement(f.Content,{tagName:"h4",className:"deck",value:i})))))}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),s=n(1),u=n(2),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),m=wp.i18n.__,d=wp.element,b=d.Component,g=d.Fragment,f=wp.compose.compose,h=wp.components,w=h.CheckboxControl,v=h.SelectControl,y=h.PanelBody,E=wp.editor,C=E.InspectorControls,k=E.PanelColorSettings,x=E.RichText,_=E.withColors,N=document.getElementById("bu_publication_owner").value,O=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),p(t,[{key:"render",value:function(){var e,t=this.props,n=t.attributes,a=t.themeColor,r=t.setThemeColor,o=t.setAttributes,i=t.className,p=t.isSelected,d=n.backgroundId,b=n.head,f=n.deck,h=n.imageFocus,E=n.textPositionX,_=n.textPositionY,O=n.wide,T=n.box,P=n.flip,j=n.primaryTerm,I=i.includes("is-style-emphasis-on-text"),B=i.includes("is-style-text-over-image"),S=i.includes("is-style-side-by-side"),A=c()("wp-block-leadin",N+"-block-leadin",i,(e={"has-box":T&&(I||B||S),"has-wider":O&&S,"has-flip":P&&S,"has-media":d},l(e,"has-image-focus-"+h,h),l(e,"has-text-position-"+E,E&&B),l(e,"has-text-position-"+_,_&&B),l(e,"has-"+a.slug+"-theme",a.slug),e)),R=document.getElementById("_bu_prepress_primary_term_select");R&&(R.value&&o({primaryTerm:R.value}),R.addEventListener("change",function(){o({primaryTerm:R.value})}));var L=function(){return B?wp.element.createElement(g,null,wp.element.createElement(v,{label:m("Horizontal Text Positioning"),value:E,onChange:function(e){return o({textPositionX:e})},options:[{value:"x-left",label:m("Left")},{value:"x-center",label:m("Center")},{value:"x-right",label:m("Right")}]}),wp.element.createElement(v,{label:m("Vertical Text Positioning"),value:_,onChange:function(e){return o({textPositionY:e})},options:[{value:"y-top",label:m("Top")},{value:"",label:m("Center")},{value:"y-bottom",label:m("Bottom")}]})):null},M=function(){return i.includes("is-style-side-by-side")?wp.element.createElement(g,null,wp.element.createElement(w,{label:m("Flip Order"),checked:P,onChange:function(e){o({flip:e})}}),wp.element.createElement(w,{label:m("Wide Layout"),checked:O,onChange:function(e){o({wide:e})}})):null};return wp.element.createElement(g,null,wp.element.createElement("div",{className:A},wp.element.createElement("div",{class:"container-lockup"},wp.element.createElement("div",{class:"wp-block-leadin-media"},Object(u.b)(this.props,void 0,"Media")),wp.element.createElement("div",{class:"container-words-outer"},wp.element.createElement("div",{class:"container-words-inner"},j&&wp.element.createElement("span",{class:"wp-prepress-tag"},j),wp.element.createElement(x,{tagName:"h1",className:"head",placeholder:m("Add headline"),value:b,onChange:function(e){return o({head:e})},formattingControls:["bold","italic"],keepPlaceholderOnFocus:!0}),(!x.isEmpty(f)||p)&&wp.element.createElement(x,{tagName:"h4",className:"deck",placeholder:m("Add subheader (optional)"),value:f,onChange:function(e){return o({deck:e})},formattingControls:["bold","italic"]}))))),wp.element.createElement(C,null,function(){return d?wp.element.createElement(y,{title:m("Media Positioning"),initialOpen:!1},wp.element.createElement(v,{label:m("Media Focal Point"),value:h,onChange:function(e){return o({imageFocus:e})},options:[{value:"left-top",label:m("Left Top")},{value:"left-middle",label:m("Left Center")},{value:"left-bottom",label:m("Left Bottom")},{value:"center-top",label:m("Center Top")},{value:"center-middle",label:m("Center")},{value:"center-bottom",label:m("Center Bottom")},{value:"right-top",label:m("Right Top")},{value:"right-middle",label:m("Right Center")},{value:"right-bottom",label:m("Right Bottom")}]})):null}(),function(){return I||B||S?wp.element.createElement(y,{title:m("Layout Options")},M(),L(),wp.element.createElement(w,{label:m("Boxed Text"),checked:T,onChange:function(e){o({box:e})}})):null}(),wp.element.createElement(k,{title:m("Color Settings"),initialOpen:!1,colorSettings:[{value:a.color,onChange:r,label:m("Theme"),disableCustomColors:!0,colors:Object(s.a)()}]})))}}]),t}(b);t.a=f([_("themeColor")])(O)},function(e,t,n){"use strict";var l=n(32),a=(n.n(l),n(33));n.n(a)},function(e,t){},function(e,t){},function(e,t,n){"use strict";var l=n(35),a=(n.n(l),n(36));n.n(a)},function(e,t){},function(e,t){},function(e,t,n){"use strict";var l=n(38),a=(n.n(l),n(39));n.n(a)},function(e,t){},function(e,t){},function(e,t,n){"use strict";function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=n(0),r=n.n(a),o=n(41),i=(n.n(o),n(42)),c=(n.n(i),n(43)),s=wp.i18n.__,u=wp.blocks.registerBlockType,p=wp.components,m=p.G,d=p.Path,b=p.SVG,g=wp.editor,f=g.RichText,h=g.getColorClassName,w=document.getElementById("bu_publication_owner").value,v={url:{type:"string",source:"attribute",selector:"a",attribute:"href"},title:{type:"string",source:"attribute",selector:"a",attribute:"title"},text:{type:"string",source:"html",selector:"a"},themeColor:{type:"string"},icon:{type:"string"},className:{type:"string"}},y=[{name:"default",label:s("Default"),isDefault:!0},{name:"outline",label:s("Outline")},{name:"text",label:s("Text")}];"research"===w&&y.push({name:"accent",label:s("Accent")}),u("bu/button",{title:s("Button"),description:s("Prompt visitors to take action with a custom button."),icon:wp.element.createElement(b,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement(d,{fill:"none",d:"M0 0h24v24H0V0z"}),wp.element.createElement(m,null,wp.element.createElement(d,{fill:"#c00",d:"M19 6H5L3 8v8l2 2h14l2-2V8l-2-2zm0 10H5V8h14v8z"}))),category:"bu",publicationClassName:w+"-block-button",attributes:v,styles:y,supports:{className:!1,customClassName:!1,align:["left","center","right"]},edit:c.a,save:function(e){var t,n=e.attributes,a=n.url,o=n.text,i=n.themeColor,c=n.icon,s=n.className,u=r()("wp-block-button",s,w+"-block-button",(t={},l(t,h("theme",i),h("theme",i)),l(t,"icon-navigateright "+c,c),t));return wp.element.createElement("p",null,wp.element.createElement(f.Content,{tagName:"a",className:u,href:a,value:o}))}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),s=n(1),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),p=wp.i18n.__,m=wp.element,d=m.Component,b=m.Fragment,g=wp.compose.compose,f=wp.components,h=f.Button,w=f.Dashicon,v=f.IconButton,y=f.PanelBody,E=f.RadioControl,C=wp.editor,k=C.InspectorControls,x=C.PanelColorSettings,_=C.RichText,N=C.URLInput,O=C.withColors,T=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){var e,t=this.props,n=t.attributes,a=t.themeColor,r=t.setThemeColor,o=t.setAttributes,i=t.isSelected,u=t.className,m=t.publicationClassName,d=n.text,g=n.url,f=n.icon,C=c()("wp-block-button",u,m,(e={},l(e,"has-"+a.slug+"-theme",a.slug),l(e,"icon-navigateright "+f,f),e));return wp.element.createElement(b,null,wp.element.createElement(k,null,wp.element.createElement(x,{title:p("Color Settings"),colorSettings:[{value:a.color,onChange:r,label:p("Theme"),disableCustomColors:!0,colors:Object(s.a)()}]}),wp.element.createElement(y,{title:p("Icon Settings")},wp.element.createElement(E,{label:"Placement",selected:f,options:[{label:"Before text",value:"align-icon-left"},{label:"After text",value:"align-icon-right"}],onChange:function(e){o({icon:e})}}),wp.element.createElement(h,{onClick:function(){return o({icon:void 0})},label:"Clear icon settings",isDefault:!0,isSmall:!0},p("Clear")))),wp.element.createElement("p",null,wp.element.createElement(_,{placeholder:p("Add text\u2026"),value:d,onChange:function(e){return o({text:e})},formattingControls:["bold","italic"],className:C,keepPlaceholderOnFocus:!0})),i&&wp.element.createElement("form",{className:"block-library-button__inline-link",onSubmit:function(e){return e.preventDefault()}},wp.element.createElement(w,{icon:"admin-links"}),wp.element.createElement(N,{value:g,onChange:function(e){return o({url:e})}}),wp.element.createElement(v,{icon:"editor-break",label:p("Apply"),type:"submit"})))}}]),t}(d);t.a=g([O("themeColor")])(T)},function(e,t,n){"use strict";var l=n(45),a=(n.n(l),n(46));n.n(a)},function(e,t){},function(e,t){},function(e,t,n){"use strict";var l=n(48),a=(n.n(l),n(49));n.n(a)},function(e,t){},function(e,t){}]);