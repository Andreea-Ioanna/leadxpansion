(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./googleFontsHeading/index.js":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/vc-cake/index.js"),l=t.n(o),i=t("./node_modules/@babel/runtime/helpers/extends.js"),a=t.n(i),s=t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),r=t.n(s),c=t("./node_modules/@babel/runtime/helpers/createClass.js"),g=t.n(c),d=t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),u=t.n(d),p=t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),m=t.n(p),v=t("./node_modules/@babel/runtime/helpers/inherits.js"),f=t.n(v),h=t("./node_modules/react/index.js"),b=t.n(h),y=function(e){function n(){return r()(this,n),u()(this,m()(n).apply(this,arguments))}return f()(n,e),g()(n,[{key:"validateSize",value:function(e){var n=new RegExp("^-?\\d*(\\.\\d{0,9})?("+["px","em","rem","%","vw","vh"].join("|")+")?$");return""===e||e.match(n)?e:null}},{key:"render",value:function(){var e=this.props,n=e.id,t=e.atts,o=e.editor,l=t.text,i=t.elementTag,s=t.font,r=t.fontSize,c=t.alignment,g=t.lineHeight,d=t.letterSpacing,u=t.link,p=t.colorType,m=t.customClass,v=t.metaCustomId,f="vce-google-fonts-heading",h={},y={style:{}},x=i,k=l;if(u&&u.url){var F={href:u.url,title:u.title,target:u.targetBlank?"_blank":void 0,rel:u.relNofollow?"nofollow":void 0};k=b.a.createElement("a",a()({className:"vce-google-fonts-heading-link"},F),k)}"string"==typeof m&&m&&(f+=" "+m),r&&(r=this.validateSize(r))&&(r=/^\d+$/.test(r)?r+"px":r,y.style.fontSize=r),g&&(g=this.validateSize(g))&&(y.style.lineHeight=g),d&&(d=this.validateSize(d))&&(d=/^\d+$/.test(d)?d+"px":d,y.style.letterSpacing=d),c&&(f+=" vce-google-fonts-heading--align-".concat(c));var w=this.getMixinData("textColor");if(w)switch(p){case"gradient":f+=" vce-google-fonts-heading--gradient-".concat(w.selector);break;case"color":f+=" vce-google-fonts-heading--color-".concat(w.selector);break;default:console.warn("There was an issue assigning color type!")}if((w=this.getMixinData("fontFamily"))&&(f+=" vce-google-fonts-heading--font-family-".concat(w.selector)),s&&"active"===s.status){var S=s.fontStyle?"regular"===s.fontStyle.style?null:s.fontStyle.style:null;y.style.fontWeight=s.fontStyle?s.fontStyle.weight:null,y.style.fontStyle=S}v&&(h.id=v);var C=this.applyDO("border background animation padding margin");return b.a.createElement("div",a()({},h,{className:f},o),b.a.createElement("div",{className:"vce-google-fonts-heading-wrapper"},b.a.createElement("div",a()({className:"vce-google-fonts-heading--background vce",id:"el-"+n},C),b.a.createElement(x,a()({className:"vce-google-fonts-heading-inner"},y),k))))}}]),n}(l.a.getService("api").elementComponent);(0,l.a.getService("cook").add)(t("./googleFontsHeading/settings.json"),(function(e){e.add(y)}),{css:t("./node_modules/raw-loader/index.js!./googleFontsHeading/styles.css"),editorCss:t("./node_modules/raw-loader/index.js!./googleFontsHeading/editor.css"),mixins:{textColor:{mixin:t("./node_modules/raw-loader/index.js!./googleFontsHeading/cssMixins/textColor.pcss")},fontFamily:{mixin:t("./node_modules/raw-loader/index.js!./googleFontsHeading/cssMixins/fontFamily.pcss")}}},"")},"./googleFontsHeading/settings.json":function(e){e.exports=JSON.parse('{"designOptions":{"type":"designOptions","access":"public","value":{},"options":{"label":"Design Options"}},"editFormTab1":{"type":"group","access":"protected","value":["text","font","elementTag","colorType","color","gradientStart","gradientEnd","gradientAngle","fontSize","alignment","lineHeight","letterSpacing","link","metaCustomId","customClass"],"options":{"label":"General"}},"metaEditFormTabs":{"type":"group","access":"protected","value":["editFormTab1","designOptions"]},"relatedTo":{"type":"group","access":"protected","value":["General"]},"text":{"type":"string","access":"public","value":"The sky was cloudless and of a deep dark blue.","options":{"label":"Title text","inline":true,"inlineMode":"text","dynamicField":true}},"font":{"type":"googleFonts","access":"public","value":{"fontFamily":"Lato","fontStyle":{"weight":"400","style":"regular"},"status":"active","fontText":"The sky was cloudless and of a deep dark blue."},"options":{"label":"","cssMixin":{"mixin":"fontFamily","property":"fontFamily","namePattern":"[a-z]+","valueKey":"fontFamily"}}},"elementTag":{"type":"dropdown","access":"public","value":"h2","options":{"label":"Element tag","values":[{"label":"h1","value":"h1"},{"label":"h2","value":"h2"},{"label":"h3","value":"h3"},{"label":"h4","value":"h4"},{"label":"h5","value":"h5"},{"label":"h6","value":"h6"},{"label":"p","value":"p"},{"label":"div","value":"div"}]}},"colorType":{"type":"dropdown","access":"public","value":"color","options":{"label":"Gradient overlay type","values":[{"label":"Color","value":"color"},{"label":"Gradient","value":"gradient"}]}},"color":{"type":"color","access":"public","value":"","options":{"label":"Title color","cssMixin":{"mixin":"textColor","property":"color","namePattern":"[\\\\da-f]+"},"onChange":{"rules":{"colorType":{"rule":"value","options":{"value":"color"}}},"actions":[{"action":"toggleVisibility"}]}}},"gradientStart":{"type":"color","access":"public","value":" #FF7200","options":{"label":"Start color","cssMixin":{"mixin":"textColor","property":"gradientStart","namePattern":"[\\\\da-f]+"},"onChange":{"rules":{"colorType":{"rule":"value","options":{"value":"gradient"}}},"actions":[{"action":"toggleVisibility"}]}}},"gradientEnd":{"type":"color","access":"public","value":" #5C00FF","options":{"label":"End color","cssMixin":{"mixin":"textColor","property":"gradientEnd","namePattern":"[\\\\da-f]+"},"onChange":{"rules":{"colorType":{"rule":"value","options":{"value":"gradient"}}},"actions":[{"action":"toggleVisibility"}]}}},"gradientAngle":{"type":"range","access":"public","value":"45","options":{"label":"Gradient angle","cssMixin":{"mixin":"textColor","property":"gradientAngle","namePattern":"[\\\\d\\\\-]+"},"min":0,"max":180,"measurement":"°","onChange":{"rules":{"colorType":{"rule":"value","options":{"value":"gradient"}}},"actions":[{"action":"toggleVisibility"}]}}},"fontSize":{"type":"string","access":"public","value":"","options":{"label":"Font size"}},"alignment":{"type":"buttonGroup","access":"public","value":"left","options":{"label":"Alignment","values":[{"label":"Left","value":"left","icon":"vcv-ui-icon-attribute-alignment-left"},{"label":"Center","value":"center","icon":"vcv-ui-icon-attribute-alignment-center"},{"label":"Right","value":"right","icon":"vcv-ui-icon-attribute-alignment-right"}]}},"lineHeight":{"type":"string","access":"public","value":"","options":{"label":"Line height"}},"letterSpacing":{"type":"string","access":"public","value":"","options":{"label":"Letter spacing"}},"link":{"type":"url","access":"public","value":{"url":"","title":"","targetBlank":true,"relNofollow":false},"options":{"label":"Link selection","dynamicField":true}},"customClass":{"type":"string","access":"public","value":"","options":{"label":"Extra class name","description":"Add an extra class name to the element and refer to it from Custom CSS option."}},"metaCustomId":{"type":"customId","access":"public","value":"","options":{"label":"Element ID","description":"Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only)."}},"tag":{"type":"string","access":"protected","value":"googleFontsHeading"}}')},"./node_modules/raw-loader/index.js!./googleFontsHeading/cssMixins/fontFamily.pcss":function(e,n){e.exports=".vce-google-fonts-heading {\n  &--font-family-$selector {\n    .vce-google-fonts-heading-inner {\n      @if $fontFamily != false {\n        font-family: $fontFamily;\n      }\n    }\n  }\n}\n"},"./node_modules/raw-loader/index.js!./googleFontsHeading/cssMixins/textColor.pcss":function(e,n){e.exports=".vce-google-fonts-heading {\n  &--color-$selector {\n    .vce-google-fonts-heading-inner {\n      @if $color != false {\n        color: $color;\n      }\n    }\n  }\n  &--gradient-$selector {\n    .vce-google-fonts-heading-inner {\n      @if $gradientStart != false {\n        background-image: linear-gradient($(gradientAngle)deg, $gradientStart, $gradientEnd);\n        background-clip: text;\n        -webkit-background-clip: text;\n        color: transparent;\n      }\n    }\n  }\n}\n"},"./node_modules/raw-loader/index.js!./googleFontsHeading/editor.css":function(e,n){e.exports=".vce-google-fonts-heading {\n  min-height: 1em;\n}\n"},"./node_modules/raw-loader/index.js!./googleFontsHeading/styles.css":function(e,n){e.exports=".vce-google-fonts-heading-inner {\n  padding: 0;\n  margin-bottom: 0;\n}\n\n.vce-google-fonts-heading-inner .medium-editor-placeholder {\n  background: inherit;\n}\n\n.vce-google-fonts-heading-wrapper {\n  max-width: 100%;\n  display: inline-block;\n}\n\n.vce-google-fonts-heading-link,\n.vce-google-fonts-heading-link:hover,\n.vce-google-fonts-heading-link:focus,\n.vce-google-fonts-heading-link:visited {\n  border: none;\n  text-decoration: inherit;\n  color: inherit;\n  background: inherit;\n}\n\n.vce-google-fonts-heading--align-center {\n  text-align: center;\n}\n\n.vce-google-fonts-heading--align-right {\n  text-align: right;\n}\n\n.vce-google-fonts-heading--align-left {\n  text-align: left;\n}\n\n"}},[["./googleFontsHeading/index.js"]]]);