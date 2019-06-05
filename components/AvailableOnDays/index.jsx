import React from 'react'
import vars from '../_vars.scss'

console.log(vars)

const shorten = (day) => {
    const short = {
        Monday: "Mon",
        Tuesday: "Tue",
        Wednesday: "Wed",
        Thursday: "Thu",
        Friday: "Fri",
        Saturday: "Sat",
        Sunday: "Sun"
    }
    return short[day]
}

export default ({days}) =>
    <p className="available-on-days">
        Available on
        {days.map((day, i)=>
            <span className="available-on-days__day">{shorten(day)}</span>    
        )}
        <style jsx>{`
            .available-on-days__day{

                text-transform: uppercase;
                padding: 4px 10px;
                font-size: 0.9em;
                border-radius: 100px;
                margin-left: 15px;
            }
        `}</style>
    </p>