import React from 'react'

const Explore = () => {
  return (
    <div className="border flex flex-col gap-2 rounded-[15px]  border-gray-500">
      <h3 className="font-bold text-[22px] p-2 px-4">Explore</h3>

    {Array.from({length:3}).map((_,i)=>(
        <>
      <div className='flex flex-col gap-3 p-2 px-4 pb-0 hover:bg-[#29292a70]'>
        <h5 className="font-bold">Pant's Near-Miss and Sarfaraz's Century</h5>
        <div className="flex gap-2">
        <div className="flex ">
          <div className="w-[30px] h-[30px] rounded-full">
            <img
              src="https://pbs.twimg.com/media/GaLYAd0WwAAtHpd?format=jpg&name=small"
              className="rounded-full w-full h-full"
              alt=""
            />
          </div>
          <div className="w-[30px] h-[30px] ms-[-15px] rounded-full">
            <img
              src="https://pbs.twimg.com/media/GaLYAd0WwAAtHpd?format=jpg&name=small"
              className="rounded-full w-full h-full"
              alt=""
            />
          </div>
          <div className="w-[30px] h-[30px] ms-[-15px] rounded-full">
            <img
              src="https://pbs.twimg.com/media/GaLYAd0WwAAtHpd?format=jpg&name=small"
              className="rounded-full w-full h-full"
              alt=""
            />
          </div>
        </div>
        <div >
          <div className='opacity-[0.5]'>
            <small>7 hour ago</small> . <small>Cinema</small> . <small>116k</small>
          </div>
          <small className='opacity-[0.5]'>Posts</small>
        </div>
      </div>
      </div>
      <div className="bg-gray-600 w-full h-[1px]">
      </div>
      </>))}
      <div className='text-center text-blue-500 py-2'>
        Show more
      </div>
    </div>
  );
}

export default Explore