(self.webpackChunkyacd=self.webpackChunkyacd||[]).push([[641],{22479:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return mn}});var t=r(90924),i=(r(21249),r(98842)),s=r(67294),a=r(64478),o=r(25904),c=r(82569),l="_1NNIVhRL-n",u=r(85893);function d(e){var n=e.children;return(0,u.jsx)("div",{className:l,children:n})}var p=s.useRef,f=s.useEffect;function x(e){var n=e.onClickPrimaryButton,r=e.onClickSecondaryButton,t=p(null),i=p(null);f((function(){t.current.focus()}),[]);return(0,u.jsxs)("div",{onKeyDown:function(e){39===e.keyCode?i.current.focus():37===e.keyCode&&t.current.focus()},children:[(0,u.jsx)("h2",{children:"Close Connections?"}),(0,u.jsx)("p",{children:'Click "Yes" to close those connections that are still using the old selected proxy in this group'}),(0,u.jsx)("div",{style:{height:30}}),(0,u.jsxs)(d,{children:[(0,u.jsx)(o.Z,{onClick:n,ref:t,children:"Yes"}),(0,u.jsx)("div",{style:{width:20}}),(0,u.jsx)(o.Z,{onClick:r,ref:i,children:"No"})]})]})}var h=r(80043),v=r(87757),m=r.n(v),j=r(34588),y=r(6055),C=r(71218),g=r(86010),b=r(27434),k="_2qbBB1Sojw",w="_1iuVspxe4f",Z="_2CN_S7POBQ",_="_3504uhlYv5",N="_3Vynmp3NK4",S=r(17132);function O(e){var n=e.name,r=e.type,t=e.toggle,i=e.isOpen,a=e.qty,c=s.useCallback((function(e){e.preventDefault(),"Enter"!==e.key&&" "!==e.key||t()}),[t]);return(0,u.jsxs)("div",{className:k,onClick:t,style:{cursor:"pointer"},tabIndex:0,onKeyDown:c,role:"button",children:[(0,u.jsx)("div",{children:(0,u.jsx)(S.$,{name:n,type:r})}),"number"==typeof a?(0,u.jsx)("span",{className:N,children:a}):null,(0,u.jsx)(o.Z,{kind:"minimal",onClick:t,className:_,title:"Toggle collapsible section",children:(0,u.jsx)("span",{className:(0,g.Z)(w,{[Z]:i}),children:(0,u.jsx)(b.Z,{size:20})})})]})}var P=r(85295),U=r(42172),L=(r(57327),r(82772),r(2707),r(23123),r(73210),r(2804)),A=s.useMemo;var R=function(e,n){if(e&&"number"==typeof e.number&&e.number>0)return e.number;var r=n&&n.type;return r&&C.SJ.indexOf(r)>-1?-1:999999},B={Natural:function(e){return e},LatencyAsc:function(e,n,r){return e.sort((function(e,t){return R(n[e],r&&r[e])-R(n[t],r&&r[t])}))},LatencyDesc:function(e,n,r){return e.sort((function(e,t){var i=R(n[e],r&&r[e]);return R(n[t],r&&r[t])-i}))},NameAsc:function(e){return e.sort()},NameDesc:function(e){return e.sort((function(e,n){return e>n?-1:e<n?1:0}))}};function D(e,n,r,i,s){var a=(0,L.FV)(C.RE),o=(0,t.Z)(a,1)[0];return A((function(){return function(e,n,r,t,i,s){var a=(0,U.Z)(e);return r&&(a=function(e,n){return e.filter((function(e){var r=n[e];return void 0===r||0!==r.number}))}(e,n)),"string"==typeof t&&""!==t&&(a=function(e,n){var r=n.toLowerCase().split(" ").map((function(e){return e.trim()})).filter((function(e){return!!e}));return 0===r.length?e:e.filter((function(e){for(var n=0;n<r.length;n++){var t=r[n];if(e.toLowerCase().indexOf(t)>-1)return!0}return!1}))}(a,t)),B[i](a,n,s)}(e,n,r,o,i,s)}),[e,n,r,o,i,s])}var M={header:"v5oNKUwcTc",zapWrapper:"_2fR1H0ysyY"},E=13,$="_5-kOJyYfSn",V="MbWebw2VH4",T="_2dlAYgAIKi",q="_3rB1UgDAL6",W="nnjdzHZySt",I="_2E11-huRp7",F="_2Eys6UMXCm",G="_2rRGWVNOYC",H="_1GlyjMFCSf";function Y(e){var n=e.number,r=e.color;return(0,u.jsx)("span",{className:H,style:{color:r},children:(0,u.jsxs)("span",{children:[n," ms"]})})}var z=s.useMemo,K="#67c23a",X="#d4b75c",J="#e67f3c",Q="#909399";function ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.number;return 0===n?Q:n<200?K:n<400?X:"number"==typeof n?J:Q}var ne=function(e,n){var r=n.name,t=(0,C.yi)(e),i=(0,C.sj)(e);return{proxy:t[r],latency:i[r]}},re=(0,P.$j)(ne)((function(e){var n,r=e.now,t=e.name,i=e.proxy,a=e.latency,o=e.isSelectable,c=e.onClick,l=z((function(){return ee(a)}),[a]),d=s.useCallback((function(){o&&c&&c(t)}),[t,c,o]),p=s.useCallback((function(e){e.keyCode===E&&d()}),[d]),f=z((function(){return(0,g.Z)($,{[V]:r,[T]:a&&a.error,[q]:o})}),[o,r,a]);return(0,u.jsxs)("div",{tabIndex:0,className:f,onClick:d,onKeyDown:p,role:o?"menuitem":"",children:[(0,u.jsx)("div",{className:F,children:t}),(0,u.jsxs)("div",{className:I,children:[(0,u.jsx)("span",{className:W,style:{opacity:r?.6:.2},children:(n=i.type,"Shadowsocks"===n?"SS":n)}),a&&a.number?(0,u.jsx)(Y,{number:a.number,color:l}):null]})]})})),te=(0,P.$j)(ne)((function(e){var n=e.now,r=e.name,t=e.proxy,i=e.latency,a=e.isSelectable,o=e.onClick,c=z((function(){return function(e,n){return C.SJ.indexOf(n)>-1?"linear-gradient(135deg, white 15%, #999 15% 30%, white 30% 45%, #999 45% 60%, white 60% 75%, #999 75% 90%, white 90% 100%)":ee(e)}(i,t.type)}),[i,t]),l=z((function(){var e=r;return i&&"number"==typeof i.number&&(e+=" "+i.number+" ms"),e}),[r,i]),d=s.useCallback((function(){a&&o&&o(r)}),[r,o,a]),p=z((function(){return(0,g.Z)(G,{[V]:n,[q]:a})}),[a,n]),f=s.useCallback((function(e){e.keyCode===E&&d()}),[d]);return(0,u.jsx)("div",{title:l,className:p,style:{background:c},onClick:d,onKeyDown:f,role:a?"menuitem":""})})),ie="_1pPZyUDtdp",se="_6uXcWV1Myk";function ae(e){var n=e.all,r=e.now,t=e.isSelectable,i=e.itemOnTapCallback,s=n;return(0,u.jsx)("div",{className:ie,children:s.map((function(e){return(0,u.jsx)(re,{onClick:i,isSelectable:t,name:e,now:e===r},e)}))})}function oe(e){var n=e.all,r=e.now,t=e.isSelectable,i=e.itemOnTapCallback;return(0,u.jsx)("div",{className:se,children:n.map((function(e){return(0,u.jsx)(te,{onClick:i,isSelectable:t,name:e,now:e===r},e)}))})}var ce=s.createElement,le=s.useCallback,ue=s.useMemo,de=s.useState;function pe(){return(0,u.jsx)("div",{className:M.zapWrapper,children:(0,u.jsx)(j.Z,{size:16})})}var fe=(0,P.$j)((function(e,n){var r=n.name,t=n.delay,i=(0,C.yi)(e),s=(0,y.VR)(e),a=(0,y.S3)(e),o=(0,y.sU)(e),c=i[r];return{all:c.all,delay:t,hideUnavailableProxies:o,proxySortBy:a,proxies:i,type:c.type,now:c.now,isOpen:s[`proxyGroup:${r}`]}}))((function(e){var n=e.name,r=e.all,i=e.delay,s=e.hideUnavailableProxies,a=e.proxySortBy,c=e.proxies,l=e.type,d=e.now,p=e.isOpen,f=e.apiConfig,x=e.dispatch,v=D(r,i,s,a,c),j=ue((function(){return"Selector"===l}),[l]),y=(0,P.WX)(),g=y.app.updateCollapsibleIsOpen,b=y.proxies.requestDelayForProxies,k=le((function(){g("proxyGroup",n,!p)}),[p,g,n]),w=le((function(e){j&&x((0,C.hU)(f,n,e))}),[f,x,n,j]),Z=de(!1),_=(0,t.Z)(Z,2),N=_[0],S=_[1],U=le((0,h.Z)(m().mark((function e(){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.prev=1,e.next=4,b(f,v);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:S(!1);case 9:case"end":return e.stop()}}),e,null,[[1,6]])}))),[v,f,b]);return(0,u.jsxs)("div",{className:M.group,children:[(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,u.jsx)(O,{name:n,type:l,toggle:k,qty:v.length,isOpen:p}),(0,u.jsx)(o.Z,{title:"Test latency",kind:"minimal",onClick:U,isLoading:N,children:(0,u.jsx)(pe,{})})]}),ce(p?ae:oe,{all:v,now:d,isSelectable:j,itemOnTapCallback:w})]})})),xe=s.useCallback,he=s.useState;var ve=r(51525),me=r(14236),je=s.useState,ye=s.useCallback;function Ce(e){return e.isLoading?(0,u.jsx)(ve.$4,{children:(0,u.jsx)(j.Z,{width:16,height:16})}):(0,u.jsx)(j.Z,{width:16,height:16})}function ge(e){var n=e.dispatch,r=e.apiConfig,i=e.proxyProviders,s=(0,a.$)().t,o=function(e){var n=e.dispatch,r=e.apiConfig,i=je(!1),s=(0,t.Z)(i,2),a=s[0],o=s[1];return[ye((function(){a||(o(!0),n((0,C.$3)(r)).then((function(){return o(!1)}),(function(){return o(!1)})))}),[r,n,a]),a]}({dispatch:n,apiConfig:r}),c=(0,t.Z)(o,2),l=c[0],d=c[1],p=function(e){var n=e.dispatch,r=e.apiConfig,i=e.names,s=he(!1),a=(0,t.Z)(s,2),o=a[0],c=a[1];return[xe((0,h.Z)(m().mark((function e(){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=2;break}return e.abrupt("return");case 2:return c(!0),e.prev=3,e.next=6,n((0,C.AE)(r,i));case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(3);case 10:c(!1);case 11:case"end":return e.stop()}}),e,null,[[3,8]])}))),[r,n,i,o]),o]}({apiConfig:r,dispatch:n,names:i.map((function(e){return e.name}))}),f=(0,t.Z)(p,2),x=f[0],v=f[1];return(0,u.jsx)(ve.Lg,{icon:(0,u.jsx)(Ce,{isLoading:d}),onClick:l,text:s("Test Latency"),style:ve.FK,children:i.length>0?(0,u.jsx)(ve.aU,{text:s("update_all_proxy_provider"),onClick:x,children:(0,u.jsx)(me.V,{isRotating:v})}):null})}var be=r(70207),ke=r(86178),we=r(91033),Ze=r(88757),_e=s.memo,Ne=s.useState,Se=s.useRef,Oe=s.useEffect;var Pe={initialOpen:{height:"auto",transition:{duration:0}},open:function(e){return{height:e,opacity:1,visibility:"visible",transition:{duration:.3}}},closed:{height:0,opacity:0,visibility:"hidden",transition:{duration:.3}}},Ue={open:{x:0},closed:{x:20}},Le=_e((function(e){var n,r,i=e.children,s=e.isOpen,a=Ze.U.read().motion,o=(n=s,r=Se(),Oe((function(){r.current=n}),[n]),r.current),c=function(){var e=Se(),n=Ne({height:0}),r=(0,t.Z)(n,2),i=r[0],s=r[1];return Oe((function(){var n=new we.Z((function(e){var n=(0,t.Z)(e,1)[0];return s(n.contentRect)}));return e.current&&n.observe(e.current),function(){return n.disconnect()}}),[]),[e,i]}(),l=(0,t.Z)(c,2),d=l[0],p=l[1].height;return(0,u.jsx)("div",{children:(0,u.jsx)(a.div,{animate:s&&o===s?"initialOpen":s?"open":"closed",custom:p,variants:Pe,children:(0,u.jsx)(a.div,{variants:Ue,ref:d,children:i})})})})),Ae="_113att7Ifr",Re="_26mH_RmGnl",Be="_2cXcxGEUNI",De="_2NjdAt9CvG",Me=s.useState,Ee=s.useCallback;var $e={rest:{scale:1},pressed:{scale:.95}},Ve={rest:{rotate:0},hover:{rotate:360,transition:{duration:.3}}};function Te(){var e=Ze.U.read().motion;return(0,u.jsx)(e.div,{className:De,variants:$e,initial:"rest",whileHover:"hover",whileTap:"pressed",children:(0,u.jsx)(e.div,{className:"flexCenter",variants:Ve,children:(0,u.jsx)(ke.Z,{size:16})})})}var qe=(0,P.$j)((function(e,n){var r=n.proxies,t=n.name,i=(0,y.sU)(e),s=(0,C.sj)(e),a=(0,y.VR)(e);return{apiConfig:(0,y.Y$)(e),proxies:r,delay:s,hideUnavailableProxies:i,proxySortBy:(0,y.S3)(e),isOpen:a[`proxyProvider:${t}`]}}))((function(e){var n=e.name,r=e.proxies,i=e.delay,s=e.hideUnavailableProxies,a=e.proxySortBy,c=e.vehicleType,l=e.updatedAt,d=e.isOpen,p=e.dispatch,f=e.apiConfig,x=D(r,i,s,a),v=Me(!1),y=(0,t.Z)(v,2),g=y[0],b=y[1],k=function(e){var n=e.dispatch,r=e.apiConfig,t=e.name;return xe((function(){return n((0,C.kL)(r,t))}),[r,n,t])}({dispatch:p,apiConfig:f,name:n}),w=Ee((0,h.Z)(m().mark((function e(){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,p((0,C.IA)(f,n));case 3:b(!1);case 4:case"end":return e.stop()}}),e)}))),[f,p,n,b]),Z=(0,P.WX)().app.updateCollapsibleIsOpen,_=Ee((function(){Z("proxyProvider",n,!d)}),[d,Z,n]),N=(0,be.Z)(new Date(l),new Date);return(0,u.jsxs)("div",{className:Re,children:[(0,u.jsx)(O,{name:n,toggle:_,type:c,isOpen:d,qty:x.length}),(0,u.jsx)("div",{className:Ae,children:(0,u.jsxs)("small",{children:["Updated ",N," ago"]})}),(0,u.jsxs)(Le,{isOpen:d,children:[(0,u.jsx)(ae,{all:x}),(0,u.jsxs)("div",{className:Be,children:[(0,u.jsx)(o.Z,{text:"Update",start:(0,u.jsx)(Te,{}),onClick:k}),(0,u.jsx)(o.Z,{text:"Health Check",start:(0,u.jsx)(j.Z,{size:16}),onClick:w,isLoading:g})]})]}),(0,u.jsx)(Le,{isOpen:!d,children:(0,u.jsx)(oe,{all:x})})]})}));function We(e){var n=e.items;return 0===n.length?null:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.Z,{title:"Proxy Provider"}),(0,u.jsx)("div",{children:n.map((function(e){return(0,u.jsx)(qe,{name:e.name,proxies:e.proxies,type:e.type,vehicleType:e.vehicleType,updatedAt:e.updatedAt},e.name)}))})]})}var Ie=r(37100),Fe=r(26512),Ge="_1tkxMBL44k",He=[["Natural","order_natural"],["LatencyAsc","order_latency_asc"],["LatencyDesc","order_latency_desc"],["NameAsc","order_name_asc"],["NameDesc","order_name_desc"]],Ye=s.useCallback;var ze=(0,P.$j)((function(e){return{appConfig:{proxySortBy:(0,y.S3)(e),hideUnavailableProxies:(0,y.sU)(e),autoCloseOldConns:(0,y.xE)(e)}}}))((function(e){var n=e.appConfig,r=(0,P.WX)().app.updateAppConfig,t=Ye((function(e){r("proxySortBy",e.target.value)}),[r]),i=Ye((function(e){r("hideUnavailableProxies",e)}),[r]),s=(0,a.$)().t;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:Ge,children:[(0,u.jsx)("span",{children:s("sort_in_grp")}),(0,u.jsx)("div",{children:(0,u.jsx)(Ie.Z,{options:He.map((function(e){return[e[0],s(e[1])]})),selected:n.proxySortBy,onChange:t})})]}),(0,u.jsx)("hr",{}),(0,u.jsxs)("div",{className:Ge,children:[(0,u.jsx)("span",{children:s("hide_unavail_proxies")}),(0,u.jsx)("div",{children:(0,u.jsx)(Fe.Z,{name:"hideUnavailableProxies",checked:n.hideUnavailableProxies,onChange:i})})]}),(0,u.jsxs)("div",{className:Ge,children:[(0,u.jsx)("span",{children:s("auto_close_conns")}),(0,u.jsx)("div",{children:(0,u.jsx)(Fe.Z,{name:"autoCloseOldConns",checked:n.autoCloseOldConns,onChange:function(e){return r("autoCloseOldConns",e)}})})]})]})})),Ke=r(44774),Xe=r(57944);function Je(){var e=(0,Ke.g)(C.RE),n=(0,t.Z)(e,2),r=n[0],i=n[1];return(0,u.jsx)("input",{className:Xe.Z.input,type:"text",value:i,onChange:r})}var Qe=r(83253),en=r.n(Qe),nn=r(93621),rn="_25Hedjekvk",tn="_1tfU5GSa-_",sn="_2VMuy-HWwC",an=s.useMemo;function on(e){var n=e.isOpen,r=e.onRequestClose,t=e.children,i=an((function(){return{base:(0,g.Z)(nn.Z.content,tn),afterOpen:sn,beforeClose:""}}),[]);return(0,u.jsx)(en(),{isOpen:n,onRequestClose:r,className:i,overlayClassName:(0,g.Z)(nn.Z.overlay,rn),children:t})}function cn(e){var n=e.color,r=void 0===n?"currentColor":n,t=e.size,i=void 0===t?24:t;return(0,u.jsxs)("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:i,height:i,stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,u.jsx)("path",{d:"M2 6h9M18.5 6H22"}),(0,u.jsx)("circle",{cx:"16",cy:"6",r:"2"}),(0,u.jsx)("path",{d:"M22 18h-9M6 18H2"}),(0,u.jsx)("circle",{r:"2",transform:"matrix(-1 0 0 1 8 18)"})]})}var ln="_2adLhYLrrV",un="_1gc_yljm7w",dn="_1N0wXB7TV7",pn="_35E6rdJlPT",fn=s.useState,xn=s.useEffect,hn=s.useCallback,vn=s.useRef;var mn=(0,P.$j)((function(e){return{apiConfig:(0,y.Y$)(e),groupNames:(0,C.P_)(e),proxyProviders:(0,C.a)(e),delay:(0,C.sj)(e),showModalClosePrevConns:(0,C.DP)(e)}}))((function(e){var n=e.dispatch,r=e.groupNames,s=e.delay,l=e.proxyProviders,d=e.apiConfig,p=e.showModalClosePrevConns,f=vn({}),h=hn((function(){f.current.startAt=Date.now(),n((0,C.Ry)(d)).then((function(){f.current.completeAt=Date.now()}))}),[d,n]);xn((function(){h();var e=function(){f.current.startAt&&Date.now()-f.current.startAt>3e4&&h()};return window.addEventListener("focus",e,!1),function(){return window.removeEventListener("focus",e,!1)}}),[h]);var v=fn(!1),m=(0,t.Z)(v,2),j=m[0],y=m[1],g=hn((function(){y(!1)}),[]),b=(0,P.WX)().proxies,k=b.closeModalClosePrevConns,w=b.closePrevConnsAndTheModal,Z=(0,a.$)().t;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(on,{isOpen:j,onRequestClose:g,children:(0,u.jsx)(ze,{})}),(0,u.jsxs)("div",{className:ln,children:[(0,u.jsx)(c.Z,{title:Z("Proxies")}),(0,u.jsxs)("div",{className:un,children:[(0,u.jsx)("div",{className:dn,children:(0,u.jsx)(Je,{})}),(0,u.jsx)(i.ZP,{label:Z("settings"),children:(0,u.jsx)(o.Z,{kind:"minimal",onClick:function(){return y(!0)},children:(0,u.jsx)(cn,{size:16})})})]})]}),(0,u.jsx)("div",{children:r.map((function(e){return(0,u.jsx)("div",{className:pn,children:(0,u.jsx)(fe,{name:e,delay:s,apiConfig:d,dispatch:n})},e)}))}),(0,u.jsx)(We,{items:l}),(0,u.jsx)("div",{style:{height:60}}),(0,u.jsx)(ge,{dispatch:n,apiConfig:d,proxyProviders:l}),(0,u.jsx)(on,{isOpen:p,onRequestClose:k,children:(0,u.jsx)(x,{onClickPrimaryButton:function(){return w(d)},onClickSecondaryButton:k})})]})}))},51525:function(e,n,r){"use strict";r.d(n,{aU:function(){return t.Action},Lg:function(){return t.Fab},$4:function(){return a},FK:function(){return o}});r(67294);var t=r(66018),i="_3nmqcBZJL5",s=r(85893);function a(e){var n=e.children;return(0,s.jsx)("span",{className:i,children:n})}var o={right:10,bottom:10}},14236:function(e,n,r){"use strict";r.d(n,{V:function(){return c}});var t=r(86010),i=(r(67294),r(86178)),s="_3UD6wCqqgE",a="W4xtnaGef4",o=r(85893);function c(e){var n=e.isRotating,r=(0,t.Z)(s,{[a]:n});return(0,o.jsx)("span",{className:r,children:(0,o.jsx)(i.Z,{width:16})})}},37100:function(e,n,r){"use strict";r.d(n,{Z:function(){return a}});var t=r(90924),i=(r(21249),r(67294),"_2epoA7G8CQ"),s=r(85893);function a(e){var n=e.options,r=e.selected,a=e.onChange;return(0,s.jsx)("select",{className:i,value:r,onChange:a,children:n.map((function(e){var n=(0,t.Z)(e,2),r=n[0],i=n[1];return(0,s.jsx)("option",{value:r,children:i},r)}))})}},44774:function(e,n,r){"use strict";r.d(n,{g:function(){return u}});var t=r(90924),i=r(79481),s=r(67294),a=r(2804),o=s.useCallback,c=s.useState,l=s.useMemo;function u(e){var n=(0,a.FV)(e),r=(0,t.Z)(n,2)[1],s=c(""),u=(0,t.Z)(s,2),d=u[0],p=u[1],f=l((function(){return(0,i.Z)(r,300)}),[r]);return[o((function(e){p(e.target.value),f(e.target.value)}),[f]),d]}},57944:function(e,n){"use strict";n.Z={input:"_1I0EXOg8Vu"}}}]);
//# sourceMappingURL=proxies.5a3bcb921f085db99d99.js.map