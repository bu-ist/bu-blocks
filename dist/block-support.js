!function(){const{select:e}=wp.data,{applyFilters:t}=wp.hooks,{registerPlugin:l}=wp.plugins,{getBlockTypes:o}=wp.blocks;l("unregister-bu-blocks",{render:()=>{if(t("buBlocks.blockSupport.disableDefault",!1))return null;const l=t("buBlocks.blockSupport.postTypes",["post","page"]),i=e("core/editor").getCurrentPostType();if(l.includes(i))return null;const r=t("buBlocks.blockSupport.blocks",["editorial/aside","editorial-preset/aside","bu/buniverse","bu/button","editorial/custom-html","editorial/drawer","editorial/headline","editorial/introparagraph","bu/leadin","editorial/listicle","editorial/modal","editorial/photoessay","bu/pullquote","editorial/relatedstories","bu/stats"]),s=o().map((e=>e.name));return r.forEach((e=>{s.includes(e)&&wp.blocks.unregisterBlockType(e)})),null}})}();
//# sourceMappingURL=block-support.js.map