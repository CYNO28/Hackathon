import React from 'react'
import style from './style.module.css'
const Tasks = ({data}) => {
  return (
    <div>{
        data.map((e,i)=>(<div key={i} className={style.dayCard} >
Title:{data[i].Title}<br></br>
Description:{data[i].Description}
        </div>))}</div>
  )
}

export default Tasks