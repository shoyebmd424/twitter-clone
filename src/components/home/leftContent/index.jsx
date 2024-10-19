import React from 'react'
import { MdSearch } from 'react-icons/md'
import Prime from './prime'
import Explore from './explore'
import WhoFlow from './whoFlow'

const LeftContent = () => {
  return (
    <div className='px-4 py-2 flex flex-col gap-3'>
        <div className='flex items-center justify-center rounded-full text-[18px] bg-gray-800 text-gray-500'>
          <MdSearch className='text-[25px]'/>  <input type="text" placeholder='Search' className=' p-2 border-none bg-transparent outline-none'  />
        </div>
        <div  className="h-[90vh] flex flex-col gap-3 overflow-y-scroll " style={{scrollbarWidth:"none"}}>
    <Prime/>
        <Explore/>
        <WhoFlow/>
        </div>

    </div>
  )
}

export default LeftContent