import{I as r}from"./index-e68fc65b.js";import{q as _,F as x,G as m,H as t,I as e,u as o,L as l}from"./@vue-545ec849.js";const p="/assets/waiting-09954cc4.png",f="/assets/complete-ed6693d7.png",y="/assets/processing2-c265c01c.png",u="/assets/warehouse-6011196d.png",g={class:"grid grid-cols-10 gap-6 my-3"},h={class:"col-span-2 border rounded-xl py-3 px-5 my-3 bg-white h-44 flex flex-col items-center justify-around",style:{"font-family":"'Figtree'"}},w={class:"flex flex-row justify-between w-full items-center"},b={class:"flex flex-col"},v={class:"text-4xl font-bold"},j=t("span",{class:"text-md font-thin",style:{"font-family":"'Jost'"}},"STF Waiting",-1),F=t("img",{class:"w-16 p-4 bg-red-200 rounded-xl",src:p,alt:""},null,-1),S=t("div",{class:"flex flex-row justify-between bg-gray-100 w-full items-center p-3 rounded-xl",style:{"font-family":"'Jost'"}},[t("span",{class:"text-green-500 font-bold text-sm"},[l("15-01-2023 "),t("span",{class:"text-gray-500 font-medium text-md"},"Last Created")])],-1),C={class:"col-span-2 border rounded-xl py-3 px-5 my-3 bg-white h-44 flex flex-col items-center justify-around",style:{"font-family":"'Figtree'"}},J={class:"flex flex-row justify-between w-full items-center"},L={class:"flex flex-col"},T={class:"text-4xl font-bold"},k=t("span",{class:"text-md font-thin",style:{"font-family":"'Jost'"}},"STF Complete",-1),B=t("img",{class:"w-16 p-4 bg-green-200 rounded-xl",src:f,alt:""},null,-1),I=t("div",{class:"flex flex-row justify-between bg-gray-100 w-full items-center p-3 rounded-xl",style:{"font-family":"'Jost'"}},[t("span",{class:"text-green-500 font-bold text-sm"},[l("15-01-2023 "),t("span",{class:"text-gray-500 font-medium text-md"},"Last Created")])],-1),M={class:"col-span-2 border rounded-xl py-3 px-5 my-3 bg-white h-44 flex flex-col items-center justify-around",style:{"font-family":"'Figtree'"}},N={class:"flex flex-row justify-between w-full items-center"},V={class:"flex flex-col"},q={class:"text-4xl font-bold"},D=t("span",{class:"text-md font-thin",style:{"font-family":"'Jost'"}},"Sm Processing",-1),E=t("img",{class:"w-16 p-4 bg-sky-200 rounded-xl",src:y,alt:""},null,-1),G=t("div",{class:"flex flex-row justify-between bg-gray-100 w-full items-center p-3 rounded-xl",style:{"font-family":"'Jost'"}},[t("span",{class:"text-green-500 font-bold text-sm"},[l("15-01-2023 "),t("span",{class:"text-gray-500 font-medium text-md"},"Last Created")])],-1),H={class:"col-span-2 border rounded-xl py-3 px-5 my-3 bg-white h-44 flex flex-col items-center justify-around",style:{"font-family":"'Figtree'"}},P={class:"flex flex-row justify-between w-full items-center"},R={class:"flex flex-col"},W={class:"text-4xl font-bold"},z=t("span",{class:"text-md font-thin",style:{"font-family":"'Jost'"}},"SM Complete",-1),A=t("img",{class:"w-16 p-4 bg-green-200 rounded-xl",src:f,alt:""},null,-1),K=t("div",{class:"flex flex-row justify-between bg-gray-100 w-full items-center p-3 rounded-xl"},[t("span",{class:"text-green-500 font-bold text-sm"},[l("15-01-2023 "),t("span",{class:"text-gray-500 font-medium text-md"},"Last Created")])],-1),O={class:"col-span-2 border rounded-xl py-3 px-5 my-3 bg-white h-44 flex flex-col items-center justify-around",style:{"font-family":"'Figtree'"}},Q={class:"flex flex-row justify-between w-full items-center"},U={class:"flex flex-col"},X={class:"text-4xl font-bold"},Y=t("span",{class:"text-md font-thin",style:{"font-family":"'Jost'"}},"Canceled STF",-1),Z=t("img",{class:"w-16 p-4 bg-orange-200 rounded-xl",src:u,alt:""},null,-1),$=t("div",{class:"flex flex-row justify-between bg-gray-100 w-full items-center p-3 rounded-xl"},[t("span",{class:"text-green-500 font-bold text-sm"},[l("15-01-2023 "),t("span",{class:"text-gray-500 font-medium text-md"},"Last Created")])],-1),nt={__name:"TotalStatistic",setup(tt){const s=r();return _(async()=>{s.statistic_data||await s.fetchStatisticResult()}),(st,et)=>{var n,a,i,c,d;return x(),m("div",g,[t("div",h,[t("div",w,[t("div",b,[t("span",v,e((n=o(s).statistic_data)==null?void 0:n.stf_false),1),j]),F]),S]),t("div",C,[t("div",J,[t("div",L,[t("span",T,e((a=o(s).statistic_data)==null?void 0:a.stf_true),1),k]),B]),I]),t("div",M,[t("div",N,[t("div",V,[t("span",q,e((i=o(s).statistic_data)==null?void 0:i.sm_process),1),D]),E]),G]),t("div",H,[t("div",P,[t("div",R,[t("span",W,e((c=o(s).statistic_data)==null?void 0:c.sm_completed),1),z]),A]),K]),t("div",O,[t("div",Q,[t("div",U,[t("span",X,e((d=o(s).statistic_data)==null?void 0:d.stf_canceled),1),Y]),Z]),$])])}}};export{nt as _};