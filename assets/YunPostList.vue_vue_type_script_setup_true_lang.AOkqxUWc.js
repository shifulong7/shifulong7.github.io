import{k as L,_ as N,g as j,l as B}from"./app.CKoIgdSy.js";import"./chunks/dayjs.CCYrSalk.js";import{a as M}from"./chunks/vue-router.ueC3T5Rj.js";import{c as i,f as S,Q as a,O as w,S as l,u as o,a4 as x,F as C,a0 as T,N as R,Y as b,P as t,U as f,X as V,W as z,M as E,e as Y,$ as F,y as $}from"./framework.DntyxCiH.js";import{b as H,_ as I,a as A}from"./YunPostMeta.vue_vue_type_style_index_0_lang.BA1Gu8Gu.js";import{u as D}from"./post.DU4NJpVG.js";import{u as G}from"./chunks/vue-i18n.C-9EDs2w.js";function O(m){const d=M(),s=i(()=>Number.parseInt(d.params.page||"1")),n=i(()=>Math.ceil(m.total/m.pageSize)),_=i(()=>s.value===1||s.value===n.value?3:2);function h(r){return r===1||r===n.value?!0:r>s.value-_.value&&r<s.value+_.value}function c(r){return r===1?"/":`/page/${r}`}const v=i(()=>c(s.value-1)),e=i(()=>c(s.value+1)),p=i(()=>s.value>1),k=i(()=>s.value<n.value);return{curPage:s,totalPages:n,showPage:h,surLen:_,getTo:c,prevTo:v,nextTo:e,showPrev:p,showNext:k}}const Q={class:"pagination"},U=S({__name:"YunPagination",props:{total:{},pageSize:{}},setup(m,{expose:d}){const s=m,{curPage:n,totalPages:_,showPage:h,getTo:c,surLen:v,prevTo:e,nextTo:p,showPrev:k,showNext:r}=O({total:s.total,pageSize:s.pageSize});return d({curPage:n}),(P,g)=>{const y=R("RouterLink");return t(),a("nav",Q,[o(k)?(t(),w(y,{key:0,class:"page-number",to:o(e),"aria-label":"prev"},{default:x(()=>g[0]||(g[0]=[f("div",{"i-ri-arrow-left-s-line":""},null,-1)])),_:1},8,["to"])):l("v-if",!0),(t(!0),a(C,null,T(o(_),u=>(t(),a(C,null,[o(h)(u)?(t(),w(y,{key:u,class:b(["page-number",o(n)===u&&"active"]),to:o(c)(u)},{default:x(()=>[V(z(u),1)]),_:2},1032,["class","to"])):u===o(n)-o(v)?(t(),a("span",{key:`prev-space-${u}`,class:"space",disabled:""}," ... ")):u===o(n)+o(v)?(t(),a("span",{key:`next-space-${u}`,class:"space",disabled:""}," ... ")):l("v-if",!0)],64))),256)),o(r)?(t(),w(y,{key:1,class:"page-number",to:o(p),"aria-label":"next"},{default:x(()=>g[1]||(g[1]=[f("div",{"i-ri-arrow-right-s-line":""},null,-1)])),_:1},8,["to"])):l("v-if",!0)])}}}),W={},X={w:"full",h:"10",class:"absolute bottom-0 bg-gradient-to-t from-$va-c-bg-light to-transparent z-1"};function q(m,d){return t(),a("div",X)}const J=E(W,[["render",q]]),K={class:"flex flex-1 of-hidden justify-start items-start post-card-info",w:"full"},Z=["src","alt"],ee={class:"flex-center title text-2xl",text:"center",font:"serif black"},te={flex:"~ grow col",w:"full",justify:"center",items:"center"},se={key:0,py:"1"},oe=["innerHTML"],ae={key:2,m:"b-5"},ne=["href"],re={w:"full",class:"yun-card-actions flex justify-between","min-h":"10",text:"sm"},le={class:"post-categories inline-flex",flex:"wrap 1",items:"center"},ie=S({__name:"YunPostCard",props:{post:{}},setup(m){const d=m,{t:s}=G(),{icon:n,styles:_,color:h}=D(d.post.type),c=Y("bg-gradient-to-r gradient-text from-$va-c-primary to-$va-c-primary-lighter"),v=i(()=>h?"":d.post.postTitleClass||c.value);return(e,p)=>{const k=N,r=H,P=J,g=I,y=A,u=L;return t(),w(u,{class:b(["w-full",e.post.cover?"post-card-image":"post-card"]),m:"auto",overflow:"hidden",style:F(o(_))},{default:x(()=>[f("div",K,[e.post.cover?(t(),a("img",{key:0,src:e.post.cover,alt:o(s)("post.cover"),width:"320",height:"180",w:"40%",h:"54",class:"cover object-cover object-center md:shadow",loading:"lazy"},null,8,Z)):l("v-if",!0),f("div",{class:b(["flex flex-col items-center relative",e.post.cover&&"h-54"]),w:"full"},[$(k,{class:b(["post-title-link cursor-pointer",v.value]),to:e.post.path||"",m:"t-3"},{default:x(()=>[f("div",ee,[e.post.type?(t(),a("div",{key:0,class:b(["inline-flex",o(n)]),m:"r-1"},null,2)):l("v-if",!0),f("span",null,z(e.post.title),1)])]),_:1},8,["to","class"]),$(r,{frontmatter:e.post},null,8,["frontmatter"]),f("div",te,[e.post.excerpt_type==="text"?(t(),a("div",se)):l("v-if",!0),e.post.excerpt?(t(),a("div",{key:1,class:"markdown-body",op:"90",text:"left",w:"full",p:"x-6 lt-sm:4 y-2",innerHTML:e.post.excerpt},null,8,oe)):(t(),a("div",ae))]),l(' <div m="b-5" /> '),e.post.excerpt?(t(),w(P,{key:0})):l("v-if",!0),e.post.url?(t(),a("a",{key:1,href:e.post.url,class:"post-link-btn shadow hover:shadow-md z-2",rounded:"",target:"_blank",m:"b-4"},z(o(s)("post.view_link")),9,ne)):l("v-if",!0)],2)]),l(" always show "),f("div",re,[f("div",le,[$(g,{m:"l-1",categories:e.post.categories},null,8,["categories"])]),e.post.tags?(t(),w(y,{key:0,m:"1",tags:e.post.tags},null,8,["tags"])):l("v-if",!0)])]),_:1},8,["class","style"])}}}),ce={flex:"~ col",class:"yun-post-list gap-4",w:"full",p:"x-4 lt-sm:0"},ue={key:0,py2:"",op50:"","text-center":""},he=S({__name:"YunPostList",props:{type:{},posts:{}},setup(m){const d=m,s=Y(),n=i(()=>{var p;return((p=s.value)==null?void 0:p.curPage)||1}),_=j(),h=B(),c=i(()=>h.value.pageSize),v=i(()=>(d.posts||_.postList).filter(p=>!p.hide)),e=i(()=>v.value.slice((n.value-1)*c.value,n.value*c.value));return(p,k)=>{const r=ie,P=U;return t(),a(C,null,[f("div",ce,[e.value.length?l("v-if",!0):(t(),a("div",ue," 博主还什么都没写哦～ ")),(t(!0),a(C,null,T(e.value,(g,y)=>(t(),w(r,{key:y,post:g},null,8,["post"]))),128))]),$(P,{ref_key:"paginationRef",ref:s,class:"mt-5",total:v.value.length,"page-size":c.value},null,8,["total","page-size"])],64)}}});export{he as _};
