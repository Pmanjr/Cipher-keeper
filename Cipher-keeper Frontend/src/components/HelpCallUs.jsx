import React from 'react'

const HelpCallUs = () => {
  return (
    <div className="flex flex-col items-center mx-auto my-[20%] w-[50%] text-center">
        <div className="rounded-full h-[100px] w-[100px] bg-[#D9D9D9]"></div>
        <span className="font-[700] text-[18px]">Hi, give us a call today</span>
        <span className='font-[500] text-[14px]'>Phone lines are available during working hours
                8am and 5pm weekdays</span>
        <span className='font-[500] text-[14px]'>Copy/Tap the number below to call.</span>
        <span className='font-[700] text-[14px]'>+234 806 647 3871</span>
    </div>
  )
}

export default HelpCallUs