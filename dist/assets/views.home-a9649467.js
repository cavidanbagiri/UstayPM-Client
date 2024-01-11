import{_ as v,I as _,U as g,a as w}from"./index-edd40883.js";import{F as e,G as s,W as b,q as h,r as j,z as S,H as t,M as f,u as c,J as m,K as u,O as C,I as d}from"./@vue-545ec849.js";import{B as F}from"./vue-chartjs-0f040a32.js";import{C as $,p as J,a as k,b as T,c as L,d as B,L as I}from"./chart.js-9906c07a.js";import"./socket.io-client-651ff694.js";import"./engine.io-client-86cec14e.js";import"./engine.io-parser-b13552ae.js";import"./@socket.io-3e1df240.js";import"./socket.io-parser-44417fca.js";import"./moment-fbc5633a.js";import"./pinia-f2173f69.js";import"./axios-21b846bc.js";import"./vue-router-27805559.js";import"./vee-validate-e5cd1ca6.js";import"./@vee-validate-f04fc1ec.js";import"./@kurkle-b1b89bbc.js";const D="/assets/waiting-09954cc4.png",y="/assets/complete-ed6693d7.png",N="/assets/processing1-5a9f2410.png",V="/assets/warehouse-6011196d.png",W={},M={class:"grid grid-cols-10 gap-6 my-3"},E=b('<div class="col-span-2 border rounded-xl py-3 px-5 my-3 bg-white h-44 flex flex-col items-center justify-around" style="font-family:&#39;Figtree&#39;;"><div class="flex flex-row justify-between w-full items-center"><div class="flex flex-col"><span class="text-5xl font-bold">15</span><span class="text-md font-thin" style="font-family:&#39;Jost&#39;;">STF Waiting</span></div><img class="w-16 p-4 bg-red-200 rounded-xl" src="'+D+'" alt=""></div><div class="flex flex-row justify-between bg-gray-100 w-full items-center p-3 rounded-xl" style="font-family:&#39;Jost&#39;;"><span class="text-green-500 font-bold text-sm">15-01-2023 <span class="text-gray-500 font-medium text-md">Last Created</span></span></div></div><div class="col-span-2 border rounded-xl py-3 px-5 my-3 bg-white h-44 flex flex-col items-center justify-around" style="font-family:&#39;Figtree&#39;;"><div class="flex flex-row justify-between w-full items-center"><div class="flex flex-col"><span class="text-5xl font-bold">415</span><span class="text-md font-thin" style="font-family:&#39;Jost&#39;;">STF Complete</span></div><img class="w-16 p-4 bg-green-200 rounded-xl" src="'+y+'" alt=""></div><div class="flex flex-row justify-between bg-gray-100 w-full items-center p-3 rounded-xl" style="font-family:&#39;Jost&#39;;"><span class="text-green-500 font-bold text-sm">15-01-2023 <span class="text-gray-500 font-medium text-md">Last Created</span></span></div></div><div class="col-span-2 border rounded-xl py-3 px-5 my-3 bg-white h-44 flex flex-col items-center justify-around" style="font-family:&#39;Figtree&#39;;"><div class="flex flex-row justify-between w-full items-center"><div class="flex flex-col"><span class="text-5xl font-bold">912</span><span class="text-md font-thin" style="font-family:&#39;Jost&#39;;">Sm Processing</span></div><img class="w-16 p-4 bg-sky-200 rounded-xl" src="'+N+'" alt=""></div><div class="flex flex-row justify-between bg-gray-100 w-full items-center p-3 rounded-xl" style="font-family:&#39;Jost&#39;;"><span class="text-green-500 font-bold text-sm">15-01-2023 <span class="text-gray-500 font-medium text-md">Last Created</span></span></div></div><div class="col-span-2 border rounded-xl py-3 px-5 my-3 bg-white h-44 flex flex-col items-center justify-around" style="font-family:&#39;Figtree&#39;;"><div class="flex flex-row justify-between w-full items-center"><div class="flex flex-col"><span class="text-5xl font-bold">1446</span><span class="text-md font-thin" style="font-family:&#39;Jost&#39;;">SM Complete</span></div><img class="w-16 p-4 bg-green-200 rounded-xl" src="'+y+'" alt=""></div><div class="flex flex-row justify-between bg-gray-100 w-full items-center p-3 rounded-xl"><span class="text-green-500 font-bold text-sm">15-01-2023 <span class="text-gray-500 font-medium text-md">Last Created</span></span></div></div><div class="col-span-2 border rounded-xl py-3 px-5 my-3 bg-white h-44 flex flex-col items-center justify-around" style="font-family:&#39;Figtree&#39;;"><div class="flex flex-row justify-between w-full items-center"><div class="flex flex-col"><span class="text-5xl font-bold">511</span><span class="text-md font-thin" style="font-family:&#39;Jost&#39;;">Warehouse Stock</span></div><img class="w-16 p-4 bg-orange-200 rounded-xl" src="'+V+'" alt=""></div><div class="flex flex-row justify-between bg-gray-100 w-full items-center p-3 rounded-xl"><span class="text-green-500 font-bold text-sm">15-01-2023 <span class="text-gray-500 font-medium text-md">Last Created</span></span></div></div>',5),R=[E];function A(x,l){return e(),s("div",M,R)}const G=v(W,[["render",A]]),H={class:"grid grid-cols-12 gap-6 my-3"},O=b('<div class="col-span-4 bg-white rounded-xl flex flex-col items-center justify-between" style="font-family:&#39;Jost&#39;;"><div class="w-full pl-8 border-b py-3 flex justify-between"><span class="text-2xl font-bold" style="font-family:&#39;Roboto&#39;;"> Total STF </span><span class="text-2xl font-bold text-gray-500 pr-4 cursor-pointer"><i class="fa-solid fa-ellipsis fa-xs"></i></span></div><div class="border-[25px] border-violet-600 rounded-full flex justify-center items-center my-5" style="height:calc(50% - 0.59em);width:calc(50% - 0.59em);"><span class="text-5xl font-bold text-violet-700">434</span></div><div class="w-full flex flex-row justify-around my-3"><div class="flex flex-col items-center"><span class="text-xl font-bold text-gray-400">Waiting</span><span class="text-3xl font-bold">15</span></div><div class="flex flex-col items-center"><span class="text-xl font-bold text-gray-400">Complete</span><span class="text-3xl font-bold">415</span></div><div class="flex flex-col items-center"><span class="text-xl font-bold text-gray-400">Canceled</span><span class="text-3xl font-bold">4</span></div></div></div>',1),U={class:"col-span-8 bg-white p-1 rounded-xl flex flex-col items-center justify-around"},q={__name:"STFSMChart",setup(x){$.register(J,k,T,L,B,I);const l=_(),i=g();h(async()=>{var o;await l.groupChartStatisticData((o=i.user)==null?void 0:o.projectId)});const r=j();return S(()=>{const o=[],a=[];for(let p of l==null?void 0:l.group_chart_statistic_data)o.push(p.department_id),a.push(p.stf_count);r.value={labels:o,datasets:[{label:"Group Order Count",data:a,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)","rgba(201, 203, 107, 0.2)","rgba(201, 203, 207, 0.2)"],borderColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)","rgb(201, 203, 207)","rgb(201, 203, 207)","rgb(201, 203, 207)"],borderWidth:1}]}}),(o,a)=>(e(),s("div",H,[O,t("div",U,[f(c(F),{data:r.value},null,8,["data"])])]))}},z={class:"col-span-12 border bg-white p-5 rounded-xl",style:{"font-family":"'Jost'"}},K=t("div",{class:"flex flex-row pb-3 pl-5 border-b-2 justify-between mb-4"},[t("span",{class:"text-2xl font-bold",style:{"font-family":"'Roboto'"}},"Recently Created STF"),t("div",{class:"border p-2 bg-gray-50 hover:cursor-pointer"},[t("button",null,"View All")])],-1),P={class:"overflow-hidden hover:overflow-y-scroll h-[450px]"},Q={key:0,class:"w-full"},X={class:"bg-slate-50 rounded-xl"},Y=t("th",null,"S.No",-1),Z={class:"py-2 font-bold",style:{"font-family":"'Jost'"}},tt={class:"",style:{"font-family":"'Jost'"}},et={class:"py-2 text-start font-medium text-sm"},st={key:0,class:"flex w-full justify-center"},lt={class:"text-center"},at={key:1,class:"flex w-full justify-center"},ot={class:"text-center"},nt={key:2,class:"flex w-full justify-start"},rt={class:"flex items-center"},it=["src"],dt={class:"pl-3"},ct={key:3,class:"pl-2"},ft={__name:"STFTable",setup(x){const l=_(),i=g();return h(async()=>{var r,o;(r=i.user)!=null&&r.projectId&&(await l.fetchSTFData((o=i.user)==null?void 0:o.projectId),l.stf_data_headers.length===0&&await l.getHeaders())}),(r,o)=>(e(),s("div",z,[K,t("div",P,[c(l).stf_data_headers.length?(e(),s("table",Q,[t("thead",X,[Y,(e(!0),s(m,null,u(c(l).stf_data_headers,a=>(e(),s("th",Z,d(a.showname),1))),256))]),(e(!0),s(m,null,u(c(l).stf_data,(a,p)=>(e(),s("tr",tt,[t("th",null,d(p+1),1),(e(!0),s(m,null,u(c(l).stf_data_headers,n=>(e(),s("th",et,[n.name==="amount"||n.name==="unit"?(e(),s("div",st,[t("span",lt,d(a[n.name]),1)])):n.name==="createdAt"?(e(),s("div",at,[t("span",ot,[f(w,{time:a[n.name]},null,8,["time"])])])):n.name==="username"?(e(),s("div",nt,[t("span",rt,[t("img",{class:"ml-2 w-10 h-10 rounded-full",src:a.image_url,alt:""},null,8,it),t("span",dt,d(a[n.name]),1)])])):(e(),s("div",ct,d(a[n.name]),1))]))),256))]))),256))])):C("",!0)])]))}},pt={class:"flex flex-col bg-gray-100"},xt={class:"py-5 px-8 flex flex-col"},mt=t("div",{class:"text-4xl my-1 font-bold",style:{"font-family":"'Figtree'"}},"Dashboard",-1),ut={class:"grid grid-cols-12 my-2 gap-2 mb-5 px-8"},Bt={__name:"views.home",setup(x){return _(),(l,i)=>(e(),s("div",pt,[t("div",xt,[mt,f(G),f(q)]),t("div",null,[t("div",ut,[f(ft)])])]))}};export{Bt as default};
