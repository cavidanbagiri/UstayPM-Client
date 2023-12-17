import{I as A,g as M,o as n,c as l,a,t as i,u as v,z as g,F as w,M as b,T as f,a1 as I,r as N,A as p,b as y,_ as E,U as W,S as G,d as R,V as C,N as V,O as H,f as x,H as d,J as P,s as O,K as q,w as Q,a0 as B,y as L,W as S,a2 as K}from"./index-add7107a.js";const J={class:"grid grid-cols-12 gap-4 justify-between sticky bg-white"},X={class:"col-span-2 flex flex-row justify-between border shadow-md w-full p-3 rounded-md hover:shadow-xl hover:cursor-pointer"},Y=g('<div class="flex flex-col justify-between"><span class="text-gray-600 analyz_header"><span class="bg-gray-200 text-gray-500 rounded-full px-2 py-2"><i class="fa-solid fa-clock fa-lg"></i></span> Waiting </span><span class="bg-gray-200 rounded-md text-gray-800 p-2 analyz_get_data text-center">Get Data</span></div>',1),Z={class:"flex items-center"},ee={class:"rounded-full flex border-8 border-gray-600 w-16 h-16 items-center justify-center analyz_show_data"},se={class:"col-span-2 flex flex-row justify-between border shadow-md w-full p-3 rounded-md hover:shadow-xl hover:cursor-pointer"},te=g('<div class="flex flex-col justify-between"><span class="text-gray-600 analyz_header"><span class="bg-red-200 text-red-500 rounded-full px-3 py-2"><i class="fa-regular fa-clipboard fa-lg"></i></span> Completed </span><span class="bg-red-200 rounded-md text-red-800 p-2 analyz_get_data text-center">Get Data</span></div>',1),ae={class:"flex items-center"},oe={class:"rounded-full flex border-8 border-red-500 w-16 h-16 items-center justify-center analyz_show_data"},re={class:"col-span-2 flex flex-row justify-between border w-full p-3 rounded-md shadow-md hover:shadow-xl hover:cursor-pointer"},ne=g('<div class="flex flex-col justify-between"><span class="text-gray-600 analyz_header"><span class="bg-blue-200 text-blue-500 rounded-full px-2 py-2"><i class="fa-solid fa-person-digging fa-lg"></i></span> Processing </span><span class="bg-blue-200 rounded-md text-blue-800 p-2 analyz_get_data text-center">Get Data</span></div>',1),le={class:"flex items-center"},ce={class:"rounded-full flex border-8 border-blue-500 w-16 h-16 items-center justify-center analyz_show_data"},ie={class:"col-span-2 flex flex-row justify-between border w-full p-3 rounded-md shadow-md hover:shadow-xl hover:cursor-pointer"},de=g('<div class="flex flex-col justify-between"><span class="text-gray-600 analyz_header"><span class="bg-green-200 text-green-500 rounded-full px-2 py-2"><i class="fa-solid fa-satellite-dish fa-lg"></i></span> Received </span><span class="bg-green-200 rounded-md text-green-800 p-2 analyz_get_data text-center">Get Data</span></div>',1),_e={class:"flex items-center"},he={class:"rounded-full flex border-8 border-green-500 w-16 h-16 items-center justify-center analyz_show_data"},me={class:"col-span-2 flex flex-row justify-between border w-full p-3 rounded-md shadow-md hover:shadow-xl hover:cursor-pointer"},ue=g('<div class="flex flex-col justify-between"><span class="text-gray-600 analyz_header"><span class="bg-pink-200 text-pink-500 rounded-full px-2 py-2"><i class="fa-solid fa-warehouse fa-lg"></i></span> Warehouse </span><span class="bg-pink-200 rounded-md text-pink-800 p-2 analyz_get_data text-center">Get Data</span></div>',1),pe={class:"flex items-center"},fe={class:"rounded-full flex border-8 border-pink-500 w-16 h-16 items-center justify-center analyz_show_data"},ge=g('<div class="col-span-2 flex flex-row justify-between border shadow-md w-full p-3 rounded-md hover:shadow-xl hover:cursor-pointer"><div class="flex flex-col justify-between"><span class="text-gray-600 analyz_header"><span class="bg-orange-200 text-orange-500 rounded-full px-2 py-2"><i class="fa-solid fa-ban fa-lg"></i></span> Canceled </span><span class="bg-orange-200 rounded-md text-orange-800 p-2 analyz_get_data text-center">Get Data</span></div><div class="flex items-center"><div class="rounded-full flex border-8 border-orange-600 w-16 h-16 items-center justify-center analyz_show_data"> 12 </div></div></div>',1),Xt={__name:"STFStatistics",setup(t){const e=A();return M(async()=>{e.statistic_data||await e.fetchStatisticResult()}),(s,c)=>{var r,o,h,u,_;return n(),l("div",J,[a("div",X,[Y,a("div",Z,[a("div",ee,i((r=v(e).statistic_data)==null?void 0:r.stf_false),1)])]),a("div",se,[te,a("div",ae,[a("div",oe,i((o=v(e).statistic_data)==null?void 0:o.stf_true),1)])]),a("div",re,[ne,a("div",le,[a("div",ce,i((h=v(e).statistic_data)==null?void 0:h.sm_process),1)])]),a("div",ie,[de,a("div",_e,[a("div",he,i((u=v(e).statistic_data)==null?void 0:u.sm_completed),1)])]),a("div",me,[ue,a("div",pe,[a("div",fe,i((_=v(e).statistic_data)==null?void 0:_.warehouse_inform),1)])]),ge])}}},ve={class:"text-gray-100 bg-slate-800 sticky top-48 border-b-4 shadow-md table_header"},ye=a("th",{scope:"col-4",class:"pl-1"},[a("div",{class:"flex flex-col items-center"},[a("i",{class:"fa-solid fa-circle-info fa-xl text-green-500"})])],-1),xe=a("th",{scope:"col-4",class:"px-4"},[a("div",{class:"flex flex-col items-center"},[a("input",{id:"checkbox-all-search",type:"checkbox",class:"checkbox checkbox-xs checkbox-primary"}),a("label",{for:"checkbox-all-search",class:"sr-only"},"checkbox")])],-1),we=a("th",{class:"px-2 py-3 text-center"},[a("div",{class:"flex flex-col font-thin"}," S/S ")],-1),be={scope:"col",class:"px-2 py-1 text-center border font-thin"},$e={key:0,class:"w-20"},ke={key:1,class:"w-26"},Se={key:2,class:"w-32"},Ce={key:3,class:"w-24"},Ee={key:4,class:"w-32"},Fe={key:5,class:"w-24"},Te={key:6,class:"min-w-[600px]"},De={key:7,class:"min-w-[120px]"},Ue={key:8,class:"w-24"},je={key:9,class:"w-96"},Ae={key:10,class:"flex flex-col w-24"},Yt={__name:"TableHeader",props:["table_headers"],setup(t){const e=t;return(s,c)=>(n(),l("thead",ve,[a("tr",null,[ye,xe,we,(n(!0),l(w,null,b(e==null?void 0:e.table_headers,r=>f((n(),l("th",be,[r.name==="situation"?(n(),l("div",$e,i(r.showname),1)):r.name==="stf_num"?(n(),l("div",ke,i(r.showname),1)):r.name==="sm_num"?(n(),l("div",Se,i(r.showname),1)):r.name==="created_at"?(n(),l("div",Ce,i(r.showname),1)):r.name==="approximate_date"?(n(),l("div",Ee,i(r.showname),1)):r.name==="material_type"?(n(),l("div",Fe,i(r.showname),1)):r.name==="material_name"||r.name==="sm_material_name"||r.name==="delivery_material_name"?(n(),l("div",Te,i(r.showname),1)):r.name==="amount"?(n(),l("div",De,i(r.showname),1)):r.name==="field_name"?(n(),l("div",Ue,i(r.showname),1)):r.name==="vendor_name"?(n(),l("div",je,i(r.showname),1)):(n(),l("div",Ae,i(r.showname),1))],512)),[[I,r.value]])),256))])]))}},Ie={class:"px-2 py-2 font-medium text-center",style:{"font-family":"'Poppins', sans-serif"}},Ge={key:0,class:"w-26"},Pe={class:"bg-orange-100 text-orange-500 py-[0.30rem] px-2 rounded-md"},ze={key:1,class:"w-26"},Me={key:0,class:"text-red-500 py-[0.30rem] px-2 rounded-md"},Ne=a("i",{class:"fa-solid fa-xmark text-xl text-bold"},null,-1),We=[Ne],Re={key:1,class:"text-green-500 py-[0.30rem] px-2 rounded-md"},Ve=a("i",{class:"fa-solid fa-check text-xl"},null,-1),He=[Ve],Oe={key:2,class:"w-24"},qe={key:0,class:"bg-violet-100 text-violet-500 py-[0.30rem] px-2 rounded-md"},Qe={key:3,class:"w-26 text-center"},Be={key:4,class:"w-26 text-center"},Le={key:5,class:"w-26 text-center"},Ke={key:6,class:"w-20 text-start"},Je={key:0},Xe={class:"bg-blue-100 w-full text-blue-500 py-[0.30rem] px-2 rounded-md"},Ye={key:1},Ze={class:"bg-green-100 w-full text-green-500 py-[0.30rem] px-2 rounded-md"},es={key:7,class:"text-start w-24"},ss={key:8,class:"text-start min-w-[600px]"},ts={class:""},as={key:9,class:"text-start w-24"},os={key:10,class:"text-start"},rs={key:11,class:"text-center"},ns={key:12,class:"text-center"},ls={key:0},cs=a("i",{class:"fa-solid fa-check fa-2xl text-green-600"},null,-1),is=[cs],ds={key:1},_s=a("i",{class:"fa-solid fa-xmark fa-2xl text-red-600"},null,-1),hs=[_s],ms={key:13},us={class:""},Zt={__name:"TableRow",props:["table_headers","each"],setup(t){const e=t;return(s,c)=>{const r=N("DateFormat");return n(!0),l(w,null,b(e==null?void 0:e.table_headers,o=>f((n(),l("th",Ie,[o.name==="stf_num"?(n(),l("div",Ge,[a("span",Pe,i(e.each[o.name]),1)])):o.name==="completed"?(n(),l("div",ze,[e.each[o.name]===!1?(n(),l("span",Me,We)):p("",!0),e.each[o.name]===!0?(n(),l("span",Re,He)):p("",!0)])):o.name==="sm_num"?(n(),l("div",Oe,[e.each[o.name]?(n(),l("span",qe,i(e.each[o.name]),1)):p("",!0)])):o.name==="createdAt"?(n(),l("div",Qe,[y(r,{time:e.each[o.name]},null,8,["time"])])):o.name==="approximate_date"?(n(),l("div",Be,[y(r,{time:e.each[o.name]},null,8,["time"])])):o.name==="provided_date"?(n(),l("div",Le,[y(r,{time:e.each[o.name]},null,8,["time"])])):o.name==="situation"?(n(),l("div",Ke,[e.each[o.name]==="Processing"?(n(),l("div",Je,[a("span",Xe," ●"+i(e.each.situation),1)])):e.each[o.name]==="Completed"?(n(),l("div",Ye,[a("span",Ze," ●"+i(e.each.situation),1)])):p("",!0)])):o.name==="material_type"?(n(),l("div",es,[a("span",null,i(e.each[o.name]),1)])):o.name==="material_name"||o.name==="sm_material_name"||o.name==="delivery_material_name"?(n(),l("div",ss,[a("span",ts,i(e.each[o.name]),1)])):o.name==="field_name"?(n(),l("div",as,[a("span",null,i(e.each[o.name]),1)])):o.name==="vendor_name"?(n(),l("div",os,[a("span",null,i(e.each[o.name]),1)])):o.name==="username"?(n(),l("div",rs,[a("span",null,i(e.each[o.name]),1)])):o.name==="passport"||o.name==="certificate"?(n(),l("div",ns,[e.each[o.name]===!0?(n(),l("span",ls,is)):(n(),l("span",ds,hs))])):(n(),l("div",ms,[a("span",us,i(e.each[o.name]),1)]))],512)),[[I,o.value]])),256)}}};const $=t=>(V("data-v-9e16ec66"),t=t(),H(),t),ps={key:0,class:"border flex flex-col bg-white absolute top-5 left-5 shadow-2xl p-2 px-4 rounded-2xl w-80"},fs=$(()=>a("i",{class:"fa-solid fa-xmark text-gray-400 hover:text-black"},null,-1)),gs=[fs],vs={class:"flex my-2 font-bold w-full text-lg"},ys={key:0,class:"px-2 text-green-500 bg-green-100 w-full rounded-lg"},xs={key:1,class:"px-2 text-red-500 bg-red-100 w-full rounded-lg"},ws=$(()=>a("i",{class:"fa-brands fa-joget px-1 text-gray-500"},null,-1)),bs=g('<span class="py-2 text-gray-900 row_item" data-v-9e16ec66><i class="fa-regular fa-circle-question px-1 text-gray-500" data-v-9e16ec66></i> Get SM Information</span><span class="py-2 text-gray-900 row_item" data-v-9e16ec66><i class="fa-regular fa-eye-slash px-1 text-gray-500" data-v-9e16ec66></i> Set Hide</span><span class="py-2 text-gray-900 row_item" data-v-9e16ec66><i class="fa-regular fa-star px-1 text-gray-500" data-v-9e16ec66></i> Set Star</span><span class="py-2 text-gray-900 row_item" data-v-9e16ec66><i class="fa-regular fa-pen-to-square px-1 text-gray-500" data-v-9e16ec66></i> Update Row</span><span class="py-2 text-gray-900 row_item" data-v-9e16ec66><i class="fa-regular fa-trash-can px-1 text-gray-500" data-v-9e16ec66></i> Remove Row</span>',5),$s={class:"my-3 flex flex-col justify-between"},ks=$(()=>a("span",{class:"p-1 hover:bg-none text-lg"}," Change STF Status",-1)),Ss={class:"text-lg px-1"},Cs=$(()=>a("option",{class:"my-2 py-2 text-lg",value:"false"},"Wait",-1)),Es=$(()=>a("option",{class:"my-2 py-2 text-lg",value:"true"},"Complete",-1)),Fs=[Cs,Es],Ts={__name:"STFInformComp",props:["cond","each"],emits:["closeInform"],setup(t,{emit:e}){var m,F;const s=t,c=A(),r=W(),o=()=>{e("closeInform")},h=()=>{var k;c.fetchSTFRowInform((k=s==null?void 0:s.each)==null?void 0:k.stf_id),c.row_inform_condition=!0},u=G({stf_id:(m=s==null?void 0:s.each)==null?void 0:m.stf_id,completed:(F=s==null?void 0:s.each)==null?void 0:F.completed,user:r.user.id}),_=async()=>{r.user&&r.user.departmentId===2?await c.setStfStatus(u).then(k=>{u.completed==="true"?(console.log("if work"),s.each.completed=!0):(console.log("else work"),s.each.completed=!1),e("closeInform")}):console.log("Authorization Error ")};return(k,T)=>{var D,U,j;return s.cond?(n(),l("div",ps,[a("div",{class:"flex justify-end items-center"},[a("span",{class:"text-xl",onClick:o},gs)]),a("div",vs,[(D=s==null?void 0:s.each)!=null&&D.completed?(n(),l("span",ys," Completed : "+i((U=s==null?void 0:s.each)==null?void 0:U.completed),1)):(n(),l("span",xs," Completed : "+i((j=s==null?void 0:s.each)==null?void 0:j.completed),1))]),a("div",{class:"flex flex-col"},[a("span",{onClick:h,class:"py-2 text-gray-900 row_item"},[ws,R(" Get STF Information")]),bs]),a("div",$s,[ks,a("div",Ss,[f(a("select",{class:"select select-bordered w-full max-w-xs","onUpdate:modelValue":T[0]||(T[0]=z=>u.completed=z),onChange:_},Fs,544),[[C,u.completed]])])])])):p("",!0)}}},Ds=E(Ts,[["__scopeId","data-v-9e16ec66"]]),Us={class:"hover:text-blue-400 p-1 relative"},js={class:"flex items-center justify-center"},As=a("i",{class:"fa-solid fa-ellipsis-vertical fa-2xl text-green-500"},null,-1),Is=[As],ea={__name:"TableRowInform",props:["each"],setup(t){const e=t,s=x(!1),c=async()=>{s.value=!0},r=()=>{s.value=!1};return(o,h)=>(n(),l("td",Us,[a("div",js,[a("span",{onClick:c},Is),y(Ds,{cond:s.value,each:e==null?void 0:e.each,onCloseInform:r},null,8,["cond","each"])])]))}};d.defaults.withCredentials=!0;const sa=P("ProcurementStore",{state:()=>({tab_num:0,checked_values:[],companies_names:[],procurement_users_names:[],creating_STF_datas:[],after_created:!1,all_stf:[],all_sms:[],stf_table_headers:[],sm_table_headers:[],toggle_createsm:!1,created_stf_username:[],warehouse_data:[],warehouse_headers:[],warehouse_selecting_rows:[],filtered_vendor_names:[]}),getters:{GETCHECKEDVALUES:t=>t.checked_values,GETCOMPANIESNAMES:t=>t.companies_names,GETPROCUREMENTUSERSNAMES:t=>t.procurement_users_names,GETCREATINGSTFDATA:t=>t.creating_STF_datas,GETWAREHOUSEHEADERS:t=>t.warehouse_headers},actions:{async createSM(t){try{await d.post("https://ustaypm-server.onrender.com/procurement/createsm",t).then(e=>e)}catch(e){return e}},async fetchSTF(){try{await d.get("https://ustaypm-server.onrender.com/procurement/fetchstf").then(t=>{this.all_stf=t.data}).catch(t=>{console.log("all stf Error : ",t)})}catch(t){console.log("Fetch All STF Error : ",t)}},async getFilteredDataSTF(t){const e=this.createUrlQuery(t);try{await d.get(`https://ustaypm-server.onrender.com/common/filterstf${e}`).then(s=>{this.all_stf=s.data}).catch(s=>{console.log("Error Is : ",s)})}catch(s){console.log("Get Filtered Data Error : ",s)}},async getSTFHeaders(){var t;if(this.all_stf.length){for(let[e,s]of Object.entries(this.all_stf[0])){const c=e.slice(e.length-2,e.length);if(e!=="id"&&c!=="id"&&c!=="Id"){let r={},o=e.charAt(0).toUpperCase()+e.slice(1);o=o.split("_").join(" "),e==="completed"||e==="stf_num"||e==="sm_num"||e==="createdAt"||e==="situation"||e==="material_type"||e==="material_name"||e==="amount"||e==="unit"||e==="username"?(r.showname=`${o}`,r.name=`${e}`,r.value=!0):(r.showname=`${o}`,r.name=`${e}`,r.value=!1),this.stf_table_headers.push(r)}}for(let e=0;e<((t=this.all_stf_headers)==null?void 0:t.length);e++){if(this.all_stf_headers[e].name==="completed"){let s=this.all_stf_headers[0];this.all_stf_headers[0]=this.all_stf_headers[e],this.all_stf_headers[e]=s}if(this.all_stf_headers[e].name==="stf_num"){let s=this.all_stf_headers[1];this.all_stf_headers[1]=this.all_stf_headers[e],this.all_stf_headers[e]=s}if(this.all_stf_headers[e].name==="sm_num"){let s=this.all_stf_headers[2];this.all_stf_headers[2]=this.all_stf_headers[e],this.all_stf_headers[e]=s}if(this.all_stf_headers[e].name==="situation"){let s=this.all_stf_headers[3];this.all_stf_headers[3]=this.all_stf_headers[e],this.all_stf_headers[e]=s}}}},async fetchAllSM(t){if(t)try{await d.get(`https://ustaypm-server.onrender.com/procurement/fetchsm/${t}`).then(e=>{this.all_sms=e.data}).catch(e=>{console.log("all stf Error : ",e)})}catch(e){console.log("Fetch ALl SM Error : ",e)}},async getFilteredDataSM(t){const e=this.createUrlQuery(t);try{await d.get(`
                https://ustaypm-server.onrender.com/common/filtersm${e}
            `).then(s=>{this.all_sms=s.data}).catch(s=>{console.log("Error Is : ",s)})}catch(s){console.log("Get Filtered Data Error : ",s)}},async getSMHeaders(){var t;if(this.all_sms.length){for(let[e,s]of Object.entries(this.all_sms[0])){const c=e.slice(e.length-2,e.length);if(e!=="id"&&c!=="id"&&c!=="Id"){let r={},o=e.charAt(0).toUpperCase()+e.slice(1);o=o.split("_").join(" "),e==="stf_num"||e==="sm_num"||e==="created_at"||e==="situation"||e==="sm_material_name"||e==="amount"||e==="unit"||e==="sm_num"||e==="price"||e==="total"||e==="currency"||e==="left_over"||e==="supplier"||e==="vendor_name"||e==="username"||e==="orderer"?(r.showname=`${o}`,r.name=`${e}`,r.value=!0):(r.showname=`${o}`,r.name=`${e}`,r.value=!1),this.sm_table_headers.push(r)}}for(let e=0;e<((t=this.sm_table_headers)==null?void 0:t.length);e++){if(this.sm_table_headers[e].name==="stf_num"){let s=this.sm_table_headers[0];this.sm_table_headers[0]=this.sm_table_headers[e],this.sm_table_headers[e]=s}if(this.sm_table_headers[e].name==="sm_num"){let s=this.sm_table_headers[1];this.sm_table_headers[1]=this.sm_table_headers[e],this.sm_table_headers[e]=s}if(this.sm_table_headers[e].name==="situation"){let s=this.sm_table_headers[2];this.sm_table_headers[2]=this.sm_table_headers[e],this.sm_table_headers[e]=s}}}},async getCompaniesNames(){try{await d.get("https://ustaypm-server.onrender.com/common/fetchcompanies").then(t=>{this.companies_names=t.data,this.filtered_vendor_names=t.data}).catch(t=>{console.log("Getting Companies Names Errors : ",t)})}catch(t){console.log("Get Companies Name Error : ",t)}},async filterVendorName(t){if(t.toString().trim()==="")this.filtered_vendor_names=this.companies_names;else try{await d.get(`
                  https://ustaypm-server.onrender.com/common/filtervendornames?selected_text=${t}
              `).then(e=>{this.filtered_vendor_names=e.data}).catch(e=>{console.log("Error Is : ",e)})}catch(e){console.log("Get Filtered Data Error : ",e)}},async getProcurementUsersNames(){try{await d.get("https://ustaypm-server.onrender.com/common/procurementusers").then(t=>{this.procurement_users_names=t.data}).catch(t=>{console.log("Get Users Names Errors : ",t)})}catch(t){console.log("Get Procurement Users Error : ",t)}},async fetchSTFCreateUsernames(){try{await d.get("https://ustaypm-server.onrender.com/common/createdstfusers").then(t=>{this.created_stf_username=t.data}).catch(t=>{console.log("Get Users Names Errors : ",t)})}catch(t){console.log("Get Procurement Users Error : ",t)}},async fetchWarehouseData(){try{await d.get("https://ustaypm-server.onrender.com/warehouse").then(t=>{this.warehouse_data=t.data}).catch(t=>{console.log("Fetch User Catch Error : ",t)})}catch(t){return console.log("Fetch User STF Error : ",t),t}},async getWarehouseHeaders(){var t;if(((t=this.warehouse_data)==null?void 0:t.length)>1)for(let[e,s]of Object.entries(this==null?void 0:this.warehouse_data[0])){const c=e.slice(e.length-2,e.length);if(e!=="id"&&c!=="id"&&c!=="Id"){let r={},o=e.charAt(0).toUpperCase()+e.slice(1);o=o.split("_").join(" "),e==="stf_num"||e==="sm_num"||e==="material_name"||e==="amount"||e==="unit"||e==="vendor_name"||e==="stock"||e==="certificate"||e==="passport"||e==="field"?(r.showname=`${o}`,r.name=`${e}`,r.value=!0):(r.showname=`${o}`,r.name=`${e}`,r.value=!1),this.warehouse_headers.push(r)}}},async getFilteredWarehouseData(t){const e=this.createUrlQuery(t);try{await d.get(`
                https://ustaypm-server.onrender.com/common/filterwarehouse${e}
            `).then(s=>{this.warehouse_data=s.data}).catch(s=>{console.log("Error Is : ",s)})}catch(s){console.log("Get Filtered Data Error : ",s)}},createUrlQuery(t){let e="";for(let[s,c]of Object.entries(t))e===""&&(e+="?"),t[s],e+=`${s}=${t[s]}`,e+="&";return e=e.slice(0,-1),e}}}),Gs={class:"flex flex-col border shadow-xl p-2 absolute w-96 h-96 top-14 right-0 bg-white overflow-hidden overflow-y-scroll"},Ps=a("div",{class:"mt-12 sticky top-10"},[a("input",{class:"border-2 border-indigo-600 my-2 w-full p-2 rounded-lg text-sm outline-none",type:"text",name:"",id:"",placeholder:"Column Name...",style:{"font-style":"italic"}})],-1),zs={class:""},Ms={class:"flex flex-row items-center hover:bg-gray-100 p-2 rounded-md text-xs"},Ns=["checked","onChange"],Ws=["for"],ta={__name:"TableExpand",props:["table_headers"],setup(t){const e=t,s=c=>{c.value=!c.value};return(c,r)=>(n(),l("div",Gs,[Ps,a("ul",zs,[(n(!0),l(w,null,b(e==null?void 0:e.table_headers,o=>(n(),l("li",null,[a("div",Ms,[a("input",{type:"checkbox",name:"",checked:o.value,onChange:h=>s(o),class:"checkbox checkbox-xs checkbox-primary"},null,40,Ns),a("label",{for:o.name,class:"ml-2"},i(o.showname),9,Ws)])]))),256))])]))}};const Rs={class:"fixed right-0 top-0 z-50"},Vs={class:"animate-bounce mt-4 p-3 bg-green-500 rounded-full hover:bg-green-400"},Hs=g('<div class="my-3 px-3" data-v-7b7b4916><i class="cursor-pointer hover:text-gray-300 fa-solid fa-gear fa-lg text-gray-100" data-v-7b7b4916></i></div><div class="my-3 px-3" data-v-7b7b4916><i class="cursor-pointer hover:text-gray-300 fa-solid fa-chart-column fa-lg text-gray-100" data-v-7b7b4916></i></div><div class="my-3 px-3" data-v-7b7b4916><i class="cursor-pointer hover:text-gray-300 fa-solid fa-file-csv fa-lg text-gray-100" data-v-7b7b4916></i></div><div class="my-3 px-3" data-v-7b7b4916><i class="cursor-pointer hover:text-gray-300 fa-regular fa-star fa-lg text-gray-100" data-v-7b7b4916></i></div><div class="my-3 px-3" data-v-7b7b4916><i class="cursor-pointer hover:text-gray-300 fa-solid fa-ban fa-lg text-gray-100" data-v-7b7b4916></i></div><div class="my-3 px-3" data-v-7b7b4916><i class="cursor-pointer hover:text-gray-300 fa-solid fa-filter fa-lg text-gray-100" data-v-7b7b4916></i></div><div class="my-3 px-3" data-v-7b7b4916><i class="cursor-pointer hover:text-gray-300 fa-solid fa-plus fa-lg text-gray-100" data-v-7b7b4916></i></div><div class="my-3 px-3" data-v-7b7b4916><i class="cursor-pointer hover:text-gray-300 fa-solid fa-file-zipper fa-lg text-gray-100" data-v-7b7b4916></i></div>',8),Os=[Hs],qs={__name:"TableCommonComp",setup(t){const e=O(!1),s=x(!0),c=()=>{s.value=!0,e.value=!0},r=()=>{s.value=!1,setTimeout(()=>{e.value=!1},500)};return(o,h)=>(n(),l("div",Rs,[a("div",Vs,[e.value?p("",!0):(n(),l("i",{key:0,onClick:c,class:"cursor-pointer fa-solid fa-plus fa-2xl text-gray-100"})),e.value?(n(),l("i",{key:1,onClick:r,class:"cursor-pointer fa-solid fa-minus fa-2xl text-gray-100"})):p("",!0)]),e.value?(n(),l("div",{key:0,class:q([s.value?"anim-open":"anim-close","bg-blue-600 py-2 rounded-2xl flex flex-col items-center"])},Os,2)):p("",!0)]))}},aa=E(qs,[["__scopeId","data-v-7b7b4916"]]);const Qs={key:0,class:"fixed top-32 left-1/3 w-1/3 p-1 rounded-lg text-black shadow-xl font-bold border-4 bg-gray-100 flex items-center justify-center anim"},Bs={class:"text-xl",style:{"font-family":"'Roboto', sans-serif"}},Ls={__name:"Toast",props:["cond","messages"],setup(t){const e=t;return(s,c)=>e.cond?(n(),l("div",Qs,[a("div",null,[a("span",Bs,i(e.messages),1)])])):p("",!0)}},oa=E(Ls,[["__scopeId","data-v-22f64384"]]);d.defaults.withCredentials=!0;const Ks=P("WarehouseStore",{state:()=>({tab_num:0,processing_sms:[],processing_sm_headers:[],processing_checked_values:[],toggle_accept_sm:!1,accepted_condition:!0,after_created:!1,after_provide:!1,warehouse_data:[],warehouse_data_headers:[],provides_data:[],provided_data_headers:[],warehouse_data_checked_values:[],warehouse_data_stock_cond:!0,departments:[],delivery_types:[],companies_names:[],created_stf_username:[]}),actions:{async getProcessingSMS(t){if(t)try{await d.get(`https://ustaypm-server.onrender.com/procurement/fetchsm/${t}`).then(e=>{this.processing_sms=e.data}).catch(e=>{console.log("Get Warehouse Waiting Error : ",e)})}catch{console.log("Error Happen For Fetching Warehouse Procesing Data")}},async getFilteredDataProcessingSM(t){const e=this.createUrlQuery(t);try{await d.get(`
                https://ustaypm-server.onrender.com/common/filtersm${e}
            `).then(s=>{this.processing_sms=s.data}).catch(s=>{console.log("Error Is : ",s)})}catch(s){console.log("Get Filtered Data Error : ",s)}},async getProcessingSMHeaders(){var t,e;if((t=this.processing_sms)!=null&&t.length){for(let[s,c]of Object.entries(this==null?void 0:this.processing_sms[0])){const r=s.slice(s.length-2,s.length);if(s!=="id"&&r!=="id"&&r!=="Id"){let o={},h=s.charAt(0).toUpperCase()+s.slice(1);h=h.split("_").join(" "),s==="stf_num"||s==="sm_num"||s==="created_at"||s==="situation"||s==="sm_material_name"||s==="amount"||s==="unit"||s==="sm_num"||s==="price"||s==="total"||s==="currency"||s==="supplier"||s==="vendor_name"||s==="left_over"||s==="username"||s==="orderer"||s==="left_over_amount"?(o.showname=`${h}`,o.name=`${s}`,o.value=!0):(o.showname=`${h}`,o.name=`${s}`,o.value=!1),this.processing_sm_headers.push(o)}}for(let s=0;s<((e=this.processing_sm_headers)==null?void 0:e.length);s++){if(this.processing_sm_headers[s].name==="stf_num"){let c=this.processing_sm_headers[0];this.processing_sm_headers[0]=this.processing_sm_headers[s],this.processing_sm_headers[s]=c}if(this.processing_sm_headers[s].name==="sm_num"){let c=this.processing_sm_headers[1];this.processing_sm_headers[1]=this.processing_sm_headers[s],this.processing_sm_headers[s]=c}if(this.processing_sm_headers[s].name==="situation"){let c=this.processing_sm_headers[2];this.processing_sm_headers[2]=this.processing_sm_headers[s],this.processing_sm_headers[s]=c}}}},async acceptWaitingSM(t){try{await d.post("https://ustaypm-server.onrender.com/warehouse/accept",t).then(e=>{this.accepted_sms=e}).catch(e=>{console.log("Accepted Materials Error From Warehouse Store : ",e)})}catch(e){console.log("Received accept Waiting SM Error : ",e)}},async fetchWarehouseData(){await d.get("https://ustaypm-server.onrender.com/warehouse").then(t=>{this.warehouse_data=t.data}).catch(t=>{console.log("Received Items Error : ",t)})},async getFilteredDataWarehouse(t){const e=this.createUrlQuery(t);try{await d.get(`
                https://ustaypm-server.onrender.com/common/filterwarehouse${e}
            `).then(s=>{this.warehouse_data=s.data}).catch(s=>{console.log("Error Is : ",s)})}catch(s){console.log("Get Filtered Data Error : ",s)}},async getWarehouseDataHeaders(){var t,e;if((t=this.warehouse_data)!=null&&t.length){for(let[s,c]of Object.entries(this.warehouse_data[0]))if(s!=="id"&&s.slice(-2)!=="id"){let r={},o=s.charAt(0).toUpperCase()+s.slice(1);o=o.split("_").join(" "),s==="stf_num"||s==="sm_num"||s==="created_at"||s==="situation"||s==="material_name"||s==="amount"||s==="stock"||s==="unit"||s==="username"||s==="orderer"||s==="delivery_amount"?(r.showname=`${o}`,r.name=`${s}`,r.value=!0):(r.showname=`${o}`,r.name=`${s}`,r.value=!1),this.warehouse_data_headers.push(r)}for(let s=0;s<((e=this.warehouse_data_headers)==null?void 0:e.length);s++){if(this.warehouse_data_headers[s].name==="stf_num"){let c=this.warehouse_data_headers[0];this.warehouse_data_headers[0]=this.warehouse_data_headers[s],this.warehouse_data_headers[s]=c}if(this.warehouse_data_headers[s].name==="sm_num"){let c=this.warehouse_data_headers[1];this.warehouse_data_headers[1]=this.warehouse_data_headers[s],this.warehouse_data_headers[s]=c}if(this.warehouse_data_headers[s].name==="situation"){let c=this.warehouse_data_headers[2];this.warehouse_data_headers[2]=this.warehouse_data_headers[s],this.warehouse_data_headers[s]=c}}}},async fetchProvidedData(){await d.get("https://ustaypm-server.onrender.com/provides").then(t=>{this.provides_data=t.data,console.log("Get Provide Data and result is : ",this.provides_data)}).catch(t=>{console.log("Provied Items Error : ",t)})},async getFilteredDataProvided(t){const e=this.createUrlQuery(t);console.log("store is working");try{await d.get(`
                https://ustaypm-server.onrender.com/common/filterprovided${e}
            `).then(s=>{this.provides_data=s.data}).catch(s=>{console.log("Error Is : ",s)})}catch(s){console.log("Get Filtered Data Error : ",s)}},async getProvidedDataHeaders(){var t;if((t=this.provides_data)!=null&&t.length){for(let[e,s]of Object.entries(this.provides_data[0]))if(e!=="id"){let c={},r=e.charAt(0).toUpperCase()+e.slice(1);r=r.split("_").join(" "),e==="sm_num"||e==="provided_date"||e==="material_name"||e==="amount"||e==="unit"||e==="serial_no"||e==="unique_id"||e==="deliver_to"||e==="card_number"?(c.showname=`${r}`,c.name=`${e}`,c.value=!0):(c.showname=`${r}`,c.name=`${e}`,c.value=!1),this.provided_data_headers.push(c)}console.log("provided data geaders : ",this.provided_data_headers)}},async provideSM(t){try{await d.post("https://ustaypm-server.onrender.com/warehouse/provide",t).then(e=>{console.log("provide respond : ",e)}).catch(e=>{console.log("Provide Materials Error From Warehouse Store : ",e)})}catch(e){console.log("Provide  SM Error : ",e)}},async fetchDepartments(){try{await d.get("https://ustaypm-server.onrender.com/common/fetchdepartments").then(t=>{this.departments=t.data}).catch(t=>{console.log("Fetch Departments Error : ",t)})}catch(t){console.log("Fetch Departments Error : ",t)}},async getCompaniesNames(){try{await d.get("https://ustaypm-server.onrender.com/common/fetchcompanies").then(t=>{this.companies_names=t.data}).catch(t=>{console.log("Getting Companies Names Errors : ",t)})}catch(t){console.log("Get Companies Name Error : ",t)}},async fetchSTFCreateUsernames(){try{await d.get("https://ustaypm-server.onrender.com/common/createdstfusers").then(t=>{this.created_stf_username=t.data}).catch(t=>{console.log("Get Users Names Errors : ",t)})}catch(t){console.log("Get Procurement Users Error : ",t)}},async fetchWarehouseDeliveryTypes(){try{await d.get("https://ustaypm-server.onrender.com/warehouse/deliverytypes").then(t=>{this.delivery_types=t.data}).catch(t=>{console.log("Fetch Departments Error : ",t)})}catch(t){console.log("Fetch Departments Error : ",t)}},createUrlQuery(t){let e="";for(let[s,c]of Object.entries(t))e===""&&(e+="?"),t[s],e+=`${s}=${t[s]}`,e+="&";return e=e.slice(0,-1),e}}}),Js={class:"flex flex-col m-1 relative justify-start items-start"},Xs=a("span",{class:"m-1"},"Search Vendor Name",-1),Ys={class:"p-0 flex items-start"},Zs={key:0,class:"flex flex-col bg-white border rounded-xl shadow-2xl absolute top-10 right-10 p-0 min-w-[700px] max-h-[600px] overflow-auto"},et=a("span",{class:"font-bold text-2xl",style:{"font-family":"'Poppins', sans-serif"}},"Companies",-1),st=a("i",{class:"fa-solid fa-xmark"},null,-1),tt=[st],at=a("div",{class:"sticky top-[36px] p-2 bg-white"},[a("input",{class:"border-2 border-indigo-600 my-2 w-full p-2 rounded-lg text-sm outline-none",type:"text",name:"",id:"",placeholder:"Company Name...",style:{}})],-1),ot={class:"text-lg",style:{"font-family":"'Poppins', sans-serif"}},rt=a("span",{style:{"font-family":"'Poppins', sans-serif"},class:"text-lg"}," -- All -- ",-1),nt=[rt],lt=["onClick"],ct={__name:"VendorNames",props:["companies_list"],emits:["selectedComp"],setup(t,{emit:e}){const s=x(!1),c=o=>{s.value=!1,e("selectedComp",o)},r=()=>{s.value=!1};return(o,h)=>(n(),l("div",Js,[Xs,a("div",Ys,[a("button",{class:"border border-blue-300 py-2 rounded-lg text-sm px-3",onClick:h[0]||(h[0]=u=>s.value=!s.value)}," Select Vendor ")]),y(B,{name:"show"},{default:Q(()=>[s.value?(n(),l("div",Zs,[a("div",{class:"sticky top-0 bg-white p-2 height-[30px]"},[a("div",{class:"flex justify-between text-gray-600"},[et,a("button",{onClick:r,class:"font-bold text-lg hover:bg-gray-100 py-1 px-2 rounded-md"},tt)])]),at,a("ul",ot,[a("li",{onClick:h[1]||(h[1]=u=>c("All")),class:"m-1 p-1 px-2 hover:bg-gray-100 cursor-pointer rounded-md"},nt),(n(!0),l(w,null,b(t.companies_list,u=>(n(),l("li",{onClick:_=>c(u),style:{"font-family":"'Poppins', sans-serif"},class:"m-1 p-1 px-2 hover:bg-gray-100 cursor-pointer rounded-md"},i(u.vendor_name),9,lt))),256))])])):p("",!0)]),_:1})]))}},it={class:"mtf-anim z-70",style:{"letter-spacing":"1px","font-size":"x-small"}},dt={class:"relative flex flex-row items-center justify-between filter_headers"},_t={class:"flex flex-row start"},ht={class:"flex flex-col my-1 mr-3",style:{"font-size":"x-small"}},mt=a("span",{class:"m-1"},"Date Order",-1),ut=a("option",{value:"Descending"},"Descendig",-1),pt=a("option",null,"Ascending",-1),ft=[ut,pt],gt={class:"flex flex-col m-1"},vt=a("span",{class:"m-1"},"Search Date",-1),yt={class:"flex flex-col m-1"},xt=a("span",{class:"m-1"},"Search Type",-1),wt=a("option",null,"All",-1),bt=a("option",null,"Project",-1),$t=a("option",null,"Consumables",-1),kt=a("option",null,"Fixture",-1),St=[wt,bt,$t,kt],Ct={class:"flex flex-col m-1"},Et=a("span",{class:"m-1"},"Search STF",-1),Ft=a("label",{for:"search",class:"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"},"Search",-1),Tt={class:"relative"},Dt=a("div",{class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[a("svg",{"aria-hidden":"true",class:"w-4 h-4 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])],-1),Ut={class:"flex flex-col m-1"},jt=a("span",{class:"m-1"},"Search SM",-1),At=a("label",{for:"search",class:"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"},"Search",-1),It={class:"relative"},Gt=a("div",{class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[a("svg",{"aria-hidden":"true",class:"w-4 h-4 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])],-1),Pt={class:"flex flex-col m-1"},zt=a("span",{class:"m-1"},"Search Username",-1),Mt=a("option",{value:"All",style:{"font-family":"'Poppins', sans-serif"},class:"text-lg"},"-- All --",-1),Nt=["value"],Wt={class:"flex flex-row justify-end"},Rt={class:"flex flex-col m-1 items-start"},Vt=a("span",{class:"m-1"},"Search Type",-1),Ht=a("label",{for:"search",class:"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"},"Search",-1),Ot={class:"relative w-96"},qt=a("div",{class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none w-96"},[a("svg",{"aria-hidden":"true",class:"w-4 h-4 text-gray-500 dark:text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])],-1),Qt={class:"flex m-1 items-end text-gray-500 cursor-pointer relative"},Bt=a("i",{class:"fa-solid fa-gear fa-2xl"},null,-1),Lt=[Bt],Kt=a("div",{class:"flex m-1 items-end text-gray-500 cursor-pointer relative"},[a("button",{class:"p-2 hover:bg-gray-300 rounded-md"},[a("i",{class:"fa-solid fa-chart-line fa-2xl"})])],-1),ra={__name:"TableFilterWarehouse",emits:["filterFunction","filtered_fields"],setup(t,{emit:e}){const s=Ks(),c=x(!1),r=u=>{u!=="All"?o.vendor_name=u.company_id:o.vendor_name=u,c.value=!1},o=G({createdAt:"",sm_material_name:"",vendor_name:"",usernames:"",stf_num:"",sm_num:"",date_order:""});L(()=>{e("filterFunction",o)});const h=x(!1);return(u,_)=>(n(),l("div",it,[a("div",dt,[a("div",_t,[a("div",ht,[mt,f(a("select",{class:"border outline-none rounded-lg h-full p-1 border-blue-300 hover:border-blue-600 shadow-lg","onUpdate:modelValue":_[0]||(_[0]=m=>o.date_order=m)},ft,512),[[C,o.date_order]])]),a("div",gt,[vt,f(a("input",{class:"border outline-none rounded-md border-gray-300 p-2",type:"date",name:"",id:"",placeholder:"Date","onUpdate:modelValue":_[1]||(_[1]=m=>o.createdAt=m)},null,512),[[S,o.createdAt]])]),a("div",yt,[xt,f(a("select",{"onUpdate:modelValue":_[2]||(_[2]=m=>o.material_type=m),class:"border outline-none rounded-lg h-full p-1 border-blue-300 hover:border-blue-600 shadow-lg"},St,512),[[C,o.material_type]])]),a("div",Ct,[Et,Ft,a("div",Tt,[Dt,f(a("input",{type:"text",id:"search",class:"block w-full p-2 pl-10 outline-none text-gray-900 border border-blue-300 rounded-lg hover:border-blue-600 shadow-lg",placeholder:"STF...","onUpdate:modelValue":_[3]||(_[3]=m=>o.stf_num=m)},null,512),[[S,o.stf_num]])])]),a("div",Ut,[jt,At,a("div",It,[Gt,f(a("input",{type:"text",id:"search",class:"block w-full p-2 pl-10 outline-none text-gray-900 border border-blue-300 rounded-lg hover:border-blue-600 shadow-lg",placeholder:"SM...","onUpdate:modelValue":_[4]||(_[4]=m=>o.sm_num=m)},null,512),[[S,o.sm_num]])])]),y(ct,{onSelectedComp:r,companies_list:v(s).companies_names},null,8,["companies_list"]),a("div",Pt,[zt,f(a("select",{"onUpdate:modelValue":_[5]||(_[5]=m=>o.usernames=m),class:"border outline-none rounded-lg h-full p-1 border-blue-300 hover:border-blue-600 shadow-lg"},[Mt,(n(!0),l(w,null,b(v(s).created_stf_username,m=>(n(),l("option",{class:"text-lg",value:m.id,style:{"font-family":"'Poppins', sans-serif"}},i(m.ordered_name),9,Nt))),256))],512),[[C,o.usernames]])])]),a("div",Wt,[a("div",Rt,[Vt,Ht,a("div",Ot,[qt,f(a("input",{type:"search",id:"search",class:"outline-none w-full p-2 pl-10 text-gray-900 border border-blue-300 rounded-lg hover:border-blue-600 shadow-lg",placeholder:"Search","onUpdate:modelValue":_[6]||(_[6]=m=>o.sm_material_name=m)},null,512),[[S,o.sm_material_name]])])]),a("div",Qt,[a("button",{class:"p-2 hover:bg-gray-300 rounded-md",onClick:_[7]||(_[7]=m=>h.value=!h.value)},Lt),h.value?K(u.$slots,"default",{key:0}):p("",!0)]),Kt])])]))}};export{sa as P,aa as T,Ks as W,ea as _,Zt as a,Xt as b,ta as c,Yt as d,oa as e,ra as f,ct as g};