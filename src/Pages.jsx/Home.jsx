import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'

function Home() {
    
    const[cont , setCountry]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        fetch(`https://restcountries.com/v2/all`)
        .then((resp)=>resp.json())
        .then((data)=>{
            setCountry(data)
            console.log(data)
        
        })
  
    },[])
    console.log(cont)
    useEffect(()=>{
        if(localStorage.getItem(localStorage.kind)){
            navigate("/")
        }    
    },[])
  
    
  return (
    <>
       <button className='btn btn-danger' onClick={()=>{
              localStorage.removeItem(`kind`)
            }}>Logout</button>
<table className='table'>
    <thead>
        <tr>
            <th>Sr no</th>
            <th>Name</th>
            <th>Capital</th>
            <th>Currency</th>
        </tr>
    </thead>
    <tbody>
        {
       cont.map((item , index)=>{
            const{demonym,  capital,currencies}=item;
            console.log(item);
            return(
                <tr key={index}>
                    <td>{index+1}</td>
                   <td>{demonym}</td>                   
                    <td>{capital}</td>               
                </tr>
            )
         })
        }
    </tbody>

</table>
    </>
  )
}

export default Home