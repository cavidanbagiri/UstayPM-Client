import{d as K}from"./pinia-f2173f69.js";import{a as $}from"./axios-21b846bc.js";import{_ as N,T as z,a as L,b as V,c as P,d as O,W as Z,e as ee}from"./TableFilterWarehouse-7607ca08.js";import{I as te,_ as H,U as B}from"./index-174c8984.js";import{r as k,F as n,G as i,M as h,P as I,I as x,H as s,u as c,X as A,z as G,J as R,K as U,O as v,W as Q,U as J,V as q,q as j,Q as S,L as y,a as se,R as C,Z as W,S as D,_ as ae,l as oe,$ as le}from"./@vue-545ec849.js";import{_ as re}from"./TableFilter-a0dde0d1.js";import{T as ne}from"./Toast-80fd23a6.js";import{_ as ie}from"./TableFilterProvide-31240509.js";import"./socket.io-client-651ff694.js";import"./engine.io-client-86cec14e.js";import"./engine.io-parser-b13552ae.js";import"./@socket.io-3e1df240.js";import"./socket.io-parser-44417fca.js";import"./moment-fbc5633a.js";import"./vue-router-27805559.js";import"./vee-validate-e5cd1ca6.js";import"./chart.js-49eabb2c.js";import"./@kurkle-b1b89bbc.js";import"./@vee-validate-f04fc1ec.js";$.defaults.withCredentials=!0;const b=K("STFStore",{state:()=>({tab_num:0,all_stf:null,all_stf_loading:!0,all_stf_cond_text:!1,all_stf_headers:[],warehouse_selecting_rows:[],order_list:[],fields:[],warehouse_data:[],warehouse_data_loading:!0,warehouse_data_cond_text:!1,warehouse_headers:[],provides_data:[],provide_data_loading:!0,provide_data_cond_text:!1,provided_data_headers:[],warehouse_selecting_rows:[],msg_cond:!1,after_created:!1}),getters:{GETALLSTF:o=>o.all_stf,GETALLSTFHEADERS:o=>o.all_stf_headers,GETSELECTINGROWS:o=>o.warehouse_selecting_rows,GETFIELDSNAME:o=>o.fields,GETWAREHOUSEDATA:o=>o.warehouse_data,GETWAREHOUSEHEADERS:o=>o.warehouse_headers},actions:{async createSTF(o){try{await $.post("https://ustaypm-server.onrender.com/api/stf/createstf",o).then(e=>e)}catch(e){return e}},async fetchUserSTFAll(o){if(this.all_stf_loading=!0,o!=null&&o.id)try{await $.get(`https://ustaypm-server.onrender.com/api/stf/getuserstfall/${o.id}`).then(e=>{e.data.length!==0?(this.all_stf=e.data,this.all_stf_loading=!1,this.all_stf_cond_text=!1):(this.all_stf_loading=!1,this.all_stf_cond_text=!0)}).catch(e=>{console.log("Fetch User Catch Error : ",e)})}catch(e){return console.log("Fetch User STF Error : ",e),e}},async getFilteredData(o){this.all_stf_loading=!0;const e=this.createUrlQuery(o);try{await $.get(`https://ustaypm-server.onrender.com/api/common/filterstf${e}`).then(t=>{t.data.length!==0?(this.all_stf=t.data,this.all_stf_loading=!1,this.all_stf_cond_text=!1):(this.all_stf_loading=!1,this.all_stf_cond_text=!0)}).catch(t=>{console.log("Error Is : ",t)})}catch(t){console.log("Get Filtered Data Error : ",t)}},async getHeaders(){var o,e;if(((o=this.all_stf)==null?void 0:o.length)>=1){for(let[t,a]of Object.entries(this==null?void 0:this.all_stf[0])){const r=t.slice(t.length-2,t.length);if(t!=="id"&&r!=="id"&&r!=="Id"){let l={},d=t.charAt(0).toUpperCase()+t.slice(1);d=d.split("_").join(" "),t==="completed"||t==="stf_num"||t==="createdAt"||t==="situation"||t==="material_type"||t==="material_name"||t==="amount"||t==="unit"||t==="username"||t==="field_name"?(l.showname=`${d}`,l.name=`${t}`,l.value=!0):(l.showname=`${d}`,l.name=`${t}`,l.value=!1),this.all_stf_headers.push(l)}}for(let t=0;t<((e=this.all_stf_headers)==null?void 0:e.length);t++){if(this.all_stf_headers[t].name==="completed"){let a=this.all_stf_headers[0];this.all_stf_headers[0]=this.all_stf_headers[t],this.all_stf_headers[t]=a}if(this.all_stf_headers[t].name==="stf_num"){let a=this.all_stf_headers[1];this.all_stf_headers[1]=this.all_stf_headers[t],this.all_stf_headers[t]=a}}}},async fetchFieldsNames(o){if(o)try{await $.get(`https://ustaypm-server.onrender.com/api/common/fetchfields/${o}`).then(e=>{this.fields=e.data}).catch(e=>{console.log("Error Is : ",e)})}catch(e){console.log("fetch Field Names Error : ",e)}},async fetchWarehouseData(o){if(o!=null&&o.id){this.warehouse_data_loading=!0;try{await $.get(`https://ustaypm-server.onrender.com/api/stf/warehouse/${o.id}`).then(e=>{var t;((t=e.data)==null?void 0:t.length)!==0?(this.warehouse_data=e.data,this.warehouse_data_loading=!1,this.warehouse_data_cond_text=!1):(this.warehouse_data_loading=!1,this.warehouse_data_cond_text=!0)}).catch(e=>{console.log("Fetch User Catch Error : ",e)})}catch(e){return console.log("Fetch User STF Error : ",e),e}}},async getFilteredWarehouseData(o){this.warehouse_data_loading=!0;const e=this.createUrlQuery(o);try{await $.get(`
                https://ustaypm-server.onrender.com/api/common/filterwarehouse${e}
            `).then(t=>{var a;((a=t.data)==null?void 0:a.length)!==0?(this.warehouse_data=t.data,this.warehouse_data_loading=!1,this.warehouse_data_cond_text=!1):(this.warehouse_data_loading=!1,this.warehouse_data_cond_text=!0)}).catch(t=>{console.log("Error Is : ",t)})}catch(t){console.log("Get Filtered Data Error : ",t)}},async getWarehouseHeaders(){var o;if(((o=this.warehouse_data)==null?void 0:o.length)>=1)for(let[e,t]of Object.entries(this==null?void 0:this.warehouse_data[0])){const a=e.slice(e.length-2,e.length);if(e!=="id"&&a!=="id"&&a!=="Id"){let r={},l=e.charAt(0).toUpperCase()+e.slice(1);l=l.split("_").join(" "),e==="stf_num"||e==="sm_num"||e==="material_name"||e==="amount"||e==="unit"||e==="vendor_name"||e==="stock"||e==="certificate"||e==="passport"||e==="field"?(r.showname=`${l}`,r.name=`${e}`,r.value=!0):(r.showname=`${l}`,r.name=`${e}`,r.value=!1),this.warehouse_headers.push(r)}}},async fetchProvidedData(o){await $.get(`https://ustaypm-server.onrender.com/api/stf/provided/${o.departmentId}`).then(e=>{var t;((t=e.data)==null?void 0:t.length)!==0?(this.provides_data=e.data,this.provide_data_loading=!1,this.provide_data_cond_text=!1,console.log("this provide data : ",this.provides_data)):(this.provide_data_loading=!1,this.provide_data_cond_text=!0)}).catch(e=>{console.log("Provied Items Error : ",e)})},async getFilteredDataProvided(o){const e=this.createUrlQuery(o);try{await $.get(`https://ustaypm-server.onrender.com/api/common/filterprovided${e}`).then(t=>{var a;((a=t.data)==null?void 0:a.length)!==0?(this.provides_data=t.data,this.provide_data_loading=!1,this.provide_data_cond_text=!1):(this.provide_data_loading=!1,this.provide_data_cond_text=!0)}).catch(t=>{console.log("Error Is : ",t)})}catch(t){console.log("Get Filtered Data Error : ",t)}},async getProvidedDataHeaders(){var o;if((o=this.provides_data)!=null&&o.length){for(let[e,t]of Object.entries(this.provides_data[0]))if(e!=="id"){let a={},r=e.charAt(0).toUpperCase()+e.slice(1);r=r.split("_").join(" "),e==="sm_num"||e==="provided_date"||e==="material_name"||e==="amount"||e==="unit"||e==="serial_no"||e==="unique_id"||e==="deliver_to"||e==="card_number"?(a.showname=`${r}`,a.name=`${e}`,a.value=!0):(a.showname=`${r}`,a.name=`${e}`,a.value=!1),this.provided_data_headers.push(a)}}},createUrlQuery(o){let e="";for(let[t,a]of Object.entries(o))e===""&&(e+="?"),o[t],e+=`${t}=${o[t]}`,e+="&";return e=e.slice(0,-1),e}}}),Y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGpwAABqcBaGdUVAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHHSURBVEiJrdXPSxVRFAfwz328xE0mD7UwECJ6IJl/gJtctHft3oKktSAEIbTxjxBcBK3a9A/UokVCQfJsY0S4eCIJYhs3QaeFl5jG4c3448CBud9zvt9zztw7d1JEaGIppRYW8/J1RPxpwms3Uj+1F3iUn7t5XW8RUeuYwD5Gs+9jogm31bD7FWxExHFEHGMjY5efIHd/gE4B62SsdoomE6xgMyKOCk0dYbPRFDXdT+Enxiti4zk2NUijDSmla7iDeyW/i6WIOKxo7DCltIR3KaXv+FbyHxHxO+EJXqJfStjF14j4NegNpJRu4H5uqFto7jaec7pZ002O3Hkc0zho4TMWajfr/LaQtY3hC1avsPvVrDlWPNefsHYF4mtZqxMRioFRfMT6JcTXs8boP6yUMIIPWL6A+HLmjvyHVyR2sXWBAlvolvGqq+I6jS/BorUy9wxYtgfYuUCBncytLTBziQIzTQv0ymBKaTiltJh9uILXqypQtVl9TBbWbTzGHt5k38tYu5A3if4ZvZL4EE7yc3L6k9/FW8wW8mYztptzUsZPMFR3THt4hW28x9yAozmXc7Yzpzdwgky6hWd4eI5vYB5PcbMc+wvYTQA38j6bpwAAAABJRU5ErkJggg==",X="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAhQAAAIUB4uz/wQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIQSURBVEiJtZO7axRRGMV/38yyOySCD4gkIlpJwFikUXzksWujRSwEsREDloYUavIPWFmkFGxSGLEUrBSx0M2a2Ak2KlhoI8RICApmZWd3M8di1zDMzGZnNB4YmHvuPed8331ABmixcEFLhYksGktt/sobRyq3VFaysVoljc5JXYp0q12QId1MK0vVgV54h8npE+C2qQDHjtho7XM3bboOcpoOmbd0ga6nkXbtQG/ooep9Ae2LTP2g5h+0c1S303fvoFq4mmAOsAfPu9JNntiBlthLkO8Hpw/pHsZQolq8x2wKgjWc+qqN8j0WoMX8RcyugfWDBoA+oNCtsg7wgTWwr6BVpPumirfeYQt2AFp3MC38H3PA7IFjY/4McAPQDloL7LaN+TNbh6yKNwmaB/L/aN5ENmXF2jxEbpEq3lnQY2D3X5pvIC5b0X/2h4hdU5Xzx3DsKXAoo/kKBBM23ngbJmMPzUr1dxhzGc3BuBM1TwxoQScyB0jHk+gOAXY6c0AHTfwMXu/aT7PxLXsAEOQGrFRdDVPxDjbr21W/0f6S4TZORql4gOxMolg8wXWGcN1BTA9JephBfJtyCVanIuMPyKatWCuHuElVvAXQXeDoFmvEAhIO2bz2z09gll5/OGLeWjVee0mvPwzMtteGtaHMCLRcGGST87juIxv5tRIvIA4t9xyguXmJHM9txP8YnvsNJlihJu4K2ugAAAAASUVORK5CYII=",de={key:0,class:"flex text-lg bg-red-400 text-white rounded-md py-1 mb-1"},ce=s("span",{class:"text-center w-full"}," STF Canceled ",-1),_e=[ce],he={key:1,class:"flex font-bold w-full text-[1.0rem]"},ue={key:0,class:"px-2 py-2 text-green-500 bg-green-100 w-full rounded-lg"},fe={key:1,class:"px-2 py-2 text-red-500 bg-red-100 w-full rounded-lg"},me={class:"w-1 p-4 py-2"},pe={class:"flex items-center"},xe={class:"flex cursor-pointer items-center rounded-sm p-1",for:"selected_row","data-ripple-dark":"true"},we=["id"],be={class:"px-2 py-2 font-medium text-center"},ge={class:"px-2 py-2 font-medium text-center"},ve={key:0,class:"flex items-center justify-center"},ye={key:1,class:"flex items-center justify-center"},$e={key:0,class:"flex text-lg bg-red-400 text-white rounded-md py-1 mb-1"},Ae=s("span",{class:"text-center w-full"}," STF Canceled ",-1),ke=[Ae],Se={key:1,class:"flex font-bold w-full text-[1.0rem]"},Ee={key:0,class:"px-2 py-2 text-green-500 bg-green-100 w-full rounded-lg"},Te={key:1,class:"px-2 py-2 text-red-500 bg-red-100 w-full rounded-lg"},Ce={class:"w-1 p-4 py-2"},Re={class:"flex items-center"},Fe={class:"flex cursor-pointer items-center rounded-sm p-1",for:"selected_row","data-ripple-dark":"true"},Ue=["id"],Ie={class:"px-2 py-2 font-medium text-center"},Be={class:"px-2 py-2 font-medium text-center"},De={key:0,class:"flex items-center justify-center"},Ne={key:1,class:"flex items-center justify-center"},ze={__name:"ShowSTFEachRow",props:["each","index"],setup(o){const e=o,t=b(),a=te(),r=k(!1),l=()=>{r.value=!r.value,r.value?t.warehouse_selecting_rows.push(e.each):t.warehouse_selecting_rows=t.warehouse_selecting_rows.filter(m=>m.stf_id!==e.each.stf_id)};k(!1);const d=async m=>{await a.toggleStar(m).then(_=>{var p,u;((p=_==null?void 0:_.data)==null?void 0:p.msg)==="Row Starred"?e.each.starred_id=(u=_==null?void 0:_.data)==null?void 0:u.id:e.each.starred_id=null})};return(m,_)=>{var p,u,F;return(p=e.each)!=null&&p.canceled_id?(n(),i("tr",{key:1,class:A([r.value?"text-white bg-blue-600  hover:bg-blue-500 ":"bg-red-200  hover:bg-blue-600 hover:text-white hover:duration-200 ","border-b hover:cursor-pointer table_row"])},[h(N,{each:e==null?void 0:e.each},{stf_complete:I(()=>{var w,E,g,f;return[(w=e.each)!=null&&w.canceled_id?(n(),i("div",$e,ke)):(n(),i("div",Se,[(E=e==null?void 0:e.each)!=null&&E.completed?(n(),i("span",Ee," Completed : "+x((g=e==null?void 0:e.each)==null?void 0:g.completed),1)):(n(),i("span",Te," Completed : "+x((f=e==null?void 0:e.each)==null?void 0:f.completed),1))]))]}),_:1},8,["each"]),s("td",Ce,[s("div",Re,[s("label",Fe,[s("input",{id:e.each.id,type:"checkbox",onChange:_[3]||(_[3]=w=>l(e.each.id)),class:"checkbox checkbox-xs checkbox-primary"},null,40,Ue)])])]),s("th",Ie,x(e.index+1),1),s("th",Be,[(F=e.each)!=null&&F.starred_id?(n(),i("span",Ne,[s("img",{onClick:_[5]||(_[5]=w=>d(e.each)),class:"w-4",src:X,alt:""})])):(n(),i("span",De,[s("img",{onClick:_[4]||(_[4]=w=>d(e.each)),class:"w-4",src:Y,alt:""})]))]),h(z,{each:e==null?void 0:e.each,table_headers:c(t).all_stf_headers},null,8,["each","table_headers"])],2)):(n(),i("tr",{key:0,class:A([r.value?"text-white bg-blue-600  hover:bg-blue-500 ":"bg-white  hover:bg-blue-600 hover:text-white hover:duration-200 ","border-b hover:cursor-pointer table_row"])},[h(N,{each:e==null?void 0:e.each},{stf_complete:I(()=>{var w,E,g,f;return[(w=e.each)!=null&&w.canceled_id?(n(),i("div",de,_e)):(n(),i("div",he,[(E=e==null?void 0:e.each)!=null&&E.completed?(n(),i("span",ue," Completed : "+x((g=e==null?void 0:e.each)==null?void 0:g.completed),1)):(n(),i("span",fe," Completed : "+x((f=e==null?void 0:e.each)==null?void 0:f.completed),1))]))]}),_:1},8,["each"]),s("td",me,[s("div",pe,[s("label",xe,[s("input",{id:e.each.id,type:"checkbox",onChange:_[0]||(_[0]=w=>l(e.each.id)),class:"checkbox checkbox-xs checkbox-primary"},null,40,we)])])]),s("th",be,x(e.index+1),1),s("th",ge,[(u=e.each)!=null&&u.starred_id?(n(),i("span",ye,[s("img",{onClick:_[2]||(_[2]=w=>d(e.each)),class:"w-4",src:X,alt:""})])):(n(),i("span",ve,[s("img",{onClick:_[1]||(_[1]=w=>d(e.each)),class:"w-4",src:Y,alt:""})]))]),h(z,{each:e==null?void 0:e.each,table_headers:c(t).all_stf_headers},null,8,["each","table_headers"])],2))}}};const He=o=>(J("data-v-76290771"),o=o(),q(),o),Ge={key:0,class:"mtf-anim fixed left-1/4 bottom-10 flex flex-row mb-4 justify-center rounded-lg w-1/2"},je={class:"flex justify-between bg-white border rounded-md shadow-2xl w-full"},Me={class:"flex items-center"},We={class:"bg-blue-600 py-4 px-6 text-white font-bold rounded-l-md text-3xl"},Le={class:"ml-3"},Ve=He(()=>s("p",null,"Task Selected",-1)),Pe={class:"text-blue-600"},Oe=Q('<div class="flex items-center ml-[200px]" data-v-76290771><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-76290771><i class="fa-regular fa-trash-can" data-v-76290771></i> <span class="text-sm" data-v-76290771>Add Archieve</span></div><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-76290771><i class="fa-solid fa-eye-slash" data-v-76290771></i> <span class="text-sm" data-v-76290771>Dont Show</span></div><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-76290771><i class="fa-regular fa-star" data-v-76290771></i> <span class="text-sm" data-v-76290771>Set Star</span></div></div>',1),Ye={__name:"SelectingRows",setup(o){const e=b(),t=k([]);return G(()=>{t.value=e.warehouse_selecting_rows}),(a,r)=>c(e).warehouse_selecting_rows.length>=1?(n(),i("div",Ge,[s("div",je,[s("div",Me,[s("span",We,x(t.value.length),1),s("div",Le,[Ve,(n(!0),i(R,null,U(t.value.length,l=>(n(),i("span",Pe,"●"))),256))])]),Oe])])):v("",!0)}},Xe=H(Ye,[["__scopeId","data-v-76290771"]]),Qe={class:"flex flex-col",style:{display:"inline-block"}},Je={class:"sticky top-10 px-1 z-10"},qe={class:"sticky left-16 flex flex-col bg-white",style:{display:"inline-block",width:"calc(100vw - 5rem)"}},Ke={key:0,class:"mx-2 w-full shadow-xl mt-1"},Ze=s("th",{class:"px-2 py-3 text-center"},[s("div",{class:"flex flex-col font-thin"}," Star ")],-1),et={key:1,class:"flex flex-row justify-center items-center w-full h-96"},tt=s("span",{class:"loading loading-dots loading-lg"},null,-1),st=[tt],at={key:2,class:"flex flex-row justify-center items-center w-full h-96"},ot={class:"text-3xl"},lt={class:"font-bold"},rt={__name:"ShowSTF",setup(o){const e=b(),t=B();j(async()=>{const r=t.GETUSER;r===void 0||(await e.fetchUserSTFAll(r),e.GETALLSTFHEADERS.length===0&&await e.getHeaders())});const a=async r=>{var l;t.GETUSER!==void 0&&(r.user=(l=t==null?void 0:t.GETUSER)==null?void 0:l.id,await e.getFilteredData(r))};return(r,l)=>(n(),i("div",Qe,[h(L),s("div",Je,[s("div",qe,[h(V),h(re,{onFilterFunction:a},{default:I(()=>[(n(),S(P,{key:0,table_headers:c(e).GETALLSTFHEADERS},null,8,["table_headers"]))]),_:1})])]),c(e).GETALLSTFHEADERS.length?(n(),i("table",Ke,[h(O,{table_headers:c(e).GETALLSTFHEADERS},{star:I(()=>[Ze]),_:1},8,["table_headers"]),(n(!0),i(R,null,U(c(e).all_stf,(d,m)=>(n(),S(ze,{each:d,index:m},null,8,["each","index"]))),256))])):v("",!0),c(e).all_stf_loading?(n(),i("div",et,st)):v("",!0),c(e).all_stf_cond_text?(n(),i("div",at,[s("span",ot,[y(" There is not any data in warehouse which created by "),s("span",lt,x(c(t).user.name)+" "+x(c(t).user.surname),1)])])):v("",!0),h(Xe)]))}},nt={},it={class:"text-gray-100 bg-slate-700 border table_header"},dt=s("tr",null,[s("th",{scope:"col",class:"px-6 py-2 text-center border"}," S/S "),s("th",{scope:"col",class:"px-6 py-1 text-center border"},[s("div",{class:""}," Type ")]),s("th",{scope:"col",class:"px-6 py-1 text-center border w-1/3"},[s("div",{class:""}," Material Name ")]),s("th",{scope:"col",class:"px-6 py-1 text-center border"},[s("div",{class:""}," Link ")]),s("th",{scope:"col",class:"px-6 py-1 text-center border w-4"}," Count "),s("th",{scope:"col",class:"px-6 py-1 text-center border w-4"}," Unit "),s("th",{scope:"col",class:"px-6 py-1 text-center border w-8"}," Field "),s("th",{scope:"col",class:"px-6 py-1 text-center border"}," Comment ")],-1),ct=[dt];function _t(o,e){return n(),i("thead",it,ct)}const ht=H(nt,[["render",_t]]),ut={scope:"row",class:"w-8 text-gray-900 whitespace-nowrap dark:text-white text-center table_row"},ft={class:"flex justify-between items-center px-1"},mt=s("span",{class:"relative flex h-3 w-3"},[s("span",{class:"animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"}),s("span",{class:"relative inline-flex rounded-full h-3 w-3 bg-orange-500"})],-1),pt={scope:"row",class:"p-1 border text-gray-900 whitespace-nowrap dark:text-white table_row",style:{}},xt=s("option",{disabled:"",value:""},"Type",-1),wt=s("option",null,"Project",-1),bt=s("option",null,"Consumables",-1),gt=s("option",null,"Fixture",-1),vt=[xt,wt,bt,gt],yt={class:"p-1 border text-gray-900 whitespace-nowrap dark:text-white"},$t={class:"p-1 border text-gray-900 whitespace-nowrap dark:text-white"},At={class:"p-1 border"},kt={class:"p-1 border",style:{}},St=s("option",{disabled:"",value:""},"Unit",-1),Et=s("option",null,"Adet",-1),Tt=s("option",null,"M2",-1),Ct=s("option",null,"M3",-1),Rt=s("option",null,"Ton",-1),Ft=s("option",null,"Kg",-1),Ut=[St,Et,Tt,Ct,Rt,Ft],It={class:"p-1 border"},Bt=s("option",{disabled:"",value:""},"Field",-1),Dt=["value"],Nt={class:"p-1 border",style:{}},zt={__name:"STF_Table_Body_Each_Row_Comp",props:["id","order_list"],setup(o){const e=o,t=b(),a=se({each_id:e==null?void 0:e.id,material_type:"",material_name:"",material_amount:0,material_unit:"",link:"",fieldId:0,comment:""});return G(()=>{var r;if(((r=t.order_list)==null?void 0:r.length)>=1){let l=!1;for(let d of t.order_list)if(d.each_id===a.each_id){l=!0;break}!l&&a.each_id!=""&&t.order_list.push(a)}else t.order_list.push(a);if(t.after_created)for(let l=0;l<t.order_list.length;l++)a.each_id=0,a.material_type="",a.material_name="",a.link="",a.material_amount=0,a.material_unit="",a.fieldId=0,t.order_list.splice(l,1)}),(r,l)=>(n(),i(R,null,[s("td",ut,[s("div",ft,[s("span",null,x(a.each_id),1),mt])]),s("td",pt,[C(s("select",{class:"border border-red-500 outline-none rounded-lg w-full h-full p-2","onUpdate:modelValue":l[0]||(l[0]=d=>a.material_type=d)},vt,512),[[W,a.material_type]])]),s("td",yt,[C(s("input",{class:"border border-red-500 outline-none rounded-lg w-full h-full p-2",type:"text",placeholder:"Material Name...","onUpdate:modelValue":l[1]||(l[1]=d=>a.material_name=d)},null,512),[[D,a.material_name]])]),s("td",$t,[C(s("input",{class:"border outline-none rounded-lg w-full h-full p-2",type:"text",placeholder:"Material Link...","onUpdate:modelValue":l[2]||(l[2]=d=>a.link=d)},null,512),[[D,a.link]])]),s("td",At,[C(s("input",{class:"border border-red-500 outline-none rounded-lg w-full h-full p-2",type:"number",min:"0.001",placeholder:"Count...","onUpdate:modelValue":l[3]||(l[3]=d=>a.material_amount=d)},null,512),[[D,a.material_amount]])]),s("td",kt,[C(s("select",{class:"border border-red-500 outline-none rounded-lg w-full h-full p-2","onUpdate:modelValue":l[4]||(l[4]=d=>a.material_unit=d)},Ut,512),[[W,a.material_unit]])]),s("td",It,[C(s("select",{class:"border border-red-500 outline-none rounded-lg w-full h-full p-2","onUpdate:modelValue":l[5]||(l[5]=d=>a.fieldId=d)},[Bt,(n(!0),i(R,null,U(c(t).GETFIELDSNAME,d=>(n(),i("option",{value:d.id},x(d.field_name),9,Dt))),256))],512),[[W,a.fieldId]])]),s("td",Nt,[C(s("input",{class:"border outline-none rounded-lg w-full h-full p-2",type:"text",placeholder:"Comment...","onUpdate:modelValue":l[6]||(l[6]=d=>a.comment=d)},null,512),[[D,a.comment]])])],64))}};const Ht={__name:"STF_Table_Body_Column_Name_Comp",props:["row_size","order_list"],setup(o){const e=o;return(t,a)=>(n(!0),i(R,null,U(e.row_size,r=>(n(),i("tr",{class:A([r===1?"bg-red-50":"","bg-white border-b hover:bg-gray-50 table_row"])},[(n(),S(zt,{id:r,key:r,order_list:o.order_list},null,8,["id","order_list"]))],2))),256))}},Gt=H(Ht,[["__scopeId","data-v-6718c5c3"]]),jt={__name:"STF_Table_Body_Comp",props:["row_size","order_list"],setup(o){const e=o;return(t,a)=>(n(),i("tbody",null,[h(Gt,{row_size:e==null?void 0:e.row_size,order_list:o.order_list},null,8,["row_size","order_list"])]))}},Mt={class:"flex justify-between mt-1"},Wt=s("i",{class:"fa-solid fa-plus fa-lg"},null,-1),Lt=s("i",{class:"fa-solid fa-minus fa-lg"},null,-1),Vt={__name:"STF_Table_Row_Count_Comp",emits:["emitAddNewRow","emitRemoveRow"],setup(o,{emit:e}){const t=()=>e("emitAddNewRow"),a=()=>e("emitRemoveRow");return(r,l)=>(n(),i("div",Mt,[s("button",{onClick:t,class:"font-bold py-2 px-2 my-1 text-xs outline-none font-mono border text-gray-100 rounded-xl bg-orange-500 hover:bg-orange-400 hover:shadow-xl"},[Wt,y(" Add New Column ")]),s("button",{onClick:a,class:"py-2 px-2 my-1 text-xs outline-none font-mono font-bold border text-gray-100 rounded-xl bg-red-500 hover:bg-red-400 hover:shadow-xl"},[Lt,y(" Remove Column ")])]))}},Pt={class:"flex items-center justify-end mt-10"},Ot=s("i",{class:"fa-solid fa-plus"},null,-1),Yt={key:1,type:"button",class:"text-white bg-gradient-to-r bg-blue-600 hover:bg-blue-500 hover:shadow-xl font-medium rounded-lg text-md px-4 py-2 text-center mr-2 mb-2"},Xt=s("span",{class:"loading loading-spinner"},null,-1),Qt={__name:"STF_Create_Button_Comp",props:["row_size"],emits:["setRowSize"],setup(o,{emit:e}){const t=o,a=b(),r=B(),l=k(!0),d=async()=>{var m,_,p,u,F,w,E;if(console.log("order list : ",a.order_list),l.value=!1,a.order_list.length===0&&alert("Must Create at least 1 data"),t.row_size===0)alert("Must Create at least 1 data");else{let g=!0;for(let f=0;f<t.row_size;f++)if(((m=a.order_list[f])==null?void 0:m.material_name)===""){g=!1,alert(`${f+1} Row Material Name is Empty`);break}else if(((_=a.order_list[f])==null?void 0:_.material_type)===""){g=!1,alert(`${f+1} Row Material Type Cant Be An Empty`);break}else if(((p=a.order_list[f])==null?void 0:p.material_amount)<=0){g=!1,alert(`${f+1} Row Material Amount In Not True Amount`);break}else if(((u=a.order_list[f])==null?void 0:u.material_unit)===""){g=!1,alert(`${f+1} Row Unit Is Not Selected`);break}else if(((F=a.order_list[f])==null?void 0:F.fieldId)===0){g=!1,alert(`${f+1} Row Field Not Selected`);break}if(g)try{const f={orders:a.order_list,user:r==null?void 0:r.user};for(let T=(w=a.order_list)==null?void 0:w.length;T>t.row_size;T--){const M=(E=a.order_list)==null?void 0:E.pop()}console.log("creating data : ",f),await a.createSTF(f).then(async T=>{var M;((M=T==null?void 0:T.response)==null?void 0:M.status)===400?alert("MTF Cant Create"):(a.msg_cond=!0,setTimeout(()=>{e("setRowSize"),l.value=!0,a.after_created=!0,a.tab_num=0,a.fetchUserSTFAll(f.user)},500),setTimeout(()=>{a.msg_cond=!1},1e3))}).catch(T=>{console.log("from create Error component : ",T)})}catch(f){console.log("error : ",f)}else l.value=!0}};return(m,_)=>(n(),i("div",Pt,[l.value?(n(),i("button",{key:0,type:"button",onClick:d,class:"text-white bg-gradient-to-r bg-blue-600 hover:bg-blue-500 hover:shadow-xl font-medium rounded-lg text-md px-4 py-2 text-center mr-2 mb-2"},[Ot,y(" Create")])):(n(),i("button",Yt,[Xt,y(" Loading")]))]))}},Jt={class:"overflow-x-auto shadow-xl sm:rounded-lg border p-2"},qt=s("h1",{class:"text-center text-3xl py-4",style:{"font-family":"'Poppins'"}}," Create STF Form",-1),Kt={class:"w-full text-left text-gray-500 dark:text-gray-400"},Zt={__name:"CreateSTF",setup(o){const e=b(),t=k(1),a=()=>{let _=!0,p=0;for(let u of e.order_list){const F=u==null?void 0:u.material_name.trim();(u==null?void 0:u.material_type)===""?(_=!1,alert(`${p+1} Row Material Type Cant Be Empty`)):F===""?(_=!1,alert(`${p+1} Row Material Name Cant Be Empty`)):(u==null?void 0:u.material_amount)<=0?(_=!1,alert(`${p+1} Row Material Amount Cant Be 0`)):(u==null?void 0:u.material_unit)===""?(_=!1,alert(`${p+1} Row Material Unit Is Not Selected`)):(u==null?void 0:u.fieldId)===0&&(_=!1,alert(`${p+1} Row Field Is Not Selected`)),p++}_&&e.order_list.length&&(t.value+=1)},r=()=>{t.value>1?t.value-=1:t.value},l=()=>{t.value=0};let d=k([]);const m=()=>{t.value=1,e.after_created=!1};return(_,p)=>(n(),i("div",Jt,[qt,t.value===0?(n(),i("button",{key:0,class:"font-bold py-2 px-2 my-1 text-xs outline-none font-mono border text-gray-100 rounded-xl bg-green-500 mb-2",onClick:p[0]||(p[0]=u=>m())}," Create New STF ")):v("",!0),s("table",Kt,[h(ht),h(jt,{row_size:t.value,order_list:c(d)},null,8,["row_size","order_list"])]),h(Vt,{onEmitAddNewRow:a,onEmitRemoveRow:r}),h(Qt,{onSetRowSize:l,row_size:t.value},null,8,["row_size"]),h(ne,{cond:c(e).msg_cond,messages:"New STF Successfuly Created"},null,8,["cond"])]))}},es={class:"w-1 p-4 py-2"},ts={class:"flex items-center"},ss={class:"flex cursor-pointer items-center rounded-sm p-1",for:"selected_row","data-ripple-dark":"true"},as=["id"],os={class:"px-2 py-2 font-medium text-center"},ls={__name:"ShowWarehouseEachRow",props:["each","index"],setup(o){const e=o,t=b(),a=k(!1),r=()=>{a.value=!a.value,a.value?t.warehouse_selecting_rows.push(e.each):t.warehouse_selecting_rows=t.warehouse_selecting_rows.filter(l=>l.stf_id!==e.each.stf_id)};return(l,d)=>(n(),i("tr",{class:A([a.value?"text-white bg-blue-600  hover:bg-blue-500 ":" bg-white  hover:bg-blue-600 hover:text-white hover:duration-200 ","border-b hover:cursor-pointer table_row"])},[h(N,{each:e==null?void 0:e.each},null,8,["each"]),s("td",es,[s("div",ts,[s("label",ss,[s("input",{id:e.each.id,type:"checkbox",onChange:d[0]||(d[0]=m=>r(e.each.id)),class:"checkbox checkbox-xs checkbox-primary"},null,40,as)])])]),s("th",os,x(e.index+1),1),h(z,{each:e==null?void 0:e.each,table_headers:c(t).GETWAREHOUSEHEADERS},null,8,["each","table_headers"])],2))}};const rs=o=>(J("data-v-6a925cb8"),o=o(),q(),o),ns={key:0,class:"mtf-anim fixed left-1/4 bottom-10 flex flex-row mb-4 justify-center rounded-lg w-1/2"},is={class:"flex justify-between bg-white border rounded-md shadow-2xl w-full"},ds={class:"flex items-center"},cs={class:"bg-blue-600 py-4 px-6 text-white font-bold rounded-l-md text-3xl"},_s={class:"ml-3"},hs=rs(()=>s("p",null,"Task Selected",-1)),us={class:"text-blue-600"},fs=Q('<div class="flex items-center ml-[200px]" data-v-6a925cb8><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-6a925cb8><i class="fa-regular fa-trash-can" data-v-6a925cb8></i> <span class="text-sm" data-v-6a925cb8>Add Archieve</span></div><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-6a925cb8><i class="fa-solid fa-eye-slash" data-v-6a925cb8></i> <span class="text-sm" data-v-6a925cb8>Dont Show</span></div><div class="flex flex-col items-center mx-3 cursor-pointer" data-v-6a925cb8><i class="fa-regular fa-star" data-v-6a925cb8></i> <span class="text-sm" data-v-6a925cb8>Set Star</span></div></div>',1),ms={__name:"SelectingRows",setup(o){const e=b(),t=k([]);return G(()=>{t.value=e.warehouse_selecting_rows}),(a,r)=>c(e).warehouse_selecting_rows.length>=1?(n(),i("div",ns,[s("div",is,[s("div",ds,[s("span",cs,x(t.value.length),1),s("div",_s,[hs,(n(!0),i(R,null,U(t.value.length,l=>(n(),i("span",us,"●"))),256))])]),fs])])):v("",!0)}},ps=H(ms,[["__scopeId","data-v-6a925cb8"]]),xs={class:"flex flex-col",style:{display:"inline-block"}},ws={class:"sticky top-10 px-1 z-10"},bs={class:"sticky left-16 flex flex-col bg-white",style:{display:"inline-block",width:"calc(100vw - 5rem)"}},gs={key:0,class:"mx-2 text-gray-800 w-full shadow-xl bg-white mt-1"},vs={key:1,class:"flex flex-row justify-center items-center w-full h-96"},ys=s("span",{class:"loading loading-dots loading-lg"},null,-1),$s=[ys],As={key:2,class:"flex flex-row justify-center items-center w-full h-96"},ks={class:"text-3xl"},Ss={class:"font-bold"},Es={__name:"WarehouseData",setup(o){const e=b(),t=B(),a=Z();j(async()=>{const l=t.GETUSER;l===void 0||(await e.fetchWarehouseData(l),await a.getCompaniesNames(),e.GETWAREHOUSEHEADERS.length===0&&await e.getWarehouseHeaders())});const r=async l=>{var d;t.GETUSER!==void 0&&(l.user=(d=t==null?void 0:t.GETUSER)==null?void 0:d.id,await e.getFilteredWarehouseData(l))};return(l,d)=>(n(),i("div",xs,[h(L),s("div",ws,[s("div",bs,[h(V),h(ee,{onFilterFunction:r},{default:I(()=>[(n(),S(P,{key:0,table_headers:c(e).GETWAREHOUSEHEADERS},null,8,["table_headers"]))]),_:1})])]),c(e).GETWAREHOUSEHEADERS.length?(n(),i("table",gs,[h(O,{table_headers:c(e).GETWAREHOUSEHEADERS},null,8,["table_headers"]),(n(!0),i(R,null,U(c(e).warehouse_data,(m,_)=>(n(),S(ls,{each:m,index:_},null,8,["each","index"]))),256))])):v("",!0),c(e).warehouse_data_loading?(n(),i("div",vs,$s)):v("",!0),c(e).warehouse_data_cond_text?(n(),i("div",As,[s("span",ks,[y(" There is not any data in warehouse which created by "),s("span",Ss,x(c(t).user.name)+" "+x(c(t).user.surname),1)])])):v("",!0),h(ps)]))}},Ts={class:"w-1 p-4 py-2"},Cs={class:"flex items-center"},Rs=s("label",{for:"checkbox-table-search-1",class:"sr-only"},"checkbox",-1),Fs={class:"px-2 py-3 text-center"},Us={__name:"Provided_Table_Body_Each_Row",props:["each","index"],emits:["addChecked","removeChecked"],setup(o,{emit:e}){const t=o,a=b(),r=k(!1),l=()=>r.value===!0?e("addChecked",t==null?void 0:t.each):e("removeChecked",t==null?void 0:t.each);return G(()=>{a.after_provide&&(r.value=!1)}),(d,m)=>(n(),i("tr",{class:A([r.value?"text-white  bg-blue-600 hover:bg-blue-500 ":"bg-white hover:bg-blue-600 hover:text-white hover:duration-200","border-b table_row hover:cursor-pointer"])},[h(N,{each:t==null?void 0:t.each},null,8,["each"]),s("td",Ts,[s("div",Cs,[Rs,C(s("input",{id:"checkbox-table-search-1",type:"checkbox","onUpdate:modelValue":m[0]||(m[0]=_=>r.value=_),onChange:l,class:"checkbox checkbox-xs checkbox-primary"},null,544),[[ae,r.value]])])]),s("th",Fs,x((t==null?void 0:t.index)+1),1),h(z,{each:t==null?void 0:t.each,table_headers:c(a).provided_data_headers},null,8,["each","table_headers"])],2))}},Is={__name:"Provided_Table_Body",setup(o){const e=b();return(t,a)=>(n(!0),i(R,null,U(c(e).provides_data,(r,l)=>(n(),S(Us,{each:r,index:l},null,8,["each","index"]))),256))}},Bs={class:"flex flex-col",style:{display:"inline-block"}},Ds={class:"sticky h-40 top-10 bg-white z-10"},Ns={class:"sticky left-16 flex flex-col w-max bg-white",style:{display:"inline-block",width:"calc(100vw - 5rem)"}},zs={class:""},Hs={key:0,class:"mx-2 text-gray-800 dark:text-gray-400 w-full shadow-xl bg-white mt-1",style:{"font-size":"xx-small"}},Gs={key:1,class:"flex flex-row justify-center items-center w-full h-96"},js=s("span",{class:"loading loading-dots loading-lg"},null,-1),Ms=[js],Ws={key:2,class:"flex flex-row justify-center items-center w-full h-96"},Ls={class:"text-3xl"},Vs={class:"font-bold"},Ps={__name:"ProvideData",setup(o){const e=b(),t=B();j(async()=>{const r=t.GETUSER;r===void 0||(console.log("else work"),await e.fetchProvidedData(r),e.provided_data_headers.length===0&&e.getProvidedDataHeaders())});const a=async r=>{var l;t.GETUSER!==void 0&&(r.department=(l=t==null?void 0:t.GETUSER)==null?void 0:l.departmentId,await e.getFilteredDataProvided(r))};return(r,l)=>(n(),i("div",Bs,[h(L),s("div",Ds,[s("div",Ns,[h(V),h(ie,{onFilterFunction:a},{default:I(()=>[(n(),S(P,{key:0,table_headers:c(e).provided_data_headers},null,8,["table_headers"]))]),_:1})])]),s("div",zs,[c(e).provided_data_headers.length?(n(),i("table",Hs,[h(O,{table_headers:c(e).provided_data_headers},null,8,["table_headers"]),h(Is)])):v("",!0),c(e).provide_data_loading?(n(),i("div",Gs,Ms)):v("",!0),c(e).provide_data_cond_text?(n(),i("div",Ws,[s("span",Ls,[y(" There is not any provide data which created by "),s("span",Vs,x(c(t).user.name)+" "+x(c(t).user.surname),1)])])):v("",!0)])]))}},Os={class:"flex flex-col bg-white"},Ys={key:0,class:"bg-white",style:{"font-family":"'Poppins'"}},Xs={class:"bg-white sticky top-0"},Qs={class:"flex flex-row anim h-10 bg-white items-center sticky left-16",style:{"letter-spacing":"1px","font-size":"x-small",display:"inline-block"}},Js={class:"flex flex-row anim h-10 sticky top-0 bg-white w-full items-center",style:{"letter-spacing":"1px","font-size":"x-small"}},qs=s("i",{class:"fa-solid fa-list fa-lg"},null,-1),Ks=s("i",{class:"fa-solid fa-plus fa-lg"},null,-1),Zs=s("i",{class:"fa-solid fa-warehouse fa-lg"},null,-1),ea=s("i",{class:"fa-solid fa-upload fa-lg"},null,-1),ta={key:1},sa=s("span",null,"User Not Login ",-1),aa=[sa],$a={__name:"views.stf",setup(o){const e=B(),t=b(),a=[rt,Zt,Es,Ps],r=l=>{t.tab_num=l};return j(async()=>{const l=e.GETUSER;l===void 0||t.fetchFieldsNames(l==null?void 0:l.projectId)}),(l,d)=>(n(),i("div",Os,[c(e).user?(n(),i("div",Ys,[s("div",Xs,[s("div",Qs,[s("div",Js,[s("span",{class:A([c(t).tab_num===0?"border-b-violet-800 border-b-4 ":"","text-black px-3 py-2 pt-2 mx-1 border-b-2 cursor-pointer"]),onClick:d[0]||(d[0]=m=>r(0))},[qs,y(" Show STF")],2),s("span",{class:A([c(t).tab_num===1?"border-b-violet-800 border-b-4 ":"","text-black px-3 py-2 pt-2 mx-1 border-b-2 cursor-pointer"]),onClick:d[1]||(d[1]=m=>r(1))},[Ks,y(" Create STF")],2),s("span",{class:A([c(t).tab_num===2?"border-b-violet-800 border-b-4 ":"","text-black px-3 py-2 pt-2 mx-1 border-b-2 cursor-pointer"]),onClick:d[2]||(d[2]=m=>r(2))},[Zs,y(" Warehouse")],2),s("span",{class:A([c(t).tab_num===3?"border-b-violet-800 border-b-4 ":"","text-black px-3 py-2 pt-2 mx-1 border-b-2 cursor-pointer"]),onClick:d[3]||(d[3]=m=>r(3))},[ea,y(" Provides")],2)])])]),(n(),S(le,null,[(n(),S(oe(a[c(t).tab_num])))],1024))])):(n(),i("div",ta,aa))]))}};export{$a as default};
