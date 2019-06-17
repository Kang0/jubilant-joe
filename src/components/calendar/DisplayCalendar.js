import React from 'react';
import '../../App.css'
import moment from 'moment'
import { Table } from 'semantic-ui-react'


const DisplayCalendar = ({ dates }) => {

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

    let handleOnClick = () => {
        debugger;
    }

    //creating array with individual cells <td> with number date
    let daysInMonth = dates.map((date, index) => {
        let day = moment(date).format("DD")
        return(
            <Table.Cell collapsing onClick={handleOnClick}>
                {day}
            </Table.Cell>
        )
    })

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