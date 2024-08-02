import { useState } from "react"
import React from "react"
import axios from "axios";
import { Authcontext } from "../context/Authcontext";
import { useContext } from "react";
import { Button, Stack ,Input} from '@chakra-ui/react'





function Login (){
const [info,setInfo]= useState({
    email:"",
    password:""
})
         

     const {login,isLoggedIn}= useContext(Authcontext)



function Handle(e){
    const{name, value}= e.target;
 let  newform={
    ...info,
    [name]:value
 }
 setInfo(newform)
// console.log(newform)
}
// console.log(info)


const {email, password}=info;
async function Submit (){
  
  try {
    let response= await axios ({
        method:"post",
        url:"https://reqres.in/api/login",
        data:info,
    })
    login(response?.data?.data)

}   catch (error) {
    console.log(error,"Plzz Check The eamil and Password You Hve entered")
}
}
{
  if(!isLoggedIn){
    alert("Use this email:-eve.holt@reqres.in   and Password:-cityslicka  to login  ")
  }
}
    return (
        <>
   
        
        <Stack direction='column' spacing={4} w="30%" align='center' m="auto">
          <h3> Login  page</h3>
     <label> Email </label>
     <Input variant='filled' placeholder='Enter email' name="email" type="email" value={email}  onChange={ Handle }  />
     {/* <input placeholder="Enter email" name="email" type="email" value={email}  onChange={ Handle } /> */}
     <br/>
     <br/>
     <label>Password </label>
     <Input variant='filled' placeholder="Enter password" name="password" value={password}    onChange={ Handle }  />
     {/* <input  placeholder="Enter password" name="password" value={password}  onChange={ Handle }  /> */}
<br/>
<br/>
<Button colorScheme='red'    variant='outline' onClick={Submit}>
    Log in 
  </Button>
 {/* <input value="Login" type="submit" onClick={Submit}/> */}
 </Stack>
        </>
      

    )
}

export default  Login 

 
 