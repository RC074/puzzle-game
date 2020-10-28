(this["webpackJsonppuzzle-game"]=this["webpackJsonppuzzle-game"]||[]).push([[0],[,,function(t,e,n){t.exports={board:"Board_board__pDV63",rows:"Board_rows__1Unu7",tiles:"Board_tiles__2sfzy"}},,,,,,,,function(t,e,n){t.exports={container:"Functions_container__2wiXz",btn:"Functions_btn__2NQsq"}},function(t,e,n){t.exports={container:"Records_container__1tP6Y",display:"Records_display__3DrEl"}},,,,,function(t,e,n){t.exports={start:"App_start__1IK9d"}},function(t,e,n){t.exports=n(24)},,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(14),s=n.n(i),c=n(3),o=n(15),l=n(6),u=n(5),f=n(1),v=function t(e,n){var a=this;Object(c.a)(this,t),this.size=void 0,this.puzzle=void 0,this.pzSolved=void 0,this.findTile=function(t,e){for(var n=0;n<a.size;n++)for(var r=0;r<a.size;r++)if(e[n][r]===t)return[n,r];return[-1,-1]},this.generateChildNodes=function(t,e){var n={8:2,15:3},r=[],i=a.findTile(0,t),s=Object(f.a)(i,2),c=s[0],o=s[1];if(o>0){var l=JSON.parse(JSON.stringify(t)),u=[l[c][o],l[c][o-1]];l[c][o-1]=u[0],l[c][o]=u[1],r.push([l,e+"l"])}if(o<n[a.size]){var v=JSON.parse(JSON.stringify(t)),h=[v[c][o],v[c][o+1]];v[c][o+1]=h[0],v[c][o]=h[1],r.push([v,e+"r"])}if(c>0){var b=JSON.parse(JSON.stringify(t)),p=[b[c][o],b[c-1][o]];b[c-1][o]=p[0],b[c][o]=p[1],r.push([b,e+"u"])}if(c<n[a.size]){var m=JSON.parse(JSON.stringify(t)),d=[m[c][o],m[c+1][o]];m[c+1][o]=d[0],m[c][o]=d[1],r.push([m,e+"d"])}return r},this.manhattan=function(t){for(var e=0,n=0;n<=a.size;n++){var r=a.findTile(n,t),i=a.findTile(n,a.pzSolved),s=Math.abs(r[0]-i[0]);e+=Math.abs(r[1]-i[1])+s}return e},this.size=e,this.puzzle=n,this.pzSolved=8===e?[[1,2,3],[4,5,6],[7,8,0]]:[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,0]]},h=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t,[[]])).shuffle=function(t){var e,n,a;for(a=t.length-1;a>0;a--)e=Math.floor(Math.random()*(a+1)),n=t[a],t[a]=t[e],t[e]=n;return t},a.make=function(){for(;;){for(var t=a.shuffle([1,2,3,4,5,6,7,8,0]),e=0,n=0;n<8;n++)if(0!==t[n])for(var r=n+1;r<9;r++)0!==t[r]&&t[n]>t[r]&&e++;if(e%2===0){for(var i=[],s=0;s<9;s+=3){for(var c=[],o=s;o<s+3;o++)c.push(t[o]);i.push(c)}return i}}},a}return n}(v),b=n(12),p=n(4),m=n.n(p),d=n(8),y=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).AStar=function(){for(var e=[[t.puzzle,0,t.manhattan(t.puzzle),""]],n={};0!==e.length;){var a=e.shift(),r=Object(f.a)(a,4),i=r[0],s=r[1],c=(r[2],r[3]);n[JSON.stringify(i)]=!0;for(var o=t.generateChildNodes(i,c),l=0;l<o.length;l++){if(JSON.stringify(o[l][0])===JSON.stringify(t.pzSolved))return o[l][1];!0!==n[JSON.stringify(o[l][0])]&&e.push([o[l][0],s+1,t.manhattan(o[l][0]),o[l][1]])}e.sort((function(t,e){return t[2]-e[2]}))}},t}return n}(v),O=n(2),g=n.n(O),S=function(t){return new Promise((function(e){return setTimeout(e,t)}))},j=function(t){var e=t.board,n=t.swap,i=t.isSolving,s=Object(a.useState)(!0),c=Object(f.a)(s,2),o=c[0],l=c[1],u=Object(a.useState)(!1),h=Object(f.a)(u,2),p=h[0],O=h[1],j=Object(a.useState)([0,0,0,0,0,0,0,0,0]),w=Object(f.a)(j,2),N=w[0],E=w[1];Object(a.useEffect)((function(){if(i&&!p){console.log(i);var t=new y(8,e);k(t.AStar()),O(!0)}}));var k=function(){var t=Object(d.a)(m.a.mark((function t(e){var n,a,r,i,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=0;case 1:if(!(n<e.length)){t.next=13;break}return a=z(0),r=Object(f.a)(a,2),i=r[0],s=r[1],"u"===e[n]&&i--,"d"===e[n]&&i++,"r"===e[n]&&s++,"l"===e[n]&&s--,x(i,s),t.next=10,S(500);case 10:n++,t.next=1;break;case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),z=function(t){return new v(8,e).findTile(t,e)},_=function(t){var e={};return 0===N[t]&&(e={left:"0vw",right:"0vw",top:"0vw",bottom:"0vw"}),3===N[t]&&(e={bottom:"9.3vw",transition:"bottom 0.5s"}),4===N[t]&&(e={top:"9.3vw",transition:"top 0.5s"}),2===N[t]&&(e={right:"9.3vw",transition:"right 0.5s"}),1===N[t]&&(e={left:"9.3vw",transition:"left 0.5s"}),0===t&&(e.background="transparent"),e},x=function(t,a){if(o&&function(t,e){var n=z(0),a=Object(f.a)(n,2),r=a[0],i=a[1];return r===t&&1===Math.abs(i-e)||i===e&&1===Math.abs(r-t)}(t,a)){var r=z(0),i=Object(f.a)(r,2),s=i[0],c=i[1],u=Object(b.a)(N);s===t&&c>a&&(u[0]=2,u[e[t][a]]=1),s===t&&c<a&&(u[0]=1,u[e[t][a]]=2),c===a&&s>t&&(u[0]=3,u[e[t][a]]=4),c===a&&s<t&&(u[0]=4,u[e[t][a]]=3),E(Object(b.a)(u)),l(!1),setTimeout((function(){E([0,0,0,0,0,0,0,0,0]),function(t,e,a,r){n(t,e,a,r)}(t,a,s,c),l(!0)}),500)}};return r.a.createElement("div",{className:g.a.board},r.a.createElement("ul",{className:g.a.rows},r.a.createElement("li",{className:g.a.tiles,style:_(e[0][0]),onClick:function(){return x(0,0)}},0===e[0][0]?"":e[0][0]),r.a.createElement("li",{className:g.a.tiles,style:_(e[0][1]),onClick:function(){return x(0,1)}},0===e[0][1]?"":e[0][1]),r.a.createElement("li",{className:g.a.tiles,style:_(e[0][2]),onClick:function(){return x(0,2)}},0===e[0][2]?"":e[0][2]),r.a.createElement("li",{className:g.a.tiles,style:_(e[1][0]),onClick:function(){return x(1,0)}},0===e[1][0]?"":e[1][0]),r.a.createElement("li",{className:g.a.tiles,style:_(e[1][1]),onClick:function(){return x(1,1)}},0===e[1][1]?"":e[1][1]),r.a.createElement("li",{className:g.a.tiles,style:_(e[1][2]),onClick:function(){return x(1,2)}},0===e[1][2]?"":e[1][2]),r.a.createElement("li",{className:g.a.tiles,style:_(e[2][0]),onClick:function(){return x(2,0)}},0===e[2][0]?"":e[2][0]),r.a.createElement("li",{className:g.a.tiles,style:_(e[2][1]),onClick:function(){return x(2,1)}},0===e[2][1]?"":e[2][1]),r.a.createElement("li",{className:g.a.tiles,style:_(e[2][2]),onClick:function(){return x(2,2)}},0===e[2][2]?"":e[2][2])))},w=n(11),N=n.n(w),E=function(){return r.a.createElement("div",{className:N.a.container},r.a.createElement("div",{className:N.a.display}))},k=n(10),z=n.n(k),_=function(t){return new Promise((function(e){return setTimeout(e,t)}))},x=function(t){var e=t.isPlaying,n=t.isSolving,i=Object(a.useState)(!1),s=Object(f.a)(i,2),c=s[0],o=s[1],l=Object(a.useState)(!1),u=Object(f.a)(l,2),v=u[0],h=u[1];Object(a.useEffect)((function(){var t=function(){var t=Object(d.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!0!==e){t.next=3;break}return t.next=3,_(300);case 3:o(!!e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=function(){var t=Object(d.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!0===e){t.next=3;break}return t.next=3,_(500);case 3:h(!!e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t(),n()}));return r.a.createElement("div",{className:z.a.container,style:{width:v?"12vw":"0"}},r.a.createElement("button",{className:z.a.btn,onClick:function(){n()},style:{visibility:c?"visible":"hidden"}},"Solve"),r.a.createElement("button",{className:z.a.btn,style:{visibility:c?"visible":"hidden"}},"Restart"))},C=(n(23),n(16)),J=n.n(C),P=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={board:[[1,2,3],[4,5,6],[7,8,9]],isPlaying:!1,isSolving:!1},t.togglePlayingState=function(){t.setState({isPlaying:!t.state.isPlaying})},t.handleSwapTiles=function(e,n,a,r){var i=t.state.board,s=[i[a][r],i[e][n]];i[e][n]=s[0],i[a][r]=s[1],t.setState({board:i})},t.handleSolve=function(){t.setState({isSolving:!0})},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=new h(8).make();this.setState({board:t})}},{key:"render",value:function(){var t=this;return r.a.createElement("div",null,this.state.isPlaying?"":r.a.createElement("button",{className:J.a.start,onClick:this.togglePlayingState},"START"),r.a.createElement(E,null),r.a.createElement(x,{isPlaying:this.state.isPlaying,isSolving:this.handleSolve}),r.a.createElement(j,{board:this.state.board,swap:function(e,n,a,r){return t.handleSwapTiles(e,n,a,r)},isSolving:this.state.isSolving}))}}]),n}(r.a.Component);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.2a01c2ba.chunk.js.map