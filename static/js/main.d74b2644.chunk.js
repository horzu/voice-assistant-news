(this["webpackJsonpnews-voice-assistant-alan-ai"]=this["webpackJsonpnews-voice-assistant-alan-ai"]||[]).push([[0],{146:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(10),c=n.n(i),s=(n(87),n(36)),r=n(42),l=n.n(r),o=n(69),d=n.n(o),j=n(169),h=n(168),b=n(164),x=n(160),f=Object(x.a)({container:{padding:"0 5%",width:"100%",margin:"0"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",width:"100%",height:"45vh",padding:"10%",borderRadius:10,color:"white"},infoCard:{display:"flex",flexDirection:"column",textAlign:"center"}}),p=n(170),u=n(162),m=n(163),O=n(165),g=n(166),y=n(167),v=n(74),w=n.n(v),N=Object(x.a)({media:{height:250},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderBottom:"10px solid white"},activeCard:{borderBottom:"10px solid #22289a"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),C=n(3),S=function(e){var t=e.article,n=t.description,i=t.publishedAt,c=t.source,r=t.title,l=t.url,o=t.urlToImage,d=e.i,j=e.activeArticle,h=N(),x=Object(a.useState)([]),f=Object(s.a)(x,2),v=f[0],S=f[1];return Object(a.useEffect)((function(){S((function(e){return Array(20).fill().map((function(t,n){return e[n]||Object(a.createRef)()}))}))}),[]),Object(a.useEffect)((function(){var e;d===j&&v[j]&&(e=v[j],window.scroll(0,e.current.offsetTop-50))}),[d,j,v]),Object(C.jsxs)(p.a,{ref:v[d],className:w()(h.card,j===d?h.activeCard:null),children:[Object(C.jsxs)(u.a,{href:l,target:"_blank",children:[Object(C.jsx)(m.a,{className:h.media,image:o||"https://st2.depositphotos.com/3223379/5688/i/600/depositphotos_56880225-stock-photo-words-news.jpg"}),Object(C.jsxs)("div",{className:h.details,children:[Object(C.jsx)(b.a,{variant:"body2",color:"textSecondary",component:"h2",children:new Date(i).toDateString()}),Object(C.jsx)(b.a,{variant:"body2",color:"textSecondary",component:"h2",children:c.name})]}),Object(C.jsx)(b.a,{className:h.title,variant:"h5",gutterBottom:!0,children:r}),Object(C.jsx)(O.a,{children:Object(C.jsx)(b.a,{variant:"body2",color:"textSecondary",component:"p",children:n})})]}),Object(C.jsxs)(g.a,{className:h.cardActions,children:[Object(C.jsx)(y.a,{size:"small",color:"primary",children:"Learn More"}),Object(C.jsx)(b.a,{variant:"h5",color:"textSecondary",children:d+1})]})]})},B=[{color:"#00838f",title:"Latest News",text:"Give me the latest news"},{color:"#1565c0",title:"News by Categories",info:"Business, Entertainment, General, Health, Science, Sports, Technology",text:"Give me the latest Technology news"},{color:"#4527a0",title:"News by Terms",info:"Bitcoin, PlayStation 5, Smartphones, Donald Trump...",text:"What's up with PlayStation 5"},{color:"#283593",title:"News by Sources",info:"CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",text:"Give me BBC highlights"}],A=function(e){var t=e.articles,n=e.activeArticle,a=f();return t.length?Object(C.jsx)(j.a,{in:!0,children:Object(C.jsx)(h.a,{className:a.container,container:!0,alignItems:"stretch",spacing:3,children:t.map((function(e,t){return Object(C.jsx)(h.a,{item:!0,xs:12,sm:6,md:4,lg:3,style:{display:"flex"},children:Object(C.jsx)(S,{article:e,i:t,activeArticle:n})})}))})}):Object(C.jsx)(j.a,{in:!0,children:Object(C.jsx)(h.a,{className:a.container,container:!0,alignItems:"stretch",spacing:3,children:B.map((function(e){return Object(C.jsx)(h.a,{item:!0,xs:12,sm:6,md:4,lg:3,className:a.infoCard,children:Object(C.jsxs)("div",{className:a.card,style:{backgroundColor:e.color},children:[Object(C.jsx)(b.a,{variant:"h5",children:e.title}),e.info?Object(C.jsxs)(b.a,{variant:"h6",children:[Object(C.jsxs)("strong",{children:[e.title.split(" ")[2],":"]}),Object(C.jsx)("br",{}),e.info]}):null,Object(C.jsxs)(b.a,{variant:"h6",children:["Try saying: ",Object(C.jsx)("br",{})," ",Object(C.jsx)("i",{children:e.text})]})]})})}))})})},T=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(-1),r=Object(s.a)(c,2),o=r[0],j=r[1];return Object(a.useEffect)((function(){l()({key:"f3298f25a4953629df54df4de202e51a2e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){var t=e.command,n=e.articles,a=e.number;if("newHeadlines"===t)console.log(n),i(n),j(-1);else if("highlight"===t)j((function(e){return e+1}));else if("open"===t){var c=a.length>2?d()(a,{fuzzy:!0}):a,s=n[c-1];c>20?l()().playText("please try that again."):(window.open(s.url,"_blank"),l()().playText("Opening..."))}}})}),[]),Object(C.jsx)("div",{children:Object(C.jsx)(A,{articles:n,activeArticle:o})})};c.a.render(Object(C.jsx)(T,{}),document.getElementById("root"))},87:function(e,t,n){}},[[146,1,2]]]);
//# sourceMappingURL=main.d74b2644.chunk.js.map