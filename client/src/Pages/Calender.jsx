import React from 'react'
import DayCard from './DayCard'
import style from './style.module.css'
const Calender = ({data}) => {
    let date=new Date().toString()
    
    let month=new Date().getMonth()
    let days={
          jan:31,
           feb:28,
           mar:31,
           apr:30,
            may:31,
           jun:30,
           july:31,
           aug:31,
           sep:30,
           oct:31,
           nov:30,
           dec:31
        }
       let monthDays=Object.values(days)[month]
let arr= Array.from({length:monthDays},(_,index)=>index+1)
           
  return (
    <div className={style.cln}>
        { arr.map((e,i)=>(<DayCard key={i} data={data} day={e}></DayCard>))}
    </div>

  )
}

export default Calender