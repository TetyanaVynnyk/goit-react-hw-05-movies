"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[177],{7508:function(t,n,e){var r=e(7689),c=e(1087),a=e(8249),u=e(184),s=function(t){var n=t.items,e=t.loading,s=t.error,i=(0,r.TH)(),o=n.map((function(t){var n=t.id,e=t.title,r=t.name;return(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{state:{from:i},to:"/movies/".concat(n),children:e||r})},n)}));return(0,u.jsxs)("div",{children:[(0,u.jsx)("ul",{children:o}),e&&(0,u.jsx)(a.Z,{}),s&&(0,u.jsx)("p",{children:"...Opps"})]})};n.Z=s,s.defaultPorps={items:[]}},177:function(t,n,e){e.r(n),e.d(n,{default:function(){return v}});var r=e(5861),c=e(9439),a=e(7757),u=e.n(a),s=e(2791),i=e(724),o=e(7508),p=e(8249),f={},l=e(184),v=function(){var t=(0,s.useState)([]),n=(0,c.Z)(t,2),e=n[0],a=n[1],v=(0,s.useState)(!1),h=(0,c.Z)(v,2),d=h[0],m=h[1],x=(0,s.useState)(null),k=(0,c.Z)(x,2),w=k[0],Z=k[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(!0),t.next=4,(0,i.KS)();case 4:n=t.sent,e=n.data,a(e.results),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),Z(t.t0.massage);case 12:return t.prev=12,m(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:f.title,children:"Trending films"}),d&&(0,l.jsx)(p.Z,{}),w&&(0,l.jsx)("p",{children:w.massage}),e.length>0&&(0,l.jsx)(o.Z,{items:e})]})}},724:function(t,n,e){e.d(n,{KS:function(){return l},UH:function(){return m},Ug:function(){return d},Up:function(){return v},pf:function(){return h}});var r=e(5861),c=e(7757),a=e.n(c),u=e(3263),s="e2aa7af502a0fd1251b07c4094c5d319",i="https://api.themoviedb.org/3",o="".concat(i,"/trending/movie/week"),p="".concat(i,"/search/movie"),f="".concat(i,"/movie/"),l=function(){var t=(0,r.Z)(a().mark((function t(){var n,e=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.length>0&&void 0!==e[0]?e[0]:1,t.next=3,u.Z.get("".concat(o,"?api_key=").concat(s,"&page=").concat(n));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(a().mark((function t(n){var e,r=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>1&&void 0!==r[1]?r[1]:1,t.next=3,u.Z.get("".concat(p,"?api_key=").concat(s,"&query=").concat(n,"&page=").concat(e));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(f).concat(n,"?api_key=").concat(s));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(f).concat(n,"/credits?api_key=").concat(s));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(f).concat(n,"/reviews?api_key=").concat(s));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=177.7df50e07.chunk.js.map