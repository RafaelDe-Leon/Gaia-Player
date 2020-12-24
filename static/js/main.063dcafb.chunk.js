(this["webpackJsonpgaia-player"]=this["webpackJsonpgaia-player"]||[]).push([[0],{16:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(2),i=c.n(n),r=c(10),o=c.n(r),s=c(3),l=c(6),u=(c(16),c(5)),d=c(4),p=function(e,t){if(e){var c=t.current.play();void 0!==c&&c.then((function(e){t.current.play()}))}},j=function(e){var t=e.audioRef,c=e.isPlaying,i=e.setIsPlaying,r=e.setSongInfo,o=e.songInfo,l=e.currentSong,j=e.setCurrentSong,b=e.setSongs,h=e.songs;Object(n.useEffect)((function(){var e=h.map((function(e){return e.id===l.id?Object(s.a)(Object(s.a)({},e),{},{active:!0}):Object(s.a)(Object(s.a)({},e),{},{active:!1})}));b(e)}),[l]);var g=function(e){var t=Math.floor(e/60),c=Math.floor(e%60),a=String(c).padStart(2,"0");return"".concat(t,":").concat(a)},f=function(e){var a=h.findIndex((function(e){return e.id===l.id}));if("skip-forward"===e&&j(h[(a+1)%h.length]),"skip-back"===e){if((a-1)%h.length===-1)return j(h[h.length-1]),void p(c,t);j(h[(a-1)%h.length])}p(c,t)},m={transform:"translateX(".concat(o.animationPercentage,"%)")},v={background:"linear-gradient(to right, ".concat(l.color[0],", ").concat(l.color[1],")")};return Object(a.jsxs)("div",{className:"player",children:[Object(a.jsxs)("div",{className:"time-control",children:[Object(a.jsx)("p",{children:g(o.currentTime)}),Object(a.jsxs)("div",{style:v,className:"track",children:[Object(a.jsx)("input",{min:0,max:o.duration||0,value:o.currentTime,onChange:function(e){t.current.currentTime=e.target.value,r(Object(s.a)(Object(s.a)({},o),{},{currentTime:e.target.value}))},type:"range"}),Object(a.jsx)("div",{style:m,className:"animate-track"})]}),Object(a.jsx)("p",{children:o.duration?g(o.duration||0):"0:00"})]}),Object(a.jsxs)("div",{className:"play-control",children:[Object(a.jsx)(u.a,{onClick:function(){return f("skip-back")},className:"skip-back",size:"2x",icon:d.a}),Object(a.jsx)(u.a,{onClick:function(){c?(t.current.pause(),i(!c)):(t.current.play(),i(!c))},className:"play",size:"2x",icon:c?d.d:d.e}),Object(a.jsx)(u.a,{onClick:function(){return f("skip-forward")},className:"skip-forward",size:"2x",icon:d.b})]})]})},b=function(e){var t=e.currentSong;return Object(a.jsxs)("div",{className:"song-container",children:[Object(a.jsx)("img",{src:t.cover,alt:"album cover on a song"}),Object(a.jsx)("h2",{children:t.name}),Object(a.jsx)("h3",{children:t.artist})]})},h=function(e){var t=e.song,c=e.songs,n=e.setCurrentSong,i=e.audioRef,r=e.id,o=e.isPlaying,l=e.setSongs;return Object(a.jsxs)("div",{onClick:function(){n(t);var e=c.map((function(e){return e.id===r?Object(s.a)(Object(s.a)({},e),{},{active:!0}):Object(s.a)(Object(s.a)({},e),{},{active:!1})}));l(e),p(o,i)},className:"library-song ".concat(t.active?"selected":""),children:[Object(a.jsx)("img",{src:t.cover,alt:"album cover on a song"}),Object(a.jsxs)("div",{className:"song-description",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("h4",{children:t.artist})]})]})},g=function(e){var t=e.songs,c=e.setCurrentSong,n=e.audioRef,i=e.isPlaying,r=e.setSongs,o=e.libraryStatus;return Object(a.jsxs)("div",{className:"library ".concat(o?"active-library":""),children:[Object(a.jsx)("h2",{children:"Library"}),Object(a.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(a.jsx)(h,{setCurrentSong:c,songs:t,song:e,id:e.id,audioRef:n,isPlaying:i,setSongs:r},e.id)}))})]})},f=function(e){var t=e.setLibraryStatus,c=e.libraryStatus;return Object(a.jsxs)("nav",{children:[Object(a.jsx)("h1",{children:"Gaia Player"}),Object(a.jsxs)("button",{onClick:function(){return t(!c)},children:["Library ",Object(a.jsx)(u.a,{icon:d.c})]})]})},m=c(24);var v=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(m.a)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(m.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(m.a)(),active:!1},{name:"Hidden Structure",cover:"https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-300x300.jpg",artist:"Leavv, Flitz & Suppe",audio:"https://mp3.chillhop.com/serve.php/?mp3=9913",color:["#c28962","#e4e4ac"],id:Object(m.a)(),active:!1},{name:"Dancing Droplets",cover:"https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-300x300.jpg",artist:"Leavy",audio:"https://mp3.chillhop.com/serve.php/?mp3=9915",color:["#c28962","#e4e4ac"],id:Object(m.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(m.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(m.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(m.a)(),active:!1}]};var O=function(){var e=Object(n.useRef)(null),t=Object(n.useState)(v()),c=Object(l.a)(t,2),i=c[0],r=c[1],o=Object(n.useState)(i[0]),u=Object(l.a)(o,2),d=u[0],p=u[1],h=Object(n.useState)(!1),m=Object(l.a)(h,2),O=m[0],x=m[1],S=Object(n.useState)({currentTime:0,duration:0,animationPercentage:0}),y=Object(l.a)(S,2),k=y[0],C=y[1],w=Object(n.useState)(!1),N=Object(l.a)(w,2),P=N[0],T=N[1],A=function(e){var t=e.target.currentTime,c=e.target.duration,a=Math.round(t),n=Math.round(c),i=Math.round(a/n*100);C(Object(s.a)(Object(s.a)({},k),{},{currentTime:t,duration:c,animationPercentage:i}))};return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(f,{libraryStatus:P,setLibraryStatus:T}),Object(a.jsx)(b,{currentSong:d}),Object(a.jsx)(j,{audioRef:e,setIsPlaying:x,isPlaying:O,currentSong:d,setSongInfo:C,songInfo:k,songs:i,setCurrentSong:p,setSongs:r}),Object(a.jsx)(g,{audioRef:e,songs:i,setCurrentSong:p,isPlaying:O,setSongs:r,libraryStatus:P}),Object(a.jsx)("audio",{onTimeUpdate:A,onLoadedMetadata:A,ref:e,src:d.audio})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,25)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),i(e),r(e)}))};o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),x()}},[[22,1,2]]]);
//# sourceMappingURL=main.063dcafb.chunk.js.map