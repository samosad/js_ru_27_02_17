import React, { Component, PropTypes } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    static propTypes = {
        from: PropTypes.string,
        to: PropTypes.string
    }

    handleDayClick = (e, day) => {
        this.setState(DateUtils.addDayToRange(day, this.state))
    }

    render() {
        const { from, to } = this.props;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default DateRange