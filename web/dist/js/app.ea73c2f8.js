(function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],d=0,v=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(v.length)v.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("6f21"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e623"),a("e379"),a("5dc8"),a("37e1");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-navigation-drawer",{staticClass:"pt-2",attrs:{color:"indigo",absolute:"",app:"",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{staticClass:"py-0 transparent",attrs:{nav:""}},[a("v-list-item",{attrs:{link:"",router:"",to:"/geral"}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v("Geral")])],1)],1),a("v-list-item",{attrs:{link:"",router:"",to:"/users"}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v("Usuários")])],1)],1),a("v-list-item",{attrs:{link:"",router:"",to:"/cadastro"}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v("Gerenciar Usuários")])],1)],1),a("v-list-item",{attrs:{link:"",router:"",to:"/config"}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v("Configurações")])],1)],1)],1)],1),a("v-content",{staticClass:"pt-5 grey lighten-4"},[a("div",{staticClass:"ml-2"},[a("v-btn",{attrs:{icon:"",color:"indigo"},on:{click:function(e){t.drawer=!t.drawer}}},[a("v-icon",{attrs:{large:""}},[t._v("mdi-menu")])],1)],1),a("router-view")],1)],1)},s=[],i=a("8aa50"),o=a.n(i),l={apiKey:"AIzaSyBTGxXqfebtNNB_MySzX9s6eI_V_LJ9NkI",authDomain:"late-34a1d.firebaseapp.com",databaseURL:"https://late-34a1d.firebaseio.com",projectId:"late-34a1d",storageBucket:"late-34a1d.appspot.com",messagingSenderId:"20315797584",appId:"1:20315797584:web:d81289f3704113da1a3955",measurementId:"G-BQH47233N1"},c=o.a.initializeApp(l),u=c.database(),d=u,v={name:"App",components:{},data:function(){return{drawer:!0}},created:function(){var t=d.ref("users");t.on("value",(function(t){console.log(t.val())}))}},f=v,m=(a("034f"),a("0c7c")),p=a("6544"),g=a.n(p),h=a("7496"),b=a("8336"),x=a("a75b"),y=a("132d"),_=a("8860"),w=a("da13"),C=a("5d23"),V=a("f774"),k=Object(m["a"])(f,r,s,!1,null,null,null),j=k.exports;g()(k,{VApp:h["a"],VBtn:b["a"],VContent:x["a"],VIcon:y["a"],VList:_["a"],VListItem:w["a"],VListItemContent:C["a"],VListItemTitle:C["b"],VNavigationDrawer:V["a"]});var S=a("f309");n["a"].use(S["a"]);var D=new S["a"]({}),O=a("8c4f"),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-3"},[a("span",{staticClass:"subheading grey--text ml-4"},[t._v("Todos os registros")]),a("v-container",{staticClass:"mt-4 grey lighten-4",attrs:{"grid-list-lg":""}},[a("v-layout",{attrs:{row:"","justify-center":"","align-center":""}},[a("v-flex",{attrs:{xs12:"",sm10:"",md8:"",lg6:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs3:""}},[a("v-text-field",{attrs:{label:"Dia","single-line":"",dense:"",outlined:""},model:{value:t.dia,callback:function(e){t.dia=e},expression:"dia"}})],1),a("v-flex",{attrs:{xs3:""}},[a("v-text-field",{attrs:{label:"Mês","single-line":"",dense:"",outlined:""},model:{value:t.mes,callback:function(e){t.mes=e},expression:"mes"}})],1),a("v-flex",{attrs:{xs3:""}},[a("v-text-field",{attrs:{label:"Ano","single-line":"",outlined:"",dense:""},model:{value:t.ano,callback:function(e){t.ano=e},expression:"ano"}})],1),a("v-flex",{attrs:{xs3:""}},[a("v-btn",{attrs:{color:"indigo white--text"},on:{click:t.filtrar}},[t._v("Filtrar")])],1)],1),a("v-layout",{attrs:{column:""}},t._l(t.documents,(function(e){return a("v-flex",{key:e.timestamp},[a("v-card",{staticStyle:{"border-radius":"10px"},attrs:{hover:""}},[a("v-card-title",{attrs:{"primary-title":"","align-center":""}},[a("v-layout",{attrs:{row:"",wrap:"","justify-space-between":"","align-center":""}},[t.breakpoint?a("span",{staticClass:"subtitle-1"},[t._v(" "+t._s(e.nome)+" ")]):a("span",{staticClass:"title"},[t._v(" "+t._s(e.nome)+" ")]),a("span",{staticClass:"subtitle-1 font-weight-bold indigo--text"},[t._v(t._s(t.convert(e.timestamp)))]),e.atrasado?a("span",{staticClass:"subtitle-1 font-weight-bold error--text"},[t._v("Atrasado")]):a("span",{staticClass:"subtitle-1 font-weight-bold success--text"},[t._v("Na hora")])])],1)],1)],1)})),1)],1)],1)],1)],1)},A=[],I=(a("4160"),a("fb6a"),a("b0c0"),a("a9e3"),a("b64b"),a("d3b7"),a("25f0"),a("159b"),{data:function(){return{drawer:!0,documents:[],users:[],dia:"",mes:"",ano:""}},created:function(){var t=this,e=d.ref("pontos");e.on("value",(function(e){t.documents=e.val();var a={},n=function(e,a){return t.documents[a]["timestamp"]-t.documents[e]["timestamp"]};Object.keys(t.documents).sort(n).forEach((function(e){a[e]=t.documents[e]})),t.documents=a}))},methods:{filtrar:function(){var t=this,e=Date.parse(this.ano+"-"+this.mes+"-"+this.dia+" 00:00:00");e=e.toString().slice(0,-3),e=Number(e);var a=Date.parse(this.ano+"-"+this.mes+"-"+this.dia+" 20:59:59");a=a.toString().slice(0,-3),a=Number(a);var n=d.ref("pontos").orderByChild("timestamp").startAt(e).endAt(a);n.on("value",(function(e){t.documents=e.val();var a={},n=function(e,a){return t.documents[a]["timestamp"]-t.documents[e]["timestamp"]};n=function(e,a){return t.documents[e]["timestamp"]-t.documents[a]["timestamp"]},Object.keys(t.documents).sort(n).forEach((function(e){a[e]=t.documents[e]})),t.documents=a}))},convert:function(t){var e=t,a=new Date(1e3*e),n=a.getFullYear(),r=a.getMonth()+1;r<10&&(r="0"+r);var s=a.getDate(),i=a.getHours(),o="0"+a.getMinutes(),l="0"+a.getSeconds(),c=i+":"+o.substr(-2)+":"+l.substr(-2)+" em "+s+"/"+r+"/"+n;return c}},computed:{breakpoint:function(){return"xs"===this.$vuetify.breakpoint.name}}}),M=I,F=a("b0af"),N=a("99d9"),B=a("a523"),L=a("0e8f"),E=a("a722"),P=a("8654"),$=Object(m["a"])(M,T,A,!1,null,null,null),J=$.exports;g()($,{VBtn:b["a"],VCard:F["a"],VCardTitle:N["c"],VContainer:B["a"],VFlex:L["a"],VLayout:E["a"],VTextField:P["a"]});var G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-3 grey lighten-4"},[a("span",{staticClass:"subheading grey--text ml-4"},[t._v("Usuários")]),a("v-container",{staticClass:"mt-4 grey lighten-4",attrs:{"grid-list-lg":""}},[a("v-layout",{attrs:{row:"","justify-center":"","align-center":""}},[a("v-flex",{attrs:{xs12:"",sm10:"",md8:"",lg6:""}},[a("v-layout",{attrs:{column:""}},t._l(t.users,(function(e){return a("v-flex",{key:e.id},[a("v-card",{staticStyle:{"border-radius":"10px"},attrs:{hover:""},on:{click:function(a){return a.stopPropagation(),t.openDialog(e.id,e.nome)}}},[a("v-card-title",{attrs:{"primary-title":"","align-center":""}},[a("span",{staticClass:"title"},[t._v(" "+t._s(e.nome)+" ")])])],1)],1)})),1)],1)],1)],1),a("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline lighten-2",attrs:{"primary-title":""}},[a("span",[t._v(t._s(t.nome))])]),a("v-card-text",[a("v-layout",{attrs:{column:""}},t._l(t.documents,(function(e){return a("v-layout",{key:e.timestamp,staticClass:"pa-2",attrs:{row:"","justify-space-between":"","align-center":""}},[a("span",{staticClass:"title indigo--text"},[t._v(t._s(t.convert(e.timestamp)))]),e.atrasado?a("span",{staticClass:"subtitle-1 font-weight-bold error--text"},[t._v("Atrasado")]):a("span",{staticClass:"subtitle-1 font-weight-bold success--text"},[t._v("Na hora")])])})),1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"indigo",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Fechar ")])],1)],1)],1)],1)},H=[],U={data:function(){return{drawer:!0,users:[],dialog:!1,documents:[],nome:""}},created:function(){var t=this,e=d.ref("users");e.on("value",(function(e){t.users=e.val()}))},methods:{openDialog:function(t,e){var a=this;this.nome=e;var n=d.ref("pontos");n.orderByChild("id").equalTo(t).on("value",(function(t){a.documents=t.val(),a.dialog=!0;var e={},n=function(t,e){return a.documents[e]["timestamp"]-a.documents[t]["timestamp"]};Object.keys(a.documents).sort(n).forEach((function(t){e[t]=a.documents[t]})),a.documents=e,console.log(e)}))},convert:function(t){var e=t,a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=new Date(1e3*e),r=n.getFullYear(),s=a[n.getMonth()],i=n.getDate(),o=n.getHours(),l="0"+n.getMinutes(),c="0"+n.getSeconds(),u=o+":"+l.substr(-2)+":"+c.substr(-2)+" no dia "+i+" "+s+" "+r;return u}}},z=U,R=a("169a"),q=a("ce7e"),X=a("2fa4"),Y=Object(m["a"])(z,G,H,!1,null,null,null),K=Y.exports;g()(Y,{VBtn:b["a"],VCard:F["a"],VCardActions:N["a"],VCardText:N["b"],VCardTitle:N["c"],VContainer:B["a"],VDialog:R["a"],VDivider:q["a"],VFlex:L["a"],VLayout:E["a"],VSpacer:X["a"]});var Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-3"},[a("span",{staticClass:"subheading grey--text ml-4"},[t._v("Gerenciar usuários")]),a("v-container",{staticClass:"mt-4 grey lighten-4",attrs:{"grid-list-lg":""}},[a("v-layout",{attrs:{row:"","justify-center":"","align-center":""}},[a("h2",[t._v("Adicionar novo usuário")])]),a("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[a("v-flex",{attrs:{xs2:""}},[a("v-text-field",{attrs:{dense:"",label:"ID","single-line":"",outlined:""},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}})],1),a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{attrs:{dense:"",label:"Nome","single-line":"",outlined:""},model:{value:t.nome,callback:function(e){t.nome=e},expression:"nome"}})],1),a("v-flex",{attrs:{xs3:""}},[a("v-btn",{attrs:{color:"indigo white--text"},on:{click:function(e){return t.adicionar()}}},[t._v("Adicionar")])],1)],1),a("v-layout",{attrs:{row:"","justify-center":"","align-center":""}},[a("h2",[t._v("Remover usuário")])]),a("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[a("v-flex",{attrs:{xs2:""}},[a("v-text-field",{attrs:{dense:"",label:"ID","single-line":"",outlined:""},model:{value:t.idToDel,callback:function(e){t.idToDel=e},expression:"idToDel"}})],1),a("v-flex",{attrs:{xs2:""}},[a("v-btn",{attrs:{color:"indigo white--text"},on:{click:function(e){return t.deletar()}}},[t._v("Remover")])],1)],1)],1)],1)},W=[],Z={data:function(){return{id:"",idToDel:"",nome:"",paraComparar:""}},created:function(){},methods:{deletar:function(){d.ref("/users").child(this.idToDel).remove()},adicionar:function(){var t=this;d.ref("/compare").on("value",(function(e){t.paraComparar=!e.val(),t.paraComparar?t.paraComparar=1:t.paraComparar=0})),d.ref("/users/"+this.id).set({id:this.id,nome:this.nome,paraComparar:this.paraComparar}),d.ref().child("cadastrar").set(Number(this.id))}}},tt=Z,et=Object(m["a"])(tt,Q,W,!1,null,null,null),at=et.exports;g()(et,{VBtn:b["a"],VContainer:B["a"],VFlex:L["a"],VLayout:E["a"],VTextField:P["a"]});var nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-3"},[a("span",{staticClass:"subheading grey--text ml-4"},[t._v("Configurações")]),a("v-container",{staticClass:"mt-4 grey lighten-4",attrs:{"grid-list-lg":""}},[a("v-layout",{attrs:{row:"","justify-center":""}},[a("h1",{staticClass:"indigo--text"},[t._v(t._s(t.horasSalva)+":"+t._s(t.minutosSalvos))])]),a("v-layout",{attrs:{row:"","justify-center":""}},[a("h2",[t._v("Horário do ponto")])]),a("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[a("v-flex",{attrs:{xs2:""}},[a("v-text-field",{attrs:{dense:"",label:"Horas","single-line":"",outlined:""},model:{value:t.horas,callback:function(e){t.horas=e},expression:"horas"}})],1),a("v-flex",{attrs:{xs2:""}},[a("v-text-field",{attrs:{dense:"",label:"Minutos","single-line":"",outlined:""},model:{value:t.minutos,callback:function(e){t.minutos=e},expression:"minutos"}})],1),a("v-flex",{attrs:{xs2:""}},[a("v-btn",{attrs:{color:"indigo white--text"},on:{click:function(e){return t.definir()}}},[t._v("Alterar")])],1)],1)],1)],1)},rt=[],st={data:function(){return{horas:"",minutos:"",horasSalva:"",minutosSalvos:""}},created:function(){var t=this;d.ref("/horas").on("value",(function(e){t.horasSalva=e.val()})),d.ref("/minutos").on("value",(function(e){t.minutosSalvos=e.val()}))},methods:{definir:function(){d.ref().child("horas").set(this.horas),d.ref().child("minutos").set(this.minutos),this.horas="",this.minutos=""}}},it=st,ot=Object(m["a"])(it,nt,rt,!1,null,null,null),lt=ot.exports;g()(ot,{VBtn:b["a"],VContainer:B["a"],VFlex:L["a"],VLayout:E["a"],VTextField:P["a"]}),n["a"].use(O["a"]);var ct=new O["a"]({mode:"history",base:"/",routes:[{path:"*",redirect:"/geral"},{path:"/geral",name:"geral",component:J},{path:"/users",name:"users",component:K},{path:"/cadastro",name:"cadastro",component:at},{path:"/config",name:"config",component:lt}]}),ut=ct;n["a"].config.productionTip=!1,new n["a"]({vuetify:D,router:ut,render:function(t){return t(j)}}).$mount("#app")},"6f21":function(t,e,a){}});
//# sourceMappingURL=app.ea73c2f8.js.map