import { Container } from "@chakra-ui/react"
import { Linkk } from "../routes/Link"
import { Routess } from "../routes/Routes"

export function Navbar(){

    return (
        <>
        <Container maxW="75%" m="auto">
        <Linkk/>
        <Routess/>
        </Container>
      
            
         
        </>
   
    )
}