(window.webpackJsonproman=window.webpackJsonproman||[]).push([[0],[,,,,,,,,function(e,a,n){e.exports=n(16)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(2),l=n.n(c),s=(n(13),n(14),n(3)),u=n(4),o=n(6),i=n(5),b=n(7),m=function e(a){var n=[];switch(!0){case a>0&&a<4:for(var t=0;a-t>0;t++)n.push("I");break;case a>=4&&a<5:n=[e(5-a),"V"];break;case a>=5&&a<9:n=["V",e(a-5)];break;case a>=9&&a<11:n=[e(10-a),"X"];break;case a>11&&a<20:n=["X",e(a-10)];break;case a>=20&&a<40:n=["XX",e(a-20)];break;case a>=40&&a<50:n=["XL",e(a+10-50)];break;case a>=50&&a<90:n=["L",e(a-50)];break;case a>=90&&a<100:n=["XC",e(a+10-100)];break;case a>=100&&a<400:n=["C",e(a-100)];break;case a>=400&&a<500:n=["CD",e(a+100-500)];break;case a>=500&&a<900:n=["D",e(a-500)];break;case a>=900&&a<1e3:n=["CM",e(a+100-1e3)];break;case a>=1e3&&a<4e3:n=["M",e(a-1e3)];break;default:return null}return n.join("")},k=(n(15),function(e){function a(){var e,n;Object(s.a)(this,a);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).state={roman:null},n.handleChange=function(e){var a=parseInt(e.target.value,10);e.target.value&&n.setState({roman:m(a)})},n}return Object(b.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,"Arabic:",r.a.createElement("input",{onChange:this.handleChange,type:"number"})),r.a.createElement("h1",null,"Roman: ",r.a.createElement("mark",null,this.state.roman?this.state.roman:"none")))}}]),a}(r.a.Component));var h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null))};l.a.render(r.a.createElement(h,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.4ce39c52.chunk.js.map