(window["webpackJsonpsample-app"]=window["webpackJsonpsample-app"]||[]).push([[0],{100:function(e,t,r){e.exports=r(133)},133:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(10),c=r.n(i),o=r(23),l=r(33),s=r(76),u=r.n(s),m=r(159),p=r(160),d=r(89),f=Object(d.a)({}),b=Object(a.createContext)(void 0),h=r(7),g=r(2),E=r(158);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(r,!0).forEach((function(t){Object(h.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(e){var t=e.children,r=Object(g.a)(e,["children"]),a=Object(E.a)().formatMessage;return n.a.createElement(b.Provider,{value:O({formatMessage:a},r)},t)},j=r(37),w=r(180),k=function(e){var t=e.children,r=e.localeData,i=e.locale,c=Object(a.useState)(i||"en"),o=Object(j.a)(c,2),l=o[0],s=o[1],u=r[l];return n.a.createElement(w.a,{locale:l,messages:u},n.a.createElement(y,{locale:l,updateLocale:s},t))},x=r(35),P=r(15),N=r.n(P),S=r(21);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(r,!0).forEach((function(t){Object(h.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L=function(e){return function(){return function(){var t=Object(S.a)(N.a.mark((function t(r){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.skipAuth){t.next=2;break}return t.abrupt("return",r);case 2:return t.abrupt("return",D({},r,{headers:D({},r.headers,{Authorization:"Bearer ".concat(e)})}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}};function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(r,!0).forEach((function(t){Object(h.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(r,!0).forEach((function(t){Object(h.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I=function(){return function(){var e=Object(S.a)(N.a.mark((function e(t){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.params){e.next=2;break}return e.abrupt("return",t);case 2:return r=Object.entries(t.params).filter((function(e){return void 0!==Object(j.a)(e,1)[0]})).map((function(e){var t=Object(j.a)(e,2),r=t[0],a=t[1];return Array.isArray(a)?"".concat(r,"=").concat(a.join(",")):"".concat(r,"=").concat(a)})).join("&"),e.abrupt("return",A({},t,{endpoint:"".concat(t.endpoint,"?").concat(r),params:void 0}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(r,!0).forEach((function(t){Object(h.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var V=function(){return function(){var e=Object(S.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.skipAuth){e.next=2;break}return e.abrupt("return",t);case 2:return e.abrupt("return",W({},t,{headers:W({},t.headers,{"cache-control":"no-cache"})}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},B=function(){var e=Object(a.useContext)(b);if(void 0===e)throw new Error("useLocale must be used within a LocaleContextController");return e},q=Object(a.createContext)(void 0),R=Object(a.createContext)(void 0),X=r(45),F=r.n(X),J=r(61),G=r.n(J);function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(r,!0).forEach((function(t){Object(h.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var U=function(e,t){switch(t.type){case"auth/start-authorizing":return Q({},e,{isAuthorizing:!0});case"auth/set-authorized":if(!t.decodedToken)throw new Error("Missing decodedToken object in authReducer");return Q({},e,{isAuthorizing:!1,isAuthorized:!0});case"auth/set-unauthorized":return Q({},e,{isAuthorizing:!1,isAuthorized:!1});case"auth/clear-tokens":return Q({},e,{accessToken:"",refreshToken:""});case"auth/set-tokens":if(!t.accessToken||!t.refreshToken)throw new Error("Missing token in authReducer");return Q({},e,{accessToken:t.accessToken,refreshToken:t.refreshToken});default:throw new Error("Unhandled action type: ".concat(t.type))}},K=function(e){var t=e.children,r=Object(a.useReducer)(U,{isAuthorized:!1,isAuthorizing:!0,accessToken:String(F.a.get("accessToken")),refreshToken:String(F.a.get("refreshToken"))}),i=Object(j.a)(r,2),c=i[0],o=i[1];return Object(a.useEffect)((function(){try{F.a.set("accessToken",c.accessToken),F.a.set("refreshToken",c.refreshToken);var e=G()(c.accessToken),t=G()(c.refreshToken),r=1e3*e.exp,a=1e3*t.exp;if(r>(new Date).getTime()||a>(new Date).getTime())return o({type:"auth/set-authorized",decodedToken:e});throw new Error("User is unauthorized")}catch(n){return o({type:"auth/set-unauthorized"})}}),[c.accessToken,c.refreshToken]),n.a.createElement(q.Provider,{value:c},n.a.createElement(R.Provider,{value:o},t))},Y=function(){var e=Object(a.useContext)(R);if(void 0===e)throw new Error("useAuthDispatch must be used within an AuthContextController");return e},Z=function(){var e=Object(a.useContext)(q);if(void 0===e)throw new Error("useAuthState must be used within an AuthContextController");return e},$=function(e){var t=e.children,r=Z().accessToken,i=Object(a.useMemo)((function(){return Object(x.createClient)({requestInterceptors:[(e=String("https://cdn.emnify.net/api/v1/"),function(){return function(){var t=Object(S.a)(N.a.mark((function t(r){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.endpoint.startsWith("http")){t.next=2;break}return t.abrupt("return",r);case 2:return t.abrupt("return",z({},r,{endpoint:"".concat(e).concat(r.endpoint)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}),I,L(r),V]});var e}),[r]);return n.a.createElement(x.ClientContextProvider,{client:i},t)},ee=r(79),te=u()(ee),re=function(e){var t=e.children;return n.a.createElement(k,{localeData:{en:te}},n.a.createElement(K,null,n.a.createElement($,null,n.a.createElement(m.a,{theme:f},n.a.createElement(p.a,null),n.a.createElement(l.a,{basename:"/"},t)))))},ae=function(){var e=Y();return Object(a.useEffect)((function(){e({type:"auth/clear-tokens"})}),[e]),n.a.createElement(o.a,{to:"/login"})},ne=function(e){return{skipAuth:!0,endpoint:"authenticate",method:"POST",body:e}},ie=r(83),ce=r.n(ie),oe=r(80),le=r(84),se=r.n(le),ue=Object(oe.a)((function(e){return{root:{display:"flex",height:"100vh"},leftSide:Object(h.a)({backgroundImage:"url(".concat(se.a,")"),backgroundSize:"cover",flex:"0 0 50%"},e.breakpoints.down("sm"),{display:"none"}),rightSide:Object(h.a)({flex:"0 0 50%",display:"flex",flexFlow:"column",justifyContent:"center"},e.breakpoints.down("sm"),{flex:"0 0 100%"}),formWrapper:Object(h.a)({padding:e.spacing(5,15)},e.breakpoints.down("sm"),{padding:e.spacing(5)}),logo:{maxWidth:"100%",width:"290px",display:"flex",margin:"0 auto 32px",objectFit:"contain"}}})),me=r(56),pe=r(162),de=r(164),fe=r(165),be=r(134),he=r(166),ge=r(167),Ee=r(179),ve=r(170),Oe=r(171),ye=r(172),je=r(173),we=r(174),ke=r(175),xe=r(176),Pe=r(182),Ne=r(177),Se=function(e){var t=e.children,r=e.header;return n.a.createElement(fe.a,{container:!0,spacing:2},r&&n.a.createElement(fe.a,{item:!0,xs:12},n.a.createElement(fe.a,{container:!0,justify:"center"},r)),n.a.createElement(fe.a,{item:!0,xs:12},n.a.createElement(fe.a,{container:!0,justify:"center"},t)))},Te=r(86),De=r.n(Te),Le=Object(oe.a)((function(){return{title:{flexGrow:1}}})),Ce=function(e){var t=e.children,r=Le();return n.a.createElement(pe.a,{position:"static"},n.a.createElement(ge.a,null,n.a.createElement(he.a,{variant:"h6",className:r.title},t),n.a.createElement(l.b,{to:"/logout",style:{color:"white"}},n.a.createElement(ve.a,{color:"inherit"},n.a.createElement(De.a,null)))))},ze=function(e){var t=e.type,r=void 0===t?"text":t,i=e.label,c=e.input,o=e.meta,l=e.placeholder,s=Object(a.useMemo)((function(){if(o.touched&&o.error||!o.dirtySinceLastSubmit&&o.submitError)return o.error||o.submitError}),[o]);return n.a.createElement(Ee.a,{id:c.name,label:i,style:{margin:"16px 0 16px 0"},placeholder:l,fullWidth:!0,margin:"normal",variant:"outlined",type:r,value:c.value,onChange:c.onChange,InputLabelProps:{shrink:!0},helperText:s})},_e=Object(oe.a)((function(){return{errorMessage:{display:"flex",width:"100%",color:"red",marginBottom:"12px"}}})),Ae=function(e){var t=e.onSubmit,r=B().formatMessage,a=_e();return n.a.createElement(me.b,{onSubmit:t,render:function(e){var t=e.handleSubmit,i=e.submitting,c=e.pristine,o=e.submitErrors,l=e.dirtySinceLastSubmit;return n.a.createElement("form",{onSubmit:t},n.a.createElement(me.a,{name:"username"},(function(e){var t=e.input,a=e.meta;return n.a.createElement(ze,{label:r({id:"login.email"}),input:t,meta:a,type:"text",placeholder:r({id:"login.enterEmail"})})})),n.a.createElement(me.a,{name:"password"},(function(e){var t=e.input,a=e.meta;return n.a.createElement(ze,{label:r({id:"login.password"}),type:"password",input:t,meta:a,placeholder:r({id:"login.enterPassword"})})})),!i&&o&&o.id&&!l&&n.a.createElement("span",{className:a.errorMessage},r({id:o.id})),n.a.createElement(de.a,{variant:"contained",type:"submit",disabled:c||i,color:"primary"},r({id:"login.login"})))}})},Ie=r(87),Me=r.n(Ie),We=function(e){var t=e.onSubmit,r=ue(),a=Z().isAuthorized,i=Y(),c=function(){var e=Object(S.a)(N.a.mark((function e(r){var a,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({username:r.username,password:ce()(r.password).toString()});case 2:if(a=e.sent,n=a.payload,a.error||!n){e.next=7;break}return e.abrupt("return",i({type:"auth/set-tokens",accessToken:n.auth_token,refreshToken:n.refresh_token}));case 7:if(!n||!n.error_token){e.next=9;break}return e.abrupt("return",{id:"error.".concat(n.error_token)});case 9:return e.abrupt("return",{id:"error.badCredentials"});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a?n.a.createElement(o.a,{to:"/endpoints"}):n.a.createElement("div",{className:r.root},n.a.createElement("div",{className:r.leftSide}),n.a.createElement("div",{className:r.rightSide},n.a.createElement("img",{src:Me.a,alt:"Logo",className:r.logo}),n.a.createElement("div",{className:r.formWrapper},n.a.createElement(Ae,{onSubmit:c}))))},Ve=function(){var e=Object(x.useMutation)(ne).mutate;return n.a.createElement(We,{onSubmit:e})},Be=r(88),qe=r(4),Re=r(178),Xe=Object(oe.a)((function(e){return{root:{width:"100%",marginTop:e.spacing(3,2),overflowX:"auto",display:"flex",flexDirection:"column",justifyContent:"center"},table:{minWidth:680},paper:{marginTop:e.spacing(3),width:"100%",overflowX:"auto",marginBottom:e.spacing(2),minWidth:700},lockIcon:{fontSize:14,verticalAlign:"middle",marginTop:-4,marginLeft:4,color:"#a2a2a2"},enable:{color:"green",fontSize:17},disable:{color:"#c34e4e",fontSize:17}}})),Fe=Object(qe.a)((function(e){return{head:{backgroundColor:"#f7941e",color:e.palette.common.white},body:{fontSize:12}}}))(Re.a),Je=Object(qe.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default},"&:hover":{backgroundColor:"#fbf2e8"}}}}))(je.a),Ge=Object(oe.a)((function(e){return{root:{width:"100%",marginTop:e.spacing(3,2),overflowX:"auto",display:"flex",flexDirection:"column",justifyContent:"center"},paper:{marginTop:e.spacing(3),width:"100%",overflowX:"auto",marginBottom:e.spacing(2),padding:e.spacing(3,3)},lockIcon:{fontSize:14,verticalAlign:"middle",marginTop:-4,marginLeft:4,color:"#a2a2a2"},enable:{color:"green",fontSize:17},disable:{color:"#c34e4e",fontSize:17},itemWrapper:{display:"flex",width:"100%",fontSize:16,minHeight:32,marginTop:10},item:{display:"flex"},itemLabel:{width:"auto"},itemValue:{fontWeight:700,marginLeft:5},itemActive:{borderLeft:"3px solid green"},itemDisabled:{borderLeft:"3px solid #c34e4e"}}})),He=function(e){var t=e.items,r=B().formatMessage,a=Ge();return n.a.createElement(n.a.Fragment,null,t&&t.map((function(e){return n.a.createElement(be.a,{className:a.paper},n.a.createElement("div",{className:a.itemWrapper},n.a.createElement("div",{className:a.item},n.a.createElement("div",{className:a.itemLabel},r({id:"endpoints.label.name"}),": "),n.a.createElement("div",{className:a.itemValue},e.name))),n.a.createElement("div",{className:a.itemWrapper},n.a.createElement("div",{className:a.item},n.a.createElement("div",{className:a.itemLabel},r({id:"endpoints.label.service_profile"}),": "),n.a.createElement("div",{className:a.itemValue},e.service_profile.name))),n.a.createElement("div",{className:a.itemWrapper},n.a.createElement("div",{className:a.item},n.a.createElement("div",{className:a.itemLabel},r({id:"endpoints.label.tariff_profile"}),": "),n.a.createElement("div",{className:a.itemValue},e.tariff_profile.name))),n.a.createElement("div",{className:a.itemWrapper},n.a.createElement("div",{className:a.item},n.a.createElement("div",{className:a.itemLabel},r({id:"endpoints.label.iccid"}),": "),n.a.createElement("div",{className:a.itemValue},e.sim&&e.sim.iccid))),n.a.createElement("div",{className:a.itemWrapper},n.a.createElement("div",{className:a.item},n.a.createElement("div",{className:a.itemLabel},r({id:"endpoints.label.msisdn"}),": "),n.a.createElement("div",{className:a.itemValue},e.sim&&e.sim.msisdn))),n.a.createElement("div",{className:a.itemWrapper},n.a.createElement("div",{className:a.item},n.a.createElement("div",{className:a.itemLabel},r({id:"endpoints.label.ip"}),": "),n.a.createElement("div",{className:a.itemValue},e.ip_address))),n.a.createElement("div",{className:a.itemWrapper},n.a.createElement("div",{className:a.item},n.a.createElement("div",{className:a.itemLabel},r({id:"endpoints.label.imei"}),": "),n.a.createElement("div",{className:a.itemValue},e.imei,e.imei_lock?n.a.createElement(Pe.a,{title:"EMEI Locked",key:e.id,placement:"right"},n.a.createElement(xe.a,{className:a.lockIcon},"lock")):n.a.createElement(Pe.a,{title:"EMEI Locked",key:e.id,placement:"right"},n.a.createElement(xe.a,{className:a.lockIcon},"lock_open"))))),n.a.createElement("div",{className:a.itemWrapper},n.a.createElement("div",{className:a.item},n.a.createElement("div",{className:a.itemLabel},r({id:"endpoints.label.endpoint_status"}),": "),n.a.createElement("div",null,0===e.status.id?n.a.createElement(xe.a,{className:a.enable},"check"):n.a.createElement(xe.a,{className:a.disable},"cancel")))))})))},Qe=function(e){var t=e.items,r=e.isLoading,a=B().formatMessage,i=Xe(),c=Object(Be.useMediaQuery)({query:"(min-device-width: 1100px)"});return r?n.a.createElement(Ne.a,null):n.a.createElement(ke.a,{fixed:!0},c?n.a.createElement(be.a,{className:i.paper},n.a.createElement(Oe.a,{className:i.table},n.a.createElement(ye.a,null,n.a.createElement(je.a,null,n.a.createElement(Fe,null,a({id:"endpoints.label.name"})),n.a.createElement(Fe,null,a({id:"endpoints.label.service_profile"})),n.a.createElement(Fe,null,a({id:"endpoints.label.tariff_profile"})),n.a.createElement(Fe,{align:"right"},a({id:"endpoints.label.iccid"})),n.a.createElement(Fe,{align:"right"},a({id:"endpoints.label.msisdn"})),n.a.createElement(Fe,{align:"right"},a({id:"endpoints.label.ip"})),n.a.createElement(Fe,{align:"right"},a({id:"endpoints.label.imei"})),n.a.createElement(Fe,null,a({id:"endpoints.label.endpoint_status"})))),n.a.createElement(we.a,null,t&&t.map((function(e){return n.a.createElement(Je,null,n.a.createElement(Fe,null,e.name),n.a.createElement(Fe,null,e.service_profile.name),n.a.createElement(Fe,null,e.tariff_profile.name),n.a.createElement(Fe,{align:"right"},e.sim&&e.sim.iccid),n.a.createElement(Fe,{align:"right"},e.sim&&e.sim.msisdn),n.a.createElement(Fe,{align:"right"},e.ip_address),n.a.createElement(Fe,{align:"right"},e.imei,e.imei_lock?n.a.createElement(Pe.a,{title:"EMEI Locked",key:e.id,placement:"right"},n.a.createElement(xe.a,{className:i.lockIcon},"lock")):n.a.createElement(Pe.a,{title:"EMEI Locked",key:e.id,placement:"right"},n.a.createElement(xe.a,{className:i.lockIcon},"lock_open"))),n.a.createElement(Fe,{align:"right"},0===e.status.id?n.a.createElement(xe.a,{className:i.enable},"check"):n.a.createElement(xe.a,{className:i.disable},"cancel")))}))))):n.a.createElement(He,{items:t}))},Ue=function(){var e=Object(x.useQuery)({endpoint:"endpoint",method:"GET"}),t=e.payload,r=e.error,a=e.loading;return Z().isAuthorized?n.a.createElement(Se,{header:n.a.createElement(Ce,null,"Lorem ipsum BITCH")},n.a.createElement(Qe,{items:t,error:r,isLoading:a})):n.a.createElement(o.a,{to:"/login"})};c.a.render(n.a.createElement((function(){return n.a.createElement(re,null,n.a.createElement(o.d,null,n.a.createElement(o.b,{path:"/login",exact:!0,component:Ve}),n.a.createElement(o.b,{path:"/endpoints",exact:!0,component:Ue}),n.a.createElement(o.b,{path:"/logout",exact:!0,component:ae}),n.a.createElement(o.a,{to:"/login"})))}),null),document.getElementById("root"))},79:function(e){e.exports=JSON.parse('{"header":{"links":{"logout":"Logout"}},"login":{"email":"Email","password":"Password","enterEmail":"Enter email","enterPassword":"Enter password","login":"Login"},"endpoints":{"title":"Endpoints","label":{"id":"ID","endpoint_status":"Status","name":"Name","iccid":"ICCID","msisdn":"MSISDN","ip":"IP","imei":"IMEI","service_profile":"Service Profile","tariff_profile":"Tariff Profile"}},"error":{"badCredentials":"Wrong user credentials","TooManyRequests":"Too many failed authentication requests."}}')},84:function(e,t,r){e.exports=r.p+"static/media/cave.d6212e54.jpg"},87:function(e,t,r){e.exports=r.p+"static/media/logo.abc3a6da.png"}},[[100,1,2]]]);
//# sourceMappingURL=main.e2baa0f3.chunk.js.map