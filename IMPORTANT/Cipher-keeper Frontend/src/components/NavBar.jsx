import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import { BsSearch } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { ReactComponent as Avatar } from "../assets/avatar.svg";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";
import SideNav from "./SideNav";

const NavBar = ({ welcome, message }) => {
  const userName = localStorage.getItem("user");
  const [showMenu, setShowMenu] = useState(false);
  localStorage.setItem('showMenu',showMenu);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menu = (
  <Menu
    items={[
      {
        label: (
          <Link to="" className="md:hidden lg:hidden xl:hidden">
            {userName}
          </Link>
        ),
        key: "0",
      },
      {
        label: <Link to="">Profile</Link>,
        key: "1",
      },
      {
        label: <span onClick={() => {
              dispatch(logout());
              navigate("/");
              }}>Logout</span>,
        key: "2",
      },
      {
        label: <Link to="">Notifications</Link>,
        key: "3",
      },
    ]}
  />
);
  
  return (
    <div className="flex font-poppins justify-between items-center">
    <div className="md:hidden lg:hidden xl:hidden">
    <SideNav showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
    
      <div className="md:hidden lg:hidden xl:hidden px-8">
        <GiHamburgerMenu
          className="text-[32px] cursor-pointer"
          onClick={()=>setShowMenu(!showMenu)}
        />
      </div>
      <div className="flex flex-col">
        <span className="font-[500] text-[24px] sm:text-[18px]">{welcome}</span>
        <span className="text-[#7C8DB5]">{message}</span>
      </div>
      <span className="flex gap-x-5 md:items-center lg:items-center xl:items-center">
        <Link to="/dashboard/search">
          <BsSearch className="hover:cursor-pointer sm:hidden text-black" />
        </Link>
        <Link to="/dashboard/notifications">
          <BsBell className="hover:cursor-pointer sm:hidden text-black" />
        </Link>
        <Avatar className="hover:cursor-pointer sm:hidden" />
        <span className="hover:cursor-pointer sm:hidden">{userName}</span>
        <Dropdown overlay={menu} trigger={["click"]}>
          <a href="#0" onClick={(e) => e.preventDefault()}>
            <Space className="flex items-center text-black p-2 rounded-lg">
              <DownOutlined className="text-[11px]" />
            </Space>
          </a>
        </Dropdown>
      </span>
    </div>
  );
};

export default NavBar;
