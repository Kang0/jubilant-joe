import React, { Component } from 'react'
import moment from 'moment'
import DisplayCalendar from '../components/calendar/DisplayCalendar'
import { connect } from 'react-redux'

class CalendarContainer extends Component {

    state = {
        activeCalendar: 0,
        maxIndex: 0
    }

    componentDidMount() {
        this.setState({
            activeCalendar: moment().format("M") - moment(this.props.startDate, "MM-DD-YYYY").format("M"),
            maxIndex: moment(this.props.endDate, "MM-DD-YYYY").format("M") - moment(this.props.startDate, "MM-DD-YYYY").format("M")
        })
    }

    onCalendarNext = () => {
        this.state.activeCalendar === this.state.maxIndex ? this.setState({ activeCalendar: this.state.maxIndex }) : this.setState( { activeCalendar: this.state.activeCalendar + 1})
    }

    onCalendarPrev = () => {
        this.state.activeCalendar === 0 ? this.setState({ activeCalendar: 0 }) : this.setState({ activeCalendar: this.state.activeCalendar - 1 })
    }

    render() {
        //setting the challenge id 
        let { id, startDate, endDate, handleCalendarClick, calendar } = this.props

        //unique years due to change of year from oct/nov/dec - jan/feb/march
        //the Set object lets you store unique values of any type
        let uniqueMonths = []
        let uniqueYears = []
        let calendarObject = {}

        if(calendar.length > 0) {
            //set the variables once this.props.calendar is set in state
            uniqueMonths = [...new Set(calendar.map(date => date.months))]
            uniqueYears = [...new Set(calendar.map(date => date.years ))]
            //create new Object that has keys for each month and the values are the challenge days in that specific month
            uniqueMonths.forEach(month => calendarObject[month] = [])
            calendar.forEach((date, index) => {
                calendarObject[date.months].push(date)
            })
        }

        //create moments of start of each month
        const startOfMonth = uniqueMonths.map(month => moment(month, "M").startOf())

        //if there are two unique years, we have to ensure the years are correct for the months in the next year when we created the moments above
        // if (uniqueYears.length > 1) {
        //     for (let i=0; i<startOfMonth.length; i++) {

        //     }
        // }
        //create an array populated with every day of each month
        //(4) [Array(30), Array(31), Array(31), Array(30)]

        let monthArrays = startOfMonth.map(month => {
            return [...Array(month.daysInMonth())].map((_, i) => {
                return month.clone().add(i, 'day')
            })
        })

        //I want to have each day as a single object that we can do things with
        return (
            <DisplayCalendar 
                calendarObject={calendarObject}
                dates={monthArrays}
                startDate={startDate}
                endDate={endDate}
                onCalendarNext={this.onCalendarNext}
                onCalendarPrev={this.onCalendarPrev}
                activeCalendar={this.state.activeCalendar}
                handleCalendarClick={handleCalendarClick} />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        calendar: state.calendar.find(calendar => calendar[0].challenge_id === ownProps.id) || []
    }
}

export default connect(mapStateToProps)(CalendarContainer)