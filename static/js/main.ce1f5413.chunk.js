(this.webpackJsonpwallester2=this.webpackJsonpwallester2||[]).push([[0],{100:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},119:function(e,t,a){},218:function(e,t,a){},219:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(80),c=a.n(s),i=(a(98),a(13)),u=a(3),l=(a(99),a(100),a(220)),o=a(2),j={en:{nativeName:"English",languageCode:"en"},es:{nativeName:"Spanish",languageCode:"es"}},b=function(){var e=Object(l.a)().i18n;return Object(o.jsx)("div",{className:"switch-languages",children:Object.keys(j).map((function(t){return Object(o.jsx)("button",{type:"submit",onClick:function(){return e.changeLanguage(t)},className:"switch-languages__language-button ".concat(j[t].languageCode),"aria-label":"change page language to ".concat(j[t].nativeName)},t)}))})},d=function(){return Object(o.jsx)("header",{className:"header",children:Object(o.jsxs)("div",{className:"header__wrapper",children:[Object(o.jsx)(i.b,{to:"/",children:Object(o.jsx)("h1",{children:"Fetch them all"})}),Object(o.jsx)(b,{})]})})},h=a(7),p=a(85),O=(a(114),a(84)),x=(a(115),function(){var e=Object(l.a)().t;return Object(o.jsxs)(i.b,{to:"/create-new-user",className:"create-new-user-button",children:[Object(o.jsx)(O.a,{className:"plus-icon"}),Object(o.jsx)("span",{className:"create-new-user-button__text",children:e("create-new-user-button")})]})}),f=(a(116),function(e){var t=e.title,a=e.showButton;return Object(o.jsxs)("div",{className:"users-header",children:[Object(o.jsx)("h2",{children:t}),a&&Object(o.jsx)(x,{})]})}),m=(a(117),function(e){for(var t=e.setCurrentPage,a=e.totalPages,n=e.currentPage,r=[],s=1;s<=a;s++)r.push(s);return Object(o.jsx)("div",{className:"pagination",children:Object(o.jsx)("ul",{className:"pagination__list",children:r.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)("button",{className:"pagination__page-number ".concat(e===n&&"active-page"),onClick:function(){return t(e)},children:e})},e)}))})})}),g=a(14),v=a.n(g),N=a(22);function w(){return(w=Object(N.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y,S=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(1),c=Object(h.a)(s,2),u=c[0],j=c[1],b=Object(n.useState)(1),d=Object(h.a)(b,2),O=d[0],x=d[1],g=Object(l.a)().t;return Object(n.useEffect)((function(){(function(e){return w.apply(this,arguments)})("https://reqres.in/api/users?page=".concat(u)).then((function(e){r(e.data),j(e.page),x(e.total_pages)})).catch((function(e){return console.error(e)}))}),[u]),Object(o.jsx)("main",{children:Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)(f,{title:g("page-headers.part1"),showButton:!0}),Object(o.jsx)("div",{className:"users-list",children:a.map((function(e){return Object(o.jsxs)(i.b,{to:"/user/".concat(e.id),className:"users-list__user",children:[Object(o.jsxs)("span",{className:"users-list__name",children:[e.first_name," ",e.last_name]}),Object(o.jsx)(p.a,{})]},e.id)}))}),Object(o.jsx)(m,{totalPages:O,currentPage:u,setCurrentPage:j})]})})},_=(a(119),function(){var e=Object(n.useState)({}),t=Object(h.a)(e,2),a=t[0],r=t[1],s=Object(u.f)().id;function c(){return(c=Object(N.a)(v.a.mark((function e(t){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://reqres.in/api/users/".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,r(n.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(e){c.apply(this,arguments)}(s)}),[s]),console.log(a),Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)(f,{title:"User Details",showButton:!0}),Object(o.jsxs)("div",{className:"user-details",children:[Object(o.jsx)("img",{src:a.avatar,alt:null===a||void 0===a?void 0:a.first_name}),Object(o.jsx)("p",{children:a.first_name}),Object(o.jsx)("p",{children:a.last_name}),Object(o.jsx)("p",{children:a.email})]})]})}),C=a(23),q=a(31),P=(a(218),new Date);P.setFullYear(P.getFullYear()-18),function(e){e.SoftwareEngineer="Software Engineer",e.Painter="Painter",e.BusDriver="Bus driver"}(y||(y={}));var B=q.b().shape({firstName:q.c().matches(/^[a-z\s]+$/i,"Only latin craracters pls").required("Required"),lastName:q.c().matches(/^[a-z\s]+$/i,"Only latin craracters pls").required("Required"),date:q.a().max(P,"Sorry you must be 18 years old").required("Required")});function k(){return(k=Object(N.a)(v.a.mark((function e(t,a){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(){var e=Object(n.useState)(null),t=Object(h.a)(e,2),a=t[0],r=t[1];return Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)(f,{title:"Create New User",showButton:!1}),Object(o.jsx)(C.c,{initialValues:{firstName:"",lastName:"",position:"",date:""},validationSchema:B,onSubmit:function(e,t){var a=t.setSubmitting;(function(e,t){return k.apply(this,arguments)})("https://reqres.in/api/users/",e).then((function(e){r(e),console.log(e)})).catch((function(e){return console.error(e)})),a(!1)},children:function(e){var t=e.values,a=e.errors,n=e.touched,r=e.handleChange;return Object(o.jsxs)(C.b,{children:[Object(o.jsxs)("label",{children:["First Name:",Object(o.jsx)(C.a,{name:"firstName",placeholder:"enter your first name",required:!0}),a.firstName&&n.firstName&&Object(o.jsx)("div",{children:a.firstName})]}),Object(o.jsx)("br",{}),Object(o.jsxs)("label",{children:["Last Name:",Object(o.jsx)(C.a,{className:a.lastName&&n.lastName?"red":null,name:"lastName",placeholder:"enter your last name",required:!0}),a.lastName&&n.lastName?Object(o.jsx)("div",{children:a.lastName}):null]}),Object(o.jsx)("br",{}),Object(o.jsxs)("label",{children:["Occupation",Object(o.jsxs)("select",{onChange:r,name:"position",value:t.position,required:!0,children:[Object(o.jsx)("option",{value:"",label:"Select occupation",disabled:!0,hidden:!0}),Object(o.jsx)("option",{value:y.SoftwareEngineer,children:y.SoftwareEngineer}),Object(o.jsx)("option",{value:y.Painter,children:y.Painter}),Object(o.jsx)("option",{value:y.BusDriver,children:y.BusDriver})]})]}),Object(o.jsx)("br",{}),Object(o.jsxs)("label",{children:["Date of Birth:",Object(o.jsx)(C.a,{required:!0,type:"date",name:"date",className:"date-picker ".concat(a.date?"red":"green")}),a.date&&n.date?Object(o.jsx)("div",{children:a.date}):null]}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{type:"submit",children:"Submit"})]})}}),a&&Object(o.jsxs)("div",{children:["Response result: ",JSON.stringify(a)]})]})};var E=function(){return Object(o.jsxs)(i.a,{children:[Object(o.jsx)(d,{}),Object(o.jsxs)(u.c,{children:[Object(o.jsx)(u.a,{path:"/user/:id",children:Object(o.jsx)(_,{})}),Object(o.jsx)(u.a,{path:"/create-new-user",children:Object(o.jsx)(D,{})}),Object(o.jsx)(u.a,{path:"/",children:Object(o.jsx)(S,{})})]})]})},U=a(57),J=a(30),F={en:{translation:a(92)},es:{translation:a(93)}};U.a.use(J.e).init({lng:"en",resources:F});U.a;c.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(E,{})}),document.getElementById("root"))},92:function(e){e.exports=JSON.parse('{"page-headers":{"part1":"User List","part2":"User Details","part3":"Create New User"},"create-new-user-button":"Create New User"}')},93:function(e){e.exports=JSON.parse('{"page-headers":{"part1":"Lista de usuarios","part2":"Detalles de usuario","part3":"Crear nueva usuaria"},"create-new-user-button":"Crear Nueva Usuaria"}')},98:function(e,t,a){},99:function(e,t,a){}},[[219,1,2]]]);
//# sourceMappingURL=main.ce1f5413.chunk.js.map