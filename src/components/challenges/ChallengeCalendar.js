import React, { Component } from 'react'
import moment from 'moment'
import DisplayCalendar from '../calendar/DisplayCalendar'
import { Grid, Segment, Divider } from 'semantic-ui-react'

class ChallengeCalendar extends Component {
    render() {
        //unique years due to change of year from 
        //the Set object lets you store unique values of any type
        const uniqueMonths = [...new Set(this.props.dates.map(date => date.months + 1))]
        const uniqueYears = [...new Set(this.props.dates.map(date => date.years ))]
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
        const renderCalendars = monthArrays.map(month => {
            return (
                <Grid.Column>
                    <DisplayCalendar dates={month} />
                </Grid.Column>
            )
        })

        //I want to have each day as a single object that we can do things with
        return (
            <React.Fragment>
                <Grid columns={4}>
                    <Grid.Row>
                        {renderCalendars}
                    </Grid.Row>
                </Grid>
            </React.Fragment>
        )
    }
}

export default ChallengeCalendar