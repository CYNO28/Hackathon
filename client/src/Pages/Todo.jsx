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
  useEffect(()=>
  {
axios.get(`http://localhost:8080/${id}/task`).then((r)=>{
  setdata(r.data)
})
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