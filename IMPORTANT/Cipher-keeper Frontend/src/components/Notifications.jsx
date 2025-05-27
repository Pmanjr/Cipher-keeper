import React from 'react'
import NavBar from "./NavBar";
import { ReactComponent as Dot } from '../assets/reddot.svg';


const Notifications = () => {
  return (
    <div className="w-[90%] mt-[2.2rem] mr-[4%] font-poppins">
        <NavBar />
        <div className="flex flex-col mt-[4%]">
            <span className="font-[500] text-[24px]">Notifications</span>
        </div>
        <div className='p-4 my-6 flex items-center justify-between bg-white rounded-md shadow-md'>
            <div className='flex items-center gap-x-4'>
                <Dot />
                <div className="rounded-full w-[60px] h-[60px] px-4 text-center bg-[#fbfbfb]"></div>
                <div className="flex flex-col">
                    <span className="font-[700] text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    <span className="font-[400] text-[12px]">Tag - Category - 5hr ago</span>
                </div>
            </div>
            <div className="flex gap-x-2">
                <input type="button" value="Read" className="border hover:cursor-pointer rounded-md border-black px-5 py-1 text-black" />
                <input type="button" value="Delete" className="bg-[#EB5757] hover:cursor-pointer rounded-md px-5 py-1.5 text-white" />
            </div>
        </div>
    </div>
  )
}

export default Notifications