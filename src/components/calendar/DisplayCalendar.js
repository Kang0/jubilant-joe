import React, { Component } from 'react';
import './Calendar.css'
import moment from 'moment'
import { Table, Icon, Button } from 'semantic-ui-react'


class DisplayCalendar extends Component {

    render() {
        //destructure props
        let { dates, startDate, endDate, calendarObject, activeCalendar, onCalendarNext, onCalendarPrev, handleCalendarClick } = this.props
        //grab the active calendar dates from dates
        //dates = (4) [Array(30), Array(31), Array(30), Array(31)] - each array is a different month
        let activeCalendarDates = dates[activeCalendar] || []
        //create an array of objects that have attributes of years, months, date, and userCell: false, indicating its not part of the 100 day span
        let convertedDates = activeCalendarDates.map(data => {
            let { years, months, date } = data.toObject()
            months += 1
            return (
                { years, months, date, userCell: false }
            )
        })
        //to know the number of the month in order to retrieve the associated calendar dates for that month associated with the user
        let currentMonth = 0
        //this array will hold only the integer dates that are associated with the user for this month
        let userCalendarDays = []
        //once convertedDates is set, we set the current month integer
        convertedDates.length < 1 ? console.log("still empty") : currentMonth = convertedDates[0].months
        //the calendar dates that are associated with the user for the month
        let userDays = calendarObject[currentMonth] || []
        //once userDays is set, we set userCalendarDays
        userDays.length < 1 ? console.log("still empty") : userCalendarDays = userDays.map(calendarDates => calendarDates.date)

        let nonUserCells = convertedDates.map(data => {
            if (userCalendarDays.indexOf(data.date) === -1){
                return data
            } else {
                return null
            }
        }).filter(x => x != null)

        //spread the nonUserCells and the CalendarObjects (which are the days in the span of 100 days)
        let combineCalendar = [...nonUserCells, ...userDays]
        //check to see if its the last month, if it is, we need to flip the order of nonUserCells and userDays
        nonUserCells.length < 1 ? console.log("still loading") : (nonUserCells[0].date > userCalendarDays[userCalendarDays.length - 1]) ? combineCalendar = [...userDays, ...nonUserCells] : console.log("not the last calendar")

        //user moment to get an array of abbreviated weekday names
        //map over the array and set table headers as each day of the week
        let weekdayShortName = moment.weekdaysShort().map((day, i) => {
            return (
                <Table.HeaderCell key={i} collapsing>
                    {day}
                </Table.HeaderCell>
            )
        })
        //use moment to format the date cell to the Month name
        let month = moment(activeCalendarDates[0]).format("MMMM")
        //check to see how many days are blank before the first of the month
        let firstDay = moment(activeCalendarDates[0]).startOf("month").format("d")
        //push blank cells to populate the first week until the first of the month
        let blanks = []
        for (let i=0; i< firstDay; i++) {
            blanks.push(
                <Table.Cell collapsing key={i+32}>
                    {""}
                </Table.Cell>
            )
        }
        //create array with individual cells <td> and the integer date
        const createCalendarTable = (dates, startDate, endDate) => {
            let momentStartDate = moment(startDate)
            let momentEndDate = moment(endDate)

            return (dates.map((jsonDate, i) => {
                let { date, months, years } = jsonDate
                let current_day = moment()

                if(jsonDate.userCell) {
                    //reformat dates to a date that moment can read
                    let combineJsonDate = `${years}-${months}-${date}`
                    let jsonDateToMoment = moment(combineJsonDate, "YYYY-M-DD")
                    //compare the reformated moment to decide which table cell to create(could be the current day cell, start date cell, or end date cell)
                    if(jsonDateToMoment.isSame(current_day, 'day') && jsonDateToMoment.isSame(current_day, 'month')) {
                        //changes cell to purple if its the current day
                        return(
                            <Table.Cell collapsing key={i} month={month} className="current-day" onClick={() => handleCalendarClick(combineJsonDate)}>
                                {date}
                            </Table.Cell>
                        )
                    } else if(jsonDateToMoment.isSame(momentStartDate, 'day')) {
                        return(
                            <Table.Cell collapsing key={i} month={month} className="start-day" onClick={() => handleCalendarClick(combineJsonDate)}>
                                {date}
                            </Table.Cell>
                        )
                    } else if(jsonDateToMoment.isSame(momentEndDate, 'day')) {
                        //changes cell to red for end day
                        return(
                            <Table.Cell collapsing key={i} month={month} className="end-day" onClick={() => handleCalendarClick(combineJsonDate)}>
                                {date}
                            </Table.Cell>
                        )
                    } else if(jsonDate.clicked) {
                        return(
                            <Table.Cell collapsing positive key={i} month={month} className="clicked-day" onClick={() => handleCalendarClick(combineJsonDate)}>
                                {date}
                            </Table.Cell>
                        )
                    } else {
                        //returns a white cell, but will do something more with this later
                        return (
                            <Table.Cell collapsing negative key={i} month={month} onClick={() => handleCalendarClick(combineJsonDate)}>
                                {date}
                            </Table.Cell>
                        )
                    }
                } else {
                    return (
                        <Table.Cell collapsing key={i} month={month} className="regular-day">
                            {date}
                        </Table.Cell>
                    )
                }
            }))
        }
        let renderCalendarTable = createCalendarTable(combineCalendar, startDate, endDate)
        //use spread operator to copy over the blanks and days into one array
        let totalSlots = [...blanks, ...renderCalendarTable]
        //set these to blank
        let rows=[]
        let cells=[]

        totalSlots.forEach((row, i) => {
            if (i % 7 !== 0) { 
                //push each value in totalSlots to the empty cells array
                cells.push(row)
            } else {
                //once we reach the 7th index, we push the single week we created in cells to rows
                //then we set cells as a blank array and push the value into cells and redo the process until...
                rows.push(cells)
                cells=[]
                cells.push(row)
            }
            if (i === totalSlots.length - 1) {
                //once we reach the final index we push what we have in cells to the rows
                rows.push(cells)
            }
        })
        let finalCalendar = rows.map((d, i) => {
            return <Table.Row key={i}>{d}</Table.Row>
        })
        return (
            <Table celled collapsing>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan='4' className="calendar-month">
                            {month}
                        </Table.HeaderCell>
                        <Table.HeaderCell colSpan='3' className="calendar-month">
                            <Button icon onClick={() => onCalendarPrev()}>
                                <Icon name="caret left" />
                            </Button>
                            <Button icon onClick={() => onCalendarNext()}>
                                <Icon name="caret right" />
                            </Button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        {weekdayShortName}
                    </Table.Row>
                    {finalCalendar}
                </Table.Body>
            </Table>
        )
    }
}

export default DisplayCalendar