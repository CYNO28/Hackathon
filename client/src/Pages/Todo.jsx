import React from 'react'
import { useEffect } from 'react'
import AddTodo from './AddTodo'
import Calender from './Calender'
import axios from 'axios'
import { useState } from 'react'
import Tasks from './Tasks'
const Todo = () => {
  const [data,setdata]=useState([])
  let id="6311ed1ecc3260e275beb4d2"
  let time=new Date()
  useEffect(()=>
  {
axios.get(`http://localhost:8080/${id}/task`).then((r)=>{
  setdata(r.data)
})
for(let i=0;i<data.length;i++){
  if(data.time==time){
    alert(` You need to do  ${data.title}`) 
    axios.patch(`http://localhost:8080/${id}/task`,{
      ...data[i],completed:true
    }).then((r)=>{
  setdata(r.data)
})
  }
}
  },[])
  return (
      <div>
        <AddTodo></AddTodo>
        {/* <Calender data={data}></Calender> */}
        <Tasks data={data}></Tasks>
      </div>
  )
}

export default Todo