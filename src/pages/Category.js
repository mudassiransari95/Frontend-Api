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
import { Link } from 'react-router-dom';



const Category = (props) => {

    console.log(props.Home)

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

const handlebanner=()=>{
    setbanner((preve)=>!preve)
    setcategory(false)
    setcountry(false)
    setzone(false)
    setboy(false)
    setKitchen(false)
    setfaq(false)
    setoffer(false)
    setpage(false)
    setnormal(false)
    setorder(false)
}
const handlecategory=()=>{
    setbanner(false)
    setcategory((preve)=>!preve)
    setcountry(false)
    setzone(false)
    setboy(false)
    setKitchen(false)
    setfaq(false)
    setoffer(false)
    setpage(false)
    setnormal(false)
    setorder(false)
}
const handlecountry=()=>{
    setbanner(false)
    setcategory(false)
    setcountry((preve)=>!preve)
    setzone(false)
    setboy(false)
    setKitchen(false)
    setfaq(false)
    setoffer(false)
    setpage(false)
    setnormal(false)
    setorder(false)
}
const handlezone=()=>{
    setbanner(false)
    setcategory(false)
    setcountry(false)
    setzone((preve)=>!preve)
    setboy(false)
    setKitchen(false)
    setfaq(false)
    setoffer(false)
    setpage(false)
    setnormal(false)
    setorder(false)
}
const handleboy=()=>{
    setbanner(false)
    setcategory(false)
    setcountry(false)
    setzone(false)
    setboy((preve)=>!preve)
    setKitchen(false)
    setfaq(false)
    setoffer(false)
    setpage(false)
    setnormal(false)
    setorder(false)
}
const handlekitchen=()=>{
    setbanner(false)
    setcategory(false)
    setcountry(false)
    setzone(false)
    setboy(false)
    setKitchen((preve)=>!preve)
    setfaq(false)
    setoffer(false)
    setpage(false)
    setnormal(false)
    setorder(false)
}
const handlefaq=()=>{
    setbanner(false)
    setcategory(false)
    setcountry(false)
    setzone(false)
    setboy(false)
    setKitchen(false)
    setfaq((preve)=>!preve)
    setoffer(false)
    setpage(false)
    setnormal(false)
    setorder(false)
}
const handleoffer=()=>{
    setbanner(false)
    setcategory(false)
    setcountry(false)
    setzone(false)
    setboy(false)
    setKitchen(false)
    setfaq(false)
    setoffer((preve)=>!preve)
    setpage(false)
    setnormal(false)
    setorder(false)
}
const handlepage=()=>{
    setbanner(false)
    setcategory(false)
    setcountry(false)
    setzone(false)
    setboy(false)
    setKitchen(false)
    setfaq(false)
    setoffer(false)
    setpage((preve)=>!preve)
    setnormal(false)
    setorder(false)
}
const handlenormal=()=>{
    setbanner(false)
    setcategory(false)
    setcountry(false)
    setzone(false)
    setboy(false)
    setKitchen(false)
    setfaq(false)
    setoffer(false)
    setpage(false)
    setnormal((preve)=>!preve)
    setorder(false)
}
const handleorder=()=>{
    setbanner(false)
    setcategory(false)
    setcountry(false)
    setzone(false)
    setboy(false)
    setKitchen(false)
    setfaq(false)
    setoffer(false)
    setpage(false)
    setnormal(false)
    setorder((preve)=>!preve)
}





  return (
    <>

    <div className='w-60 h-full overflow-hidden'>

        <div  className='w-full h-24 flex justify-center items-center border bg-white '>
            <img className='h-14 w-16 rounded' src='https://png.pngtree.com/thumb_back/fh260/background/20230803/pngtree-two-lunch-boxes-in-front-of-a-tray-of-food-image_12992084.jpg' />
        </div>
{/* top image  */}
        <div className='w-full bg-white flex  justify-center overflow-y-scroll h-[500px] scrollbar-none'>
            <div className='w-44 mx-auto '>
            
            <div className='w-full flex justify-between items-center h-12'>
                <Link to={'/home'} className='flex justify-center items-center gap-3'>
                    <div className='text-blue-700'><MdDashboard/></div>
                    <div className='text-blue-700'>Dashboard</div>
                </Link>
                <div className='bg-green-600 text-white text-xs w-7 rounded flex justify-center items-center'>
                   <p> New </p>
                    </div>
            </div>

                {/* partioin system  */}

                <div className='w-full flex justify-between items-center h-12 hover:text-blue-700'>
                <div className='flex justify-center items-center gap-3 '>
                    <div className=''><MdDashboard/></div>
                    <div className=''>Banner</div>
                    
                </div>
                <div className='text-xs flex justify-center items-center' onClick={handlebanner}>
                   <p> <FaGreaterThan/> </p>
                    </div>
            </div>
             {  banner &&
                <div className='w-44 flex flex-col justify-center ml-11 gap-3 transition-all '>
                        <p className='text-sm hover:text-blue-700'>-Add Banner</p>
                        <p className='text-sm hover:text-blue-700'>-List Banner</p>
                    </div>
}

            
                {/* partioin system  */}

                <div className='w-full flex justify-between items-center h-12 hover:text-blue-500'>
                <div className='flex justify-center items-center gap-3 '>
                    <div className=''><PiListDashes/></div>
                    <div className=''>Category</div>
                </div>
                <div className='text-xs flex justify-center items-center' onClick={handlecategory}>
                   <p> <FaGreaterThan/> </p>
                    </div>
            </div>

            {  category &&
                <div className='w-44 flex flex-col justify-center ml-11 gap-3 transition-all '>
                        <p className='text-sm hover:text-blue-700'>-Add Category</p>
                        <p className='text-sm hover:text-blue-700'>-List Category</p>
                    </div>
}

            
                {/* partioin system  */}

                <div className='w-full flex justify-between items-center h-12 hover:text-blue-500'>
                <div className='flex justify-center items-center gap-3'>
                    <div className=''><FaFlag /></div>
                    <div className=''>Country Code</div>
                </div>
                <div className='text-xs flex justify-center items-center' onClick={handlecountry}>
                   <p> <FaGreaterThan/> </p>
                    </div>
            </div>

            {  country &&
                <div className='w-44 flex flex-col justify-center ml-11 gap-3 transition-all '>
                        <p className='text-sm hover:text-blue-700'>-Add Country Code</p>
                        <p className='text-sm hover:text-blue-700'>-List Country Code</p>
                    </div>
}
                {/* partioin system  */}

                <div className='w-full flex justify-between items-center h-12 hover:text-blue-500'>
                <div className='flex justify-center items-center gap-3'>
                    <div className=''><VscLocation />                    </div>
                    <div className=''>Delivery Zone</div>
                </div>
                <div className='text-xs flex justify-center items-center' onClick={handlezone}>
                   <p> <FaGreaterThan/> </p>
                    </div>
            </div>

            {  zone &&
                <div className='w-44 flex flex-col justify-center ml-11 gap-3 transition-all '>
                        <p className='text-sm hover:text-blue-700'>-Add Delivery Zone</p>
                        <p className='text-sm hover:text-blue-700'>-List Delivery Zone</p>
                    </div>
}
                {/* partioin system  */}

                <div className='w-full flex justify-between items-center h-12 hover:text-blue-500'>
                <div className='flex justify-center items-center gap-3'>
                    <div className=''><MdDirectionsBike/></div>
                    <div className=''>Delivery Boy</div>
                </div>
                <div className='text-xs flex justify-center items-center' onClick={handleboy}>
                   <p> <FaGreaterThan/> </p>
                    </div>
            </div>

            {  boy &&
                <div className='w-44 flex flex-col justify-center ml-11 gap-3 transition-all '>
                        <p className='text-sm hover:text-blue-700'>-Add Delivery Boy</p>
                        <p className='text-sm hover:text-blue-700'>-List Delivery Boy</p>
                    </div>
}
            
                {/* partioin system  */}

                <div className='w-full flex justify-between items-center h-12 hover:text-blue-500'>
                <div className='flex justify-center items-center gap-3'>
                    <div className=''><RiSliceFill/></div>
                    <div className=''>Kitchen</div>
                </div>
                <div className='text-xs flex justify-center items-center' onClick={handlekitchen}>
                   <p> <FaGreaterThan/> </p>
                    </div>
            </div>

            {  Kitchen &&
                <div className='w-44 flex flex-col justify-center ml-11 gap-3 transition-all '>
                        <p className='text-sm hover:text-blue-700'>-Add Kitchen</p>
                        <p className='text-sm hover:text-blue-700'>-List Kitchen</p>
                    </div>
}

                {/* partioin system  */}

                <div className='w-full flex justify-between items-center h-12 hover:text-blue-500'>
                <div className='flex justify-center items-center gap-3'>
                    <div className=''><FaQuestionCircle/></div>
                    <div className=''>Faq</div>
                </div>
                <div className='text-xs flex justify-center items-center' onClick={handlefaq}>
                   <p> <FaGreaterThan/> </p>
                    </div>
            </div>

            {  faq &&
                <div className='w-44 flex flex-col justify-center ml-11 gap-3 transition-all '>
                        <p className='text-sm hover:text-blue-700'>-Add faq</p>
                        <p className='text-sm hover:text-blue-700'>-List Faq</p>
                    </div>
}

                {/* partioin system  */}

                <div className='w-full flex justify-between items-center h-12 hover:text-blue-500'>
                <div className='flex justify-center items-center gap-3 '>
                    <div className=''><CgToolbox/></div>
                    <div className=''>Offer</div>
                </div>
                <div className='text-xs flex justify-center items-center' onClick={handleoffer}>
                   <p> <FaGreaterThan/> </p>
                    </div>
            </div>

            {  offer &&
                <div className='w-44 flex flex-col justify-center ml-11 gap-3 transition-all '>
                        <p className='text-sm hover:text-blue-700'>-Add Offer</p>
                        <p className='text-sm hover:text-blue-700'>-List Offer</p>
                    </div>
}
            
                {/* partioin system  */}

                <div className='w-full flex justify-between items-center h-12 hover:text-blue-500'>
                <div className='flex justify-center items-center gap-3'>
                    <div className=''><RiPagesFill/></div>
                    <div className=''>Pages</div>
                </div>
                <div className='text-xs flex justify-center items-center' onClick={handlepage}>
                   <p> <FaGreaterThan/> </p>
                    </div>
            </div>


            {  page &&
                <div className='w-44 flex flex-col justify-center ml-11 gap-3 transition-all '>
                        <p className='text-sm hover:text-blue-700'>-Add Pages</p>
                        <p className='text-sm hover:text-blue-700'>-List Pages</p>
                    </div>
}
            
                {/* partioin system  */}

                <div className='w-full flex justify-between items-center h-12 hover:text-blue-500'>
                <div className='flex justify-center items-center gap-3'>
                    <div className=''><CiViewList/></div>
                    <div className=''>Payment List</div>
                </div>
                
            </div>


            
                {/* partioin system  */}

                <div className='w-full flex justify-between items-center h-12 hover:text-blue-500'>
                <div className='flex justify-center items-center gap-3'>
                    <div className=''><FaUsers/></div>
                    <div className=''>Customer</div>
                </div>
                
            </div>

            
                {/* partioin system  */}

                <div className='w-full flex justify-between items-center h-12 hover:text-blue-500'>
                <div className='flex justify-center items-center gap-3'>
                    <div className=''><IoMdNotifications/></div>
                    <div className=''>Send Notification</div>
                </div>
               
            </div>

            
                {/* partioin system  */}

                <div className='w-full flex justify-between items-center h-12 hover:text-blue-500'>
                <div className='flex justify-center items-center gap-3'>
                    <div className=''><FaCartShopping/></div>
                    <div className=''>Normal Order</div>
                </div>
                <div className='text-xs flex justify-center items-center' onClick={handlenormal}>
                   <p> <FaGreaterThan/> </p>
                    </div>
            </div>

            {  normal &&
                <div className='w-44 flex flex-col justify-center ml-11 gap-3 transition-all '>
                        <p className='text-sm hover:text-blue-700'>-Pending</p>
                        <p className='text-sm hover:text-blue-700'>-Process</p>
                        <p className='text-sm hover:text-blue-700'>-On The Way</p>
                        <p className='text-sm hover:text-blue-700'>-Delivered</p>
                        <p className='text-sm hover:text-blue-700'>-Cancelled</p>
                    </div>
}
            
                {/* partioin system  */}

                <div className='w-full flex justify-between items-center h-12 hover:text-blue-500'>
                <div className='flex justify-center items-center gap-3'>
                    <div className=''><FaCartShopping/></div>
                    <div className=''>Subscribe Order</div>
                </div>
                <div className='text-xs flex justify-center items-center' onClick={handleorder}>
                   <p> <FaGreaterThan/> </p>
                    </div>
            </div>
            
            {  order &&
                <div className='w-44 flex flex-col justify-center ml-11 gap-3 transition-all '>
                        <p className='text-sm hover:text-blue-700'>-Pending</p>
                        <p className='text-sm hover:text-blue-700'>-Process</p>
                        <p className='text-sm hover:text-blue-700'>-On The Way</p>
                        <p className='text-sm hover:text-blue-700'>-Delivered</p>
                        <p className='text-sm hover:text-blue-700'>-Cancelled</p>
                    </div>
}
            
                {/* partioin system  */}

                <div className='w-full flex justify-between items-center h-12 hover:text-blue-500'>
                <div className='flex justify-center items-center gap-3'>
                    <div className=''><IoMdSettings/></div>
                    <div className=''>Setting</div>
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

export default Category