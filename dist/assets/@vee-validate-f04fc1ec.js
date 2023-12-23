/**
  * vee-validate v4.11.7
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */function s(r,t){return Array.isArray(r)?r[0]:r[t]}function e(r){return!!(r==null||r===""||Array.isArray(r)&&r.length===0)}const o=r=>{if(e(r))return!0;const t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return Array.isArray(r)?r.every(n=>t.test(String(n))):t.test(String(r))};function f(r){return r==null}function u(r){return Array.isArray(r)&&r.length===0}const y=(r,t)=>{if(e(r))return!0;const n=s(t,"length");return Array.isArray(r)?r.every(i=>y(i,{length:n})):[...String(r)].length>=Number(n)},A=r=>f(r)||u(r)||r===!1?!1:!!String(r).trim().length;export{o as e,y as m,A as r};
