(this["webpackJsonpmovies-overview"]=this["webpackJsonpmovies-overview"]||[]).push([[0],{38:function(e,t,a){e.exports=a(51)},43:function(e,t,a){},44:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),i=a.n(c),o=(a(43),a(44),a(8)),l=a(67),s=a(69),u=function(e){var t=e.title,a=e.poster_path,c=e.overview,i=e.vote_average,u=e.release_date,m=e.id,d="https://image.tmdb.org/t/p/w1280",p=Object(n.useState)(null),v=Object(o.a)(p,2),f=v[0],h=v[1],b="https://api.themoviedb.org/3/movie/".concat(m,"/videos?api_key=8b3086d8cc10f509a461783c237dd937"),E=Object(n.useState)(!1),g=Object(o.a)(E,2),y=g[0],w=g[1];return r.a.createElement("div",{className:"Movie"},r.a.createElement("div",{className:"contain",onClick:function(){w(!0),fetch(b).then((function(e){return e.json()})).then((function(e){h(e.results)}))}},r.a.createElement("img",{src:d+a,alt:"poster"}),r.a.createElement("div",{className:"overview"},c)),r.a.createElement("h1",null,t),r.a.createElement("div",{className:"rate"},r.a.createElement("span",null,i),"  ",r.a.createElement("p",null,u)),r.a.createElement(l.a,{open:y,onClose:function(){return w(!1)}},r.a.createElement(s.a,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:600,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4}},r.a.createElement("div",{className:"modalData"},f&&f.map((function(e){if("Official Trailer"===e.name)return r.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/".concat(e.key),title:"trailer",key:e.key,frameBorder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})),r.a.createElement("br",null),r.a.createElement("div",{style:{display:"flex",background:"#E9ECEF",borderRadius:"7px"}},r.a.createElement("img",{src:d+a,height:"160",alt:"poster",title:"poster"}),r.a.createElement("div",{className:"modalText"},"  ",c," "))))))},m=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),l=Object(o.a)(i,2),s=l[0],m=l[1];Object(n.useEffect)((function(){d()}),[]);var d=function(){fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&include_video=true&api_key=8b3086d8cc10f509a461783c237dd937&page=1").then((function(e){return e.json()})).then((function(e){c(e.results)}))};return r.a.createElement("div",{className:"GetMovies"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),fetch("https://api.themoviedb.org/3/search/movie?&api_key=8b3086d8cc10f509a461783c237dd937&page=1&query="+s).then((function(e){return e.json()})).then((function(e){c(e.results)}))}},r.a.createElement("input",{type:"search",placeholder:"search movies",value:s,onChange:function(e){return m(e.target.value)},required:!0}),r.a.createElement("button",{type:"submit"},"Search")),r.a.createElement("h2",null,"Trending Movies / Search reasults : "),r.a.createElement("div",{className:"moviesList"}," ",null===a||void 0===a?void 0:a.map((function(e){return r.a.createElement(u,Object.assign({key:e.id},e))}))))};var d=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.1dbf94fd.chunk.js.map