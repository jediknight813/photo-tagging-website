(this["webpackJsonpphoto-tagging-app"]=this["webpackJsonpphoto-tagging-app"]||[]).push([[0],{23:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(7),c=a.n(n),s=a(25),i=a.n(s),r=a(9),o=(a(23),a(26)),d=a(8),u=[],m="";Object(o.a)({apiKey:"AIzaSyC7HrIKo6cxzlf1tycL7f4Z55ck9zZKl5k",authDomain:"photo-tagging-app-58d5f.firebaseapp.com",databaseURL:"https://photo-tagging-app-58d5f-default-rtdb.firebaseio.com",projectId:"photo-tagging-app-58d5f",storageBucket:"photo-tagging-app-58d5f.appspot.com",messagingSenderId:"121948087057",appId:"1:121948087057:web:b5acfcf3893b0b464722b0"});function j(){return u[m]}var b=Object(d.a)(),l=Object(d.c)(b,"users/");Object(d.b)(l,(function(e){var t=e.val();u=t}));var f=function(e,t){m=e;var a=Object(d.a)();Object(d.d)(Object(d.c)(a,"users/"+e),{username:e,time:t,item_one_found:!1,item_two_found:!1,item_three_found:!1})},_=a(3),O=[],h="leader_board_name_background_hidden",g=!0;var p=function(){O.splice(0,O.length);var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],s=t[1],i=c.a.useState(),o=Object(r.a)(i,2)[1],d=c.a.useCallback((function(){return o({})}),[]);function m(){s(u),!0===g?(g=!1,h="leader_board_name_background",j(),d()):(g=!0,h="leader_board_name_background_hidden",d()),j()}function j(){var e=[];return Object.entries(a).forEach((function(t){e.push([t[1].username,t[1].time])})),Object(_.jsxs)("div",{className:h,children:[Object(_.jsx)("h1",{className:"leaderboard_user_text",children:" Name----Time "}),e.map((function(e){return Object(_.jsxs)("h2",{className:"leaderboard_user_text",children:[" ",e[0]+":   "+e[1]," "]},Math.random())}))]})}return Object(_.jsxs)("div",{children:[Object(_.jsx)("button",{onClick:function(){return m()},className:"leader_board_text",children:" Leaderboard "}),Object(_.jsx)(j,{})]})};var x=function(e){return Object(_.jsxs)("div",{children:[Object(_.jsx)("img",{src:e.data.image,alt:"item_image",className:e.data.classname}),Object(_.jsxs)("h1",{children:[" ",e.data.name," "]})]})},v=a.p+"static/media/cortana.9a4350f0.png",k=a.p+"static/media/link.19b5d958.png",N=a.p+"static/media/neo.e7f2c180.png",I={classname:"item_not_found",name:"cortana",image:v},w={classname:"item_not_found",name:"link",image:k},S={classname:"item_not_found",name:"neo",image:N};function C(){var e=j();!0===e.item_one_found&&(I.classname="item_found"),!0===e.item_two_found&&(w.classname="item_found"),!0===e.item_three_found&&(S.classname="item_found")}var y=function(){var e=Object(n.useState)(0),t=Object(r.a)(e,2),a=t[0],c=t[1];return setTimeout((function(){c(a+1)}),1e3),Object(_.jsxs)("div",{className:"header",children:[Object(_.jsx)("h1",{className:"header_text",children:" vultus "}),Object(_.jsxs)("div",{className:"find_item_container",children:[Object(_.jsx)(x,{data:I}),Object(_.jsx)(x,{data:w}),Object(_.jsx)(x,{data:S})]}),Object(_.jsx)(p,{})]})};var z=function(){return Object(_.jsx)("div",{className:"footer",children:Object(_.jsx)("a",{href:"https://github.com/jediknight813",className:"footer_text",children:" made by Connor M on github "})})},F=a.p+"static/media/photo-tagging-image.20b665e5.jpeg";var K=function(){return Object(_.jsx)("div",{children:Object(_.jsx)("img",{className:"photo_tagging_image",alt:"photo_tagging_image",src:F})})};var L=function(e){function t(){"item_one"===e.data.classname&&(C(),function(){var e=Object(d.a)();Object(d.e)(Object(d.c)(e,"users/"+m),{item_one_found:!0})}()),"item_two"===e.data.classname&&(C(),function(){var e=Object(d.a)();Object(d.e)(Object(d.c)(e,"users/"+m),{item_three_found:!0})}()),"item_three"===e.data.classname&&(C(),function(){var e=Object(d.a)();Object(d.e)(Object(d.c)(e,"users/"+m),{item_two_found:!0})}())}return console.log(e),Object(_.jsx)("div",{onClick:function(){return t()},className:e.data.classname})},M=!1;var T=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],s=t[1],i=c.a.useState(),o=Object(r.a)(i,2)[1],u=c.a.useCallback((function(){return o({})}),[]);function m(){var e=j();if(!0===e.item_one_found&&!0===e.item_two_found&&!0===e.item_three_found)return"all items found";!function(e,t){console.log(t),e=j().time+e;var a=Object(d.a)();Object(d.e)(Object(d.c)(a,"users/"+t),{time:+e})}(1,a),setTimeout((function(){m()}),1e3)}return!1===M?Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:"start_screen",children:" "}),Object(_.jsx)("input",{value:a,onInput:function(e){return s(e.target.value)},placeholder:"enter name",className:"start_screen_name",type:"text"}),Object(_.jsx)("button",{onClick:function(){return f(a,0),M=!0,m(),void u()},className:"start_button",children:" confirm "})]}):Object(_.jsx)("div",{})},B={classname:"item_one",name:"cortana"},E={classname:"item_two",name:"link"},J={classname:"item_three",name:"neo"};var Z=function(){var e=Object(n.useState)({cortana:!1,link:!1,neo:!1}),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(_.jsxs)("div",{children:[Object(_.jsx)(y,{data:a}),Object(_.jsx)(T,{}),Object(_.jsxs)("div",{className:"container",children:[Object(_.jsx)(K,{}),Object(_.jsx)(L,{data:B,setItemsFound:c}),Object(_.jsx)(L,{data:E,setItemsFound:c}),Object(_.jsx)(L,{data:J,setItemsFound:c})]}),Object(_.jsx)(z,{})]})};i.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(Z,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.6b7c9144.chunk.js.map