import { useState,useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Card,CardBody,CardHeader,Box,Heading,Stack,StackDivider,Text } from "@chakra-ui/react"


export function  Detailspage(){

    
        const [detail,setDetail]=useState({})
        const {iid} =useParams()
        
          async    function Data (){
            try {
                let response = await   axios.get(`https://reqres.in/api/users/${iid}`)
                setDetail(response?.data?.data)
                console.log(response?.data?.data)

            } catch (error) {
                console.log(error)
            }
        
            }
            useEffect( function (){
             Data( )
        
            },[iid])
        const {name,id ,year,color}=detail;
            return (
          <>
            <Card>
            <CardHeader>
    <Heading size='md'>This is a detail page of home</Heading>
  </CardHeader>

    
      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
            iD
            </Heading>
            <Text pt='2' fontSize='sm'>
              {id}
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
             Nmae
            </Heading>
            <Text pt='2' fontSize='sm'>
             {name}
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
            color
            </Heading>
            <Text pt='2' fontSize='sm'>
            {color}
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
           Year
            </Heading>
            <Text pt='2' fontSize='sm'>
            {year}
            </Text>
          </Box>
        </Stack>
      </CardBody>
       
        
    </Card>
          
     
        </>
            )
        }
        
        