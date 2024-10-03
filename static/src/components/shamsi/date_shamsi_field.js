/* @odoo-module */

import { registry } from "@web/core/registry"
import { standardFieldProps } from "@web/views/fields/standard_field_props"
const { Component, onMounted } = owl
const { DateTime } = luxon

let shamsiDatePickerId = 0
class DateShamsiField extends Component {
    setup(){
        this.shamsiDatePickerId = `shamsi_datepicker_${shamsiDatePickerId++}`
        onMounted(()=>{
            $(`#${this.shamsiDatePickerId}`).persianDatepicker(
                {
                    observer: true,
                    initialValue: true,
                    initialValueType: 'gregorian',
                    calendar: {
                    persian: {
                        showHint: true,
                    },
                    gregorian: {
                        showHint: true
                    }
                },
                responsive: true,
                autoClose: true,
                timePicker: {
                    enabled: true,
                },
                onSelect: this.afterSelectDate.bind(this)}  )
        })
    }
    afterSelectDate(unixDate) {
        const pdate = new persianDate.unix(unixDate / 1000).toLocale('en').toCalendar('gregorian').format('YYYY/MM/DD');
        const date = DateTime.fromFormat(pdate, "yyyy/MM/dd")
        console.log('date',date)
        this.props.record.update({[this.props.name]:date});
    }
    get formattedValue(){
        if(!this.props.record.data[this.props.name]) return ""
        const date = new Date(this.props.record.data[this.props.name]);
        const pdate = new persianDate(date)
        .toLocale('en')
        .toCalendar('persian')
        .format('YYYY/MM/DD');
    
        return pdate
    }
}

DateShamsiField.template = "persian_date.DateShamsiField"
DateShamsiField.props = {
    ...standardFieldProps
}

DateShamsiField.displayName = "Date Shamsi Field"
DateShamsiField.supportedTypes = ["date", "datetime"]

registry.category("fields").add("date_shamsi", {component:DateShamsiField})
