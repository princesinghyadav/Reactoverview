
import  {Link } from "react-router-dom";
import { Button, Stack } from '@chakra-ui/react'
import { useContext } from "react";
import { Authcontext } from "../context/Authcontext";

  
export function Linkk (){
const {logout}=useContext(Authcontext)
    return(
        <div  className="navbar"> 
        <Link to="/">HOME</Link>
      <Link to="/detail"> DETAIL</Link>
      <Link to="/login">LOGIN </Link>
      <Link to="/ticket"> TICKET</Link>
      <Stack direction='row' spacing={4} align='center'>
      <Button colorScheme='red' variant='outline' onClick={logout}>
    Log out
  </Button>
  </Stack> 
        </div>
    )
}

{/* <Stack direction='row' spacing={4} align='center'>
  <Button colorScheme='teal' variant='solid'>
    Button
  </Button>
  <Button colorScheme='teal' variant='outline'>
    Button
  </Button>
  <Button colorScheme='teal' variant='ghost'>
    Button
  </Button>
  <Button colorScheme='teal' variant='link'>
    Button
  </Button>
</Stack> */}