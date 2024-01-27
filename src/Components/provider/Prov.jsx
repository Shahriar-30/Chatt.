import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function Prov() {
    return (
        <>
            <div className='flex items-center justify-center gap-[20px] py-2'>
                <FcGoogle  className='text-[40px] cursor-pointer'  />
                <FaFacebook className='text-[38px] text-[#316FF6] bg-[#eee] rounded-full cursor-pointer p-0 outline-0'  />
            </div>
        </>
    )
}

export default Prov