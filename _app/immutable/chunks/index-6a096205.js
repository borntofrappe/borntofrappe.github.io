function $(){}function J(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function M(){return Object.create(null)}function p(t){t.forEach(B)}function k(t){return typeof t=="function"}function at(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function K(t){return Object.keys(t).length===0}function W(t,...n){if(t==null)return $;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function _t(t,n,e){t.$$.on_destroy.push(W(n,e))}function dt(t,n,e,i){if(t){const r=G(t,n,e,i);return t[0](r)}}function G(t,n,e,i){return t[1]&&i?J(e.ctx.slice(),t[1](i(n))):e.ctx}function ht(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(n.dirty.length,r.length);for(let u=0;u<s;u+=1)o[u]=n.dirty[u]|r[u];return o}return n.dirty|r}return n.dirty}function mt(t,n,e,i,r,o){if(r){const s=G(n,e,i,o);t.p(s,r)}}function pt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let N=!1;function Q(){N=!0}function U(){N=!1}function V(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function X(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<n.length;c++){const a=n[c];a.claim_order!==void 0&&l.push(a)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const c=n[l].claim_order,a=(r>0&&n[e[r]].claim_order<=c?r+1:V(1,r,g=>n[e[g]].claim_order,c))-1;i[l]=e[a]+1;const f=a+1;e[f]=l,r=Math.max(f,r)}const o=[],s=[];let u=n.length-1;for(let l=e[r]+1;l!=0;l=i[l-1]){for(o.push(n[l-1]);u>=l;u--)s.push(n[u]);u--}for(;u>=0;u--)s.push(n[u]);o.reverse(),s.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<s.length;l++){for(;c<o.length&&s[l].claim_order>=o[c].claim_order;)c++;const a=c<o.length?o[c]:null;t.insertBefore(s[l],a)}}function Y(t,n){if(N){for(X(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function Z(t,n,e){t.insertBefore(n,e||null)}function tt(t,n,e){N&&!e?Y(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function gt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function O(t){return document.createElement(t)}function nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function yt(){return E(" ")}function xt(){return E("")}function bt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function et(t){return Array.from(t.childNodes)}function P(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function q(t,n,e,i,r=!1){P(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(n(u)){const l=e(u);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(n(u)){const l=e(u);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function it(t,n,e,i){return q(t,r=>r.nodeName===n,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];e[u.name]||o.push(u.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(n))}function $t(t,n,e){return it(t,n,e,O)}function rt(t,n){return q(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>E(n),!0)}function wt(t){return rt(t," ")}function j(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function Nt(t,n){const e=j(t,"HTML_TAG_START",0),i=j(t,"HTML_TAG_END",e);if(e===i)return new C(void 0,n);P(t);const r=t.splice(e,i-e+1);w(r[0]),w(r[r.length-1]);const o=r.slice(1,r.length-1);for(const s of o)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new C(o,n)}function Tt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function vt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function At(t,n,e){t.classList[e?"add":"remove"](n)}function Et(t,n){const e=[];let i=0;for(const r of n.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,e.push(r)):o===`HEAD_${t}_START`&&(i+=1,e.push(r))}else i>0&&e.push(r);return e}class st{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=nt(e.nodeName):this.e=O(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)Z(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(w)}}class C extends st{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)tt(this.t,this.n[e],n)}}function St(t,n){return new t(n)}let m;function h(t){m=t}function z(){if(!m)throw new Error("Function called outside component initialization");return m}function Ht(t){z().$$.on_mount.push(t)}function Mt(t){z().$$.after_update.push(t)}const d=[],D=[],x=[],L=[],F=Promise.resolve();let v=!1;function R(){v||(v=!0,F.then(I))}function jt(){return R(),F}function A(t){x.push(t)}const T=new Set;let y=0;function I(){const t=m;do{for(;y<d.length;){const n=d[y];y++,h(n),lt(n.$$)}for(h(null),d.length=0,y=0;D.length;)D.pop()();for(let n=0;n<x.length;n+=1){const e=x[n];T.has(e)||(T.add(e),e())}x.length=0}while(d.length);for(;L.length;)L.pop()();v=!1,T.clear(),h(t)}function lt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const b=new Set;let _;function Ct(){_={r:0,c:[],p:_}}function Dt(){_.r||p(_.c),_=_.p}function ct(t,n){t&&t.i&&(b.delete(t),t.i(n))}function Lt(t,n,e,i){if(t&&t.o){if(b.has(t))return;b.add(t),_.c.push(()=>{b.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Bt(t){t&&t.c()}function kt(t,n){t&&t.l(n)}function ot(t,n,e,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(n,e),i||A(()=>{const s=t.$$.on_mount.map(B).filter(k);t.$$.on_destroy?t.$$.on_destroy.push(...s):p(s),t.$$.on_mount=[]}),o.forEach(A)}function ut(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ft(t,n){t.$$.dirty[0]===-1&&(d.push(t),R(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Gt(t,n,e,i,r,o,s,u=[-1]){const l=m;h(t);const c=t.$$={fragment:null,ctx:[],props:o,update:$,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(l?l.$$.context:[])),callbacks:M(),dirty:u,skip_bound:!1,root:n.target||l.$$.root};s&&s(c.root);let a=!1;if(c.ctx=e?e(t,n.props||{},(f,g,...S)=>{const H=S.length?S[0]:g;return c.ctx&&r(c.ctx[f],c.ctx[f]=H)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](H),a&&ft(t,f)),g}):[],c.update(),a=!0,p(c.before_update),c.fragment=i?i(c.ctx):!1,n.target){if(n.hydrate){Q();const f=et(n.target);c.fragment&&c.fragment.l(f),f.forEach(w)}else c.fragment&&c.fragment.c();n.intro&&ct(t.$$.fragment),ot(t,n.target,n.anchor,n.customElement),U(),I()}h(l)}class Ot{$destroy(){ut(this,1),this.$destroy=$}$on(n,e){if(!k(e))return $;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!K(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{jt as A,$ as B,dt as C,At as D,Y as E,mt as F,pt as G,ht as H,_t as I,Et as J,gt as K,C as L,Nt as M,Ot as S,yt as a,tt as b,wt as c,Dt as d,xt as e,ct as f,Ct as g,w as h,Gt as i,Mt as j,O as k,$t as l,et as m,bt as n,Ht as o,vt as p,E as q,rt as r,at as s,Lt as t,Tt as u,St as v,Bt as w,kt as x,ot as y,ut as z};
