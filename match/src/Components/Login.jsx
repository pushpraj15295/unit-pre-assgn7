import { Button, Input, Spacer, useControllableProp } from '@chakra-ui/react';
import React, { useContext, useReducer, useRef, useState } from 'react'
import { useEffect } from 'react';
import { AuthContext } from '../Context/AuthContext';

const Login = () => {

  let {LogReducer} = useContext(AuthContext)
  const [state,dispatch] = useReducer(LogReducer)
    console.log(state)

    const [data,setData] =useState({
      email:"",
      password:""
    })
    const handleChange=(e)=>{
      const {text,value} = e.target
      setData({text})
    }
    
    console.log(data)

  return (
    <div style={{margin:"20px"}}>

        <br />
          <Input type="text" placeholder='email' Eref={Eref} onChange={handleChange(e)} />
          <br /><br />
          <Input type="text" placeholder='password' Pref={Pref} onChange={handleChange(e)}  />
          <br /> <br />
          <Button onClick={() => dispatch({type:"LOG_IN"})}>sigh in</Button>  
           &nbsp;
           <Button onClick={() => dispatch({type:"LOG_OUT"})}>sign out</Button>

           
    </div>
  )
}

export default Login;