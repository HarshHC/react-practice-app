(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{38:function(e,t,a){e.exports=a(68)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(34),c=a.n(r),o=(a(43),a(44),a(45),a(5)),m=a(2),i=a(6),u=a(10),s=a(8),d=a(9),p=(l.a.Component,a(16)),E=a(35),b=a(37),f=a(14);var v=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"font-bold py-3 block"},"Main Menu"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/",className:"text-blue-500 py-3 border-b block",onClick:e.closeMenu},"Home")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/about",className:"text-blue-500 py-3 border-b block",onClick:e.closeMenu},"About"))))};var h=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],r=t[1],c=Object(f.b)(a,null,{from:{position:"absolute",opacity:0},enter:{opacity:1},leave:{opacity:0}}),o=Object(f.b)(a,null,{from:{opacity:0,transform:"translateX(-100%)"},enter:{opacity:1,transform:"translateX(0%)"},leave:{opacity:0,transform:"translateX(-100%)"}});return l.a.createElement("nav",null,l.a.createElement("span",{className:"text-xl"},l.a.createElement(E.a,{icon:b.a,onClick:function(){return r(!a)}})),c.map((function(e){var t=e.item,a=e.key,n=e.props;return t&&l.a.createElement(f.a.div,{key:a,style:n,className:"bg-black-t-50 fixed top-0 left-0 z-50 w-full h-full shadow",onClick:function(){return r(!1)}})})),o.map((function(e){var t=e.item,a=e.key,n=e.props;return t&&l.a.createElement(f.a.div,{key:a,style:n,className:"fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3"},l.a.createElement(v,{closeMenu:function(){return r(!1)}}))})))};var g=function(){return l.a.createElement("header",{className:"border-b p-3 flex justify-between items-center"},l.a.createElement(o.b,{to:"/"},l.a.createElement("span",{className:"font-bold"},"AppName")),l.a.createElement(h,null))};var x=function(){return l.a.createElement("footer",{className:"bg-gray-200 text-center text-xs p-3 absolute bottom-0 w-full"},"\xa9 Harsh Chandra 2020")};var y=function(){return l.a.createElement("div",{className:"flex justify-center"},l.a.createElement("div",{className:"loader"},l.a.createElement("div",{class:"item item-1"}),l.a.createElement("div",{class:"item item-2"}),l.a.createElement("div",{class:"item item-3"}),l.a.createElement("div",{class:"item item-4"})))};var N=function(e){return l.a.createElement("div",{className:"border mb-4 rounded overflow-hidden"},l.a.createElement(o.b,{to:"/products/".concat(e.product.id)},l.a.createElement("div",{style:{backgroundImage:"url('".concat(e.product.images[0].imageUrl,"')")},className:"w-full h-64 bg-blue bg-cover"})),l.a.createElement("div",{className:"p-3"},l.a.createElement("h3",{className:"font-bold text-xl mb-3"},l.a.createElement(o.b,{to:"/products/".concat(e.product.id)},e.product.name)),l.a.createElement("div",{className:"font-bold mb-3"},"$ ",e.product.price),l.a.createElement("div",{className:"mb-3"},"$ ",e.product.description),l.a.createElement(o.b,{to:"/products/".concat(e.product.id),className:"bg-blue-500 text-white p-2 flex justify-center"},"VIEW")))},k=a(18),w=a.n(k);function j(e){var t=Object(n.useState)({loading:!1,data:null,error:!1}),a=Object(p.a)(t,2),l=a[0],r=a[1];return Object(n.useEffect)((function(){r({loading:!0,data:null,error:!1}),w.a.get(e).then((function(e){r({loading:!1,data:e.data,error:!1})})).catch((function(){r({loading:!1,data:null,error:!0})}))}),[e]),l}var O=function(){var e=null,t=j("https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10");return t.error&&(e=l.a.createElement("div",null,"There was an error please try again")),t.loading&&(e=l.a.createElement(y,null)),t.data&&(e=t.data.map((function(e){return l.a.createElement("div",{key:e.id},l.a.createElement(N,{product:e}))}))),l.a.createElement("div",null,l.a.createElement("h1",{className:"text-2xl mb-3 font-bold"},"Best Sellers"),e)};var C=function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"font-bold mb-3 text-2xl"},"THIS IS THE ABOUT PAGE"),l.a.createElement("p",null," Content here"))};var I=function(){var e=Object(m.f)().id,t=null,a=j("https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/".concat(e));return a.error&&(t=l.a.createElement("div",null,"Item Not Found")),a.loading&&(t=l.a.createElement(y,null)),a.data?t=l.a.createElement("div",null,l.a.createElement("h1",{className:"text-2xl mb-3 font-bold"},a.data.name),l.a.createElement("div",null,l.a.createElement("img",{src:a.data.images[0].imageUrl,alt:a.data.name})),l.a.createElement("div",{className:"font-bold text-xl mb-3"},"$",a.data.price),l.a.createElement("div",null,a.data.description)):l.a.createElement("div",null,t)};var M=function(){return l.a.createElement("div",{className:"relative pb-10 min-h-screen"},l.a.createElement(o.a,null,l.a.createElement(g,null),l.a.createElement("div",{className:"p-3"},l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/"},l.a.createElement(O,null)),l.a.createElement(m.a,{path:"/about"},l.a.createElement(C,null)),l.a.createElement(m.a,{exact:!0,path:"/products/:id"},l.a.createElement(I,null)))),l.a.createElement(x,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.f1b36eec.chunk.js.map