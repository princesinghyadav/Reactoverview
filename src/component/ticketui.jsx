import {  Box,Button } from '@chakra-ui/react'
import { Card, CardBody, CardFooter ,Heading,Stack,StackDivider,Text} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';




export   function  Ticketui(list){
    const {name,priority,title,status,id}=list;
    const Navigate=useNavigate()
        return (
            <>
         
            <Card>
      
    
      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
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
        </Stack>
      </CardBody>
      <CardFooter>
          <Button variant='solid' colorScheme='blue' onClick={()=> Navigate( `/ticket/${id}`)}>
            view ticket
          </Button>
        </CardFooter>
        
    </Card>
            </>
       
        )
    }