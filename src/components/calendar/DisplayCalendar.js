import React from 'react';
import './Calendar.css'
import moment from 'moment'
import { Table } from 'semantic-ui-react'


const DisplayCalendar = ({ dates, startDate, endDate }) => {

    //use moment js to get an array of abb weekday names
    //map over array and set table headers as each day of the week
    let weekdayShortName = moment.weekdaysShort().map(day => {
        return (
            <Table.Cell collapsing>
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
            <Table.Cell collapsing>
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

        return (dates.map((date, index) => {
            let day = moment(date).format("DD")
            let current_day = moment()
            //if the date is the same as the current day, it highlights the cell as blue, if its the start or end date, highlight green
            if(date.isSame(current_day, 'day')){
                return(
                    <Table.Cell collapsing month={month} onClick={e => handleOnClick(e, month)} className="current-day">
                        {day}
                    </Table.Cell>
                )
            } else if(date.isSame(momentStartDate, 'day')) {
                return(
                    <Table.Cell collapsing month={month} onClick={e=>handleOnClick(e, month)} className="start-day">
                        {day}
                    </Table.Cell>
                )
            } else if(date.isSame(momentEndDate, 'day')) {
                return(
                    <Table.Cell collapsing month={month} negative onClick={e=>handleOnClick(e, month)} className="end-day">
                        {day}
                    </Table.Cell>
                )
            } else {
                return(
                    <Table.Cell collapsing month={month} onClick={e => handleOnClick(e, month)}>
                        {day}
                    </Table.Cell>
                )
            }
        }))
    }

    let daysInMonth = daysInMonthFunction(dates, startDate, endDate)

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
        return <Table.Row>{d}</Table.Row>
    })
    //maybe update tr into semantic table rows

    return (
        //<Table collapsing> - only takes up as much space as its rows
        <Table celled striped collapsing>
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