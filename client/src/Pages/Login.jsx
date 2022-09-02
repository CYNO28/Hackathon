import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import axios from "axios"

import { useState } from 'react';
  
  export default function Login() {
    const [data,setData]=useState({
      
      email:'',
      password:''
    })
    function changeHandler(e){
      setData({...data,[e.target.name]:e.target.value})
    }
    function submitHandler()

    {

      axios.post("http://localhost:8080/signup",{
     
        email:data.email,
        password:data.password
      }).then(r=>{console.log(r.data)})
    }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email"name="email" onChange={(e)=>changeHandler(e)}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password"name="password" onChange={(e)=>changeHandler(e)}/>
              </FormControl>
              <Stack spacing={10}>
             
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  onClick={submitHandler}

                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }