import React, { useRef, useState } from 'react'
import Category from './Category';
import { FaGreaterThan } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { FaPowerOff } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { PiListDashes } from 'react-icons/pi';
import CategoryList2 from './CategoryList2';
import { toast } from 'react-toastify';

const MyProfile = () => {
const email=useRef()
const password=useRef()

    const [Home,setHome]=useState(false)

    const [show,setshow]=useState(false)

const handleOnchange=async()=>{
    let obj = {
        email:email.current.value,
        password:password.current.value
        
    }
    let res=await fetch('http://localhost:5050/api/update',{
        method:'put',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(obj)
      })
      let dataApi=await res.json()
  
      console.log(dataApi)
  
       if(dataApi.success){
      toast.success(dataApi.msg)
      
      localStorage.setItem('login',JSON.stringify(true))
       }
       if(dataApi.error){
        toast.error(dataApi.msg)
      }
  
}

  return (
    <div className=' flex'>
        {
           !Home &&  <div className=''><Category /></div>
            }

            {
                Home && (
                    <div className=''><CategoryList2/></div>

                )
            }
        <div className=' w-full bg-slate-100 '>
        {/* heeadehgfhwjegf */}
        <div className=' h-14 w-full bg-white flex items-center'>
            <div className=' w-full   text-xl flex justify-between '>
                <div className='text-slate-600 mx-8' onClick={()=>setHome((preve)=>!preve)}>
                    {
                        !Home && (

                            <PiListDashes/>
                        )
                    }
                    {
                        Home && (
                            <IoClose/>
                        )
                    }
                    
                    </div>
                <div className='text-green-600 mr-8  relative'  onClick={()=>setshow((preve)=>!preve)} ><FaUser/>
            { show &&   <div className='w-40 h-36 shadow-xl flex flex-col gap-2 absolute z-10 bg-white top-11 right-0'>
                    <p className='text-center text-blue-600 mt-5'>ADMIN</p>
                    <Link to='/myprofile' className='flex  items-center gap-5 ml-5 hover:text-blue-700 text-lg'>
                        <p className='text-black'><FaUser/></p>
                        <p  className='text-black'>My Profile</p>
                    </Link>
                    <div className='flex  items-center gap-5 ml-5 hover:text-blue-700 text-lg'>
                        <p className='text-black'><FaPowerOff/></p>
                        <Link to={'/'} className='text-black'>Logout</Link>
                    </div>

                </div> 
                }
                </div>
                </div>
            </div>
        {/* headesrjhfjgwej */}
        <div className='w-full bg-slate-100  mx-8 my-8 flex flex-col gap-10'>
                <div className='w-full bg-white px-8 h-16  flex flex-col justify-center'>
            <div className='text-black text-xl '>Lunch Box</div>
            <div className='flex items-center gap-2 text-slate-400'>
                <p >Home</p>
                <p className='text-xs '> <FaGreaterThan/> </p>
                <Link to={'/home'}>Dashboard</Link>
            </div>

            
        
            </div>

            {/* profile div  */}

            <div className=' w-full bg-white p-8 flex flex-col gap-2'>
                <div className='w-full h-6 mb-2 text-black text-xl'>Edit Profile</div>
                <div className='w-full h-14 flex flex-col gap-1'>
                    <p className='text-slate-500'>UserName</p>
                    <input required className='w-full outline-blue-200  px-3'ref={email} type='email' placeholder='admin'/>
                </div>
                <div className='w-full h-14 flex flex-col gap-1'>
                    <p className='text-slate-500'>Password</p>
                    <input required className='w-full outline-blue-200 px-3 ' ref={password} type='password' placeholder='change password'/>
                </div>
                <div className='w-24 h-7 bg-blue-800 flex justify-center items-center' onClick={handleOnchange}><button className='text-white '>Edit Profile</button></div>

            </div>

        </div>

        </div>
    </div>
  )
}

export default MyProfile