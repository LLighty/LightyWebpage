(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(43)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(21),i=n.n(o),l=n(10),c=n(11),u=n(5),s=n(6),h=n(8),m=n(7),p=n(9),d=n(13),g=n.n(d),b=n(15),f=['"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."- Martin Golding','"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program." - Linus Torvalds',"\u201cTo iterate is human, to recurse divine.\u201d - L. Peter Deutsch","\u201cMost software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.\u201d - Alan Kay",'"Measuring programming progress by lines of code is like measuring aircraft building progress by weight." - Bill Gates','"People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones." - Donald Knuth',"\u201cMost of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris.\u201d - Larry Wall","\u201cThe best programmers are not marginally better than merely good ones. They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability.\u201d - Randall E. Stross","\u201cIf McDonalds were run like a software company, one out of every hundred Big Macs would give you food poisoning, and the response would be, \u2018We\u2019re sorry, here\u2019s a coupon for two more.\u2019 \u201c - Mark Minasi",'"Beware of bugs in the above code; I have only proved it correct, not tried it." - Donald E. Knuth','"If Java had true garbage collection, most programs would delete themselves upon execution." - Robert Sewell','"If debugging is the process of removing software bugs, then programming must be the process of putting them in." - E. W. Dijkstra'];function y(){return(y=Object(b.a)(g.a.mark(function e(){var t,n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.reddit.com/r/Floof/top.json").then(function(e){return e.json()}).then(function(e){return e.data.children}).then(function(e){return e.map(function(e){return e.data.is_video||null!=e.data.media||e.data.url.includes("gifv")?null:e.data.url})}).catch(function(e){return console.log(e),"error"});case 2:t=e.sent,n=0;case 4:if(!(n<t.length)){e.next=11;break}if(null===t[n]){e.next=8;break}return t=t[n],e.abrupt("break",11);case 8:n++,e.next=4;break;case 11:return e.abrupt("return",-1!==t.indexOf("http")?t:"error");case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}n(30);var v=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={picture:"",quote:"",file:"img",play:""},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.setState({quote:f[Math.floor(Math.random()*f.length)]}),function(){return y.apply(this,arguments)}().then(function(t){"error"===t&&""===t||e.setState({picture:t})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{class:"split left"},"hello"),r.a.createElement("div",{class:"split right top"},r.a.createElement("h2",{class:"centre"},this.state.quote)),r.a.createElement("div",{class:"split right bottom"},r.a.createElement("img",{src:this.state.picture,alt:"Everyone likes fluffy pictures!",id:"img"}),r.a.createElement("div",null,"Hello is it me you're looking for")))}}]),t}(a.Component),w=(n(31),n(32),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(a.Component)),E=(n(33),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(a.Component)),j=(n(34),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(a.Component));var k=function(){return r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("ul",{id:"nav"},r.a.createElement("li",null,r.a.createElement(l.b,{to:"/LightyWebpage/"},"Home")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/LightyWebpage/about/"},"About Me")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/LightyWebpage/resume/"},"Resume")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/LightyWebpage/contact/"},"Contact")))),r.a.createElement(c.a,{path:"/LightyWebpage/",exact:!0,component:v}),r.a.createElement(c.a,{path:"/LightyWebpage/about/",component:w}),r.a.createElement(c.a,{path:"/LightyWebpage/resume/",component:E}),r.a.createElement(c.a,{path:"/LightyWebpage/contact/",component:j})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(l.a,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.c5ae9b44.chunk.js.map