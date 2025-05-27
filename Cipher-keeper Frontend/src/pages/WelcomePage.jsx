import React from "react";
import { ReactComponent as LogoBird } from "../assets/logo-bird.svg";


const WelcomePage = () => {
    return (
        <div className="flex flex-col items-center py-[23%] font-poppins bg-cover bg-center bg-[#454545]">
            <LogoBird className="text-center" />
            <div className="font-[500] text-[#ffffff] text-[28px]">Welcome to Sirleaf Digital AGENCY</div>
        </div>
    )
}

export default WelcomePage;