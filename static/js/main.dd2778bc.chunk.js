(this["webpackJsonpcode-editor"]=this["webpackJsonpcode-editor"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(2),r=n.n(o),s=(n(13),n.p,n(14),n(3)),i=n(5),l=n(6),d=n(8),u=n(7),j=n(0),h=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).handleLoad=function(){e.iframeRoot=e.node.contentDocument.body,e.forceUpdate()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmout",value:function(){this.node.removeEventListener("load",this.handleLoad)}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.code;return Object(j.jsx)("iframe",{className:"code",srcDoc:"<!DOCTYPE html>".concat(a),ref:function(t){return e.node=t},children:this.iframeRoot&&r.a.createPortal(n,this.iframeRoot)})}}]),n}(a.Component);function b(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),r=Object(s.a)(o,2),i=r[0],l=r[1],d=Object(a.useState)(""),u=Object(s.a)(d,2),b=u[0],v=u[1];return Object(j.jsx)("div",{className:"page-wrap twilight",children:Object(j.jsxs)("div",{className:"boxes",children:[Object(j.jsxs)("div",{className:"coding_area",children:[Object(j.jsx)("textarea",{id:"html",placeholder:"HTML",className:"prism-live language-html",value:n,onChange:function(e){return c(e.target.value)}}),Object(j.jsx)("textarea",{id:"css",placeholder:"CSS",className:"prism-live language-css",value:i,onChange:function(e){return l(e.target.value)}}),Object(j.jsx)("textarea",{id:"js",placeholder:"JS",className:"prism-live language-js",value:b,onChange:function(e){return v(e.target.value)}})]}),Object(j.jsx)(h,{code:"".concat(n,"<style>").concat(i,"</style><script>").concat(b,"<\/script>")})]})})}var v=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("header",{className:"App-header",children:Object(j.jsx)("img",{id:"logo",src:"https://www.dyte.io/images/Dyte-Logo.svg"})}),Object(j.jsx)(b,{})]})};var m=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(v,{})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.dd2778bc.chunk.js.map