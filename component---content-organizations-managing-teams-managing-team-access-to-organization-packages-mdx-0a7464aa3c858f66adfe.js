(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{O6H6:function(e,t,a){"use strict";var n=a("vOnD"),o=a("u9kb"),c=a("aOgs"),r=a("q1tI"),l=a.n(r),i=a("7ljp"),m=a("pD55"),s=a("8Aig"),b=a("ReZb"),p=a("GCVy"),g=a("+6vE");var u=function(e){var t=e.children;return l.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},l.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var d=function(e){var t=e.children;return l.a.createElement("strong",null,t)},h=a("gnlW"),O=a("mwnC"),j=a("/Rw0"),f=a("dVM4"),k=Object(n.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function y(e){var t=e.items,a=e.depth;return l.a.createElement(k,{key:t,as:"ul",m:0,p:0},t.map((function(e){return l.a.createElement(o.e,{as:"li",key:e.url,pl:a>0?3:0},l.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?l.a.createElement(y,{items:e.items,depth:a+1}):null)})))}y.defaultProps={depth:0};var N=y,x=a("MfeC");function w(e){var t=x.a.getPath(e.location.pathname),a=x.a.getVariantAndPage(e.root,t);if(!a)return null;var n=x.a.getVariantsForPage(e.root,a.page),c=[],r=n[0];return 0===n.length?null:(n.forEach((function(e){e.page.url===t&&(r=e),c.push(l.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),l.a.createElement(o.i,{overlay:e.overlay},l.a.createElement(o.i.Button,null,r.variant.title),l.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},c)))}w.Menu=Object(n.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var E=w,v=Object(n.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(n.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),z=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),F=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(n.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),_=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=e.location,r=a.frontmatter,k=r.title,y=r.description,w=r.status,I=r.source,A=r.additionalContributors,P=void 0===A?[]:A,B=x.a.getVariantRoot(n.pathname);return l.a.createElement(i.a,{components:{Index:b.a,Note:p.a,Prompt:u,PromptReply:d,Screenshot:h.a}},l.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},l.a.createElement(m.a,{title:k,description:y}),l.a.createElement(s.b,{location:n}),l.a.createElement(v,{flex:"1 1 auto",flexDirection:"row"},l.a.createElement(o.e,{display:["none",null,null,"block"]},l.a.createElement(O.a,{location:n})),l.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},l.a.createElement(z,null,l.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},l.a.createElement(o.e,null,l.a.createElement(o.e,null,l.a.createElement(o.m,{as:"h1"},k),y))),null!=B?l.a.createElement(F,null,l.a.createElement(E,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:B,location:n})):null),a.tableOfContents.items?l.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},l.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),l.a.createElement(N,{items:a.tableOfContents.items})):null,l.a.createElement(_,null,w||I?l.a.createElement(o.k,{mb:3,alignItems:"center"},w?l.a.createElement(f.a,{status:w}):null,l.a.createElement(o.e,{mx:"auto"}),I?l.a.createElement(j.a,{href:I}):null):null,a.tableOfContents.items?l.a.createElement(o.e,{display:["block",null,"none"],mb:3},l.a.createElement(o.h,null,(function(e){var t=e.open;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?l.a.createElement(o.r,{icon:c.b,mr:2}):l.a.createElement(o.r,{icon:c.c,mr:2}),"Table of contents"),l.a.createElement(o.e,{pt:1},l.a.createElement(N,{items:a.tableOfContents.items})))}))):null,t,l.a.createElement(g.a,{editUrl:a.editUrl,contributors:a.contributors.concat(P.map((function(e){return{login:e}})))}))))))}},wUVB:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return m})),a.d(t,"default",(function(){return g}));var n,o=a("zLVn"),c=a("q1tI"),r=a("7ljp"),l=a("O6H6"),i=a("4LHR"),m={},s=(n="Screenshot",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),b={_frontmatter:m},p=l.a;function g(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(p,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"As an organization owner or team admin, you can add or remove package access to or from teams in your organization."),Object(r.b)("h2",null,"Adding package access to a team"),Object(r.b)("h3",null,"Adding package access to a team on the web"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)(c.Fragment,null,i.a["user-login"].text),Object(r.b)(c.Fragment,null,i.a["user-login"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)(c.Fragment,null,i.a["profile-settings"].text),Object(r.b)(c.Fragment,null,i.a["profile-settings"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)(c.Fragment,null,i.a["organization-selection"].text),Object(r.b)(c.Fragment,null,i.a["organization-selection"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)(c.Fragment,null,i.a["organization-teams-tab"].text),Object(r.b)(c.Fragment,null,i.a["organization-teams-tab"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Beside the team to which you want to add package access, click ",Object(r.b)("strong",{parentName:"p"},"Packages"),"."),Object(r.b)(s,{src:"/organizations/managing-teams/team-packages-button.png",alt:"Screenshot of the packages button",mdxType:"Screenshot"})),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'On the "Add Packages" page, in the "Package" field, type the name of the package and select from the dropdown menu.'),Object(r.b)(s,{src:"/organizations/managing-teams/team-package-select.png",alt:"Screenshot of the package selection",mdxType:"Screenshot"})),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click ",Object(r.b)("strong",{parentName:"p"},"+ Add Existing Package"),"."),Object(r.b)(s,{src:"/organizations/managing-teams/team-package-add-existing-button.png",alt:"Screenshot of the add package button",mdxType:"Screenshot"})),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Beside the package name, click ",Object(r.b)("strong",{parentName:"p"},"read")," or ",Object(r.b)("strong",{parentName:"p"},"read/write")," to set the team permissions for the package."),Object(r.b)(s,{src:"/organizations/managing-teams/team-package-permissions.png",alt:"Screenshot of the team package permission option",mdxType:"Screenshot"}))),Object(r.b)("h3",null,"Adding package access to a team using the CLI"),Object(r.b)("p",null,"As an organization owner or team admin, you can use the the CLI ",Object(r.b)("inlineCode",{parentName:"p"},"access")," command to add package access to a team on\nthe command line:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"npm access grant <read-only|read-write> <org:team> [<package>]\n")),Object(r.b)("p",null,'For more information, see "',Object(r.b)("a",Object.assign({parentName:"p"},{href:"/cli/access"}),"npm-access"),'".'),Object(r.b)("h2",null,"Removing package access from a team"),Object(r.b)("h3",null,"Removing package access from a team on the web"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)(c.Fragment,null,i.a["user-login"].text),Object(r.b)(c.Fragment,null,i.a["user-login"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)(c.Fragment,null,i.a["profile-settings"].text),Object(r.b)(c.Fragment,null,i.a["profile-settings"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)(c.Fragment,null,i.a["organization-selection"].text),Object(r.b)(c.Fragment,null,i.a["organization-selection"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)(c.Fragment,null,i.a["organization-teams-tab"].text),Object(r.b)(c.Fragment,null,i.a["organization-teams-tab"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Beside the team from which you want to remove package access, click ",Object(r.b)("strong",{parentName:"p"},"Packages"),"."),Object(r.b)(s,{src:"/organizations/managing-teams/team-packages-button.png",alt:"Screenshot of the packages button",mdxType:"Screenshot"})),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Beside the name of the package from which you want to remove access, click ",Object(r.b)("strong",{parentName:"p"},"x"),"."),Object(r.b)(s,{src:"/organizations/managing-teams/team-package-remove-button.png",alt:"Screenshot of the remove package button",mdxType:"Screenshot"}))),Object(r.b)("h3",null,"Removing package access from a team using the CLI"),Object(r.b)("p",null,"As an organization owner or team admin, you can also use the the CLI ",Object(r.b)("inlineCode",{parentName:"p"},"access")," command to revoke package access from a team on\nthe command line:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"npm access revoke <org:team> [<package>]\n")),Object(r.b)("p",null,'For more information, see "',Object(r.b)("a",Object.assign({parentName:"p"},{href:"/cli/access"}),"npm-access"),'".'),Object(r.b)("h2",null,"Changing package access for a team"),Object(r.b)("h3",null,"Changing package access for a team on the web"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)(c.Fragment,null,i.a["user-login"].text),Object(r.b)(c.Fragment,null,i.a["user-login"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)(c.Fragment,null,i.a["profile-settings"].text),Object(r.b)(c.Fragment,null,i.a["profile-settings"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)(c.Fragment,null,i.a["organization-selection"].text),Object(r.b)(c.Fragment,null,i.a["organization-selection"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)(c.Fragment,null,i.a["organization-teams-tab"].text),Object(r.b)(c.Fragment,null,i.a["organization-teams-tab"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Beside the team from which you want to remove package access, click ",Object(r.b)("strong",{parentName:"p"},"Packages"),"."),Object(r.b)(s,{src:"/organizations/managing-teams/team-packages-button.png",alt:"Screenshot of the packages button",mdxType:"Screenshot"})),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Beside the package name, click ",Object(r.b)("strong",{parentName:"p"},"read")," or ",Object(r.b)("strong",{parentName:"p"},"read/write")," to set the team permissions for the package."),Object(r.b)(s,{src:"/organizations/managing-teams/team-package-change-permissions.png",alt:"Screenshot of the change package permission option",mdxType:"Screenshot"}))),Object(r.b)("h3",null,"Changing package access for a team from the CLI"),Object(r.b)("p",null,"As an organization owner or team admin, you can change package access for a team from the command line:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"npm access\n")),Object(r.b)("p",null,"For more information, see the ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"/cli/access"}),Object(r.b)("inlineCode",{parentName:"a"},"npm-access")," CLI documentation"),"."))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-organizations-managing-teams-managing-team-access-to-organization-packages-mdx-0a7464aa3c858f66adfe.js.map