(this.webpackJsonpays1922=this.webpackJsonpays1922||[]).push([[0],{88:function(e,n,t){},89:function(e,n,t){"use strict";t.r(n);var a,c,i,s,r,o,l,j=t(0),p=t.n(j),b=t(31),x=t.n(b),d=t(5),h=t(3),u=t(14),O=t(2),m=t(23),f=t(32),g=t.n(f),v=t(33),N=t(34),w=t.n(N),y=t(35),z=t.n(y),C=function(e){var n=document.createTextNode(e),t=document.createElement("p");return t.appendChild(n),t.innerHTML},S=t(1),k=Object(h.a)(a||(a=Object(d.a)(["\n  label: cssFrame;\n  position: relative;\n"]))),T=Object(h.a)(c||(c=Object(d.a)(["\n  label: BgFrame;\n  width: fit-content;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 0px;\n"]))),_=Object(h.a)(i||(i=Object(d.a)(["\n  label: Bg;\n  /* height: 842px; */\n  width: 930px;\n  padding: 0;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 1;\n"]))),B=Object(h.a)(s||(s=Object(d.a)(["\n  label: QrCode;\n  width: 300px;\n  height: 300px;\n  position: absolute;\n  top: 620px;\n  left: 155px;\n  z-index: 11;\n"]))),M=Object(h.a)(r||(r=Object(d.a)(['\n  label: ShopCode;\n  position: absolute;\n  top: 990px;\n  left: 125px;\n  z-index: 11;\n  font-family: "Courier New", Courier, monospace;\n  font-size: 28px;\n  font-weight: 800;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  width: 360px;\n  height: 57px;\n\n  outline: none;\n  border: 0;\n  padding: 0;\n  background: none;\n']))),E=Object(h.a)(o||(o=Object(d.a)(["\n  label: SmsText;\n  background: white;\n  position: absolute;\n  top: 621px;\n  left: 619px;\n  z-index: 11;\n  font-size: 10px;\n  font-weight: 800;\n  line-height: 1.5em;\n  letter-spacing: 1px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: left;\n  width: 181px;\n  height: 55px;\n  /* border: 1px solid red; */\n"]))),F=Object(h.a)(l||(l=Object(d.a)(["\n  label: Count;\n  background: #fff;\n  position: absolute;\n  text-align: right;\n  padding: 2px;\n  top: 639px;\n  left: 800px;\n  font-size: 9px;\n  width: 26px;\n  height: 12px;\n  color: #d0d0d0;\n  z-index: 2;\n"])));var L,Q,R,D,H,I,J,U,A=function(e){var n=e.img,t=e.classNameQrCode,a=e.classNameShopCode,c=e.classNameSmsText,i=e.classNameCount,s=Object(j.useRef)(null),r=Object(j.useState)(""),o=Object(m.a)(r,2),l=o[0],p=o[1],b=18===l.length,x=Object(j.useMemo)((function(){return b?"\u5834\u6240\u4ee3\u78bc: ".concat(l,"\n").concat("\u672c\u7c21\u8a0a\u662f\u7c21\u8a0a\u5be6\u806f\u5236\u767c\u9001\uff0c\u9650\u9632\u75ab\u76ee\u7684\u4f7f\u7528\u3002"):""}),[b,l]),d=Object(j.useState)(""),u=Object(m.a)(d,2),O=u[0],f=u[1];Object(j.useEffect)((function(){if(b){var e=!1;return z.a.toDataURL("smsto:1922:".concat(x)).then((function(n){e||f(n)})),function(){e=!0}}f("")}),[b,l,x]);var N=Object(j.useMemo)((function(){if(b)return function(){return{__html:x.split("\n").map(C).join("<br/>")}}}),[b,x]);return Object(S.jsxs)("div",{className:k,ref:s,children:[Object(S.jsx)("div",{className:T,children:O?Object(S.jsx)("img",{className:Object(h.b)(B,t),src:O,alt:""}):null}),Object(S.jsxs)("div",{className:Object(h.b)(F,i),children:[x.length,"/70"]}),Object(S.jsx)("input",{className:Object(h.b)(M,a),value:l,onChange:function(e){var n=w()(e.target.value.replace(/\s/g,"").split(""),4).map((function(e){return e.join("")})).join(" ");p(n)},onBlur:function(){p((function(e){return e.trim()}))},onKeyPress:function(e){b&&s.current&&"Enter"===e.key&&g.a.toBlob(s.current).then((function(e){Object(v.saveAs)(e,"sms-real-name.png")}))},maxLength:18,placeholder:"\u8acb\u7531\u6b64\u8f38\u5165",autoFocus:!0}),Object(S.jsx)("div",{className:Object(h.b)(E,c),dangerouslySetInnerHTML:N?N():void 0,children:N?void 0:Object(S.jsx)("span",{style:{color:"red"},children:"\u8acb\u5148\u8f38\u5165\u5834\u6240\u4ee3\u78bc"})}),Object(S.jsx)("div",{className:T,children:Object(S.jsx)("img",{className:_,src:n,alt:""})})]})},K=t.p+"static/media/en.55753495.jpeg",P=t.p+"static/media/zh.d68bbc57.jpeg",V=t.p+"static/media/zh.2c3963f3.jpeg";function q(){return Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:Object(S.jsx)("a",{href:"https://github.com/VdustR/ays1922#readme",target:"_blank",rel:"noopener noreferrer",children:"\u4ecb\u7d39"})}),Object(S.jsx)("li",{children:Object(S.jsx)(u.b,{target:"_blank",rel:"noopener noreferrer",to:"/v2/zh",children:"v2 - \u4e2d\u6587"})}),Object(S.jsx)("li",{children:Object(S.jsx)(u.b,{target:"_blank",rel:"noopener noreferrer",to:"/v1/zh",children:"v1 - \u4e2d\u6587"})}),Object(S.jsx)("li",{children:Object(S.jsx)(u.b,{target:"_blank",rel:"noopener noreferrer",to:"/v1/zh",children:"v1 - \u82f1\u6587"})})]})}var G=function(){return Object(S.jsx)(u.a,{basename:"/ays1922",children:Object(S.jsxs)(O.c,{children:[Object(S.jsx)(O.a,{exact:!0,sensitive:!0,path:"/",component:q}),Object(S.jsx)(O.a,{exact:!0,sensitive:!0,path:"/v1/zh",children:Object(S.jsx)(A,{img:P})}),Object(S.jsx)(O.a,{exact:!0,sensitive:!0,path:"/v1/en",children:Object(S.jsx)(A,{img:K,classNameQrCode:Object(h.a)(L||(L=Object(d.a)(["\n              top: 614px;\n              left: 140px;\n            "]))),classNameSmsText:Object(h.a)(Q||(Q=Object(d.a)(["\n              top: 594px;\n            "]))),classNameCount:Object(h.a)(R||(R=Object(d.a)(["\n              top: 613px;\n            "]))),classNameShopCode:Object(h.a)(D||(D=Object(d.a)(["\n              top: 979px;\n              left: 111px;\n              width: 361px;\n              height: 55px;\n            "])))})}),Object(S.jsx)(O.a,{exact:!0,sensitive:!0,path:"/v2/zh",children:Object(S.jsx)(A,{img:V,classNameQrCode:Object(h.a)(H||(H=Object(d.a)(["\n              width: 193px;\n              height: 193px;\n              top: 573px;\n              left: 369px;\n            "]))),classNameSmsText:Object(h.a)(I||(I=Object(d.a)(["\n              top: 998px;\n              left: 67px;\n              width: 164px;\n              height: 46px;\n            "]))),classNameCount:Object(h.a)(J||(J=Object(d.a)(["\n              top: 1011px;\n              left: 226px;\n            "]))),classNameShopCode:Object(h.a)(U||(U=Object(d.a)(["\n              top: 801px;\n              left: 336px;\n              width: 260px;\n              height: 37px;\n              font-size: 20px;\n            "])))})}),Object(S.jsx)(O.a,{path:"/",children:"NOT FOUND!"})]})})};t(88);x.a.render(Object(S.jsx)(p.a.StrictMode,{children:Object(S.jsx)(G,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.7fdbe0fa.chunk.js.map