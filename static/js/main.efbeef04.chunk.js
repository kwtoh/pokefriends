(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),i=(n(14),n(3)),l=n(4),s=n(6),u=n(5),m=n(7),h=function(e){var t=e.name,n=e.id;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"pokemon",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(n,".png")}),r.a.createElement("div",null,r.a.createElement("h2",null,t)))},p=function(e){var t=e.pokemons,n=t.map(function(e,n){var a=t[n].url;"/"===a[a.length-1]&&(a=a.slice(0,-1));var o=parseInt(a.substring(a.lastIndexOf("/")+1));return r.a.createElement(h,{key:o,id:o,name:t[n].name.toUpperCase()})});return r.a.createElement("div",null,n)},d=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",null,r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Pokemon",onChange:t}))},f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"800px"}},e.children)},v=(n(15),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={max:0,count:0,searchfield:"",pokemons:[]},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://pokeapi.co/api/v2/pokemon?limit=1000").then(function(e){return e.json()}).then(function(t){var n=t.count,a=t.results;e.setState({max:n,count:n+a.length,pokemons:a})})}},{key:"render",value:function(){var e=this.state,t=e.count,n=e.pokemons,a=e.searchfield;if(!t)return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"Loading"));var o=n.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Pokedex"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(p,{pokemons:o})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(16);c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.efbeef04.chunk.js.map