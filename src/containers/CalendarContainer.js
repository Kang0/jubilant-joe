import React, { Component } from 'react'
import moment from 'moment'
import DisplayCalendar from '../components/calendar/DisplayCalendar'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'

class CalendarContainer extends Component {
    render() {
        //setting the challenge id 
        let challengeId = this.props.id
        
        // filter the specific challenge's dates for the calendar
        let calendarDates = this.props.calendar.filter(calendar => calendar[challengeId])[0]
        //unique years due to change of year from oct/nov/dec - jan/feb/march
        //the Set object lets you store unique values of any type
        let uniqueMonths = []
        let uniqueYears = []
        let startDate = moment()
        let endDate = moment()

        if(this.props.calendar.length > 0) {
            //set the variables once this.props.calendar is set in state
            debugger;
            uniqueMonths = [...new Set(calendarDates[challengeId].map(date => date.months + 1))]
            uniqueYears = [...new Set(calendarDates[challengeId].map(date => date.years ))]

            //passing in startDate and endDate to highlight on calendar
            startDate = calendarDates[challengeId][0]
            endDate = calendarDates[challengeId][100]

            //create new Object that has keys for each month and the values are the challenge days in that specific month
            let calendarObject = new Object()
            uniqueMonths.forEach(month => calendarObject[month] = {})

            let clickableDates = calendarDates[challengeId].map(date => {
                calendarObject[date.months + 1] += date
            })
        }

    
        //this.props.dates was undefined when the initial render happened, so had to create an if statement


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

        //iterate over each month and return each month's calendar object to render
        const renderCalendars = (monthArrays, startDate, endDate) => {

            return (monthArrays.map(month => {
                return (
                    <Grid.Column key={month[0].format('M')}>
                        <DisplayCalendar key={month[0].format('M')} dates={month} startDate={startDate} endDate={endDate} />
                    </Grid.Column>
                )
            })
        )} 

        //I want to have each day as a single object that we can do things with
        return (
            <Grid columns={4}>
                <Grid.Row>
                    {renderCalendars(monthArrays, startDate, endDate)}
                </Grid.Row>
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        calendar: state.calendar
    }
}

export default connect(mapStateToProps)(CalendarContainer)