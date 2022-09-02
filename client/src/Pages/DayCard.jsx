import React from 'react'
import style from './style.module.css'
const DayCard = ({day ,data}) => {
  let task=[]
  data.map((e,i)=>{
    if(e.time&&e.time.split(' ')[2]==day){
task.push(e)
    }
  })
  return (
    <div className={style.dayCard} >
        <p>
             {day}
             {task[0]?task.map((e,i)=>(<p key={i}>{e.Title}</p>)):null}
            </p>  
        </div>
  )
}

export default DayCard