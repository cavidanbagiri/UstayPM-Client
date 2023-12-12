import{H as g,J as K,f as T,o as i,c,b as _,a as s,t as p,u as d,K as k,_ as N,y as D,F as E,M as R,A as b,z as P,N as q,O as Q,U as C,g as G,w as z,Q as y,d as v,S as J,T as S,V as H,W as U,X,Y,Z,$ as ee}from"./index-762a3af1.js";import{_ as M,a as L,T as W,b as j,c as V,d as B,e as te,f as se}from"./TableFilterWarehouse-dc1075c7.js";import{_ as ae}from"./TableFilter-16314eb7.js";import{_ as oe}from"./TableFilterProvide-7f4f545f.js";g.defaults.withCredentials=!0;const x=K("STFStore",{state:()=>({tab_num:0,all_stf:null,all_stf_loading:!0,all_stf_cond_text:!1,all_stf_headers:[],warehouse_selecting_rows:[],order_list:[],fields:[],warehouse_data:[],warehouse_data_loading:!0,warehouse_data_cond_text:!1,warehouse_headers:[],provides_data:[],provide_data_loading:!0,provide_data_cond_text:!1,provided_data_headers:[],warehouse_selecting_rows:[],msg_cond:!1,after_created:!1}),getters:{GETALLSTF:o=>o.all_stf,GETALLSTFHEADERS:o=>o.all_stf_headers,GETSELECTINGROWS:o=>o.warehouse_selecting_rows,GETFIELDSNAME:o=>o.fields,GETWAREHOUSEDATA:o=>o.warehouse_data,GETWAREHOUSEHEADERS:o=>o.warehouse_headers},actions:{async createSTF(o){try{await g.post("http://localhost:3000/stf/createstf",o).then(e=>e)}catch(e){return e}},async fetchUserSTFAll(o){if(this.all_stf_loading=!0,o!=null&&o.id)try{await g.get(`http://localhost:3000/stf/getuserstfall/${o.id}`).then(e=>{e.data.length!==0?(this.all_stf=e.data,this.all_stf_loading=!1,this.all_stf_cond_text=!1):(this.all_stf_loading=!1,this.all_stf_cond_text=!0)}).catch(e=>{console.log("Fetch User Catch Error : ",e)})}catch(e){return console.log("Fetch User STF Error : ",e),e}},async getFilteredData(o){this.all_stf_loading=!0;const e=this.createUrlQuery(o);try{await g.get(`http://localhost:3000/common/filterstf${e}`).then(t=>{t.data.length!==0?(this.all_stf=t.data,this.all_stf_loading=!1,this.all_stf_cond_text=!1):(this.all_stf_loading=!1,this.all_stf_cond_text=!0)}).catch(t=>{console.log("Error Is : ",t)})}catch(t){console.log("Get Filtered Data Error : ",t)}},async getHeaders(){var o,e;if(((o=this.all_stf)==null?void 0:o.length)>1){for(let[t,a]of Object.entries(this==null?void 0:this.all_stf[0])){const r=t.slice(t.length-2,t.length);if(t!=="id"&&r!=="id"&&r!=="Id"){let l={},n=t.charAt(0).toUpperCase()+t.slice(1);n=n.split("_").join(" "),t==="completed"||t==="stf_num"||t==="createdAt"||t==="situation"||t==="material_type"||t==="material_name"||t==="amount"||t==="unit"||t==="username"||t==="field_name"?(l.showname=`${n}`,l.name=`${t}`,l.value=!0):(l.showname=`${n}`,l.name=`${t}`,l.value=!1),this.all_stf_headers.push(l)}}for(let t=0;t<((e=this.all_stf_headers)==null?void 0:e.length);t++){if(this.all_stf_headers[t].name==="completed"){let a=this.all_stf_headers[0];this.all_stf_headers[0]=this.all_stf_headers[t],this.all_stf_headers[t]=a}if(this.all_stf_headers[t].name==="stf_num"){let a=this.all_stf_headers[1];this.all_stf_headers[1]=this.all_stf_headers[t],this.all_stf_headers[t]=a}}}},async fetchFieldsNames(o){if(o)try{await g.get(`http://localhost:3000/common/fetchfields/${o}`).then(e=>{this.fields=e.data}).catch(e=>{console.log("Error Is : ",e)})}catch(e){console.log("fetch Field Names Error : ",e)}},async fetchWarehouseData(o){if(o!=null&&o.id){this.warehouse_data_loading=!0;try{await g.get(`http://localhost:3000/stf/warehouse/${o.id}`).then(e=>{var t;((t=e.data)==null?void 0:t.length)!==0?(this.warehouse_data=e.data,this.warehouse_data_loading=!1,this.warehouse_data_cond_text=!1):(this.warehouse_data_loading=!1,this.warehouse_data_cond_text=!0)}).catch(e=>{console.log("Fetch User Catch Error : ",e)})}catch(e){return console.log("Fetch User STF Error : ",e),e}}},async getFilteredWarehouseData(o){this.warehouse_data_loading=!0;const e=this.createUrlQuery(o);try{await g.get(`
                http://localhost:3000/common/filterwarehouse${e}
            `).then(t=>{var a;((a=t.data)==null?void 0:a.length)!==0?(this.warehouse_data=t.data,this.warehouse_data_loading=!1,this.warehouse_data_cond_text=!1):(this.warehouse_data_loading=!1,this.warehouse_data_cond_text=!0)}).catch(t=>{console.log("Error Is : ",t)})}catch(t){console.log("Get Filtered Data Error : ",t)}},async getWarehouseHeaders(){var o;if(((o=this.warehouse_data)==null?void 0:o.length)>1)for(let[e,t]of Object.entries(this==null?void 0:this.warehouse_data[0])){const a=e.slice(e.length-2,e.length);if(e!=="id"&&a!=="id"&&a!=="Id"){let r={},l=e.charAt(0).toUpperCase()+e.slice(1);l=l.split("_").join(" "),e==="stf_num"||e==="sm_num"||e==="material_name"||e==="amount"||e==="unit"||e==="vendor_name"||e==="stock"||e==="certificate"||e==="passport"||e==="field"?(r.showname=`${l}`,r.name=`${e}`,r.value=!0):(r.showname=`${l}`,r.name=`${e}`,r.value=!1),this.warehouse_headers.push(r)}}},async fetchProvidedData(o){await g.get(`http://localhost:3000/stf/provided/${o.departmentId}`).then(e=>{var t;((t=e.data)==null?void 0:t.length)!==0?(this.provides_data=e.data,this.provide_data_loading=!1,this.provide_data_cond_text=!1):(this.provide_data_loading=!1,this.provide_data_cond_text=!0)}).catch(e=>{console.log("Provied Items Error : ",e)})},async getFilteredDataProvided(o){const e=this.createUrlQuery(o);try{await g.get(`http://localhost:3000/common/filterprovided${e}`).then(t=>{var a;((a=t.data)==null?void 0:a.length)!==0?(this.provides_data=t.data,this.provide_data_loading=!1,this.provide_data_cond_text=!1):(this.provide_data_loading=!1,this.provide_data_cond_text=!0)}).catch(t=>{console.log("Error Is : ",t)})}catch(t){console.log("Get Filtered Data Error : ",t)}},async getProvidedDataHeaders(){var o;if((o=this.provides_data)!=null&&o.length){for(let[e,t]of Object.entries(this.provides_data[0]))if(e!=="id"){let a={},r=e.charAt(0).toUpperCase()+e.slice(1);r=r.split("_").join(" "),e==="sm_num"||e==="provided_date"||e==="material_name"||e==="amount"||e==="unit"||e==="serial_no"||e==="unique_id"||e==="deliver_to"||e==="card_number"?(a.showname=`${r}`,a.name=`${e}`,a.value=!0):(a.showname=`${r}`,a.name=`${e}`,a.value=!1),this.provided_data_headers.push(a)}}},createUrlQuery(o){let e="";for(let[t,a]of Object.entries(o))e===""&&(e+="?"),o[t],e+=`${t}=${o[t]}`,e+="&";return e=e.slice(0,-1),e}}}),le={class:"w-1 p-4 py-2"},re={class:"flex items-center"},ne={class:"flex cursor-pointer items-center rounded-sm p-1",for:"selected_row","data-ripple-dark":"true"},ie=["id"],de={class:"px-2 py-2 font-medium text-center"},ce={__name:"ShowSTFEachRow",props:["each","index"],setup(o){const e=o,t=x(),a=T(!1),r=()=>{a.value=!a.value,a.value?t.warehouse_selecting_rows.push(e.each):t.warehouse_selecting_rows=t.warehouse_selecting_rows.filter(l=>l.stf_id!==e.each.stf_id)};return(l,n)=>(i(),c("tr",{class:k([a.value?"text-white bg-blue-600  hover:bg-blue-500 ":" bg-white  hover:bg-blue-600 hover:text-white hover:duration-200 ","border-b hover:cursor-pointer table_row"])},[_(M,{each:e==null?void 0:e.each},null,8,["each"]),s("td",le,[s("div",re,[s("label",ne,[s("input",{id:e.each.id,type:"checkbox",onChange:n[0]||(n[0]=u=>r(e.each.id)),class:"checkbox checkbox-xs checkbox-primary"},null,40,ie)])])]),s("th",de,p(e.index+1),1),_(L,{each:e==null?void 0:e.each,table_headers:d(t).all_stf_headers},null,8,["each","table_headers"])],2))}};const _e=o=>(q("data-v-76290771"),o=o(),Q(),o),he={key:0,class:"mtf-anim fixed left-1/4 bottom-10 flex flex-row mb-4 justify-center rounded-lg w-1/2"},ue={class:"flex justify-between bg-white border rounded-md shadow-2xl w-full"},fe={class:"flex items-center"},me={class:"bg-blue-600 py-4 px-6 text-white font-bold rounded-l-md text-3xl"},pe={class:"ml-3"},xe=_e(()=>s("p",null,"Task Selected",-1)),we={class:"text-blue-600"},be=P('<div class="flex items-center ml-[200px]" data-v-76290771><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-76290771><i class="fa-regular fa-trash-can" data-v-76290771></i> <span class="text-sm" data-v-76290771>Add Archieve</span></div><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-76290771><i class="fa-solid fa-eye-slash" data-v-76290771></i> <span class="text-sm" data-v-76290771>Dont Show</span></div><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-76290771><i class="fa-regular fa-star" data-v-76290771></i> <span class="text-sm" data-v-76290771>Set Star</span></div></div>',1),ve={__name:"SelectingRows",setup(o){const e=x(),t=T([]);return D(()=>{t.value=e.warehouse_selecting_rows}),(a,r)=>d(e).warehouse_selecting_rows.length>=1?(i(),c("div",he,[s("div",ue,[s("div",fe,[s("span",me,p(t.value.length),1),s("div",pe,[xe,(i(!0),c(E,null,R(t.value.length,l=>(i(),c("span",we,"●"))),256))])]),be])])):b("",!0)}},ge=N(ve,[["__scopeId","data-v-76290771"]]),ye={class:"flex flex-col",style:{display:"inline-block"}},$e={class:"sticky top-10 px-1"},Se={class:"sticky left-16 flex flex-col bg-white",style:{display:"inline-block",width:"calc(100vw - 5rem)"}},ke={key:0,class:"mx-2 w-full shadow-xl mt-1"},Ee={key:1,class:"flex flex-row justify-center items-center w-full h-96"},Te=s("span",{class:"loading loading-dots loading-lg"},null,-1),Re=[Te],Fe={key:2,class:"flex flex-row justify-center items-center w-full h-96"},Ce={class:"text-3xl"},Ae={class:"font-bold"},Ue={__name:"ShowSTF",setup(o){const e=x(),t=C();G(async()=>{const r=t.GETUSER;r===void 0||(await e.fetchUserSTFAll(r),e.GETALLSTFHEADERS.length===0&&await e.getHeaders())});const a=async r=>{var l;t.GETUSER!==void 0&&(r.user=(l=t==null?void 0:t.GETUSER)==null?void 0:l.id,await e.getFilteredData(r))};return(r,l)=>(i(),c("div",ye,[_(W),s("div",$e,[s("div",Se,[_(j),_(ae,{onFilterFunction:a},{default:z(()=>[(i(),y(V,{key:0,table_headers:d(e).GETALLSTFHEADERS},null,8,["table_headers"]))]),_:1})])]),d(e).GETALLSTFHEADERS.length?(i(),c("table",ke,[_(B,{table_headers:d(e).GETALLSTFHEADERS},null,8,["table_headers"]),(i(!0),c(E,null,R(d(e).all_stf,(n,u)=>(i(),y(ce,{each:n,index:u},null,8,["each","index"]))),256))])):b("",!0),d(e).all_stf_loading?(i(),c("div",Ee,Re)):b("",!0),d(e).all_stf_cond_text?(i(),c("div",Fe,[s("span",Ce,[v(" There is not any data in warehouse which created by "),s("span",Ae,p(d(t).user.name)+" "+p(d(t).user.surname),1)])])):b("",!0),_(ge)]))}},Ne={},De={class:"text-gray-100 bg-slate-700 border table_header"},Ge=s("tr",null,[s("th",{scope:"col",class:"px-6 py-2 text-center border"}," S/S "),s("th",{scope:"col",class:"px-6 py-1 text-center border"},[s("div",{class:""}," Type ")]),s("th",{scope:"col",class:"px-6 py-1 text-center border w-1/3"},[s("div",{class:""}," Material Name ")]),s("th",{scope:"col",class:"px-6 py-1 text-center border"},[s("div",{class:""}," Link ")]),s("th",{scope:"col",class:"px-6 py-1 text-center border w-4"}," Count "),s("th",{scope:"col",class:"px-6 py-1 text-center border w-4"}," Unit "),s("th",{scope:"col",class:"px-6 py-1 text-center border w-8"}," Field "),s("th",{scope:"col",class:"px-6 py-1 text-center border"}," Comment ")],-1),Ie=[Ge];function He(o,e){return i(),c("thead",De,Ie)}const ze=N(Ne,[["render",He]]),Me={scope:"row",class:"w-8 text-gray-900 whitespace-nowrap dark:text-white text-center table_row"},Le={class:"flex justify-between items-center px-1"},We=s("span",{class:"relative flex h-3 w-3"},[s("span",{class:"animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"}),s("span",{class:"relative inline-flex rounded-full h-3 w-3 bg-orange-500"})],-1),je={scope:"row",class:"p-1 border text-gray-900 whitespace-nowrap dark:text-white table_row",style:{}},Ve=s("option",{disabled:"",value:""},"Type",-1),Be=s("option",null,"Project",-1),Oe=s("option",null,"Consumables",-1),Pe=s("option",null,"Fixture",-1),qe=[Ve,Be,Oe,Pe],Qe={class:"p-1 border text-gray-900 whitespace-nowrap dark:text-white"},Ke={class:"p-1 border text-gray-900 whitespace-nowrap dark:text-white"},Je={class:"p-1 border"},Xe={class:"p-1 border",style:{}},Ye=s("option",{disabled:"",value:""},"Unit",-1),Ze=s("option",null,"Adet",-1),et=s("option",null,"M2",-1),tt=s("option",null,"M3",-1),st=s("option",null,"Ton",-1),at=s("option",null,"Kg",-1),ot=[Ye,Ze,et,tt,st,at],lt={class:"p-1 border"},rt=s("option",{disabled:"",value:""},"Field",-1),nt=["value"],it={class:"p-1 border",style:{}},dt={__name:"STF_Table_Body_Each_Row_Comp",props:["id","order_list"],setup(o){const e=o,t=x(),a=J({each_id:e==null?void 0:e.id,material_type:"",material_name:"",material_amount:0,material_unit:"",link:"",fieldId:0,comment:""});return D(()=>{var r;if(((r=t.order_list)==null?void 0:r.length)>=1){let l=!1;for(let n of t.order_list)if(n.each_id===a.each_id){l=!0;break}!l&&a.each_id!=""&&t.order_list.push(a)}else t.order_list.push(a);if(t.after_created)for(let l=0;l<t.order_list.length;l++)a.each_id=0,a.material_type="",a.material_name="",a.link="",a.material_amount=0,a.material_unit="",a.fieldId=0,t.order_list.splice(l,1)}),(r,l)=>(i(),c(E,null,[s("td",Me,[s("div",Le,[s("span",null,p(a.each_id),1),We])]),s("td",je,[S(s("select",{class:"border border-red-500 outline-none rounded-lg w-full h-full p-2","onUpdate:modelValue":l[0]||(l[0]=n=>a.material_type=n)},qe,512),[[H,a.material_type]])]),s("td",Qe,[S(s("input",{class:"border border-red-500 outline-none rounded-lg w-full h-full p-2",type:"text",placeholder:"Material Name...","onUpdate:modelValue":l[1]||(l[1]=n=>a.material_name=n)},null,512),[[U,a.material_name]])]),s("td",Ke,[S(s("input",{class:"border outline-none rounded-lg w-full h-full p-2",type:"text",placeholder:"Material Link...","onUpdate:modelValue":l[2]||(l[2]=n=>a.link=n)},null,512),[[U,a.link]])]),s("td",Je,[S(s("input",{class:"border border-red-500 outline-none rounded-lg w-full h-full p-2",type:"number",min:"0.001",placeholder:"Count...","onUpdate:modelValue":l[3]||(l[3]=n=>a.material_amount=n)},null,512),[[U,a.material_amount]])]),s("td",Xe,[S(s("select",{class:"border border-red-500 outline-none rounded-lg w-full h-full p-2","onUpdate:modelValue":l[4]||(l[4]=n=>a.material_unit=n)},ot,512),[[H,a.material_unit]])]),s("td",lt,[S(s("select",{class:"border border-red-500 outline-none rounded-lg w-full h-full p-2","onUpdate:modelValue":l[5]||(l[5]=n=>a.fieldId=n)},[rt,(i(!0),c(E,null,R(d(t).GETFIELDSNAME,n=>(i(),c("option",{value:n.id},p(n.field_name),9,nt))),256))],512),[[H,a.fieldId]])]),s("td",it,[S(s("input",{class:"border outline-none rounded-lg w-full h-full p-2",type:"text",placeholder:"Comment...","onUpdate:modelValue":l[6]||(l[6]=n=>a.comment=n)},null,512),[[U,a.comment]])])],64))}};const ct={__name:"STF_Table_Body_Column_Name_Comp",props:["row_size","order_list"],setup(o){const e=o;return(t,a)=>(i(!0),c(E,null,R(e.row_size,r=>(i(),c("tr",{class:k([r===1?"bg-red-50":"","bg-white border-b hover:bg-gray-50 table_row"])},[(i(),y(dt,{id:r,key:r,order_list:o.order_list},null,8,["id","order_list"]))],2))),256))}},_t=N(ct,[["__scopeId","data-v-6718c5c3"]]),ht={__name:"STF_Table_Body_Comp",props:["row_size","order_list"],setup(o){const e=o;return(t,a)=>(i(),c("tbody",null,[_(_t,{row_size:e==null?void 0:e.row_size,order_list:o.order_list},null,8,["row_size","order_list"])]))}},ut={class:"flex justify-between mt-1"},ft=s("i",{class:"fa-solid fa-plus fa-lg"},null,-1),mt=s("i",{class:"fa-solid fa-minus fa-lg"},null,-1),pt={__name:"STF_Table_Row_Count_Comp",emits:["emitAddNewRow","emitRemoveRow"],setup(o,{emit:e}){const t=()=>e("emitAddNewRow"),a=()=>e("emitRemoveRow");return(r,l)=>(i(),c("div",ut,[s("button",{onClick:t,class:"font-bold py-2 px-2 my-1 text-xs outline-none font-mono border text-gray-100 rounded-xl bg-orange-500 hover:bg-orange-400 hover:shadow-xl"},[ft,v(" Add New Column ")]),s("button",{onClick:a,class:"py-2 px-2 my-1 text-xs outline-none font-mono font-bold border text-gray-100 rounded-xl bg-red-500 hover:bg-red-400 hover:shadow-xl"},[mt,v(" Remove Column ")])]))}},xt={class:"flex items-center justify-end mt-10"},wt=s("i",{class:"fa-solid fa-plus"},null,-1),bt={__name:"STF_Create_Button_Comp",props:["row_size"],emits:["setRowSize"],setup(o,{emit:e}){const t=o,a=x(),r=C(),l=async()=>{var n,u,m,w,h,A,O;if(a.order_list.length===0&&alert("Must Create at least 1 data"),t.row_size===0)alert("Must Create at least 1 data");else{let F=!0;for(let f=0;f<t.row_size;f++)if(((n=a.order_list[f])==null?void 0:n.material_name)===""){F=!1,alert(`${f+1} Row Material Name is Empty`);break}else if(((u=a.order_list[f])==null?void 0:u.material_type)===""){F=!1,alert(`${f+1} Row Material Type Cant Be An Empty`);break}else if(((m=a.order_list[f])==null?void 0:m.material_amount)<=0){F=!1,alert(`${f+1} Row Material Amount In Not True Amount`);break}else if(((w=a.order_list[f])==null?void 0:w.material_unit)===""){F=!1,alert(`${f+1} Row Unit Is Not Selected`);break}else if(((h=a.order_list[f])==null?void 0:h.fieldId)===0){F=!1,alert(`${f+1} Row Field Not Selected`);break}if(F)try{const f={orders:a.order_list,user:r==null?void 0:r.user};for(let $=(A=a.order_list)==null?void 0:A.length;$>t.row_size;$--){const I=(O=a.order_list)==null?void 0:O.pop()}await a.createSTF(f).then(async $=>{var I;((I=$==null?void 0:$.response)==null?void 0:I.status)===400?alert("MTF Cant Create"):(a.msg_cond=!0,setTimeout(()=>{e("setRowSize"),a.after_created=!0,a.tab_num=0,a.fetchUserSTFAll(f.user)},500),setTimeout(()=>{a.msg_cond=!1},1e3))}).catch($=>{console.log("from create Error component : ",$)})}catch(f){console.log("error : ",f)}}};return(n,u)=>(i(),c("div",xt,[s("button",{type:"button",onClick:l,class:"text-white bg-gradient-to-r bg-blue-600 hover:bg-blue-500 hover:shadow-xl font-medium rounded-lg text-md px-4 py-2 text-center mr-2 mb-2"},[wt,v(" Create")])]))}},vt={class:"overflow-x-auto shadow-xl sm:rounded-lg border p-2"},gt=s("h1",{class:"text-center text-3xl py-4",style:{"font-family":"'Poppins'"}}," Create STF Form",-1),yt={class:"w-full text-left text-gray-500 dark:text-gray-400"},$t={__name:"CreateSTF",setup(o){const e=x(),t=T(1),a=()=>{let m=!0,w=0;for(let h of e.order_list){const A=h==null?void 0:h.material_name.trim();(h==null?void 0:h.material_type)===""?(m=!1,alert(`${w+1} Row Material Type Cant Be Empty`)):A===""?(m=!1,alert(`${w+1} Row Material Name Cant Be Empty`)):(h==null?void 0:h.material_amount)<=0?(m=!1,alert(`${w+1} Row Material Amount Cant Be 0`)):(h==null?void 0:h.material_unit)===""?(m=!1,alert(`${w+1} Row Material Unit Is Not Selected`)):(h==null?void 0:h.fieldId)===0&&(m=!1,alert(`${w+1} Row Field Is Not Selected`)),w++}m&&e.order_list.length&&(t.value+=1)},r=()=>{t.value>1?t.value-=1:t.value},l=()=>{t.value=0};let n=T([]);const u=()=>{t.value=1,e.after_created=!1};return(m,w)=>(i(),c("div",vt,[gt,t.value===0?(i(),c("button",{key:0,class:"font-bold py-2 px-2 my-1 text-xs outline-none font-mono border text-gray-100 rounded-xl bg-green-500 mb-2",onClick:w[0]||(w[0]=h=>u())}," Create New STF ")):b("",!0),s("table",yt,[_(ze),_(ht,{row_size:t.value,order_list:d(n)},null,8,["row_size","order_list"])]),_(pt,{onEmitAddNewRow:a,onEmitRemoveRow:r}),_(bt,{onSetRowSize:l,row_size:t.value},null,8,["row_size"]),_(te,{cond:d(e).msg_cond,messages:"New STF Successfuly Created"},null,8,["cond"])]))}},St={class:"w-1 p-4 py-2"},kt={class:"flex items-center"},Et={class:"flex cursor-pointer items-center rounded-sm p-1",for:"selected_row","data-ripple-dark":"true"},Tt=["id"],Rt={class:"px-2 py-2 font-medium text-center"},Ft={__name:"ShowWarehouseEachRow",props:["each","index"],setup(o){const e=o,t=x(),a=T(!1),r=()=>{a.value=!a.value,a.value?t.warehouse_selecting_rows.push(e.each):t.warehouse_selecting_rows=t.warehouse_selecting_rows.filter(l=>l.stf_id!==e.each.stf_id)};return(l,n)=>(i(),c("tr",{class:k([a.value?"text-white bg-blue-600  hover:bg-blue-500 ":" bg-white  hover:bg-blue-600 hover:text-white hover:duration-200 ","border-b hover:cursor-pointer table_row"])},[_(M,{each:e==null?void 0:e.each},null,8,["each"]),s("td",St,[s("div",kt,[s("label",Et,[s("input",{id:e.each.id,type:"checkbox",onChange:n[0]||(n[0]=u=>r(e.each.id)),class:"checkbox checkbox-xs checkbox-primary"},null,40,Tt)])])]),s("th",Rt,p(e.index+1),1),_(L,{each:e==null?void 0:e.each,table_headers:d(t).GETWAREHOUSEHEADERS},null,8,["each","table_headers"])],2))}};const Ct=o=>(q("data-v-6a925cb8"),o=o(),Q(),o),At={key:0,class:"mtf-anim fixed left-1/4 bottom-10 flex flex-row mb-4 justify-center rounded-lg w-1/2"},Ut={class:"flex justify-between bg-white border rounded-md shadow-2xl w-full"},Nt={class:"flex items-center"},Dt={class:"bg-blue-600 py-4 px-6 text-white font-bold rounded-l-md text-3xl"},Gt={class:"ml-3"},It=Ct(()=>s("p",null,"Task Selected",-1)),Ht={class:"text-blue-600"},zt=P('<div class="flex items-center ml-[200px]" data-v-6a925cb8><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-6a925cb8><i class="fa-regular fa-trash-can" data-v-6a925cb8></i> <span class="text-sm" data-v-6a925cb8>Add Archieve</span></div><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-6a925cb8><i class="fa-solid fa-eye-slash" data-v-6a925cb8></i> <span class="text-sm" data-v-6a925cb8>Dont Show</span></div><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-6a925cb8><i class="fa-regular fa-star" data-v-6a925cb8></i> <span class="text-sm" data-v-6a925cb8>Set Star</span></div></div>',1),Mt={__name:"SelectingRows",setup(o){const e=x(),t=T([]);return D(()=>{t.value=e.warehouse_selecting_rows}),(a,r)=>d(e).warehouse_selecting_rows.length>=1?(i(),c("div",At,[s("div",Ut,[s("div",Nt,[s("span",Dt,p(t.value.length),1),s("div",Gt,[It,(i(!0),c(E,null,R(t.value.length,l=>(i(),c("span",Ht,"●"))),256))])]),zt])])):b("",!0)}},Lt=N(Mt,[["__scopeId","data-v-6a925cb8"]]),Wt={class:"flex flex-col",style:{display:"inline-block"}},jt={class:"sticky top-10 px-1"},Vt={class:"sticky left-16 flex flex-col bg-white",style:{display:"inline-block",width:"calc(100vw - 5rem)"}},Bt={key:0,class:"mx-2 text-gray-800 w-full shadow-xl bg-white mt-1"},Ot={key:1,class:"flex flex-row justify-center items-center w-full h-96"},Pt=s("span",{class:"loading loading-dots loading-lg"},null,-1),qt=[Pt],Qt={key:2,class:"flex flex-row justify-center items-center w-full h-96"},Kt={class:"text-3xl"},Jt={class:"font-bold"},Xt={__name:"WarehouseData",setup(o){const e=x(),t=C(),a=X();G(async()=>{const l=t.GETUSER;l===void 0||(await e.fetchWarehouseData(l),await a.getCompaniesNames(),e.GETWAREHOUSEHEADERS.length===0&&await e.getWarehouseHeaders())});const r=async l=>{var n;t.GETUSER!==void 0&&(l.user=(n=t==null?void 0:t.GETUSER)==null?void 0:n.id,await e.getFilteredWarehouseData(l))};return(l,n)=>(i(),c("div",Wt,[_(W),s("div",jt,[s("div",Vt,[_(j),_(se,{onFilterFunction:r},{default:z(()=>[(i(),y(V,{key:0,table_headers:d(e).GETWAREHOUSEHEADERS},null,8,["table_headers"]))]),_:1})])]),d(e).GETWAREHOUSEHEADERS.length?(i(),c("table",Bt,[_(B,{table_headers:d(e).GETWAREHOUSEHEADERS},null,8,["table_headers"]),(i(!0),c(E,null,R(d(e).warehouse_data,(u,m)=>(i(),y(Ft,{each:u,index:m},null,8,["each","index"]))),256))])):b("",!0),d(e).warehouse_data_loading?(i(),c("div",Ot,qt)):b("",!0),d(e).warehouse_data_cond_text?(i(),c("div",Qt,[s("span",Kt,[v(" There is not any data in warehouse which created by "),s("span",Jt,p(d(t).user.name)+" "+p(d(t).user.surname),1)])])):b("",!0),_(Lt)]))}},Yt={class:"w-1 p-4 py-2"},Zt={class:"flex items-center"},es=s("label",{for:"checkbox-table-search-1",class:"sr-only"},"checkbox",-1),ts={class:"px-2 py-3 text-center"},ss={__name:"Provided_Table_Body_Each_Row",props:["each","index"],emits:["addChecked","removeChecked"],setup(o,{emit:e}){const t=o,a=x(),r=T(!1),l=()=>r.value===!0?e("addChecked",t==null?void 0:t.each):e("removeChecked",t==null?void 0:t.each);return D(()=>{a.after_provide&&(r.value=!1)}),(n,u)=>(i(),c("tr",{class:k([r.value?"text-white  bg-blue-600 hover:bg-blue-500 ":"bg-white hover:bg-blue-600 hover:text-white hover:duration-200","border-b table_row hover:cursor-pointer"])},[_(M,{each:t==null?void 0:t.each},null,8,["each"]),s("td",Yt,[s("div",Zt,[es,S(s("input",{id:"checkbox-table-search-1",type:"checkbox","onUpdate:modelValue":u[0]||(u[0]=m=>r.value=m),onChange:l,class:"checkbox checkbox-xs checkbox-primary"},null,544),[[Y,r.value]])])]),s("th",ts,p((t==null?void 0:t.index)+1),1),_(L,{each:t==null?void 0:t.each,table_headers:d(a).provided_data_headers},null,8,["each","table_headers"])],2))}},as={__name:"Provided_Table_Body",setup(o){const e=x();return(t,a)=>(i(!0),c(E,null,R(d(e).provides_data,(r,l)=>(i(),y(ss,{each:r,index:l},null,8,["each","index"]))),256))}},os={class:"flex flex-col",style:{display:"inline-block"}},ls={class:"sticky h-40 top-10 bg-white"},rs={class:"sticky left-16 flex flex-col w-max bg-white",style:{display:"inline-block",width:"calc(100vw - 5rem)"}},ns={class:""},is={key:0,class:"mx-2 text-gray-800 dark:text-gray-400 w-full shadow-xl bg-white mt-1",style:{"font-size":"xx-small"}},ds={key:1,class:"flex flex-row justify-center items-center w-full h-96"},cs=s("span",{class:"loading loading-dots loading-lg"},null,-1),_s=[cs],hs={key:2,class:"flex flex-row justify-center items-center w-full h-96"},us={class:"text-3xl"},fs={class:"font-bold"},ms={__name:"ProvideData",setup(o){const e=x(),t=C();G(async()=>{const r=t.GETUSER;r===void 0||(await e.fetchProvidedData(r),e.provided_data_headers.length===0&&e.getProvidedDataHeaders())});const a=async r=>{var l;t.GETUSER!==void 0&&(r.department=(l=t==null?void 0:t.GETUSER)==null?void 0:l.departmentId,await e.getFilteredDataProvided(r))};return(r,l)=>(i(),c("div",os,[_(W),s("div",ls,[s("div",rs,[_(j),_(oe,{onFilterFunction:a},{default:z(()=>[(i(),y(V,{key:0,table_headers:d(e).provided_data_headers},null,8,["table_headers"]))]),_:1})])]),s("div",ns,[d(e).provided_data_headers.length?(i(),c("table",is,[_(B,{table_headers:d(e).provided_data_headers},null,8,["table_headers"]),_(as)])):b("",!0),d(e).provide_data_loading?(i(),c("div",ds,_s)):b("",!0),d(e).provide_data_cond_text?(i(),c("div",hs,[s("span",us,[v(" There is not any provide data which created by "),s("span",fs,p(d(t).user.name)+" "+p(d(t).user.surname),1)])])):b("",!0)])]))}},ps={class:"flex flex-col bg-white"},xs={key:0,class:"bg-white",style:{"font-family":"'Poppins'"}},ws={class:"bg-white sticky top-0"},bs={class:"flex flex-row anim h-10 bg-white items-center sticky left-16",style:{"letter-spacing":"1px","font-size":"x-small",display:"inline-block"}},vs={class:"flex flex-row anim h-10 sticky top-0 bg-white w-full items-center",style:{"letter-spacing":"1px","font-size":"x-small"}},gs=s("i",{class:"fa-solid fa-list fa-lg"},null,-1),ys=s("i",{class:"fa-solid fa-plus fa-lg"},null,-1),$s=s("i",{class:"fa-solid fa-warehouse fa-lg"},null,-1),Ss=s("i",{class:"fa-solid fa-upload fa-lg"},null,-1),ks={key:1},Es=s("span",null,"User Not Login ",-1),Ts=[Es],Us={__name:"views.stf",setup(o){const e=C(),t=x(),a=[Ue,$t,Xt,ms],r=l=>{t.tab_num=l};return G(async()=>{const l=e.GETUSER;l===void 0||t.fetchFieldsNames(l==null?void 0:l.projectId)}),(l,n)=>(i(),c("div",ps,[d(e).user?(i(),c("div",xs,[s("div",ws,[s("div",bs,[s("div",vs,[s("span",{class:k([d(t).tab_num===0?"border-b-violet-800 border-b-4 ":"","text-black px-3 py-2 pt-2 mx-1 border-b-2 cursor-pointer"]),onClick:n[0]||(n[0]=u=>r(0))},[gs,v(" Show STF")],2),s("span",{class:k([d(t).tab_num===1?"border-b-violet-800 border-b-4 ":"","text-black px-3 py-2 pt-2 mx-1 border-b-2 cursor-pointer"]),onClick:n[1]||(n[1]=u=>r(1))},[ys,v(" Create STF")],2),s("span",{class:k([d(t).tab_num===2?"border-b-violet-800 border-b-4 ":"","text-black px-3 py-2 pt-2 mx-1 border-b-2 cursor-pointer"]),onClick:n[2]||(n[2]=u=>r(2))},[$s,v(" Warehouse")],2),s("span",{class:k([d(t).tab_num===3?"border-b-violet-800 border-b-4 ":"","text-black px-3 py-2 pt-2 mx-1 border-b-2 cursor-pointer"]),onClick:n[3]||(n[3]=u=>r(3))},[Ss,v(" Provides")],2)])])]),(i(),y(ee,null,[(i(),y(Z(a[d(t).tab_num])))],1024))])):(i(),c("div",ks,Ts))]))}};export{Us as default};
