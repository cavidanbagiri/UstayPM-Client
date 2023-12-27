
import Date_Format_Comp from '../layouts/DateFormat.vue';
import Date_Format_Date from '../layouts/DateFormatDate.vue'

const dateFormat = {
    install(app, options){
        app.component('DateFormat', Date_Format_Comp); 
        app.component('DateFormatDate', Date_Format_Date); 
    }
}

export default dateFormat;