"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[942],{4942:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(5861),i=n(9439),r=n(7757),s=n.n(r),o=n(2791),c=n(1087),u=n(7689),l=n(724),p=n(8249),v={movieDetailsContainer:"movies-details-page_movieDetailsContainer__Vt6i4",movieDetailsImage:"movies-details-page_movieDetailsImage__a1I9e",image:"movies-details-page_image__ePfjF",movieDetailsDescription:"movies-details-page_movieDetailsDescription__e5qem",movieDetailsTitle:"movies-details-page_movieDetailsTitle__tVSLU",movieDetailsSubTitle:"movies-details-page_movieDetailsSubTitle__uz6BE",goBack:"movies-details-page_goBack__aunC8",movieDetailsInfo:"movies-details-page_movieDetailsInfo__1UaCE",movieDetailsSubInfo:"movies-details-page_movieDetailsSubInfo__ZhzbV",movieDetailsTextInfo:"movies-details-page_movieDetailsTextInfo__p3sEj",a:"movies-details-page_a__BTbW3",link:"movies-details-page_link__4Fb2N"},m=n(184),f=function(){var e,t=(0,o.useState)([]),n=(0,i.Z)(t,2),r=n[0],f=n[1],d=(0,o.useState)(!1),_=(0,i.Z)(d,2),h=_[0],g=_[1],x=(0,o.useState)(null),D=(0,i.Z)(x,2),k=D[0],b=D[1],j=(0,u.UO)().movieId,w=(0,u.s0)(),N=(null===(e=(0,u.TH)().state)||void 0===e?void 0:e.from)||"/";(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.prev=1,e.next=4,(0,l.pf)(j);case 4:t=e.sent,n=t.data,f(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),b(e.t0.massage);case 12:return e.prev=12,g(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e(j)}),[j]);var Z=r.title,I=r.poster_path,S=r.overview,y=r.genres,T=r.vote_average,U=null===y||void 0===y?void 0:y.map((function(e){return e.name})).join(", "),C=function(){var e=Math.round(10*T);return(0,m.jsxs)("p",{className:v.MovieDetailsUserScore,children:["User score:\u2002",e,"%"]})}();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("button",{className:v.goBack,onClick:function(){return w(N)},children:"Go back"}),h&&(0,m.jsx)(p.Z,{}),k&&(0,m.jsx)("p",{children:k.massage}),(0,m.jsxs)("div",{className:v.movieDetailsContainer,children:[(0,m.jsx)("div",{className:v.movieDetailsImage,children:(0,m.jsx)("img",{className:v.image,src:void 0===I?"poster not found":"https://image.tmdb.org/t/p/w500".concat(I),alt:""})}),(0,m.jsxs)("div",{className:v.movieDetailsDescription,children:[(0,m.jsx)("h2",{className:v.movieDetailsTitle,children:Z}),T>0&&C,(0,m.jsx)("p",{className:v.movieDetailsSubTitle,children:"Brief description"}),(0,m.jsx)("p",{children:""!==S?S:"No brief description"}),(0,m.jsx)("p",{className:v.movieDetailsSubTitle,children:"Genres"}),(0,m.jsx)("p",{children:""!==U?U:"Genres not found"})]})]}),(0,m.jsxs)("div",{className:v.movieDetailsInfo,children:[(0,m.jsx)("p",{className:v.movieDetailsSubInfo,children:"Additional information:"}),(0,m.jsxs)("div",{className:v.movieDetailsTextInfo,children:[(0,m.jsx)(c.rU,{className:v.link,state:{from:N},to:"cast",children:"Cast"}),(0,m.jsx)(c.rU,{className:v.link,state:{from:N},to:"reviews",children:"Reviews"}),(0,m.jsx)(u.j3,{})]})]})]})}},724:function(e,t,n){n.d(t,{KS:function(){return v},UH:function(){return _},Ug:function(){return d},Up:function(){return m},pf:function(){return f}});var a=n(5861),i=n(7757),r=n.n(i),s=n(3263),o="e2aa7af502a0fd1251b07c4094c5d319",c="https://api.themoviedb.org/3",u="".concat(c,"/trending/movie/week"),l="".concat(c,"/search/movie"),p="".concat(c,"/movie/"),v=function(){var e=(0,a.Z)(r().mark((function e(){var t,n=arguments;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:1,e.next=3,s.Z.get("".concat(u,"?api_key=").concat(o,"&page=").concat(t));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)(r().mark((function e(t){var n,a=arguments;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,s.Z.get("".concat(l,"?api_key=").concat(o,"&query=").concat(t,"&page=").concat(n));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(p).concat(t,"?api_key=").concat(o));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(p).concat(t,"/credits?api_key=").concat(o));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=(0,a.Z)(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(p).concat(t,"/reviews?api_key=").concat(o));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=942.63f7096d.chunk.js.map