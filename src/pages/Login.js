import React, { useRef, useState } from 'react'
// import loginIcon from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
// import Context from '../context';
const Login = () => {

//  const user=JSON.parse(localStorage.getItem('loginUser')) || []
   const email=useRef()
   const password=useRef()
   const role=useRef()
  const navigate=useNavigate()
//   const {fetchUserDetails, fetchUserAddToCart}=useContext(Context)
  
  const [showPassword,setshowpassword]=useState(false)
//   const [data,setdata]=useState({
//     email:"",
//     password:""
//   })
//   console.log(data)
//   const handleOnchange=(e)=>{
// const {name,value}=e.target
// console.log(value)

// setdata((preve)=>{
//   // console.log(preve)
//   return {
//     ...preve,
    
//     [name]:value
//   }
// })
//   }
  const handleSubmit=async(e)=>{
    e.preventDefault()


    let obj={
      email:email.current.value,
      password:password.current.value,
      role:role.current.value
      
    }
    let res=await fetch('http://localhost:5050/api/signin',{
      method:'post',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
    let dataApi=await res.json()

    console.log(dataApi)

     if(dataApi.success){
    toast.success(dataApi.message)
    navigate('/home')
    localStorage.setItem('login',JSON.stringify(true))
     }
    else{
      toast('please check password or Invalid Details !')
    }
  
  }

  return (
   <section id='login '>
    <div className='container mt-20 '>
     
      <div className=' p-2  bg-white py-5 max-w-sm mx-auto rounded big shadow-2xl'>
        <div className=' w-30 h-30 mx-auto '>

          <img className=' hello' src='https://png.pngtree.com/thumb_back/fh260/background/20230803/pngtree-two-lunch-boxes-in-front-of-a-tray-of-food-image_12992084.jpg'   alt='image icons'/> 
        </div>
        <form className='pt-5' onSubmit={handleSubmit}>
          <div className='grid'>
            <label>Email:</label>
            <div className='bg-slate-100 p-2'>
            <input  name='email' ref={email} type="email" placeholder='enter email' className='w-full h-full outline-none bg-transparent '/>
            </div>
          </div>
          <div>
            <label>Password:</label>
            <div className='bg-slate-100 p-2 flex'>

            <input required type={showPassword? 'text':'password'} ref={password} name='password'  placeholder='enter password' className='w-full h-full outline-none bg-transparent'/>
            <div className='cursor-pointer text-xl' onClick={()=>setshowpassword((preve)=>!preve)}>
              <span>
  {
  
  showPassword     ?  (

<FaEyeSlash/>

  ):(

    <FaEye/>

  )

}

              </span>
            </div>
            </div>
          {/* <Link className='block  w-fit ml-auto hover:underline hover:text-red-600 mt-2' to={'/forgot-password' }>forgot password</Link> */}
          </div>
          <div className='grid'>
            <label>Role:</label>
            <select ref={role} className='bg-slate-100 p-2'>
            <option    type="text"  className='w-full h-full outline-none bg-transparent '>select role </option>
            <option    type="text"  className='w-full h-full outline-none bg-transparent '>ADMIN</option>
            <option    type="text"  className='w-full h-full outline-none bg-transparent '>Kitchen(Owner)</option>
            </select>
          </div>
          <button className='bg-green-600 text-white hover:bg-green-700 px-6 py-2 w-full  rounded transition-all  mt-6'>login</button>

        </form>
        {/* <p className='my-5'>Don't have account ?<Link to={'/sign-up'} className='hover:text-red-600 hover:underline' >Sign up</Link></p> */}
      </div>
    </div>
   </section>
  )
}

export default Login