(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+o3X":function(t,a,e){t.exports=e.p+"assets/img/profile-picture.e0c035f0.jpg"},"Ugv+":function(t,a,e){"use strict";var o={props:["posts"]},s=e("KHd+"),i=e("ZUTo"),n=e.n(i),r=e("gzZi"),c=e("sK+t"),l=e("mdmw"),p=e("zCDB"),d=e("Yq0q"),u=e("pSOK"),v=e("zn5u"),g=e("D9m0"),h=Object(s.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-row",t._l(t.posts,(function(a){return e("v-col",{key:a.node.id,staticClass:"col-12"},[e("v-card",[e("v-card-title",[e("g-link",{attrs:{to:a.node.path}},[t._v("\n\t\t\t\t\t\t"+t._s(a.node.title)+"\n\t\t\t\t\t")])],1),e("v-card-subtitle",[e("span",[t._v("Published on: "+t._s(a.node.date))])]),e("v-card-text",[t._v(t._s(a.node.description))]),e("v-card-actions",[e("v-btn",{attrs:{text:""}},[e("g-link",{attrs:{to:a.node.path}},[t._v("Read")])],1)],1),e("v-divider"),t._l(a.node.tags,(function(a){return e("g-link",{key:a.id,attrs:{to:a.path}},[e("v-chip",{staticClass:"ma-2",attrs:{color:a.id.toLowerCase(),label:""}},[t._v("\n\t\t\t\t\t\t"+t._s("#"+a.id)+"\n\t\t\t\t\t")])],1)}))],2)],1)})),1)],1)}),[],!1,null,null,null);a.a=h.exports;n()(h,{VBtn:r.a,VCard:c.a,VCardActions:l.a,VCardSubtitle:l.b,VCardText:l.c,VCardTitle:l.d,VChip:p.a,VCol:d.a,VContainer:u.a,VDivider:v.a,VRow:g.a})},iyQ6:function(t,a,e){"use strict";e.r(a);var o={metaInfo:function(){return{title:"Nicholas Lee",meta:[{property:"og:url",name:"og:url",content:this.$static.metadata.siteUrl+this.$static.metadata.pathPrefix},{property:"og:type",name:"og:type",content:"blog"},{property:"og:title",name:"og:title",content:"Nicholas Lee | My Blog"},{property:"og:description",name:"og:description",content:"Nicholas Lee | Web Developer Blog"},{property:"og:image",name:"og:image",content:this.$static.metadata.siteUrl+this.$static.metadata.pathPrefix+"/images/share/home.png"}]}},components:{BlogPostList:e("Ugv+").a}},s=e("KHd+"),i=e("Kw5r"),n=i.default.config.optionMergeStrategies.computed,r={metadata:{siteUrl:"https://nicholaskhang.github.io/",pathPrefix:"my-blog"}},c=function(t){var a=t.options;a.__staticData?a.__staticData.data=r:(a.__staticData=i.default.observable({data:r}),a.computed=n({$static:function(){return a.__staticData.data}},a.computed))},l=null,p=e("ZUTo"),d=e.n(p),u=e("ghKu"),v=e("Yq0q"),g=e("pSOK"),h=e("D9m0"),m=Object(s.a)(o,(function(){var t=this.$createElement,a=this._self._c||t;return a("Layout",[a("v-container",{staticClass:"text-center"},[a("v-row",[a("v-col",{staticClass:"pa-0"},[a("v-avatar",{attrs:{size:"128px"}},[a("img",{attrs:{src:e("+o3X"),alt:"profile-picture"}})])],1)],1),a("v-row",[a("v-col",{staticClass:"pa-0"},[a("h1",{staticClass:"font-exan"},[this._v("Nicholas Lee")])])],1),a("v-row",[a("v-col",{staticClass:"pa-0"},[a("h2",{staticClass:"font-exan"},[this._v("Web Developer Blog")])])],1)],1),a("BlogPostList",{attrs:{posts:this.$page.posts.edges}})],1)}),[],!1,null,null,null);"function"==typeof c&&c(m),"function"==typeof l&&l(m);a.default=m.exports;d()(m,{VAvatar:u.a,VCol:v.a,VContainer:g.a,VRow:h.a})}}]);