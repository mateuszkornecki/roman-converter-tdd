(window.webpackJsonproman=window.webpackJsonproman||[]).push([[0],[,,,,,,,,function(n,e,t){n.exports=t(16)},,,,,function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),u=t(2),o=t.n(u),i=(t(13),t(14),t(3)),c=t(4),l=t(6),f=t(5),m=t(7),s=function(n){var e=[];if(n>0){for(var t=0;n-t>0;t++)e.push("I");return e.join("")}return null},j=function(n){return n>3?(n-5<0?[s(5-n),"V"]:["V",s(n-5)]).join(""):s(n)},h=function(n){return n>8?[j(10-n),"X"].join(""):j(n)},p=function(n){return n>10?["X",h(n-10)].join(""):h(n)},v=function(n){return n>20?["XX",p(n-20)].join(""):p(n)},b=function(n){return n>39?["X","L",v(n+10-50)].join(""):v(n)},d=function(n){return n>89?["X","C",v(n+10-100)].join(""):function(n){return n>49?["L",b(n-50)].join(""):b(n)}(n)},E=function n(e){return e>99?["C",n(e-100)].join(""):d(e)},g=function n(e){return e>499?["D",n(e-500)].join(""):function(n){return n>399?["C","D",E(n+100-500)].join(""):E(n)}(e)},C=function n(e){return e>999?["M",n(e-1e3)].join(""):function(n){return n>899?["C","M",g(n+100-1e3)].join(""):g(n)}(e)},w=function(n){var e=null;return n>0&&n<4e3&&(e=C(n)),e},X=(t(15),function(n){function e(){var n,t;Object(i.a)(this,e);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return(t=Object(l.a)(this,(n=Object(f.a)(e)).call.apply(n,[this].concat(a)))).state={roman:null},t.handleChange=function(n){var e=parseInt(n.target.value,10);n.target.value&&t.setState({roman:w(e)})},t}return Object(m.a)(e,n),Object(c.a)(e,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("label",null,"Arabic:",a.a.createElement("input",{onChange:this.handleChange,type:"number"})),a.a.createElement("h1",null,"Roman: ",a.a.createElement("mark",null,this.state.roman?this.state.roman:"none")))}}]),e}(a.a.Component));var y=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(X,null))};o.a.render(a.a.createElement(y,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.831ccec3.chunk.js.map