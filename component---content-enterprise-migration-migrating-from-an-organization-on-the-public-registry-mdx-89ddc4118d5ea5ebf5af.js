(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),l=n("aOgs"),r=n("q1tI"),i=n.n(r),c=n("7ljp"),m=n("pD55"),s=n("8Aig"),u=n("ReZb"),p=n("GCVy"),d=n("+6vE");var b=function(e){var t=e.children;return i.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var f=function(e){var t=e.children;return i.a.createElement("strong",null,t)},g=n("gnlW"),h=n("mwnC"),y=n("/Rw0"),E=n("dVM4"),w=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function x(e){var t=e.items,n=e.depth;return i.a.createElement(w,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(x,{items:e.items,depth:n+1}):null)})))}x.defaultProps={depth:0};var O=x,v=n("MfeC");function k(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var a=v.a.getVariantsForPage(e.root,n.page),l=[],r=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(r=e),l.push(i.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(o.i,{overlay:e.overlay},i.a.createElement(o.i.Button,null,r.variant.title),i.a.createElement(k.Menu,{direction:e.direction,width:e.menuWidth},l)))}k.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var _=k,C=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),j=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),I=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),N=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),z=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,r=n.frontmatter,w=r.title,x=r.description,k=r.status,H=r.source,G=r.additionalContributors,M=void 0===G?[]:G,W=v.a.getVariantRoot(a.pathname);return i.a.createElement(c.a,{components:{Index:u.a,Note:p.a,Prompt:b,PromptReply:f,Screenshot:g.a}},i.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(m.a,{title:w,description:x}),i.a.createElement(s.b,{location:a,isSearchEnabled:n.isSearchEnabled}),i.a.createElement(C,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(o.e,{display:["none",null,null,"block"]},i.a.createElement(h.a,{editOnGitHub:n.themeOptions.editOnGitHub,location:a})),i.a.createElement(j,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(I,null,i.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(o.e,null,i.a.createElement(o.e,null,i.a.createElement(o.m,{as:"h1"},w),x))),null!=W?i.a.createElement(S,null,i.a.createElement(_,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:W,location:a})):null),n.tableOfContents.items?i.a.createElement(N,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},i.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(O,{items:n.tableOfContents.items})):null,i.a.createElement(z,null,k||H?i.a.createElement(o.k,{mb:3,alignItems:"center"},k?i.a.createElement(E.a,{status:k}):null,i.a.createElement(o.e,{mx:"auto"}),H?i.a.createElement(y.a,{href:H}):null):null,n.tableOfContents.items?i.a.createElement(o.e,{display:["block",null,"none"],mb:3},i.a.createElement(o.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(o.r,{icon:l.b,mr:2}):i.a.createElement(o.r,{icon:l.c,mr:2}),"Table of contents"),i.a.createElement(o.e,{pt:1},i.a.createElement(O,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(d.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(M.map((function(e){return{login:e}})))}))))))}},TJr5:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n("zLVn"),o=n("q1tI"),l=n("7ljp"),r=n("O6H6"),i=n("4LHR"),c={},m={_frontmatter:c},s=r.a;function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(s,Object.assign({},m,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)(o.Fragment,null,i.a["enterprise-migration-requirements"].text),Object(l.b)("p",null,"To migrate from an organization on the ",Object(l.b)("a",{parentName:"p",href:"https://docs.npmjs.com/misc/registry.html"},"public registry"),", use npm's ",Object(l.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/pneumatic-tubes"},"pneumatic-tubes"),' and follow the steps under "',Object(l.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/pneumatic-tubes#importing-from-npm-orgs"},"Importing from npm orgs"),'".'))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-enterprise-migration-migrating-from-an-organization-on-the-public-registry-mdx-89ddc4118d5ea5ebf5af.js.map