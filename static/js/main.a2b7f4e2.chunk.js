(this.webpackJsonpletters=this.webpackJsonpletters||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(1),r=n.n(a),s=n(32),l=n.n(s),i=(n(45),n(17)),o=n(4),j=n(10),u=(n(46),function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(o.e)();return Object(c.jsx)("div",{className:"wapper",children:Object(c.jsxs)("form",{className:"login-form",onSubmit:function(e){if(e.preventDefault(),n&&!/^\s*$/.test(n.msg)){if("930921"===n)alert("\ub108 \uc218\ube48\uc774\uad6c\ub098?"),localStorage.setItem("name","\uc218\ube48"),s.push("/letter");else{if("890616"!==n)return void alert("\ub108 \ub204\uad6c\uc58f!");alert("\ub108 \ubcd1\uad6d\uc774\uad6c\ub098?"),localStorage.setItem("name","\ubcd1\uad6d"),s.push("/letter")}r("")}else alert("\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694!")},children:[Object(c.jsx)("h1",{children:"\ub108\ub204\uad6c\ub2c8?"}),Object(c.jsx)("input",{className:"login-input",value:n,name:"text",onChange:function(e){r(e.target.value)},placeholder:"\ube44\ubc00\ubc88\ud638 \uc54c\uace0 \uc788\ub2c8?"}),Object(c.jsx)("div",{className:"wrap",children:Object(c.jsx)("button",{className:"button",children:"\uc81c\ucd9c"})})]})})}),d=n(14),m=n.n(d),b=n(20),p=n(11),h=n.n(p),O=(n(30),n(34)),x=n(15),f=function(e){var t=Object(a.useState)(!1),n=Object(j.a)(t,2),r=n[0],s=n[1],l=Object(a.useState)(!1),i=Object(j.a)(l,2),o=i[0],u=i[1],d=Object(a.useState)(""),m=Object(j.a)(d,2),b=m[0],p=m[1],f=e.reRending,v=e.removeLetter,g=e.AiOutlineDelete,N=e.MdModeEdit,w=e.letter,k=function(e){h.a.defaults.headers.common["Access-Control-Allow-Origin"]="*",e.preventDefault();var t=e.target.id.split(",")[0],n=e.target.id.split(",")[1];window.confirm("\uc9c4\uc9dc \ub313\uae00 \uc9c0\uc6b8\uaebc\uc57c?")&&(h.a.delete("https://letters-heroku.herokuapp.com/api/comments/".concat(t,"/").concat(n)),alert("\uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2f7"),f())};return Object(c.jsxs)("div",{className:"letters-wrapper",children:[w.createdAt.toLocaleString(),Object(c.jsx)("div",{className:"letter-author",children:"\ubcd1\uad6d"===w.name?"".concat(w.name,"\uc774\uac00 \uc218\ube48\uc774\uc5d0\uac8c"):"".concat(w.name,"\uc774\uac00 \ubcd1\uad6d\uc774\uc5d0\uac8c")}),Object(c.jsxs)("div",{className:"letters-content",children:[w.msg,Object(c.jsxs)("div",{className:"letters-content-wapper",children:[Object(c.jsx)("span",{className:"letters-content-delete",children:Object(c.jsx)(g,{id:w._id,onClick:function(e){return v(e)}})}),Object(c.jsxs)("span",{className:"letters-content-reply",onClick:function(){u(!o)},children:[Object(c.jsx)(O.a,{id:w._id}),"(",w.cmt.length,")"]}),o&&w.cmt.map((function(e){return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"letters-reply-wapper",children:[Object(c.jsx)("div",{className:"replyTime",children:e.createdAt}),Object(c.jsxs)("span",{className:"replyComment",children:[Object(c.jsx)(x.b,{}),e.name]}),Object(c.jsx)("div",{children:e.cmt}),Object(c.jsx)("div",{className:"letters-reply-delete",children:Object(c.jsx)(g,{id:[w._id,e._id],onClick:k})})]},e._id)})})),Object(c.jsx)("span",{className:"letters-content-modify",onClick:function(){s(!r)},children:Object(c.jsx)(N,{})}),r&&Object(c.jsxs)("form",{className:"letters-reply-form",onSubmit:function(e){h.a.defaults.headers.common["Access-Control-Allow-Origin"]="*",e.preventDefault(),b&&!/^\s*$/.test(b)?(h.a.post("https://letters-heroku.herokuapp.com/api/comments/".concat(e.target.id),{name:localStorage.getItem("name"),cmt:b,createdAt:(new Date).toLocaleString()}),alert("\uc81c\ucd9c\ub418\uc5c8\uc2b5\ub2c8\ub2f7"),p(""),f()):alert("\uc4f8 \ub9d0\uc774 \uadf8\ub807\uac8c \uc5c6\ub2c8 \ub3c4\ub300\uccb4?")},id:w._id,children:[Object(c.jsx)("input",{onChange:function(e){p(e.target.value)},type:"Text",name:"name",autoComplete:"off",value:b,placeholder:"\uc5b4\ub5a4 \ub313\uae00\uc744 \ub2ec\uaebc\ub2c8?",required:!0}),Object(c.jsx)("button",{className:"button",children:"\uc81c\ucd9c"})]})]}),Object(c.jsx)("div",{})]},w._id)]})},v=n(35),g=n(36),N=function(){var e=Object(a.useState)(null),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(!1),l=Object(j.a)(s,2),i=l[0],o=l[1],u=function(){return Object(b.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://letters-heroku.herokuapp.com/api/letters");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()};Object(a.useEffect)((function(){u().then((function(e){r(e.data)}))}),[i]);var d=function(){var e=Object(b.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n="https://letters-heroku.herokuapp.com/api/letters/".concat(t.target.id),!window.confirm("\uc9c4\uc9dc \uc9c0\uc6b8\uaebc\uc57c? \ub108 \ud3b8\uc9c0\ub97c \uc9c0\uc6b8\uaebc\ub2c8? \uc9c4\uc9dc\ub85c?")){e.next=6;break}return e.next=4,h.a.delete(n).then((function(e){alert("\uc9c0\uc6cc\uc84c\uc5b4 \ub098\uc05c\ub188\uc544")})).catch((function(e){console.log(e)}));case 4:e.next=7;break;case 6:return e.abrupt("return");case 7:p();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){o(!i)};return n?n.map((function(e){return Object(c.jsx)(f,{letter:e,reRending:p,AiOutlineDelete:g.a,MdModeEdit:x.a,removeLetter:d})})):Object(c.jsx)("div",{className:"letters-wrapper",children:Object(c.jsxs)("div",{className:"letters-content",children:["\ud3b8\uc9c0\ub97c \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0\uc11c \ubd88\ub7ec\uc624\uace0 \uc788\ub294\ub370 \uc624\ub958\uac00 \uc788\uc73c\uba74 \uc548\ub730\uaebc\uc57c \uc0c8\ub85c\uace0\uce68 \ud574\ubcf4\ub834.."," ",Object(c.jsx)("div",{className:"wrap",children:Object(c.jsx)("button",{className:"button",onClick:function(){return p()},children:Object(c.jsx)(v.a,{})})})]})})},w=(n(72),function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(c.jsxs)("form",{className:"letter-form",onSubmit:function(e){e.preventDefault(),n&&!/^\s*$/.test(n.msg)?(h.a.post("https://letters-heroku.herokuapp.com/api/letters",{name:localStorage.getItem("name"),msg:n,createdAt:(new Date).toLocaleString()}).then((function(e){console.log(e),alert("\uc81c\ucd9c\ub418\uc5c8\uc2b5\ub2c8\ub2f7"),window.location.reload()})),r("")):alert("\uc4f8 \ub9d0\uc774 \uadf8\ub807\uac8c \uc5c6\ub2c8 \ub3c4\ub300\uccb4?")},children:[Object(c.jsx)("h2",{children:"\ud3b8\uc9c0\uc4f0\uae30"}),Object(c.jsx)("textarea",{className:"letter-textarea",type:"Text",placeholder:"\uc5b4\ub5a4 \ub9d0\uc744 \uc4f0\uace0 \uc2f6\ub2c8?",value:n,name:"text",onChange:function(e){r(e.target.value)}}),Object(c.jsx)("div",{className:"wrap",children:Object(c.jsx)("button",{className:"button",children:"\uc81c\ucd9c"})})]})}),k=(n(31),n(37)),S=function(){return Object(c.jsxs)("div",{className:"body-warpper",children:[Object(c.jsxs)(k.a,{children:[Object(c.jsx)("meta",{charSet:"utf-8"}),Object(c.jsx)("title",{children:"\ud3b8\uc9c0\uc4f0\uae30"})]}),Object(c.jsx)(w,{}),Object(c.jsx)(N,{})]})},y=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(i.a,{children:[Object(c.jsx)(o.a,{exact:!0,path:"/letters_clients",component:u}),Object(c.jsx)(o.a,{exact:!0,path:"/Letter",component:S})]})})};l.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.a2b7f4e2.chunk.js.map