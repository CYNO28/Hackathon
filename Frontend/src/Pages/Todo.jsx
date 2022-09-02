import React, { useEffect, useRef } from 'react'

const Todo = () => {
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let date=new Date()
    let weekDay = days[date.getDay()];
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getUTCFullYear();
    console.log(day,weekDay,month,year);
    const ref=useRef()

console.log(ref.current.innerHTML)


    // const getCalendar = () => {
    //     const date = new Date();
    //     date.setDate(1);
    //     const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    //     const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    //     const firstDayIndex = date.getDay();
    //     const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    //     const nextDays = 8 - lastDayIndex - 1;
    //     let days = "";
    //     for (let x = firstDayIndex; x > 1; x--) {
    //       days += `<div className = 'prev-date'><span id = 'calendar-span'>${prevLastDay - x + 2}</span></div>`;
    //     }
    //     for (let i = 1; i <= lastDay; i++) {
    //       if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
    //         days += `<div id = 'today'><span id = 'today-span'>${i}</span></div>`;
    //       } else {
    //         days += `<div><span id = 'calendar-span'>${i}</span></div>`;
    //       }
    //     }
    //     for (let j = 1; j <= nextDays; j++) {
    //       days += `<div class = 'next-date'><span id = 'calendar-span'>${j}</span></div>`;
    //       monthDays.innerHTML = days;
    //     }
    //   };
    //   getCalendar ()
   
  return (
    
    <div className='calendar'>
<div className="weekdays" style={{display: 'flex', flexDirection: 'row'}}>
    
        		        <div>Mon</div>
						<div>Tue</div>
						<div>Wed</div>
						<div>Thu</div>
						<div>Fri</div>
						<div>Sat</div>
						<div>Sun</div>

</div>
<div ref ={ref}></div>

    </div>

  )
}

export default Todo