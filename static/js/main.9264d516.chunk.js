(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{153:function(e,t,n){},155:function(e,t,n){},253:function(e,t,n){},258:function(e,t,n){},259:function(e,t,n){},260:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),s=n(28),i=n.n(s),o=(n(153),n(92),n.p+"static/media/wood.df48913c.png"),l=n(43),j=n(7),d=n(15),u=n.n(d),h=n(33),b=n(144);var x=function(){var e=function(){var e=Object(h.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://ch22-api.herokuapp.com","/auth/login"),{credentials:"include",method:"POST",body:JSON.stringify({token:t.tokenId}),headers:{"Content-Type":"application/json"}});case 2:200!=e.sent.status?console.log("Sending failed. Please try again."):window.location.href="#/dashboard";case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{children:Object(a.jsx)(b.GoogleLogin,{clientId:"518828783452-4vdk5panaua9s8entiv5ljoqvbo7l4j5.apps.googleusercontent.com",onSuccess:e,onFailure:function(e){console.log("Error: unable to login with Google Authentication."),console.log(e)},buttonText:"Sign in with Google"})})},p=n.p+"static/media/nomad.ddb9a5b3.png";var O=function(){return n(155),Object(a.jsx)("div",{class:"landing-page",children:Object(a.jsxs)("div",{class:"landing-page-flex",children:[Object(a.jsxs)("div",{class:"landing-description",children:[Object(a.jsx)("h1",{class:"landing-page__header",children:"Journable"}),Object(a.jsx)("h4",{class:"landing-page__description",children:"Think, Write, Live"}),Object(a.jsx)(x,{})]}),Object(a.jsx)("img",{src:p,alt:"this is gaming!",style:{height:"auto"}})]})})},g=n(6),f=n(147),v=n(91),m=n(145),k=n(102),y=(n(252),n(55)),w=n(66),S=n(46),T=n.p+"static/media/logo.4b3c2850.png";var C=function(){return n(253),Object(a.jsxs)(w.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",fixed:"top",children:[Object(a.jsxs)(w.a.Brand,{href:"#/dashboard",children:[Object(a.jsx)("img",{alt:"",src:T,width:"30",height:"30",className:"d-inline-block align-top"})," ","Journable"]}),Object(a.jsx)(w.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(a.jsxs)(w.a.Collapse,{id:"responsive-navbar-nav",children:[Object(a.jsx)(S.a,{children:Object(a.jsx)(S.a.Link,{href:"#/dashboard",children:"Dashboard"})}),Object(a.jsx)(S.a,{className:"me-auto",children:Object(a.jsx)(S.a.Link,{href:"#/journal",children:"Create a new Journal"})}),Object(a.jsx)(S.a,{children:Object(a.jsx)(S.a.Link,{href:"/",children:"Sign out"})})]})]})},N=function(){var e=Object(c.useState)(""),t=Object(g.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(k.EditorState.createEmpty()),i=Object(g.a)(s,2),l=i[0],j=i[1],d=Object(c.useState)(""),b=Object(g.a)(d,2),x=(b[0],b[1]),p=Object(c.useState)(!1),O=Object(g.a)(p,2),w=O[0],S=O[1],T=function(){return S(!1)},N=function(){var e=Object(h.a)(u.a.mark((function e(t){var a,c,r,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n,c=l.getCurrentContent().getPlainText("\x01"),r={title:a,text:c},console.log(r),e.next=7,fetch("".concat("https://ch22-api.herokuapp.com","/journal"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(r)});case 7:return s=e.sent,e.next=10,s.text();case 10:i=e.sent,console.log(i),x(i),window.location.href="#/details/"+i;case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{style:{backgroundImage:"url(".concat(o,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",height:"100vh"},children:[Object(a.jsx)(C,{}),Object(a.jsx)("div",{class:"container",style:{width:800,height:800,backgroundColor:"white"},children:Object(a.jsxs)(f.a,{children:[Object(a.jsxs)("div",{class:"form-group",children:[Object(a.jsx)("label",{for:"title",children:"Title"}),Object(a.jsx)("input",{type:"text",class:"form-control",id:"title",placeholder:"Title goes here",onChange:function(e){return r(e.target.value)},style:{border:"1px solid black"}})]}),Object(a.jsx)("div",{style:{border:"1px solid black",padding:"2px",minHeight:"580px"},children:Object(a.jsx)(m.Editor,{value:l.getCurrentContent,onEditorStateChange:j})}),Object(a.jsx)(v.a,{variant:"primary",onClick:function(){return S(!0)},children:"Save Journal"}),Object(a.jsxs)(y.a,{show:w,onHide:T,animation:!1,children:[Object(a.jsx)(y.a.Header,{closeButton:!0,children:Object(a.jsx)(y.a.Title,{children:"Save Journal"})}),Object(a.jsx)(y.a.Body,{children:"Do you want to save your journal?"}),Object(a.jsxs)(y.a.Footer,{children:[Object(a.jsx)(v.a,{variant:"secondary",onClick:T,children:"Close"}),Object(a.jsx)(v.a,{variant:"primary",onClick:N,disabled:!function(){return console.log(l.getCurrentContent.length),console.log(n.length),l.getCurrentContent.length>0&&n.length>0},children:"Save"})]})]})]})})]})},J=n(14),E=n(44),B=function(){var e=Object(j.g)().journalID,t=Object(c.useState)(""),r=Object(g.a)(t,2),s=r[0],i=r[1],l=Object(c.useState)(""),d=Object(g.a)(l,2),b=(d[0],d[1]),x=Object(c.useState)(""),p=Object(g.a)(x,2),O=(p[0],p[1]),f=Object(c.useState)(""),v=Object(g.a)(f,2),m=(v[0],v[1]);Object(c.useEffect)((function(){(function(){var e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:null!=(t=e.sent)&&(i(t.title),b(t.text),O(t.sentences),m(t.sentences));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var k=function(){var t=Object(h.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,fetch("".concat("https://ch22-api.herokuapp.com","/journal?id=").concat(e),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}});case 3:if(200!=(n=t.sent).status){t.next=12;break}return t.next=7,n.json();case 7:return a=t.sent,console.log(a),t.abrupt("return",a);case 12:return t.abrupt("return",null);case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return n(258),Object(a.jsxs)("div",{style:{backgroundImage:"url(".concat(o,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",height:"100vh"},children:[Object(a.jsx)(C,{}),Object(a.jsxs)("div",{class:"d-flex justify-content-center main-div",children:[Object(a.jsxs)(E.a,{children:[Object(a.jsx)("h1",{children:s}),Object(a.jsx)("p",{children:"journalContent"})]}),Object(a.jsxs)(E.a,{fluid:!0,children:[Object(a.jsxs)(J.a,{children:[Object(a.jsx)(J.a.Body,{children:Object(a.jsx)(J.a.Text,{children:"dfgdfgdfg"})}),Object(a.jsx)(J.a.Footer,{children:Object(a.jsx)("small",{className:"text-muted",children:"Last updated 3 mins ago"})})]}),Object(a.jsxs)(J.a,{children:[Object(a.jsx)(J.a.Body,{children:Object(a.jsx)(J.a.Text,{children:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."})}),Object(a.jsx)(J.a.Footer,{children:Object(a.jsx)("small",{className:"text-muted",children:"Last updated 3 mins ago"})})]}),Object(a.jsxs)(J.a,{children:[Object(a.jsx)(J.a.Body,{children:Object(a.jsx)(J.a.Text,{children:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."})}),Object(a.jsx)(J.a.Footer,{children:Object(a.jsx)("small",{className:"text-muted",children:"Last updated 3 mins ago"})})]})]})]})]})},L=function(){var e=Object(c.useState)({journals:[]}),t=Object(g.a)(e,2),r=t[0],s=t[1];Object(c.useEffect)((function(){(function(){var e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var i=function(){var e=Object(h.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://ch22-api.herokuapp.com","/journals"),{method:"GET",credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=r.journals.map((function(e){return Object(a.jsx)(J.a,{className:"card-element",style:{width:"18rem"},children:Object(a.jsxs)(J.a.Body,{children:[Object(a.jsx)(J.a.Title,{children:e.title}),Object(a.jsx)(J.a.Text,{children:e.content}),Object(a.jsx)(l.b,{to:"/details/".concat(e._id),children:Object(a.jsx)("button",{className:"btn btn-primary",children:"View Journal"})})]})})}));return n(259),Object(a.jsxs)("div",{className:"main-dashboard",children:[Object(a.jsx)(C,{}),Object(a.jsx)("h1",{className:"title",children:"Welcome to your Journal"}),Object(a.jsx)(E.a,{className:"container-box",children:o})]})},I=function(){return Object(a.jsx)(l.a,{children:Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{path:"/",element:Object(a.jsx)(O,{})}),Object(a.jsx)(j.a,{path:"/journal",element:Object(a.jsx)(N,{})}),Object(a.jsx)(j.a,{path:"/details/:journalID",element:Object(a.jsx)(B,{})}),Object(a.jsx)(j.a,{path:"/dashboard",element:Object(a.jsx)(L,{})})]})})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)("div",{children:Object(a.jsx)(I,{})})}),document.getElementById("root"))}},[[260,1,2]]]);
//# sourceMappingURL=main.9264d516.chunk.js.map