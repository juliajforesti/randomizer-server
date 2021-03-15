(this.webpackJsonprandomizer=this.webpackJsonprandomizer||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),o=a(6),s=a(7),i=a(9),u=(a(67),a(68),function(){return r.a.createElement("div",{className:""},r.a.createElement("footer",{className:"page-footer font-small blue"},r.a.createElement("div",{className:"footer footer-copyright text-center py-3"},"Developed by  Julia Jaeger Foresti",r.a.createElement("a",{href:"https://github.com/juliajforesti",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-github mx-2 text-light","aria-hidden":"true"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/juliajforesti/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-linkedin text-light","aria-hidden":"true"})))))}),m=a(11),d=a.n(m),p=a(13),f=a(19),h=a(58),b=a.n(h).a.create({baseURL:"http://localhost:5000/api"}),E=function(e){var t=e.searchFilter,a=Object(n.useState)(""),c=Object(o.a)(a,2),l=c[0],s=c[1];return Object(n.useEffect)((function(){t(l)}),[l]),r.a.createElement("div",{className:"d-flex  justify-content-center"},r.a.createElement("input",{name:"input",value:l,onChange:function(e){var t=e.currentTarget.value;s(t)},className:"input-group m-3 p-2 w-75 border-radius",type:"text",placeholder:"Search by name"}))},v=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)([]),u=Object(o.a)(i,2),m=u[0],h=u[1],v=Object(n.useState)(!0),O=Object(o.a)(v,2),g=O[0],j=O[1];return Object(n.useEffect)((function(){!function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("/cohorts");case 2:t=e.sent,l(Object(p.a)(t.data)),h(Object(p.a)(t.data)),t&&j(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),r.a.createElement("div",null,g?r.a.createElement("h2",{className:"text-light"},"LOADING..."):r.a.createElement("div",null,r.a.createElement("h2",{className:"title-color"},"Select your cohort"),r.a.createElement(E,{searchFilter:function(e){var t=m.filter((function(t){return t.course.toLowerCase().includes(e)||t.campus.toLowerCase().includes(e)||t.startMonth.toLowerCase().includes(e)||t.startYear.toString().includes(e)}));l(Object(p.a)(t))}}),r.a.createElement("ul",{className:"m-3 w-75 m-auto"},c.map((function(t,a){return r.a.createElement(s.Link,{key:a,onClick:function(){return function(t){localStorage.setItem("selectedCohort",JSON.stringify(t)),e.setSelected(JSON.parse(localStorage.getItem("selectedCohort")))}(t)},className:"text-light ",to:"/cohort/".concat(t._id)},r.a.createElement("li",{className:"cohorts-list-item p-3"},t.course," - ",t.startMonth,t.startYear," - ",t.campus))})))))},O=a(111),g=a(110),j=a(28),N=function(e){var t=e.cohort,a=Object(n.useState)(!1),c=Object(o.a)(a,2),l=c[0],i=c[1];return r.a.createElement(O.a,{expanded:l,collapseOnSelect:!0,expand:"md",className:"nav-color",variant:"dark"},r.a.createElement(O.a.Brand,null,r.a.createElement(s.Link,{className:"navbar-brand text-light",to:"/"},"Home")),r.a.createElement(O.a.Toggle,{onClick:function(){return i(!l&&"expanded")},"aria-controls":"responsive-navbar-nav"}),r.a.createElement(O.a.Collapse,{id:"responsive-navbar-nav"},t?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{className:"mr-auto"},r.a.createElement(j.LinkContainer,{to:"/random",onClick:function(){return i(!1)}},r.a.createElement(g.a.Link,null,"Randomizer")),r.a.createElement(j.LinkContainer,{to:"/pairs",onClick:function(){return i(!1)}},r.a.createElement(g.a.Link,null,"Random pairs")),r.a.createElement(j.LinkContainer,{to:"/random-order",onClick:function(){return i(!1)}},r.a.createElement(g.a.Link,null,"Random order")),r.a.createElement(j.LinkContainer,{to:"/heads-or-tails",onClick:function(){return i(!1)}},r.a.createElement(g.a.Link,null,"Coinflip"))),r.a.createElement(g.a,null,r.a.createElement(j.LinkContainer,{to:"/cohort/".concat(t._id),onClick:function(){return i(!1)}},r.a.createElement(g.a.Link,null,"See cohort")),r.a.createElement(j.LinkContainer,{to:"/add-cohort",onClick:function(){return i(!1)}},r.a.createElement(g.a.Link,null,"Add cohort")),r.a.createElement(j.LinkContainer,{to:"/custom-list",onClick:function(){return i(!1)}},r.a.createElement(g.a.Link,null,"Custom List")))):r.a.createElement(g.a,null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a.Link,null,r.a.createElement(s.Link,{to:"/random",onClick:function(){return i(!1)}},"Randomizer")),r.a.createElement(g.a.Link,null,r.a.createElement(s.Link,{to:"/pairs",onClick:function(){return i(!1)}},"Random pairs")),r.a.createElement(g.a.Link,null,r.a.createElement(s.Link,{to:"/random-order",onClick:function(){return i(!1)}},"Random order"))):r.a.createElement(r.a.Fragment,null),r.a.createElement(g.a.Link,null,r.a.createElement(s.Link,{to:"/add-cohort",onClick:function(){return i(!1)}},"Add cohort")),r.a.createElement(g.a.Link,null,r.a.createElement(s.Link,{to:"/custom-list",onClick:function(){return i(!1)}},"Instant List")),r.a.createElement(g.a.Link,null,r.a.createElement(s.Link,{to:"/heads-or-tails",onClick:function(){return i(!1)}},"Coinflip")))))},k=a(4),x=a(38);var C=function(e){var t=Object(n.useState)({pairs:[],isLoading:!1}),a=Object(o.a)(t,2),c=a[0],l=a[1];return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"pt-3"},"Pairs Generator"),r.a.createElement("button",{className:"btn btn-blue my-3 ",onClick:function(t){l(Object(k.a)(Object(k.a)({},c),{},{isLoading:!0}));var a=Object(x.randomizeArray)(Object(p.a)(e.cohort.students));setTimeout((function(){var e;l(Object(k.a)(Object(k.a)({},c),{},{isLoading:!1,pairs:(e=a,e.reduce((function(e,t,a,n){return a%2===0&&e.push(n.slice(a,a+2)),e}),[]))}))}),1e3)}},"GO!"),r.a.createElement("div",{className:"d-flex flex-column align-items-center justify-content-center"},c.isLoading?r.a.createElement("div",{className:"spinner-border text-light",style:{width:"3rem",height:"3rem"},role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement("div",{className:"students-list"},c.pairs.map((function(e,t){return 2===e.length?r.a.createElement("p",{key:t,className:"text-capitalize"},t+1,". ",e[0]," e ",e[1],","):r.a.createElement("p",{key:t,className:"text-capitalize"},t+1,". ",e[0])})))))},S=function(e){var t=Object(n.useState)({students:[""],isLoading:!1}),a=Object(o.a)(t,2),c=a[0],l=a[1];return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"pt-3"},"Random Order"),r.a.createElement("button",{className:"btn btn-blue my-3 ",onClick:function(t){l(Object(k.a)(Object(k.a)({},c),{},{isLoading:!0})),setTimeout((function(){l(Object(k.a)(Object(k.a)({},c),{},{isLoading:!1,students:Object(x.randomizeArray)(Object(p.a)(e.cohort.students))}))}),1e3)}},"GO!"),r.a.createElement("div",{className:"d-flex flex-column align-items-center justify-content-center align-content-center"},c.isLoading?r.a.createElement("div",{className:"spinner-border text-light",style:{width:"3rem",height:"3rem"},role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement("div",{className:"students-list d-flex flex-column flex-wrap"},c.students.map((function(e,t,a){return 1===a.length?r.a.createElement("div",{key:t}):r.a.createElement("p",{key:t,className:"pl-5 text-capitalize"},r.a.createElement("strong",null,t+1,". ")," ",e)})))))},y=function(e){var t=Object(n.useState)({students:Object(p.a)(e.cohort.students),picked:"",isLoading:!1}),a=Object(o.a)(t,2),c=a[0],l=a[1],s=c.students.length;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"pt-3"},"Randomizer"),r.a.createElement("button",{className:"btn btn-blue my-3 ",onClick:function(e){var t=Math.floor(Math.random()*s),a=0,n=setInterval((function(){a=(a+1)%s,l(Object(k.a)(Object(k.a)({},c),{},{isLoading:!0,picked:c.students[a]}))}),150);setTimeout((function(){l(Object(k.a)(Object(k.a)({},c),{},{picked:c.students[t],isLoading:!1})),clearInterval(n)}),4e3)}},"GO!"),r.a.createElement("div",{className:"result-box d-flex flex-column align-items-center justify-content-center align-content-center"},c.isLoading?r.a.createElement("h2",{className:"result text-capitalize"},c.picked):r.a.createElement("h2",{className:"result text-capitalize",style:{color:"#223"}},c.picked)))},L=function(){var e=Object(n.useState)({flipped:!1,flippingStyle:{},side:""}),t=Object(o.a)(e,2),a=t[0],c=t[1],l={animationName:"flip_animation",animationDuration:"3s"},s=["HEADS","TAILS"];return r.a.createElement("div",{className:"App d-flex flex-column align-items-center"},r.a.createElement("h1",{className:"pt-3"},"Heads or Tails"),r.a.createElement("button",{className:"btn btn-blue my-5",onClick:function(){var e=s[Math.floor(2*Math.random())];c(Object(k.a)(Object(k.a)({},a),{},{flippingStyle:l,flipped:!1})),setTimeout((function(){c(Object(k.a)(Object(k.a)({},a),{},{side:e,flipped:!0}))}),3e3)}},"GO!"),a.flipped?r.a.createElement("div",{style:a.flippingStyle,className:"flip-img coin "},r.a.createElement("p",{className:"coin-text"},a.side)):r.a.createElement("div",{style:a.flippingStyle,className:"flip-img coin"}))},w=a(37),I=a(61),A={DropdownIndicator:null},T=function(e){return{label:e,value:e}};var D=function(e){var t=Object(n.useState)({inputValue:"",value:[]}),a=Object(o.a)(t,2),c=a[0],l=a[1];Object(n.useEffect)((function(){Object(f.a)(d.a.mark((function t(){var a,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.get("/cohort/".concat(e.id));case 2:a=t.sent,n=a.data.students.map((function(e){return T(e)})),l(Object(k.a)(Object(k.a)({},c),{},{value:Object(p.a)(n)}));case 5:case"end":return t.stop()}}),t)})))()}),[e.id]),Object(n.useEffect)((function(){var t=c.value?Object(p.a)(c.value).map((function(e){return e.value})):[];e.setInput(Object(k.a)(Object(k.a)({},e.input),{},{students:t}))}),[c]);var s=c.inputValue,i=c.value;return r.a.createElement(I.a,{className:"pb-4",components:A,inputValue:s,isClearable:!0,isMulti:!0,menuIsOpen:!1,onChange:function(e,t){console.group("Value Changed"),console.groupEnd(),l(Object(k.a)(Object(k.a)({},c),{},{value:e}))},onInputChange:function(e){l(Object(k.a)(Object(k.a)({},c),{},{inputValue:e}))},onKeyDown:function(e){var t=c.inputValue,a=c.value;if(t)switch(e.key){case"Enter":case"Tab":l(a?Object(k.a)(Object(k.a)({},c),{},{inputValue:"",value:[].concat(Object(p.a)(a),[T(t)])}):Object(k.a)(Object(k.a)({},c),{},{inputValue:"",value:[T(t)]})),e.preventDefault()}},placeholder:"Type one name and press enter...",value:i})},F=function(e){var t=e.handleSubmit,a=e.input,n=e.setInput,c=Object(i.k)(),l="JAN,FEB,MAR,APR,MAY,JUN,JUL,AUG,SEP,OCT,NOV,DEC".split(",");function o(e){var t=e.currentTarget,r=t.name,c=t.value;n(Object(k.a)(Object(k.a)({},a),{},Object(w.a)({},r,c)))}return r.a.createElement("form",{onSubmit:t,className:"d-flex flex-column align-items-center"},r.a.createElement("div",{className:"form-group w-50"},r.a.createElement("label",{className:"text-light",htmlFor:"course"},"Course:"),r.a.createElement("select",{className:"form-control",name:"course",id:"course",onChange:o,value:a.course},["WDFT","WDPT","WDPTR","DAFT","DAPT","UXUIFT","UXUIPT"].map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))),r.a.createElement("label",{className:"text-light",htmlFor:"campi"},"Campus:"),r.a.createElement("select",{className:"form-control",name:"campus",id:"campus",onChange:o,value:a.campus},["S\xe3o Paulo","Paris","Amsterdam","Mexico City","Madrid","Barcelona","Lisbon","Berlim","Miami"].map((function(e){return r.a.createElement("option",{value:e},e)}))),r.a.createElement("label",{className:"text-light",htmlFor:"month"},"Start month:"),r.a.createElement("select",{className:"form-control",name:"startMonth",id:"month",onChange:o,value:a.startMonth},l.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))),r.a.createElement("label",{className:"text-light",htmlFor:"year"},"Start year:"),r.a.createElement("input",{className:"form-control",type:"number",name:"startYear",onChange:o,value:a.startYear}),r.a.createElement("label",{className:"text-light",htmlFor:"students"},"Students list"),r.a.createElement(D,{input:a,setInput:n,id:e.id}),r.a.createElement("button",{className:"btn btn-light mx-2",type:"submit"},"Save"),r.a.createElement("button",{className:"btn btn-light mx-2",onClick:function(){return c.goBack()}},"Cancel")))},M=function(e){var t=Object(i.k)(),a=Object(n.useState)({course:"WDFT",campus:"S\xe3o Paulo",startMonth:"JAN",startYear:2020,students:[]}),c=Object(o.a)(a,2),l=c[0],s=c[1];function u(){return(u=Object(f.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,b.post("/cohort-create",l);case 4:t.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return r.a.createElement("div",null,r.a.createElement(F,{handleSubmit:function(e){return u.apply(this,arguments)},input:l,setInput:s}))},J=a(31),z=function(e){return r.a.createElement(J.a,{centered:!0,show:e.show,onHide:e.handleClose},r.a.createElement(J.a.Header,{closeButton:!0},r.a.createElement(J.a.Title,null,"Please confirm your action")),r.a.createElement(J.a.Body,null,r.a.createElement("p",null,"This action is irreversible. Are you sure you want proceed?")),r.a.createElement(J.a.Footer,null,r.a.createElement("button",{className:"btn btn-secondary",onClick:e.handleClose},"Cancel"),r.a.createElement(s.Link,{className:"btn btn-danger",to:e.action},"Confirm")))},R=function(e){var t=e.cohort,a=Object(n.useState)(!0),c=Object(o.a)(a,2),l=c[0],i=c[1],u=Object(n.useState)(!1),m=Object(o.a)(u,2),d=m[0],p=m[1];return Object(n.useEffect)((function(){t&&i(!1)}),[t]),r.a.createElement("div",null,l?r.a.createElement("h2",{className:"text-light"},r.a.createElement("div",{className:"spinner-border text-light",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))):r.a.createElement("div",null,r.a.createElement("h1",null,t.course,"-",t.startMonth,t.startYear),r.a.createElement("div",{className:"students-list"},t.students.sort((function(e,t){return e.localeCompare(t)})).map((function(e,t){return r.a.createElement("p",{key:t,className:"text-light text-capitalize"},t+1,". ",e)}))),r.a.createElement(s.Link,{className:"btn btn-light mx-1 mt-3",to:"/cohort-edit/".concat(t._id)},"Edit"),t.campus?r.a.createElement("button",{className:"btn btn-danger mx-1 mt-3",onClick:function(){p(!0)}},"Delete"):r.a.createElement(r.a.Fragment,null)),r.a.createElement(z,{show:d,handleClose:function(){p(!1)},action:"/cohort-delete/".concat(t._id)}))},P=function(e){var t=Object(i.k)(),a=e.match.params.id,c=Object(n.useState)(!0),l=Object(o.a)(c,2),s=l[0],u=l[1],m=Object(n.useState)({course:"WDFT",campus:"S\xe3o Paulo",startMonth:"JAN",startYear:2020,students:[]}),p=Object(o.a)(m,2),h=p[0],E=p[1];function v(){return(v=Object(f.a)(d.a.mark((function n(r){var c;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,n.next=4,b.patch("/cohort/".concat(a),h);case 4:c=n.sent,localStorage.setItem("selectedCohort",JSON.stringify(c.data.cohort)),e.setSelected(JSON.parse(localStorage.getItem("selectedCohort"))),t.push("/cohort/".concat(a)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[1,10]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("/cohort/".concat(a));case 2:t=e.sent,E(Object(k.a)(Object(k.a)({},t.data),{},{students:(n=t.data.students,{label:n,value:n})}));case 4:case"end":return e.stop()}var n}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a]),Object(n.useEffect)((function(){u(!1)}),[h]),r.a.createElement("div",null,s?r.a.createElement("p",{className:"text-light"},"LOADING..."):r.a.createElement(F,{handleSubmit:function(e){return v.apply(this,arguments)},input:h,setInput:E,id:a}))},B=function(e){var t=e.match.params.id;return Object(n.useEffect)((function(){Object(f.a)(d.a.mark((function a(){return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,b.delete("cohort/".concat(t));case 3:e.history.push("/"),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),console.error(a.t0);case 9:case"end":return a.stop()}}),a,null,[[0,6]])})))()}),[t,e.history]),r.a.createElement("div",null,r.a.createElement("p",{className:"text-light"},"Deleting..."))},V=function(e){var t=Object(i.k)(),a=Object(n.useState)({students:[]}),c=Object(o.a)(a,2),l=c[0],s=c[1];return r.a.createElement("div",null,r.a.createElement("h4",{className:"text-light container"},"Create your own list!"),r.a.createElement("p",{className:"text-light container"},"It will not be saved to the database, but you will be able to use all features after saving it. "),r.a.createElement("form",{className:"p-5",onSubmit:function(a){return function(a,n){a.preventDefault(),localStorage.setItem("selectedCohort",JSON.stringify(n)),e.setSelected(JSON.parse(localStorage.getItem("selectedCohort"))),t.push("/random-order")}(a,l)}},r.a.createElement("label",{className:"text-light",htmlFor:"students"},"Names:"),r.a.createElement(D,{input:l,setInput:s}),r.a.createElement("button",{className:"btn btn-light mx-2",type:"submit"},"Save"),r.a.createElement("button",{className:"btn btn-light mx-2",onClick:function(){return t.goBack()}},"Cancel")))};var Y=function(){var e=Object(n.useState)({course:"",campus:"",startMonth:"",startYear:null,students:[""]}),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),m=Object(o.a)(l,2),d=m[0],p=m[1],f=JSON.parse(localStorage.getItem("selectedCohort"));return Object(n.useEffect)((function(){c(f)}),[d]),r.a.createElement("div",{className:"App"},r.a.createElement(s.BrowserRouter,null,r.a.createElement("div",{className:"bg-dark-blue"},r.a.createElement(N,{cohort:a}),r.a.createElement("div",{className:"w-100 main-box"},r.a.createElement(i.d,{exact:!0,path:"/",render:function(){return r.a.createElement(v,{setSelected:p})}}),r.a.createElement(i.d,{exact:!0,path:"/add-cohort",render:function(){return r.a.createElement(M,{cohort:a,setCohort:c})}}),r.a.createElement(i.d,{exact:!0,path:"/custom-list",render:function(){return r.a.createElement(V,{cohort:a,setCohort:c,setSelected:p})}}),r.a.createElement(i.d,{exact:!0,path:"/cohort/:id",render:function(e){return r.a.createElement(R,Object.assign({},e,{cohort:a,setCohort:c}))}}),r.a.createElement(i.d,{exact:!0,path:"/cohort-edit/:id",render:function(e){return r.a.createElement(P,Object.assign({},e,{cohort:a,setCohort:c,setSelected:p}))}}),r.a.createElement(i.d,{exact:!0,path:"/cohort-delete/:id",render:function(e){return r.a.createElement(B,Object.assign({},e,{cohort:a,setCohort:c,setSelected:p}))}}),r.a.createElement(i.d,{exact:!0,path:"/random",render:function(){return r.a.createElement(y,{cohort:a})}}),r.a.createElement(i.d,{exact:!0,path:"/pairs",render:function(){return r.a.createElement(C,{cohort:a})}}),r.a.createElement(i.d,{exact:!0,path:"/random-order",render:function(){return r.a.createElement(S,{cohort:a})}}),r.a.createElement(i.d,{exact:!0,path:"/heads-or-tails",component:L}))),r.a.createElement(u,null)))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root"))},62:function(e,t,a){e.exports=a(107)},67:function(e,t,a){},68:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.3db0a7f6.chunk.js.map