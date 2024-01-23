import{d as h}from"./pinia-f2173f69.js";import{a as i}from"./axios-21b846bc.js";i.defaults.withCredentials=!0;const m=h("ProcurementStore",{state:()=>({tab_num:0,checked_values:[],companies_names:[],procurement_users_names:[],creating_STF_datas:[],after_created:!1,all_stf:[],all_sms:[],stf_table_headers:[],sm_table_headers:[],toggle_createsm:!1,created_stf_username:[],warehouse_data:[],warehouse_headers:[],warehouse_selecting_rows:[],filtered_vendor_names:[]}),getters:{GETCHECKEDVALUES:s=>s.checked_values,GETCOMPANIESNAMES:s=>s.companies_names,GETPROCUREMENTUSERSNAMES:s=>s.procurement_users_names,GETCREATINGSTFDATA:s=>s.creating_STF_datas,GETWAREHOUSEHEADERS:s=>s.warehouse_headers},actions:{async createSM(s){try{await i.post("https://ustaypm-server.onrender.com/api/procurement/createsm",s).then(e=>e)}catch(e){return e}},async getFilteredDataSTF(s){const e=this.createUrlQuery(s.filtered_objects);try{await i.get(`https://ustaypm-server.onrender.com/api/common/filterstf/${s.user_id}${e}`).then(t=>{this.all_stf=t.data}).catch(t=>{console.log("Error Is : ",t)})}catch(t){console.log("Get Filtered Data Error : ",t)}},async getSTFHeaders(){var s;if(this.all_stf.length){for(let[e,t]of Object.entries(this.all_stf[0])){const r=e.slice(e.length-2,e.length);if(e!=="id"&&r!=="id"&&r!=="Id"){let a={},o=e.charAt(0).toUpperCase()+e.slice(1);o=o.split("_").join(" "),e==="completed"||e==="stf_num"||e==="sm_num"||e==="createdAt"||e==="situation"||e==="material_type"||e==="material_name"||e==="amount"||e==="unit"||e==="username"?(a.showname=`${o}`,a.name=`${e}`,a.value=!0):(a.showname=`${o}`,a.name=`${e}`,a.value=!1),this.stf_table_headers.push(a)}}for(let e=0;e<((s=this.all_stf_headers)==null?void 0:s.length);e++){if(this.all_stf_headers[e].name==="completed"){let t=this.all_stf_headers[0];this.all_stf_headers[0]=this.all_stf_headers[e],this.all_stf_headers[e]=t}if(this.all_stf_headers[e].name==="stf_num"){let t=this.all_stf_headers[1];this.all_stf_headers[1]=this.all_stf_headers[e],this.all_stf_headers[e]=t}if(this.all_stf_headers[e].name==="sm_num"){let t=this.all_stf_headers[2];this.all_stf_headers[2]=this.all_stf_headers[e],this.all_stf_headers[e]=t}if(this.all_stf_headers[e].name==="situation"){let t=this.all_stf_headers[3];this.all_stf_headers[3]=this.all_stf_headers[e],this.all_stf_headers[e]=t}}}},async getFilteredDataSM(s){const e=this.createUrlQuery(s);try{await i.get(`
                https://ustaypm-server.onrender.com/api/common/filtersm${e}
            `).then(t=>{this.all_sms=t.data}).catch(t=>{console.log("Error Is : ",t)})}catch(t){console.log("Get Filtered Data Error : ",t)}},async getSMHeaders(){var s;if(this.all_sms.length){for(let[e,t]of Object.entries(this.all_sms[0])){const r=e.slice(e.length-2,e.length);if(e!=="id"&&r!=="id"&&r!=="Id"){let a={},o=e.charAt(0).toUpperCase()+e.slice(1);o=o.split("_").join(" "),e==="stf_num"||e==="sm_num"||e==="created_at"||e==="situation"||e==="sm_material_name"||e==="amount"||e==="unit"||e==="sm_num"||e==="price"||e==="total"||e==="currency"||e==="left_over"||e==="supplier"||e==="vendor_name"||e==="username"||e==="orderer"?(a.showname=`${o}`,a.name=`${e}`,a.value=!0):(a.showname=`${o}`,a.name=`${e}`,a.value=!1),this.sm_table_headers.push(a)}}for(let e=0;e<((s=this.sm_table_headers)==null?void 0:s.length);e++){if(this.sm_table_headers[e].name==="stf_num"){let t=this.sm_table_headers[0];this.sm_table_headers[0]=this.sm_table_headers[e],this.sm_table_headers[e]=t}if(this.sm_table_headers[e].name==="sm_num"){let t=this.sm_table_headers[1];this.sm_table_headers[1]=this.sm_table_headers[e],this.sm_table_headers[e]=t}if(this.sm_table_headers[e].name==="situation"){let t=this.sm_table_headers[2];this.sm_table_headers[2]=this.sm_table_headers[e],this.sm_table_headers[e]=t}}}},async getCompaniesNames(){try{await i.get("https://ustaypm-server.onrender.com/api/common/fetchcompanies").then(s=>{this.companies_names=s.data,this.filtered_vendor_names=s.data}).catch(s=>{console.log("Getting Companies Names Errors : ",s)})}catch(s){console.log("Get Companies Name Error : ",s)}},async filterVendorName(s){if(s.toString().trim()==="")this.filtered_vendor_names=this.companies_names;else try{await i.get(`
                  https://ustaypm-server.onrender.com/api/common/filtervendornames?selected_text=${s}
              `).then(e=>{this.filtered_vendor_names=e.data}).catch(e=>{console.log("Error Is : ",e)})}catch(e){console.log("Get Filtered Data Error : ",e)}},async getProcurementUsersNames(s){try{await i.get(`https://ustaypm-server.onrender.com/api/common/procurementusers/${s}`).then(e=>{this.procurement_users_names=e.data}).catch(e=>{console.log("Get Users Names Errors : ",e)})}catch(e){console.log("Get Procurement Users Error : ",e)}},async fetchSTFCreateUsernames(s){if(s)try{await i.get(`https://ustaypm-server.onrender.com/api/common/createdstfusers/${s}`).then(e=>{this.created_stf_username=e.data}).catch(e=>{console.log("Get Users Names Errors : ",e)})}catch(e){console.log("Get Procurement Users Error : ",e)}},async getWarehouseHeaders(){var s;if(((s=this.warehouse_data)==null?void 0:s.length)>1)for(let[e,t]of Object.entries(this==null?void 0:this.warehouse_data[0])){const r=e.slice(e.length-2,e.length);if(e!=="id"&&r!=="id"&&r!=="Id"){let a={},o=e.charAt(0).toUpperCase()+e.slice(1);o=o.split("_").join(" "),e==="stf_num"||e==="sm_num"||e==="material_name"||e==="amount"||e==="unit"||e==="vendor_name"||e==="stock"||e==="certificate"||e==="passport"||e==="field"?(a.showname=`${o}`,a.name=`${e}`,a.value=!0):(a.showname=`${o}`,a.name=`${e}`,a.value=!1),this.warehouse_headers.push(a)}}},async getFilteredWarehouseData(s){const e=this.createUrlQuery(s);try{await i.get(`
                https://ustaypm-server.onrender.com/api/common/filterwarehouse${e}
            `).then(t=>{this.warehouse_data=t.data}).catch(t=>{console.log("Error Is : ",t)})}catch(t){console.log("Get Filtered Data Error : ",t)}},createUrlQuery(s){let e="";for(let[t,r]of Object.entries(s))e===""&&(e+="?"),s[t],e+=`${t}=${s[t]}`,e+="&";return e=e.slice(0,-1),e}}});i.defaults.withCredentials=!0;const _=h("WarehouseStore",{state:()=>({tab_num:0,processing_sms:[],processing_sm_headers:[],processing_checked_values:[],return_checked_values:[],toggle_accept_sm:!1,accepted_condition:!0,after_created:!1,after_provide:!1,after_returning:!1,warehouse_data:[],warehouse_data_headers:[],provides_data:[],provided_data_headers:[],return_checked_values:[],warehouse_data_stock_cond:!0,departments:[],delivery_types:[],companies_names:[],created_stf_username:[]}),actions:{async getFilteredDataProcessingSM(s){const e=this.createUrlQuery(s);try{await i.get(`
                https://ustaypm-server.onrender.com/api/common/filtersm${e}
            `).then(t=>{this.processing_sms=t.data}).catch(t=>{console.log("Error Is : ",t)})}catch(t){console.log("Get Filtered Data Error : ",t)}},async getProcessingSMHeaders(){var s,e;if((s=this.processing_sms)!=null&&s.length){for(let[t,r]of Object.entries(this==null?void 0:this.processing_sms[0])){const a=t.slice(t.length-2,t.length);if(t!=="id"&&a!=="id"&&a!=="Id"){let o={},n=t.charAt(0).toUpperCase()+t.slice(1);n=n.split("_").join(" "),t==="stf_num"||t==="sm_num"||t==="created_at"||t==="situation"||t==="sm_material_name"||t==="amount"||t==="unit"||t==="sm_num"||t==="price"||t==="total"||t==="currency"||t==="supplier"||t==="vendor_name"||t==="left_over"||t==="username"||t==="orderer"||t==="left_over_amount"?(o.showname=`${n}`,o.name=`${t}`,o.value=!0):(o.showname=`${n}`,o.name=`${t}`,o.value=!1),this.processing_sm_headers.push(o)}}for(let t=0;t<((e=this.processing_sm_headers)==null?void 0:e.length);t++){if(this.processing_sm_headers[t].name==="stf_num"){let r=this.processing_sm_headers[0];this.processing_sm_headers[0]=this.processing_sm_headers[t],this.processing_sm_headers[t]=r}if(this.processing_sm_headers[t].name==="sm_num"){let r=this.processing_sm_headers[1];this.processing_sm_headers[1]=this.processing_sm_headers[t],this.processing_sm_headers[t]=r}if(this.processing_sm_headers[t].name==="situation"){let r=this.processing_sm_headers[2];this.processing_sm_headers[2]=this.processing_sm_headers[t],this.processing_sm_headers[t]=r}}}},async acceptWaitingSM(s){try{await i.post("https://ustaypm-server.onrender.com/api/warehouse/accept",s).then(e=>{this.accepted_sms=e}).catch(e=>{console.log("Accepted Materials Error From Warehouse Store : ",e)})}catch(e){console.log("Received accept Waiting SM Error : ",e)}},async fetchWarehouseData(s){await i.get(`https://ustaypm-server.onrender.com/api/warehouse/${s}`).then(e=>{this.warehouse_data=e.data}).catch(e=>{console.log("Received Items Error : ",e)})},async getFilteredDataWarehouse(s){const e=this.createUrlQuery(s);try{await i.get(`
                https://ustaypm-server.onrender.com/api/common/filterwarehouse${e}
            `).then(t=>{this.warehouse_data=t.data}).catch(t=>{console.log("Error Is : ",t)})}catch(t){console.log("Get Filtered Data Error : ",t)}},async getWarehouseDataHeaders(){var s,e;if((s=this.warehouse_data)!=null&&s.length){for(let[t,r]of Object.entries(this.warehouse_data[0]))if(t!=="id"&&t.slice(-2)!=="id"){let a={},o=t.charAt(0).toUpperCase()+t.slice(1);o=o.split("_").join(" "),t==="stf_num"||t==="sm_num"||t==="created_at"||t==="situation"||t==="material_name"||t==="amount"||t==="stock"||t==="unit"||t==="username"||t==="orderer"||t==="delivery_amount"?(a.showname=`${o}`,a.name=`${t}`,a.value=!0):(a.showname=`${o}`,a.name=`${t}`,a.value=!1),this.warehouse_data_headers.push(a)}for(let t=0;t<((e=this.warehouse_data_headers)==null?void 0:e.length);t++){if(this.warehouse_data_headers[t].name==="stf_num"){let r=this.warehouse_data_headers[0];this.warehouse_data_headers[0]=this.warehouse_data_headers[t],this.warehouse_data_headers[t]=r}if(this.warehouse_data_headers[t].name==="sm_num"){let r=this.warehouse_data_headers[1];this.warehouse_data_headers[1]=this.warehouse_data_headers[t],this.warehouse_data_headers[t]=r}if(this.warehouse_data_headers[t].name==="situation"){let r=this.warehouse_data_headers[2];this.warehouse_data_headers[2]=this.warehouse_data_headers[t],this.warehouse_data_headers[t]=r}}}},async fetchProvidedData(s){await i.get(`https://ustaypm-server.onrender.com/api/provides/${s}`).then(e=>{this.provides_data=e.data,console.log("Get Provide Data and result is : ",this.provides_data)}).catch(e=>{console.log("Provied Items Error : ",e)})},async getFilteredDataProvided(s){const e=this.createUrlQuery(s);try{await i.get(`
                https://ustaypm-server.onrender.com/api/common/filterprovided${e}
            `).then(t=>{this.provides_data=t.data}).catch(t=>{console.log("Error Is : ",t)})}catch(t){console.log("Get Filtered Data Error : ",t)}},async getProvidedDataHeaders(){var s;if((s=this.provides_data)!=null&&s.length){for(let[e,t]of Object.entries(this.provides_data[0]))if(e!=="id"&&e.slice(-2)!=="id"){let r={},a=e.charAt(0).toUpperCase()+e.slice(1);a=a.split("_").join(" "),e==="sm_num"||e==="provided_date"||e==="material_name"||e==="amount"||e==="unit"||e==="type_name"||e==="serial_no"||e==="unique_id"||e==="deliver_to"||e==="card_number"?(r.showname=`${a}`,r.name=`${e}`,r.value=!0):(r.showname=`${a}`,r.name=`${e}`,r.value=!1),this.provided_data_headers.push(r)}console.log("provided data geaders : ",this.provided_data_headers)}},async provideSM(s){try{await i.post("https://ustaypm-server.onrender.com/api/warehouse/provide",s).then(e=>{console.log("provide respond : ",e)}).catch(e=>{console.log("Provide Materials Error From Warehouse Store : ",e)})}catch(e){console.log("Provide  SM Error : ",e)}},async fetchDepartments(){try{await i.get("https://ustaypm-server.onrender.com/api/common/fetchdepartments").then(s=>{this.departments=s.data}).catch(s=>{console.log("Fetch Departments Error : ",s)})}catch(s){console.log("Fetch Departments Error : ",s)}},async getCompaniesNames(){try{await i.get("https://ustaypm-server.onrender.com/api/common/fetchcompanies").then(s=>{this.companies_names=s.data}).catch(s=>{console.log("Getting Companies Names Errors : ",s)})}catch(s){console.log("Get Companies Name Error : ",s)}},async fetchSTFCreateUsernames(s){if(s)try{await i.get(`https://ustaypm-server.onrender.com/api/common/createdstfusers/${s}`).then(e=>{this.created_stf_username=e.data}).catch(e=>{console.log("Get Users Names Errors : ",e)})}catch(e){console.log("Get Procurement Users Error : ",e)}},async fetchWarehouseDeliveryTypes(){try{await i.get("https://ustaypm-server.onrender.com/api/common/deliverytypes").then(s=>{this.delivery_types=s.data}).catch(s=>{console.log("Fetch Departments Error : ",s)})}catch(s){console.log("Fetch Departments Error : ",s)}},async returnMaterial(s){const e={user:s,materials:this.return_checked_values};console.log(e);try{await i.post("https://ustaypm-server.onrender.com/api/warehouse/return",e).then(t=>{this.return_checked_values=[]}).catch(t=>{console.log("return material from provide to warehouse error : ",t)})}catch(t){console.log("return material from provide to warehouse error : ",t)}},createUrlQuery(s){let e="";for(let[t,r]of Object.entries(s))e===""&&(e+="?"),s[t],e+=`${t}=${s[t]}`,e+="&";return e=e.slice(0,-1),e}}});export{m as P,_ as W};