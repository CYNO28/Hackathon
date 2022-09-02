import axios from 'axios'
import React, { useState } from 'react'
import style from './style.module.css'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,Button,FormControl,FormLabel,Input
  } from '@chakra-ui/react'
const AddTodo = ({refresh}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const [data,setData]=useState({
        Title:'',
        Time:'',
        Description:''
    })
    let id=localStorage.getItem('id')
    function onChange(e){
setData({...data,[e.target.name]:e.target.value})
    }
    function submitHandler(){
axios.post(`http://localhost:8080/${id}/task`,{
    ...data
}).then((r)=>{console.log(r.data)
refresh()})
    }
    
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  return (
    <div className={style.container}>
        <h1> Sprint Plan</h1>
        <button onClick={onOpen} className={style.button} >Add New Task</button>
        <>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your Todo</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input ref={initialRef} onChange={(e)=>onChange(e)} name='Title' placeholder='Title' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Time</FormLabel>
                <Input onChange={(e)=>onChange(e)} name="Time" placeholder='Time' />
              </FormControl>
              
              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Input onChange={(e)=>onChange(e)} name="Description" placeholder='Description' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={submitHandler}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </div>
  )
}

export default AddTodo