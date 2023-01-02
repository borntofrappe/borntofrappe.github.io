import{S as at,i as rt,s as ot,a as st,e as j,c as it,b as F,g as X,t as T,d as Z,f as D,h as V,j as lt,o as Oe,k as ct,l as ft,m as ut,n as ke,p as z,q as dt,r as pt,u as ht,v as G,w as J,x as oe,y as K,z as M,A as de}from"./chunks/index-3cc9ff20.js";import{S as tt,I as H,g as ze,f as He,a as Ee,b as pe,s as Y,i as We,c as he,P as Ye,d as mt,e as _t,h as gt}from"./chunks/singletons-8a1360ee.js";function wt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function yt(a){return a.split("%25").map(decodeURI).join("%25")}function bt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const vt=["href","pathname","search","searchParams","toString","toJSON"];function kt(a,e){const n=new URL(a);for(const o of vt){let r=n[o];Object.defineProperty(n,o,{get(){return e(),r},enumerable:!0,configurable:!0})}return Et(n),n}function Et(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const $t="/__data.json";function St(a){return a.replace(/\/$/,"")+$t}function Rt(a){let e=5381;if(typeof a=="string"){let n=a.length;for(;n;)e=e*33^a.charCodeAt(--n)}else if(ArrayBuffer.isView(a)){const n=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let o=n.length;for(;o;)e=e*33^n[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&ae.delete(Ne(a)),me(a,e));const ae=new Map;function Lt(a,e){const n=Ne(a,e),o=document.querySelector(n);if(o!=null&&o.textContent){const{body:r,...d}=JSON.parse(o.textContent),t=o.getAttribute("data-ttl");return t&&ae.set(n,{body:r,init:d,ttl:1e3*Number(t)}),Promise.resolve(new Response(r,d))}return me(a,e)}function Ot(a,e,n){if(ae.size>0){const o=Ne(a,n),r=ae.get(o);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(r.body,r.init);ae.delete(o)}}return me(e,n)}function Ne(a,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(o+=`[data-hash="${Rt(e.body)}"]`),o}const It=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function At(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Nt(a).map(o=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(r)return e.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(d)return e.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const t=o.split(/\[(.+?)\](?!\])/);return"/"+t.map((u,p)=>{if(p%2){if(u.startsWith("x+"))return $e(String.fromCharCode(parseInt(u.slice(2),16)));if(u.startsWith("u+"))return $e(String.fromCharCode(...u.slice(2).split("-").map(A=>parseInt(A,16))));const g=It.exec(u);if(!g)throw new Error(`Invalid param: ${u}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,y,P,E,q]=g;return e.push({name:E,matcher:q,optional:!!y,rest:!!P,chained:P?p===1&&t[0]==="":!1}),P?"(.*?)":y?"([^/]*)?":"([^/]+?)"}return $e(u)}).join("")}).join("")}/?$`),params:e}}function Pt(a){return!/^\([^)]+\)$/.test(a)}function Nt(a){return a.slice(1).split("/").filter(Pt)}function Ut(a,e,n){const o={},r=a.slice(1);let d="";for(let t=0;t<e.length;t+=1){const c=e[t];let u=r[t];if(c.chained&&c.rest&&d&&(u=u?d+"/"+u:d),d="",u===void 0)c.rest&&(o[c.name]="");else{if(c.matcher&&!n[c.matcher](u)){if(c.optional&&c.chained){let p=r.indexOf(void 0,t);if(p===-1){const g=e[t+1];if(g!=null&&g.rest&&g.chained)d=u;else return}for(;p>=t;)r[p]=r[p-1],p-=1;continue}return}o[c.name]=u}}if(!d)return o}function $e(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function jt(a,e,n,o){const r=new Set(e);return Object.entries(n).map(([c,[u,p,g]])=>{const{pattern:y,params:P}=At(c),E={id:c,exec:q=>{const A=y.exec(q);if(A)return Ut(A,P,o)},errors:[1,...g||[]].map(q=>a[q]),layouts:[0,...p||[]].map(t),leaf:d(u)};return E.errors.length=E.layouts.length=Math.max(E.errors.length,E.layouts.length),E});function d(c){const u=c<0;return u&&(c=~c),[u,a[c]]}function t(c){return c===void 0?c:[r.has(c),a[c]]}}function Tt(a){let e,n,o;var r=a[0][0];function d(t){return{props:{data:t[2],form:t[1]}}}return r&&(e=G(r,d(a))),{c(){e&&J(e.$$.fragment),n=j()},l(t){e&&oe(e.$$.fragment,t),n=j()},m(t,c){e&&K(e,t,c),F(t,n,c),o=!0},p(t,c){const u={};if(c&4&&(u.data=t[2]),c&2&&(u.form=t[1]),r!==(r=t[0][0])){if(e){X();const p=e;T(p.$$.fragment,1,0,()=>{M(p,1)}),Z()}r?(e=G(r,d(t)),J(e.$$.fragment),D(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&V(n),e&&M(e,t)}}}function Dt(a){let e,n,o;var r=a[0][0];function d(t){return{props:{data:t[2],$$slots:{default:[Bt]},$$scope:{ctx:t}}}}return r&&(e=G(r,d(a))),{c(){e&&J(e.$$.fragment),n=j()},l(t){e&&oe(e.$$.fragment,t),n=j()},m(t,c){e&&K(e,t,c),F(t,n,c),o=!0},p(t,c){const u={};if(c&4&&(u.data=t[2]),c&1051&&(u.$$scope={dirty:c,ctx:t}),r!==(r=t[0][0])){if(e){X();const p=e;T(p.$$.fragment,1,0,()=>{M(p,1)}),Z()}r?(e=G(r,d(t)),J(e.$$.fragment),D(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&V(n),e&&M(e,t)}}}function Ct(a){let e,n,o;var r=a[0][1];function d(t){return{props:{data:t[3],form:t[1]}}}return r&&(e=G(r,d(a))),{c(){e&&J(e.$$.fragment),n=j()},l(t){e&&oe(e.$$.fragment,t),n=j()},m(t,c){e&&K(e,t,c),F(t,n,c),o=!0},p(t,c){const u={};if(c&8&&(u.data=t[3]),c&2&&(u.form=t[1]),r!==(r=t[0][1])){if(e){X();const p=e;T(p.$$.fragment,1,0,()=>{M(p,1)}),Z()}r?(e=G(r,d(t)),J(e.$$.fragment),D(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&V(n),e&&M(e,t)}}}function Vt(a){let e,n,o;var r=a[0][1];function d(t){return{props:{data:t[3],$$slots:{default:[qt]},$$scope:{ctx:t}}}}return r&&(e=G(r,d(a))),{c(){e&&J(e.$$.fragment),n=j()},l(t){e&&oe(e.$$.fragment,t),n=j()},m(t,c){e&&K(e,t,c),F(t,n,c),o=!0},p(t,c){const u={};if(c&8&&(u.data=t[3]),c&1043&&(u.$$scope={dirty:c,ctx:t}),r!==(r=t[0][1])){if(e){X();const p=e;T(p.$$.fragment,1,0,()=>{M(p,1)}),Z()}r?(e=G(r,d(t)),J(e.$$.fragment),D(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&V(n),e&&M(e,t)}}}function qt(a){let e,n,o;var r=a[0][2];function d(t){return{props:{data:t[4],form:t[1]}}}return r&&(e=G(r,d(a))),{c(){e&&J(e.$$.fragment),n=j()},l(t){e&&oe(e.$$.fragment,t),n=j()},m(t,c){e&&K(e,t,c),F(t,n,c),o=!0},p(t,c){const u={};if(c&16&&(u.data=t[4]),c&2&&(u.form=t[1]),r!==(r=t[0][2])){if(e){X();const p=e;T(p.$$.fragment,1,0,()=>{M(p,1)}),Z()}r?(e=G(r,d(t)),J(e.$$.fragment),D(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else r&&e.$set(u)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&V(n),e&&M(e,t)}}}function Bt(a){let e,n,o,r;const d=[Vt,Ct],t=[];function c(u,p){return u[0][2]?0:1}return e=c(a),n=t[e]=d[e](a),{c(){n.c(),o=j()},l(u){n.l(u),o=j()},m(u,p){t[e].m(u,p),F(u,o,p),r=!0},p(u,p){let g=e;e=c(u),e===g?t[e].p(u,p):(X(),T(t[g],1,1,()=>{t[g]=null}),Z(),n=t[e],n?n.p(u,p):(n=t[e]=d[e](u),n.c()),D(n,1),n.m(o.parentNode,o))},i(u){r||(D(n),r=!0)},o(u){T(n),r=!1},d(u){t[e].d(u),u&&V(o)}}}function Xe(a){let e,n=a[6]&&Ze(a);return{c(){e=ct("div"),n&&n.c(),this.h()},l(o){e=ft(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=ut(e);n&&n.l(r),r.forEach(V),this.h()},h(){ke(e,"id","svelte-announcer"),ke(e,"aria-live","assertive"),ke(e,"aria-atomic","true"),z(e,"position","absolute"),z(e,"left","0"),z(e,"top","0"),z(e,"clip","rect(0 0 0 0)"),z(e,"clip-path","inset(50%)"),z(e,"overflow","hidden"),z(e,"white-space","nowrap"),z(e,"width","1px"),z(e,"height","1px")},m(o,r){F(o,e,r),n&&n.m(e,null)},p(o,r){o[6]?n?n.p(o,r):(n=Ze(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&V(e),n&&n.d()}}}function Ze(a){let e;return{c(){e=dt(a[7])},l(n){e=pt(n,a[7])},m(n,o){F(n,e,o)},p(n,o){o&128&&ht(e,n[7])},d(n){n&&V(e)}}}function Ft(a){let e,n,o,r,d;const t=[Dt,Tt],c=[];function u(g,y){return g[0][1]?0:1}e=u(a),n=c[e]=t[e](a);let p=a[5]&&Xe(a);return{c(){n.c(),o=st(),p&&p.c(),r=j()},l(g){n.l(g),o=it(g),p&&p.l(g),r=j()},m(g,y){c[e].m(g,y),F(g,o,y),p&&p.m(g,y),F(g,r,y),d=!0},p(g,[y]){let P=e;e=u(g),e===P?c[e].p(g,y):(X(),T(c[P],1,1,()=>{c[P]=null}),Z(),n=c[e],n?n.p(g,y):(n=c[e]=t[e](g),n.c()),D(n,1),n.m(o.parentNode,o)),g[5]?p?p.p(g,y):(p=Xe(g),p.c(),p.m(r.parentNode,r)):p&&(p.d(1),p=null)},i(g){d||(D(n),d=!0)},o(g){T(n),d=!1},d(g){c[e].d(g),g&&V(o),p&&p.d(g),g&&V(r)}}}function Gt(a,e,n){let{stores:o}=e,{page:r}=e,{components:d}=e,{form:t}=e,{data_0:c=null}=e,{data_1:u=null}=e,{data_2:p=null}=e;lt(o.page.notify);let g=!1,y=!1,P=null;return Oe(()=>{const E=o.page.subscribe(()=>{g&&(n(6,y=!0),n(7,P=document.title||"untitled page"))});return n(5,g=!0),E}),a.$$set=E=>{"stores"in E&&n(8,o=E.stores),"page"in E&&n(9,r=E.page),"components"in E&&n(0,d=E.components),"form"in E&&n(1,t=E.form),"data_0"in E&&n(2,c=E.data_0),"data_1"in E&&n(3,u=E.data_1),"data_2"in E&&n(4,p=E.data_2)},a.$$.update=()=>{a.$$.dirty&768&&o.page.set(r)},[d,t,c,u,p,g,y,P,o,r]}class Jt extends at{constructor(e){super(),rt(this,e,Gt,Ft,ot,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Kt="modulepreload",Mt=function(a,e){return new URL(a,e).href},Qe={},te=function(e,n,o){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(d=>{if(d=Mt(d,o),d in Qe)return;Qe[d]=!0;const t=d.endsWith(".css"),c=t?'[rel="stylesheet"]':"";if(!!o)for(let g=r.length-1;g>=0;g--){const y=r[g];if(y.href===d&&(!t||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${c}`))return;const p=document.createElement("link");if(p.rel=t?"stylesheet":Kt,t||(p.as="script",p.crossOrigin=""),p.href=d,document.head.appendChild(p),t)return new Promise((g,y)=>{p.addEventListener("load",g),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${d}`)))})})).then(()=>e())},zt={},_e=[()=>te(()=>import("./chunks/0-4d9ec759.js"),["./chunks\\0-4d9ec759.js","./chunks\\_layout-da46b06b.js","./components\\pages\\_layout.svelte-72c74dce.js","./chunks\\index-3cc9ff20.js","./assets\\_layout-0979c1f1.css"],import.meta.url),()=>te(()=>import("./chunks/1-f90b3e19.js"),["./chunks\\1-f90b3e19.js","./components\\pages\\_error.svelte-a8b34b27.js","./chunks\\index-3cc9ff20.js","./chunks\\singletons-8a1360ee.js","./assets\\_error-1e81b2f6.css"],import.meta.url),()=>te(()=>import("./chunks/2-6e78234b.js"),["./chunks\\2-6e78234b.js","./components\\pages\\_slug_\\_layout.svelte-9ed16045.js","./chunks\\index-3cc9ff20.js","./assets\\_layout-ae5b1310.css"],import.meta.url),()=>te(()=>import("./chunks/3-ecf0cc24.js"),["./chunks\\3-ecf0cc24.js","./components\\pages\\_page.svelte-da90d3b6.js","./chunks\\index-3cc9ff20.js","./assets\\_page-e77290f7.css"],import.meta.url),()=>te(()=>import("./chunks/4-c4ac78f2.js"),["./chunks\\4-c4ac78f2.js","./components\\pages\\_slug_\\_page.svelte-098005f7.js","./chunks\\index-3cc9ff20.js","./assets\\_page-fb4d8b31.css"],import.meta.url)],Ht=[2],Wt={"/":[-4],"/[slug]":[-5,[2]]},Yt={handleError:({error:a})=>{console.error(a)}};class Ie{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class xe{constructor(e,n){this.status=e,this.location=n}}async function Xt(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([o,r])=>[o,await r])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Zt=-1,Qt=-2,xt=-3,en=-4,tn=-5,nn=-6;function an(a){if(typeof a=="number")return o(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const e=a,n=Array(e.length);function o(r,d=!1){if(r===Zt)return;if(r===xt)return NaN;if(r===en)return 1/0;if(r===tn)return-1/0;if(r===nn)return-0;if(d)throw new Error("Invalid input");if(r in n)return n[r];const t=e[r];if(!t||typeof t!="object")n[r]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[r]=new Date(t[1]);break;case"Set":const u=new Set;n[r]=u;for(let y=1;y<t.length;y+=1)u.add(o(t[y]));break;case"Map":const p=new Map;n[r]=p;for(let y=1;y<t.length;y+=2)p.set(o(t[y]),o(t[y+1]));break;case"RegExp":n[r]=new RegExp(t[1],t[2]);break;case"Object":n[r]=Object(t[1]);break;case"BigInt":n[r]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[r]=g;for(let y=1;y<t.length;y+=2)g[t[y]]=o(t[y+1]);break}else{const c=new Array(t.length);n[r]=c;for(let u=0;u<t.length;u+=1){const p=t[u];p!==Qt&&(c[u]=o(p))}}else{const c={};n[r]=c;for(const u in t){const p=t[u];c[u]=o(p)}}return n[r]}return o(0)}const Se=jt(_e,Ht,Wt,zt),Ae=_e[0],Pe=_e[1];Ae();Pe();let re={};try{re=JSON.parse(sessionStorage[tt])}catch{}function Re(a){re[a]=he()}function rn({target:a,base:e}){var Je;const n=document.documentElement,o=[];let r=null;const d={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},c=!1,u=!1,p=!0,g=!1,y=!1,P=!1,E=!1,q,A=(Je=history.state)==null?void 0:Je[H];A||(A=Date.now(),history.replaceState({...history.state,[H]:A},"",location.href));const ge=re[A];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let W,Ue,se;async function je(){se=se||Promise.resolve(),await se,se=null;const s=new URL(location.href),i=ce(s,!0);r=null,await De(i,s,[])}async function we(s,{noScroll:i=!1,replaceState:f=!1,keepFocus:l=!1,state:h={},invalidateAll:m=!1},_,v){return typeof s=="string"&&(s=new URL(s,ze(document))),fe({url:s,scroll:i?he():null,keepfocus:l,redirect_chain:_,details:{state:h,replaceState:f},nav_token:v,accepted:()=>{m&&(E=!0)},blocked:()=>{},type:"goto"})}async function Te(s){const i=ce(s,!1);if(!i)throw new Error(`Attempted to preload a URL that does not belong to this app: ${s}`);return r={id:i.id,promise:qe(i).then(f=>(f.type==="loaded"&&f.state.error&&(r=null),f))},r.promise}async function ie(...s){const f=Se.filter(l=>s.some(h=>l.exec(h))).map(l=>Promise.all([...l.layouts,l.leaf].map(h=>h==null?void 0:h[1]())));await Promise.all(f)}async function De(s,i,f,l,h={},m){var v,b;Ue=h;let _=s&&await qe(s);if(_||(_=await Ge(i,{id:null},await ne(new Error(`Not found: ${i.pathname}`),{url:i,params:{},route:{id:null}}),404)),i=(s==null?void 0:s.url)||i,Ue!==h)return!1;if(_.type==="redirect")if(f.length>10||f.includes(i.pathname))_=await le({status:500,error:await ne(new Error("Redirect loop"),{url:i,params:{},route:{id:null}}),url:i,route:{id:null}});else return we(new URL(_.location,i).href,{},[...f,i.pathname],h),!1;else((b=(v=_.props)==null?void 0:v.page)==null?void 0:b.status)>=400&&await Y.updated.check()&&await ue(i);if(o.length=0,E=!1,g=!0,l&&l.details){const{details:w}=l,S=w.replaceState?0:1;w.state[H]=A+=S,history[w.replaceState?"replaceState":"pushState"](w.state,"",i)}if(r=null,u?(t=_.state,_.props.page&&(_.props.page.url=i),q.$set(_.props)):Ce(_),l){const{scroll:w,keepfocus:S}=l;if(S||Le(),await de(),p){const R=i.hash&&document.getElementById(i.hash.slice(1));w?scrollTo(w.x,w.y):R?R.scrollIntoView():scrollTo(0,0)}}else await de();p=!0,_.props.page&&(W=_.props.page),m&&m(),g=!1}function Ce(s){var l;t=s.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),W=s.props.page,q=new Jt({target:a,props:{...s.props,stores:Y},hydrate:!0});const f={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};d.after_navigate.forEach(h=>h(f)),u=!0}async function x({url:s,params:i,branch:f,status:l,error:h,route:m,form:_}){const v=f.filter(Boolean);let b="never";for(const L of f)(L==null?void 0:L.slash)!==void 0&&(b=L.slash);s.pathname=wt(s.pathname,b),s.search=s.search;const w={type:"loaded",state:{url:s,params:i,branch:f,error:h,route:m},props:{components:v.map(L=>L.node.component)}};_!==void 0&&(w.props.form=_);let S={},R=!W;for(let L=0;L<v.length;L+=1){const k=v[L];S={...S,...k.data},(R||!t.branch.some(U=>U===k))&&(w.props[`data_${L}`]=S,R=R||Object.keys(k.data??{}).length>0)}return R||(R=Object.keys(W.data).length!==Object.keys(S).length),(!t.url||s.href!==t.url.href||t.error!==h||_!==void 0||R)&&(w.props.page={error:h,params:i,route:m,status:l,url:new URL(s),form:_??null,data:R?S:W.data}),w}async function ye({loader:s,parent:i,url:f,params:l,route:h,server_data_node:m}){var w,S,R;let _=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await s();if((w=b.universal)!=null&&w.load){let B=function(...k){for(const U of k){const{href:C}=new URL(U,f);v.dependencies.add(C)}};const L={route:{get id(){return v.route=!0,h.id}},params:new Proxy(l,{get:(k,U)=>(v.params.add(U),k[U])}),data:(m==null?void 0:m.data)??null,url:kt(f,()=>{v.url=!0}),async fetch(k,U){let C;k instanceof Request?(C=k.url,U={body:k.method==="GET"||k.method==="HEAD"?void 0:await k.blob(),cache:k.cache,credentials:k.credentials,headers:k.headers,integrity:k.integrity,keepalive:k.keepalive,method:k.method,mode:k.mode,redirect:k.redirect,referrer:k.referrer,referrerPolicy:k.referrerPolicy,signal:k.signal,...U}):C=k;const $=new URL(C,f).href;return B($),u?Ot(C,$,U):Lt(C,U)},setHeaders:()=>{},depends:B,parent(){return v.parent=!0,i()}};_=await b.universal.load.call(null,L)??null,_=_?await Xt(_):null}return{node:b,loader:s,server:m,universal:(S=b.universal)!=null&&S.load?{type:"data",data:_,uses:v}:null,data:_??(m==null?void 0:m.data)??null,slash:((R=b.universal)==null?void 0:R.trailingSlash)??(m==null?void 0:m.slash)}}function Ve(s,i,f,l,h){if(E)return!0;if(!l)return!1;if(l.parent&&s||l.route&&i||l.url&&f)return!0;for(const m of l.params)if(h[m]!==t.params[m])return!0;for(const m of l.dependencies)if(o.some(_=>_(new URL(m))))return!0;return!1}function be(s,i){return(s==null?void 0:s.type)==="data"?{type:"data",data:s.data,uses:{dependencies:new Set(s.uses.dependencies??[]),params:new Set(s.uses.params??[]),parent:!!s.uses.parent,route:!!s.uses.route,url:!!s.uses.url},slash:s.slash}:(s==null?void 0:s.type)==="skip"?i??null:null}async function qe({id:s,invalidating:i,url:f,params:l,route:h}){if((r==null?void 0:r.id)===s)return r.promise;const{errors:m,layouts:_,leaf:v}=h,b=[..._,v];m.forEach($=>$==null?void 0:$().catch(()=>{})),b.forEach($=>$==null?void 0:$[1]().catch(()=>{}));let w=null;const S=t.url?s!==t.url.pathname+t.url.search:!1,R=t.route?s!==t.route.id:!1,B=b.reduce(($,I,N)=>{var ee;const O=t.branch[N],Q=!!(I!=null&&I[0])&&((O==null?void 0:O.loader)!==I[1]||Ve($.some(Boolean),R,S,(ee=O.server)==null?void 0:ee.uses,l));return $.push(Q),$},[]);if(B.some(Boolean)){try{w=await et(f,B)}catch($){return le({status:500,error:await ne($,{url:f,params:l,route:{id:h.id}}),url:f,route:h})}if(w.type==="redirect")return w}const L=w==null?void 0:w.nodes;let k=!1;const U=b.map(async($,I)=>{var ee;if(!$)return;const N=t.branch[I],O=L==null?void 0:L[I];if((!O||O.type==="skip")&&$[1]===(N==null?void 0:N.loader)&&!Ve(k,R,S,(ee=N.universal)==null?void 0:ee.uses,l))return N;if(k=!0,(O==null?void 0:O.type)==="error")throw O;return ye({loader:$[1],url:f,params:l,route:h,parent:async()=>{var Me;const Ke={};for(let ve=0;ve<I;ve+=1)Object.assign(Ke,(Me=await U[ve])==null?void 0:Me.data);return Ke},server_data_node:be(O===void 0&&$[0]?{type:"skip"}:O??null,N==null?void 0:N.server)})});for(const $ of U)$.catch(()=>{});const C=[];for(let $=0;$<b.length;$+=1)if(b[$])try{C.push(await U[$])}catch(I){if(I instanceof xe)return{type:"redirect",location:I.location};let N=500,O;L!=null&&L.includes(I)?(N=I.status??N,O=I.error):I instanceof Ie?(N=I.status,O=I.body):O=await ne(I,{params:l,url:f,route:{id:h.id}});const Q=await Be($,C,m);return Q?await x({url:f,params:l,branch:C.slice(0,Q.idx).concat(Q.node),status:N,error:O,route:h}):await Ge(f,{id:h.id},O,N)}else C.push(void 0);return await x({url:f,params:l,branch:C,status:200,error:null,route:h,form:i?void 0:null})}async function Be(s,i,f){for(;s--;)if(f[s]){let l=s;for(;!i[l];)l-=1;try{return{idx:l+1,node:{node:await f[s](),loader:f[s],data:{},server:null,universal:null}}}catch{continue}}}async function le({status:s,error:i,url:f,route:l}){const h={},m=await Ae();let _=null;if(m.server)try{const w=await et(f,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;_=w.nodes[0]??null}catch{(f.origin!==location.origin||f.pathname!==location.pathname||c)&&await ue(f)}const v=await ye({loader:Ae,url:f,params:h,route:l,parent:()=>Promise.resolve({}),server_data_node:be(_)}),b={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await x({url:f,params:h,branch:[v,b],status:s,error:i,route:null})}function ce(s,i){if(We(s,e))return;const f=yt(s.pathname.slice(e.length)||"/");for(const l of Se){const h=l.exec(f);if(h)return{id:s.pathname+s.search,invalidating:i,route:l,params:bt(h),url:s}}}function Fe({url:s,type:i,intent:f,delta:l}){var v,b;let h=!1;const m={from:{params:t.params,route:{id:((v=t.route)==null?void 0:v.id)??null},url:t.url},to:{params:(f==null?void 0:f.params)??null,route:{id:((b=f==null?void 0:f.route)==null?void 0:b.id)??null},url:s},willUnload:!f,type:i};l!==void 0&&(m.delta=l);const _={...m,cancel:()=>{h=!0}};return y||d.before_navigate.forEach(w=>w(_)),h?null:m}async function fe({url:s,scroll:i,keepfocus:f,redirect_chain:l,details:h,type:m,delta:_,nav_token:v,accepted:b,blocked:w}){const S=ce(s,!1),R=Fe({url:s,type:m,delta:_,intent:S});if(!R){w();return}Re(A),b(),y=!0,u&&Y.navigating.set(R),await De(S,s,l,{scroll:i,keepfocus:f,details:h},v,()=>{y=!1,d.after_navigate.forEach(B=>B(R)),Y.navigating.set(null)})}async function Ge(s,i,f,l){return s.origin===location.origin&&s.pathname===location.pathname&&!c?await le({status:l,error:f,url:s,route:i}):await ue(s)}function ue(s){return location.href=s.href,new Promise(()=>{})}function nt(){let s;n.addEventListener("mousemove",m=>{const _=m.target;clearTimeout(s),s=setTimeout(()=>{l(_,2)},20)});function i(m){l(m.composedPath()[0],1)}n.addEventListener("mousedown",i),n.addEventListener("touchstart",i,{passive:!0});const f=new IntersectionObserver(m=>{for(const _ of m)_.isIntersecting&&(ie(new URL(_.target.href).pathname),f.unobserve(_.target))},{threshold:0});function l(m,_){const v=He(m,n);if(!v)return;const{url:b,external:w}=Ee(v,e);if(w)return;const S=pe(v);S.reload||(_<=S.preload_data?Te(b):_<=S.preload_code&&ie(b.pathname))}function h(){f.disconnect();for(const m of n.querySelectorAll("a")){const{url:_,external:v}=Ee(m,e);if(v)continue;const b=pe(m);b.reload||(b.preload_code===Ye.viewport&&f.observe(m),b.preload_code===Ye.eager&&ie(_.pathname))}}d.after_navigate.push(h),h()}return{after_navigate:s=>{Oe(()=>(d.after_navigate.push(s),()=>{const i=d.after_navigate.indexOf(s);d.after_navigate.splice(i,1)}))},before_navigate:s=>{Oe(()=>(d.before_navigate.push(s),()=>{const i=d.before_navigate.indexOf(s);d.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(g||!u)&&(p=!1)},goto:(s,i={})=>we(s,i,[]),invalidate:s=>{if(typeof s=="function")o.push(s);else{const{href:i}=new URL(s,location.href);o.push(f=>f.href===i)}return je()},invalidateAll:()=>(E=!0,je()),preload_data:async s=>{const i=new URL(s,ze(document));await Te(i)},preload_code:ie,apply_action:async s=>{if(s.type==="error"){const i=new URL(location.href),{branch:f,route:l}=t;if(!l)return;const h=await Be(t.branch.length,f,l.errors);if(h){const m=await x({url:i,params:t.params,branch:f.slice(0,h.idx).concat(h.node),status:s.status??500,error:s.error,route:l});t=m.state,q.$set(m.props),de().then(Le)}}else if(s.type==="redirect")we(s.location,{invalidateAll:!0},[]);else{const i={form:s.data,page:{...W,form:s.data,status:s.status}};q.$set(i),s.type==="success"&&de().then(Le)}},_start_router:()=>{var s;history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var l;let f=!1;if(!y){const h={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>f=!0};d.before_navigate.forEach(m=>m(h))}f?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Re(A);try{sessionStorage[tt]=JSON.stringify(re)}catch{}}}),(s=navigator.connection)!=null&&s.saveData||nt(),n.addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const f=He(i.composedPath()[0],n);if(!f)return;const{url:l,external:h,has:m}=Ee(f,e),_=pe(f);if(!l||!(f instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:")||m.download)return;if(h||_.reload){Fe({url:l,type:"link"})||i.preventDefault(),y=!0;return}const[b,w]=l.href.split("#");if(w!==void 0&&b===location.href.split("#")[0]){P=!0,Re(A),t.url=l,Y.page.set({...W,url:l}),Y.page.notify();return}fe({url:l,scroll:_.noscroll?he():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),n.addEventListener("submit",i=>{var b;if(i.defaultPrevented)return;const f=HTMLFormElement.prototype.cloneNode.call(i.target),l=i.submitter;if(((l==null?void 0:l.formMethod)||f.method)!=="get")return;const m=new URL(((b=i.submitter)==null?void 0:b.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||f.action);if(We(m,e))return;const{noscroll:_,reload:v}=pe(i.target);v||(i.preventDefault(),i.stopPropagation(),m.search=new URLSearchParams(new FormData(i.target)).toString(),fe({url:m,scroll:_?he():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",i=>{var f;if((f=i.state)!=null&&f[H]){if(i.state[H]===A)return;const l=i.state[H]-A;fe({url:new URL(location.href),scroll:re[i.state[H]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{A=i.state[H]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{P&&(P=!1,history.replaceState({...history.state,[H]:++A},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&Y.navigating.set(null)})},_hydrate:async({status:s=200,error:i,node_ids:f,params:l,route:h,data:m,form:_})=>{c=!0;const v=new URL(location.href);({params:l={},route:h={id:null}}=ce(v,!1)||{});let b;try{const w=f.map(async(S,R)=>{const B=m[R];return ye({loader:_e[S],url:v,params:l,route:h,parent:async()=>{const L={};for(let k=0;k<R;k+=1)Object.assign(L,(await w[k]).data);return L},server_data_node:be(B)})});b=await x({url:v,params:l,branch:await Promise.all(w),status:s,error:i,form:_,route:Se.find(({id:S})=>S===h.id)??null})}catch(w){if(w instanceof xe){await ue(new URL(w.location,location.href));return}b=await le({status:w instanceof Ie?w.status:500,error:await ne(w,{url:v,params:l,route:h}),url:v,route:h})}Ce(b)}}}async function et(a,e){var d;const n=new URL(a);n.pathname=St(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const o=await me(n.href),r=await o.json();if(!o.ok)throw new Error(r);return(d=r.nodes)==null||d.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=an(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),r}function ne(a,e){return a instanceof Ie?a.body:Yt.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Le(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var o;(o=getSelection())==null||o.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function ln({env:a,hydrate:e,paths:n,target:o,version:r}){mt(n),gt(r);const d=rn({target:o,base:n.base});_t({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{ln as start};
