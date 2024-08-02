import { useEffect,useState} from "react"
import axios from "axios"
import { Card,Box, CardBody ,CardFooter,Heading,Stack,StackDivider,Text, Container,Button,Flex,
  Spacer
} from '@chakra-ui/react'
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"


 export  function Viewticket(){
  const [view,setView]=useState({})
  const { id }=useParams()
  const navigate=useNavigate()
   
 async function Deleteid(){
   try {
    let res= await axios.delete(`http://localhost:3000/data/${id}`)
    if(res.status===200){
    navigate("/ticket")
    }

   } catch (error) {
    console.log(error)
   }
   
 }


  async function fetchid(){

    try {
      let res= await axios.get(`http://localhost:3000/data/${id}`)
      // console.log(res?.data)
      setView(res?.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=> {
    fetchid()
  },[])
const {name,priority,status,work,title }=view
// console.log(id)

    return (<>
     {/* <h1>View ticketpage</h1>    */}
    <Container maxW="50%">
     <Card>
      
    
      <CardBody>
        <Stack divider={<StackDivider/>} spacing='4'>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Name
            </Heading>
            <Text pt='2' fontSize='sm'>
              {name}
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Priority
            </Heading>
            <Text pt='2' fontSize='sm'>
             {priority}
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
            title
            </Heading>
            <Text pt='2' fontSize='sm'>
            {title}
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
            Status
            </Heading>
            <Text pt='2' fontSize='sm'>
            {status}
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
          Work
            </Heading>
            <Text pt='2' fontSize='sm'>
            {work}
            </Text>
          </Box>
        
          <CardFooter>
          <Button variant='solid' colorScheme='blue' onClick={Deleteid} >
           Delete
          </Button>
        </CardFooter>

         
        </Stack>
      </CardBody>
       
    </Card>
    </Container>
    </>
    
    )
  }