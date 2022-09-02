import axios from 'axios'
import React, { useState } from 'react'
import Style from './style.module.css'
const AddTodo = () => {
    const [data,setData]=useState({
        Title:'',
        Time:'',
        Description:''
    })
    let id='6311ed1ecc3260e275beb4d2'
    function onChange(e){
setData({...data,[e.target.name]:e.target.value})
    }
    function submitHandler(){
axios.post(`http://localhost:8080/${id}/task`,{
    task:{...data}
}).then((r)=>console.log(r.data))
    }
  return (
    <div>
        <input type="text" onChange={(e)=>onChange(e)} name='Title' placeholder='Title'/>
        <input type="text" onChange={(e)=>onChange(e)} name="Time" placeholder='Time'/>
        <input type="text" onChange={(e)=>onChange(e)} name="Description" placeholder='Description'/>
        <button onClick={submitHandler}>Add</button>
    </div>
  )
}

export default AddTodo