import React, { Component } from 'react'
import moment from 'moment'
import DisplayCalendar from '../components/calendar/DisplayCalendar'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'

class CalendarContainer extends Component {
    render() {
        //unique years due to change of year from oct/nov/dec - jan/feb/march
        //the Set object lets you store unique values of any type
        let uniqueMonths = []
        let uniqueYears = []

        //this.props.dates was undefined when the initial render happened, so had to create an if statement
        if(this.props.dates !== undefined) {
            uniqueMonths = [...new Set(this.props.dates.map(date => date.months + 1))].reverse()
            uniqueYears = [...new Set(this.props.dates.map(date => date.years ))]
        }

        //create moments of start of each month
        const startOfMonth = uniqueMonths.map(month => moment(month, "M").startOf())

        console.log(uniqueMonths)
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
        const renderCalendars = monthArrays.map(month => {
            let startDate = this.props.dates[0]
            let endDate = this.props.dates[100]
            return (
                <Grid.Column key={month[0].format('M')}>
                    <DisplayCalendar key={month[0].format('M')} dates={month} startDate={startDate} endDate={endDate} />
                </Grid.Column>
            )
        })

        //I want to have each day as a single object that we can do things with
        return (
            <Grid columns={4}>
                <Grid.Row>
                    {renderCalendars}
                </Grid.Row>
            </Grid>
        )
    }
}

// const mapStateToProps = state => {
//     return(
//         calendarDates: state.calenda
//     )
// }

export default CalendarContainer