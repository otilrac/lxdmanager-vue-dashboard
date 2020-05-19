webpackJsonp([6],{388:function(e,t,s){var i=s(137)(s(467),s(540),null,null,null);e.exports=i.exports},403:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={components:{},data:function(){return{hasCreated:!1,showIspconfig:!1,ispconfig:"no",period:1,name:"",os:"ubuntu",cpu:"1",memory:"512",disk:"10",periodes:[{text:"1 Month",value:1},{text:"3 Months",value:1},{text:"6 Months",value:.95},{text:"12 Months",value:.9},{text:"24 Months",value:.8}]}},computed:{active:{get:function(){return this.$store.state.instances.dialogs.create},set:function(e){e||this.closeDialog()}},showPrice:function(){return"True"===this.$store.getters.appconfig.price.enabled},templates:function(){return this.$store.getters.imagesTableData.map(function(e){return{text:e.alias_description?e.alias_description:e.name,value:e.name}})},getPrice:function(){return this.$store.getters.appconfig.price},getStorage:function(){return this.$store.getters.appconfig.storage},diskEnabled:function(){return!!this.getStorage&&"True"===this.$store.getters.appconfig.storage.enabled},me:function(){return this.$store.getters["auth/me"]},canCreate:function(){return console.log(this.me.abilities),this.me.abilities.includes("instances_create")},price:function(){return((this.getPrice.cpu*this.cpu+this.getPrice.memory*this.memory+this.getPrice.disk*this.disk)*this.period).toFixed(2)}},methods:{setVPS:function(e){switch(e){case 1:this.cpu=1,this.memory=512,this.disk=10;break;case 2:this.cpu=1,this.memory=1024,this.disk=30;break;case 3:this.cpu=2,this.memory=2048,this.disk=50;break;case 4:this.cpu=4,this.memory=8172,this.disk=160;break;default:this.cpu=1,this.memory=512,this.disk=10}},closeDialog:function(){this.step=0,this.$store.dispatch("closeInstanceCreateDialog")},save:function(){var e=this;if(this.name)if(this.canCreate){var t={name:this.name,os:this.os,cpu:this.cpu,memory:this.memory+"MB",disk:this.disk+"GB",pool_name:"True"===this.getStorage.enabled?this.getStorage.pool_name:"",price:this.price?this.price:""};this.$store.dispatch("createInstance",t),setTimeout(function(){e.$store.dispatch("fetchInstances")},500),console.log("create instance")}else this.sendRequest();this.active=!1},sendRequest:function(){if(""!==this.name){var e={name:this.name,os:this.os,cpu:this.cpu,memory:this.memory+"MB",disk:this.disk+"GB",ispconfig:this.ispconfig,period:this.period,price:this.price};this.$store.dispatch("createRequests",{action:"create",message:"Create new instance "+this.name,status:"waiting",meta_data:e}),this.$store.dispatch("notify",{id:0,message:""+this.$i18n.t("notifications.request_created"),color:""}),this.active=!1}}},created:function(){this.$store.dispatch("fetchImages")}}},405:function(e,t,s){var i=s(137)(s(403),s(407),null,null,null);e.exports=i.exports},407:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-layout",{attrs:{row:"","justify-center":""}},[s("v-dialog",{attrs:{"max-width":"800px"},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v(e._s(e.$t("instances.order.new")))])]),e._v(" "),s("v-card-text",[s("v-container",{attrs:{"grid-list-md":""}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:"",sm6:""}},[s("v-text-field",{attrs:{label:e.$t("instances.order.instance_name.label"),required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),s("v-flex",{attrs:{xs12:"",sm6:""}},[s("v-select",{attrs:{items:e.templates,label:e.$t("instances.order.os.label")},model:{value:e.os,callback:function(t){e.os=t},expression:"os"}})],1),e._v(" "),s("v-flex",{attrs:{xs3:"",sm3:""}},[s("v-btn",{attrs:{block:"",large:"",value:"vps1"},on:{click:function(t){return e.setVPS(1)}}},[e._v("\n                  VPS1\n                ")])],1),e._v(" "),s("v-flex",{attrs:{xs3:"",sm3:""}},[s("v-btn",{attrs:{block:"",large:"",value:"vps1"},on:{click:function(t){return e.setVPS(2)}}},[e._v("\n                  VPS2\n                ")])],1),e._v(" "),s("v-flex",{attrs:{xs3:"",sm3:""}},[s("v-btn",{attrs:{block:"",large:"",value:"vps1"},on:{click:function(t){return e.setVPS(3)}}},[e._v("\n                  VPS3\n                ")])],1),e._v(" "),s("v-flex",{attrs:{xs3:"",sm3:""}},[s("v-btn",{attrs:{block:"",large:"",value:"vps1"},on:{click:function(t){return e.setVPS(4)}}},[e._v("\n                  VPS4\n                ")])],1),e._v(" "),s("v-flex",{attrs:{xs10:""}},[s("v-slider",{attrs:{min:"1",max:"4",step:"1",label:e.$t("instances.order.cpu.label")},model:{value:e.cpu,callback:function(t){e.cpu=t},expression:"cpu"}})],1),e._v(" "),s("v-flex",{attrs:{xs2:""}},[s("v-text-field",{attrs:{type:"CPUs",suffix:"CPUs"},model:{value:e.cpu,callback:function(t){e.cpu=t},expression:"cpu"}})],1),e._v(" "),s("v-flex",{attrs:{xs10:""}},[s("v-slider",{attrs:{min:"512",max:"8192",step:"512",label:e.$t("instances.order.memory.label")},model:{value:e.memory,callback:function(t){e.memory=t},expression:"memory"}})],1),e._v(" "),s("v-flex",{attrs:{xs2:""}},[s("v-text-field",{attrs:{type:"MB",suffix:"MB"},model:{value:e.memory,callback:function(t){e.memory=t},expression:"memory"}})],1),e._v(" "),s("v-flex",{attrs:{xs10:""}},[e.diskEnabled?s("v-slider",{attrs:{min:"10",max:"500",step:"5",label:e.$t("instances.order.disk.label")},model:{value:e.disk,callback:function(t){e.disk=t},expression:"disk"}}):e._e()],1),e._v(" "),s("v-flex",{attrs:{xs2:""}},[e.diskEnabled?s("v-text-field",{attrs:{type:"Disk",suffix:"GB"},model:{value:e.disk,callback:function(t){e.disk=t},expression:"disk"}}):e._e()],1),e._v(" "),s("v-flex",{attrs:{xs12:""}},[e.showIspconfig?s("v-radio-group",{model:{value:e.ispconfig,callback:function(t){e.ispconfig=t},expression:"ispconfig"}},[s("v-radio",{attrs:{value:"yes",label:"Install ISPconfig"}}),e._v(" "),s("v-radio",{attrs:{value:"no",label:"Do not Install ISPconfig"}})],1):e._e()],1),e._v(" "),e.showPrice?[s("v-flex",{attrs:{xs3:""}},[s("v-subheader",[e._v(e._s(e.$t("instances.order.payment_period.label")))])],1),e._v(" "),s("v-flex",{attrs:{xs3:""}},[s("v-select",{attrs:{items:e.periodes},model:{value:e.period,callback:function(t){e.period=t},expression:"period"}})],1),e._v(" "),s("v-flex",{attrs:{xs4:""}},[s("v-subheader",[e._v(e._s(e.$t("instances.order.calculated_price.label")))])],1),e._v(" "),s("v-flex",{attrs:{xs2:""}},[s("v-text-field",{attrs:{value:e.price,suffix:"€"}})],1)]:e._e()],2)],1)],1),e._v(" "),s("v-card-actions",[s("v-spacer"),e._v(" "),s("v-btn",{attrs:{color:"blue darken-1",text:""},nativeOn:{click:function(t){e.active=!1}}},[e._v(e._s(e.$t("actions.close")))]),e._v(" "),s("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.save}},[e._v(e._s(e.$t("actions.create")))])],1)],1)],1)],1)},staticRenderFns:[]}},443:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(1),a=s.n(i),n=s(405),r=s.n(n);t.default={name:"Instances",components:{"order-create":r.a},data:function(){return{search:"",pagination:{sortBy:"name",rowsPerPage:15},dialog:!1,dialogDelete:!1,headers:[{text:this.$t("actions.name"),align:"left",value:"action",class:"pl-4",sortable:!1},{text:this.$t("stats.status"),align:"left",value:"status",class:"pl-0",sortable:!1},{text:this.$t("stats.name"),align:"left",value:"name",class:"pa-1"},{text:this.$tc("stats.cpu",1)+"·s",align:"left",value:"config.limits_cpu",sortable:!1,class:"pa-1"},{text:this.$t("stats.memory_limit"),align:"left",value:"config.limits_memory",class:"pa-1"},{text:this.$t("stats.disk_limit"),align:"left",value:"config.limits_disk",disk:!1,class:"pa-1"},{text:"IPv4",align:"left",value:"ips[0].address",sortable:!1,class:"pa-1"},{text:"IPv6",align:"left",value:"ips[1].address",sortable:!1,class:"pa-1"},{text:"Type",align:"left",value:"type",sortable:!0,class:"pa-1"}],editedIndex:-1,editedItem:{name:"",os:"",cpu:"",memory:"",disk:""},defaultItem:{name:"",os:"ubuntu-16.04",cpu:"1",memory:"512",disk:"10"},hasCreated:!1,name:"",os:"ubuntu-16.04",cpu:"1",memory:"512",disk:"10",templates:[{text:"Ubuntu 16.04",value:"ubuntu/16.04"},{text:"Debian 9",value:"debian/9"},{text:"CentOS 7",value:"centos/7"},{text:"Fedora 29",value:"fedora/29"},{text:"Alpine 3.9",value:"alpine/3.9"}]}},computed:{active:{get:function(){return this.$store.state.instances.dialogs.create},set:function(e){e||this.closeDialog()}},items:function(){return this.$store.getters.instancesTableData},me:function(){return this.$store.getters["auth/me"]},canCreate:function(){return this.me.abilities.includes("instances_create")},computedHeaders:function(){var e=this;return this.headers.filter(function(t){return!(t.disk===e.showDisk||t.price===e.showPrice)})},showPrice:function(){return"True"===this.$store.getters.appconfig.price.enabled},showDisk:function(){return"True"===this.$store.getters.appconfig.storage.enabled}},watch:{dialog:function(e){return e||this.close()}},methods:{filterIpv6:function(e){return"link"===e.scope?"":e.address},iconstate:function(e){switch(e){case"RUNNING":return"play_arrow";case"STOPPED":return"stop";default:return"pause"}},colorstate:function(e){switch(e){case"RUNNING":return"green";case"STOPPED":return"red";default:return"blue"}},setVPS:function(e){switch(e){case 1:this.editedItem.cpu=1,this.editedItem.memory=512,this.editedItem.disk=10;break;case 2:this.editedItem.cpu=1,this.editedItem.memory=1024,this.editedItem.disk=30;break;case 3:this.editedItem.cpu=2,this.editedItem.memory=2048,this.editedItem.disk=50;break;case 4:this.editedItem.cpu=4,this.editedItem.memory=8172,this.editedItem.disk=160;break;default:this.editedItem.cpu=1,this.editedItem.memory=512,this.editedItem.disk=10}},close:function(){var e=this;this.dialog=!1,setTimeout(function(){e.editedItem=a()({},e.defaultItem),e.editedIndex=-1},300)},save:function(){var e=this;this.editedItem.name&&(console.log(this.editedItem.memory),this.close(),this.canCreate?(this.editedItem.memory=this.editedItem.memory+"MB",this.editedItem.disk=this.editedItem.disk+"GB",this.$store.dispatch("createInstance",this.editedItem),setTimeout(function(){e.$store.dispatch("fetchInstances")},500),console.log("create instance")):(console.log("send request"),this.sendRequest()))},sendRequest:function(){if(console.log(this.me.name),console.log(this.name),console.log(this.cpu),console.log(this.memory),console.log(this.disk),""!==this.editedItem.name){var e={name:this.editedItem.name,os:this.editedItem.os,cpu:this.editedItem.cpu,memory:this.editedItem.memory+"MB",disk:this.editedItem.disk+"GB"};console.log(e),this.$store.dispatch("createRequests",{action:"create",message:"Create new instance",status:"waiting",meta_data:e}),this.$store.dispatch("notify",{id:0,message:"Your request was created",color:""}),this.active=!1}},refreshData:function(){this.$store.dispatch("fetchInstances")}},created:function(){var e=this;this.$store.getters.instancesTableData||(this.$store.dispatch("fetchInstances"),setTimeout(function(){e.editedItem=a()({},e.defaultItem),e.editedIndex=-1},300),console.log("fetched")),this.$store.dispatch("fetchInstances")}}},467:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(497),a=s.n(i);t.default={name:"instance",components:{instances:a.a},data:function(){return{}}}},497:function(e,t,s){var i=s(137)(s(443),s(547),null,null,null);e.exports=i.exports},540:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("instances")],1)},staticRenderFns:[]}},547:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{attrs:{"grid-list-md":""}},[s("order-create"),e._v(" "),s("v-card",[s("v-card-title",[s("v-btn",{attrs:{absolute:"",dark:"",fab:"",top:"",right:"",small:"",color:"blue"},on:{click:e.refreshData}},[s("v-icon",[e._v("refresh")])],1),e._v(" "),s("v-btn",{staticClass:"mb-1",attrs:{color:"primary",dark:""},on:{click:function(t){return e.$store.dispatch("openInstanceCreateDialog")}}},[e._v(e._s(e.$t("instances.actions.new")))]),e._v(" "),s("v-spacer"),e._v(" "),s("v-text-field",{attrs:{"append-icon":"search",label:e.$t("actions.search"),"single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),e.items?s("v-data-table",{attrs:{headers:e.computedHeaders,items:e.items,search:e.search},scopedSlots:e._u([{key:"item.ips[0].address",fn:function(t){var i=t.item;return[i.ips[0]?s("v-span",[e._v(e._s(e.filterIpv6(i.ips[0])))]):e._e()]}},{key:"item.ips[1].address",fn:function(t){var i=t.item;return[i.ips[1]?s("v-span",[e._v(e._s(e.filterIpv6(i.ips[1])))]):e._e()]}},{key:"item.action",fn:function(t){var i=t.item;return[s("v-btn",{attrs:{color:"primary",small:"",left:"",to:"/instance/"+i.id}},[e._v(e._s(e.$t("instances.actions.manage")))])]}},{key:"item.status",fn:function(t){var i=t.item;return[s("v-icon",{attrs:{color:e.colorstate(i.status)}},[e._v(e._s(e.iconstate(i.status)))])]}}],null,!1,547957681)}):e._e()],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=6.cb608eac8ca1cf533335.js.map