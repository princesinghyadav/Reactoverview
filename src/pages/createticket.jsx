import axios from "axios"
import { Select,Container ,Input ,Spacer,VStack,Button} from '@chakra-ui/react'
import { useState,useEffect } from "react"
import { LoadingIndicator } from "../component/Loading"
import { ErrorIndicator } from "../component/Error"
import { useToast } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"



export  function Createticket(){
const [prio,setPrio]=useState(Number(""))
const [titl,setTitl]=useState("")
const [stat,setstat]=useState("")
const [nam,setNam]=useState("")
const [wor,setwor]=useState("")
const [Loading,setLoading]=useState(false)
const [Error,setError]=useState(false)
const navigate=useNavigate()
const toast =useToast()

  function Success(){
   let todo={
    priority:prio,
    title:titl,
    status:stat,
    name:nam,
    work:wor,
   }
 async function Post(){
setLoading(true)
    try {
        let res= await axios({
            method:"post",
            url:"http://localhost:3000/data",
            data:todo,

        })
        setLoading(false)
        navigate("/ticket")
        toast({
            title: 'Ticket created Sucessfully.',
            description: "We will resolve your problem soon.",
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
    } catch (error) {
        setLoading(false)
        setError(true)
        console.log(error)
    }
 }
 
  Post()
 
}
if(Error){
    return  <ErrorIndicator/>
 }
 if(Loading){
   return  <LoadingIndicator/>
 }
    return (
      
        <>
           <Container maxW="35%"  >
            <VStack spacing="24px" padding={15}>
           <Select placeholder='Priority' value={prio} onChange={(e)=>setPrio(e.target.value)}>
  <option value='1'>  1</option>
  <option value='2'> 2</option>
  <option value='3'>  3</option>
  <option value='4'>  4</option>
  <option value='5'> 5</option>
  <option value='6'> 6</option>
  <option value='7'>  7</option>
  <option value='8'> 8</option>
  <option value='9'>  9</option>
        </Select> 
        <Input placeholder='Enter the title'value={titl} onChange={(e)=>setTitl(e.target.value) }/>
           <Select placeholder='Status'  value={stat} onChange={(e)=>setstat(e.target.value)}>
  <option value='Pending'>Pending</option>
  <option value='In Progress'>In Progress</option>
  <option value='Completed'>Completed </option>
        </Select> 

           <Select placeholder='Select Name' value={nam} onChange={(e)=>setNam(e.target.value)}>
  <option value='Harsh'>Harsh</option>
  <option value='Piyush'>Piyush</option>
  <option value='Keshav'>Keshav</option>
  <option value='Krishna'>Krishna</option>
  <option value='Prince'>Prince</option>
  <option value='Nitish'>Nitish</option>
         </Select> 
         <Input placeholder='Enter the Work' value={wor} onChange={(e)=>setwor(e.target.value)} />
<Button variant="outline" colorScheme="red" onClick={Success}> Create Ticket </Button>
         </VStack>
           </Container>
  
        </>

    )
  }