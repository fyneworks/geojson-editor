(function(e){function t(t){for(var n,s,a=t[0],u=t[1],c=t[2],p=0,d=[];p<a.length;p++)s=a[p],r[s]&&d.push(r[s][0]),r[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,a=1;a<o.length;a++){var u=o[a];0!==r[u]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},r={app:0},i=[];function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/geojson-editor/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=u;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"012f":function(e,t,o){},"0299":function(e,t,o){"use strict";var n=o("9929"),r=o.n(n);r.a},"034f":function(e,t,o){"use strict";var n=o("64a9"),r=o.n(n);r.a},"2dae":function(e,t,o){"use strict";var n=o("dc9f"),r=o.n(n);r.a},5490:function(e,t,o){"use strict";var n=o("bdf3"),r=o.n(n);r.a},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("097d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Row",{attrs:{id:"app"}},[o("Map"),o("Sidebar"),o("Properties")],1)},i=[],s=o("f499"),a=o.n(s),u=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("i-col",{staticClass:"mapContainer",attrs:{span:"14"}},[o("div",{attrs:{id:"map"}})])},c=[],l=o("e11e"),p=o.n(l),d=(o("6cc5"),o("6397")),f=o.n(d),m=o("584d"),g=o.n(m),h=o("e2b9"),v=o.n(h),y=(o("20d6"),o("5fbf"),o("2f62"));n["default"].use(y["a"]);var b=new y["a"].Store({state:{selectedProperties:null,requiresParseFixing:!1,requiresWindingOrderFix:!1,geojsonString:'{\n  "type": "FeatureCollection",\n  "features": []\n}',dodgyGeoJsonString:""},mutations:{setGeoJSON:function(e,t){"string"!==typeof t&&(t=a()(t,null,2)),e.geojsonString=t},setSelectedProperties:function(e,t){e.selectedProperties=t},setRequiresParsingFix:function(e,t){e.requiresParseFixing=t},setRequiresWindingOrderFix:function(e,t){e.requiresWindingOrderFix=t},setDodgyString:function(e,t){e.dodgyGeoJsonString=t},clearRequiresFixes:function(e){e.requiresWindingOrderFix=!1,e.requiresParseFixing=!1}},getters:{geojson:function(e){return JSON.parse(e.geojsonString)},featureCount:function(e){var t=JSON.parse(e.geojsonString);return"FeatureCollection"===t.type?t.features.length:"GeometryCollection"===t.type?t.geometrieslength:"Feature"===t.type?1:"Polygon"===t.type||"LineString"===t.type?1:0}}});delete p.a.Icon.Default.prototype._getIconUrl,p.a.Icon.Default.mergeOptions({iconRetinaUrl:g.a,iconUrl:f.a,shadowUrl:v.a});var O=null,x=null;function S(){x=p.a.map("map").setView([0,0],2);p.a.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',subdomains:"abcd",maxZoom:19}).addTo(x);O=p.a.geoJSON(null,{style:function(){return{color:"#666C79"}}}).addTo(x),x.addControl(new p.a.Control.Draw({position:"topright",edit:{featureGroup:O,poly:{allowIntersection:!1}},draw:{polygon:{allowIntersection:!1},circlemarker:!1,circle:!1}})),x.on("click",C),x.on(p.a.Draw.Event.DRAWSTART,function(e){x.off("click",C)}),x.on(p.a.Draw.Event.DRAWSTOP,function(){x.on("click",C)}),x.on(p.a.Draw.Event.CREATED,function(e){O.addLayer(e.layer),_(O.toGeoJSON())}),x.on(p.a.Draw.Event.EDITED,function(){_(O.toGeoJSON())}),x.on(p.a.Draw.Event.DELETED,function(){_(O.toGeoJSON())})}function C(){b.commit("setSelectedProperties",null)}function _(e){b.commit("setGeoJSON",e)}function w(e){p.a.DomEvent.stop(e),b.commit("setSelectedProperties",e.target.feature.properties)}function P(){x.fitBounds(O.getBounds())}function j(e){O.clearLayers(),O.addData(e),O.eachLayer(function(e){e.on("click",w)})}var $={name:"LeafletMap",mounted:function(){S()}},E=$,F=(o("5490"),o("2877")),M=Object(F["a"])(E,u,c,!1,null,null,null);M.options.__file="Map.vue";var k=M.exports,D=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("i-col",{staticClass:"sidebar",attrs:{span:"10"}},[o("top-menu"),o("code-area"),o("bottom-menu")],1)},T=[],R=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Row",{attrs:{id:"codeArea"}},[o("codemirror",{ref:"myCm",attrs:{value:e.code,options:e.cmOptions},on:{input:e.onCmCodeChange}})],1)},G=[],J=(o("f559"),o("ac6a"),o("8f94")),N=(o("a7be"),o("cc10"),o("31c5"),o("f9d4"),o("a8ac")),q=o.n(N),W={name:"CodeArea",components:{codemirror:J["codemirror"]},data:function(){return{errorLines:[],gutterErrors:[],requiresParseFixing:!1,errors:{},cmOptions:{tabSize:2,cursorScrollMargin:50,mode:"text/javascript",styleActiveLine:!0,lineNumbers:!0,line:!0,gutters:["CodeMirror-lint-markers"]}}},computed:{code:function(){return this.$store.state.requiresParseFixing?this.$store.state.dodgyGeoJsonString:this.$store.state.geojsonString}},methods:{onCmCodeChange:function(e){this.cleanErrorMarks(),this.errorLines=[],this.errors=q.a.hint(e);var t=!1;this.errors.forEach(function(o){o.message.startsWith("Parse error")?(t=!0,this.$store.commit("setDodgyString",e)):o.message.startsWith("Polygons and MultiPolygons")&&this.$store.commit("setRequiresWindingOrderFix",!0),this.errorLines.push(o.line)},this),this.$store.commit("setRequiresParsingFix",t),0===this.errors.length?(j(JSON.parse(e)),this.$store.commit("setGeoJSON",e),this.gutterErrors.forEach(function(e){e.remove()})):this.markErrors()},markErrors:function(){this.gutterErrors.length>0&&this.gutterErrors.forEach(function(e){e.remove()}),this.errors.forEach(function(e){this.$refs.myCm.codemirror.doc.addLineClass(e.line,"gutter","geojsonError");var t=document.createElement("div");t.classList.add("tooltip");var o=t.appendChild(document.createElement("span"));o.classList.add("tooltiptext"),o.innerHTML=e.message,this.gutterErrors.push(t),this.$refs.myCm.codemirror.addWidget({line:e.line-1,ch:0},t,!1)},this)},cleanErrorMarks:function(){this.errorLines.forEach(function(e){this.$refs.myCm.codemirror.doc.removeLineClass(e,"gutter","geojsonError")},this),this.$store.commit("clearRequiresFixes")}}},L=W,I=(o("0299"),Object(F["a"])(L,R,G,!1,null,null,null));I.options.__file="Code.vue";var B=I.exports,A=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Row",{staticClass:"topMenu"},[o("Dropdown",{attrs:{placement:"bottom-start"},on:{"on-click":e.handleFixClick}},[o("a",{attrs:{href:"javascript:void(0)"}},[o("Button",{staticClass:"topBtn"},[e._v("\n        Fix Errors "),o("Icon",{attrs:{type:"arrow-down-b"}})],1)],1),o("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[o("DropdownItem",{attrs:{name:"addMarks",disabled:e.doesntRequireParseFixing}},[e._v("\n        Fix Quotation Marks on Keys\n      ")]),o("DropdownItem",{attrs:{name:"fixWindingOrder",disabled:e.doesntRequireWindingFixing}},[e._v("\n        Fix Winding Order\n      ")])],1)],1),o("Dropdown",{attrs:{placement:"bottom-start"},on:{"on-click":e.handleToolClick}},[o("a",{attrs:{href:"javascript:void(0)"}},[o("Button",{staticClass:"topBtn"},[e._v("\n        Tools "),o("Icon",{attrs:{type:"arrow-down-b"}})],1)],1),o("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[o("DropdownItem",{attrs:{name:"createRandomPoints"}},[e._v("\n        Create Random Points\n      ")]),o("DropdownItem",{attrs:{name:"zoomTo"}},[e._v("\n        Zoom to Features\n      ")]),o("DropdownItem",{attrs:{name:"multipartToSinglepart"}},[e._v("\n        Convert Multipart to Singlepart geometries\n      ")])],1)],1),o("Button",{staticClass:"topBtn right",on:{click:e.clearFeatures}},[e._v("\n    Clear "+e._s(e.featureCount)+" "+e._s(1!==e.featureCount?"features":"feature")+"\n  ")]),o("Modal",{attrs:{"ok-text":"Ok","cancel-text":"Cancel"},on:{"on-ok":e.createRandomPoints},model:{value:e.pointsModalOpen,callback:function(t){e.pointsModalOpen=t},expression:"pointsModalOpen"}},[o("p",[o("strong",[e._v("Number of points to create")])]),o("Input",{staticStyle:{width:"300px"},attrs:{number:!0,placeholder:"100"},model:{value:e.numberOfPoints,callback:function(t){e.numberOfPoints=t},expression:"numberOfPoints"}})],1)],1)},z=[],K=(o("a481"),o("df21")),U=o("becd"),Z=o("12ef"),V={name:"TopMenu",data:function(){return{pointsModalOpen:!1,numberOfPoints:100}},computed:{doesntRequireParseFixing:function(){return!this.$store.state.requiresParseFixing},doesntRequireWindingFixing:function(){return!this.$store.state.requiresWindingOrderFix},featureCount:function(){return this.$store.getters.featureCount},currentGeojson:function(){return this.$store.getters.geojson}},methods:{clearFeatures:function(){this.$store.commit("setGeoJSON",{type:"FeatureCollection",features:[]})},handleFixClick:function(e){"addMarks"===e&&this.addMarks(),"fixWindingOrder"===e&&this.fixWindingOrder()},handleToolClick:function(e){"createRandomPoints"===e&&(this.pointsModalOpen=!0),"zoomTo"===e&&P(),"multipartToSinglepart"===e&&this.convertMultipart()},convertMultipart:function(){this.$store.commit("setGeoJSON",Object(U["a"])(this.currentGeojson))},createRandomPoints:function(){var e=Object(Z["randomPoint"])(this.numberOfPoints,{bbox:[-180,-90,180,90]});this.$store.commit("setGeoJSON",{type:"FeatureCollection",features:this.currentGeojson.features.concat(e.features)})},addMarks:function(){var e=this.$store.state.dodgyGeoJsonString.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:([^\/])/g,'"$2":$4');this.$store.commit("setDodgyString",""),this.$store.commit("setGeoJSON",e),this.$store.commit("setRequiresParsingFix",!1)},fixWindingOrder:function(){var e=Object(K["a"])(this.$store.getters.geojson);this.$store.commit("setGeoJSON",e)}}},H=V,Q=(o("fbea"),Object(F["a"])(H,A,z,!1,null,null,null));Q.options.__file="TopMenu.vue";var X=Q.exports,Y=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Row",{attrs:{id:"bottomMenu"}},[o("Button",{staticClass:"pad",on:{click:e.copy}},[e._v("\n    Copy to clipboard\n  ")]),o("ButtonGroup",[o("Button",{on:{click:e.saveToGeojson}},[e._v("\n      Save as geojson\n    ")]),o("Dropdown",{attrs:{trigger:"click",placement:"top-end"},on:{"on-click":e.saveInFormats}},[o("a",{attrs:{href:"javascript:void(0)"}},[o("Button",{attrs:{icon:"arrow-up-b"}})],1),o("DropdownMenu",{attrs:{slot:"list"},slot:"list"},e._l(e.supportedFormats,function(t){return o("DropdownItem",{key:t.value,attrs:{name:t.value}},[e._v("\n          "+e._s(t.label)+"\n        ")])}),1)],1)],1)],1)},ee=[],te=o("2440"),oe=o.n(te),ne=(o("3863"),o("324a")),re=o.n(ne),ie=o("9d6f"),se=o.n(ie),ae={name:"BottomMenu",data:function(){return{supportedFormats:[{label:"Shapefile",value:"shp"},{label:"TopoJSON",value:"topojson"},{label:"WKT",value:"wkt"}]}},methods:{copy:function(){var e=document.createElement("textarea");e.value=this.$store.state.geojsonString,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.$Notice.open({title:"Copied to clipboard",duration:2.5})},saveToGeojson:function(){var e=new File([this.$store.state.geojsonString],"exported.geojson",{type:"text/plain;charset=utf-8"});oe.a.saveAs(e)},saveInFormats:function(e){var t=null,o=e;if("topo"===e&&(t=topojson.topology(this.$store.state.geojsonString)),"wkt"===e&&(t=re.a.stringify({type:"GeometryCollection",geometries:this.$store.getters.geojson.features.map(function(e){return e.geometry})})),"shp"!=e){var n=new File([a()(t)],"export.".concat(o),{type:"text/plain;charset=utf-8"});oe.a.saveAs(n)}else{var r={folder:"myshapes",types:{point:"mypoints",polygon:"mypolygons",line:"mylines"}};se.a.download(this.$store.getters.geojson,r)}}}},ue=ae,ce=(o("9b4a"),Object(F["a"])(ue,Y,ee,!1,null,null,null));ce.options.__file="BottomMenu.vue";var le=ce.exports,pe={name:"Sidebar",components:{CodeArea:B,BottomMenu:le,TopMenu:X}},de=pe,fe=(o("2dae"),Object(F["a"])(de,D,T,!1,null,null,null));fe.options.__file="Sidebar.vue";var me=fe.exports,ge=function(){var e=this,t=e.$createElement,o=e._self._c||t;return null!==e.selectedProperties?o("div",{staticClass:"featureProperties leaflet-bar"},[0===e.propertyKeys.length?o("h3",[e._v("\n    No properties on feature\n  ")]):o("Table",{attrs:{stripe:"",columns:e.cols,data:e.tableProperties}})],1):e._e()},he=[],ve=o("a4bb"),ye=o.n(ve),be={name:"Properties",data:function(){return{cols:[{title:"Property",key:"property"},{title:"Value",key:"value"}]}},computed:{selectedProperties:function(){return this.$store.state.selectedProperties},propertyKeys:function(){return ye()(this.selectedProperties)},tableProperties:function(){var e=this;return this.propertyKeys.map(function(t){return{property:t,value:e.selectedProperties[t]}})}}},Oe=be,xe=(o("8767"),Object(F["a"])(Oe,ge,he,!1,null,null,null));xe.options.__file="Properties.vue";var Se=xe.exports,Ce={name:"App",store:b,components:{Map:k,Sidebar:me,Properties:Se},mounted:function(){var e=new URL(document.location).searchParams,t=e.get("data");if(t){var o=a()(JSON.parse(t),null,2);this.$store.commit("setGeoJSON",o)}}},_e=Ce,we=(o("034f"),Object(F["a"])(_e,r,i,!1,null,null,null));we.options.__file="App.vue";var Pe=we.exports,je=o("e069"),$e=o.n(je);o("dcad");n["default"].use($e.a),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(Pe)}}).$mount("#app")},"64a9":function(e,t,o){},8767:function(e,t,o){"use strict";var n=o("012f"),r=o.n(n);r.a},"902e":function(e,t,o){},9929:function(e,t,o){},"9b4a":function(e,t,o){"use strict";var n=o("902e"),r=o.n(n);r.a},a7eb:function(e,t,o){},bdf3:function(e,t,o){},dc9f:function(e,t,o){},fbea:function(e,t,o){"use strict";var n=o("a7eb"),r=o.n(n);r.a}});
//# sourceMappingURL=app.49762709.js.map