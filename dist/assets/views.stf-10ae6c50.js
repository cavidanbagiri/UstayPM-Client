import{d as J}from"./pinia-f2173f69.js";import{a as y}from"./axios-21b846bc.js";import{_ as W}from"./STFStatistics-e265d67f.js";import{_ as N,T as G,a as j,b as V,c as B,W as X,d as Z}from"./TableFilterWarehouse-35317458.js";import{r as T,F as n,G as d,M as _,P as A,I as x,H as s,u as c,X as $,z as I,J as C,K as R,O as w,W as q,U as Q,V as K,q as z,Q as k,L as g,a as Y,R as E,Z as M,S as D,_ as ee,l as te,$ as se}from"./@vue-545ec849.js";import{b as H,U}from"./index-0c031828.js";import{_ as ae}from"./TableFilter-cab24be0.js";import{T as oe}from"./Toast-76ab58de.js";import{_ as le}from"./TableFilterProvide-45e07e68.js";import"./socket.io-client-651ff694.js";import"./engine.io-client-86cec14e.js";import"./engine.io-parser-b13552ae.js";import"./@socket.io-3e1df240.js";import"./socket.io-parser-44417fca.js";import"./moment-fbc5633a.js";import"./vue-router-27805559.js";import"./vee-validate-e5cd1ca6.js";import"./chart.js-ad692ade.js";import"./@kurkle-b1b89bbc.js";import"./@vee-validate-f04fc1ec.js";y.defaults.withCredentials=!0;const b=J("STFStore",{state:()=>({tab_num:0,all_stf:null,all_stf_loading:!0,all_stf_cond_text:!1,all_stf_headers:[],warehouse_selecting_rows:[],order_list:[],fields:[],warehouse_data:[],warehouse_data_loading:!0,warehouse_data_cond_text:!1,warehouse_headers:[],provides_data:[],provide_data_loading:!0,provide_data_cond_text:!1,provided_data_headers:[],warehouse_selecting_rows:[],msg_cond:!1,after_created:!1}),getters:{GETALLSTF:o=>o.all_stf,GETALLSTFHEADERS:o=>o.all_stf_headers,GETSELECTINGROWS:o=>o.warehouse_selecting_rows,GETFIELDSNAME:o=>o.fields,GETWAREHOUSEDATA:o=>o.warehouse_data,GETWAREHOUSEHEADERS:o=>o.warehouse_headers},actions:{async createSTF(o){try{await y.post("http://localhost:3000/api/stf/createstf",o).then(e=>e)}catch(e){return e}},async fetchUserSTFAll(o){if(this.all_stf_loading=!0,o!=null&&o.id)try{await y.get(`http://localhost:3000/api/stf/getuserstfall/${o.id}`).then(e=>{e.data.length!==0?(this.all_stf=e.data,this.all_stf_loading=!1,this.all_stf_cond_text=!1):(this.all_stf_loading=!1,this.all_stf_cond_text=!0)}).catch(e=>{console.log("Fetch User Catch Error : ",e)})}catch(e){return console.log("Fetch User STF Error : ",e),e}},async getFilteredData(o){this.all_stf_loading=!0;const e=this.createUrlQuery(o);try{await y.get(`http://localhost:3000/api/common/filterstf${e}`).then(t=>{t.data.length!==0?(this.all_stf=t.data,this.all_stf_loading=!1,this.all_stf_cond_text=!1):(this.all_stf_loading=!1,this.all_stf_cond_text=!0)}).catch(t=>{console.log("Error Is : ",t)})}catch(t){console.log("Get Filtered Data Error : ",t)}},async getHeaders(){var o,e;if(((o=this.all_stf)==null?void 0:o.length)>=1){for(let[t,a]of Object.entries(this==null?void 0:this.all_stf[0])){const r=t.slice(t.length-2,t.length);if(t!=="id"&&r!=="id"&&r!=="Id"){let l={},i=t.charAt(0).toUpperCase()+t.slice(1);i=i.split("_").join(" "),t==="completed"||t==="stf_num"||t==="createdAt"||t==="situation"||t==="material_type"||t==="material_name"||t==="amount"||t==="unit"||t==="username"||t==="field_name"?(l.showname=`${i}`,l.name=`${t}`,l.value=!0):(l.showname=`${i}`,l.name=`${t}`,l.value=!1),this.all_stf_headers.push(l)}}for(let t=0;t<((e=this.all_stf_headers)==null?void 0:e.length);t++){if(this.all_stf_headers[t].name==="completed"){let a=this.all_stf_headers[0];this.all_stf_headers[0]=this.all_stf_headers[t],this.all_stf_headers[t]=a}if(this.all_stf_headers[t].name==="stf_num"){let a=this.all_stf_headers[1];this.all_stf_headers[1]=this.all_stf_headers[t],this.all_stf_headers[t]=a}}}},async fetchFieldsNames(o){if(o)try{await y.get(`http://localhost:3000/api/common/fetchfields/${o}`).then(e=>{this.fields=e.data}).catch(e=>{console.log("Error Is : ",e)})}catch(e){console.log("fetch Field Names Error : ",e)}},async fetchWarehouseData(o){if(o!=null&&o.id){this.warehouse_data_loading=!0;try{await y.get(`http://localhost:3000/api/stf/warehouse/${o.id}`).then(e=>{var t;((t=e.data)==null?void 0:t.length)!==0?(this.warehouse_data=e.data,this.warehouse_data_loading=!1,this.warehouse_data_cond_text=!1):(this.warehouse_data_loading=!1,this.warehouse_data_cond_text=!0)}).catch(e=>{console.log("Fetch User Catch Error : ",e)})}catch(e){return console.log("Fetch User STF Error : ",e),e}}},async getFilteredWarehouseData(o){this.warehouse_data_loading=!0;const e=this.createUrlQuery(o);try{await y.get(`
                http://localhost:3000/api/common/filterwarehouse${e}
            `).then(t=>{var a;((a=t.data)==null?void 0:a.length)!==0?(this.warehouse_data=t.data,this.warehouse_data_loading=!1,this.warehouse_data_cond_text=!1):(this.warehouse_data_loading=!1,this.warehouse_data_cond_text=!0)}).catch(t=>{console.log("Error Is : ",t)})}catch(t){console.log("Get Filtered Data Error : ",t)}},async getWarehouseHeaders(){var o;if(((o=this.warehouse_data)==null?void 0:o.length)>=1)for(let[e,t]of Object.entries(this==null?void 0:this.warehouse_data[0])){const a=e.slice(e.length-2,e.length);if(e!=="id"&&a!=="id"&&a!=="Id"){let r={},l=e.charAt(0).toUpperCase()+e.slice(1);l=l.split("_").join(" "),e==="stf_num"||e==="sm_num"||e==="material_name"||e==="amount"||e==="unit"||e==="vendor_name"||e==="stock"||e==="certificate"||e==="passport"||e==="field"?(r.showname=`${l}`,r.name=`${e}`,r.value=!0):(r.showname=`${l}`,r.name=`${e}`,r.value=!1),this.warehouse_headers.push(r)}}},async fetchProvidedData(o){await y.get(`http://localhost:3000/api/stf/provided/${o.departmentId}`).then(e=>{var t;((t=e.data)==null?void 0:t.length)!==0?(this.provides_data=e.data,this.provide_data_loading=!1,this.provide_data_cond_text=!1,console.log("this provide data : ",this.provides_data)):(this.provide_data_loading=!1,this.provide_data_cond_text=!0)}).catch(e=>{console.log("Provied Items Error : ",e)})},async getFilteredDataProvided(o){const e=this.createUrlQuery(o);try{await y.get(`http://localhost:3000/api/common/filterprovided${e}`).then(t=>{var a;((a=t.data)==null?void 0:a.length)!==0?(this.provides_data=t.data,this.provide_data_loading=!1,this.provide_data_cond_text=!1):(this.provide_data_loading=!1,this.provide_data_cond_text=!0)}).catch(t=>{console.log("Error Is : ",t)})}catch(t){console.log("Get Filtered Data Error : ",t)}},async getProvidedDataHeaders(){var o;if((o=this.provides_data)!=null&&o.length){for(let[e,t]of Object.entries(this.provides_data[0]))if(e!=="id"){let a={},r=e.charAt(0).toUpperCase()+e.slice(1);r=r.split("_").join(" "),e==="sm_num"||e==="provided_date"||e==="material_name"||e==="amount"||e==="unit"||e==="serial_no"||e==="unique_id"||e==="deliver_to"||e==="card_number"?(a.showname=`${r}`,a.name=`${e}`,a.value=!0):(a.showname=`${r}`,a.name=`${e}`,a.value=!1),this.provided_data_headers.push(a)}}},createUrlQuery(o){let e="";for(let[t,a]of Object.entries(o))e===""&&(e+="?"),o[t],e+=`${t}=${o[t]}`,e+="&";return e=e.slice(0,-1),e}}}),re={key:0,class:"flex text-lg bg-red-400 text-white rounded-md py-1 mb-1"},ne=s("span",{class:"text-center w-full"}," STF Canceled ",-1),ie=[ne],de={key:1,class:"flex font-bold w-full text-[1.0rem]"},ce={key:0,class:"px-2 py-2 text-green-500 bg-green-100 w-full rounded-lg"},_e={key:1,class:"px-2 py-2 text-red-500 bg-red-100 w-full rounded-lg"},he={class:"w-1 p-4 py-2"},ue={class:"flex items-center"},fe={class:"flex cursor-pointer items-center rounded-sm p-1",for:"selected_row","data-ripple-dark":"true"},me=["id"],pe={class:"px-2 py-2 font-medium text-center"},xe={key:0,class:"flex text-lg bg-red-400 text-white rounded-md py-1 mb-1"},be=s("span",{class:"text-center w-full"}," STF Canceled ",-1),we=[be],ge={key:1,class:"flex font-bold w-full text-[1.0rem]"},ve={key:0,class:"px-2 py-2 text-green-500 bg-green-100 w-full rounded-lg"},ye={key:1,class:"px-2 py-2 text-red-500 bg-red-100 w-full rounded-lg"},$e={class:"w-1 p-4 py-2"},ke={class:"flex items-center"},Se={class:"flex cursor-pointer items-center rounded-sm p-1",for:"selected_row","data-ripple-dark":"true"},Ee=["id"],Te={class:"px-2 py-2 font-medium text-center"},Ce={__name:"ShowSTFEachRow",props:["each","index"],setup(o){const e=o,t=b(),a=T(!1),r=()=>{a.value=!a.value,a.value?t.warehouse_selecting_rows.push(e.each):t.warehouse_selecting_rows=t.warehouse_selecting_rows.filter(l=>l.stf_id!==e.each.stf_id)};return(l,i)=>{var f;return(f=e.each)!=null&&f.canceled_id?(n(),d("tr",{key:1,class:$([a.value?"text-white bg-blue-600  hover:bg-blue-500 ":"bg-red-200  hover:bg-blue-600 hover:text-white hover:duration-200 ","border-b hover:cursor-pointer table_row"])},[_(N,{each:e==null?void 0:e.each},{stf_complete:A(()=>{var u,m,h,v;return[(u=e.each)!=null&&u.canceled_id?(n(),d("div",xe,we)):(n(),d("div",ge,[(m=e==null?void 0:e.each)!=null&&m.completed?(n(),d("span",ve," Completed : "+x((h=e==null?void 0:e.each)==null?void 0:h.completed),1)):(n(),d("span",ye," Completed : "+x((v=e==null?void 0:e.each)==null?void 0:v.completed),1))]))]}),_:1},8,["each"]),s("td",$e,[s("div",ke,[s("label",Se,[s("input",{id:e.each.id,type:"checkbox",onChange:i[1]||(i[1]=u=>r(e.each.id)),class:"checkbox checkbox-xs checkbox-primary"},null,40,Ee)])])]),s("th",Te,x(e.index+1),1),_(G,{each:e==null?void 0:e.each,table_headers:c(t).all_stf_headers},null,8,["each","table_headers"])],2)):(n(),d("tr",{key:0,class:$([a.value?"text-white bg-blue-600  hover:bg-blue-500 ":"bg-white  hover:bg-blue-600 hover:text-white hover:duration-200 ","border-b hover:cursor-pointer table_row"])},[_(N,{each:e==null?void 0:e.each},{stf_complete:A(()=>{var u,m,h,v;return[(u=e.each)!=null&&u.canceled_id?(n(),d("div",re,ie)):(n(),d("div",de,[(m=e==null?void 0:e.each)!=null&&m.completed?(n(),d("span",ce," Completed : "+x((h=e==null?void 0:e.each)==null?void 0:h.completed),1)):(n(),d("span",_e," Completed : "+x((v=e==null?void 0:e.each)==null?void 0:v.completed),1))]))]}),_:1},8,["each"]),s("td",he,[s("div",ue,[s("label",fe,[s("input",{id:e.each.id,type:"checkbox",onChange:i[0]||(i[0]=u=>r(e.each.id)),class:"checkbox checkbox-xs checkbox-primary"},null,40,me)])])]),s("th",pe,x(e.index+1),1),_(G,{each:e==null?void 0:e.each,table_headers:c(t).all_stf_headers},null,8,["each","table_headers"])],2))}}};const Re=o=>(Q("data-v-76290771"),o=o(),K(),o),Fe={key:0,class:"mtf-anim fixed left-1/4 bottom-10 flex flex-row mb-4 justify-center rounded-lg w-1/2"},Ae={class:"flex justify-between bg-white border rounded-md shadow-2xl w-full"},Ue={class:"flex items-center"},De={class:"bg-blue-600 py-4 px-6 text-white font-bold rounded-l-md text-3xl"},Ne={class:"ml-3"},Ge=Re(()=>s("p",null,"Task Selected",-1)),Ie={class:"text-blue-600"},ze=q('<div class="flex items-center ml-[200px]" data-v-76290771><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-76290771><i class="fa-regular fa-trash-can" data-v-76290771></i> <span class="text-sm" data-v-76290771>Add Archieve</span></div><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-76290771><i class="fa-solid fa-eye-slash" data-v-76290771></i> <span class="text-sm" data-v-76290771>Dont Show</span></div><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-76290771><i class="fa-regular fa-star" data-v-76290771></i> <span class="text-sm" data-v-76290771>Set Star</span></div></div>',1),He={__name:"SelectingRows",setup(o){const e=b(),t=T([]);return I(()=>{t.value=e.warehouse_selecting_rows}),(a,r)=>c(e).warehouse_selecting_rows.length>=1?(n(),d("div",Fe,[s("div",Ae,[s("div",Ue,[s("span",De,x(t.value.length),1),s("div",Ne,[Ge,(n(!0),d(C,null,R(t.value.length,l=>(n(),d("span",Ie,"●"))),256))])]),ze])])):w("",!0)}},Le=H(He,[["__scopeId","data-v-76290771"]]),Me={class:"flex flex-col",style:{display:"inline-block"}},We={class:"sticky top-10 px-1 z-10"},je={class:"sticky left-16 flex flex-col bg-white",style:{display:"inline-block",width:"calc(100vw - 5rem)"}},Ve={key:0,class:"mx-2 w-full shadow-xl mt-1"},Be={key:1,class:"flex flex-row justify-center items-center w-full h-96"},Pe=s("span",{class:"loading loading-dots loading-lg"},null,-1),Oe=[Pe],qe={key:2,class:"flex flex-row justify-center items-center w-full h-96"},Qe={class:"text-3xl"},Ke={class:"font-bold"},Je={__name:"ShowSTF",setup(o){const e=b(),t=U();z(async()=>{const r=t.GETUSER;r===void 0||(await e.fetchUserSTFAll(r),e.GETALLSTFHEADERS.length===0&&await e.getHeaders())});const a=async r=>{var l;t.GETUSER!==void 0&&(r.user=(l=t==null?void 0:t.GETUSER)==null?void 0:l.id,await e.getFilteredData(r))};return(r,l)=>(n(),d("div",Me,[_(j),s("div",We,[s("div",je,[_(W),_(ae,{onFilterFunction:a},{default:A(()=>[(n(),k(V,{key:0,table_headers:c(e).GETALLSTFHEADERS},null,8,["table_headers"]))]),_:1})])]),c(e).GETALLSTFHEADERS.length?(n(),d("table",Ve,[_(B,{table_headers:c(e).GETALLSTFHEADERS},null,8,["table_headers"]),(n(!0),d(C,null,R(c(e).all_stf,(i,f)=>(n(),k(Ce,{each:i,index:f},null,8,["each","index"]))),256))])):w("",!0),c(e).all_stf_loading?(n(),d("div",Be,Oe)):w("",!0),c(e).all_stf_cond_text?(n(),d("div",qe,[s("span",Qe,[g(" There is not any data in warehouse which created by "),s("span",Ke,x(c(t).user.name)+" "+x(c(t).user.surname),1)])])):w("",!0),_(Le)]))}},Xe={},Ze={class:"text-gray-100 bg-slate-700 border table_header"},Ye=s("tr",null,[s("th",{scope:"col",class:"px-6 py-2 text-center border"}," S/S "),s("th",{scope:"col",class:"px-6 py-1 text-center border"},[s("div",{class:""}," Type ")]),s("th",{scope:"col",class:"px-6 py-1 text-center border w-1/3"},[s("div",{class:""}," Material Name ")]),s("th",{scope:"col",class:"px-6 py-1 text-center border"},[s("div",{class:""}," Link ")]),s("th",{scope:"col",class:"px-6 py-1 text-center border w-4"}," Count "),s("th",{scope:"col",class:"px-6 py-1 text-center border w-4"}," Unit "),s("th",{scope:"col",class:"px-6 py-1 text-center border w-8"}," Field "),s("th",{scope:"col",class:"px-6 py-1 text-center border"}," Comment ")],-1),et=[Ye];function tt(o,e){return n(),d("thead",Ze,et)}const st=H(Xe,[["render",tt]]),at={scope:"row",class:"w-8 text-gray-900 whitespace-nowrap dark:text-white text-center table_row"},ot={class:"flex justify-between items-center px-1"},lt=s("span",{class:"relative flex h-3 w-3"},[s("span",{class:"animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"}),s("span",{class:"relative inline-flex rounded-full h-3 w-3 bg-orange-500"})],-1),rt={scope:"row",class:"p-1 border text-gray-900 whitespace-nowrap dark:text-white table_row",style:{}},nt=s("option",{disabled:"",value:""},"Type",-1),it=s("option",null,"Project",-1),dt=s("option",null,"Consumables",-1),ct=s("option",null,"Fixture",-1),_t=[nt,it,dt,ct],ht={class:"p-1 border text-gray-900 whitespace-nowrap dark:text-white"},ut={class:"p-1 border text-gray-900 whitespace-nowrap dark:text-white"},ft={class:"p-1 border"},mt={class:"p-1 border",style:{}},pt=s("option",{disabled:"",value:""},"Unit",-1),xt=s("option",null,"Adet",-1),bt=s("option",null,"M2",-1),wt=s("option",null,"M3",-1),gt=s("option",null,"Ton",-1),vt=s("option",null,"Kg",-1),yt=[pt,xt,bt,wt,gt,vt],$t={class:"p-1 border"},kt=s("option",{disabled:"",value:""},"Field",-1),St=["value"],Et={class:"p-1 border",style:{}},Tt={__name:"STF_Table_Body_Each_Row_Comp",props:["id","order_list"],setup(o){const e=o,t=b(),a=Y({each_id:e==null?void 0:e.id,material_type:"",material_name:"",material_amount:0,material_unit:"",link:"",fieldId:0,comment:""});return I(()=>{var r;if(((r=t.order_list)==null?void 0:r.length)>=1){let l=!1;for(let i of t.order_list)if(i.each_id===a.each_id){l=!0;break}!l&&a.each_id!=""&&t.order_list.push(a)}else t.order_list.push(a);if(t.after_created)for(let l=0;l<t.order_list.length;l++)a.each_id=0,a.material_type="",a.material_name="",a.link="",a.material_amount=0,a.material_unit="",a.fieldId=0,t.order_list.splice(l,1)}),(r,l)=>(n(),d(C,null,[s("td",at,[s("div",ot,[s("span",null,x(a.each_id),1),lt])]),s("td",rt,[E(s("select",{class:"border border-red-500 outline-none rounded-lg w-full h-full p-2","onUpdate:modelValue":l[0]||(l[0]=i=>a.material_type=i)},_t,512),[[M,a.material_type]])]),s("td",ht,[E(s("input",{class:"border border-red-500 outline-none rounded-lg w-full h-full p-2",type:"text",placeholder:"Material Name...","onUpdate:modelValue":l[1]||(l[1]=i=>a.material_name=i)},null,512),[[D,a.material_name]])]),s("td",ut,[E(s("input",{class:"border outline-none rounded-lg w-full h-full p-2",type:"text",placeholder:"Material Link...","onUpdate:modelValue":l[2]||(l[2]=i=>a.link=i)},null,512),[[D,a.link]])]),s("td",ft,[E(s("input",{class:"border border-red-500 outline-none rounded-lg w-full h-full p-2",type:"number",min:"0.001",placeholder:"Count...","onUpdate:modelValue":l[3]||(l[3]=i=>a.material_amount=i)},null,512),[[D,a.material_amount]])]),s("td",mt,[E(s("select",{class:"border border-red-500 outline-none rounded-lg w-full h-full p-2","onUpdate:modelValue":l[4]||(l[4]=i=>a.material_unit=i)},yt,512),[[M,a.material_unit]])]),s("td",$t,[E(s("select",{class:"border border-red-500 outline-none rounded-lg w-full h-full p-2","onUpdate:modelValue":l[5]||(l[5]=i=>a.fieldId=i)},[kt,(n(!0),d(C,null,R(c(t).GETFIELDSNAME,i=>(n(),d("option",{value:i.id},x(i.field_name),9,St))),256))],512),[[M,a.fieldId]])]),s("td",Et,[E(s("input",{class:"border outline-none rounded-lg w-full h-full p-2",type:"text",placeholder:"Comment...","onUpdate:modelValue":l[6]||(l[6]=i=>a.comment=i)},null,512),[[D,a.comment]])])],64))}};const Ct={__name:"STF_Table_Body_Column_Name_Comp",props:["row_size","order_list"],setup(o){const e=o;return(t,a)=>(n(!0),d(C,null,R(e.row_size,r=>(n(),d("tr",{class:$([r===1?"bg-red-50":"","bg-white border-b hover:bg-gray-50 table_row"])},[(n(),k(Tt,{id:r,key:r,order_list:o.order_list},null,8,["id","order_list"]))],2))),256))}},Rt=H(Ct,[["__scopeId","data-v-6718c5c3"]]),Ft={__name:"STF_Table_Body_Comp",props:["row_size","order_list"],setup(o){const e=o;return(t,a)=>(n(),d("tbody",null,[_(Rt,{row_size:e==null?void 0:e.row_size,order_list:o.order_list},null,8,["row_size","order_list"])]))}},At={class:"flex justify-between mt-1"},Ut=s("i",{class:"fa-solid fa-plus fa-lg"},null,-1),Dt=s("i",{class:"fa-solid fa-minus fa-lg"},null,-1),Nt={__name:"STF_Table_Row_Count_Comp",emits:["emitAddNewRow","emitRemoveRow"],setup(o,{emit:e}){const t=()=>e("emitAddNewRow"),a=()=>e("emitRemoveRow");return(r,l)=>(n(),d("div",At,[s("button",{onClick:t,class:"font-bold py-2 px-2 my-1 text-xs outline-none font-mono border text-gray-100 rounded-xl bg-orange-500 hover:bg-orange-400 hover:shadow-xl"},[Ut,g(" Add New Column ")]),s("button",{onClick:a,class:"py-2 px-2 my-1 text-xs outline-none font-mono font-bold border text-gray-100 rounded-xl bg-red-500 hover:bg-red-400 hover:shadow-xl"},[Dt,g(" Remove Column ")])]))}},Gt={class:"flex items-center justify-end mt-10"},It=s("i",{class:"fa-solid fa-plus"},null,-1),zt={key:1,type:"button",class:"text-white bg-gradient-to-r bg-blue-600 hover:bg-blue-500 hover:shadow-xl font-medium rounded-lg text-md px-4 py-2 text-center mr-2 mb-2"},Ht=s("span",{class:"loading loading-spinner"},null,-1),Lt={__name:"STF_Create_Button_Comp",props:["row_size"],emits:["setRowSize"],setup(o,{emit:e}){const t=o,a=b(),r=U(),l=T(!0),i=async()=>{var f,u,m,h,v,P,O;if(console.log("order list : ",a.order_list),l.value=!1,a.order_list.length===0&&alert("Must Create at least 1 data"),t.row_size===0)alert("Must Create at least 1 data");else{let F=!0;for(let p=0;p<t.row_size;p++)if(((f=a.order_list[p])==null?void 0:f.material_name)===""){F=!1,alert(`${p+1} Row Material Name is Empty`);break}else if(((u=a.order_list[p])==null?void 0:u.material_type)===""){F=!1,alert(`${p+1} Row Material Type Cant Be An Empty`);break}else if(((m=a.order_list[p])==null?void 0:m.material_amount)<=0){F=!1,alert(`${p+1} Row Material Amount In Not True Amount`);break}else if(((h=a.order_list[p])==null?void 0:h.material_unit)===""){F=!1,alert(`${p+1} Row Unit Is Not Selected`);break}else if(((v=a.order_list[p])==null?void 0:v.fieldId)===0){F=!1,alert(`${p+1} Row Field Not Selected`);break}if(F)try{const p={orders:a.order_list,user:r==null?void 0:r.user};for(let S=(P=a.order_list)==null?void 0:P.length;S>t.row_size;S--){const L=(O=a.order_list)==null?void 0:O.pop()}console.log("creating data : ",p),await a.createSTF(p).then(async S=>{var L;((L=S==null?void 0:S.response)==null?void 0:L.status)===400?alert("MTF Cant Create"):(a.msg_cond=!0,setTimeout(()=>{e("setRowSize"),l.value=!0,a.after_created=!0,a.tab_num=0,a.fetchUserSTFAll(p.user)},500),setTimeout(()=>{a.msg_cond=!1},1e3))}).catch(S=>{console.log("from create Error component : ",S)})}catch(p){console.log("error : ",p)}else l.value=!0}};return(f,u)=>(n(),d("div",Gt,[l.value?(n(),d("button",{key:0,type:"button",onClick:i,class:"text-white bg-gradient-to-r bg-blue-600 hover:bg-blue-500 hover:shadow-xl font-medium rounded-lg text-md px-4 py-2 text-center mr-2 mb-2"},[It,g(" Create")])):(n(),d("button",zt,[Ht,g(" Loading")]))]))}},Mt={class:"overflow-x-auto shadow-xl sm:rounded-lg border p-2"},Wt=s("h1",{class:"text-center text-3xl py-4",style:{"font-family":"'Poppins'"}}," Create STF Form",-1),jt={class:"w-full text-left text-gray-500 dark:text-gray-400"},Vt={__name:"CreateSTF",setup(o){const e=b(),t=T(1),a=()=>{let u=!0,m=0;for(let h of e.order_list){const v=h==null?void 0:h.material_name.trim();(h==null?void 0:h.material_type)===""?(u=!1,alert(`${m+1} Row Material Type Cant Be Empty`)):v===""?(u=!1,alert(`${m+1} Row Material Name Cant Be Empty`)):(h==null?void 0:h.material_amount)<=0?(u=!1,alert(`${m+1} Row Material Amount Cant Be 0`)):(h==null?void 0:h.material_unit)===""?(u=!1,alert(`${m+1} Row Material Unit Is Not Selected`)):(h==null?void 0:h.fieldId)===0&&(u=!1,alert(`${m+1} Row Field Is Not Selected`)),m++}u&&e.order_list.length&&(t.value+=1)},r=()=>{t.value>1?t.value-=1:t.value},l=()=>{t.value=0};let i=T([]);const f=()=>{t.value=1,e.after_created=!1};return(u,m)=>(n(),d("div",Mt,[Wt,t.value===0?(n(),d("button",{key:0,class:"font-bold py-2 px-2 my-1 text-xs outline-none font-mono border text-gray-100 rounded-xl bg-green-500 mb-2",onClick:m[0]||(m[0]=h=>f())}," Create New STF ")):w("",!0),s("table",jt,[_(st),_(Ft,{row_size:t.value,order_list:c(i)},null,8,["row_size","order_list"])]),_(Nt,{onEmitAddNewRow:a,onEmitRemoveRow:r}),_(Lt,{onSetRowSize:l,row_size:t.value},null,8,["row_size"]),_(oe,{cond:c(e).msg_cond,messages:"New STF Successfuly Created"},null,8,["cond"])]))}},Bt={class:"w-1 p-4 py-2"},Pt={class:"flex items-center"},Ot={class:"flex cursor-pointer items-center rounded-sm p-1",for:"selected_row","data-ripple-dark":"true"},qt=["id"],Qt={class:"px-2 py-2 font-medium text-center"},Kt={__name:"ShowWarehouseEachRow",props:["each","index"],setup(o){const e=o,t=b(),a=T(!1),r=()=>{a.value=!a.value,a.value?t.warehouse_selecting_rows.push(e.each):t.warehouse_selecting_rows=t.warehouse_selecting_rows.filter(l=>l.stf_id!==e.each.stf_id)};return(l,i)=>(n(),d("tr",{class:$([a.value?"text-white bg-blue-600  hover:bg-blue-500 ":" bg-white  hover:bg-blue-600 hover:text-white hover:duration-200 ","border-b hover:cursor-pointer table_row"])},[_(N,{each:e==null?void 0:e.each},null,8,["each"]),s("td",Bt,[s("div",Pt,[s("label",Ot,[s("input",{id:e.each.id,type:"checkbox",onChange:i[0]||(i[0]=f=>r(e.each.id)),class:"checkbox checkbox-xs checkbox-primary"},null,40,qt)])])]),s("th",Qt,x(e.index+1),1),_(G,{each:e==null?void 0:e.each,table_headers:c(t).GETWAREHOUSEHEADERS},null,8,["each","table_headers"])],2))}};const Jt=o=>(Q("data-v-6a925cb8"),o=o(),K(),o),Xt={key:0,class:"mtf-anim fixed left-1/4 bottom-10 flex flex-row mb-4 justify-center rounded-lg w-1/2"},Zt={class:"flex justify-between bg-white border rounded-md shadow-2xl w-full"},Yt={class:"flex items-center"},es={class:"bg-blue-600 py-4 px-6 text-white font-bold rounded-l-md text-3xl"},ts={class:"ml-3"},ss=Jt(()=>s("p",null,"Task Selected",-1)),as={class:"text-blue-600"},os=q('<div class="flex items-center ml-[200px]" data-v-6a925cb8><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-6a925cb8><i class="fa-regular fa-trash-can" data-v-6a925cb8></i> <span class="text-sm" data-v-6a925cb8>Add Archieve</span></div><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-6a925cb8><i class="fa-solid fa-eye-slash" data-v-6a925cb8></i> <span class="text-sm" data-v-6a925cb8>Dont Show</span></div><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-6a925cb8><i class="fa-regular fa-star" data-v-6a925cb8></i> <span class="text-sm" data-v-6a925cb8>Set Star</span></div></div>',1),ls={__name:"SelectingRows",setup(o){const e=b(),t=T([]);return I(()=>{t.value=e.warehouse_selecting_rows}),(a,r)=>c(e).warehouse_selecting_rows.length>=1?(n(),d("div",Xt,[s("div",Zt,[s("div",Yt,[s("span",es,x(t.value.length),1),s("div",ts,[ss,(n(!0),d(C,null,R(t.value.length,l=>(n(),d("span",as,"●"))),256))])]),os])])):w("",!0)}},rs=H(ls,[["__scopeId","data-v-6a925cb8"]]),ns={class:"flex flex-col",style:{display:"inline-block"}},is={class:"sticky top-10 px-1 z-10"},ds={class:"sticky left-16 flex flex-col bg-white",style:{display:"inline-block",width:"calc(100vw - 5rem)"}},cs={key:0,class:"mx-2 text-gray-800 w-full shadow-xl bg-white mt-1"},_s={key:1,class:"flex flex-row justify-center items-center w-full h-96"},hs=s("span",{class:"loading loading-dots loading-lg"},null,-1),us=[hs],fs={key:2,class:"flex flex-row justify-center items-center w-full h-96"},ms={class:"text-3xl"},ps={class:"font-bold"},xs={__name:"WarehouseData",setup(o){const e=b(),t=U(),a=X();z(async()=>{const l=t.GETUSER;l===void 0||(await e.fetchWarehouseData(l),await a.getCompaniesNames(),e.GETWAREHOUSEHEADERS.length===0&&await e.getWarehouseHeaders())});const r=async l=>{var i;t.GETUSER!==void 0&&(l.user=(i=t==null?void 0:t.GETUSER)==null?void 0:i.id,await e.getFilteredWarehouseData(l))};return(l,i)=>(n(),d("div",ns,[_(j),s("div",is,[s("div",ds,[_(W),_(Z,{onFilterFunction:r},{default:A(()=>[(n(),k(V,{key:0,table_headers:c(e).GETWAREHOUSEHEADERS},null,8,["table_headers"]))]),_:1})])]),c(e).GETWAREHOUSEHEADERS.length?(n(),d("table",cs,[_(B,{table_headers:c(e).GETWAREHOUSEHEADERS},null,8,["table_headers"]),(n(!0),d(C,null,R(c(e).warehouse_data,(f,u)=>(n(),k(Kt,{each:f,index:u},null,8,["each","index"]))),256))])):w("",!0),c(e).warehouse_data_loading?(n(),d("div",_s,us)):w("",!0),c(e).warehouse_data_cond_text?(n(),d("div",fs,[s("span",ms,[g(" There is not any data in warehouse which created by "),s("span",ps,x(c(t).user.name)+" "+x(c(t).user.surname),1)])])):w("",!0),_(rs)]))}},bs={class:"w-1 p-4 py-2"},ws={class:"flex items-center"},gs=s("label",{for:"checkbox-table-search-1",class:"sr-only"},"checkbox",-1),vs={class:"px-2 py-3 text-center"},ys={__name:"Provided_Table_Body_Each_Row",props:["each","index"],emits:["addChecked","removeChecked"],setup(o,{emit:e}){const t=o,a=b(),r=T(!1),l=()=>r.value===!0?e("addChecked",t==null?void 0:t.each):e("removeChecked",t==null?void 0:t.each);return I(()=>{a.after_provide&&(r.value=!1)}),(i,f)=>(n(),d("tr",{class:$([r.value?"text-white  bg-blue-600 hover:bg-blue-500 ":"bg-white hover:bg-blue-600 hover:text-white hover:duration-200","border-b table_row hover:cursor-pointer"])},[_(N,{each:t==null?void 0:t.each},null,8,["each"]),s("td",bs,[s("div",ws,[gs,E(s("input",{id:"checkbox-table-search-1",type:"checkbox","onUpdate:modelValue":f[0]||(f[0]=u=>r.value=u),onChange:l,class:"checkbox checkbox-xs checkbox-primary"},null,544),[[ee,r.value]])])]),s("th",vs,x((t==null?void 0:t.index)+1),1),_(G,{each:t==null?void 0:t.each,table_headers:c(a).provided_data_headers},null,8,["each","table_headers"])],2))}},$s={__name:"Provided_Table_Body",setup(o){const e=b();return(t,a)=>(n(!0),d(C,null,R(c(e).provides_data,(r,l)=>(n(),k(ys,{each:r,index:l},null,8,["each","index"]))),256))}},ks={class:"flex flex-col",style:{display:"inline-block"}},Ss={class:"sticky h-40 top-10 bg-white z-10"},Es={class:"sticky left-16 flex flex-col w-max bg-white",style:{display:"inline-block",width:"calc(100vw - 5rem)"}},Ts={class:""},Cs={key:0,class:"mx-2 text-gray-800 dark:text-gray-400 w-full shadow-xl bg-white mt-1",style:{"font-size":"xx-small"}},Rs={key:1,class:"flex flex-row justify-center items-center w-full h-96"},Fs=s("span",{class:"loading loading-dots loading-lg"},null,-1),As=[Fs],Us={key:2,class:"flex flex-row justify-center items-center w-full h-96"},Ds={class:"text-3xl"},Ns={class:"font-bold"},Gs={__name:"ProvideData",setup(o){const e=b(),t=U();z(async()=>{const r=t.GETUSER;r===void 0||(console.log("else work"),await e.fetchProvidedData(r),e.provided_data_headers.length===0&&e.getProvidedDataHeaders())});const a=async r=>{var l;t.GETUSER!==void 0&&(r.department=(l=t==null?void 0:t.GETUSER)==null?void 0:l.departmentId,await e.getFilteredDataProvided(r))};return(r,l)=>(n(),d("div",ks,[_(j),s("div",Ss,[s("div",Es,[_(W),_(le,{onFilterFunction:a},{default:A(()=>[(n(),k(V,{key:0,table_headers:c(e).provided_data_headers},null,8,["table_headers"]))]),_:1})])]),s("div",Ts,[c(e).provided_data_headers.length?(n(),d("table",Cs,[_(B,{table_headers:c(e).provided_data_headers},null,8,["table_headers"]),_($s)])):w("",!0),c(e).provide_data_loading?(n(),d("div",Rs,As)):w("",!0),c(e).provide_data_cond_text?(n(),d("div",Us,[s("span",Ds,[g(" There is not any provide data which created by "),s("span",Ns,x(c(t).user.name)+" "+x(c(t).user.surname),1)])])):w("",!0)])]))}},Is={class:"flex flex-col bg-white"},zs={key:0,class:"bg-white",style:{"font-family":"'Poppins'"}},Hs={class:"bg-white sticky top-0"},Ls={class:"flex flex-row anim h-10 bg-white items-center sticky left-16",style:{"letter-spacing":"1px","font-size":"x-small",display:"inline-block"}},Ms={class:"flex flex-row anim h-10 sticky top-0 bg-white w-full items-center",style:{"letter-spacing":"1px","font-size":"x-small"}},Ws=s("i",{class:"fa-solid fa-list fa-lg"},null,-1),js=s("i",{class:"fa-solid fa-plus fa-lg"},null,-1),Vs=s("i",{class:"fa-solid fa-warehouse fa-lg"},null,-1),Bs=s("i",{class:"fa-solid fa-upload fa-lg"},null,-1),Ps={key:1},Os=s("span",null,"User Not Login ",-1),qs=[Os],fa={__name:"views.stf",setup(o){const e=U(),t=b(),a=[Je,Vt,xs,Gs],r=l=>{t.tab_num=l};return z(async()=>{const l=e.GETUSER;l===void 0||t.fetchFieldsNames(l==null?void 0:l.projectId)}),(l,i)=>(n(),d("div",Is,[c(e).user?(n(),d("div",zs,[s("div",Hs,[s("div",Ls,[s("div",Ms,[s("span",{class:$([c(t).tab_num===0?"border-b-violet-800 border-b-4 ":"","text-black px-3 py-2 pt-2 mx-1 border-b-2 cursor-pointer"]),onClick:i[0]||(i[0]=f=>r(0))},[Ws,g(" Show STF")],2),s("span",{class:$([c(t).tab_num===1?"border-b-violet-800 border-b-4 ":"","text-black px-3 py-2 pt-2 mx-1 border-b-2 cursor-pointer"]),onClick:i[1]||(i[1]=f=>r(1))},[js,g(" Create STF")],2),s("span",{class:$([c(t).tab_num===2?"border-b-violet-800 border-b-4 ":"","text-black px-3 py-2 pt-2 mx-1 border-b-2 cursor-pointer"]),onClick:i[2]||(i[2]=f=>r(2))},[Vs,g(" Warehouse")],2),s("span",{class:$([c(t).tab_num===3?"border-b-violet-800 border-b-4 ":"","text-black px-3 py-2 pt-2 mx-1 border-b-2 cursor-pointer"]),onClick:i[3]||(i[3]=f=>r(3))},[Bs,g(" Provides")],2)])])]),(n(),k(se,null,[(n(),k(te(a[c(t).tab_num])))],1024))])):(n(),d("div",Ps,qs))]))}};export{fa as default};
