"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[73],{73:function(t,n,e){function r(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}e.d(n,{x7:function(){return Et},Am:function(){return X}});var o=e(439),a=e(433);function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function s(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?s(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var u=e(791),l={data:""},f=function(t){return"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||l},d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,p=/\/\*[^]*?\*\/|  +/g,m=/\n+/g,v=function t(n,e){var r="",o="",a="",i=function(i){var c=n[i];"@"==i[0]?"i"==i[1]?r=i+" "+c+";":o+="f"==i[1]?t(c,i):i+"{"+t(c,"k"==i[1]?"":e)+"}":"object"==typeof c?o+=t(c,e?e.replace(/([^,])+/g,(function(t){return i.replace(/(^:.*)|([^,])+/g,(function(n){return/&/.test(n)?n.replace(/&/g,t):t?t+" "+n:n}))})):i):null!=c&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=t.p?t.p(i,c):i+":"+c+";"),s=i};for(var s in n)i(s);return r+(e&&a?e+"{"+a+"}":a)+o},g={},b=function t(n){if("object"==typeof n){var e="";for(var r in n)e+=r+t(n[r]);return e}return n},y=function(t,n,e,r,o){var a=b(t),s=g[a]||(g[a]=function(t){for(var n=0,e=11;n<t.length;)e=101*e+t.charCodeAt(n++)>>>0;return"go"+e}(a));if(!g[s]){var c=a!==t?t:function(t){for(var n,e,r=[{}];n=d.exec(t.replace(p,""));)n[4]?r.shift():n[3]?(e=n[3].replace(m," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][n[1]]=n[2].replace(m," ").trim();return r[0]}(t);g[s]=v(o?i({},"@keyframes "+s,c):c,e?"":"."+s)}var u=e&&g.g?g.g:null;return e&&(g.g=g[s]),function(t,n,e,r){r?n.data=n.data.replace(r,t):-1===n.data.indexOf(t)&&(n.data=e?t+n.data:n.data+t)}(g[s],n,r,u),s},h=function(t,n,e){return t.reduce((function(t,r,o){var a=n[o];if(a&&a.call){var i=a(e),s=i&&i.props&&i.props.className||/^go/.test(i)&&i;a=s?"."+s:i&&"object"==typeof i?i.props?"":v(i,""):!1===i?"":i}return t+r+(null==a?"":a)}),"")};function x(t){var n=this||{},e=t.call?t(n.p):t;return y(e.unshift?e.raw?h(e,[].slice.call(arguments,1),n.p):e.reduce((function(t,e){return Object.assign(t,e&&e.call?e(n.p):e)}),{}):e,f(n.target),n.g,n.o,n.k)}x.bind({g:1});var w,O,j,E,k,P,C,D,z,N,A,I,_,M,S,T,F,H,Z,L=x.bind({k:1});function U(t,n){var e=this||{};return function(){var r=arguments;function o(a,i){var s=Object.assign({},a),c=s.className||o.className;e.p=Object.assign({theme:O&&O()},s),e.o=/ *go\d+/.test(c),s.className=x.apply(e,r)+(c?" "+c:""),n&&(s.ref=i);var u=t;return t[0]&&(u=s.as||t,delete s.as),j&&u[0]&&j(s),w(u,s)}return n?n(o):o}}var q=function(t,n){return function(t){return"function"==typeof t}(t)?t(n):t},B=function(){var t=0;return function(){return(++t).toString()}}(),R=function(){var t;return function(){if(void 0===t&&typeof window<"u"){var n=matchMedia("(prefers-reduced-motion: reduce)");t=!n||n.matches}return t}}(),Y=new Map,$=function(t){if(!Y.has(t)){var n=setTimeout((function(){Y.delete(t),Q({type:4,toastId:t})}),1e3);Y.set(t,n)}},G=function t(n,e){switch(e.type){case 0:return c(c({},n),{},{toasts:[e.toast].concat((0,a.Z)(n.toasts)).slice(0,20)});case 1:return e.toast.id&&function(t){var n=Y.get(t);n&&clearTimeout(n)}(e.toast.id),c(c({},n),{},{toasts:n.toasts.map((function(t){return t.id===e.toast.id?c(c({},t),e.toast):t}))});case 2:var r=e.toast;return n.toasts.find((function(t){return t.id===r.id}))?t(n,{type:1,toast:r}):t(n,{type:0,toast:r});case 3:var o=e.toastId;return o?$(o):n.toasts.forEach((function(t){$(t.id)})),c(c({},n),{},{toasts:n.toasts.map((function(t){return t.id===o||void 0===o?c(c({},t),{},{visible:!1}):t}))});case 4:return void 0===e.toastId?c(c({},n),{},{toasts:[]}):c(c({},n),{},{toasts:n.toasts.filter((function(t){return t.id!==e.toastId}))});case 5:return c(c({},n),{},{pausedAt:e.time});case 6:var i=e.time-(n.pausedAt||0);return c(c({},n),{},{pausedAt:void 0,toasts:n.toasts.map((function(t){return c(c({},t),{},{pauseDuration:t.pauseDuration+i})}))})}},J=[],K={toasts:[],pausedAt:void 0},Q=function(t){K=G(K,t),J.forEach((function(t){t(K)}))},V={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},W=function(t){return function(n,e){var r=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",e=arguments.length>2?arguments[2]:void 0;return c(c({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},e),{},{id:(null==e?void 0:e.id)||B()})}(n,t,e);return Q({type:2,toast:r}),r.id}},X=function(t,n){return W("blank")(t,n)};X.error=W("error"),X.success=W("success"),X.loading=W("loading"),X.custom=W("custom"),X.dismiss=function(t){Q({type:3,toastId:t})},X.remove=function(t){return Q({type:4,toastId:t})},X.promise=function(t,n,e){var r=X.loading(n.loading,c(c({},e),null==e?void 0:e.loading));return t.then((function(t){return X.success(q(n.success,t),c(c({id:r},e),null==e?void 0:e.success)),t})).catch((function(t){X.error(q(n.error,t),c(c({id:r},e),null==e?void 0:e.error))})),t};var tt=function(t,n){Q({type:1,toast:{id:t,height:n}})},nt=function(){Q({type:5,time:Date.now()})},et=function(t){var n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,u.useState)(K),e=(0,o.Z)(n,2),r=e[0],a=e[1];(0,u.useEffect)((function(){return J.push(a),function(){var t=J.indexOf(a);t>-1&&J.splice(t,1)}}),[r]);var i=r.toasts.map((function(n){var e,r;return c(c(c(c({},t),t[n.type]),n),{},{duration:n.duration||(null==(e=t[n.type])?void 0:e.duration)||(null==t?void 0:t.duration)||V[n.type],style:c(c(c({},t.style),null==(r=t[n.type])?void 0:r.style),n.style)})}));return c(c({},r),{},{toasts:i})}(t),e=n.toasts,r=n.pausedAt;(0,u.useEffect)((function(){if(!r){var t=Date.now(),n=e.map((function(n){if(n.duration!==1/0){var e=(n.duration||0)+n.pauseDuration-(t-n.createdAt);if(!(e<0))return setTimeout((function(){return X.dismiss(n.id)}),e);n.visible&&X.dismiss(n.id)}}));return function(){n.forEach((function(t){return t&&clearTimeout(t)}))}}}),[e,r]);var i=(0,u.useCallback)((function(){r&&Q({type:6,time:Date.now()})}),[r]),s=(0,u.useCallback)((function(t,n){var r,o=n||{},i=o.reverseOrder,s=void 0!==i&&i,c=o.gutter,u=void 0===c?8:c,l=o.defaultPosition,f=e.filter((function(n){return(n.position||l)===(t.position||l)&&n.height})),d=f.findIndex((function(n){return n.id===t.id})),p=f.filter((function(t,n){return n<d&&t.visible})).length;return(r=f.filter((function(t){return t.visible}))).slice.apply(r,(0,a.Z)(s?[p+1]:[0,p])).reduce((function(t,n){return t+(n.height||0)+u}),0)}),[e]);return{toasts:e,handlers:{updateHeight:tt,startPause:nt,endPause:i,calculateOffset:s}}},rt=L(E||(E=r(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),ot=L(k||(k=r(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),at=L(P||(P=r(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),it=U("div")(C||(C=r(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(t){return t.primary||"#ff4b4b"}),rt,ot,(function(t){return t.secondary||"#fff"}),at),st=L(D||(D=r(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),ct=U("div")(z||(z=r(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(t){return t.secondary||"#e0e0e0"}),(function(t){return t.primary||"#616161"}),st),ut=L(N||(N=r(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),lt=L(A||(A=r(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),ft=U("div")(I||(I=r(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(t){return t.primary||"#61d345"}),ut,lt,(function(t){return t.secondary||"#fff"})),dt=U("div")(_||(_=r(["\n  position: absolute;\n"]))),pt=U("div")(M||(M=r(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),mt=L(S||(S=r(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),vt=U("div")(T||(T=r(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),mt),gt=function(t){var n=t.toast,e=n.icon,r=n.type,o=n.iconTheme;return void 0!==e?"string"==typeof e?u.createElement(vt,null,e):e:"blank"===r?null:u.createElement(pt,null,u.createElement(ct,c({},o)),"loading"!==r&&u.createElement(dt,null,"error"===r?u.createElement(it,c({},o)):u.createElement(ft,c({},o))))},bt=function(t){return"\n0% {transform: translate3d(0,".concat(-200*t,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},yt=function(t){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*t,"%,-1px) scale(.6); opacity:0;}\n")},ht=U("div")(F||(F=r(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),xt=U("div")(H||(H=r(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),wt=u.memo((function(t){var n=t.toast,e=t.position,r=t.style,a=t.children,i=n.height?function(t,n){var e=t.includes("top")?1:-1,r=R()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[bt(e),yt(e)],a=(0,o.Z)(r,2),i=a[0],s=a[1];return{animation:n?"".concat(L(i)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(L(s)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(n.position||e||"top-center",n.visible):{opacity:0},s=u.createElement(gt,{toast:n}),l=u.createElement(xt,c({},n.ariaProps),q(n.message,n));return u.createElement(ht,{className:n.className,style:c(c(c({},i),r),n.style)},"function"==typeof a?a({icon:s,message:l}):u.createElement(u.Fragment,null,s,l))}));!function(t,n,e,r){v.p=n,w=t,O=e,j=r}(u.createElement);var Ot=function(t){var n=t.id,e=t.className,r=t.style,o=t.onHeightUpdate,a=t.children,i=u.useCallback((function(t){if(t){var e=function(){var e=t.getBoundingClientRect().height;o(n,e)};e(),new MutationObserver(e).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[n,o]);return u.createElement("div",{ref:i,className:e,style:r},a)},jt=x(Z||(Z=r(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),Et=function(t){var n=t.reverseOrder,e=t.position,r=void 0===e?"top-center":e,o=t.toastOptions,a=t.gutter,i=t.children,s=t.containerStyle,l=t.containerClassName,f=et(o),d=f.toasts,p=f.handlers;return u.createElement("div",{style:c({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},s),className:l,onMouseEnter:p.startPause,onMouseLeave:p.endPause},d.map((function(t){var e=t.position||r,o=function(t,n){var e=t.includes("top"),r=e?{top:0}:{bottom:0},o=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return c(c({left:0,right:0,display:"flex",position:"absolute",transition:R()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(n*(e?1:-1),"px)")},r),o)}(e,p.calculateOffset(t,{reverseOrder:n,gutter:a,defaultPosition:r}));return u.createElement(Ot,{id:t.id,key:t.id,onHeightUpdate:p.updateHeight,className:t.visible?jt:"",style:o},"custom"===t.type?q(t.message,t):i?i(t):u.createElement(wt,{toast:t,position:e}))})))}}}]);
//# sourceMappingURL=73.51f3d629.chunk.js.map