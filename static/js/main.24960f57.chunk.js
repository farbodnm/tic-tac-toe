(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{34:function(e,t,r){},41:function(e,t,r){"use strict";r.r(t);var s=r(0),a=r.n(s),n=r(7),i=r.n(n),c=(r(34),r(35),r(14)),o=r(15),u=r(19),l=r(18),h=r(26),x=r(55),d=r(57),j=r(2),b=Object(x.a)({gameButton:{fontSize:"20px",height:"64px",fontweight:"bold",borderColor:"#12121266",maxwidth:"90px",maxHeight:"90px",minWidth:"90px",minHeight:"90px","@media(max-Width: 550px)":{maxwidth:"70px",maxHeight:"70px",minWidth:"70px",minHeight:"70px"},"@media(max-Width: 420px)":{maxwidth:"50px",maxHeight:"50px",minWidth:"50px",minHeight:"50px"},"&:hover":{borderColor:"#121212cc"}}});var p=function(e){var t=b();return Object(j.jsx)(d.a,{className:t.gameButton,onClick:e.onClick,variant:"outlined",color:"primary",children:e.value})},m=function(){return Object(j.jsx)("svg",{className:"xo","aria-label":"O",role:"img",viewBox:"0 0 128 128",stroke:"#9B0000",children:Object(j.jsx)("path",{d:"M64,16A48,48 0 1,0 64,112A48,48 0 1,0 64,16"})})},v=function(){return Object(j.jsxs)("svg",{className:"xo","aria-label":"X",role:"img",viewBox:"0 0 128 128",stroke:"#152238",children:[Object(j.jsx)("path",{class:"hFJ9Ve",d:"M16,16L112,112"}),Object(j.jsx)("path",{class:"hFJ9Ve",d:"M112,16L16,112"})]})},O=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"renderSquare",value:function(e){var t=this;switch(this.props.squares[e]){case"O":return Object(j.jsx)(p,{value:Object(j.jsx)(m,{}),onClick:function(){return t.props.onClick(e)}});case"X":return Object(j.jsx)(p,{value:Object(j.jsx)(v,{}),onClick:function(){return t.props.onClick(e)}});default:return Object(j.jsx)(p,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(j.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(j.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(a.a.Component);function f(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var s=Object(h.a)(t[r],3),a=s[0],n=s[1],i=s[2];if(e[a]&&e[a]===e[n]&&e[a]===e[i])return e[a]}return null}var g=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(e){var s;return Object(c.a)(this,r),(s=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],xIsNext:!0,stepNumber:0},s}return Object(o.a)(r,[{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();f(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"render",value:function(){var e,t=this,r=this.state.history,s=r[this.state.stepNumber],a=f(s.squares),n=function(e){for(var t=0,r=0;r<e.length&&("X"===e[r]||"O"===e[r]);r++)t++;return 9===t}(s.squares),i=r.map((function(e,r){var s=r?"Go to move "+r+".":"Start.";return Object(j.jsx)("li",{children:Object(j.jsx)(d.a,{variant:"outlined",onClick:function(){return t.jumpTo(r)},children:s})},r)}));return e=a?"Winner: "+a:n?"Draw!":"Next player: "+(this.state.xIsNext?"X":"O"),Object(j.jsxs)("div",{className:"game",children:[Object(j.jsx)("div",{className:"game-board",children:Object(j.jsx)(O,{squares:s.squares,onClick:function(e){return t.handleClick(e)}})}),Object(j.jsxs)("div",{className:"game-info",children:[Object(j.jsx)("div",{className:"status",children:e}),Object(j.jsx)("ol",{children:i})]})]})}}]),r}(a.a.Component);i.a.render(Object(j.jsx)("div",{children:Object(j.jsx)(g,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.24960f57.chunk.js.map