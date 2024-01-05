import{C as b,B as L,D as M,P as S,a as K}from"./chart.js-ad692ade.js";import{j as D,B as O,p as w,C as R,r as U,q as T,v as $,w as k,t as C,D as B}from"./@vue-545ec849.js";const A={data:{type:Object,required:!0},options:{type:Object,default:()=>({})},plugins:{type:Array,default:()=>[]},datasetIdKey:{type:String,default:"label"},updateMode:{type:String,default:void 0}},z={type:{type:String,required:!0},...A},E=R[0]==="2"?(t,e)=>Object.assign(t,{attrs:e}):(t,e)=>Object.assign(t,e);function c(t){return B(t)?C(t):t}function F(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t;return B(e)?new Proxy(t,{}):t}function G(t,e){const a=t.options;a&&e&&Object.assign(a,e)}function j(t,e){t.labels=e}function q(t,e,a){const o=[];t.datasets=e.map(s=>{const n=t.datasets.find(i=>i[a]===s[a]);return!n||!s.data||o.includes(n)?{...s}:(o.push(n),Object.assign(n,s),n)})}function H(t,e){const a={labels:[],datasets:[]};return j(a,t.labels),q(a,t.datasets,e),a}const J=D({props:z,setup(t,e){let{expose:a}=e;const o=U(null),s=O(null);a({chart:s});const n=()=>{if(!o.value)return;const{type:r,data:f,options:y,plugins:p,datasetIdKey:h}=t,g=H(f,h),u=F(g,f);s.value=new b(o.value,{type:r,data:u,options:{...y},plugins:p})},i=()=>{const r=C(s.value);r&&(r.destroy(),s.value=null)},d=r=>{r.update(t.updateMode)};return T(n),$(i),k([()=>t.options,()=>t.data],(r,f)=>{let[y,p]=r,[h,g]=f;const u=C(s.value);if(!u)return;let v=!1;if(y){const l=c(y),x=c(h);l&&l!==x&&(G(u,l),v=!0)}if(p){const l=c(p.labels),x=c(g.labels),m=c(p.datasets),I=c(g.datasets);l!==x&&(j(u.config.data,l),v=!0),m&&m!==I&&(q(u.config.data,m,t.datasetIdKey),v=!0)}v&&d(u)},{deep:!0}),()=>w("canvas",{ref:o})}});function P(t,e){return b.register(e),D({props:A,setup(a,o){let{expose:s}=o;const n=O(null),i=d=>{n.value=d==null?void 0:d.chart};return s({chart:n}),()=>w(J,E({ref:i},{type:t,...a}))}})}const V=P("bar",L),W=P("doughnut",M),X=P("pie",S),Y=P("polarArea",K);export{V as B,W as D,Y as P,X as a};
