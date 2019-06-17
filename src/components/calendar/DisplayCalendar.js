import React from 'react';
import '../../App.css'
import moment from 'moment'


const DisplayCalendar = ({ dates }) => {

    //use moment js to get an array of abb weekday names
    //map over array and set table headers as each day of the week
    let weekdayShortName = moment.weekdaysShort().map(day => {
        return (
            <th key={day} className='week-day'>
                {day}
            </th>
        )
    })

    let month = moment(dates[0]).format("MMMM")

    //how many days are blank before the first of the month
    let firstDay = moment(dates[0]).startOf("month").format("d")

    //pushing blank cells to populate the first week until the first day
    let blanks = []
    for (let i=0; i < firstDay; i++) {
        blanks.push(
            <td className="calendar-day empty">{""}</td>
        )
    }

    //creating array with individual cells <td> with number date
    let daysInMonth = dates.map((date, index) => {
        let day = moment(date).format("DD")
        return(
            <td key={index} className="calendar-day">
                {day}
            </td>
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
        return <tr>{d}</tr>
    })

    return (
        <div>
            <table className="calendar-day">
                <thead>
                    <tr>{month}</tr>
                    <tr>{weekdayShortName}</tr>
                </thead>
                <tbody>{finalCalendar}</tbody>
            </table>
        </div>
    )
}

export default DisplayCalendar