import React from 'react'
import style from './style.module.css'
import axios from 'axios'
const Tasks = ({data}) => {
  let id=localStorage.getItem('id')
  
  function DelHandler(){
    axios.delete(`http://localhost:8080/${id}/task/${data._id}`)
  }
  return (
    <div>{
        data.map((e,i)=>(<div key={i} className={style.dayCard} >
Title:{data[i].Title}<br></br>
Description:{data[i].Description}<br></br>
<button onClick={DelHandler} classNames='deletebtn'>Delete</button>
        </div>))}</div>
  )
}

export default Tasks