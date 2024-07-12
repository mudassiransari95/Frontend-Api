import React, { useState } from 'react'
import { MdInbox } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { PiListDashes } from "react-icons/pi";
import Category from './Category';
import { FaPowerOff } from "react-icons/fa";
import CategoryList2 from './CategoryList2';
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaFlag } from 'react-icons/fa';
import { VscLocation } from "react-icons/vsc";
import { MdDirectionsBike } from "react-icons/md";
import { RiSliceFill } from "react-icons/ri";
import { FaQuestionCircle } from "react-icons/fa";
import { CgToolbox } from "react-icons/cg";
import { RiPagesFill } from "react-icons/ri";
import { CiViewList } from "react-icons/ci";
import { FaUsers } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaGreaterThan } from "react-icons/fa6";
import { RiTruckFill } from "react-icons/ri";
import { AiOutlineBorderOuter } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";




const Home = () => {
    const [show,setshow]=useState(false)
    console.log(show)

    const [Home,setHome]=useState(false)

  return (
   <>
     <div className='overflow-hidden'>
        <div className='w-500 flex h-full bg-slate-100 overflow-y-scroll'>
            {
           !Home &&  <div className=''><Category /></div>
            }

            {
                Home && (
                    <div className=''><CategoryList2/></div>

                )
            }
            <div className='w-full h-full bg-slate-100 flex gap-8 flex-col'>
                {/* headers  */}
                <div  className='flex flex-col gap-2 bg-slate-100'>
                <div className=' h-14 bg-white flex items-center'>
            <div className=' w-full  text-xl flex justify-between '>
                <div className='text-slate-600 ml-8' onClick={()=>setHome((preve)=>!preve)}>
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
            { show &&   <div className='w-40 h-36 shadow-xl flex flex-col gap-3 absolute z-10 bg-white top-11 right-0'>
                    <p className='text-center text-blue-600 mt-5'>Admin</p>
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

            {/* top headers  */}
          
             
                </div>
                
            <div className='mx-8  h-16 bg-white flex items-center'>
            <div className='text-black ml-10 text-xl '>Lunch Box Reports</div>
            
        
            </div>
    
                  {/* upper div */}

        <div className='flex justify-between  bg-slate-100 mx-8 gap-8 '>
        <div className='h-20  rounded bg-white  flex items-center '>
                <div className='mx-5 bg-white flex justify-center items-center  h-10 gap-5  '>
                <div className='w-12 h-12 rounded flex justify-center items-center bg-slate-200'> <div className='bg-slate-200 text-slate-500'>< MdInbox/></div> </div>
            <div className='w-32  '>
                <p className='text-slate-500'>Total Banner</p>
                <p className='text-black text-xl'>5</p>
            </div>
                </div>
            
        
            </div>


                {/* ngjvsrhgghkrthygiu */}

                <div className='h-20  rounded bg-white  flex items-center '>
                <div className='mx-5 bg-white flex justify-center items-center  h-10 gap-5  '>
                <div className='w-12 h-12 rounded flex justify-center items-center bg-slate-200'> <div className='bg-slate-200 text-slate-500'>< PiListDashes/></div> </div>
            <div className='w-32  '>
                <p className='text-slate-500'>Total Category</p>
                <p className='text-black text-xl'>7</p>
            </div>
                </div>
            
        
            </div>

            {/* hjnrdhkrtduyhtr */}
            
            <div className='h-20  rounded bg-white  flex items-center '>
                <div className='mx-5 bg-white flex justify-center items-center  h-10 gap-5  '>
                <div className='w-12 h-12 rounded flex justify-center items-center bg-slate-200'> <div className='bg-slate-200 text-slate-500'>< VscLocation/></div> </div>
            <div className='w-32  '>
                <p className='text-slate-500 w-full  truncate text-ellipsis '>Total Delivery Zone</p>
                <p className='text-black text-xl'>1</p>
            </div>
                </div>
            
        
            </div>

            {/* ghjrtsklhnjtujho */}

            <div className='h-20  rounded bg-white  flex items-center '>
                <div className='mx-5 bg-white flex justify-center items-center  h-10 gap-5  '>
                <div className='w-12 h-12 rounded flex justify-center items-center bg-slate-200'> <div className='bg-slate-200 text-slate-500'>< MdDirectionsBike/></div> </div>
            <div className='w-32  '>
                <p className='text-slate-500'>Total Delivery Boy</p>
                <p className='text-black text-xl'>1</p>
            </div>
                </div>
            
        
            </div>
            </div>

        {/* second div */}
        <div className='flex justify-between  bg-slate-100 mx-8 gap-8 '>
        <div className='h-20  rounded bg-white  flex items-center '>
                <div className='mx-5 bg-white flex justify-center items-center  h-10 gap-5  '>
                <div className='w-12 h-12 rounded flex justify-center items-center bg-slate-200'> <div className='bg-slate-200 text-slate-500'>< RiSliceFill/></div> </div>
            <div className='w-32  '>
                <p className='text-slate-500'>Total Kitchen</p>
                <p className='text-black text-xl'>6</p>
            </div>
                </div>
            
        
            </div>


                {/* ngjvsrhgghkrthygiu */}

                <div className='h-20  rounded bg-white  flex items-center '>
                <div className='mx-5 bg-white flex justify-center items-center  h-10 gap-5  '>
                <div className='w-12 h-12 rounded flex justify-center items-center bg-slate-200'> <div className='bg-slate-200 text-slate-500'>< FaQuestionCircle/></div> </div>
            <div className='w-32  '>
                <p className='text-slate-500'>Total Faq</p>
                <p className='text-black text-xl'>7</p>
            </div>
                </div>
            
        
            </div>

            {/* hjnrdhkrtduyhtr */}
            
            <div className='h-20  rounded bg-white  flex items-center '>
                <div className='mx-5 bg-white flex justify-center items-center  h-10 gap-5  '>
                <div className='w-12 h-12 rounded flex justify-center items-center bg-slate-200'> <div className='bg-slate-200 text-slate-500'>< CgToolbox/></div> </div>
            <div className='w-32  '>
                <p className='text-slate-500'>Total Offer</p>
                <p className='text-black text-xl'>2</p>
            </div>
                </div>
            
        
            </div>

            {/* ghjrtsklhnjtujho */}

            <div className='h-20  rounded bg-white  flex items-center '>
                <div className='mx-5 bg-white flex justify-center items-center  h-10 gap-5  '>
                <div className='w-12 h-12 rounded flex justify-center items-center bg-slate-200'> <div className='bg-slate-200 text-slate-500'>< FaCartShopping/></div> </div>
            <div className='w-32  '>
                <p className='text-slate-500 truncate text-ellipsis'>Total Pending Orders</p>
                <p className='text-black text-xl'>504</p>
            </div>
                </div>
            
        
            </div>
            </div>

                {/* third div          */}
            {/* dkfghjifdghfdjkgn */}
            

            {/* dkfghjifdghfdjkgn */}
            
            {/* ghjrtsklhnjtujho */}

            {/* third container */}
            <div className='flex justify-between  bg-slate-100 mx-8 gap-8 '>
        <div className='h-20  rounded bg-white  flex items-center '>
                <div className='mx-5 bg-white flex justify-center items-center  h-10 gap-5  '>
                <div className='w-12 h-12 rounded flex justify-center items-center bg-slate-200'> <div className='bg-slate-200 text-slate-500'>< RiTruckFill/></div> </div>
            <div className='w-32  '>
                <p className='text-slate-500'>Processing Orders</p>
                <p className='text-black text-xl'>4</p>
            </div>
                </div>
            
        
            </div>


                {/* ngjvsrhgghkrthygiu */}

                <div className='h-20  rounded bg-white  flex items-center '>
                <div className='mx-5 bg-white flex justify-center items-center  h-10 gap-5  '>
                <div className='w-12 h-12 rounded flex justify-center items-center bg-slate-200'> <div className='bg-slate-200 text-slate-500'>< AiOutlineBorderOuter/></div> </div>
            <div className='w-32  '>
                <p className='text-slate-500'>On Route Orders</p>
                <p className='text-black text-xl'>0</p>
            </div>
                </div>
            
        
            </div>

            {/* hjnrdhkrtduyhtr */}
            
            <div className='h-20  rounded bg-white  flex items-center '>
                <div className='mx-5 bg-white flex justify-center items-center  h-10 gap-5  '>
                <div className='w-12 h-12 rounded flex justify-center items-center bg-slate-200'> <div className='bg-slate-200 text-slate-500'>< MdInbox/></div> </div>
            <div className='w-32  '>
                <p className='text-slate-500 truncate text-ellipsis'>Completed Orders</p>
                <p className='text-black text-xl'>4</p>
            </div>
                </div>
            
        
            </div>

            {/* ghjrtsklhnjtujho */}

            <div className='h-20  rounded bg-white  flex items-center '>
                <div className='mx-5 bg-white flex justify-center items-center  h-10 gap-5  '>
                <div className='w-12 h-12 rounded flex justify-center items-center bg-slate-200'> <div className='bg-slate-200 text-slate-500'>< IoMdClose/></div> </div>
            <div className='w-32  '>
                <p className='text-slate-500'>Cancelled Orders</p>
                <p className='text-black text-xl'>29</p>
            </div>
                </div>
            
        
            </div>
            </div>

            {/* forth container  */}
            
            <div className='bg-slate-100 mx-8 gap-8 mb-8'>
        <div className='h-20  rounded bg-white  flex items-center w-60'>
                <div className='mx-5 bg-white flex justify-center items-center  h-10 gap-5  '>
                <div className='w-12 h-12 rounded flex justify-center items-center bg-slate-200'> <div className='bg-slate-200 text-slate-500'>< MdInbox/></div> </div>
            <div className='w-32  '>
                <p className='text-slate-500'>
                Total Sales</p>
                <p className='text-black text-xl'>1050.00 $</p>
            </div>
                </div>
            
        
            </div>
            </div>


            {/* dkfghjifdghfdjkgn */}
            
            {/* ghjrtsklhnjtujho */}

            

            {/* dkfghjifdghfdjkgn */}

            </div>

        </div>
    </div>
   

{/* home page after login  */}


   </>
  )
}

export default Home