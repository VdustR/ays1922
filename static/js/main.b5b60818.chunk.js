(this.webpackJsonpays1922=this.webpackJsonpays1922||[]).push([[0],{90:function(e,n,t){},91:function(e,n,t){"use strict";t.r(n);var c,a,i,s,o,r,l,j=t(0),b=t.n(j),p=t(33),d=t.n(p),x=t(5),h=t(3),O=t(17),u=t.n(O),m=t(14),f=t(4),g=t(18),v=t(34),N=t(37),C=t(35),w=t.n(C),k=function(e){var n=document.createTextNode(e),t=document.createElement("p");return t.appendChild(n),t.innerHTML},y=t(1),z=Object(h.a)(c||(c=Object(x.a)(["\n  label: cssFrame;\n  position: relative;\n"]))),X=Object(h.a)(a||(a=Object(x.a)(["\n  label: BgFrame;\n  width: fit-content;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-right: auto;\n  margin-top: 0px;\n"]))),S=Object(h.a)(i||(i=Object(x.a)(["\n  label: Bg;\n  /* height: 842px; */\n  width: 930px;\n  padding: 0;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 1;\n"]))),M=Object(h.a)(s||(s=Object(x.a)(["\n  label: QrCode;\n  width: 300px;\n  height: 300px;\n  position: absolute;\n  top: 620px;\n  left: 155px;\n  z-index: 11;\n"]))),T=Object(h.a)(o||(o=Object(x.a)(['\n  label: ShopCode;\n  position: absolute;\n  top: 990px;\n  left: 125px;\n  z-index: 11;\n  font-family: "Courier New", Courier, monospace;\n  font-size: 28px;\n  font-weight: 800;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  width: 360px;\n  height: 57px;\n\n  outline: none;\n  border: 0;\n  padding: 0;\n  background: none;\n']))),_=Object(h.a)(r||(r=Object(x.a)(["\n  label: SmsText;\n  background: white;\n  position: absolute;\n  top: 621px;\n  left: 619px;\n  z-index: 11;\n  font-size: 10px;\n  font-weight: 800;\n  line-height: 1.5em;\n  letter-spacing: 1px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: left;\n  width: 181px;\n  height: 55px;\n  /* border: 1px solid red; */\n"]))),E=Object(h.a)(l||(l=Object(x.a)(["\n  label: Count;\n  background: #fff;\n  position: absolute;\n  text-align: right;\n  padding: 2px;\n  top: 639px;\n  left: 800px;\n  font-size: 9px;\n  width: 26px;\n  height: 12px;\n  color: #d0d0d0;\n  z-index: 2;\n"])));var F,L,B,Q,R,A,D,H,I,J,U,V=function(e){var n=e.img,t=e.classNameQrCode,c=e.classNameShopCode,a=e.classNameSmsText,i=e.classNameCount,s=Object(f.f)(),o=Object(f.g)().locationCode;Object(j.useEffect)((function(){15!==o.length&&(alert("\u8acb\u8f38\u5165\u6b63\u78ba\u7684\u5834\u6240\u4ee3\u78bc"),s.replace("/"))}),[o.length,s]);var r=Object(j.useMemo)((function(){return u()(o.replace(/\s/g,"").split(""),4).map((function(e){return e.join("")})).join(" ")}),[o]),l=18===r.length,b=Object(j.useMemo)((function(){return l?"\u5834\u6240\u4ee3\u78bc: ".concat(r,"\n").concat("\u672c\u7c21\u8a0a\u662f\u7c21\u8a0a\u5be6\u806f\u5236\u767c\u9001\uff0c\u9650\u9632\u75ab\u76ee\u7684\u4f7f\u7528\u3002"):""}),[l,r]),p=Object(j.useMemo)((function(){return l?"ays1922_".concat(r.split(" ").join("-"),".png"):""}),[l,r]),d=Object(j.useState)(""),x=Object(g.a)(d,2),O=x[0],m=x[1];Object(j.useEffect)((function(){if(l){var e=!1;return w.a.toDataURL("smsto:1922:".concat(b)).then((function(n){e||m(n)})),function(){e=!0}}m("")}),[l,r,b]);var C=Object(j.useMemo)((function(){if(l)return function(){return{__html:b.split("\n").map(k).join("<br/>")}}}),[l,b]);return Object(y.jsxs)("div",{className:z,onClick:function(e){l&&Object(N.a)(e.currentTarget,{pixelRatio:1.5}).then((function(e){e?Object(v.saveAs)(e,p):alert("Blob missing")}))},children:[Object(y.jsx)("div",{className:X,children:O?Object(y.jsx)("img",{className:Object(h.b)(M,t),src:O,alt:""}):null}),Object(y.jsxs)("div",{className:Object(h.b)(E,i),children:[b.length,"/70"]}),Object(y.jsx)("div",{className:Object(h.b)(T,c),children:r}),Object(y.jsx)("div",{className:Object(h.b)(_,a),dangerouslySetInnerHTML:C?C():void 0,children:C?void 0:Object(y.jsx)("span",{style:{color:"red"},children:"\u8acb\u5148\u8f38\u5165\u5834\u6240\u4ee3\u78bc"})}),Object(y.jsx)("div",{className:X,children:Object(y.jsx)("img",{className:S,src:n,alt:""})})]})},W=t.p+"static/media/en.55753495.jpeg",Y=t.p+"static/media/zh.d68bbc57.jpeg",q=t.p+"static/media/zh.2c3963f3.jpeg";function G(e){var n=e.link,t=e.title;return Object(y.jsx)("li",{children:Object(y.jsx)(m.b,{target:"_blank",rel:"noopener noreferrer",to:n,children:t})})}function K(){var e=Object(f.f)(),n=Object(f.g)().locationCode,t=void 0===n?"":n,c=Object(j.useMemo)((function(){return u()(t.replace(/\s/g,"").split(""),4).map((function(e){return e.join("")})).join(" ")}),[t]),a=Object(j.useMemo)((function(){return t.replace(/\s/g,"")}),[t]),i=18===c.length;return Object(y.jsxs)("div",{className:Object(h.a)(F||(F=Object(x.a)(["\n        padding: 1em;\n        max-width: 500px;\n        margin-left: 2em;\n        margin-right: auto;\n      "]))),children:[Object(y.jsx)("h1",{children:"AnonYmouS 1922 \u7c21\u8a0a\u5be6\u806f\u5236\u6d77\u5831\u7522\u751f\u5668"}),Object(y.jsx)("a",{href:"https://github.com/VdustR/ays1922#readme",target:"_blank",rel:"noopener noreferrer",children:"\u8edf\u9ad4\u7c21\u4ecb"}),Object(y.jsx)("h2",{children:"\u64cd\u4f5c\u6b65\u9a5f"}),Object(y.jsxs)("ol",{children:[Object(y.jsxs)("li",{children:["\u8f38\u5165",Object(y.jsx)("a",{href:"https://www.facebook.com/ey.gov.tw/posts/4480266808667830",target:"_blank",rel:"noopener noreferrer",children:"\u5834\u6240\u4ee3\u78bc"}),": ",Object(y.jsx)("input",{value:c,onChange:function(n){var t=n.target.value.replace(/\s/g,"");e.replace("/h/".concat(t))},maxLength:18,placeholder:"XXXX XXXX XXXX XXX",autoFocus:!0})]}),i?Object(y.jsxs)("li",{children:["\u9078\u64c7\u6a21\u677f\u5f8c\u5217\u5370",Object(y.jsx)("div",{className:Object(h.a)(L||(L=Object(x.a)(["\n                font-size: 0.8em;\n              "]))),children:"\u6216\u662f\u5de6\u9375\u9ede\u64ca\u6d77\u5831\u53ef\u4ee5\u53e6\u5b58\u5716\u7247(\u53ef\u80fd\u6703\u5ef6\u9072 2~3 \u79d2)"}),Object(y.jsxs)("ul",{children:[Object(y.jsx)(G,{title:"v2 - \u4e2d\u6587",link:"/v2/zh/".concat(a)}),Object(y.jsx)("li",{children:Object(y.jsx)(m.b,{target:"_blank",rel:"noopener noreferrer",to:"/v1/zh/".concat(a),children:"v1 - \u4e2d\u6587"})}),Object(y.jsx)("li",{children:Object(y.jsx)(m.b,{target:"_blank",rel:"noopener noreferrer",to:"/v1/en/".concat(a),children:"v1 - \u82f1\u6587"})})]}),Object(y.jsx)("h4",{children:"\u5217\u5370\u5feb\u6377\u9375:"}),Object(y.jsxs)("ul",{children:[Object(y.jsxs)("li",{children:["Mac: ",Object(y.jsx)("kbd",{children:"\u2318"})," + ",Object(y.jsx)("kbd",{children:"p"})]}),Object(y.jsxs)("li",{children:["Windows & Linux: ",Object(y.jsx)("kbd",{children:"Ctrl"})," + ",Object(y.jsx)("kbd",{children:"p"})]})]})]}):Object(y.jsx)("li",{className:Object(h.a)(B||(B=Object(x.a)(["\n              color: red;\n            "]))),children:"\u8acb\u5148\u8f38\u5165\u6b63\u78ba\u7684\u5834\u6240\u4ee3\u78bc"})]})]})}function P(){var e=Object(f.f)();return Object(j.useEffect)((function(){e.replace("/h")}),[e]),Object(y.jsx)(j.Fragment,{})}var Z=function(){return Object(y.jsx)(m.a,{basename:"/ays1922",children:Object(y.jsxs)(f.c,{children:[Object(y.jsx)(f.a,{exact:!0,sensitive:!0,path:"/",component:P}),Object(y.jsx)(f.a,{exact:!0,sensitive:!0,path:"/h/:locationCode?",component:K}),Object(y.jsx)(f.a,{exact:!0,sensitive:!0,path:"/v1/zh/:locationCode",children:Object(y.jsx)(V,{img:Y})}),Object(y.jsx)(f.a,{exact:!0,sensitive:!0,path:"/v1/en/:locationCode",children:Object(y.jsx)(V,{img:W,classNameQrCode:Object(h.a)(Q||(Q=Object(x.a)(["\n              top: 614px;\n              left: 140px;\n            "]))),classNameSmsText:Object(h.a)(R||(R=Object(x.a)(["\n              top: 594px;\n            "]))),classNameCount:Object(h.a)(A||(A=Object(x.a)(["\n              top: 613px;\n            "]))),classNameShopCode:Object(h.a)(D||(D=Object(x.a)(["\n              top: 979px;\n              left: 111px;\n              width: 361px;\n              height: 55px;\n            "])))})}),Object(y.jsx)(f.a,{exact:!0,sensitive:!0,path:"/v2/zh/:locationCode",children:Object(y.jsx)(V,{img:q,classNameQrCode:Object(h.a)(H||(H=Object(x.a)(["\n              width: 193px;\n              height: 193px;\n              top: 573px;\n              left: 369px;\n            "]))),classNameSmsText:Object(h.a)(I||(I=Object(x.a)(["\n              top: 998px;\n              left: 67px;\n              width: 164px;\n              height: 47px;\n            "]))),classNameCount:Object(h.a)(J||(J=Object(x.a)(["\n              top: 1011px;\n              left: 226px;\n            "]))),classNameShopCode:Object(h.a)(U||(U=Object(x.a)(["\n              top: 801px;\n              left: 336px;\n              width: 260px;\n              height: 37px;\n              font-size: 20px;\n            "])))})}),Object(y.jsx)(f.a,{path:"/",children:"NOT FOUND!"})]})})};t(90);d.a.render(Object(y.jsx)(b.a.StrictMode,{children:Object(y.jsx)(Z,{})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.b5b60818.chunk.js.map