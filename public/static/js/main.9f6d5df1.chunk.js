(this.webpackJsonpletters=this.webpackJsonpletters||[]).push([[0],{29:function(t,e,c){},52:function(t,e,c){},53:function(t,e,c){},54:function(t,e,c){},58:function(t,e,c){"use strict";c.r(e);var n=c(1),s=c(0),r=c.n(s),a=c(18),l=c.n(a),i=(c(29),c(7)),j=c(23),o=(c(52),c(8)),b=function(){var t=Object(j.a)({method:"GET",url:"localhost:4001/api/letters"}),e=Object(i.a)(t,2),c=e[0],s=c.data,r=c.loading,a=c.error,l=(c.respones,e[1]);return r||a?Object(n.jsx)("div",{className:"letters-wrapper",children:Object(n.jsxs)("div",{className:"letters-content",children:["\ud3b8\uc9c0\ub97c \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0\uc11c \ubd88\ub7ec\uc624\uace0 \uc788\ub294\ub370 \uc624\ub958\uac00 \uc788\uc73c\uba74 \uc548\ub730\uaebc\uc57c \uc0c8\ub85c\uace0\uce68 \ud574\ubcf4\ub834.."," ",Object(n.jsx)("div",{class:"wrap",children:Object(n.jsx)("button",{class:"button",onClick:l,children:Object(n.jsx)(o.a,{})})})]})}):Object(n.jsxs)("div",{className:"letters-wrapper",children:[Object(n.jsx)("div",{class:"wrap",children:Object(n.jsx)("button",{class:"button",onClick:l,children:Object(n.jsx)(o.a,{})})}),s.map((function(t){return Object(n.jsx)("div",{className:"letters-content",children:t.msg},t._id)}))]})},u=c(5),d=c.n(u),h=(c(53),function(){var t=Object(s.useState)(""),e=Object(i.a)(t,2),c=e[0],r=e[1];return Object(n.jsxs)("form",{className:"letter-form",onSubmit:function(t){t.preventDefault(),c&&!/^\s*$/.test(c.msg)?(d.a.post("localhost:4001/api/letters",{msg:c}).then((function(t){console.log(t),alert("\uc81c\ucd9c\ub418\uc5c8\uc2b5\ub2c8\ub2f7")})),r("")):alert("\uc4f8 \ub9d0\uc774 \uadf8\ub807\uac8c \uc5c6\ub2c8 \ub3c4\ub300\uccb4?")},children:[Object(n.jsx)("h2",{children:"\uc218\ube48\uc774 \ud55c\ud0dc \ud3b8\uc9c0\uc4f0\uae30"}),Object(n.jsx)("textarea",{className:"letter-textarea",type:"Text",placeholder:"\uc5b4\ub5a4 \ub9d0\uc744 \uc4f0\uace0 \uc2f6\ub2c8?",value:c,name:"text",onChange:function(t){r(t.target.value)}}),Object(n.jsx)("div",{class:"wrap",children:Object(n.jsx)("button",{class:"button",children:"Submit"})})]})}),x=(c(54),c(20));var O=function(){return Object(n.jsxs)("div",{className:"body-warpper",children:[Object(n.jsxs)(x.a,{children:[Object(n.jsx)("meta",{charSet:"utf-8"}),Object(n.jsx)("title",{children:"\uc218\ube48\uc774 \ud55c\ud0dc \ud3b8\uc9c0\uc4f0\uae30"})]}),Object(n.jsx)(h,{}),Object(n.jsx)(b,{})]})},p=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,59)).then((function(e){var c=e.getCLS,n=e.getFID,s=e.getFCP,r=e.getLCP,a=e.getTTFB;c(t),n(t),s(t),r(t),a(t)}))};l.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),p()}},[[58,1,2]]]);
//# sourceMappingURL=main.9f6d5df1.chunk.js.map