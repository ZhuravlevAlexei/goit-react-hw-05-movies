"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{361:function(t,e,n){n.d(e,{Z:function(){return u}});var a=n(87),r="Button_button__wiIYs",o="Button_buttonWrap__ZRtPo",c=n(184),i=function(t){var e=t.btnName,n=t.onClick;return(0,c.jsx)("div",{className:o,children:(0,c.jsx)("button",{className:r,onClick:n,type:"button",children:e})})},s="MovieList_buttonWrap__bPcX1",u=function(t){var e=t.location,n=t.movieList,r=t.paginationPage,o=t.totalPages,u=t.onLoadNextPage,l=t.onLoadPreviousPage,d=t.onToStartPage;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("ul",{children:n.map((function(t){var n=t.id,r=t.title;return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/movies/".concat(n),state:e,children:r})},n)}))}),(0,c.jsxs)("div",{className:s,children:[0!==n.length&&r>1&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{btnName:"Start page",onClick:d}),(0,c.jsx)(i,{btnName:"Previous page",onClick:l})]}),0!==n.length&&r<o&&(0,c.jsx)(i,{btnName:"Next page",onClick:u})]})]})}},415:function(t,e,n){n.r(e);var a=n(439),r=n(791),o=n(689),c=n(87),i=n(468),s=n(361),u=n(184);e.default=function(){var t=(0,o.TH)(),e=(0,c.lr)(),n=(0,a.Z)(e,2),l=n[0],d=n[1],g=(0,r.useState)([]),p=(0,a.Z)(g,2),f=p[0],h=p[1],v=(0,r.useRef)(0),m=Number(l.get("page"));0===m&&(m=1),(0,r.useEffect)((function(){(0,i.V)("/trending/movie/week",m).then((function(t){if(200!==t.status)throw new Error(t.statusText);v.current=t.data.total_pages,h(t.data.results)}))}),[m]);var x="Trending today (Page ".concat(m," of ").concat(v.current,")");return(0,u.jsxs)("div",{children:[(0,u.jsx)("h3",{children:"OLD VERSION 2023."}),(0,u.jsx)("h3",{children:x}),0!==f.length&&(0,u.jsx)(s.Z,{location:t,movieList:f,paginationPage:m,totalPages:v.current,onLoadNextPage:function(){d({page:m+=1})},onLoadPreviousPage:function(){d({page:m-=1})},onToStartPage:function(){d({page:m=1})}})]})}},468:function(t,e,n){n.d(e,{V:function(){return s}});var a=n(861),r=n(757),o=n.n(r),c=n(243),i=n(73);function s(t){return u.apply(this,arguments)}function u(){return u=(0,a.Z)(o().mark((function t(e){var n,a,r,s,u=arguments;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:1,a=u.length>2&&void 0!==u[2]?u[2]:"",t.prev=2,r="https://api.themoviedb.org/3"+e+"?api_key=".concat("6dfafd08c001fd3262dc3fe23504fa05"),a&&(r+="&query=".concat(a.trim())),n&&(r+="&page=".concat(n)),t.next=10,c.Z.get(r);case 10:return s=t.sent,t.abrupt("return",s);case 14:t.prev=14,t.t0=t.catch(2),i.Am.error(t.t0.message);case 17:case"end":return t.stop()}}),t,null,[[2,14]])}))),u.apply(this,arguments)}}}]);
//# sourceMappingURL=415.666adf25.chunk.js.map