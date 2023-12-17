import{H as v,J,f as E,o as i,c as d,b as _,a as s,t as p,u as c,K as S,_ as N,y as D,F as T,M as R,A as b,z as q,N as Q,O as K,U as C,g as G,w as z,Q as y,d as g,S as X,T as k,V as H,W as U,X as Y,Y as Z,Z as ee}from"./index-18940bb6.js";import{_ as M,a as L,T as W,b as j,c as V,d as B,e as te,W as se,f as ae}from"./TableFilterWarehouse-72e1e875.js";import{_ as oe}from"./TableFilter-e50ab875.js";import{_ as le}from"./TableFilterProvide-2bbc13b8.js";v.defaults.withCredentials=!0;const x=J("STFStore",{state:()=>({tab_num:0,all_stf:null,all_stf_loading:!0,all_stf_cond_text:!1,all_stf_headers:[],warehouse_selecting_rows:[],order_list:[],fields:[],warehouse_data:[],warehouse_data_loading:!0,warehouse_data_cond_text:!1,warehouse_headers:[],provides_data:[],provide_data_loading:!0,provide_data_cond_text:!1,provided_data_headers:[],warehouse_selecting_rows:[],msg_cond:!1,after_created:!1}),getters:{GETALLSTF:o=>o.all_stf,GETALLSTFHEADERS:o=>o.all_stf_headers,GETSELECTINGROWS:o=>o.warehouse_selecting_rows,GETFIELDSNAME:o=>o.fields,GETWAREHOUSEDATA:o=>o.warehouse_data,GETWAREHOUSEHEADERS:o=>o.warehouse_headers},actions:{async createSTF(o){try{await v.post("http://localhost:3000/stf/createstf",o).then(e=>e)}catch(e){return e}},async fetchUserSTFAll(o){if(this.all_stf_loading=!0,o!=null&&o.id)try{await v.get(`http://localhost:3000/stf/getuserstfall/${o.id}`).then(e=>{e.data.length!==0?(this.all_stf=e.data,this.all_stf_loading=!1,this.all_stf_cond_text=!1):(this.all_stf_loading=!1,this.all_stf_cond_text=!0)}).catch(e=>{console.log("Fetch User Catch Error : ",e)})}catch(e){return console.log("Fetch User STF Error : ",e),e}},async getFilteredData(o){this.all_stf_loading=!0;const e=this.createUrlQuery(o);try{await v.get(`http://localhost:3000/common/filterstf${e}`).then(t=>{t.data.length!==0?(this.all_stf=t.data,this.all_stf_loading=!1,this.all_stf_cond_text=!1):(this.all_stf_loading=!1,this.all_stf_cond_text=!0)}).catch(t=>{console.log("Error Is : ",t)})}catch(t){console.log("Get Filtered Data Error : ",t)}},async getHeaders(){var o,e;if(((o=this.all_stf)==null?void 0:o.length)>=1){for(let[t,a]of Object.entries(this==null?void 0:this.all_stf[0])){const r=t.slice(t.length-2,t.length);if(t!=="id"&&r!=="id"&&r!=="Id"){let l={},n=t.charAt(0).toUpperCase()+t.slice(1);n=n.split("_").join(" "),t==="completed"||t==="stf_num"||t==="createdAt"||t==="situation"||t==="material_type"||t==="material_name"||t==="amount"||t==="unit"||t==="username"||t==="field_name"?(l.showname=`${n}`,l.name=`${t}`,l.value=!0):(l.showname=`${n}`,l.name=`${t}`,l.value=!1),this.all_stf_headers.push(l)}}for(let t=0;t<((e=this.all_stf_headers)==null?void 0:e.length);t++){if(this.all_stf_headers[t].name==="completed"){let a=this.all_stf_headers[0];this.all_stf_headers[0]=this.all_stf_headers[t],this.all_stf_headers[t]=a}if(this.all_stf_headers[t].name==="stf_num"){let a=this.all_stf_headers[1];this.all_stf_headers[1]=this.all_stf_headers[t],this.all_stf_headers[t]=a}}}},async fetchFieldsNames(o){if(o)try{await v.get(`http://localhost:3000/common/fetchfields/${o}`).then(e=>{this.fields=e.data}).catch(e=>{console.log("Error Is : ",e)})}catch(e){console.log("fetch Field Names Error : ",e)}},async fetchWarehouseData(o){if(o!=null&&o.id){this.warehouse_data_loading=!0;try{await v.get(`http://localhost:3000/stf/warehouse/${o.id}`).then(e=>{var t;((t=e.data)==null?void 0:t.length)!==0?(this.warehouse_data=e.data,this.warehouse_data_loading=!1,this.warehouse_data_cond_text=!1):(this.warehouse_data_loading=!1,this.warehouse_data_cond_text=!0)}).catch(e=>{console.log("Fetch User Catch Error : ",e)})}catch(e){return console.log("Fetch User STF Error : ",e),e}}},async getFilteredWarehouseData(o){this.warehouse_data_loading=!0;const e=this.createUrlQuery(o);try{await v.get(`
                http://localhost:3000/common/filterwarehouse${e}
            `).then(t=>{var a;((a=t.data)==null?void 0:a.length)!==0?(this.warehouse_data=t.data,this.warehouse_data_loading=!1,this.warehouse_data_cond_text=!1):(this.warehouse_data_loading=!1,this.warehouse_data_cond_text=!0)}).catch(t=>{console.log("Error Is : ",t)})}catch(t){console.log("Get Filtered Data Error : ",t)}},async getWarehouseHeaders(){var o;if(((o=this.warehouse_data)==null?void 0:o.length)>1)for(let[e,t]of Object.entries(this==null?void 0:this.warehouse_data[0])){const a=e.slice(e.length-2,e.length);if(e!=="id"&&a!=="id"&&a!=="Id"){let r={},l=e.charAt(0).toUpperCase()+e.slice(1);l=l.split("_").join(" "),e==="stf_num"||e==="sm_num"||e==="material_name"||e==="amount"||e==="unit"||e==="vendor_name"||e==="stock"||e==="certificate"||e==="passport"||e==="field"?(r.showname=`${l}`,r.name=`${e}`,r.value=!0):(r.showname=`${l}`,r.name=`${e}`,r.value=!1),this.warehouse_headers.push(r)}}},async fetchProvidedData(o){await v.get(`http://localhost:3000/stf/provided/${o.departmentId}`).then(e=>{var t;((t=e.data)==null?void 0:t.length)!==0?(this.provides_data=e.data,this.provide_data_loading=!1,this.provide_data_cond_text=!1):(this.provide_data_loading=!1,this.provide_data_cond_text=!0)}).catch(e=>{console.log("Provied Items Error : ",e)})},async getFilteredDataProvided(o){const e=this.createUrlQuery(o);try{await v.get(`http://localhost:3000/common/filterprovided${e}`).then(t=>{var a;((a=t.data)==null?void 0:a.length)!==0?(this.provides_data=t.data,this.provide_data_loading=!1,this.provide_data_cond_text=!1):(this.provide_data_loading=!1,this.provide_data_cond_text=!0)}).catch(t=>{console.log("Error Is : ",t)})}catch(t){console.log("Get Filtered Data Error : ",t)}},async getProvidedDataHeaders(){var o;if((o=this.provides_data)!=null&&o.length){for(let[e,t]of Object.entries(this.provides_data[0]))if(e!=="id"){let a={},r=e.charAt(0).toUpperCase()+e.slice(1);r=r.split("_").join(" "),e==="sm_num"||e==="provided_date"||e==="material_name"||e==="amount"||e==="unit"||e==="serial_no"||e==="unique_id"||e==="deliver_to"||e==="card_number"?(a.showname=`${r}`,a.name=`${e}`,a.value=!0):(a.showname=`${r}`,a.name=`${e}`,a.value=!1),this.provided_data_headers.push(a)}}},createUrlQuery(o){let e="";for(let[t,a]of Object.entries(o))e===""&&(e+="?"),o[t],e+=`${t}=${o[t]}`,e+="&";return e=e.slice(0,-1),e}}}),re={class:"w-1 p-4 py-2"},ne={class:"flex items-center"},ie={class:"flex cursor-pointer items-center rounded-sm p-1",for:"selected_row","data-ripple-dark":"true"},de=["id"],ce={class:"px-2 py-2 font-medium text-center"},_e={__name:"ShowSTFEachRow",props:["each","index"],setup(o){const e=o,t=x(),a=E(!1),r=()=>{a.value=!a.value,a.value?t.warehouse_selecting_rows.push(e.each):t.warehouse_selecting_rows=t.warehouse_selecting_rows.filter(l=>l.stf_id!==e.each.stf_id)};return(l,n)=>(i(),d("tr",{class:S([a.value?"text-white bg-blue-600  hover:bg-blue-500 ":" bg-white  hover:bg-blue-600 hover:text-white hover:duration-200 ","border-b hover:cursor-pointer table_row"])},[_(M,{each:e==null?void 0:e.each},null,8,["each"]),s("td",re,[s("div",ne,[s("label",ie,[s("input",{id:e.each.id,type:"checkbox",onChange:n[0]||(n[0]=u=>r(e.each.id)),class:"checkbox checkbox-xs checkbox-primary"},null,40,de)])])]),s("th",ce,p(e.index+1),1),_(L,{each:e==null?void 0:e.each,table_headers:c(t).all_stf_headers},null,8,["each","table_headers"])],2))}};const he=o=>(Q("data-v-76290771"),o=o(),K(),o),ue={key:0,class:"mtf-anim fixed left-1/4 bottom-10 flex flex-row mb-4 justify-center rounded-lg w-1/2"},fe={class:"flex justify-between bg-white border rounded-md shadow-2xl w-full"},me={class:"flex items-center"},pe={class:"bg-blue-600 py-4 px-6 text-white font-bold rounded-l-md text-3xl"},xe={class:"ml-3"},we=he(()=>s("p",null,"Task Selected",-1)),be={class:"text-blue-600"},ge=q('<div class="flex items-center ml-[200px]" data-v-76290771><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-76290771><i class="fa-regular fa-trash-can" data-v-76290771></i> <span class="text-sm" data-v-76290771>Add Archieve</span></div><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-76290771><i class="fa-solid fa-eye-slash" data-v-76290771></i> <span class="text-sm" data-v-76290771>Dont Show</span></div><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-76290771><i class="fa-regular fa-star" data-v-76290771></i> <span class="text-sm" data-v-76290771>Set Star</span></div></div>',1),ve={__name:"SelectingRows",setup(o){const e=x(),t=E([]);return D(()=>{t.value=e.warehouse_selecting_rows}),(a,r)=>c(e).warehouse_selecting_rows.length>=1?(i(),d("div",ue,[s("div",fe,[s("div",me,[s("span",pe,p(t.value.length),1),s("div",xe,[we,(i(!0),d(T,null,R(t.value.length,l=>(i(),d("span",be,"●"))),256))])]),ge])])):b("",!0)}},ye=N(ve,[["__scopeId","data-v-76290771"]]),$e={class:"flex flex-col",style:{display:"inline-block"}},ke={class:"sticky top-10 px-1"},Se={class:"sticky left-16 flex flex-col bg-white",style:{display:"inline-block",width:"calc(100vw - 5rem)"}},Ee={key:0,class:"mx-2 w-full shadow-xl mt-1"},Te={key:1,class:"flex flex-row justify-center items-center w-full h-96"},Re=s("span",{class:"loading loading-dots loading-lg"},null,-1),Fe=[Re],Ce={key:2,class:"flex flex-row justify-center items-center w-full h-96"},Ae={class:"text-3xl"},Ue={class:"font-bold"},Ne={__name:"ShowSTF",setup(o){const e=x(),t=C();G(async()=>{const r=t.GETUSER;r===void 0||(await e.fetchUserSTFAll(r),e.GETALLSTFHEADERS.length===0&&await e.getHeaders())});const a=async r=>{var l;t.GETUSER!==void 0&&(r.user=(l=t==null?void 0:t.GETUSER)==null?void 0:l.id,await e.getFilteredData(r))};return(r,l)=>(i(),d("div",$e,[_(W),s("div",ke,[s("div",Se,[_(j),_(oe,{onFilterFunction:a},{default:z(()=>[(i(),y(V,{key:0,table_headers:c(e).GETALLSTFHEADERS},null,8,["table_headers"]))]),_:1})])]),c(e).GETALLSTFHEADERS.length?(i(),d("table",Ee,[_(B,{table_headers:c(e).GETALLSTFHEADERS},null,8,["table_headers"]),(i(!0),d(T,null,R(c(e).all_stf,(n,u)=>(i(),y(_e,{each:n,index:u},null,8,["each","index"]))),256))])):b("",!0),c(e).all_stf_loading?(i(),d("div",Te,Fe)):b("",!0),c(e).all_stf_cond_text?(i(),d("div",Ce,[s("span",Ae,[g(" There is not any data in warehouse which created by "),s("span",Ue,p(c(t).user.name)+" "+p(c(t).user.surname),1)])])):b("",!0),_(ye)]))}},De={},Ge={class:"text-gray-100 bg-slate-700 border table_header"},Ie=s("tr",null,[s("th",{scope:"col",class:"px-6 py-2 text-center border"}," S/S "),s("th",{scope:"col",class:"px-6 py-1 text-center border"},[s("div",{class:""}," Type ")]),s("th",{scope:"col",class:"px-6 py-1 text-center border w-1/3"},[s("div",{class:""}," Material Name ")]),s("th",{scope:"col",class:"px-6 py-1 text-center border"},[s("div",{class:""}," Link ")]),s("th",{scope:"col",class:"px-6 py-1 text-center border w-4"}," Count "),s("th",{scope:"col",class:"px-6 py-1 text-center border w-4"}," Unit "),s("th",{scope:"col",class:"px-6 py-1 text-center border w-8"}," Field "),s("th",{scope:"col",class:"px-6 py-1 text-center border"}," Comment ")],-1),He=[Ie];function ze(o,e){return i(),d("thead",Ge,He)}const Me=N(De,[["render",ze]]),Le={scope:"row",class:"w-8 text-gray-900 whitespace-nowrap dark:text-white text-center table_row"},We={class:"flex justify-between items-center px-1"},je=s("span",{class:"relative flex h-3 w-3"},[s("span",{class:"animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"}),s("span",{class:"relative inline-flex rounded-full h-3 w-3 bg-orange-500"})],-1),Ve={scope:"row",class:"p-1 border text-gray-900 whitespace-nowrap dark:text-white table_row",style:{}},Be=s("option",{disabled:"",value:""},"Type",-1),Oe=s("option",null,"Project",-1),Pe=s("option",null,"Consumables",-1),qe=s("option",null,"Fixture",-1),Qe=[Be,Oe,Pe,qe],Ke={class:"p-1 border text-gray-900 whitespace-nowrap dark:text-white"},Je={class:"p-1 border text-gray-900 whitespace-nowrap dark:text-white"},Xe={class:"p-1 border"},Ye={class:"p-1 border",style:{}},Ze=s("option",{disabled:"",value:""},"Unit",-1),et=s("option",null,"Adet",-1),tt=s("option",null,"M2",-1),st=s("option",null,"M3",-1),at=s("option",null,"Ton",-1),ot=s("option",null,"Kg",-1),lt=[Ze,et,tt,st,at,ot],rt={class:"p-1 border"},nt=s("option",{disabled:"",value:""},"Field",-1),it=["value"],dt={class:"p-1 border",style:{}},ct={__name:"STF_Table_Body_Each_Row_Comp",props:["id","order_list"],setup(o){const e=o,t=x(),a=X({each_id:e==null?void 0:e.id,material_type:"",material_name:"",material_amount:0,material_unit:"",link:"",fieldId:0,comment:""});return D(()=>{var r;if(((r=t.order_list)==null?void 0:r.length)>=1){let l=!1;for(let n of t.order_list)if(n.each_id===a.each_id){l=!0;break}!l&&a.each_id!=""&&t.order_list.push(a)}else t.order_list.push(a);if(t.after_created)for(let l=0;l<t.order_list.length;l++)a.each_id=0,a.material_type="",a.material_name="",a.link="",a.material_amount=0,a.material_unit="",a.fieldId=0,t.order_list.splice(l,1)}),(r,l)=>(i(),d(T,null,[s("td",Le,[s("div",We,[s("span",null,p(a.each_id),1),je])]),s("td",Ve,[k(s("select",{class:"border border-red-500 outline-none rounded-lg w-full h-full p-2","onUpdate:modelValue":l[0]||(l[0]=n=>a.material_type=n)},Qe,512),[[H,a.material_type]])]),s("td",Ke,[k(s("input",{class:"border border-red-500 outline-none rounded-lg w-full h-full p-2",type:"text",placeholder:"Material Name...","onUpdate:modelValue":l[1]||(l[1]=n=>a.material_name=n)},null,512),[[U,a.material_name]])]),s("td",Je,[k(s("input",{class:"border outline-none rounded-lg w-full h-full p-2",type:"text",placeholder:"Material Link...","onUpdate:modelValue":l[2]||(l[2]=n=>a.link=n)},null,512),[[U,a.link]])]),s("td",Xe,[k(s("input",{class:"border border-red-500 outline-none rounded-lg w-full h-full p-2",type:"number",min:"0.001",placeholder:"Count...","onUpdate:modelValue":l[3]||(l[3]=n=>a.material_amount=n)},null,512),[[U,a.material_amount]])]),s("td",Ye,[k(s("select",{class:"border border-red-500 outline-none rounded-lg w-full h-full p-2","onUpdate:modelValue":l[4]||(l[4]=n=>a.material_unit=n)},lt,512),[[H,a.material_unit]])]),s("td",rt,[k(s("select",{class:"border border-red-500 outline-none rounded-lg w-full h-full p-2","onUpdate:modelValue":l[5]||(l[5]=n=>a.fieldId=n)},[nt,(i(!0),d(T,null,R(c(t).GETFIELDSNAME,n=>(i(),d("option",{value:n.id},p(n.field_name),9,it))),256))],512),[[H,a.fieldId]])]),s("td",dt,[k(s("input",{class:"border outline-none rounded-lg w-full h-full p-2",type:"text",placeholder:"Comment...","onUpdate:modelValue":l[6]||(l[6]=n=>a.comment=n)},null,512),[[U,a.comment]])])],64))}};const _t={__name:"STF_Table_Body_Column_Name_Comp",props:["row_size","order_list"],setup(o){const e=o;return(t,a)=>(i(!0),d(T,null,R(e.row_size,r=>(i(),d("tr",{class:S([r===1?"bg-red-50":"","bg-white border-b hover:bg-gray-50 table_row"])},[(i(),y(ct,{id:r,key:r,order_list:o.order_list},null,8,["id","order_list"]))],2))),256))}},ht=N(_t,[["__scopeId","data-v-6718c5c3"]]),ut={__name:"STF_Table_Body_Comp",props:["row_size","order_list"],setup(o){const e=o;return(t,a)=>(i(),d("tbody",null,[_(ht,{row_size:e==null?void 0:e.row_size,order_list:o.order_list},null,8,["row_size","order_list"])]))}},ft={class:"flex justify-between mt-1"},mt=s("i",{class:"fa-solid fa-plus fa-lg"},null,-1),pt=s("i",{class:"fa-solid fa-minus fa-lg"},null,-1),xt={__name:"STF_Table_Row_Count_Comp",emits:["emitAddNewRow","emitRemoveRow"],setup(o,{emit:e}){const t=()=>e("emitAddNewRow"),a=()=>e("emitRemoveRow");return(r,l)=>(i(),d("div",ft,[s("button",{onClick:t,class:"font-bold py-2 px-2 my-1 text-xs outline-none font-mono border text-gray-100 rounded-xl bg-orange-500 hover:bg-orange-400 hover:shadow-xl"},[mt,g(" Add New Column ")]),s("button",{onClick:a,class:"py-2 px-2 my-1 text-xs outline-none font-mono font-bold border text-gray-100 rounded-xl bg-red-500 hover:bg-red-400 hover:shadow-xl"},[pt,g(" Remove Column ")])]))}},wt={class:"flex items-center justify-end mt-10"},bt=s("i",{class:"fa-solid fa-plus"},null,-1),gt={key:1,type:"button",class:"text-white bg-gradient-to-r bg-blue-600 hover:bg-blue-500 hover:shadow-xl font-medium rounded-lg text-md px-4 py-2 text-center mr-2 mb-2"},vt=s("span",{class:"loading loading-spinner"},null,-1),yt={__name:"STF_Create_Button_Comp",props:["row_size"],emits:["setRowSize"],setup(o,{emit:e}){const t=o,a=x(),r=C(),l=E(!0),n=async()=>{var u,m,w,h,A,O,P;if(l.value=!1,a.order_list.length===0&&alert("Must Create at least 1 data"),t.row_size===0)alert("Must Create at least 1 data");else{let F=!0;for(let f=0;f<t.row_size;f++)if(((u=a.order_list[f])==null?void 0:u.material_name)===""){F=!1,alert(`${f+1} Row Material Name is Empty`);break}else if(((m=a.order_list[f])==null?void 0:m.material_type)===""){F=!1,alert(`${f+1} Row Material Type Cant Be An Empty`);break}else if(((w=a.order_list[f])==null?void 0:w.material_amount)<=0){F=!1,alert(`${f+1} Row Material Amount In Not True Amount`);break}else if(((h=a.order_list[f])==null?void 0:h.material_unit)===""){F=!1,alert(`${f+1} Row Unit Is Not Selected`);break}else if(((A=a.order_list[f])==null?void 0:A.fieldId)===0){F=!1,alert(`${f+1} Row Field Not Selected`);break}if(F)try{const f={orders:a.order_list,user:r==null?void 0:r.user};for(let $=(O=a.order_list)==null?void 0:O.length;$>t.row_size;$--){const I=(P=a.order_list)==null?void 0:P.pop()}await a.createSTF(f).then(async $=>{var I;((I=$==null?void 0:$.response)==null?void 0:I.status)===400?alert("MTF Cant Create"):(a.msg_cond=!0,setTimeout(()=>{e("setRowSize"),l.value=!0,a.after_created=!0,a.tab_num=0,a.fetchUserSTFAll(f.user)},500),setTimeout(()=>{a.msg_cond=!1},1e3))}).catch($=>{console.log("from create Error component : ",$)})}catch(f){console.log("error : ",f)}else l.value=!0}};return(u,m)=>(i(),d("div",wt,[l.value?(i(),d("button",{key:0,type:"button",onClick:n,class:"text-white bg-gradient-to-r bg-blue-600 hover:bg-blue-500 hover:shadow-xl font-medium rounded-lg text-md px-4 py-2 text-center mr-2 mb-2"},[bt,g(" Create")])):(i(),d("button",gt,[vt,g(" Loading")]))]))}},$t={class:"overflow-x-auto shadow-xl sm:rounded-lg border p-2"},kt=s("h1",{class:"text-center text-3xl py-4",style:{"font-family":"'Poppins'"}}," Create STF Form",-1),St={class:"w-full text-left text-gray-500 dark:text-gray-400"},Et={__name:"CreateSTF",setup(o){const e=x(),t=E(1),a=()=>{let m=!0,w=0;for(let h of e.order_list){const A=h==null?void 0:h.material_name.trim();(h==null?void 0:h.material_type)===""?(m=!1,alert(`${w+1} Row Material Type Cant Be Empty`)):A===""?(m=!1,alert(`${w+1} Row Material Name Cant Be Empty`)):(h==null?void 0:h.material_amount)<=0?(m=!1,alert(`${w+1} Row Material Amount Cant Be 0`)):(h==null?void 0:h.material_unit)===""?(m=!1,alert(`${w+1} Row Material Unit Is Not Selected`)):(h==null?void 0:h.fieldId)===0&&(m=!1,alert(`${w+1} Row Field Is Not Selected`)),w++}m&&e.order_list.length&&(t.value+=1)},r=()=>{t.value>1?t.value-=1:t.value},l=()=>{t.value=0};let n=E([]);const u=()=>{t.value=1,e.after_created=!1};return(m,w)=>(i(),d("div",$t,[kt,t.value===0?(i(),d("button",{key:0,class:"font-bold py-2 px-2 my-1 text-xs outline-none font-mono border text-gray-100 rounded-xl bg-green-500 mb-2",onClick:w[0]||(w[0]=h=>u())}," Create New STF ")):b("",!0),s("table",St,[_(Me),_(ut,{row_size:t.value,order_list:c(n)},null,8,["row_size","order_list"])]),_(xt,{onEmitAddNewRow:a,onEmitRemoveRow:r}),_(yt,{onSetRowSize:l,row_size:t.value},null,8,["row_size"]),_(te,{cond:c(e).msg_cond,messages:"New STF Successfuly Created"},null,8,["cond"])]))}},Tt={class:"w-1 p-4 py-2"},Rt={class:"flex items-center"},Ft={class:"flex cursor-pointer items-center rounded-sm p-1",for:"selected_row","data-ripple-dark":"true"},Ct=["id"],At={class:"px-2 py-2 font-medium text-center"},Ut={__name:"ShowWarehouseEachRow",props:["each","index"],setup(o){const e=o,t=x(),a=E(!1),r=()=>{a.value=!a.value,a.value?t.warehouse_selecting_rows.push(e.each):t.warehouse_selecting_rows=t.warehouse_selecting_rows.filter(l=>l.stf_id!==e.each.stf_id)};return(l,n)=>(i(),d("tr",{class:S([a.value?"text-white bg-blue-600  hover:bg-blue-500 ":" bg-white  hover:bg-blue-600 hover:text-white hover:duration-200 ","border-b hover:cursor-pointer table_row"])},[_(M,{each:e==null?void 0:e.each},null,8,["each"]),s("td",Tt,[s("div",Rt,[s("label",Ft,[s("input",{id:e.each.id,type:"checkbox",onChange:n[0]||(n[0]=u=>r(e.each.id)),class:"checkbox checkbox-xs checkbox-primary"},null,40,Ct)])])]),s("th",At,p(e.index+1),1),_(L,{each:e==null?void 0:e.each,table_headers:c(t).GETWAREHOUSEHEADERS},null,8,["each","table_headers"])],2))}};const Nt=o=>(Q("data-v-6a925cb8"),o=o(),K(),o),Dt={key:0,class:"mtf-anim fixed left-1/4 bottom-10 flex flex-row mb-4 justify-center rounded-lg w-1/2"},Gt={class:"flex justify-between bg-white border rounded-md shadow-2xl w-full"},It={class:"flex items-center"},Ht={class:"bg-blue-600 py-4 px-6 text-white font-bold rounded-l-md text-3xl"},zt={class:"ml-3"},Mt=Nt(()=>s("p",null,"Task Selected",-1)),Lt={class:"text-blue-600"},Wt=q('<div class="flex items-center ml-[200px]" data-v-6a925cb8><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-6a925cb8><i class="fa-regular fa-trash-can" data-v-6a925cb8></i> <span class="text-sm" data-v-6a925cb8>Add Archieve</span></div><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-6a925cb8><i class="fa-solid fa-eye-slash" data-v-6a925cb8></i> <span class="text-sm" data-v-6a925cb8>Dont Show</span></div><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-6a925cb8><i class="fa-regular fa-star" data-v-6a925cb8></i> <span class="text-sm" data-v-6a925cb8>Set Star</span></div></div>',1),jt={__name:"SelectingRows",setup(o){const e=x(),t=E([]);return D(()=>{t.value=e.warehouse_selecting_rows}),(a,r)=>c(e).warehouse_selecting_rows.length>=1?(i(),d("div",Dt,[s("div",Gt,[s("div",It,[s("span",Ht,p(t.value.length),1),s("div",zt,[Mt,(i(!0),d(T,null,R(t.value.length,l=>(i(),d("span",Lt,"●"))),256))])]),Wt])])):b("",!0)}},Vt=N(jt,[["__scopeId","data-v-6a925cb8"]]),Bt={class:"flex flex-col",style:{display:"inline-block"}},Ot={class:"sticky top-10 px-1"},Pt={class:"sticky left-16 flex flex-col bg-white",style:{display:"inline-block",width:"calc(100vw - 5rem)"}},qt={key:0,class:"mx-2 text-gray-800 w-full shadow-xl bg-white mt-1"},Qt={key:1,class:"flex flex-row justify-center items-center w-full h-96"},Kt=s("span",{class:"loading loading-dots loading-lg"},null,-1),Jt=[Kt],Xt={key:2,class:"flex flex-row justify-center items-center w-full h-96"},Yt={class:"text-3xl"},Zt={class:"font-bold"},es={__name:"WarehouseData",setup(o){const e=x(),t=C(),a=se();G(async()=>{const l=t.GETUSER;l===void 0||(await e.fetchWarehouseData(l),await a.getCompaniesNames(),e.GETWAREHOUSEHEADERS.length===0&&await e.getWarehouseHeaders())});const r=async l=>{var n;t.GETUSER!==void 0&&(l.user=(n=t==null?void 0:t.GETUSER)==null?void 0:n.id,await e.getFilteredWarehouseData(l))};return(l,n)=>(i(),d("div",Bt,[_(W),s("div",Ot,[s("div",Pt,[_(j),_(ae,{onFilterFunction:r},{default:z(()=>[(i(),y(V,{key:0,table_headers:c(e).GETWAREHOUSEHEADERS},null,8,["table_headers"]))]),_:1})])]),c(e).GETWAREHOUSEHEADERS.length?(i(),d("table",qt,[_(B,{table_headers:c(e).GETWAREHOUSEHEADERS},null,8,["table_headers"]),(i(!0),d(T,null,R(c(e).warehouse_data,(u,m)=>(i(),y(Ut,{each:u,index:m},null,8,["each","index"]))),256))])):b("",!0),c(e).warehouse_data_loading?(i(),d("div",Qt,Jt)):b("",!0),c(e).warehouse_data_cond_text?(i(),d("div",Xt,[s("span",Yt,[g(" There is not any data in warehouse which created by "),s("span",Zt,p(c(t).user.name)+" "+p(c(t).user.surname),1)])])):b("",!0),_(Vt)]))}},ts={class:"w-1 p-4 py-2"},ss={class:"flex items-center"},as=s("label",{for:"checkbox-table-search-1",class:"sr-only"},"checkbox",-1),os={class:"px-2 py-3 text-center"},ls={__name:"Provided_Table_Body_Each_Row",props:["each","index"],emits:["addChecked","removeChecked"],setup(o,{emit:e}){const t=o,a=x(),r=E(!1),l=()=>r.value===!0?e("addChecked",t==null?void 0:t.each):e("removeChecked",t==null?void 0:t.each);return D(()=>{a.after_provide&&(r.value=!1)}),(n,u)=>(i(),d("tr",{class:S([r.value?"text-white  bg-blue-600 hover:bg-blue-500 ":"bg-white hover:bg-blue-600 hover:text-white hover:duration-200","border-b table_row hover:cursor-pointer"])},[_(M,{each:t==null?void 0:t.each},null,8,["each"]),s("td",ts,[s("div",ss,[as,k(s("input",{id:"checkbox-table-search-1",type:"checkbox","onUpdate:modelValue":u[0]||(u[0]=m=>r.value=m),onChange:l,class:"checkbox checkbox-xs checkbox-primary"},null,544),[[Y,r.value]])])]),s("th",os,p((t==null?void 0:t.index)+1),1),_(L,{each:t==null?void 0:t.each,table_headers:c(a).provided_data_headers},null,8,["each","table_headers"])],2))}},rs={__name:"Provided_Table_Body",setup(o){const e=x();return(t,a)=>(i(!0),d(T,null,R(c(e).provides_data,(r,l)=>(i(),y(ls,{each:r,index:l},null,8,["each","index"]))),256))}},ns={class:"flex flex-col",style:{display:"inline-block"}},is={class:"sticky h-40 top-10 bg-white"},ds={class:"sticky left-16 flex flex-col w-max bg-white",style:{display:"inline-block",width:"calc(100vw - 5rem)"}},cs={class:""},_s={key:0,class:"mx-2 text-gray-800 dark:text-gray-400 w-full shadow-xl bg-white mt-1",style:{"font-size":"xx-small"}},hs={key:1,class:"flex flex-row justify-center items-center w-full h-96"},us=s("span",{class:"loading loading-dots loading-lg"},null,-1),fs=[us],ms={key:2,class:"flex flex-row justify-center items-center w-full h-96"},ps={class:"text-3xl"},xs={class:"font-bold"},ws={__name:"ProvideData",setup(o){const e=x(),t=C();G(async()=>{const r=t.GETUSER;r===void 0||(await e.fetchProvidedData(r),e.provided_data_headers.length===0&&e.getProvidedDataHeaders())});const a=async r=>{var l;t.GETUSER!==void 0&&(r.department=(l=t==null?void 0:t.GETUSER)==null?void 0:l.departmentId,await e.getFilteredDataProvided(r))};return(r,l)=>(i(),d("div",ns,[_(W),s("div",is,[s("div",ds,[_(j),_(le,{onFilterFunction:a},{default:z(()=>[(i(),y(V,{key:0,table_headers:c(e).provided_data_headers},null,8,["table_headers"]))]),_:1})])]),s("div",cs,[c(e).provided_data_headers.length?(i(),d("table",_s,[_(B,{table_headers:c(e).provided_data_headers},null,8,["table_headers"]),_(rs)])):b("",!0),c(e).provide_data_loading?(i(),d("div",hs,fs)):b("",!0),c(e).provide_data_cond_text?(i(),d("div",ms,[s("span",ps,[g(" There is not any provide data which created by "),s("span",xs,p(c(t).user.name)+" "+p(c(t).user.surname),1)])])):b("",!0)])]))}},bs={class:"flex flex-col bg-white"},gs={key:0,class:"bg-white",style:{"font-family":"'Poppins'"}},vs={class:"bg-white sticky top-0"},ys={class:"flex flex-row anim h-10 bg-white items-center sticky left-16",style:{"letter-spacing":"1px","font-size":"x-small",display:"inline-block"}},$s={class:"flex flex-row anim h-10 sticky top-0 bg-white w-full items-center",style:{"letter-spacing":"1px","font-size":"x-small"}},ks=s("i",{class:"fa-solid fa-list fa-lg"},null,-1),Ss=s("i",{class:"fa-solid fa-plus fa-lg"},null,-1),Es=s("i",{class:"fa-solid fa-warehouse fa-lg"},null,-1),Ts=s("i",{class:"fa-solid fa-upload fa-lg"},null,-1),Rs={key:1},Fs=s("span",null,"User Not Login ",-1),Cs=[Fs],Gs={__name:"views.stf",setup(o){const e=C(),t=x(),a=[Ne,Et,es,ws],r=l=>{t.tab_num=l};return G(async()=>{const l=e.GETUSER;l===void 0||t.fetchFieldsNames(l==null?void 0:l.projectId)}),(l,n)=>(i(),d("div",bs,[c(e).user?(i(),d("div",gs,[s("div",vs,[s("div",ys,[s("div",$s,[s("span",{class:S([c(t).tab_num===0?"border-b-violet-800 border-b-4 ":"","text-black px-3 py-2 pt-2 mx-1 border-b-2 cursor-pointer"]),onClick:n[0]||(n[0]=u=>r(0))},[ks,g(" Show STF")],2),s("span",{class:S([c(t).tab_num===1?"border-b-violet-800 border-b-4 ":"","text-black px-3 py-2 pt-2 mx-1 border-b-2 cursor-pointer"]),onClick:n[1]||(n[1]=u=>r(1))},[Ss,g(" Create STF")],2),s("span",{class:S([c(t).tab_num===2?"border-b-violet-800 border-b-4 ":"","text-black px-3 py-2 pt-2 mx-1 border-b-2 cursor-pointer"]),onClick:n[2]||(n[2]=u=>r(2))},[Es,g(" Warehouse")],2),s("span",{class:S([c(t).tab_num===3?"border-b-violet-800 border-b-4 ":"","text-black px-3 py-2 pt-2 mx-1 border-b-2 cursor-pointer"]),onClick:n[3]||(n[3]=u=>r(3))},[Ts,g(" Provides")],2)])])]),(i(),y(ee,null,[(i(),y(Z(a[c(t).tab_num])))],1024))])):(i(),d("div",Rs,Cs))]))}};export{Gs as default};
