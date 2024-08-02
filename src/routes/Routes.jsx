import Home from "../pages/home"
import Productdetail from "../pages/productdetails"
import Login from "../pages/login"
import { Routes, Route } from "react-router-dom";
import { Detailspage } from "../component/details";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "../context/Authcontext";
import { Ticket } from "../pages/Ticket";
import { Createticket } from "../pages/createticket";
import { Viewticket } from "../pages/viewticket";

function Pagewrapper({children}){
  const {isLoggedIn}= useContext(Authcontext)
const isLog=false;
 
   if(!isLoggedIn){
   return  <Navigate to="/login"/>
   }
  
  return children
  
}




export function Routess  (){

    return(
        <div> 
         
         <Routes>
         <Route path="/login"  element={<Login />} />
        <Route path="/"  element={
          <Pagewrapper>
             <Home />
             </Pagewrapper>
         } />
        <Route path="/detail"  element={
          <Pagewrapper>
            <Productdetail />
            </Pagewrapper>
          } />
     
        <Route path="/user/:iid" element={
          <Pagewrapper>
            <Detailspage/> 
            </Pagewrapper>
          }/>
        <Route path="/ticket" element={
          <Pagewrapper>
          <Ticket/>
         </Pagewrapper>
        }></Route>
         <Route path="/ticket/create" element={<Createticket/>}></Route>
         <Route path="/ticket/:id" element={<Viewticket/>}></Route>

        
      </Routes>
        </div>
    )
}