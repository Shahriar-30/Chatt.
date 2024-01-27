import React, { useState } from 'react'
import { FiAlertTriangle } from "react-icons/fi";
import { ToastContainer, toast } from 'react-toastify';
import { sendEmailVerification } from "firebase/auth";
import { auth } from '../../../FireBase';


function VerifyEmail() {

    const [disab, setDisab] = useState(false);

    let sendVerify = () => {

        sendEmailVerification(auth.currentUser)
            .then(() => {
                setDisab(true)
                toast.success("Emali Verification Send")
                setTimeout(() => {
                    setDisab(false)
                }, 20000);
            });

    }

    return (
        <div className='w-full h-screen flex items-center justify-center dark:bg-black'>
            <div className='w-[350px] bg-white p-5 py-12 rounded-md flex flex-col gap-2 items-center justify-center dark:bg-[#343A40] '>
                <FiAlertTriangle className='text-red-500 text-[70px]' />
                <h2 className='text-[25px] text-center dark:text-white'>Verify Your Account <br /> Via Email</h2>
                {
                    disab ?
                        <>
                            <button className=' px-3 py-2 mt-[10px] rounded-lg text-white transition-all duration-[.6s] bg-blue-400 '  >Send Verify Link</button>
                            <p className='text-black text-[15px] dark:text-white text-center'>Wait for 2 minutes <br /> to send a varify email again</p>
                        </>
                        :
                        <button onClick={sendVerify} className='bg-blue-500 px-3  py-2 mt-[10px] rounded-lg text-white transition-all duration-[.6s] hover:bg-blue-400 '>Send Verify Link</button>
                }
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition:Bounce
            />
        </div>
    )
}

export default VerifyEmail