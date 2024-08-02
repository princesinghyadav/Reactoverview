import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home(){
const [home , setHome]=useState([])


     function Data (){
  let response =   axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
  .then((res)=>   setHome(res.data.data))
  // .then((res)=> console.log(res.data.data))

 
    }
    useEffect( function (){
     Data()

    },[])

    return (
  <>
  <h3> Home page</h3>
{
    home.map((ele,i)=>{
      return (
        <div key={ele.id} id='home-card' >
<div  id='homecard'>
            <h3> Title :- {ele.title}</h3> 
            <h3> Brand:- {ele.brand}</h3> 
            <h3>  Category :- {ele.category}</h3> 
            <h3>Price:-  {ele.price}</h3> 
 </div>
             <Link to={`/user/${ele.id}`}>get all details in one page </Link>
            </div>
    
      )
    })
}
{/* <button onClick={Data}> info</button> */}
</>
    )
}

export default  Home