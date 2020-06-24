webpackJsonp([7],{387:function(e,t,a){var i=a(137)(a(455),a(544),null,null,null);e.exports=i.exports},424:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(1),n=a.n(i),s=a(479),l=a.n(s),o=a(80);t.default={name:"Images",components:{"remote-images":l.a},data:function(){return{search:"",pagination:{sortBy:"alias",rowsPerPage:10},dialogDelete:!1,dialogEdit:!1,dialog:!1,headers:[{text:"Alias",align:"left",value:"name",class:"pl-4",sortable:!0},{text:"Alias description",align:"left",value:"alias_description",class:"pl-1",sortable:!0},{text:"Fingerprint",align:"right",value:"fingerprint",class:"pl-0",sortable:!1},{text:"Public",align:"left",value:"public",class:"pa-1",sortable:!0},{text:"Description",align:"left",value:"description",class:"pa-1"},{text:"Arch",align:"left",value:"architecture",class:"pa-1"},{text:"Type",align:"left",value:"type",class:"pa-1"},{text:"Size",align:"left",value:"size",sortable:!1,class:"pa-1"},{text:"Upload date",align:"left",value:"uploaded_at",sortable:!1,class:"pa-1"},{text:"Actions",value:"actions",sortable:!1}],editedItem:{name:"",new_name:"",alias_description:""}}},computed:{images:function(){return this.$store.getters.imagesTableData}},methods:{formatSize:function(e){return a.i(o.e)(e)},formatDate:function(e){return new Date(e).toDateString()},refreshData:function(){this.$store.dispatch("fetchImages")},editItem:function(e){this.editedItem=n()({},e),this.editedItem.new_name=this.editedItem.name,console.log(e),this.dialogEdit=!0},deleteDialog:function(e){this.editedItem=n()({},e),this.dialogDelete=!0},deleteItem:function(){var e=this;console.log(this.editedItem),console.log("delete"),this.$store.dispatch("deleteImage",this.editedItem.fingerprint),setTimeout(function(){e.$store.dispatch("fetchImages")},1e3)},save:function(){var e=this;""===this.editedItem.name?setTimeout(function(){e.$store.dispatch("createImageAlias",e.editedItem)},500):(setTimeout(function(){e.$store.dispatch("updateImageDescription",e.editedItem)},500),setTimeout(function(){e.editedItem.new_name!==e.editedItem.name&&e.$store.dispatch("updateImageName",e.editedItem)},500)),setTimeout(function(){e.$store.dispatch("fetchImages")},1e3)}},mounted:function(){this.$store.dispatch("fetchImages")}}},425:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(33),n=a.n(i);t.default={name:"RemoteImages",data:function(){return{descriptionLimit:60,entries:[],isLoading:!1,model:null,search:null,aliasName:null,aliasDescription:null}},computed:{fields:function(){var e=this;return this.model?(console.log(this.model),n()(this.model).map(function(t){return{key:t,value:e.model[t]||"n/a"}})):[]},items:function(){return this.entries}},methods:{save:function(){this.$store.dispatch("notify",{id:0,message:"Downloading image",color:""}),this.$store.dispatch("createImage",{fingerprint:this.model.target,aliasName:this.aliasName?this.aliasName:this.model.name,aliasDescription:this.aliasDescription?this.aliasDescription:this.model.description}),this.dialog=!1}},watch:{search:function(){this.$store.dispatch("fetchRemoteImages"),this.entries=this.$store.getters.remoteImages}},mounted:function(){this.$store.dispatch("fetchRemoteImages")}}},455:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(478),n=a.n(i);t.default={name:"Images",components:{images:n.a},data:function(){return{}}}},478:function(e,t,a){var i=a(137)(a(424),a(536),null,null,null);e.exports=i.exports},479:function(e,t,a){var i=a(137)(a(425),a(518),null,null,null);e.exports=i.exports},518:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{color:"blue lighten-2",dark:""}},[a("v-card-title",{staticClass:"headline blue lighten-1"},[e._v("\n    Search for Public Images\n  ")]),e._v(" "),a("v-card-text",[e._v("\n    Explore hundreds of official LXD images from\n    "),a("a",{staticClass:"grey--text text--lighten-3",attrs:{href:"https://uk.images.linuxcontainers.org",target:"_blank"}},[e._v("Linux Containers - Image server")]),e._v(".\n  ")]),e._v(" "),a("v-card-text",[a("v-autocomplete",{attrs:{items:e.items,loading:e.isLoading,"search-input":e.search,color:"white","hide-no-data":"","hide-selected":"","item-text":"description","item-value":"API",label:"Public images",placeholder:"Start typing to Search","prepend-icon":"mdi-database-search","return-object":""},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t}},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1),e._v(" "),a("v-divider"),e._v(" "),a("v-expand-transition",[e.model?a("v-list",{staticClass:"blue lighten-3"},[a("v-list-tile",[a("v-list-tile-content",[a("v-list-tile-title",{domProps:{textContent:e._s(e.model.name)}}),e._v(" "),a("v-list-tile-sub-title",{domProps:{textContent:e._s(e.model.description)}}),e._v(" "),a("v-list-tile-sub-title",{domProps:{textContent:e._s(e.model.target)}})],1)],1)],1):e._e()],1),e._v(" "),a("v-card-text",[e.model?a("v-text-field",{attrs:{label:"Alias name",placeholder:e.model.name},model:{value:e.aliasName,callback:function(t){e.aliasName=t},expression:"aliasName"}}):e._e(),e._v(" "),e.model?a("v-text-field",{attrs:{label:"Alias description",placeholder:e.model.description},model:{value:e.aliasDescription,callback:function(t){e.aliasDescription=t},expression:"aliasDescription"}}):e._e()],1),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{disabled:!e.model,color:"grey darken-3"},on:{click:function(t){e.model=null}}},[e._v("\n      Clear\n      "),a("v-icon",{attrs:{right:""}},[e._v("mdi-close-circle")])],1),e._v(" "),a("v-btn",{attrs:{disabled:!e.model,color:"grey darken-3"},on:{click:e.save}},[e._v("\n      Add\n      "),a("v-icon",{attrs:{right:""}},[e._v("mdi-close-circle")])],1)],1)],1)},staticRenderFns:[]}},536:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{"grid-list-md":""}},[a("v-card",[a("v-card-title",[a("v-btn",{attrs:{absolute:"",dark:"",fab:"",top:"",right:"",small:"",color:"blue"},on:{click:e.refreshData}},[a("v-icon",[e._v("refresh")])],1),e._v(" "),a("v-dialog",{attrs:{"max-width":"700px"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[a("v-btn",e._g({attrs:{color:"primary",dark:""}},i),[e._v("\n        New image\n      ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),a("remote-images",{attrs:{dialog:""}})],1),e._v(" "),a("v-spacer"),e._v(" "),a("v-text-field",{attrs:{"append-icon":"search",label:e.$t("actions.search"),"single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),a("v-dialog",{attrs:{"max-width":"490"},model:{value:e.dialogEdit,callback:function(t){e.dialogEdit=t},expression:"dialogEdit"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("Are you sure to edit image: "+e._s(e.editedItem.name)+"?")]),e._v(" "),a("v-card-text",[a("v-text-field",{attrs:{value:e.editedItem.name,label:"Alias name"},model:{value:e.editedItem.new_name,callback:function(t){e.$set(e.editedItem,"new_name",t)},expression:"editedItem.new_name"}}),e._v(" "),a("v-text-field",{attrs:{label:"Alias description"},model:{value:e.editedItem.alias_description,callback:function(t){e.$set(e.editedItem,"alias_description",t)},expression:"editedItem.alias_description"}})],1),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.dialogEdit=!1}}},[e._v("Disagree")]),e._v(" "),a("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(t){e.dialogEdit=!1}},nativeOn:{click:function(t){return e.save(t)}}},[e._v("Agree")])],1)],1)],1),e._v(" "),a("v-dialog",{attrs:{"max-width":"490"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("Are you sure to delete image: "+e._s(e.editedItem.name)+"?")]),e._v(" "),a("v-card-text",[e._v("This action cannot by undo.")]),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.dialogDelete=!1}}},[e._v("Disagree")]),e._v(" "),a("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(t){e.dialogDelete=!1}},nativeOn:{click:function(t){return e.deleteItem(t)}}},[e._v("Agree")])],1)],1)],1),e._v(" "),e.images?a("v-data-table",{attrs:{headers:e.headers,items:e.images,search:e.search},scopedSlots:e._u([{key:"item.actions",fn:function(t){var i=t.item;return[a("v-btn",{staticClass:"mx-0",attrs:{icon:""},on:{click:function(t){return e.editItem(i)}}},[a("v-icon",{attrs:{color:"teal"}},[e._v("edit")])],1),e._v(" "),a("v-btn",{staticClass:"mx-0",attrs:{icon:""},on:{click:function(t){return e.deleteDialog(i)}}},[a("v-icon",{attrs:{color:"pink"}},[e._v("delete")])],1)]}},{key:"item.size",fn:function(t){var a=t.item;return[e._v("\n      "+e._s(e.formatSize(a.size))+"\n    ")]}},{key:"item.uploaded_at",fn:function(t){var a=t.item;return[e._v("\n      "+e._s(e.formatDate(a.uploaded_at))+"\n    ")]}}],null,!1,4098716696)}):e._e(),e._v(" "),a("br")],1)],1)},staticRenderFns:[]}},544:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("images")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=7.b0c7f08549a02c60563f.js.map