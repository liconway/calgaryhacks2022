(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{132:function(e,t,n){},134:function(e,t,n){},232:function(e,t,n){},237:function(e,t,n){},238:function(e,t,n){},239:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),s=n(25),i=n.n(s),o=(n(132),n(70),n.p+"static/media/wood.df48913c.png"),l=n(65),j=n(6),d=n(15),u=n.n(d),h=n(30),b=n(122);var x=function(){var e=function(){var e=Object(h.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://ch22-api.herokuapp.com","/auth/login"),{credentials:"include",method:"POST",body:JSON.stringify({token:t.tokenId}),headers:{"Content-Type":"application/json"}});case 2:200!=e.sent.status?console.log("Sending failed. Please try again."):window.location.href="/journal";case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{children:Object(a.jsx)(b.GoogleLogin,{clientId:"518828783452-4vdk5panaua9s8entiv5ljoqvbo7l4j5.apps.googleusercontent.com",onSuccess:e,onFailure:function(e){console.log("Error: unable to login with Google Authentication."),console.log(e)},buttonText:"Sign in with Google"})})},p=n.p+"static/media/sitting-3.ae60a731.png";var O=function(){return n(134),Object(a.jsx)("div",{class:"landing-page",children:Object(a.jsxs)("div",{class:"landing-page-flex",children:[Object(a.jsxs)("div",{class:"landing-description",children:[Object(a.jsx)("h1",{class:"landing-page__header",children:"Journable"}),Object(a.jsx)("h4",{class:"landing-page__description",children:"Helping you to journal"}),Object(a.jsx)(x,{})]}),Object(a.jsx)("img",{src:p,alt:"this is gaming!"})]})})},g=n(7),f=n(126),v=n(125),m=n(123),k=n(80),w=(n(231),n(52)),y=n(40);var T=function(){return n(232),Object(a.jsxs)(w.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(a.jsx)(w.a.Brand,{href:"#home",children:"Journal gaming!"}),Object(a.jsx)(w.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(a.jsxs)(w.a.Collapse,{id:"responsive-navbar-nav",children:[Object(a.jsx)(y.a,{children:Object(a.jsx)(y.a.Link,{href:"/Dashboard",children:"Dashboard"})}),Object(a.jsxs)(y.a,{className:"me-auto",children:[" ",Object(a.jsx)(y.a.Link,{href:"/Journal",children:"Create a new Journal"})]}),Object(a.jsx)(y.a,{children:Object(a.jsx)(y.a.Link,{href:"/sign-out",children:"Sign out"})})]})]})},S=function(){var e=Object(c.useState)(""),t=Object(g.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(k.EditorState.createEmpty()),i=Object(g.a)(s,2),l=i[0],j=i[1],d=Object(c.useState)(!1),b=Object(g.a)(d,2),x=(b[0],b[1],function(){var e=Object(h.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://ch22-api.herokuapp.com","/journal"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.text();case 5:return a=e.sent,console.log(a),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(a.jsxs)("div",{style:{backgroundImage:"url(".concat(o,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",height:"100vh"},children:[Object(a.jsx)(T,{}),Object(a.jsx)("div",{class:"container",style:{width:800,height:800,backgroundColor:"white"},children:Object(a.jsxs)(f.a,{children:[Object(a.jsxs)("div",{class:"form-group",children:[Object(a.jsx)("label",{for:"title",children:"Title"}),Object(a.jsx)("input",{type:"text",class:"form-control",id:"title",placeholder:"Title goes here",onChange:function(e){return r(e.target.value)},style:{border:"1px solid black"}})]}),Object(a.jsx)("div",{style:{border:"1px solid black",padding:"2px",minHeight:"580px"},children:Object(a.jsx)(m.Editor,{value:l.getCurrentContent,onEditorStateChange:j})}),Object(a.jsx)(v.a,{variant:"primary",onClick:function(e){var t={title:n,text:l.getCurrentContent().getPlainText("\x01")};console.log(t),e.preventDefault(),x(t)},children:"Save Journal"})]})})]})},C=n(12),E=n(44),J=function(e){var t=Object(c.useState)(""),r=Object(g.a)(t,2),s=(r[0],r[1]),i=Object(c.useState)(""),l=Object(g.a)(i,2),j=(l[0],l[1]),d=Object(c.useState)(""),b=Object(g.a)(d,2),x=(b[0],b[1]),p=Object(c.useState)(""),O=Object(g.a)(p,2),f=(O[0],O[1]);Object(c.useEffect)((function(){(function(){var e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=e.sent,s(t.title),j(t.text),x(t.positive),f(t.negative);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=function(){var t=Object(h.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,fetch("".concat("https://ch22-api.herokuapp.com","/journal?id=6211cf1c9706cc89e451a0c2"),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}});case 3:return n=t.sent,t.next=6,n.json();case 6:return a=t.sent,console.log(a),t.abrupt("return",a);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return n(237),Object(a.jsxs)("div",{style:{backgroundImage:"url(".concat(o,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",height:"100vh"},children:[Object(a.jsx)(T,{}),Object(a.jsxs)("div",{class:"d-flex justify-content-center main-div",children:[Object(a.jsx)(E.a,{children:Object(a.jsx)("h1",{children:"Journal"})}),Object(a.jsxs)(E.a,{fluid:!0,children:[Object(a.jsxs)(C.a,{children:[Object(a.jsx)(C.a.Body,{children:Object(a.jsx)(C.a.Text,{children:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."})}),Object(a.jsx)(C.a.Footer,{children:Object(a.jsx)("small",{className:"text-muted",children:"Last updated 3 mins ago"})})]}),Object(a.jsxs)(C.a,{children:[Object(a.jsx)(C.a.Body,{children:Object(a.jsx)(C.a.Text,{children:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."})}),Object(a.jsx)(C.a.Footer,{children:Object(a.jsx)("small",{className:"text-muted",children:"Last updated 3 mins ago"})})]}),Object(a.jsxs)(C.a,{children:[Object(a.jsx)(C.a.Body,{children:Object(a.jsx)(C.a.Text,{children:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."})}),Object(a.jsx)(C.a.Footer,{children:Object(a.jsx)("small",{className:"text-muted",children:"Last updated 3 mins ago"})})]})]})]})]})},N=function(){var e=Object(c.useState)(""),t=Object(g.a)(e,2),r=(t[0],t[1]),s=Object(c.useState)(""),i=Object(g.a)(s,2),l=(i[0],i[1]);Object(c.useEffect)((function(){(function(){var e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,r(t.title),l(t.text);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var j=function(){var e=Object(h.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:1234/journals",{method:"GET",credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,console.log(n),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n(238),Object(a.jsxs)("div",{style:{backgroundImage:"url(".concat(o,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",height:"100vh"},children:[Object(a.jsx)(T,{}),Object(a.jsxs)(E.a,{children:[Object(a.jsxs)(C.a,{children:[Object(a.jsx)(C.a.Body,{children:Object(a.jsx)(C.a.Title,{children:"Title"})}),Object(a.jsx)(C.a.Footer,{children:Object(a.jsx)("small",{className:"text-muted",children:"Timestamp"})})]}),Object(a.jsxs)(C.a,{children:[Object(a.jsx)(C.a.Body,{children:Object(a.jsx)(C.a.Title,{children:"Title"})}),Object(a.jsx)(C.a.Footer,{children:Object(a.jsx)("small",{className:"text-muted",children:"Timestamp"})})]})]})]})},B=function(){return Object(a.jsx)(l.a,{children:Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{path:"/",element:Object(a.jsx)(O,{})}),Object(a.jsx)(j.a,{path:"/journal",element:Object(a.jsx)(S,{})}),Object(a.jsx)(j.a,{path:"/details",element:Object(a.jsx)(J,{})}),Object(a.jsx)(j.a,{path:"/dashboard",element:Object(a.jsx)(N,{})})]})})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)("div",{children:Object(a.jsx)(B,{})})}),document.getElementById("root"))}},[[239,1,2]]]);
//# sourceMappingURL=main.df15aa04.chunk.js.map