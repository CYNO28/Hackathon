import React from 'react'
import { useEffect } from 'react'
import AddTodo from './AddTodo'
import Calender from './Calender'
import axios from 'axios'
import { useState } from 'react'
import Tasks from './Tasks'
const Todo = () => {
  const [data,setdata]=useState([])
  const [state,setstate]=useState(1)
  let id=localStorage.getItem('id')
  console.log(id)
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
  },[state])
  
  function DelHandler(did){
    axios.delete(`http://localhost:8080/${id}/task/${did}`).then(r=>console.log(r))
setstate(e=>e+1)
  }
  function refresh(){
    setstate(e=>e+1)
  }
  return (
      <div>
        <AddTodo refresh={refresh}></AddTodo>
        {/* <Calender data={data}></Calender> */}
        <Tasks data={data} DelHandler={DelHandler}></Tasks>
      </div>
  )
}

export default Todo