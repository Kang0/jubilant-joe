import React from 'react';
import '../../App.css'
import moment from 'moment'


const DisplayCalendar = ({ dates }) => {

    let weekdayShort = moment.weekdaysShort()

    let weekdayShortName = weekdayShort.map(day => {
        return (
            <th key={day} className='week-day'>
                {day}
            </th>
        )
    })

    //how many days are blank before the first of the month
    let firstDay = moment(dates[0]).startOf("month").format("d")

    //pushing blank cells to populate the first week until the first day
    let blanks = []
    for (let i=0; i < firstDay; i++) {
        blanks.push(
            <td className="calendar-day empty">{""}</td>
        )
    }

    //creating array with <td> with number date
    let daysInMonth = dates.map((date, index) => {
        let day = moment(date).format("DD")
        return(
            <td key={index} className="calendar-day">
                {day}
            </td>
        )
    })

    let totalSlots = [...blanks, ...daysInMonth]
    let rows =[]
    let cells = []

    totalSlots.forEach((row, i) => {
        if (i % 7 !== 0) {
            cells.push(row)
        } else {
            rows.push(cells)
            cells=[]
            cells.push(row)
        }
        if (i === totalSlots.length - 1) {
            rows.push(cells)
        }
    })

    let finalCalendar = rows.map((d, i) => {
        return <tr>{d}</tr>
    })

    return (
        <div>
            <table className="calendar-day">
                <thead>
                    <tr>{weekdayShortName}</tr>
                </thead>
                <tbody>{finalCalendar}</tbody>
            </table>
        </div>
    )
}

export default DisplayCalendar