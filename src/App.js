import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Singlepage from './pages/Singlepage';
import './App.css'
import MyProfile from './pages/MyProfile';

const App = () => {
  
  return (
    <div>
      <BrowserRouter>
   {/* <Navbar/> */}
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/myprofile" element={<MyProfile/>}/>
      </Routes>
      <ToastContainer/>
      </BrowserRouter>
    </div>
  )
}

export default App