(function(t){function a(a){for(var l,c,n=a[0],i=a[1],o=a[2],v=0,d=[];v<n.length;v++)c=n[v],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&d.push(s[c][0]),s[c]=0;for(l in i)Object.prototype.hasOwnProperty.call(i,l)&&(t[l]=i[l]);u&&u(a);while(d.length)d.shift()();return r.push.apply(r,o||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],l=!0,n=1;n<e.length;n++){var i=e[n];0!==s[i]&&(l=!1)}l&&(r.splice(a--,1),t=c(c.s=e[0]))}return t}var l={},s={app:0},r=[];function c(a){if(l[a])return l[a].exports;var e=l[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=l,c.d=function(t,a,e){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var l in t)c.d(e,l,function(a){return t[a]}.bind(null,l));return e},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="my-covid19/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],i=n.push.bind(n);n.push=a,n=n.slice();for(var o=0;o<n.length;o++)a(n[o]);var u=i;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var l=e("85ec"),s=e.n(l);s.a},"1e9b":function(t,a,e){},"2f23":function(t,a,e){"use strict";var l=e("1e9b"),s=e.n(l);s.a},"2f74":function(t,a,e){"use strict";var l=e("acf9"),s=e.n(l);s.a},"44c8":function(t,a,e){"use strict";var l=e("a49a"),s=e.n(l);s.a},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var l=e("2b0e"),s=e("2f62"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[t._m(0),e("div",{staticClass:"body"},[e("router-view")],1),e("div",{staticClass:"footer"},[e("Footer")],1)])},c=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"title"},[e("h1",[t._v("全国の"),e("br"),t._v("COVID-19データ")])])}],n=e("9d10"),i={components:{Footer:n["default"]}},o=i,u=(e("034f"),e("2877")),v=Object(u["a"])(o,r,c,!1,null,null,null),d=v.exports,p=e("8c4f"),f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"BodyContent"},[e("div",{staticClass:"Select"},[e("Select")],1),e("div",{staticClass:"Data"},[e("router-view")],1)])},b=[],C=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-select",{attrs:{placeholder:"Select"},on:{change:t.selectPrefectures},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}},t._l(t.prefectures,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)},_=[];e("a9e3");l["default"].use(s["a"]);var h=new s["a"].Store({state:{apiData:{}},mutations:{setTotalData:function(t,a){t.apiData=a},setPrefectureData:function(t,a){t.apiData=a},resetPrefectureData:function(t){t.apiData={}}}}),m=h,D={data:function(){return{prefectures:[{value:"0",label:"全国"},{value:"1",label:"北海道"},{value:"2",label:"青森県"},{value:"3",label:"岩手県"},{value:"4",label:"宮城県"},{value:"5",label:"秋田県"},{value:"6",label:"山形県"},{value:"7",label:"福島県"},{value:"8",label:"茨城県"},{value:"9",label:"栃木県"},{value:"10",label:"群馬県"},{value:"11",label:"埼玉県"},{value:"12",label:"千葉県"},{value:"13",label:"東京都"},{value:"14",label:"神奈川県"},{value:"15",label:"新潟県"},{value:"16",label:"富山県"},{value:"17",label:"石川県"},{value:"18",label:"福井県"},{value:"19",label:"山梨県"},{value:"20",label:"長野県"},{value:"21",label:"岐阜県"},{value:"22",label:"静岡県"},{value:"23",label:"愛知県"},{value:"24",label:"三重県"},{value:"25",label:"滋賀県"},{value:"26",label:"京都府"},{value:"27",label:"大阪府"},{value:"28",label:"兵庫県"},{value:"29",label:"奈良県"},{value:"30",label:"和歌山県"},{value:"31",label:"鳥取県"},{value:"32",label:"島根県"},{value:"33",label:"岡山県"},{value:"34",label:"広島県"},{value:"35",label:"山口県"},{value:"36",label:"徳島県"},{value:"37",label:"香川県"},{value:"38",label:"愛媛県"},{value:"39",label:"高知県"},{value:"40",label:"福岡県"},{value:"41",label:"佐賀県"},{value:"42",label:"長崎県"},{value:"43",label:"熊本県"},{value:"44",label:"大分県"},{value:"45",label:"宮崎県"},{value:"46",label:"鹿児島県"},{value:"47",label:"沖縄県"}],value:""}},methods:{selectPrefectures:function(){var t=this,a=Number(this.value);if(0===a)this.$axios.get("https://covid19-japan-web-api.now.sh/api/v1/total").then((function(a){m.commit("setTotalData",a.data),t.$router.push("/total")})).catch((function(t){console.error(t)}));else{var e=a-1;this.$axios.get("https://covid19-japan-web-api.now.sh/api/v1/prefectures").then((function(l){m.commit("resetPrefectureData"),m.commit("setPrefectureData",l.data[e]),t.$router.push("/"+a)})).catch((function(t){console.error(t)}))}}}},x=D,y=(e("44c8"),Object(u["a"])(x,C,_,!1,null,"a8aaf168",null)),w=y.exports,g={components:{Select:w}},j=g,O=(e("2f74"),Object(u["a"])(j,f,b,!1,null,null,null)),T=O.exports,P=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"eachData"},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"CardTitle"},[e("p",[t._v("日にち")])]),e("div",{staticClass:"CardContent"},[e("p",[t._v(t._s(t.totalData.date))])])]),e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"CardTitle"},[e("p",[t._v("PCR検査人数")])]),e("div",{staticClass:"CardContent"},[e("p",[t._v(t._s(t.totalData.pcr)+" 人")])])]),e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"CardTitle"},[e("p",[t._v("入院者数")])]),e("div",{staticClass:"CardContent"},[e("p",[t._v(t._s(t.totalData.hospitalize)+" 人")])])]),e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"CardTitle"},[e("p",[t._v("陽性者数")])]),e("div",{staticClass:"CardContent"},[e("p",[t._v(t._s(t.totalData.positive)+" 人")])])]),e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"CardTitle"},[e("p",[t._v("重症者数")])]),e("div",{staticClass:"CardContent"},[e("p",[t._v(t._s(t.totalData.severe)+" 人")])])]),e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"CardTitle"},[e("p",[t._v("退院者数")])]),e("div",{staticClass:"CardContent"},[e("p",[t._v(t._s(t.totalData.discharge)+" 人")])])]),e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"CardTitle"},[e("p",[t._v("死亡者数")])]),e("div",{staticClass:"CardContent"},[e("p",[t._v(t._s(t.totalData.death)+" 人")])])])],1)},$=[],k={data:function(){return{totalData:m.state.apiData}}},S=k,E=(e("64c4"),Object(u["a"])(S,P,$,!1,null,"35e438b9",null)),F=E.exports,M=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"eachData"},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"CardTitle"},[e("p",[t._v("日にち")])]),e("div",{staticClass:"CardContent"},[e("p",[t._v(t._s(t.prefectureData.last_updated.pcr_date))])])]),e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"CardTitle"},[e("p",[t._v("PCR検査人数")])]),e("div",{staticClass:"CardContent"},[e("p",[t._v(t._s(t.prefectureData.pcr)+" 人")])])]),e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"CardTitle"},[e("p",[t._v("入院者数")])]),e("div",{staticClass:"CardContent"},[e("p",[t._v(t._s(t.prefectureData.hospitalize)+" 人")])])]),e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"CardTitle"},[e("p",[t._v("陽性者数")])]),e("div",{staticClass:"CardContent"},[e("p",[t._v(t._s(t.prefectureData.cases)+" 人")])])]),e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"CardTitle"},[e("p",[t._v("重症者数")])]),e("div",{staticClass:"CardContent"},[e("p",[t._v(t._s(t.prefectureData.severe)+" 人")])])]),e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"CardTitle"},[e("p",[t._v("退院者数")])]),e("div",{staticClass:"CardContent"},[e("p",[t._v(t._s(t.prefectureData.discharge)+" 人")])])]),e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"CardTitle"},[e("p",[t._v("死亡者数")])]),e("div",{staticClass:"CardContent"},[e("p",[t._v(t._s(t.prefectureData.deaths)+" 人")])])])],1)},R=[],L={computed:{prefectureData:function(){return m.state.apiData}}},q=L,z=(e("d286"),Object(u["a"])(q,M,R,!1,null,"cd5ece2a",null)),H=z.exports,I=e("bc3a"),J=e.n(I);l["default"].use(p["a"]),l["default"].prototype.$axios=J.a;var A=[{path:"/",component:T,children:[{path:"total",component:F},{path:":id",component:H}]}],B=new p["a"]({mode:"history",base:"my-covid19/",routes:A}),N=B,V=e("5c96"),G=e.n(V);l["default"].use(s["a"]),l["default"].use(G.a),l["default"].config.productionTip=!1,new l["default"]({router:N,render:function(t){return t(d)}}).$mount("#main")},"5b7e":function(t,a,e){},"64c4":function(t,a,e){"use strict";var l=e("5b7e"),s=e.n(l);s.a},"85ec":function(t,a,e){},"962e":function(t,a,e){"use strict";e.d(a,"a",(function(){return l})),e.d(a,"b",(function(){return s}));var l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"FooterContent"},[e("p",{staticClass:"Repositry"},[t._v("参照元APIリポジトリ")]),e("el-link",{staticClass:"FooterLink",attrs:{href:"https://github.com/ryo-ma/covid19-japan-web-api"}},[t._v("https://github.com/ryo-ma/covid19-japan-web-api")]),e("p",{staticClass:"Developer"},[t._v("開発者のRyota Sakamotoさん")]),e("el-link",{staticClass:"FooterLink",attrs:{href:"https://qiita.com/ryo-ma"}},[t._v("https://qiita.com/ryo-ma")]),e("p",{staticClass:"MinistryOfHealth"},[t._v("厚生労働省HP")]),e("el-link",{staticClass:"FooterLink",attrs:{href:"https://www.mhlw.go.jp/index.html"}},[t._v("https://www.mhlw.go.jp/index.html")])],1)},s=[]},"985c":function(t,a,e){},"9d10":function(t,a,e){"use strict";var l=e("962e"),s=e("cb0a"),r=(e("2f23"),e("2877")),c=Object(r["a"])(s["default"],l["a"],l["b"],!1,null,null,null);a["default"]=c.exports},a49a:function(t,a,e){},a9be:function(t,a){},acf9:function(t,a,e){},cb0a:function(t,a,e){"use strict";var l=e("a9be"),s=e.n(l);a["default"]=s.a},d286:function(t,a,e){"use strict";var l=e("985c"),s=e.n(l);s.a}});