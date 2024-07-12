import React, { useState } from 'react'
import { TfiLocationPin } from "react-icons/tfi";
import { MdDashboard } from "react-icons/md";
import { PiListDashes } from 'react-icons/pi';
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



const CategoryList2 = () => {

    

    const [banner,setbanner]=useState(false)
    const [category,setcategory]=useState(false)
    const [country,setcountry]=useState(false)
    const [zone,setzone]=useState(false)
    const [boy,setboy]=useState(false)
    const [Kitchen,setKitchen]=useState(false)
    const [faq,setfaq]=useState(false)
    const [offer,setoffer]=useState(false)
    const [page,setpage]=useState(false)
    const [normal,setnormal]=useState(false)
    const [order,setorder]=useState(false)


    // const [imageOnly,setimageOnly]=useState(false)



  return (
    <>

    <div className='w-16 h-full overflow-hidden'>

        <div  className='w-full h-24 flex justify-center items-center border bg-white '>
            <img className='h-14 w-16 rounded' src='https://png.pngtree.com/thumb_back/fh260/background/20230803/pngtree-two-lunch-boxes-in-front-of-a-tray-of-food-image_12992084.jpg' />
        </div>
{/* top image  */}
        <div className='w-full bg-white flex  justify-center   '>
            <div className=' mx-auto'>
            
            <div className='w-full flex justify-center items-center h-12'>
                <div className='flex justify-center items-center'>
                    <div className='text-blue-700'><MdDashboard/></div>
                    
                </div>
               
            </div>

                {/* partioin system  */}

 
                <div className='w-full flex justify-center items-center h-12'>
                <div className='flex justify-center items-center'>
                
                    
                    <div className=''><MdDashboard/></div>
                </div>
               
            </div>

            
                {/* partioin system  */}

                
            <div className='w-full flex justify-center items-center h-12'>
                <div className='flex justify-center items-center'>
                    <div className=''><PiListDashes/></div>
                    
                    
                </div>
               
            </div>
            
                {/* partioin system  */}
                    <div className='w-full flex justify-center items-center h-12'>
                <div className='flex justify-center items-center'>
                    <div className=''><FaFlag /></div>
                    
                    
                </div>
               
            </div>
                {/* partioin system  */}
                    <div className='w-full flex justify-center items-center h-12'>
                <div className='flex justify-center items-center'>
                    <div className=''><VscLocation />                    </div>
                    
                    
                </div>
               
            </div>
                
                {/* partioin system  */}

                    <div className='w-full flex justify-center items-center h-12'>
                <div className='flex justify-center items-center'>
                    <div className=''><MdDirectionsBike/></div>
                    
                    
                </div>
               
            </div>
            
                {/* partioin system  */}

                    <div className='w-full flex justify-center items-center h-12'>
                <div className='flex justify-center items-center'>
                    <div className=''><RiSliceFill/></div>
                    
                    
                </div>
               
            </div>

                {/* partioin system  */}

                    <div className='w-full flex justify-center items-center h-12'>
                <div className='flex justify-center items-center'>
                    <div className=''><FaQuestionCircle/></div>
                    
                    
                </div>
               
            </div>
                
                {/* partioin system  */}

                    <div className='w-full flex justify-center items-center h-12'>
                <div className='flex justify-center items-center'>
                    <div className=''><CgToolbox/></div>
                    
                    
                </div>
               
            </div>
            
                {/* partioin system  */}

                    <div className='w-full flex justify-center items-center h-12'>
                <div className='flex justify-center items-center'>
                    <div className=''><RiPagesFill/></div>
                    
                    
                </div>
               
            </div>
            
                {/* partioin system  */}

                    <div className='w-full flex justify-center items-center h-12'>
                <div className='flex justify-center items-center'>
                    <div className=''><CiViewList/></div>
                    
                    
                </div>
               
            </div>
            
                {/* partioin system  */}

                    <div className='w-full flex justify-center items-center h-12'>
                <div className='flex justify-center items-center'>
                    <div className=''><FaUsers/></div>
                    
                    
                </div>
               
            </div>
                {/* partioin system  */}

                    <div className='w-full flex justify-center items-center h-12'>
                <div className='flex justify-center items-center'>
                    
                    <div className=''><IoMdNotifications/></div>
                    
                </div>
               
            </div>
            
                {/* partioin system  */}

                    <div className='w-full flex justify-center items-center h-12'>
                <div className='flex justify-center items-center'>
                    
                    <div className=''><FaCartShopping/></div>
                    
                </div>
               
            </div>
            
                {/* partioin system  */}

                    <div className='w-full flex justify-center items-center h-12'>
                <div className='flex justify-center items-center'>
                    <div className=''><FaCartShopping/></div>
                    
                    
                </div>
               
            </div>
            
                {/* partioin system  */}

                    <div className='w-full flex justify-center items-center h-12'>
                <div className='flex justify-center items-center'>
                    <div className=''><IoMdSettings/></div>
                    
                    
                    
                </div>
               
            </div>



{/* divider  */}
            </div>

        </div>

    </div>
   
    {/* second after clicking  */}

    
    </>
  )
}

export default CategoryList2