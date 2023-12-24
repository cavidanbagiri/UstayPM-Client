import{d as J}from"./pinia-f2173f69.js";import{a as g}from"./axios-21b846bc.js";import{_ as D,a as N,T as M,b as W,c as j,d as V,W as X,e as Z}from"./TableFilterWarehouse-11fd02e7.js";import{r as E,F as i,G as d,M as _,H as s,I as p,u as c,X as y,z as G,J as T,K as R,O as w,W as q,U as Q,V as K,q as I,P as B,Q as $,L as v,a as Y,R as S,Z as L,S as U,_ as ee,l as te,$ as se}from"./@vue-545ec849.js";import{_ as H,U as F}from"./index-2d497d03.js";import{_ as ae}from"./TableFilter-b1b4f68a.js";import{T as oe}from"./Toast-7b38d8cb.js";import{_ as le}from"./TableFilterProvide-f85eec2c.js";import"./socket.io-client-651ff694.js";import"./engine.io-client-86cec14e.js";import"./engine.io-parser-b13552ae.js";import"./@socket.io-3e1df240.js";import"./socket.io-parser-44417fca.js";import"./moment-fbc5633a.js";import"./vue-router-27805559.js";import"./vee-validate-e5cd1ca6.js";import"./chart.js-60a64726.js";import"./@kurkle-b1b89bbc.js";import"./@vee-validate-f04fc1ec.js";g.defaults.withCredentials=!0;const x=J("STFStore",{state:()=>({tab_num:0,all_stf:null,all_stf_loading:!0,all_stf_cond_text:!1,all_stf_headers:[],warehouse_selecting_rows:[],order_list:[],fields:[],warehouse_data:[],warehouse_data_loading:!0,warehouse_data_cond_text:!1,warehouse_headers:[],provides_data:[],provide_data_loading:!0,provide_data_cond_text:!1,provided_data_headers:[],warehouse_selecting_rows:[],msg_cond:!1,after_created:!1}),getters:{GETALLSTF:o=>o.all_stf,GETALLSTFHEADERS:o=>o.all_stf_headers,GETSELECTINGROWS:o=>o.warehouse_selecting_rows,GETFIELDSNAME:o=>o.fields,GETWAREHOUSEDATA:o=>o.warehouse_data,GETWAREHOUSEHEADERS:o=>o.warehouse_headers},actions:{async createSTF(o){try{await g.post("https://ustaypm-server.onrender.com/stf/createstf",o).then(e=>e)}catch(e){return e}},async fetchUserSTFAll(o){if(this.all_stf_loading=!0,o!=null&&o.id)try{await g.get(`https://ustaypm-server.onrender.com/stf/getuserstfall/${o.id}`).then(e=>{e.data.length!==0?(this.all_stf=e.data,this.all_stf_loading=!1,this.all_stf_cond_text=!1):(this.all_stf_loading=!1,this.all_stf_cond_text=!0)}).catch(e=>{console.log("Fetch User Catch Error : ",e)})}catch(e){return console.log("Fetch User STF Error : ",e),e}},async getFilteredData(o){this.all_stf_loading=!0;const e=this.createUrlQuery(o);try{await g.get(`https://ustaypm-server.onrender.com/common/filterstf${e}`).then(t=>{t.data.length!==0?(this.all_stf=t.data,this.all_stf_loading=!1,this.all_stf_cond_text=!1):(this.all_stf_loading=!1,this.all_stf_cond_text=!0)}).catch(t=>{console.log("Error Is : ",t)})}catch(t){console.log("Get Filtered Data Error : ",t)}},async getHeaders(){var o,e;if(((o=this.all_stf)==null?void 0:o.length)>=1){for(let[t,a]of Object.entries(this==null?void 0:this.all_stf[0])){const r=t.slice(t.length-2,t.length);if(t!=="id"&&r!=="id"&&r!=="Id"){let l={},n=t.charAt(0).toUpperCase()+t.slice(1);n=n.split("_").join(" "),t==="completed"||t==="stf_num"||t==="createdAt"||t==="situation"||t==="material_type"||t==="material_name"||t==="amount"||t==="unit"||t==="username"||t==="field_name"?(l.showname=`${n}`,l.name=`${t}`,l.value=!0):(l.showname=`${n}`,l.name=`${t}`,l.value=!1),this.all_stf_headers.push(l)}}for(let t=0;t<((e=this.all_stf_headers)==null?void 0:e.length);t++){if(this.all_stf_headers[t].name==="completed"){let a=this.all_stf_headers[0];this.all_stf_headers[0]=this.all_stf_headers[t],this.all_stf_headers[t]=a}if(this.all_stf_headers[t].name==="stf_num"){let a=this.all_stf_headers[1];this.all_stf_headers[1]=this.all_stf_headers[t],this.all_stf_headers[t]=a}}}},async fetchFieldsNames(o){if(o)try{await g.get(`https://ustaypm-server.onrender.com/common/fetchfields/${o}`).then(e=>{this.fields=e.data}).catch(e=>{console.log("Error Is : ",e)})}catch(e){console.log("fetch Field Names Error : ",e)}},async fetchWarehouseData(o){if(o!=null&&o.id){this.warehouse_data_loading=!0;try{await g.get(`https://ustaypm-server.onrender.com/stf/warehouse/${o.id}`).then(e=>{var t;((t=e.data)==null?void 0:t.length)!==0?(this.warehouse_data=e.data,this.warehouse_data_loading=!1,this.warehouse_data_cond_text=!1):(this.warehouse_data_loading=!1,this.warehouse_data_cond_text=!0)}).catch(e=>{console.log("Fetch User Catch Error : ",e)})}catch(e){return console.log("Fetch User STF Error : ",e),e}}},async getFilteredWarehouseData(o){this.warehouse_data_loading=!0;const e=this.createUrlQuery(o);try{await g.get(`
                https://ustaypm-server.onrender.com/common/filterwarehouse${e}
            `).then(t=>{var a;((a=t.data)==null?void 0:a.length)!==0?(this.warehouse_data=t.data,this.warehouse_data_loading=!1,this.warehouse_data_cond_text=!1):(this.warehouse_data_loading=!1,this.warehouse_data_cond_text=!0)}).catch(t=>{console.log("Error Is : ",t)})}catch(t){console.log("Get Filtered Data Error : ",t)}},async getWarehouseHeaders(){var o;if(((o=this.warehouse_data)==null?void 0:o.length)>1)for(let[e,t]of Object.entries(this==null?void 0:this.warehouse_data[0])){const a=e.slice(e.length-2,e.length);if(e!=="id"&&a!=="id"&&a!=="Id"){let r={},l=e.charAt(0).toUpperCase()+e.slice(1);l=l.split("_").join(" "),e==="stf_num"||e==="sm_num"||e==="material_name"||e==="amount"||e==="unit"||e==="vendor_name"||e==="stock"||e==="certificate"||e==="passport"||e==="field"?(r.showname=`${l}`,r.name=`${e}`,r.value=!0):(r.showname=`${l}`,r.name=`${e}`,r.value=!1),this.warehouse_headers.push(r)}}},async fetchProvidedData(o){await g.get(`https://ustaypm-server.onrender.com/stf/provided/${o.departmentId}`).then(e=>{var t;((t=e.data)==null?void 0:t.length)!==0?(this.provides_data=e.data,this.provide_data_loading=!1,this.provide_data_cond_text=!1):(this.provide_data_loading=!1,this.provide_data_cond_text=!0)}).catch(e=>{console.log("Provied Items Error : ",e)})},async getFilteredDataProvided(o){const e=this.createUrlQuery(o);try{await g.get(`https://ustaypm-server.onrender.com/common/filterprovided${e}`).then(t=>{var a;((a=t.data)==null?void 0:a.length)!==0?(this.provides_data=t.data,this.provide_data_loading=!1,this.provide_data_cond_text=!1):(this.provide_data_loading=!1,this.provide_data_cond_text=!0)}).catch(t=>{console.log("Error Is : ",t)})}catch(t){console.log("Get Filtered Data Error : ",t)}},async getProvidedDataHeaders(){var o;if((o=this.provides_data)!=null&&o.length){for(let[e,t]of Object.entries(this.provides_data[0]))if(e!=="id"){let a={},r=e.charAt(0).toUpperCase()+e.slice(1);r=r.split("_").join(" "),e==="sm_num"||e==="provided_date"||e==="material_name"||e==="amount"||e==="unit"||e==="serial_no"||e==="unique_id"||e==="deliver_to"||e==="card_number"?(a.showname=`${r}`,a.name=`${e}`,a.value=!0):(a.showname=`${r}`,a.name=`${e}`,a.value=!1),this.provided_data_headers.push(a)}}},createUrlQuery(o){let e="";for(let[t,a]of Object.entries(o))e===""&&(e+="?"),o[t],e+=`${t}=${o[t]}`,e+="&";return e=e.slice(0,-1),e}}}),re={class:"w-1 p-4 py-2"},ne={class:"flex items-center"},ie={class:"flex cursor-pointer items-center rounded-sm p-1",for:"selected_row","data-ripple-dark":"true"},de=["id"],ce={class:"px-2 py-2 font-medium text-center"},_e={class:"w-1 p-4 py-2"},he={class:"flex items-center"},ue={class:"flex cursor-pointer items-center rounded-sm p-1",for:"selected_row","data-ripple-dark":"true"},fe=["id"],me={class:"px-2 py-2 font-medium text-center"},pe={__name:"ShowSTFEachRow",props:["each","index"],setup(o){const e=o,t=x(),a=E(!1),r=()=>{a.value=!a.value,a.value?t.warehouse_selecting_rows.push(e.each):t.warehouse_selecting_rows=t.warehouse_selecting_rows.filter(l=>l.stf_id!==e.each.stf_id)};return(l,n)=>{var h;return(h=e.each)!=null&&h.canceled_id?(i(),d("tr",{key:1,class:y([a.value?"text-white bg-blue-600  hover:bg-blue-500 ":"bg-red-200  hover:bg-blue-600 hover:text-white hover:duration-200 ","border-b hover:cursor-pointer table_row"])},[_(D,{each:e==null?void 0:e.each},null,8,["each"]),s("td",_e,[s("div",he,[s("label",ue,[s("input",{id:e.each.id,type:"checkbox",onChange:n[1]||(n[1]=f=>r(e.each.id)),class:"checkbox checkbox-xs checkbox-primary"},null,40,fe)])])]),s("th",me,p(e.index+1),1),_(N,{each:e==null?void 0:e.each,table_headers:c(t).all_stf_headers},null,8,["each","table_headers"])],2)):(i(),d("tr",{key:0,class:y([a.value?"text-white bg-blue-600  hover:bg-blue-500 ":"bg-white  hover:bg-blue-600 hover:text-white hover:duration-200 ","border-b hover:cursor-pointer table_row"])},[_(D,{each:e==null?void 0:e.each},null,8,["each"]),s("td",re,[s("div",ne,[s("label",ie,[s("input",{id:e.each.id,type:"checkbox",onChange:n[0]||(n[0]=f=>r(e.each.id)),class:"checkbox checkbox-xs checkbox-primary"},null,40,de)])])]),s("th",ce,p(e.index+1),1),_(N,{each:e==null?void 0:e.each,table_headers:c(t).all_stf_headers},null,8,["each","table_headers"])],2))}}};const xe=o=>(Q("data-v-76290771"),o=o(),K(),o),be={key:0,class:"mtf-anim fixed left-1/4 bottom-10 flex flex-row mb-4 justify-center rounded-lg w-1/2"},we={class:"flex justify-between bg-white border rounded-md shadow-2xl w-full"},ve={class:"flex items-center"},ge={class:"bg-blue-600 py-4 px-6 text-white font-bold rounded-l-md text-3xl"},ye={class:"ml-3"},$e=xe(()=>s("p",null,"Task Selected",-1)),ke={class:"text-blue-600"},Se=q('<div class="flex items-center ml-[200px]" data-v-76290771><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-76290771><i class="fa-regular fa-trash-can" data-v-76290771></i> <span class="text-sm" data-v-76290771>Add Archieve</span></div><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-76290771><i class="fa-solid fa-eye-slash" data-v-76290771></i> <span class="text-sm" data-v-76290771>Dont Show</span></div><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-76290771><i class="fa-regular fa-star" data-v-76290771></i> <span class="text-sm" data-v-76290771>Set Star</span></div></div>',1),Ee={__name:"SelectingRows",setup(o){const e=x(),t=E([]);return G(()=>{t.value=e.warehouse_selecting_rows}),(a,r)=>c(e).warehouse_selecting_rows.length>=1?(i(),d("div",be,[s("div",we,[s("div",ve,[s("span",ge,p(t.value.length),1),s("div",ye,[$e,(i(!0),d(T,null,R(t.value.length,l=>(i(),d("span",ke,"●"))),256))])]),Se])])):w("",!0)}},Te=H(Ee,[["__scopeId","data-v-76290771"]]),Re={class:"flex flex-col",style:{display:"inline-block"}},Ce={class:"sticky top-10 px-1"},Fe={class:"sticky left-16 flex flex-col bg-white",style:{display:"inline-block",width:"calc(100vw - 5rem)"}},Ae={key:0,class:"mx-2 w-full shadow-xl mt-1"},Ue={key:1,class:"flex flex-row justify-center items-center w-full h-96"},De=s("span",{class:"loading loading-dots loading-lg"},null,-1),Ne=[De],Ge={key:2,class:"flex flex-row justify-center items-center w-full h-96"},Ie={class:"text-3xl"},He={class:"font-bold"},ze={__name:"ShowSTF",setup(o){const e=x(),t=F();I(async()=>{const r=t.GETUSER;r===void 0||(await e.fetchUserSTFAll(r),e.GETALLSTFHEADERS.length===0&&await e.getHeaders())});const a=async r=>{var l;t.GETUSER!==void 0&&(r.user=(l=t==null?void 0:t.GETUSER)==null?void 0:l.id,await e.getFilteredData(r))};return(r,l)=>(i(),d("div",Re,[_(M),s("div",Ce,[s("div",Fe,[_(W),_(ae,{onFilterFunction:a},{default:B(()=>[(i(),$(j,{key:0,table_headers:c(e).GETALLSTFHEADERS},null,8,["table_headers"]))]),_:1})])]),c(e).GETALLSTFHEADERS.length?(i(),d("table",Ae,[_(V,{table_headers:c(e).GETALLSTFHEADERS},null,8,["table_headers"]),(i(!0),d(T,null,R(c(e).all_stf,(n,h)=>(i(),$(pe,{each:n,index:h},null,8,["each","index"]))),256))])):w("",!0),c(e).all_stf_loading?(i(),d("div",Ue,Ne)):w("",!0),c(e).all_stf_cond_text?(i(),d("div",Ge,[s("span",Ie,[v(" There is not any data in warehouse which created by "),s("span",He,p(c(t).user.name)+" "+p(c(t).user.surname),1)])])):w("",!0),_(Te)]))}},Le={},Me={class:"text-gray-100 bg-slate-700 border table_header"},We=s("tr",null,[s("th",{scope:"col",class:"px-6 py-2 text-center border"}," S/S "),s("th",{scope:"col",class:"px-6 py-1 text-center border"},[s("div",{class:""}," Type ")]),s("th",{scope:"col",class:"px-6 py-1 text-center border w-1/3"},[s("div",{class:""}," Material Name ")]),s("th",{scope:"col",class:"px-6 py-1 text-center border"},[s("div",{class:""}," Link ")]),s("th",{scope:"col",class:"px-6 py-1 text-center border w-4"}," Count "),s("th",{scope:"col",class:"px-6 py-1 text-center border w-4"}," Unit "),s("th",{scope:"col",class:"px-6 py-1 text-center border w-8"}," Field "),s("th",{scope:"col",class:"px-6 py-1 text-center border"}," Comment ")],-1),je=[We];function Ve(o,e){return i(),d("thead",Me,je)}const Be=H(Le,[["render",Ve]]),Pe={scope:"row",class:"w-8 text-gray-900 whitespace-nowrap dark:text-white text-center table_row"},Oe={class:"flex justify-between items-center px-1"},qe=s("span",{class:"relative flex h-3 w-3"},[s("span",{class:"animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"}),s("span",{class:"relative inline-flex rounded-full h-3 w-3 bg-orange-500"})],-1),Qe={scope:"row",class:"p-1 border text-gray-900 whitespace-nowrap dark:text-white table_row",style:{}},Ke=s("option",{disabled:"",value:""},"Type",-1),Je=s("option",null,"Project",-1),Xe=s("option",null,"Consumables",-1),Ze=s("option",null,"Fixture",-1),Ye=[Ke,Je,Xe,Ze],et={class:"p-1 border text-gray-900 whitespace-nowrap dark:text-white"},tt={class:"p-1 border text-gray-900 whitespace-nowrap dark:text-white"},st={class:"p-1 border"},at={class:"p-1 border",style:{}},ot=s("option",{disabled:"",value:""},"Unit",-1),lt=s("option",null,"Adet",-1),rt=s("option",null,"M2",-1),nt=s("option",null,"M3",-1),it=s("option",null,"Ton",-1),dt=s("option",null,"Kg",-1),ct=[ot,lt,rt,nt,it,dt],_t={class:"p-1 border"},ht=s("option",{disabled:"",value:""},"Field",-1),ut=["value"],ft={class:"p-1 border",style:{}},mt={__name:"STF_Table_Body_Each_Row_Comp",props:["id","order_list"],setup(o){const e=o,t=x(),a=Y({each_id:e==null?void 0:e.id,material_type:"",material_name:"",material_amount:0,material_unit:"",link:"",fieldId:0,comment:""});return G(()=>{var r;if(((r=t.order_list)==null?void 0:r.length)>=1){let l=!1;for(let n of t.order_list)if(n.each_id===a.each_id){l=!0;break}!l&&a.each_id!=""&&t.order_list.push(a)}else t.order_list.push(a);if(t.after_created)for(let l=0;l<t.order_list.length;l++)a.each_id=0,a.material_type="",a.material_name="",a.link="",a.material_amount=0,a.material_unit="",a.fieldId=0,t.order_list.splice(l,1)}),(r,l)=>(i(),d(T,null,[s("td",Pe,[s("div",Oe,[s("span",null,p(a.each_id),1),qe])]),s("td",Qe,[S(s("select",{class:"border border-red-500 outline-none rounded-lg w-full h-full p-2","onUpdate:modelValue":l[0]||(l[0]=n=>a.material_type=n)},Ye,512),[[L,a.material_type]])]),s("td",et,[S(s("input",{class:"border border-red-500 outline-none rounded-lg w-full h-full p-2",type:"text",placeholder:"Material Name...","onUpdate:modelValue":l[1]||(l[1]=n=>a.material_name=n)},null,512),[[U,a.material_name]])]),s("td",tt,[S(s("input",{class:"border outline-none rounded-lg w-full h-full p-2",type:"text",placeholder:"Material Link...","onUpdate:modelValue":l[2]||(l[2]=n=>a.link=n)},null,512),[[U,a.link]])]),s("td",st,[S(s("input",{class:"border border-red-500 outline-none rounded-lg w-full h-full p-2",type:"number",min:"0.001",placeholder:"Count...","onUpdate:modelValue":l[3]||(l[3]=n=>a.material_amount=n)},null,512),[[U,a.material_amount]])]),s("td",at,[S(s("select",{class:"border border-red-500 outline-none rounded-lg w-full h-full p-2","onUpdate:modelValue":l[4]||(l[4]=n=>a.material_unit=n)},ct,512),[[L,a.material_unit]])]),s("td",_t,[S(s("select",{class:"border border-red-500 outline-none rounded-lg w-full h-full p-2","onUpdate:modelValue":l[5]||(l[5]=n=>a.fieldId=n)},[ht,(i(!0),d(T,null,R(c(t).GETFIELDSNAME,n=>(i(),d("option",{value:n.id},p(n.field_name),9,ut))),256))],512),[[L,a.fieldId]])]),s("td",ft,[S(s("input",{class:"border outline-none rounded-lg w-full h-full p-2",type:"text",placeholder:"Comment...","onUpdate:modelValue":l[6]||(l[6]=n=>a.comment=n)},null,512),[[U,a.comment]])])],64))}};const pt={__name:"STF_Table_Body_Column_Name_Comp",props:["row_size","order_list"],setup(o){const e=o;return(t,a)=>(i(!0),d(T,null,R(e.row_size,r=>(i(),d("tr",{class:y([r===1?"bg-red-50":"","bg-white border-b hover:bg-gray-50 table_row"])},[(i(),$(mt,{id:r,key:r,order_list:o.order_list},null,8,["id","order_list"]))],2))),256))}},xt=H(pt,[["__scopeId","data-v-6718c5c3"]]),bt={__name:"STF_Table_Body_Comp",props:["row_size","order_list"],setup(o){const e=o;return(t,a)=>(i(),d("tbody",null,[_(xt,{row_size:e==null?void 0:e.row_size,order_list:o.order_list},null,8,["row_size","order_list"])]))}},wt={class:"flex justify-between mt-1"},vt=s("i",{class:"fa-solid fa-plus fa-lg"},null,-1),gt=s("i",{class:"fa-solid fa-minus fa-lg"},null,-1),yt={__name:"STF_Table_Row_Count_Comp",emits:["emitAddNewRow","emitRemoveRow"],setup(o,{emit:e}){const t=()=>e("emitAddNewRow"),a=()=>e("emitRemoveRow");return(r,l)=>(i(),d("div",wt,[s("button",{onClick:t,class:"font-bold py-2 px-2 my-1 text-xs outline-none font-mono border text-gray-100 rounded-xl bg-orange-500 hover:bg-orange-400 hover:shadow-xl"},[vt,v(" Add New Column ")]),s("button",{onClick:a,class:"py-2 px-2 my-1 text-xs outline-none font-mono font-bold border text-gray-100 rounded-xl bg-red-500 hover:bg-red-400 hover:shadow-xl"},[gt,v(" Remove Column ")])]))}},$t={class:"flex items-center justify-end mt-10"},kt=s("i",{class:"fa-solid fa-plus"},null,-1),St={key:1,type:"button",class:"text-white bg-gradient-to-r bg-blue-600 hover:bg-blue-500 hover:shadow-xl font-medium rounded-lg text-md px-4 py-2 text-center mr-2 mb-2"},Et=s("span",{class:"loading loading-spinner"},null,-1),Tt={__name:"STF_Create_Button_Comp",props:["row_size"],emits:["setRowSize"],setup(o,{emit:e}){const t=o,a=x(),r=F(),l=E(!0),n=async()=>{var h,f,b,u,A,P,O;if(l.value=!1,a.order_list.length===0&&alert("Must Create at least 1 data"),t.row_size===0)alert("Must Create at least 1 data");else{let C=!0;for(let m=0;m<t.row_size;m++)if(((h=a.order_list[m])==null?void 0:h.material_name)===""){C=!1,alert(`${m+1} Row Material Name is Empty`);break}else if(((f=a.order_list[m])==null?void 0:f.material_type)===""){C=!1,alert(`${m+1} Row Material Type Cant Be An Empty`);break}else if(((b=a.order_list[m])==null?void 0:b.material_amount)<=0){C=!1,alert(`${m+1} Row Material Amount In Not True Amount`);break}else if(((u=a.order_list[m])==null?void 0:u.material_unit)===""){C=!1,alert(`${m+1} Row Unit Is Not Selected`);break}else if(((A=a.order_list[m])==null?void 0:A.fieldId)===0){C=!1,alert(`${m+1} Row Field Not Selected`);break}if(C)try{const m={orders:a.order_list,user:r==null?void 0:r.user};for(let k=(P=a.order_list)==null?void 0:P.length;k>t.row_size;k--){const z=(O=a.order_list)==null?void 0:O.pop()}await a.createSTF(m).then(async k=>{var z;((z=k==null?void 0:k.response)==null?void 0:z.status)===400?alert("MTF Cant Create"):(a.msg_cond=!0,setTimeout(()=>{e("setRowSize"),l.value=!0,a.after_created=!0,a.tab_num=0,a.fetchUserSTFAll(m.user)},500),setTimeout(()=>{a.msg_cond=!1},1e3))}).catch(k=>{console.log("from create Error component : ",k)})}catch(m){console.log("error : ",m)}else l.value=!0}};return(h,f)=>(i(),d("div",$t,[l.value?(i(),d("button",{key:0,type:"button",onClick:n,class:"text-white bg-gradient-to-r bg-blue-600 hover:bg-blue-500 hover:shadow-xl font-medium rounded-lg text-md px-4 py-2 text-center mr-2 mb-2"},[kt,v(" Create")])):(i(),d("button",St,[Et,v(" Loading")]))]))}},Rt={class:"overflow-x-auto shadow-xl sm:rounded-lg border p-2"},Ct=s("h1",{class:"text-center text-3xl py-4",style:{"font-family":"'Poppins'"}}," Create STF Form",-1),Ft={class:"w-full text-left text-gray-500 dark:text-gray-400"},At={__name:"CreateSTF",setup(o){const e=x(),t=E(1),a=()=>{let f=!0,b=0;for(let u of e.order_list){const A=u==null?void 0:u.material_name.trim();(u==null?void 0:u.material_type)===""?(f=!1,alert(`${b+1} Row Material Type Cant Be Empty`)):A===""?(f=!1,alert(`${b+1} Row Material Name Cant Be Empty`)):(u==null?void 0:u.material_amount)<=0?(f=!1,alert(`${b+1} Row Material Amount Cant Be 0`)):(u==null?void 0:u.material_unit)===""?(f=!1,alert(`${b+1} Row Material Unit Is Not Selected`)):(u==null?void 0:u.fieldId)===0&&(f=!1,alert(`${b+1} Row Field Is Not Selected`)),b++}f&&e.order_list.length&&(t.value+=1)},r=()=>{t.value>1?t.value-=1:t.value},l=()=>{t.value=0};let n=E([]);const h=()=>{t.value=1,e.after_created=!1};return(f,b)=>(i(),d("div",Rt,[Ct,t.value===0?(i(),d("button",{key:0,class:"font-bold py-2 px-2 my-1 text-xs outline-none font-mono border text-gray-100 rounded-xl bg-green-500 mb-2",onClick:b[0]||(b[0]=u=>h())}," Create New STF ")):w("",!0),s("table",Ft,[_(Be),_(bt,{row_size:t.value,order_list:c(n)},null,8,["row_size","order_list"])]),_(yt,{onEmitAddNewRow:a,onEmitRemoveRow:r}),_(Tt,{onSetRowSize:l,row_size:t.value},null,8,["row_size"]),_(oe,{cond:c(e).msg_cond,messages:"New STF Successfuly Created"},null,8,["cond"])]))}},Ut={class:"w-1 p-4 py-2"},Dt={class:"flex items-center"},Nt={class:"flex cursor-pointer items-center rounded-sm p-1",for:"selected_row","data-ripple-dark":"true"},Gt=["id"],It={class:"px-2 py-2 font-medium text-center"},Ht={__name:"ShowWarehouseEachRow",props:["each","index"],setup(o){const e=o,t=x(),a=E(!1),r=()=>{a.value=!a.value,a.value?t.warehouse_selecting_rows.push(e.each):t.warehouse_selecting_rows=t.warehouse_selecting_rows.filter(l=>l.stf_id!==e.each.stf_id)};return(l,n)=>(i(),d("tr",{class:y([a.value?"text-white bg-blue-600  hover:bg-blue-500 ":" bg-white  hover:bg-blue-600 hover:text-white hover:duration-200 ","border-b hover:cursor-pointer table_row"])},[_(D,{each:e==null?void 0:e.each},null,8,["each"]),s("td",Ut,[s("div",Dt,[s("label",Nt,[s("input",{id:e.each.id,type:"checkbox",onChange:n[0]||(n[0]=h=>r(e.each.id)),class:"checkbox checkbox-xs checkbox-primary"},null,40,Gt)])])]),s("th",It,p(e.index+1),1),_(N,{each:e==null?void 0:e.each,table_headers:c(t).GETWAREHOUSEHEADERS},null,8,["each","table_headers"])],2))}};const zt=o=>(Q("data-v-6a925cb8"),o=o(),K(),o),Lt={key:0,class:"mtf-anim fixed left-1/4 bottom-10 flex flex-row mb-4 justify-center rounded-lg w-1/2"},Mt={class:"flex justify-between bg-white border rounded-md shadow-2xl w-full"},Wt={class:"flex items-center"},jt={class:"bg-blue-600 py-4 px-6 text-white font-bold rounded-l-md text-3xl"},Vt={class:"ml-3"},Bt=zt(()=>s("p",null,"Task Selected",-1)),Pt={class:"text-blue-600"},Ot=q('<div class="flex items-center ml-[200px]" data-v-6a925cb8><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-6a925cb8><i class="fa-regular fa-trash-can" data-v-6a925cb8></i> <span class="text-sm" data-v-6a925cb8>Add Archieve</span></div><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-6a925cb8><i class="fa-solid fa-eye-slash" data-v-6a925cb8></i> <span class="text-sm" data-v-6a925cb8>Dont Show</span></div><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-6a925cb8><i class="fa-regular fa-star" data-v-6a925cb8></i> <span class="text-sm" data-v-6a925cb8>Set Star</span></div></div>',1),qt={__name:"SelectingRows",setup(o){const e=x(),t=E([]);return G(()=>{t.value=e.warehouse_selecting_rows}),(a,r)=>c(e).warehouse_selecting_rows.length>=1?(i(),d("div",Lt,[s("div",Mt,[s("div",Wt,[s("span",jt,p(t.value.length),1),s("div",Vt,[Bt,(i(!0),d(T,null,R(t.value.length,l=>(i(),d("span",Pt,"●"))),256))])]),Ot])])):w("",!0)}},Qt=H(qt,[["__scopeId","data-v-6a925cb8"]]),Kt={class:"flex flex-col",style:{display:"inline-block"}},Jt={class:"sticky top-10 px-1"},Xt={class:"sticky left-16 flex flex-col bg-white",style:{display:"inline-block",width:"calc(100vw - 5rem)"}},Zt={key:0,class:"mx-2 text-gray-800 w-full shadow-xl bg-white mt-1"},Yt={key:1,class:"flex flex-row justify-center items-center w-full h-96"},es=s("span",{class:"loading loading-dots loading-lg"},null,-1),ts=[es],ss={key:2,class:"flex flex-row justify-center items-center w-full h-96"},as={class:"text-3xl"},os={class:"font-bold"},ls={__name:"WarehouseData",setup(o){const e=x(),t=F(),a=X();I(async()=>{const l=t.GETUSER;l===void 0||(await e.fetchWarehouseData(l),await a.getCompaniesNames(),e.GETWAREHOUSEHEADERS.length===0&&await e.getWarehouseHeaders())});const r=async l=>{var n;t.GETUSER!==void 0&&(l.user=(n=t==null?void 0:t.GETUSER)==null?void 0:n.id,await e.getFilteredWarehouseData(l))};return(l,n)=>(i(),d("div",Kt,[_(M),s("div",Jt,[s("div",Xt,[_(W),_(Z,{onFilterFunction:r},{default:B(()=>[(i(),$(j,{key:0,table_headers:c(e).GETWAREHOUSEHEADERS},null,8,["table_headers"]))]),_:1})])]),c(e).GETWAREHOUSEHEADERS.length?(i(),d("table",Zt,[_(V,{table_headers:c(e).GETWAREHOUSEHEADERS},null,8,["table_headers"]),(i(!0),d(T,null,R(c(e).warehouse_data,(h,f)=>(i(),$(Ht,{each:h,index:f},null,8,["each","index"]))),256))])):w("",!0),c(e).warehouse_data_loading?(i(),d("div",Yt,ts)):w("",!0),c(e).warehouse_data_cond_text?(i(),d("div",ss,[s("span",as,[v(" There is not any data in warehouse which created by "),s("span",os,p(c(t).user.name)+" "+p(c(t).user.surname),1)])])):w("",!0),_(Qt)]))}},rs={class:"w-1 p-4 py-2"},ns={class:"flex items-center"},is=s("label",{for:"checkbox-table-search-1",class:"sr-only"},"checkbox",-1),ds={class:"px-2 py-3 text-center"},cs={__name:"Provided_Table_Body_Each_Row",props:["each","index"],emits:["addChecked","removeChecked"],setup(o,{emit:e}){const t=o,a=x(),r=E(!1),l=()=>r.value===!0?e("addChecked",t==null?void 0:t.each):e("removeChecked",t==null?void 0:t.each);return G(()=>{a.after_provide&&(r.value=!1)}),(n,h)=>(i(),d("tr",{class:y([r.value?"text-white  bg-blue-600 hover:bg-blue-500 ":"bg-white hover:bg-blue-600 hover:text-white hover:duration-200","border-b table_row hover:cursor-pointer"])},[_(D,{each:t==null?void 0:t.each},null,8,["each"]),s("td",rs,[s("div",ns,[is,S(s("input",{id:"checkbox-table-search-1",type:"checkbox","onUpdate:modelValue":h[0]||(h[0]=f=>r.value=f),onChange:l,class:"checkbox checkbox-xs checkbox-primary"},null,544),[[ee,r.value]])])]),s("th",ds,p((t==null?void 0:t.index)+1),1),_(N,{each:t==null?void 0:t.each,table_headers:c(a).provided_data_headers},null,8,["each","table_headers"])],2))}},_s={__name:"Provided_Table_Body",setup(o){const e=x();return(t,a)=>(i(!0),d(T,null,R(c(e).provides_data,(r,l)=>(i(),$(cs,{each:r,index:l},null,8,["each","index"]))),256))}},hs={class:"flex flex-col",style:{display:"inline-block"}},us={class:"sticky h-40 top-10 bg-white"},fs={class:"sticky left-16 flex flex-col w-max bg-white",style:{display:"inline-block",width:"calc(100vw - 5rem)"}},ms={class:""},ps={key:0,class:"mx-2 text-gray-800 dark:text-gray-400 w-full shadow-xl bg-white mt-1",style:{"font-size":"xx-small"}},xs={key:1,class:"flex flex-row justify-center items-center w-full h-96"},bs=s("span",{class:"loading loading-dots loading-lg"},null,-1),ws=[bs],vs={key:2,class:"flex flex-row justify-center items-center w-full h-96"},gs={class:"text-3xl"},ys={class:"font-bold"},$s={__name:"ProvideData",setup(o){const e=x(),t=F();I(async()=>{const r=t.GETUSER;r===void 0||(await e.fetchProvidedData(r),e.provided_data_headers.length===0&&e.getProvidedDataHeaders())});const a=async r=>{var l;t.GETUSER!==void 0&&(r.department=(l=t==null?void 0:t.GETUSER)==null?void 0:l.departmentId,await e.getFilteredDataProvided(r))};return(r,l)=>(i(),d("div",hs,[_(M),s("div",us,[s("div",fs,[_(W),_(le,{onFilterFunction:a},{default:B(()=>[(i(),$(j,{key:0,table_headers:c(e).provided_data_headers},null,8,["table_headers"]))]),_:1})])]),s("div",ms,[c(e).provided_data_headers.length?(i(),d("table",ps,[_(V,{table_headers:c(e).provided_data_headers},null,8,["table_headers"]),_(_s)])):w("",!0),c(e).provide_data_loading?(i(),d("div",xs,ws)):w("",!0),c(e).provide_data_cond_text?(i(),d("div",vs,[s("span",gs,[v(" There is not any provide data which created by "),s("span",ys,p(c(t).user.name)+" "+p(c(t).user.surname),1)])])):w("",!0)])]))}},ks={class:"flex flex-col bg-white"},Ss={key:0,class:"bg-white",style:{"font-family":"'Poppins'"}},Es={class:"bg-white sticky top-0"},Ts={class:"flex flex-row anim h-10 bg-white items-center sticky left-16",style:{"letter-spacing":"1px","font-size":"x-small",display:"inline-block"}},Rs={class:"flex flex-row anim h-10 sticky top-0 bg-white w-full items-center",style:{"letter-spacing":"1px","font-size":"x-small"}},Cs=s("i",{class:"fa-solid fa-list fa-lg"},null,-1),Fs=s("i",{class:"fa-solid fa-plus fa-lg"},null,-1),As=s("i",{class:"fa-solid fa-warehouse fa-lg"},null,-1),Us=s("i",{class:"fa-solid fa-upload fa-lg"},null,-1),Ds={key:1},Ns=s("span",null,"User Not Login ",-1),Gs=[Ns],ta={__name:"views.stf",setup(o){const e=F(),t=x(),a=[ze,At,ls,$s],r=l=>{t.tab_num=l};return I(async()=>{const l=e.GETUSER;l===void 0||t.fetchFieldsNames(l==null?void 0:l.projectId)}),(l,n)=>(i(),d("div",ks,[c(e).user?(i(),d("div",Ss,[s("div",Es,[s("div",Ts,[s("div",Rs,[s("span",{class:y([c(t).tab_num===0?"border-b-violet-800 border-b-4 ":"","text-black px-3 py-2 pt-2 mx-1 border-b-2 cursor-pointer"]),onClick:n[0]||(n[0]=h=>r(0))},[Cs,v(" Show STF")],2),s("span",{class:y([c(t).tab_num===1?"border-b-violet-800 border-b-4 ":"","text-black px-3 py-2 pt-2 mx-1 border-b-2 cursor-pointer"]),onClick:n[1]||(n[1]=h=>r(1))},[Fs,v(" Create STF")],2),s("span",{class:y([c(t).tab_num===2?"border-b-violet-800 border-b-4 ":"","text-black px-3 py-2 pt-2 mx-1 border-b-2 cursor-pointer"]),onClick:n[2]||(n[2]=h=>r(2))},[As,v(" Warehouse")],2),s("span",{class:y([c(t).tab_num===3?"border-b-violet-800 border-b-4 ":"","text-black px-3 py-2 pt-2 mx-1 border-b-2 cursor-pointer"]),onClick:n[3]||(n[3]=h=>r(3))},[Us,v(" Provides")],2)])])]),(i(),$(se,null,[(i(),$(te(a[c(t).tab_num])))],1024))])):(i(),d("div",Ds,Gs))]))}};export{ta as default};
