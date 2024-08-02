import { useState,useEffect } from "react"
import axios from "axios";
import {  SimpleGrid ,  Container,Button,Select,Flex,Box,Spacer} from '@chakra-ui/react'
import { Ticketui } from "../component/ticketui";
import { useNavigate } from "react-router-dom";
import { LoadingIndicator } from "../component/Loading";
import { ErrorIndicator } from "../component/Error";

    export    function Ticket(){
  
    const [ticket,setTicket]=useState([]);
    const [Loading,setLoading]=useState(false)
    const [Error,setError]=useState(false)
    const [priority,setPriority]= useState("")
    const[status,setStatus]=useState("")

    const navigate =useNavigate()
    async function Fetch (priority,status){
        setLoading(true)
try {
    let queryparams={}
    if(priority){
        queryparams._sort="priority";
        queryparams._order=priority;
    }
    if(status){
        queryparams.status=status;
    }
    let res= await axios({
        method:"get",
        url:`http://localhost:3000/data`,
        params:queryparams,
    })
    setTicket(res?.data)
    // console.log(priority)
     setLoading(false)
} catch (error) {
    setLoading(false)
    setError(true)
   console.log(error) ;
}
       
    }

     useEffect( ()=>{
         Fetch(priority,status)
        },[priority,status])
        if(Error){
           return  ( <><ErrorIndicator/>  <p>first start json server  , This page made up of json server</p></>)
        }
        if(Loading){
          return  <LoadingIndicator/>
        }
           
        
    return (
        <>
  

        <Button variant='outline' colorScheme='red' onClick={()=> navigate("/ticket/create")}>
            Create ticket
          </Button>
          <Flex justify="space-around">
          <Box p='2' w="30%" >
          <Select placeholder='Sort by priority' onChange={(e)=>setPriority(e.target.value)} value={priority}>
         <option value='desc'>High to Low</option>
         <option value='asc'>Low to High</option>
          </Select>
  </Box>
  <Spacer />
  <Box p='4'  w="30%">
  <Select placeholder='Filter by status' onChange={(e)=>setStatus(e.target.value)} value={status} >
         <option value='Pending'>Pending</option>
         <option value='In Progress'>In Progress</option>
         <option value='Completed'>Completed</option>
          </Select>
  </Box>
          
       
          </Flex>
        


        <Container maxW="75%">
        <SimpleGrid columns={{base:1,md:2,lg:3}} spacing={10} >
        {
            ticket.map((list)=>{
                return (
                     
               <Ticketui key={list.id}  {...list}/>              
                )
        })
        }</SimpleGrid>
        </Container>
        </>
    )
}