(this["webpackJsonppractice-test"]=this["webpackJsonppractice-test"]||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),i=a(42),u=a(6),l=(a(75),a(24)),s=a.n(l),d=a(36),p=a(14),m=a(66),f=a(45),E=a(15),g=function(e,t){switch(t.type){case"UPDATE_PRODUCTS":return Object(E.a)(Object(E.a)({},e),{},{products:Object(f.a)(t.products)});case"UPDATE_CATEGORIES":return Object(E.a)(Object(E.a)({},e),{},{categories:Object(f.a)(t.categories)});case"UPDATE_CURRENT_CATEGORY":return Object(E.a)(Object(E.a)({},e),{},{currentCategory:t.currentCategory});case"SAVED_PRODUCTS":return Object(E.a)(Object(E.a)({},e),{},{savedProducts:[].concat(Object(f.a)(e.savedProducts),[t.product])});default:return e}};var v=["value"],b=Object(n.createContext)(),O=b.Provider,j=function(e){e.value;var t,a=Object(m.a)(e,v),c=(t={products:[],categories:[],currentCategory:"",savedProducts:[]},Object(n.useReducer)(g,t)),o=Object(p.a)(c,2),i=o[0],u=o[1];return console.log(i),r.a.createElement(O,Object.assign({value:[i,u]},a))},y=function(){return Object(n.useContext)(b)},h=a(38),C=a(125),x=a(3),P=a(133),T=a(127),D=a(128),k=a(129),S=a(130),R=a(132),A=a(134),U=a(131),_=a(46),w=a(44),N=a(64),G=a.n(N),L=Object(C.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:w.a[500]}}})),I=function(e){var t=L(),a=r.a.useState(!1),n=Object(p.a)(a,2),c=n[0],o=n[1],i=e.id,u=e.description,l=e.category,s=e.image,d=e.price,m=e.title,f=y(),g=Object(p.a)(f,2),v=g[0],b=g[1],O=v.savedProducts,j=(new Date).toLocaleDateString();return r.a.createElement("div",null,r.a.createElement(P.a,{className:t.root,key:i},r.a.createElement(T.a,{avatar:r.a.createElement(A.a,{"aria-label":"recipe",className:t.avatar},"JLML"),title:m,subheader:j}),r.a.createElement(D.a,{className:t.media,image:s,title:m}),r.a.createElement(k.a,null,r.a.createElement(_.a,{variant:"body2",color:"textSecondary",component:"p"},l),r.a.createElement(_.a,{variant:"body2",color:"textSecondary",component:"p"},"price: $ ",d)),r.a.createElement(S.a,{disableSpacing:!0},r.a.createElement(U.a,{"aria-label":"add to favorites",onClick:function(){b({type:"SAVED_PRODUCTS",product:Object(E.a)({},e)}),console.log(O)},disabled:null===O||void 0===O?void 0:O.some((function(e){return e.id===i}))},(null===O||void 0===O?void 0:O.find((function(e){return e.id===i})))?"description":"add to favorites"),r.a.createElement(U.a,{className:Object(x.a)(t.expand,Object(h.a)({},t.expandOpen,c)),onClick:function(){o(!c)},"aria-expanded":c,"aria-label":"show more"},r.a.createElement(G.a,null))),r.a.createElement(R.a,{in:c,timeout:"auto",unmountOnExit:!0},r.a.createElement(k.a,null,r.a.createElement(_.a,{paragraph:!0},"Description:"),r.a.createElement(_.a,{paragraph:!0},u)))))},J=a(50);function V(){var e=y(),t=Object(p.a)(e,2),a=t[0],c=t[1],o=a.currentCategory,i=function(){var e=Object(d.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.get("https://fakestoreapi.com/products/").catch((function(e){console.log("error , ".concat(e))}));case 2:(t=e.sent)&&c({type:"UPDATE_PRODUCTS",products:t.data});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i()}),[]),r.a.createElement("div",null,(o?a.products.filter((function(e){return e.category===o})):a.products).map((function(e){return r.a.createElement(I,{key:e.id,id:e.id,description:e.description,category:e.category,image:e.image,title:e.title,price:e.price,rating:e.rating.count})})))}var Y=a(50),B={cat:{display:"flex",margin:"20px",justifyContent:"space-evenly"}};var F=function(){var e=Object(n.useState)(),t=Object(p.a)(e,2),a=t[0],c=t[1],o=y(),u=Object(p.a)(o,2),l=u[0],m=u[1],f=l.categories,E=function(){var e=Object(d.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.get("https://fakestoreapi.com/products/categories").catch((function(e){console.log("error , ".concat(e))}));case 2:(t=e.sent)&&m({type:"UPDATE_CATEGORIES",categories:t.data});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){E()}),[]),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m({type:"UPDATE_CURRENT_CATEGORY",currentCategory:a})},style:B.cat},f.map((function(e){return r.a.createElement("button",{onClick:function(){return c(e)},key:e,type:"submit"},e)})),r.a.createElement(i.b,{to:"/savedProducts/"},r.a.createElement("button",null," Favorites "))))},M=function(){return r.a.createElement("div",null,r.a.createElement(F,null),r.a.createElement(V,null))};var W=function(){var e=y(),t=Object(p.a)(e,2),a=t[0],n=(t[1],a.savedProducts);return console.log(n),r.a.createElement("div",null,n.length?n.map((function(e,t){return console.log(e),r.a.createElement(I,{key:e.id,id:e.id,description:e.description,category:e.category,image:e.image,title:e.title,price:e.price,rating:e.rating.count})})):r.a.createElement("p",null," start saving some products before checking your favorites "))};var $=function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(j,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:M}),r.a.createElement(u.a,{path:"/savedProducts",component:W})))))};o.a.render(r.a.createElement($,null),document.getElementById("root"))},70:function(e,t,a){e.exports=a(107)}},[[70,1,2]]]);
//# sourceMappingURL=main.b9dd93f4.chunk.js.map