import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import LogoutModal from "../components/LogoutModal";


const Dashboard = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className="bg-[#fbfbfb]">
            <div className="flex">
                <SideNav openModal={openModal} setOpenModal={setOpenModal} />
                <Outlet />
            </div>
            <LogoutModal openModal={openModal} setOpenModal={setOpenModal} />
        </div>
    )
}

export default Dashboard;