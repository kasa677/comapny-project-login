import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Nav from './Componenet/Nav';
import About from './Pages.jsx/About';
import Home from './Pages.jsx/Home';
import Login from './Pages.jsx/Login';
import Signup from './Pages.jsx/Signup';

function App() {
  return (
   <>
   {/* <Nav/> */}
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
     <Route path='/home' element={<Home/>}/> 
    <Route path='/about' element={<About/>}/> 
   </Routes>
   </>
  );
}

export default App;
