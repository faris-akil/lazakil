(function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c19b6b44"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=n[t]=[e,r]}));e.push(a[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,a[1](l)}n[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("TopNav"),a("v-main",[a("router-view")],1),a("v-snackbar",{attrs:{"multi-line":!0,right:!0,top:!0,timeout:6e3,color:t.$store.state.snackbar.variant},model:{value:t.$store.state.snackbar.show,callback:function(e){t.$set(t.$store.state.snackbar,"show",e)},expression:"$store.state.snackbar.show"}},[t._v(" "+t._s(t.$store.state.snackbar.message)+" "),a("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){return t.$store.commit("updateSnackBar",{show:!1})}}},[t._v(" Close ")])],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",{attrs:{app:"",dark:""}},[a("v-toolbar-title",[t._v("BrixSHOP")]),a("v-spacer"),a("span",{staticClass:"hidden-sm-and-up"},[a("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[a("v-icon",[t._v("mdi-menu")])],1)],1),a("v-toolbar-items",{staticClass:"hidden-xs-only"},[a("v-btn",{attrs:{to:"/",text:""}},[a("v-icon",{staticClass:"mr-1"},[t._v("mdi-home")]),t._v("Home")],1),a("v-btn",{attrs:{to:"/store",text:""}},[a("v-icon",{staticClass:"mr-1"},[t._v("mdi-storefront")]),t._v("Store")],1),a("v-btn",{attrs:{to:"/cart",text:""}},[a("v-icon",{staticClass:"mr-1"},[t._v("mdi-cart")]),t._v("Cart")],1)],1)],1),a("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",t._l(t.items,(function(e){return a("v-list-item",{key:e.name,attrs:{to:e.link}},[a("v-list-item-icon",[a("v-icon",{attrs:{small:""}},[t._v("mdi-"+t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)],1)},s=[],c=(a("ac1f"),a("841c"),{data:function(){return{search:"",drawer:!1,items:[{title:"Home",link:"/",icon:"home"},{title:"Store",link:"store",icon:"storefront"},{title:"Cart",link:"cart",icon:"cart"}]}},methods:{searchProducts:function(){console.log(this.$route),console.log(this.$router),console.log(Boolean(this.search)),this.search&&this.$router.push({name:"Store/search=",params:{search:this.search}})}}}),l=c,u=a("2877"),d=a("6544"),p=a.n(d),m=a("40dc"),v=a("8336"),f=a("132d"),h=a("8860"),b=a("da13"),g=a("5d23"),_=a("34c3"),x=a("f774"),y=a("2fa4"),k=a("2a7f"),C=Object(u["a"])(l,i,s,!1,null,null,null),V=C.exports;p()(C,{VAppBar:m["a"],VBtn:v["a"],VIcon:f["a"],VList:h["a"],VListItem:b["a"],VListItemContent:g["a"],VListItemIcon:_["a"],VListItemTitle:g["b"],VNavigationDrawer:x["a"],VSpacer:y["a"],VToolbarItems:k["a"],VToolbarTitle:k["b"]});var w={name:"App",components:{TopNav:V},data:function(){return{}}},$=w,P=a("7496"),O=a("f6c4"),S=a("2db4"),j=Object(u["a"])($,n,o,!1,null,null,null),F=j.exports;p()(j,{VApp:P["a"],VBtn:v["a"],VMain:O["a"],VSnackbar:S["a"]});a("d3b7");var T=a("8c4f"),I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Header"),a("PopularProduct"),a("Footer")],1)},E=[],q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-sheet",{attrs:{height:t.sheetHeight,color:"grey lighten-3"}},[a("v-container",{staticClass:"fill-height"},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("h1",{staticClass:"text-center display-3 hidden-xs-only"},[t._v("Welcome to Brix-Shop!")]),a("h1",{staticClass:"text-center display-1 hidden-sm-and-up"},[t._v("Welcome to Brix-Shop")])])],1)],1)},B=[],A=(a("b0c0"),{computed:{sheetHeight:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"200px";case"s":return"300px";case"m":return"300px";case"l":return"300px";case"xl":return"350px"}return"300px"}}}),L=A,R=a("a523"),z=a("0fd9"),H=a("8dd9"),M=Object(u["a"])(L,q,B,!1,null,null,null),N=M.exports;p()(M,{VContainer:R["a"],VRow:z["a"],VSheet:H["a"]});var Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"fill-height mb-12"},[a("v-row",[a("v-col",{attrs:{sm:"10","offset-sm":"1",md:"8","offset-md":"2"}},[a("h2",[t._v("Popular Products"),a("v-btn",{attrs:{text:"",small:"",color:"primary",to:"store"}},[t._v("View All")])],1)])],1),a("v-row",[a("v-col",{attrs:{sm:"10","offset-sm":"1",lg:"8","offset-lg":"2"}},[a("v-row",t._l(t.$store.state.products.slice(0,4),(function(e,r){return a("v-col",{key:e.name+r,attrs:{sm:"6",md:"4"}},[a("VerticalProduct",{attrs:{product:e,index:r,addToCart:t.addToCart}})],1)})),1)],1)],1)],1)},D=[],U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{outlined:""}},[a("v-img",{attrs:{src:t.product.image,height:"200px"}}),a("v-card-title",[t._v(t._s(t.product.name))]),a("v-card-subtitle",[t._v(" Price: RM"+t._s(t.product.price)+" "),a("v-spacer"),a("div",[t._v(" Quantity: "),a("v-icon",{on:{click:function(e){t.quantity=t.quantity-1}}},[t._v("mdi-minus")]),t._v(" "),a("span",{staticClass:"pa-2"},[t._v(t._s(t.quantity))]),t._v(" "),a("v-icon",{on:{click:function(e){t.quantity=t.quantity+1}}},[t._v("mdi-plus")])],1)],1),a("v-card-actions",[a("v-btn",{attrs:{color:"success",outlined:""},on:{click:function(e){return t.addToCart(t.product,t.quantity)}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-plus")]),t._v("Add To Cart")],1)],1)],1)},J=[],G={props:["product","index","addToCart"],watch:{quantity:function(t){t<1&&(this.quantity=1)}},data:function(){return{quantity:1}}},W=G,Q=a("b0af"),Z=a("99d9"),K=a("adda"),X=Object(u["a"])(W,U,J,!1,null,null,null),tt=X.exports;p()(X,{VBtn:v["a"],VCard:Q["a"],VCardActions:Z["a"],VCardSubtitle:Z["b"],VCardTitle:Z["d"],VIcon:f["a"],VImg:K["a"],VSpacer:y["a"]});var et={components:{VerticalProduct:tt},methods:{addToCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$store.commit("addItemToCart",{itemId:t,quantity:e}),this.$store.commit("updateSnackBar",{show:!0})}}},at=et,rt=a("62ad"),nt=Object(u["a"])(at,Y,D,!1,null,null,null),ot=nt.exports;p()(nt,{VBtn:v["a"],VCol:rt["a"],VContainer:R["a"],VRow:z["a"]});var it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{staticClass:"font-weight-medium",attrs:{absolute:""}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" © "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("BrixSHOP")])])],1)},st=[],ct={},lt=ct,ut=a("553a"),dt=Object(u["a"])(lt,it,st,!1,null,null,null),pt=dt.exports;p()(dt,{VCol:rt["a"],VFooter:ut["a"]});var mt={name:"Home",components:{Header:N,PopularProduct:ot,Footer:pt}},vt=mt,ft=Object(u["a"])(vt,I,E,!1,null,null,null),ht=ft.exports,bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{attrs:{sm:"3","offset-lg":"1"}},[a("SideBar",{on:{priceFilter:t.runFilter,searchingProducts:t.searchProducts}})],1),a("v-col",{attrs:{sm:"9",lg:"7"}},[a("ProductDisplay",{attrs:{filter:t.filter,search:t.search}})],1)],1)],1)},gt=[],_t=(a("4de4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.$vuetify.breakpoint.mdAndUp?a("v-sheet",{staticClass:"pa-8",attrs:{elevation:4,tile:""}},[a("v-row",[a("v-text-field",{staticClass:"align-start",attrs:{label:"Search Products"},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchProducts(e)}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("v-icon",{staticClass:"hidden-sm-and-down",on:{click:t.searchProducts}},[t._v("mdi-magnify")])],1),a("h3",[t._v("Filters")]),a("v-radio-group",{attrs:{mandatory:!0},model:{value:t.priceFilter,callback:function(e){t.priceFilter=e},expression:"priceFilter"}},t._l(t.prices,(function(t,e){return a("v-radio",{key:e,attrs:{label:t,value:e}})})),1)],1):t._e(),t.$vuetify.breakpoint.smAndDown?a("v-expansion-panels",[a("v-expansion-panel",[a("v-expansion-panel-header",{attrs:{"expand-icon":"mdi-arrow-down"}},[t._v(" Filters ")]),a("v-expansion-panel-content",[a("v-radio-group",{attrs:{mandatory:!0},model:{value:t.priceFilter,callback:function(e){t.priceFilter=e},expression:"priceFilter"}},t._l(t.prices,(function(t,e){return a("v-radio",{key:e,attrs:{label:t,value:e}})})),1)],1)],1)],1):t._e()],1)}),xt=[],yt={data:function(){return{prices:["Any","Highest - Lowest","Lowest - Highest"],priceFilter:0,checkBox:!0,search:""}},watch:{priceFilter:function(t){this.setFilterEvents(t)}},methods:{searchProducts:function(){this.search&&this.$emit("searchingProducts",this.search)},setFilterEvents:function(t){var e=0===t?"any":1===t?"descending":"ascending";this.$emit("priceFilter",e)}}},kt=yt,Ct=a("cd55"),Vt=a("49e2"),wt=a("c865"),$t=a("0393"),Pt=a("67b6"),Ot=a("43a6"),St=a("8654"),jt=Object(u["a"])(kt,_t,xt,!1,null,null,null),Ft=jt.exports;p()(jt,{VExpansionPanel:Ct["a"],VExpansionPanelContent:Vt["a"],VExpansionPanelHeader:wt["a"],VExpansionPanels:$t["a"],VIcon:f["a"],VRadio:Pt["a"],VRadioGroup:Ot["a"],VRow:z["a"],VSheet:H["a"],VTextField:St["a"]});var Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("Products")]),a("v-row",t._l(t.getProductList,(function(e){return a("v-col",{key:e.id,attrs:{sm:"6",md:"4"}},[a("VerticalProduct",{attrs:{product:e,index:e.id,addToCart:t.addToCart}})],1)})),1),a("v-row",[a("v-col",{attrs:{offset:"1"}},[this.search?t._e():a("v-pagination",{attrs:{length:Math.round(10/3+1)},model:{value:t.pagination,callback:function(e){t.pagination=e},expression:"pagination"}})],1)],1)],1)},It=[],Et=(a("caad"),a("fb6a"),a("2532"),{components:{VerticalProduct:tt},props:["filter","search"],data:function(){return{pagination:1,products:[]}},watch:{pagination:function(t){this.getProducts(t)},filter:function(){this.pagination=1,this.getProducts()},search:function(){this.searchProducts()}},computed:{getProductsLength:function(){return this.$store.state.products},getProductList:function(){return 1===this.pagination?this.products.slice(0,3):this.products.slice(3*this.pagination-3,3*this.pagination)}},methods:{addToCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=t.name,r=t.image,n=t.price;this.$store.commit("addItemToCart",{itemId:t.id,image:r,name:a,price:n,quantity:e}),this.$store.commit("updateSnackBar",{show:!0,variant:"success",message:"Success! Item added to the cart."})},getProducts:function(){switch(this.filter){case"ascending":this.products=this.$store.state.products.sort((function(t,e){return t.price-e.price}));break;case"descending":this.products=this.$store.state.products.sort((function(t,e){return e.price-t.price}));break;case"any":this.products=this.$store.state.initialProducts;break}},searchProducts:function(){var t=this;this.products=this.$store.state.products.filter((function(e){var a=e.name.toLowerCase();return a.includes(t.search)}))}},mounted:function(){this.getProducts()}}),qt=Et,Bt=a("891e"),At=Object(u["a"])(qt,Tt,It,!1,null,null,null),Lt=At.exports;p()(At,{VCol:rt["a"],VPagination:Bt["a"],VRow:z["a"]});var Rt={components:{SideBar:Ft,ProductDisplay:Lt},data:function(){return{filter:"any",search:""}},methods:{runFilter:function(t){this.filter=t},searchProducts:function(t){this.search=t}}},zt=Rt,Ht=Object(u["a"])(zt,bt,gt,!1,null,null,null),Mt=Ht.exports;p()(Ht,{VCol:rt["a"],VContainer:R["a"],VRow:z["a"]});var Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"fill-height grey lighten-5",attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{sm:"8",md:"5","offset-md":"2",lg:"4","offset-lg":"4"}},[a("ProductList")],1),a("v-col",{attrs:{"align-self":"start",sm:"4",md:"3",order:"first","order-sm":"last"}},[a("CheckoutBox")],1)],1)],1)},Yt=[],Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.$store.state.cart,(function(e,r){return a("v-row",{key:r},[a("HorizontalProduct",{attrs:{product:e,index:r,updateCart:t.removeFromCart,btnAction:"remove"}})],1)})),1)},Ut=[],Jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mb-5 pa-4",attrs:{outlined:"","min-width":"100%"}},[a("div",{staticClass:"d-flex"},[a("div",[a("v-img",{attrs:{src:t.product.image,width:"120px",height:"120px"}})],1),a("div",{staticClass:"d-flex flex-column justify-center"},[a("v-card-title",{class:t.$vuetify.breakpoint.xsOnly?"caption":"subtitle-1"},[t._v(" "+t._s(t.product.name)+" ")]),a("v-card-subtitle",[t._v(" RM"+t._s(t.product.price)+" "),a("br"),t._v(" Quantity: "+t._s(t.product.quantity)+" "),a("br"),t._v(" Total: RM "+t._s(t.product.price*t.product.quantity)+" ")]),a("v-card-actions",["remove"===t.btnAction?a("v-btn",{staticClass:"ml-4",attrs:{color:"error",outlined:"",small:t.$vuetify.breakpoint.smAndUp},on:{click:function(e){return t.updateCart(t.product)}}},[t.$vuetify.breakpoint.smAndUp?a("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-minus")]):t._e(),t._v(" Remove "),t.$vuetify.breakpoint.smAndUp?a("span",[t._v("From Cart")]):t._e()],1):a("v-btn",{attrs:{color:"success",small:"",outlined:""},on:{click:function(e){return t.updateCart(t.i)}}},[t.$vuetify.breakpoint.smAndUp?a("v-icon",[t._v("mdi-plus")]):t._e(),t._v(" Add To Cart ")],1)],1)],1)])])},Gt=[],Wt=(a("a9e3"),{props:{product:Object,updateCart:Function,btnAction:String,i:Number},computed:{findObject:function(){var t=this,e=this.$store.state.products.filter((function(e){return e.id===t.product.itemId}));return console.log(e),e[0]}}}),Qt=Wt,Zt=Object(u["a"])(Qt,Jt,Gt,!1,null,null,null),Kt=Zt.exports;p()(Zt,{VBtn:v["a"],VCard:Q["a"],VCardActions:Z["a"],VCardSubtitle:Z["b"],VCardTitle:Z["d"],VIcon:f["a"],VImg:K["a"]});var Xt={components:{HorizontalProduct:Kt},methods:{removeFromCart:function(t){this.$store.commit("removeItemFromCart",t),this.$store.commit("updateSnackBar",{show:!0,variant:"error",message:"Item removed from cart"})}}},te=Xt,ee=Object(u["a"])(te,Dt,Ut,!1,null,null,null),ae=ee.exports;p()(ee,{VRow:z["a"]});var re=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{attrs:{outlined:""}},[a("v-card-title",[t._v("Payment Details")]),a("v-card-text",[a("p",[t._v("Total: RM "+t._s(t._f("twoDecimalPoint")(t.calculateTotal)))]),a("v-btn",{attrs:{color:"primary"},on:{click:t.goToCheckout}},[t._v("Checkout")])],1)],1)],1)},ne=[],oe=(a("d81d"),a("13d5"),a("b680"),{data:function(){return{checkoutForm:null,nameRules:[],name:"",emailRules:[],email:""}},filters:{twoDecimalPoint:function(t){return(Math.round(100*t)/100).toFixed(2)}},computed:{calculateTotal:function(){console.log(this.$store.state.cart);var t=this.$store.state.cart.map((function(t){return t.price*t.quantity})),e=t.reduce((function(t,e){return t+e}),0);return e}},methods:{goToCheckout:function(){this.$router.push({name:"Checkout"})}}}),ie=oe,se=Object(u["a"])(ie,re,ne,!1,null,null,null),ce=se.exports;p()(se,{VBtn:v["a"],VCard:Q["a"],VCardText:Z["c"],VCardTitle:Z["d"]});var le={components:{ProductList:ae,CheckoutBox:ce}},ue=le,de=Object(u["a"])(ue,Nt,Yt,!1,null,null,null),pe=de.exports;p()(de,{VCol:rt["a"],VContainer:R["a"],VRow:z["a"]});var me=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{attrs:{sm:"6","offset-sm":"3",xl:"4","offset-xl":"4"}},[a("v-stepper",{model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[a("v-stepper-header",[a("v-stepper-step",{attrs:{step:"1",complete:t.step>1}}),a("v-divider"),a("v-stepper-step",{attrs:{complete:t.step>2,step:"2"}}),a("v-divider"),a("v-stepper-step",{attrs:{complete:t.step>3,step:"3"}})],1),a("v-stepper-items",[a("ContactInfo",{attrs:{data:t.data,rules:t.rules,next:t.next}}),a("ShippingInfo",{attrs:{data:t.data,rules:t.rules,next:t.next,previous:t.previous}}),a("Review",{attrs:{data:t.data,submitOrder:t.submitOrder,previous:t.previous}})],1)],1)],1)],1)],1)},ve=[],fe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-stepper-content",{attrs:{step:"1"}},[a("v-form",{ref:"step1",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{rules:[t.rules.required],label:"Name",required:""},model:{value:t.data.name,callback:function(e){t.$set(t.data,"name",e)},expression:"data.name"}}),a("v-text-field",{attrs:{rules:[t.rules.required,t.rules.email],label:"Email",required:""},model:{value:t.data.email,callback:function(e){t.$set(t.data,"email",e)},expression:"data.email"}}),a("v-text-field",{attrs:{rules:[t.rules.required,t.rules.phone],label:"Phone Number",required:""},model:{value:t.data.phone,callback:function(e){t.$set(t.data,"phone",e)},expression:"data.phone"}})],1),a("v-btn",{attrs:{color:"primary"},on:{click:t.evaluateForm}},[t._v(" Continue ")]),a("v-btn",{attrs:{text:""},on:{click:function(e){return t.$router.replace({name:"Cart"})}}},[t._v(" Cancel ")])],1)},he=[],be={props:{data:Object,next:Function,rules:Object},data:function(){return{valid:!0}},methods:{evaluateForm:function(){if(!this.$refs.step1.validate())return 0;this.next()}}},ge=be,_e=a("4bd4"),xe=a("e516"),ye=Object(u["a"])(ge,fe,he,!1,null,null,null),ke=ye.exports;p()(ye,{VBtn:v["a"],VForm:_e["a"],VStepperContent:xe["a"],VTextField:St["a"]});var Ce=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-stepper-content",{attrs:{step:"2"}},[a("v-form",{ref:"step2",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{label:"Street Address",rules:[t.rules.required]},model:{value:t.data.street,callback:function(e){t.$set(t.data,"street",e)},expression:"data.street"}}),a("v-text-field",{attrs:{label:"State",rules:[t.rules.required]},model:{value:t.data.state,callback:function(e){t.$set(t.data,"state",e)},expression:"data.state"}}),a("v-text-field",{attrs:{label:"Zip",rules:[t.rules.required,t.rules.zip],required:""},model:{value:t.data.zip,callback:function(e){t.$set(t.data,"zip",e)},expression:"data.zip"}})],1),a("v-btn",{attrs:{color:"primary"},on:{click:t.evaluateForm}},[t._v(" Continue ")]),a("v-btn",{attrs:{text:""},on:{click:t.previous}},[t._v(" Go Back ")])],1)},Ve=[],we={props:{next:Function,previous:Function,rules:Object,data:Object},data:function(){return{valid:!0}},methods:{evaluateForm:function(){if(!this.$refs.step2.validate())return 0;this.next()}}},$e=we,Pe=Object(u["a"])($e,Ce,Ve,!1,null,null,null),Oe=Pe.exports;p()(Pe,{VBtn:v["a"],VForm:_e["a"],VStepperContent:xe["a"],VTextField:St["a"]});var Se=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-stepper-content",{attrs:{step:"3"}},[a("v-list",{attrs:{disabled:"",dense:""}},[a("v-subheader",{staticClass:"title"},[t._v("Review Order")]),a("v-list-item-group",{attrs:{color:"primary"}},t._l(t.data,(function(e,r){return a("v-list-item",{key:r},[a("v-list-item-content",[a("v-list-item-title",[t._v(" "+t._s(r)+" : "+t._s(e)+" ")])],1)],1)})),1)],1),a("v-btn",{attrs:{color:"primary"},on:{click:t.submitOrder}},[t._v("Submit")]),a("v-btn",{attrs:{text:""},on:{click:t.previous}},[t._v("Go Back")])],1)},je=[],Fe={props:{previous:Function,submitOrder:Function,data:Object}},Te=Fe,Ie=a("1baa"),Ee=a("e0c7"),qe=Object(u["a"])(Te,Se,je,!1,null,null,null),Be=qe.exports;p()(qe,{VBtn:v["a"],VList:h["a"],VListItem:b["a"],VListItemContent:g["a"],VListItemGroup:Ie["a"],VListItemTitle:g["b"],VStepperContent:xe["a"],VSubheader:Ee["a"]});var Ae={components:{ContactInfo:ke,ShippingInfo:Oe,Review:Be},data:function(){return{step:1,checkoutForm:!1,data:{email:"",name:"",phone:"",street:"",state:"",zip:""},rules:{required:function(t){return!!t||"Required."},zip:function(t){return 5==t.length||"Must be five characters"},email:function(t){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Invalid e-mail."},phone:function(t){var e=/\d{10}/;return e.test(t)||"Invalid phone number."}}}},methods:{next:function(){this.step+=1},previous:function(){this.step-=1},submitOrder:function(){this.$router.push({name:"ThankYou"})}}},Le=Ae,Re=a("ce7e"),ze=a("7e85"),He=a("9c54"),Me=a("56a4"),Ne=Object(u["a"])(Le,me,ve,!1,null,null,null),Ye=Ne.exports;p()(Ne,{VCol:rt["a"],VContainer:R["a"],VDivider:Re["a"],VRow:z["a"],VStepper:ze["a"],VStepperHeader:He["a"],VStepperItems:He["b"],VStepperStep:Me["a"]});var De=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("v-overlay",{staticClass:"flex-column",attrs:{value:t.overlay}},[a("p",[t._v("Processing order...")]),a("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),t.overlay?t._e():a("v-container",[a("v-row",[a("v-col",{attrs:{sm:"6","offset-sm":"3",xl:"4","offset-xl":"4"}},[a("h2",[t._v(" Thank you for your purchase! It will be shipped soon. ")])])],1)],1)],1)},Ue=[],Je={data:function(){return{overlay:!1}},mounted:function(){var t=this;setTimeout((function(){t.overlay=!1}),4e3)},beforeMount:function(){this.overlay=!0}},Ge=Je,We=a("a797"),Qe=a("490a"),Ze=Object(u["a"])(Ge,De,Ue,!1,null,null,null),Ke=Ze.exports;p()(Ze,{VCol:rt["a"],VContainer:R["a"],VOverlay:We["a"],VProgressCircular:Qe["a"],VRow:z["a"]}),r["a"].use(T["a"]);var Xe=[{path:"/",name:"Home",component:ht},{path:"/store",name:"Store",component:Mt},{path:"/cart",name:"Cart",component:pe},{path:"/checkout",name:"Checkout",component:Ye},{path:"/thankyou",name:"ThankYou",component:Ke},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],ta=new T["a"]({routes:Xe}),ea=ta,aa=(a("c740"),a("5530")),ra=a("2f62"),na=[{id:0,image:"https://i.etsystatic.com/11774051/r/il/565a82/1482187054/il_570xN.1482187054_s6hy.jpg",name:"Switch Joy-Con",price:339.99},{id:1,image:"https://cdn02.nintendo-europe.com/media/images/08_content_images/systems_5/nintendo_switch_3/not_approved_1/TEMP_img-01.jpg",name:"Nintendo Switch",price:1299.99},{id:2,image:"https://cnet1.cbsistatic.com/img/CWesyY_YYT2zCnJUeCONrLuYvpc=/940x0/2019/03/29/e923f626-5a9b-4693-9385-abb37a4421b1/nintendo-switch-pro-controller.jpg",name:"Pro Controller",price:239.99},{id:3,image:"https://www.zeldadungeon.net/wp-content/uploads/2019/09/Links-Awakening-Walkthrough.jpg",name:"Link Awakening",price:229.99},{id:4,image:"https://www.nintendo.com//content/dam/noa/en_US/games/switch/s/super-mario-odyssey-switch/super-mario-odyssey-switch-hero.jpg",name:"Mario Oddysey",price:229.99},{id:5,image:"https://sickr.files.wordpress.com/2020/09/pokemon_sword__shield.jpg?w=1280&h=720&crop=1",name:"Pokemon Game",price:229.99},{id:6,image:"https://cdn.pocket-lint.com/r/s/1200x/assets/images/154419-games-review-hands-on-playstation-5-hands-on-pics-image1-tbq3hzlrkw.jpg",name:"PlayStation 5",price:2199.99},{id:7,image:"https://cdn.wccftech.com/wp-content/uploads/2021/03/leaked-elden-ring-videos-clips.jpg",name:"Elden Ring",price:279.99},{id:8,image:"https://ffvii-remake.square-enix-games.com/share-images/SEA_END_fb_share_img_1200x630.jpg",name:"Final Fantasy VII",price:279.99},{id:9,image:"https://image.api.playstation.com/vulcan/img/cfn/113071rVtz7cVFuSIn-T3Ki53xyChyWx-urVk1Jr7uidoVYYsV2bqBeFE0Hd6QgEFQ1zyUYhQUlT93Gf_hAvaYEoZkMpmWqk.png",name:"Kingdom Hearts",price:279.99}];r["a"].use(ra["a"]);var oa=new ra["a"].Store({state:{products:na,initialProducts:JSON.parse(JSON.stringify(na)),snackbar:{show:!1,variant:"success",message:"Success! Item added to the cart."},cart:[]},getters:{getProductsLength:function(t){return t.products.length}},mutations:{addItemToCart:function(t,e){var a=e.itemId,r=e.image,n=e.name,o=e.price,i=e.quantity,s=t.cart.findIndex((function(t){return t.itemId===a}));-1===s?t.cart.push({itemId:a,image:r,name:n,price:o,quantity:i}):t.cart[s].quantity=t.cart[s].quantity+i},removeItemFromCart:function(t,e){t.cart=t.cart.filter((function(t){return t.itemId!==e.itemId}))},updateSnackBar:function(t,e){t.snackbar=Object(aa["a"])(Object(aa["a"])({},t.snackbar),e)}},actions:{},modules:{}}),ia=a("f309");r["a"].use(ia["a"]);var sa=new ia["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:ea,store:oa,vuetify:sa,render:function(t){return t(F)}}).$mount("#app")}});
//# sourceMappingURL=app.7b2ff849.js.map