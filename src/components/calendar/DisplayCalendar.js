import React from 'react';
import './Calendar.css'
import moment from 'moment'
import { Table, Label } from 'semantic-ui-react'


const DisplayCalendar = ({ dates, startDate, endDate, calendarObject }) => {

    //get each cell's number date of their specific month in the 100 day span
    let userDays = calendarObject.map(userdates => userdates.date)
    //create an array of objects that have attributes of years, months, date, and userCell: false, indicating its not part of the 100 day span
    let convertedDates = dates.map(data => {
        let { years, months, date } = data.toObject()
        months += 1
        return(
            { years, months, date, userCell: false }
        )
    })
    //return only the days that are not part of the userDays array and filter out the nulls to return an array of nonUserCells
    let nonUserCells = convertedDates.map(data => {
        if(userDays.indexOf(data.date) === -1) {
            return data
        } else {
            return null
        }
    }).filter(x => x != null)
    //spread the nonUserCells and the CalendarObjects, which are the days in the span of 100 days
    
    let combineCalendar = [...nonUserCells, ...calendarObject]

    //didn't know double ternary works ha

    nonUserCells.length < 1 ? console.log("YAYYY") : (nonUserCells[0].date > userDays[userDays.length - 1]) ? combineCalendar = [...calendarObject, ...nonUserCells] : console.log("NAYYY")

    //use moment js to get an array of abb weekday names
    //map over array and set table headers as each day of the week
    let weekdayShortName = moment.weekdaysShort().map((day, i) => {
        return (
            <Table.Cell key={i} collapsing>
                {day}
            </Table.Cell>
        )
    })

    let month = moment(dates[0]).format("MMMM")

    //how many days are blank before the first of the month
    let firstDay = moment(dates[0]).startOf("month").format("d")
    //pushing blank cells to populate the first week until the first day
    let blanks = []
    for (let i=0; i < firstDay; i++) {
        blanks.push(
            <Table.Cell collapsing key={i+32}>
                {""}
            </Table.Cell>
        )
    }

    //test to see if handle on click with a cell works!!!
    let handleOnClick = (e, month) => {
        debugger;
    }

    //creating array with individual cells <td> with number date
    const daysInMonthFunction = (dates, startDate, endDate) => {
        let momentStartDate = moment(startDate)
        let momentEndDate = moment(endDate)

        return (dates.map((jsonDate, i) => {
            let { date, months, years } = jsonDate
            let current_day = moment()
            
            if(jsonDate.userCell) {
                //reformat dates to a date that moment can accurately read
                let combineJsonDate = `${years}-${months}-${date}`
                let jsonDateToMoment = moment(combineJsonDate, "YYYY-M-DD")
                //compare the reformated moment with various factors
                if(jsonDateToMoment.isSame(current_day, 'day') && jsonDateToMoment.isSame(current_day, 'month')){
                    //changes cell to yellow if its the current day
                    return(
                        <Table.Cell collapsing key={i} month={month} onClick={e => handleOnClick(e, month)} className="current-day">
                            {date}
                        </Table.Cell>
                    )
                } else if(jsonDateToMoment.isSame(momentStartDate, 'day')) {
                    //changes cell to green for start day
                    return(
                        <Table.Cell collapsing key={i} month={month} onClick={e=>handleOnClick(e, month)} className="start-day">
                            {date}
                        </Table.Cell>
                    )
                } else if(jsonDateToMoment.isSame(momentEndDate, 'day')) {
                    //changes cell to red for end day
                    return(
                        <Table.Cell collapsing key={i} month={month} onClick={e=>handleOnClick(e, month)} className="end-day">
                            {date}
                        </Table.Cell>
                    )
                } else if(jsonDate.clicked) {
                    return(
                        <Table.Cell collapsing positive key={i} month={month} onClick={e => handleOnClick(e, month)} className="clicked-day">
                            {date}
                        </Table.Cell>
                    )
                } 
                else {
                    //returns a white cell, but will do something more with this later
                    return (
                        <Table.Cell collapsing negative key={i} month={month}>
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
        })
        )
    }

    let daysInMonth = daysInMonthFunction(combineCalendar, startDate, endDate)

    //use spread operator to copy over the blanks and days into one array
    let totalSlots = [...blanks, ...daysInMonth]
    //set these to blank 
    let rows =[]
    let cells = []

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

    //map over rows to be nested in between tablerows (tr)
    let finalCalendar = rows.map((d, i) => {
        return <Table.Row key={i}>{d}</Table.Row>
    })
    //maybe update tr into semantic table rows

    return (
        //<Table collapsing> - only takes up as much space as its rows
        <Table celled className="calendar" collapsing>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell colSpan='7'>{month}</Table.HeaderCell>
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

export default DisplayCalendar