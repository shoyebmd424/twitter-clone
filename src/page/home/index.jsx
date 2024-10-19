import React from 'react'
import Sidebar from '../../common/sidebar'
import MainContent from '../../components/home/mainSection'
import LeftContent from '../../components/home/leftContent'

const Home = () => {
  return (
    <div className='bg-black text-gray-200 h-[100vh] '>
      <div className="container w-[1250px] m-auto ">
   <div className="grid grid-cols-12">
    <div className="col-span-3"><Sidebar/></div>
    <div className="col-span-6"><MainContent/></div>
    <div className="col-span-3"><LeftContent/></div>
   </div>
   </div>
   </div>
  )
}

export default Home