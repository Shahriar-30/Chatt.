import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import HomeSearch from '../HomeAll/HomeSearch';
import GroupHome from '../HomeAll/GroupHome';
import PeopleHome from '../HomeAll/PeopleHome';
import FriendsHome from '../HomeAll/FriendsHome';
import RequestHome from '../HomeAll/RequestHome';
import VerifyEmail from '../varEmail/VerifyEmail';
import { useSelector } from "react-redux";
import Loader from '../Loader/Loader';

function Home() {

  const [loader, setLoader] = useState(false);

 
  const data = useSelector((state) => {
    return state.data;
  })


  return (
    <>
      {
        loader ?
          <Loader />
          :
          data.emailVerified ?
            <div className='flex h-screen'>
              <div className='w-[50px] h-screen relative  '>
                <Navbar />

              </div>
              <div className='h-screen w-full dark:bg-[black] overflow-y-scroll pt-1'>

                <div>
                  <HomeSearch />
                </div>


                <div className=' w-full h-[90vh]  flex items-center justify-evenly  flex-wrap gap-3 p-1'>


                  <div className='flex flex-col gap-3'>
                    <RequestHome />
                    <GroupHome />
                  </div>

                  <div className=''>
                    <PeopleHome />
                  </div>

                  <div className='flex flex-col gap-3'>
                    <GroupHome />
                    <FriendsHome />
                  </div>


                </div>



              </div>
            </div>
            :
            <VerifyEmail />
      }


    </>

  )
}

export default Home