(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(45)},36:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(15),r=a.n(o),l=a(16),i=a(12),m=(a(36),a(4)),s=a(27),d=[{id:(new Date).toISOString(),body:"Buy fruits \ud83c\udf51",createdAt:(new Date).toISOString(),completed:!1,completedAt:null,editedAt:null},{id:(new Date).toISOString(),body:"Play Basketball \ud83c\udfc0",createdAt:(new Date).toISOString(),completed:!1,completedAt:null,editedAt:null},{id:(new Date).toISOString(),body:"Do homework \ud83d\udcbc",createdAt:(new Date).toISOString(),completed:!0,completedAt:(new Date).toISOString(),editedAt:null},{id:(new Date).toISOString(),body:"Pet the dog \ud83d\udc36",createdAt:(new Date).toISOString(),completed:!0,completedAt:(new Date).toISOString(),editedAt:null}],u=Object(n.createContext)(),p=function(e){var t=Object(s.a)("key",d),a=Object(m.a)(t,2),n=a[0],o=a[1];return c.a.createElement(u.Provider,{value:[n,o]},e.children)},f=a(14),b=function(e){var t=e.location,a=Object(n.useState)(t.pathname.split("/")[t.pathname.split("/").length-1]),o=Object(m.a)(a,2),r=o[0],i=o[1];Object(n.useEffect)(function(){i("done"===t.pathname.split("/")[t.pathname.split("/").length-1])},[t]);var s=Object(f.b)({transform:"translateX(".concat(r?"25%":"-25%",")")});return c.a.createElement("div",{className:"header"},c.a.createElement("h4",{className:"headTitle"},"Tasks"),c.a.createElement("div",{className:"switcher"},c.a.createElement(f.a.span,{style:s,className:"switchBgActive"}),c.a.createElement("span",{className:"switchBg"}),c.a.createElement(l.b,{exact:!0,to:"/",className:"switch",activeClassName:"selected"},"Undone"),c.a.createElement(l.b,{to:"/done",className:"switch",activeClassName:"selected"},"Done")))},E=a(9),g=a(18),O=a.n(g),h=a(13),S=a(56),v=function(e){var t=e.props,a=t.id,o=t.body,r=t.createdAt,l=t.completed,i=t.completedAt,s=t.editedAt,d=Object(n.useState)(o),p=Object(m.a)(d,2),f=p[0],b=p[1],g=Object(n.useState)(l),v=Object(m.a)(g,2),N=v[0],j=v[1],y=Object(n.useContext)(u),w=Object(m.a)(y,2),k=w[0],I=w[1];return c.a.createElement("div",{className:"todo"},c.a.createElement("div",{className:"todoContent"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=Object(E.a)(k);t.find(function(e){return e.id===a}).body=f.trim(),t.find(function(e){return e.id===a}).editedAt=(new Date).toISOString(),setTimeout(function(){I(t)},600),h.a.info("Todo succefully edited!",{renderIcon:function(){return c.a.createElement("span",{role:"img","aria-label":"Warning"},"\u26a0\ufe0f")},bar:{color:"#ffcc00"},position:"bottom-center",onClick:function(e){e()}})}},c.a.createElement("input",{type:"text",value:f,onChange:function(e){return b(e.target.value)},className:"todoText"})),c.a.createElement("p",{className:"todoTime"},c.a.createElement("span",{className:"timeWrap"},c.a.createElement("span",{role:"img","aria-label":"Stopwatch"},"\u23f1"),c.a.createElement(O.a,{datetime:r.toString()})," "),i&&c.a.createElement("span",{className:"timeWrap"},c.a.createElement("span",{role:"img","aria-label":"Tick"},"\u2705"),c.a.createElement(O.a,{datetime:i.toString()})),s&&c.a.createElement("span",{className:"timeWrap"},c.a.createElement("span",{role:"img","aria-label":"Pencil"},"\u270f\ufe0f"),c.a.createElement(O.a,{datetime:s.toString()})))),c.a.createElement("div",{className:"buttons"},c.a.createElement(S.a,{className:"deleteIcon",onClick:function(){var e=Object(E.a)(k).filter(function(e){return e.id!==a});I(e),h.a.error("Todo succefully deleted!",{renderIcon:function(){return c.a.createElement("span",{role:"img","aria-label":"Prohibited"},"\ud83d\udeab")},position:"bottom-center",onClick:function(e){e()}})}}),c.a.createElement("label",{className:"majesticCheckbox"},c.a.createElement("input",{type:"checkbox",checked:N,onChange:function(){var e=Object(E.a)(k);e.find(function(e){return e.id===a}).completed=!N,e.find(function(e){return e.id===a}).completedAt=N?null:(new Date).toISOString(),setTimeout(function(){I(e)},600),N?h.a.info("Todo marked as undone!",{renderIcon:function(){return c.a.createElement("span",{role:"img","aria-label":"Warning"},"\u26a0\ufe0f")},bar:{color:"#ffcc00"},position:"bottom-center",onClick:function(e){e()}}):h.a.success("Todo marked as done!",{renderIcon:function(){return c.a.createElement("span",{role:"img","aria-label":"Tick"},"\u2705")},bar:{color:"#00b700"},position:"bottom-center",onClick:function(e){e()}}),j(!N)}}),c.a.createElement("span",null,c.a.createElement("i",null)))))},N={duration:300,mass:5,tension:2e3,friction:200},j=function(e){e.history,e.location,e.match;var t=e.pageName,a=Object(n.useState)(!1),o=Object(m.a)(a,2),r=o[0],l=o[1],i=Object(n.useContext)(u),s=Object(m.a)(i,1)[0].filter(function(e){return"done"===t?e.completed:!e.completed}).sort(function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)});Object(n.useEffect)(function(){l(!0)},[r]);var d=Object(f.c)(s,function(e){return e.id},{trail:150,config:N,from:{opacity:0,transform:"translate3d(0,40px,0)"},enter:{opacity:1,transform:"translate3d(0,0px,0)"},leave:{opacity:0,transform:"translate3d(0,-40px,0)"}});return c.a.createElement("div",{className:"todos"},0===s.length&&c.a.createElement("p",{className:"noTodos"},"\ud83d\ude15 No todos ".concat(t," yet...")),d.map(function(e){var t=e.item,a=e.props;return e.key,c.a.createElement(f.a.div,{key:t.id,style:a},c.a.createElement(v,{props:t}))}))},y=function(e){var t=e.location,a=e.history,o=Object(n.useState)(""),r=Object(m.a)(o,2),l=r[0],i=r[1],s=Object(n.useContext)(u),d=Object(m.a)(s,2),p=d[0],f=d[1];return c.a.createElement("form",{className:"addTodo",onSubmit:function(e){if(e.preventDefault(),l.replace(/\s+/,"").length){var n={id:(new Date).toISOString(),body:l.trim(),createdAt:(new Date).toISOString(),completed:!1,completedAt:null};f([].concat(Object(E.a)(p),[n])),h.a.success("Todo succefully added!",{renderIcon:function(){return c.a.createElement("span",{role:"img","aria-label":"Tick"},"\u2705")},position:"bottom-center",onClick:function(e){e()}}),i(""),"done"===t.pathname.split("/")[t.pathname.split("/").length-1]&&a.push("/")}else h.a.error("Input field must not be empty!",{renderIcon:function(){return c.a.createElement("span",{role:"img","aria-label":"Prohibited"},"\ud83d\udeab")},position:"bottom-center",onClick:function(e){e()}})}},c.a.createElement("input",{className:"addTodoInput",type:"text",value:l,onChange:function(e){return i(e.target.value)},placeholder:"Write your task here..."}),c.a.createElement("button",{className:"addTodoBtn",type:"submit"},c.a.createElement("span",null,"+")))},w=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(p,null,c.a.createElement(l.a,null,c.a.createElement(i.a,{component:b}),c.a.createElement(i.a,{component:y}),c.a.createElement("div",{className:"routesWrap"},c.a.createElement("div",{className:"routes"},c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:function(e){return c.a.createElement(j,Object.assign({},e,{pageName:"undone"}))}}),c.a.createElement(i.a,{exact:!0,path:"/done",component:function(e){return c.a.createElement(j,Object.assign({},e,{pageName:"done"}))}})))))))};r.a.render(c.a.createElement(w,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.c390bebd.chunk.js.map