import React from 'react'
import 'react-dates/initialize';
import 'react-dates/constants'
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, FocusedInputShape } from 'react-dates'
import moment from 'moment'
import plLocale from 'moment/locale/pl'


// import './react_dates_overrides.css'


class DateRange extends React.Component {
    constructor(props) {
        super(props);

    this.state = {
        startDate: null,
        endDate: null,
    }
}

    render() {
        moment.locale('pl')
        return (
            <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                small={true}
                showClearDates={true}
                hideKeyboardShortcutsPanel={true}
                startDatePlaceholderText="Od (data)"
                endDatePlaceholderText="Do (data)" 
                required={true}
                // anchorDirection='ANCHOR_LEFT'
            />
        )
    }
}

export default DateRange