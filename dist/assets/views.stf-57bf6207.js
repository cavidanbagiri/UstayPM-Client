import{d as Z}from"./pinia-f2173f69.js";import{a as $}from"./axios-21b846bc.js";import{T as V,_ as B,a as P,b as Y}from"./TableFilterWarehouse-e48b5cca.js";import{_ as G,T as z,a as O}from"./TableRowInform-18597f3e.js";import{_ as q,a as Q}from"./fullstar-d08737a6.js";import{I as ee,a as H,U as N}from"./index-9d93291b.js";import{r as S,F as n,G as d,M as h,P as D,I as x,H as s,u as c,X as k,z as j,J as F,K as U,O as v,W as K,U as J,V as X,q as L,Q as E,L as y,a as te,R,Z as W,S as I,_ as se,l as ae,$ as oe}from"./@vue-545ec849.js";import{_ as le}from"./TableFilter-44c4ff02.js";import{T as re}from"./Toast-92afc9e2.js";import{W as ne}from"./store.warehouse-cf3c634c.js";import{_ as ie}from"./TableFilterProvide-ce90acf5.js";import"./socket.io-client-651ff694.js";import"./engine.io-client-86cec14e.js";import"./engine.io-parser-b13552ae.js";import"./@socket.io-3e1df240.js";import"./socket.io-parser-44417fca.js";import"./moment-fbc5633a.js";import"./vue-router-96fecc4f.js";import"./vee-validate-e5cd1ca6.js";import"./chart.js-49eabb2c.js";import"./@kurkle-b1b89bbc.js";import"./@vee-validate-f04fc1ec.js";$.defaults.withCredentials=!0;const w=Z("STFStore",{state:()=>({tab_num:0,all_stf:null,all_stf_loading:!0,all_stf_cond_text:!1,all_stf_headers:[],warehouse_selecting_rows:[],order_list:[],fields:[],warehouse_data:[],warehouse_data_loading:!0,warehouse_data_cond_text:!1,warehouse_headers:[],provides_data:[],provide_data_loading:!0,provide_data_cond_text:!1,provided_data_headers:[],warehouse_selecting_rows:[],msg_cond:!1,after_created:!1}),getters:{GETALLSTF:o=>o.all_stf,GETALLSTFHEADERS:o=>o.all_stf_headers,GETSELECTINGROWS:o=>o.warehouse_selecting_rows,GETFIELDSNAME:o=>o.fields,GETWAREHOUSEDATA:o=>o.warehouse_data,GETWAREHOUSEHEADERS:o=>o.warehouse_headers},actions:{async createSTF(o){try{await $.post("https://ustaypm-server.onrender.com/api/stf/createstf",o).then(e=>e)}catch(e){return e}},async fetchUserSTFAll(o){if(this.all_stf_loading=!0,o!=null&&o.id)try{await $.get(`https://ustaypm-server.onrender.com/api/stf/getuserstfall/${o.id}`).then(e=>{e.data.length!==0?(this.all_stf=e.data,this.all_stf_loading=!1,this.all_stf_cond_text=!1):(this.all_stf_loading=!1,this.all_stf_cond_text=!0)}).catch(e=>{console.log("Fetch User Catch Error : ",e)})}catch(e){return console.log("Fetch User STF Error : ",e),e}},async getFilteredData(o){this.all_stf_loading=!0;const e=this.createUrlQuery(o.filtered_objects);try{await $.get(`https://ustaypm-server.onrender.com/api/common/filterstf/${o.user_id}${e}`).then(t=>{t.data.length!==0?(this.all_stf=t.data,this.all_stf_loading=!1,this.all_stf_cond_text=!1):(this.all_stf_loading=!1,this.all_stf_cond_text=!0)}).catch(t=>{console.log("Error Is : ",t)})}catch(t){console.log("Get Filtered Data Error : ",t)}},async getHeaders(){var o,e;if(((o=this.all_stf)==null?void 0:o.length)>=1){for(let[t,a]of Object.entries(this==null?void 0:this.all_stf[0])){const r=t.slice(t.length-2,t.length);if(t!=="id"&&r!=="id"&&r!=="Id"){let l={},i=t.charAt(0).toUpperCase()+t.slice(1);i=i.split("_").join(" "),t==="completed"||t==="stf_num"||t==="createdAt"||t==="situation"||t==="material_type"||t==="material_name"||t==="amount"||t==="unit"||t==="username"||t==="field_name"?(l.showname=`${i}`,l.name=`${t}`,l.value=!0):(l.showname=`${i}`,l.name=`${t}`,l.value=!1),this.all_stf_headers.push(l)}}for(let t=0;t<((e=this.all_stf_headers)==null?void 0:e.length);t++){if(this.all_stf_headers[t].name==="completed"){let a=this.all_stf_headers[0];this.all_stf_headers[0]=this.all_stf_headers[t],this.all_stf_headers[t]=a}if(this.all_stf_headers[t].name==="stf_num"){let a=this.all_stf_headers[1];this.all_stf_headers[1]=this.all_stf_headers[t],this.all_stf_headers[t]=a}}}},async fetchFieldsNames(o){if(o)try{await $.get(`https://ustaypm-server.onrender.com/api/common/fetchfields/${o}`).then(e=>{this.fields=e.data}).catch(e=>{console.log("Error Is : ",e)})}catch(e){console.log("fetch Field Names Error : ",e)}},async fetchWarehouseData(o){if(o!=null&&o.id){this.warehouse_data_loading=!0;try{await $.get(`https://ustaypm-server.onrender.com/api/stf/warehouse/${o.id}`).then(e=>{var t;((t=e.data)==null?void 0:t.length)!==0?(this.warehouse_data=e.data,this.warehouse_data_loading=!1,this.warehouse_data_cond_text=!1):(this.warehouse_data_loading=!1,this.warehouse_data_cond_text=!0)}).catch(e=>{console.log("Fetch User Catch Error : ",e)})}catch(e){return console.log("Fetch User STF Error : ",e),e}}},async getFilteredWarehouseData(o){this.warehouse_data_loading=!0;const e=this.createUrlQuery(o);try{await $.get(`
                https://ustaypm-server.onrender.com/api/common/filterwarehouse${e}
            `).then(t=>{var a;((a=t.data)==null?void 0:a.length)!==0?(this.warehouse_data=t.data,this.warehouse_data_loading=!1,this.warehouse_data_cond_text=!1):(this.warehouse_data_loading=!1,this.warehouse_data_cond_text=!0)}).catch(t=>{console.log("Error Is : ",t)})}catch(t){console.log("Get Filtered Data Error : ",t)}},async getWarehouseHeaders(){var o;if(((o=this.warehouse_data)==null?void 0:o.length)>=1)for(let[e,t]of Object.entries(this==null?void 0:this.warehouse_data[0])){const a=e.slice(e.length-2,e.length);if(e!=="id"&&a!=="id"&&a!=="Id"){let r={},l=e.charAt(0).toUpperCase()+e.slice(1);l=l.split("_").join(" "),e==="stf_num"||e==="sm_num"||e==="material_name"||e==="amount"||e==="unit"||e==="vendor_name"||e==="stock"||e==="certificate"||e==="passport"||e==="field"?(r.showname=`${l}`,r.name=`${e}`,r.value=!0):(r.showname=`${l}`,r.name=`${e}`,r.value=!1),this.warehouse_headers.push(r)}}},async fetchProvidedData(o){await $.get(`https://ustaypm-server.onrender.com/api/stf/provided/${o.departmentId}`).then(e=>{var t;((t=e.data)==null?void 0:t.length)!==0?(this.provides_data=e.data,this.provide_data_loading=!1,this.provide_data_cond_text=!1,console.log("this provide data : ",this.provides_data)):(this.provide_data_loading=!1,this.provide_data_cond_text=!0)}).catch(e=>{console.log("Provied Items Error : ",e)})},async getFilteredDataProvided(o){const e=this.createUrlQuery(o);try{await $.get(`https://ustaypm-server.onrender.com/api/common/filterprovided${e}`).then(t=>{var a;((a=t.data)==null?void 0:a.length)!==0?(this.provides_data=t.data,this.provide_data_loading=!1,this.provide_data_cond_text=!1):(this.provide_data_loading=!1,this.provide_data_cond_text=!0)}).catch(t=>{console.log("Error Is : ",t)})}catch(t){console.log("Get Filtered Data Error : ",t)}},async getProvidedDataHeaders(){var o;if((o=this.provides_data)!=null&&o.length){for(let[e,t]of Object.entries(this.provides_data[0]))if(e!=="id"){let a={},r=e.charAt(0).toUpperCase()+e.slice(1);r=r.split("_").join(" "),e==="sm_num"||e==="provided_date"||e==="material_name"||e==="amount"||e==="unit"||e==="serial_no"||e==="unique_id"||e==="deliver_to"||e==="card_number"?(a.showname=`${r}`,a.name=`${e}`,a.value=!0):(a.showname=`${r}`,a.name=`${e}`,a.value=!1),this.provided_data_headers.push(a)}}},createUrlQuery(o){let e="";for(let[t,a]of Object.entries(o))e===""&&(e+="?"),o[t],e+=`${t}=${o[t]}`,e+="&";return e=e.slice(0,-1),e}}}),de={key:0,class:"flex text-lg bg-red-400 text-white rounded-md py-1 mb-1"},ce=s("span",{class:"text-center w-full"}," STF Canceled ",-1),_e=[ce],he={key:1,class:"flex font-bold w-full text-[1.0rem]"},ue={key:0,class:"px-2 py-2 text-green-500 bg-green-100 w-full rounded-lg"},fe={key:1,class:"px-2 py-2 text-red-500 bg-red-100 w-full rounded-lg"},me={class:"w-1 p-4 py-2"},pe={class:"flex items-center"},xe={class:"flex cursor-pointer items-center rounded-sm p-1",for:"selected_row","data-ripple-dark":"true"},be=["id"],we={class:"px-2 py-2 font-medium text-center"},ge={class:"px-2 py-2 font-medium text-center"},ve={key:0,class:"flex items-center justify-center"},ye={key:1,class:"flex items-center justify-center"},$e={key:0,class:"flex text-lg bg-red-400 text-white rounded-md py-1 mb-1"},ke=s("span",{class:"text-center w-full"}," STF Canceled ",-1),Se=[ke],Ee={key:1,class:"flex font-bold w-full text-[1.0rem]"},Te={key:0,class:"px-2 py-2 text-green-500 bg-green-100 w-full rounded-lg"},Ce={key:1,class:"px-2 py-2 text-red-500 bg-red-100 w-full rounded-lg"},Re={class:"w-1 p-4 py-2"},Fe={class:"flex items-center"},Ae={class:"flex cursor-pointer items-center rounded-sm p-1",for:"selected_row","data-ripple-dark":"true"},Ue=["id"],De={class:"px-2 py-2 font-medium text-center"},Ne={class:"px-2 py-2 font-medium text-center"},Ie={key:0,class:"flex items-center justify-center"},Ge={key:1,class:"flex items-center justify-center"},ze={__name:"ShowSTFEachRow",props:["each","index"],setup(o){const e=o,t=w(),a=ee(),r=S(!1),l=()=>{r.value=!r.value,r.value?t.warehouse_selecting_rows.push(e.each):t.warehouse_selecting_rows=t.warehouse_selecting_rows.filter(u=>u.stf_id!==e.each.stf_id)};S(!1);const i=async u=>{console.log("1 data is : ",u),await a.toggleStar(u).then(_=>{var p,f;((p=_==null?void 0:_.data)==null?void 0:p.msg)==="Row Starred"?e.each.starred_id=(f=_==null?void 0:_.data)==null?void 0:f.id:e.each.starred_id=null})};return(u,_)=>{var p,f,A;return(p=e.each)!=null&&p.canceled_id?(n(),d("tr",{key:1,class:k([r.value?"text-white bg-blue-600  hover:bg-blue-500 ":"bg-red-200  hover:bg-blue-600 hover:text-white hover:duration-200 ","border-b hover:cursor-pointer table_row"])},[h(G,{each:e==null?void 0:e.each},{stf_complete:D(()=>{var b,T,g,m;return[(b=e.each)!=null&&b.canceled_id?(n(),d("div",$e,Se)):(n(),d("div",Ee,[(T=e==null?void 0:e.each)!=null&&T.completed?(n(),d("span",Te," Completed : "+x((g=e==null?void 0:e.each)==null?void 0:g.completed),1)):(n(),d("span",Ce," Completed : "+x((m=e==null?void 0:e.each)==null?void 0:m.completed),1))]))]}),_:1},8,["each"]),s("td",Re,[s("div",Fe,[s("label",Ae,[s("input",{id:e.each.id,type:"checkbox",onChange:_[3]||(_[3]=b=>l(e.each.id)),class:"checkbox checkbox-xs checkbox-primary"},null,40,Ue)])])]),s("th",De,x(e.index+1),1),s("th",Ne,[(A=e.each)!=null&&A.starred_id?(n(),d("span",Ge,[s("img",{onClick:_[5]||(_[5]=b=>i(e.each)),class:"w-4",src:Q,alt:""})])):(n(),d("span",Ie,[s("img",{onClick:_[4]||(_[4]=b=>i(e.each)),class:"w-4",src:q,alt:""})]))]),h(z,{each:e==null?void 0:e.each,table_headers:c(t).all_stf_headers},null,8,["each","table_headers"])],2)):(n(),d("tr",{key:0,class:k([r.value?"text-white bg-blue-600  hover:bg-blue-500 ":"bg-white  hover:bg-blue-600 hover:text-white hover:duration-200 ","border-b hover:cursor-pointer table_row"])},[h(G,{each:e==null?void 0:e.each},{stf_complete:D(()=>{var b,T,g,m;return[(b=e.each)!=null&&b.canceled_id?(n(),d("div",de,_e)):(n(),d("div",he,[(T=e==null?void 0:e.each)!=null&&T.completed?(n(),d("span",ue," Completed : "+x((g=e==null?void 0:e.each)==null?void 0:g.completed),1)):(n(),d("span",fe," Completed : "+x((m=e==null?void 0:e.each)==null?void 0:m.completed),1))]))]}),_:1},8,["each"]),s("td",me,[s("div",pe,[s("label",xe,[s("input",{id:e.each.id,type:"checkbox",onChange:_[0]||(_[0]=b=>l(e.each.id)),class:"checkbox checkbox-xs checkbox-primary"},null,40,be)])])]),s("th",we,x(e.index+1),1),s("th",ge,[(f=e.each)!=null&&f.starred_id?(n(),d("span",ye,[s("img",{onClick:_[2]||(_[2]=b=>i(e.each)),class:"w-4",src:Q,alt:""})])):(n(),d("span",ve,[s("img",{onClick:_[1]||(_[1]=b=>i(e.each)),class:"w-4",src:q,alt:""})]))]),h(z,{each:e==null?void 0:e.each,table_headers:c(t).all_stf_headers},null,8,["each","table_headers"])],2))}}};const He=o=>(J("data-v-76290771"),o=o(),X(),o),je={key:0,class:"mtf-anim fixed left-1/4 bottom-10 flex flex-row mb-4 justify-center rounded-lg w-1/2"},Le={class:"flex justify-between bg-white border rounded-md shadow-2xl w-full"},Me={class:"flex items-center"},We={class:"bg-blue-600 py-4 px-6 text-white font-bold rounded-l-md text-3xl"},Ve={class:"ml-3"},Be=He(()=>s("p",null,"Task Selected",-1)),Pe={class:"text-blue-600"},Oe=K('<div class="flex items-center ml-[200px]" data-v-76290771><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-76290771><i class="fa-regular fa-trash-can" data-v-76290771></i> <span class="text-sm" data-v-76290771>Add Archieve</span></div><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-76290771><i class="fa-solid fa-eye-slash" data-v-76290771></i> <span class="text-sm" data-v-76290771>Dont Show</span></div><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-76290771><i class="fa-regular fa-star" data-v-76290771></i> <span class="text-sm" data-v-76290771>Set Star</span></div></div>',1),qe={__name:"SelectingRows",setup(o){const e=w(),t=S([]);return j(()=>{t.value=e.warehouse_selecting_rows}),(a,r)=>c(e).warehouse_selecting_rows.length>=1?(n(),d("div",je,[s("div",Le,[s("div",Me,[s("span",We,x(t.value.length),1),s("div",Ve,[Be,(n(!0),d(F,null,U(t.value.length,l=>(n(),d("span",Pe,"●"))),256))])]),Oe])])):v("",!0)}},Qe=H(qe,[["__scopeId","data-v-76290771"]]),Ke={class:"flex flex-col",style:{display:"inline-block"}},Je={class:"sticky top-10 px-1 z-10"},Xe={class:"sticky left-16 flex flex-col bg-white",style:{display:"inline-block",width:"calc(100vw - 5rem)"}},Ze={key:0,class:"mx-2 w-full shadow-xl mt-1"},Ye=s("th",{class:"px-2 py-3 text-center"},[s("div",{class:"flex flex-col font-thin"}," Star ")],-1),et={key:1,class:"flex flex-row justify-center items-center w-full h-96"},tt=s("span",{class:"loading loading-dots loading-lg"},null,-1),st=[tt],at={key:2,class:"flex flex-row justify-center items-center w-full h-96"},ot={class:"text-3xl"},lt={class:"font-bold"},rt={__name:"ShowSTF",setup(o){const e=w(),t=N();L(async()=>{const r=t.GETUSER;r===void 0||(await e.fetchUserSTFAll(r),e.GETALLSTFHEADERS.length===0&&await e.getHeaders())});const a=async r=>{var l,i;if(t.GETUSER!==void 0){r.user=(l=t==null?void 0:t.GETUSER)==null?void 0:l.id;const u={filtered_objects:r,user_id:(i=t.user)==null?void 0:i.id};await e.getFilteredData(u)}};return(r,l)=>(n(),d("div",Ke,[h(V),s("div",Je,[s("div",Xe,[h(B),h(le,{onFilterFunction:a},{default:D(()=>[(n(),E(P,{key:0,table_headers:c(e).GETALLSTFHEADERS},null,8,["table_headers"]))]),_:1})])]),c(e).GETALLSTFHEADERS.length?(n(),d("table",Ze,[h(O,{table_headers:c(e).GETALLSTFHEADERS},{star:D(()=>[Ye]),_:1},8,["table_headers"]),(n(!0),d(F,null,U(c(e).all_stf,(i,u)=>(n(),E(ze,{each:i,index:u},null,8,["each","index"]))),256))])):v("",!0),c(e).all_stf_loading?(n(),d("div",et,st)):v("",!0),c(e).all_stf_cond_text?(n(),d("div",at,[s("span",ot,[y(" There is not any data in warehouse which created by "),s("span",lt,x(c(t).user.name)+" "+x(c(t).user.surname),1)])])):v("",!0),h(Qe)]))}},nt={},it={class:"text-gray-100 bg-slate-700 border table_header"},dt=s("tr",null,[s("th",{scope:"col",class:"px-6 py-2 text-center border"}," S/S "),s("th",{scope:"col",class:"px-6 py-1 text-center border"},[s("div",{class:""}," Type ")]),s("th",{scope:"col",class:"px-6 py-1 text-center border w-1/3"},[s("div",{class:""}," Material Name ")]),s("th",{scope:"col",class:"px-6 py-1 text-center border"},[s("div",{class:""}," Link ")]),s("th",{scope:"col",class:"px-6 py-1 text-center border w-4"}," Count "),s("th",{scope:"col",class:"px-6 py-1 text-center border w-4"}," Unit "),s("th",{scope:"col",class:"px-6 py-1 text-center border w-8"}," Field "),s("th",{scope:"col",class:"px-6 py-1 text-center border"}," Comment ")],-1),ct=[dt];function _t(o,e){return n(),d("thead",it,ct)}const ht=H(nt,[["render",_t]]),ut={scope:"row",class:"w-8 text-gray-900 whitespace-nowrap dark:text-white text-center table_row"},ft={class:"flex justify-between items-center px-1"},mt=s("span",{class:"relative flex h-3 w-3"},[s("span",{class:"animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"}),s("span",{class:"relative inline-flex rounded-full h-3 w-3 bg-orange-500"})],-1),pt={scope:"row",class:"p-1 border text-gray-900 whitespace-nowrap dark:text-white table_row",style:{}},xt=s("option",{disabled:"",value:""},"Type",-1),bt=s("option",null,"Project",-1),wt=s("option",null,"Consumables",-1),gt=s("option",null,"Fixture",-1),vt=[xt,bt,wt,gt],yt={class:"p-1 border text-gray-900 whitespace-nowrap dark:text-white"},$t={class:"p-1 border text-gray-900 whitespace-nowrap dark:text-white"},kt={class:"p-1 border"},St={class:"p-1 border",style:{}},Et=s("option",{disabled:"",value:""},"Unit",-1),Tt=s("option",null,"Adet",-1),Ct=s("option",null,"M2",-1),Rt=s("option",null,"M3",-1),Ft=s("option",null,"Ton",-1),At=s("option",null,"Kg",-1),Ut=[Et,Tt,Ct,Rt,Ft,At],Dt={class:"p-1 border"},Nt=s("option",{disabled:"",value:""},"Field",-1),It=["value"],Gt={class:"p-1 border",style:{}},zt={__name:"STF_Table_Body_Each_Row_Comp",props:["id","order_list"],setup(o){const e=o,t=w(),a=te({each_id:e==null?void 0:e.id,material_type:"",material_name:"",material_amount:0,material_unit:"",link:"",fieldId:0,comment:""});return j(()=>{var r;if(((r=t.order_list)==null?void 0:r.length)>=1){let l=!1;for(let i of t.order_list)if(i.each_id===a.each_id){l=!0;break}!l&&a.each_id!=""&&t.order_list.push(a)}else t.order_list.push(a);if(t.after_created)for(let l=0;l<t.order_list.length;l++)a.each_id=0,a.material_type="",a.material_name="",a.link="",a.material_amount=0,a.material_unit="",a.fieldId=0,t.order_list.splice(l,1)}),(r,l)=>(n(),d(F,null,[s("td",ut,[s("div",ft,[s("span",null,x(a.each_id),1),mt])]),s("td",pt,[R(s("select",{class:"border border-red-500 outline-none rounded-lg w-full h-full p-2","onUpdate:modelValue":l[0]||(l[0]=i=>a.material_type=i)},vt,512),[[W,a.material_type]])]),s("td",yt,[R(s("input",{class:"border border-red-500 outline-none rounded-lg w-full h-full p-2",type:"text",placeholder:"Material Name...","onUpdate:modelValue":l[1]||(l[1]=i=>a.material_name=i)},null,512),[[I,a.material_name]])]),s("td",$t,[R(s("input",{class:"border outline-none rounded-lg w-full h-full p-2",type:"text",placeholder:"Material Link...","onUpdate:modelValue":l[2]||(l[2]=i=>a.link=i)},null,512),[[I,a.link]])]),s("td",kt,[R(s("input",{class:"border border-red-500 outline-none rounded-lg w-full h-full p-2",type:"number",min:"0.001",placeholder:"Count...","onUpdate:modelValue":l[3]||(l[3]=i=>a.material_amount=i)},null,512),[[I,a.material_amount]])]),s("td",St,[R(s("select",{class:"border border-red-500 outline-none rounded-lg w-full h-full p-2","onUpdate:modelValue":l[4]||(l[4]=i=>a.material_unit=i)},Ut,512),[[W,a.material_unit]])]),s("td",Dt,[R(s("select",{class:"border border-red-500 outline-none rounded-lg w-full h-full p-2","onUpdate:modelValue":l[5]||(l[5]=i=>a.fieldId=i)},[Nt,(n(!0),d(F,null,U(c(t).GETFIELDSNAME,i=>(n(),d("option",{value:i.id},x(i.field_name),9,It))),256))],512),[[W,a.fieldId]])]),s("td",Gt,[R(s("input",{class:"border outline-none rounded-lg w-full h-full p-2",type:"text",placeholder:"Comment...","onUpdate:modelValue":l[6]||(l[6]=i=>a.comment=i)},null,512),[[I,a.comment]])])],64))}};const Ht={__name:"STF_Table_Body_Column_Name_Comp",props:["row_size","order_list"],setup(o){const e=o;return(t,a)=>(n(!0),d(F,null,U(e.row_size,r=>(n(),d("tr",{class:k([r===1?"bg-red-50":"","bg-white border-b hover:bg-gray-50 table_row"])},[(n(),E(zt,{id:r,key:r,order_list:o.order_list},null,8,["id","order_list"]))],2))),256))}},jt=H(Ht,[["__scopeId","data-v-6718c5c3"]]),Lt={__name:"STF_Table_Body_Comp",props:["row_size","order_list"],setup(o){const e=o;return(t,a)=>(n(),d("tbody",null,[h(jt,{row_size:e==null?void 0:e.row_size,order_list:o.order_list},null,8,["row_size","order_list"])]))}},Mt={class:"flex justify-between mt-1"},Wt=s("i",{class:"fa-solid fa-plus fa-lg"},null,-1),Vt=s("i",{class:"fa-solid fa-minus fa-lg"},null,-1),Bt={__name:"STF_Table_Row_Count_Comp",emits:["emitAddNewRow","emitRemoveRow"],setup(o,{emit:e}){const t=()=>e("emitAddNewRow"),a=()=>e("emitRemoveRow");return(r,l)=>(n(),d("div",Mt,[s("button",{onClick:t,class:"font-bold py-2 px-2 my-1 text-xs outline-none font-mono border text-gray-100 rounded-xl bg-orange-500 hover:bg-orange-400 hover:shadow-xl"},[Wt,y(" Add New Column ")]),s("button",{onClick:a,class:"py-2 px-2 my-1 text-xs outline-none font-mono font-bold border text-gray-100 rounded-xl bg-red-500 hover:bg-red-400 hover:shadow-xl"},[Vt,y(" Remove Column ")])]))}},Pt={class:"flex items-center justify-end mt-10"},Ot=s("i",{class:"fa-solid fa-plus"},null,-1),qt={key:1,type:"button",class:"text-white bg-gradient-to-r bg-blue-600 hover:bg-blue-500 hover:shadow-xl font-medium rounded-lg text-md px-4 py-2 text-center mr-2 mb-2"},Qt=s("span",{class:"loading loading-spinner"},null,-1),Kt={__name:"STF_Create_Button_Comp",props:["row_size"],emits:["setRowSize"],setup(o,{emit:e}){const t=o,a=w(),r=N(),l=S(!0),i=async()=>{var u,_,p,f,A,b,T;if(console.log("order list : ",a.order_list),l.value=!1,a.order_list.length===0&&alert("Must Create at least 1 data"),t.row_size===0)alert("Must Create at least 1 data");else{let g=!0;for(let m=0;m<t.row_size;m++)if(((u=a.order_list[m])==null?void 0:u.material_name)===""){g=!1,alert(`${m+1} Row Material Name is Empty`);break}else if(((_=a.order_list[m])==null?void 0:_.material_type)===""){g=!1,alert(`${m+1} Row Material Type Cant Be An Empty`);break}else if(((p=a.order_list[m])==null?void 0:p.material_amount)<=0){g=!1,alert(`${m+1} Row Material Amount In Not True Amount`);break}else if(((f=a.order_list[m])==null?void 0:f.material_unit)===""){g=!1,alert(`${m+1} Row Unit Is Not Selected`);break}else if(((A=a.order_list[m])==null?void 0:A.fieldId)===0){g=!1,alert(`${m+1} Row Field Not Selected`);break}if(g)try{const m={orders:a.order_list,user:r==null?void 0:r.user};for(let C=(b=a.order_list)==null?void 0:b.length;C>t.row_size;C--){const M=(T=a.order_list)==null?void 0:T.pop()}console.log("creating data : ",m),await a.createSTF(m).then(async C=>{var M;((M=C==null?void 0:C.response)==null?void 0:M.status)===400?alert("MTF Cant Create"):(a.msg_cond=!0,setTimeout(()=>{e("setRowSize"),l.value=!0,a.after_created=!0,a.tab_num=0,a.fetchUserSTFAll(m.user)},500),setTimeout(()=>{a.msg_cond=!1},1e3))}).catch(C=>{console.log("from create Error component : ",C)})}catch(m){console.log("error : ",m)}else l.value=!0}};return(u,_)=>(n(),d("div",Pt,[l.value?(n(),d("button",{key:0,type:"button",onClick:i,class:"text-white bg-gradient-to-r bg-blue-600 hover:bg-blue-500 hover:shadow-xl font-medium rounded-lg text-md px-4 py-2 text-center mr-2 mb-2"},[Ot,y(" Create")])):(n(),d("button",qt,[Qt,y(" Loading")]))]))}},Jt={class:"overflow-x-auto shadow-xl sm:rounded-lg border p-2"},Xt=s("h1",{class:"text-center text-3xl py-4",style:{"font-family":"'Poppins'"}}," Create STF Form",-1),Zt={class:"w-full text-left text-gray-500 dark:text-gray-400"},Yt={__name:"CreateSTF",setup(o){const e=w(),t=S(1),a=()=>{let _=!0,p=0;for(let f of e.order_list){const A=f==null?void 0:f.material_name.trim();(f==null?void 0:f.material_type)===""?(_=!1,alert(`${p+1} Row Material Type Cant Be Empty`)):A===""?(_=!1,alert(`${p+1} Row Material Name Cant Be Empty`)):(f==null?void 0:f.material_amount)<=0?(_=!1,alert(`${p+1} Row Material Amount Cant Be 0`)):(f==null?void 0:f.material_unit)===""?(_=!1,alert(`${p+1} Row Material Unit Is Not Selected`)):(f==null?void 0:f.fieldId)===0&&(_=!1,alert(`${p+1} Row Field Is Not Selected`)),p++}_&&e.order_list.length&&(t.value+=1)},r=()=>{t.value>1?t.value-=1:t.value},l=()=>{t.value=0};let i=S([]);const u=()=>{t.value=1,e.after_created=!1};return(_,p)=>(n(),d("div",Jt,[Xt,t.value===0?(n(),d("button",{key:0,class:"font-bold py-2 px-2 my-1 text-xs outline-none font-mono border text-gray-100 rounded-xl bg-green-500 mb-2",onClick:p[0]||(p[0]=f=>u())}," Create New STF ")):v("",!0),s("table",Zt,[h(ht),h(Lt,{row_size:t.value,order_list:c(i)},null,8,["row_size","order_list"])]),h(Bt,{onEmitAddNewRow:a,onEmitRemoveRow:r}),h(Kt,{onSetRowSize:l,row_size:t.value},null,8,["row_size"]),h(re,{cond:c(e).msg_cond,messages:"New STF Successfuly Created"},null,8,["cond"])]))}},es={class:"w-1 p-4 py-2"},ts={class:"flex items-center"},ss={class:"flex cursor-pointer items-center rounded-sm p-1",for:"selected_row","data-ripple-dark":"true"},as=["id"],os={class:"px-2 py-2 font-medium text-center"},ls={__name:"ShowWarehouseEachRow",props:["each","index"],setup(o){const e=o,t=w(),a=S(!1),r=()=>{a.value=!a.value,a.value?t.warehouse_selecting_rows.push(e.each):t.warehouse_selecting_rows=t.warehouse_selecting_rows.filter(l=>l.stf_id!==e.each.stf_id)};return(l,i)=>(n(),d("tr",{class:k([a.value?"text-white bg-blue-600  hover:bg-blue-500 ":" bg-white  hover:bg-blue-600 hover:text-white hover:duration-200 ","border-b hover:cursor-pointer table_row"])},[h(G,{each:e==null?void 0:e.each},null,8,["each"]),s("td",es,[s("div",ts,[s("label",ss,[s("input",{id:e.each.id,type:"checkbox",onChange:i[0]||(i[0]=u=>r(e.each.id)),class:"checkbox checkbox-xs checkbox-primary"},null,40,as)])])]),s("th",os,x(e.index+1),1),h(z,{each:e==null?void 0:e.each,table_headers:c(t).GETWAREHOUSEHEADERS},null,8,["each","table_headers"])],2))}};const rs=o=>(J("data-v-6a925cb8"),o=o(),X(),o),ns={key:0,class:"mtf-anim fixed left-1/4 bottom-10 flex flex-row mb-4 justify-center rounded-lg w-1/2"},is={class:"flex justify-between bg-white border rounded-md shadow-2xl w-full"},ds={class:"flex items-center"},cs={class:"bg-blue-600 py-4 px-6 text-white font-bold rounded-l-md text-3xl"},_s={class:"ml-3"},hs=rs(()=>s("p",null,"Task Selected",-1)),us={class:"text-blue-600"},fs=K('<div class="flex items-center ml-[200px]" data-v-6a925cb8><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-6a925cb8><i class="fa-regular fa-trash-can" data-v-6a925cb8></i> <span class="text-sm" data-v-6a925cb8>Add Archieve</span></div><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-6a925cb8><i class="fa-solid fa-eye-slash" data-v-6a925cb8></i> <span class="text-sm" data-v-6a925cb8>Dont Show</span></div><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-6a925cb8><i class="fa-regular fa-star" data-v-6a925cb8></i> <span class="text-sm" data-v-6a925cb8>Set Star</span></div></div>',1),ms={__name:"SelectingRows",setup(o){const e=w(),t=S([]);return j(()=>{t.value=e.warehouse_selecting_rows}),(a,r)=>c(e).warehouse_selecting_rows.length>=1?(n(),d("div",ns,[s("div",is,[s("div",ds,[s("span",cs,x(t.value.length),1),s("div",_s,[hs,(n(!0),d(F,null,U(t.value.length,l=>(n(),d("span",us,"●"))),256))])]),fs])])):v("",!0)}},ps=H(ms,[["__scopeId","data-v-6a925cb8"]]),xs={class:"flex flex-col",style:{display:"inline-block"}},bs={class:"sticky top-10 px-1 z-10"},ws={class:"sticky left-16 flex flex-col bg-white",style:{display:"inline-block",width:"calc(100vw - 5rem)"}},gs={key:0,class:"mx-2 text-gray-800 w-full shadow-xl bg-white mt-1"},vs={key:1,class:"flex flex-row justify-center items-center w-full h-96"},ys=s("span",{class:"loading loading-dots loading-lg"},null,-1),$s=[ys],ks={key:2,class:"flex flex-row justify-center items-center w-full h-96"},Ss={class:"text-3xl"},Es={class:"font-bold"},Ts={__name:"WarehouseData",setup(o){const e=w(),t=N(),a=ne();L(async()=>{const l=t.GETUSER;l===void 0||(await e.fetchWarehouseData(l),await a.getCompaniesNames(),e.GETWAREHOUSEHEADERS.length===0&&await e.getWarehouseHeaders())});const r=async l=>{var i;t.GETUSER!==void 0&&(l.user=(i=t==null?void 0:t.GETUSER)==null?void 0:i.id,await e.getFilteredWarehouseData(l))};return(l,i)=>(n(),d("div",xs,[h(V),s("div",bs,[s("div",ws,[h(B),h(Y,{onFilterFunction:r},{default:D(()=>[(n(),E(P,{key:0,table_headers:c(e).GETWAREHOUSEHEADERS},null,8,["table_headers"]))]),_:1})])]),c(e).GETWAREHOUSEHEADERS.length?(n(),d("table",gs,[h(O,{table_headers:c(e).GETWAREHOUSEHEADERS},null,8,["table_headers"]),(n(!0),d(F,null,U(c(e).warehouse_data,(u,_)=>(n(),E(ls,{each:u,index:_},null,8,["each","index"]))),256))])):v("",!0),c(e).warehouse_data_loading?(n(),d("div",vs,$s)):v("",!0),c(e).warehouse_data_cond_text?(n(),d("div",ks,[s("span",Ss,[y(" There is not any data in warehouse which created by "),s("span",Es,x(c(t).user.name)+" "+x(c(t).user.surname),1)])])):v("",!0),h(ps)]))}},Cs={class:"w-1 p-4 py-2"},Rs={class:"flex items-center"},Fs=s("label",{for:"checkbox-table-search-1",class:"sr-only"},"checkbox",-1),As={class:"px-2 py-3 text-center"},Us={__name:"Provided_Table_Body_Each_Row",props:["each","index"],emits:["addChecked","removeChecked"],setup(o,{emit:e}){const t=o,a=w(),r=S(!1),l=()=>r.value===!0?e("addChecked",t==null?void 0:t.each):e("removeChecked",t==null?void 0:t.each);return j(()=>{a.after_provide&&(r.value=!1)}),(i,u)=>(n(),d("tr",{class:k([r.value?"text-white  bg-blue-600 hover:bg-blue-500 ":"bg-white hover:bg-blue-600 hover:text-white hover:duration-200","border-b table_row hover:cursor-pointer"])},[h(G,{each:t==null?void 0:t.each},null,8,["each"]),s("td",Cs,[s("div",Rs,[Fs,R(s("input",{id:"checkbox-table-search-1",type:"checkbox","onUpdate:modelValue":u[0]||(u[0]=_=>r.value=_),onChange:l,class:"checkbox checkbox-xs checkbox-primary"},null,544),[[se,r.value]])])]),s("th",As,x((t==null?void 0:t.index)+1),1),h(z,{each:t==null?void 0:t.each,table_headers:c(a).provided_data_headers},null,8,["each","table_headers"])],2))}},Ds={__name:"Provided_Table_Body",setup(o){const e=w();return(t,a)=>(n(!0),d(F,null,U(c(e).provides_data,(r,l)=>(n(),E(Us,{each:r,index:l},null,8,["each","index"]))),256))}},Ns={class:"flex flex-col",style:{display:"inline-block"}},Is={class:"sticky h-40 top-10 bg-white z-10"},Gs={class:"sticky left-16 flex flex-col w-max bg-white",style:{display:"inline-block",width:"calc(100vw - 5rem)"}},zs={class:""},Hs={key:0,class:"mx-2 text-gray-800 dark:text-gray-400 w-full shadow-xl bg-white mt-1",style:{"font-size":"xx-small"}},js={key:1,class:"flex flex-row justify-center items-center w-full h-96"},Ls=s("span",{class:"loading loading-dots loading-lg"},null,-1),Ms=[Ls],Ws={key:2,class:"flex flex-row justify-center items-center w-full h-96"},Vs={class:"text-3xl"},Bs={class:"font-bold"},Ps={__name:"ProvideData",setup(o){const e=w(),t=N();L(async()=>{const r=t.GETUSER;r===void 0||(console.log("else work"),await e.fetchProvidedData(r),e.provided_data_headers.length===0&&e.getProvidedDataHeaders())});const a=async r=>{var l;t.GETUSER!==void 0&&(r.department=(l=t==null?void 0:t.GETUSER)==null?void 0:l.departmentId,await e.getFilteredDataProvided(r))};return(r,l)=>(n(),d("div",Ns,[h(V),s("div",Is,[s("div",Gs,[h(B),h(ie,{onFilterFunction:a},{default:D(()=>[(n(),E(P,{key:0,table_headers:c(e).provided_data_headers},null,8,["table_headers"]))]),_:1})])]),s("div",zs,[c(e).provided_data_headers.length?(n(),d("table",Hs,[h(O,{table_headers:c(e).provided_data_headers},null,8,["table_headers"]),h(Ds)])):v("",!0),c(e).provide_data_loading?(n(),d("div",js,Ms)):v("",!0),c(e).provide_data_cond_text?(n(),d("div",Ws,[s("span",Vs,[y(" There is not any provide data which created by "),s("span",Bs,x(c(t).user.name)+" "+x(c(t).user.surname),1)])])):v("",!0)])]))}},Os={class:"flex flex-col bg-white"},qs={key:0,class:"bg-white",style:{"font-family":"'Poppins'"}},Qs={class:"bg-white sticky top-0"},Ks={class:"flex flex-row anim h-10 bg-white items-center sticky left-16",style:{"letter-spacing":"1px","font-size":"x-small",display:"inline-block"}},Js={class:"flex flex-row anim h-10 sticky top-0 bg-white w-full items-center",style:{"letter-spacing":"1px","font-size":"x-small"}},Xs=s("i",{class:"fa-solid fa-list fa-lg"},null,-1),Zs=s("i",{class:"fa-solid fa-plus fa-lg"},null,-1),Ys=s("i",{class:"fa-solid fa-warehouse fa-lg"},null,-1),ea=s("i",{class:"fa-solid fa-upload fa-lg"},null,-1),ta={key:1},sa=s("span",null,"User Not Login ",-1),aa=[sa],Ea={__name:"views.stf",setup(o){const e=N(),t=w(),a=[rt,Yt,Ts,Ps],r=l=>{t.tab_num=l};return L(async()=>{const l=e.GETUSER;l===void 0||t.fetchFieldsNames(l==null?void 0:l.projectId)}),(l,i)=>(n(),d("div",Os,[c(e).user?(n(),d("div",qs,[s("div",Qs,[s("div",Ks,[s("div",Js,[s("span",{class:k([c(t).tab_num===0?"border-b-violet-800 border-b-4 ":"","text-black px-3 py-2 pt-2 mx-1 border-b-2 cursor-pointer"]),onClick:i[0]||(i[0]=u=>r(0))},[Xs,y(" Show STF")],2),s("span",{class:k([c(t).tab_num===1?"border-b-violet-800 border-b-4 ":"","text-black px-3 py-2 pt-2 mx-1 border-b-2 cursor-pointer"]),onClick:i[1]||(i[1]=u=>r(1))},[Zs,y(" Create STF")],2),s("span",{class:k([c(t).tab_num===2?"border-b-violet-800 border-b-4 ":"","text-black px-3 py-2 pt-2 mx-1 border-b-2 cursor-pointer"]),onClick:i[2]||(i[2]=u=>r(2))},[Ys,y(" Warehouse")],2),s("span",{class:k([c(t).tab_num===3?"border-b-violet-800 border-b-4 ":"","text-black px-3 py-2 pt-2 mx-1 border-b-2 cursor-pointer"]),onClick:i[3]||(i[3]=u=>r(3))},[ea,y(" Provides")],2)])])]),(n(),E(oe,null,[(n(),E(ae(a[c(t).tab_num])))],1024))])):(n(),d("div",ta,aa))]))}};export{Ea as default};
