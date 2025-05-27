import React from "react";
import NavBar from "./NavBar";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";


const ContactUs = () => {
    return (
        <div className="w-[90%] mt-[2.2rem] mr-[4%] font-poppins">
            <NavBar />
            <div className="flex flex-col mt-[4%] sm:text-center">
                <span className="font-[500] text-[24px]">Contact us</span>
                <span className="font-[400] text-[#7C8DB5] text-[14px]">Please contact us through the following means.</span>
            </div>
            <div className="mt-14 flex justify-between sm:flex-col sm:mx-[5%]">
                <div className="flex flex-col">
                    <span className="font-[500] text-[16px]">Email us</span>
                    <span className="px-14 py-3 mt-2 text-[12px] sm:text-center font-[400] bg-white rounded-lg">Email: helpdesk@cipherkeeper.com</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-[500] text-[16px]">Call us</span>
                    <span className="px-14 py-3 mt-2 text-[12px] sm:text-center font-[400] bg-white rounded-lg">Phone number: +234 701 029 4569</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-[500] text-[16px]">Connect with us</span>
                    <div className="flex px-14 py-3 mt-2 text-[12px] sm:px-[35%] font-[400] bg-white rounded-lg gap-x-4">
                        <BsFacebook className="text-black text-[20px]" />
                        <BsYoutube className="text-black text-[20px]" />
                        <BsInstagram className="text-black text-[20px]" />
                        <BsTwitter className="text-black text-[20px]" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactUs;