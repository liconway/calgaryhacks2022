(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{115:function(e,t,n){},216:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n.n(r),s=n(19),i=n.n(s);n(115),n(52);var o=function(){return Object(a.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(a.jsx)("a",{class:"navbar-brand",href:"#",children:"Navbar"}),Object(a.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{class:"navbar-toggler-icon"})}),Object(a.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNav",children:Object(a.jsxs)("ul",{class:"navbar-nav",children:[Object(a.jsx)("li",{class:"nav-item active",children:Object(a.jsx)("a",{class:"nav-link",href:"#",children:"Home"})}),Object(a.jsx)("li",{class:"nav-item",children:Object(a.jsx)("a",{class:"nav-link",href:"#",children:"Idk"})}),Object(a.jsx)("li",{class:"nav-item",children:Object(a.jsx)("a",{class:"nav-link",href:"#",children:"Idk either"})}),Object(a.jsx)("li",{class:"nav-item",children:Object(a.jsx)("a",{class:"nav-link disabled",href:"#",children:"Idfk"})})]})})]})},l=n(103),j=n(104),d=n(37),b=n(31),h=n.n(b),u=n(50),x=n(102);var O=function(){var e=function(){var e=Object(u.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/post/auth",{method:"POST",body:JSON.stringify({token:t.tokenId}),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:e.sent;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{children:Object(a.jsx)(x.GoogleLogin,{clientId:"518828783452-4vdk5panaua9s8entiv5ljoqvbo7l4j5.apps.googleusercontent.com",onSuccess:e,onFailure:function(e){console.log("Error: unable to login with Google Authentication.")},buttonText:"Sign in with Google",isSignedIn:!0})})},v=n.p+"static/media/sitting-3.ae60a731.png";var g=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(l.a,{children:Object(a.jsxs)(j.a,{children:[Object(a.jsx)(d.a,{children:Object(a.jsx)(O,{})}),Object(a.jsx)(d.a,{children:Object(a.jsx)("img",{src:v})})]})})})},p=n(10),f=n(107),k=n(51),m=n(105),y=n(62),C=(n(213),n(32)),w=function(){var e=Object(r.useState)(""),t=Object(p.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(y.EditorState.createEmpty()),i=Object(p.a)(s,2),o=i[0],l=i[1],j=Object(r.useState)(!1),d=Object(p.a)(j,2),b=d[0],x=d[1],O=function(){return x(!1)},v=function(){var e=Object(u.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ch22-api.herokuapp.com/note",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.text();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{class:"container",style:{width:800,height:800,backgroundColor:"white"},children:Object(a.jsxs)(f.a,{children:[Object(a.jsxs)("div",{class:"form-group",children:[Object(a.jsx)("label",{for:"title",children:"Title"}),Object(a.jsx)("input",{type:"text",class:"form-control",id:"title",placeholder:"Title goes here",onChange:function(e){return c(e.target.value)},style:{border:"1px solid black"}})]}),Object(a.jsx)("div",{style:{border:"1px solid black",padding:"2px",minHeight:"580px"},children:Object(a.jsx)(m.Editor,{value:o.getCurrentContent,onEditorStateChange:l})}),Object(a.jsx)(k.a,{variant:"primary",onClick:function(){return x(!0)},children:"Save Journal"}),Object(a.jsxs)(C.a,{show:b,onHide:O,animation:!1,children:[Object(a.jsx)(C.a.Header,{closeButton:!0,children:Object(a.jsx)(C.a.Title,{children:"Save Journal"})}),Object(a.jsx)(C.a.Body,{children:"Do you want to save your journal?"}),Object(a.jsxs)(C.a.Footer,{children:[Object(a.jsx)(k.a,{variant:"secondary",onClick:O,children:"Close"}),Object(a.jsx)(k.a,{variant:"primary",onClick:function(e){var t={userid:"userid321",title:n,text:o.getCurrentContent().getPlainText("\x01")};console.log(t),e.preventDefault(),v(t),console.log("Redirecting to details"),window.location.href="/details"},disabled:!function(){return console.log(o.getCurrentContent.length),console.log(n.length),o.getCurrentContent.length>0&&n.length>0},children:"Save"})]})]})]})})},S=n.p+"static/media/wood.df48913c.png",T=n(108),I=n(5),E=function(){return Object(a.jsx)("div",{class:"container",style:{width:800,height:800,backgroundColor:"white"},children:Object(a.jsx)("h1",{children:"Boy next door"})})},J=function(){return Object(a.jsx)(T.a,{children:Object(a.jsxs)(I.c,{children:[Object(a.jsx)(I.a,{path:"/",element:Object(a.jsx)(g,{})}),Object(a.jsx)(I.a,{path:"/journal",element:Object(a.jsx)(w,{})}),Object(a.jsx)(I.a,{path:"/details",element:Object(a.jsx)(E,{})})]})})};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsxs)("div",{style:{backgroundImage:"url(".concat(S,")"),backgroundSize:"cover",backgroundRepeat:"repeat",backgroundPosition:"center",height:"100vh"},children:[Object(a.jsx)(o,{}),Object(a.jsx)(J,{})]})}),document.getElementById("root"))}},[[216,1,2]]]);
//# sourceMappingURL=main.ecccbf57.chunk.js.map