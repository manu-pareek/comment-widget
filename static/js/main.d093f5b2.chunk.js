(this["webpackJsonpcomment-widget"]=this["webpackJsonpcomment-widget"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(7),r=n.n(i),a=(n(18),n(5)),o=(n.p,n(19),n(3)),s=n(4),d=(n(26),n(1)),l=function e(t){var n=t.comment,i=Object(o.c)((function(e){return e})),r=Object(o.b)(),l=Object(c.useState)(!1),u=Object(a.a)(l,2),m=u[0],j=u[1],b=Object(c.useState)(""),O=Object(a.a)(b,2),p=O[0],f=O[1],h=Object(c.useState)(n.likes),x=Object(a.a)(h,2),g=x[0],v=(x[1],Object(c.useState)(n.dislikes)),y=Object(a.a)(v,2),_=y[0],k=(y[1],Object(c.useState)(!1)),E=Object(a.a)(k,2),D=E[0],C=E[1],S=Object(c.useState)(n.comment),I=Object(a.a)(S,2),L=I[0],T=I[1],w=Object(c.useState)(K(Date.now()-n.date)),M=Object(a.a)(w,2),A=M[0],N=M[1],F=i.comments.filter((function(e){return e.parent_id===n.id}));function K(e){var t=(e/1e3).toFixed(1),n=(e/6e4).toFixed(1),c=(e/36e5).toFixed(1),i=(e/864e5).toFixed(1);return t<60?t+" Sec":n<60?n+" Min":c<24?c+" Hrs":i+" Days"}return Object(d.jsxs)("div",{style:{marginBottom:"5%",margin:"0px",padding:"0px"},children:[Object(d.jsxs)("div",{id:"_comment",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:n.user.profile_picture})}),Object(d.jsxs)("div",{id:"_right-side",children:[Object(d.jsxs)("div",{id:"_right-label",children:[Object(d.jsx)("h5",{id:"_user-name",children:n.user.name}),Object(d.jsxs)("h5",{id:"_comment-date",children:["* \xa0 ",A," ago"]})]}),Object(d.jsx)("div",{style:{margin:"0px"},children:D?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("textarea",{value:L,onChange:function(e){return T(e.target.value)},rows:"4",cols:"60",maxLength:"200"}),Object(d.jsx)("button",{onClick:function(){return r(Object(s.editComment)({id:n.id,comment:L}))},style:{margin:"2%"},children:"Edit"})]}):Object(d.jsx)("h4",{style:{maxWidth:"80%",overflowWrap:"break-word",textAlign:"left",marginLeft:"2%"},children:n.comment})}),Object(d.jsxs)("div",{id:"_comment-label",children:[Object(d.jsxs)("h6",{onClick:function(){return g?r(Object(s.removeLike)(n)):!_&&r(Object(s.addLike)(n))},children:["Likes : ",n.likes]}),Object(d.jsxs)("h6",{onClick:function(){return _?r(Object(s.removeDislike)(n)):!g&&r(Object(s.addDislike)(n))},children:["Dislikes : ",n.dislikes]}),Object(d.jsx)("h6",{onClick:function(){return j(!m)},children:"Reply"}),Object(d.jsx)("h6",{onClick:function(){return C(!D)},children:"Edit"}),Object(d.jsx)("h6",{onClick:function(){return r(Object(s.deleteComment)(n))},children:"Delete"})]})]})]}),m&&Object(d.jsxs)("div",{id:"_add-reply",children:[Object(d.jsx)("div",{children:Object(d.jsx)("textarea",{rows:"5",cols:"30",onChange:function(e){return f(e.target.value)}})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){j(!1),f(""),N(K(Date.now()-n.date)),r(Object(s.addComment)({comment:p,parent_id:n.id}))},children:"Reply"})})]}),F&&F.map((function(t){return Object(d.jsx)("div",{style:{marginLeft:"5%",marginTop:"2%"},children:Object(d.jsx)(e,{comment:t})})}))]})},u=function(){var e=Object(o.c)((function(e){return e})).comments.filter((function(e){return null===e.parent_id}));return Object(d.jsx)("div",{children:e&&e.map((function(e){return Object(d.jsx)(l,{comment:e},Math.random(Math.floor(7*Math.random+10)))}))})};var m=function(){var e=Object(c.useState)("Enter Something to Comment ...."),t=Object(a.a)(e,2),n=t[0],i=t[1],r=Object(o.b)(),l=Object(o.c)((function(e){return e}));return Object(c.useEffect)((function(){r({type:"SET_INITIAL_STATE",payload:localStorage.getItem("state")?JSON.parse(localStorage.getItem("state")):l})}),[]),Object(c.useEffect)((function(){localStorage.setItem("state",JSON.stringify(l))}),[l]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("body",{children:[Object(d.jsx)("div",{id:"_comment-img",children:Object(d.jsx)("img",{src:"https://usersinsights.com/wp/wp-content/uploads/2018/03/image6.png"})}),Object(d.jsxs)("div",{id:"comment_input",children:[Object(d.jsx)("textarea",{rows:"8",cols:"60",onChange:function(e){return i(e.target.value)},value:n,onClick:function(){return i("")},maxLength:"200"}),Object(d.jsx)("button",{onClick:function(){return r(Object(s.addComment)({comment:n,parent_id:null}))},children:"Comment"})]})]}),Object(d.jsxs)("footer",{children:[Object(d.jsxs)("h4",{children:["Sort by :",Object(d.jsxs)("select",{onChange:function(e){return r({type:"SORT_BY",payload:e.target.value})},children:[Object(d.jsx)("option",{value:"date",children:"Date"}),Object(d.jsx)("option",{value:"likes",children:"Likes"})]})]}),Object(d.jsx)(u,{})]})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))},b=n(13),O=n(12),p=n(2),f={dummy_users:[{name:"Superman",profile_picture:"https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png"},{name:"Batman",profile_picture:"https://kids.kiddle.co/images/1/19/Batman_%28circa_2016%29.png"},{name:"Thanos",profile_picture:"https://i.pinimg.com/564x/df/8d/b7/df8db77bab37df6a571ea44859620748.jpg"},{name:"Iron man",profile_picture:"https://www.sideshow.com/storage/product-images/904599/iron-man-mark-lxxxv__silo.png"}],comments:[],count:0},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIAL_STATE":return console.log("state reducer ",t.payload),Object(p.a)({},t.payload);case"ADD_COMMENT":return Object(p.a)(Object(p.a)({},e),{},{comments:[Object(p.a)(Object(p.a)({id:e.count+1,user:e.dummy_users[Math.floor(4*Math.random())]},t.payload),{},{likes:0,dislikes:0,date:Date.now()})].concat(Object(O.a)(e.comments||[])),count:e.count+1});case"SORT_BY":console.log("sort by called");var n=[];return"likes"===t.payload?(n=e.comments).sort((function(e,t){var n=e.likes,c=t.likes;return n<c?1:n>c?-1:void 0})):"date"===t.payload&&(n=e.comments).sort((function(e,t){var n=new Date(e.date),c=new Date(t.date);return n<c?1:n>c?-1:0})),console.log(n),Object(p.a)(Object(p.a)({},e),{},{comments:n});case"ADD_LIKE":var c=function(e){if(e.id===t.payload.id){var n=e;return n.likes++,n}return e},i=e.comments.map(c);return Object(p.a)(Object(p.a)({},e),{},{comments:i});case"ADD_DISLIKE":var r=function(e){if(e.id===t.payload.id){var n=e;return n.dislikes++,n}return e},a=e.comments.map(r);return Object(p.a)(Object(p.a)({},e),{},{comments:a});case"REMOVE_LIKE":var o=function(e){if(e.id===t.payload.id){var n=e;return n.likes--,n}return e};console.log("remove like called");var s=e.comments.map(o);return Object(p.a)(Object(p.a)({},e),{},{comments:s});case"REMOVE_DISLIKE":var d=function(e){if(e.id===t.payload.id){var n=e;return n.dislikes--,n}return e},l=e.comments.map(d);return Object(p.a)(Object(p.a)({},e),{},{comments:l});case"EDIT_COMMENT":var u=function(e){if(e.id===t.payload.id){var n=e;return n.comment=t.payload.comment,n}return e},m=e.comments.map(u);return Object(p.a)(Object(p.a)({},e),{},{comments:m});case"DELETE_COMMENT":var j=e.comments.filter((function(e){return e.parent_id!==t.payload.id&&e.id!==t.payload.id}));return Object(p.a)(Object(p.a)({},e),{},{comments:j});default:return Object(p.a)({},e)}},x=Object(b.a)(h);r.a.render(Object(d.jsx)(o.a,{store:x,children:Object(d.jsx)(m,{})}),document.getElementById("root")),j()},4:function(e,t){t.addComment=function(e){return{type:"ADD_COMMENT",payload:e}},t.addLike=function(e){return{type:"ADD_LIKE",payload:e}},t.addDislike=function(e){return{type:"ADD_DISLIKE",payload:e}},t.removeLike=function(e){return{type:"REMOVE_LIKE",payload:e}},t.removeDislike=function(e){return{type:"REMOVE_DISLIKE",payload:e}},t.deleteComment=function(e){return{type:"DELETE_COMMENT",payload:e}},t.editComment=function(e){return{type:"EDIT_COMMENT",payload:e}}}},[[28,1,2]]]);
//# sourceMappingURL=main.d093f5b2.chunk.js.map