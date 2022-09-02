import React, { useState } from 'react'
import style from './style.module.css'
import axios from 'axios'
const Tasks = ({data ,DelHandler}) => {
  let id=localStorage.getItem('id')

  return (
    <div>{
        data.map((e,i)=>(<div key={i} className={style.dayCard} >
Title:{data[i].Title}<br></br>
Description:{data[i].Description}<br></br>
<button onClick={()=>DelHandler(e._id)} className='deletebtn'>Delete</button>
        </div>))}</div>
  )
}

export default Tasks