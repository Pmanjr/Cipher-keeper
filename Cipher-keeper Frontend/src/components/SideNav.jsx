import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { BiSync } from "react-icons/bi";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsGear } from "react-icons/bs";
import { BsBarChart } from "react-icons/bs";
import { BsExclamationCircle } from "react-icons/bs";
import { ReactComponent as LogOut } from "../assets/logout.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { logout } from "../features/auth/authSlice";

const SideNav = ({ setOpenModal, showMenu, setShowMenu }) => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [select, setSelect] = useState({
    overview: true,
    passwordManager: false,
    passwordCategory: false,
    syncAccounts: false,
    setting: false,
    help: false,
    contactUs: false,
    logout: false,
  });
  const state = JSON.parse(localStorage.getItem("select"))

  const Menus = [
    {
      title: "Overview",
      link: "/dashboard/",
      icon: <BsBarChart className="text-[20px]" />,
      name: "overview",
      active: {
        overview: true,
        passwordManager: false,
        passwordCategory: false,
        syncAccounts: false,
        setting: false,
        help: false,
        contactUs: false,
        logout: false,
      },
      selected: state.overview,
    },
    {
      title: "Password Category",
      link: '/dashboard/category',
      icon: <BiCategoryAlt className="text-[20px]" />,
      name: "passwordManager",
      arrow: "",
      active: {
        overview: false,
        passwordManager: false,
        passwordCategory: true,
        syncAccounts: false,
        setting: false,
        help: false,
        contactUs: false,
        logout: false,
      },
      selected: state.passwordCategory,
    },
    {
      title: "Password Manager",
      link: '/dashboard/passwordmanager',
      icon: <RiLockPasswordFill className="text-[20px]" />,
      name: "passwordManager",
      arrow: "",
      active: {
        overview: false,
        passwordManager: true,
        passwordCategory: false,
        syncAccounts: false,
        setting: false,
        help: false,
        contactUs: false,
        logout: false,
      },
      selected: state.passwordManager,
    },
    {
      title: "Setting",
      link: "/dashboard/setting",
      icon: <BsGear className="text-[20px]" />,
      name: "setting",
      active: {
        overview: false,
        passwordManager: false,
        passwordCategory: false,
        syncAccounts: false,
        setting: true,
        help: false,
        contactUs: false,
        logout: false,
      },
      selected: state.setting,
    },
  ];

  const DownMenu = [
    {
      title: "Help Center",
      link: "/dashboard/help",
      icon: <BsExclamationCircle className="text-[20px]" />,
      name: "help",
      active: {
        overview: false,
        passwordManager: false,
        passwordCategory: false,
        syncAccounts: false,
        setting: false,
        help: true,
        contactUs: false,
        logout: false,
      },
      selected: state.help,
    },
    {
      title: "Contact Us",
      link: "/dashboard/contactus",
      icon: <AiOutlineMessage className="text-[20px]" />,
      name: "contactUs",
      active: {
        overview: false,
        passwordManager: false,
        passwordCategory: false,
        syncAccounts: false,
        setting: false,
        help: false,
        contactUs: true,
        logout: false,
      },
      selected: state.contactUs,
    },
    {
      title: "Log Out",
      link: '',
      icon: <LogOut className="text-[17px] ml-[0.2rem]" />,
      name: "logOut",
      active: {
        overview: false,
        passwordManager: false,
        passwordCategory: false,
        syncAccounts: false,
        setting: false,
        help: false,
        contactUs: false,
        logout: false,
      },
      selected: state.logout,
    },
  ];
  
  return (
    <div
      className={`bg-[#ffffff] h-screen sticky top-0 p-5 pt-8 ${
        open ? "w-[250px]" : "w-[7%]"
      } duration-300 sm:fixed sm:inset-0 sm:z-30 sm:${!showMenu && 'hidden'} overflow-hidden mx:w-[90px] shadow-lg relative font-poppins mr-[4%]`}
    >
      {open ? (<div className="flex items-center justify-between"><div className="text-[32px] ml-[0.5rem] font-nova font-[500] mx:text-[18px] sticky">
      Cipher-keeper
      
        {/* <img src={sdclogo} alt='logo' className="w-[90%] mx:w-[100%] sticky" /> */}
        </div>
        <AiOutlineClose
            className="text-[24px] text-[red] top-[] md:hidden lg:hidden xl:hidden hover:cursor-pointer"
            onClick={()=>setShowMenu(!showMenu)}
          />
          </div>
      ) : (
        <div className="text-[18px] font-nova font-[500] mx:w-[100%] sticky">
          Cipher-keeper
        </div>
      )}

      <ul className={`${open ? 'mt-[25%]' : 'mt-[4rem]' }`}>
        {Menus.map((menu, index) => (
          <ul>
          {menu.link === '' ? (<li
            // eslint-disable-next-line
            onClick={() => setSubmenuOpen(prevValue => (
              {...prevValue, [menu.name]: !prevValue[menu.name]}
            ))}
              key={index}
              name={menu.name}
              className={`flex items-center hover:cursor-pointer mx:ml-[1rem] mx:mt-[1.2rem] text-[#7C8DB5] ${
                menu.selected && "text-[black]"
              } ${
                open ? "ml-[0.6rem]" : "ml-[1rem] mt-[1.2rem]"
              } duration-300 w-[100%] mb-[10%]`}
            >
              <div
              
                onClick={() => (
                  setSelect(menu.active),
                  localStorage.setItem("select", JSON.stringify(menu.active))
                )}
                className={`${
                  menu.selected ? "text-black" : "text-[#7C8DB5]"
                } ${open && "rotate-[360deg]"} duration-300 block`}
              >
                {menu.icon}
              </div>
              <div
                onClick={() => (setSelect(menu.active), localStorage.setItem("select", JSON.stringify(menu.active)))}
                className={`font-[500] text-[14px] ml-[5%] mx:scale-0 text-center ${
                  !open && "scale-0"
                } duration-300`}
              >
                {menu.title}
              </div>

              <div
              onClick={() => (
                  setSelect(menu.active)
                )}
                className={`${
                  !open && "scale-0"
                } mx:scale-0 duration-300 hover:cursor-pointer`}
              >
                {menu.arrow}
              </div>
            </li>) : (<Link to={menu.link}>
            <li
            // eslint-disable-next-line
            onClick={() => setSubmenuOpen(prevValue => (
              {...prevValue, [menu.name]: !prevValue[menu.name]}
            ))}
              key={index}
              name={menu.name}
              className={`flex items-center hover:cursor-pointer mx:ml-[1rem] mx:mt-[1.2rem] text-[#7C8DB5] ${
                menu.selected && "text-[black]"
              } ${
                open ? "ml-[0.6rem]" : "ml-[1rem] mt-[1.2rem]"
              } duration-300 w-[100%] mb-[10%]`}
            >
              <div
              
                onClick={() => (
                  setSelect(menu.active),
                  localStorage.setItem("select", JSON.stringify(menu.active))
                )}
                className={`${
                  menu.selected ? "text-black" : "text-[#7C8DB5]"
                } ${open && "rotate-[360deg]"} duration-300 block`}
              >
                {menu.icon}
              </div>
              <div
                onClick={() => (setSelect(menu.active), localStorage.setItem("select", JSON.stringify(menu.active)))}
                className={`font-[500] mx:scale-0 text-[14px] ml-[5%] text-center ${
                  !open && "scale-0"
                } duration-300`}
              >
                {menu.title}
              </div>

              <div
              onClick={() => (
                  setSelect(menu.active)
                )}
                className={`${
                  !open && "scale-0"
                } duration-300 mx:scale-0 hover:cursor-pointer`}
              >
                {menu.arrow}
              </div>
            </li>
          </Link>)}
          
          {menu.submenu && menu.submenuOpened && open && (
            <ul>
              {menu.submenuItems.map((sub, index) => (
                <Link  to={sub.link}>
                  <li key={index}
                  onClick={ () => (setSelect(sub.active), localStorage.setItem("select", JSON.stringify(sub.active)))}
                  className={`flex items-center hover:cursor-pointer text-[#7C8DB5] ${sub.selected && "text-[black]"
              } w-[100%] mx:hidden duration-300 px-8 mb-[10%]`}>{sub.title}</li>
                </Link>
              ))}
            </ul>
          )}
          </ul>
          
        ))}
      </ul>

      <ul className={`mt-[12rem] mx:mt-[13rem]`}>
        {DownMenu.map((menu, index) => (
          <ul>
          {menu.link === '' ? (
            <li
              key={index}
              name={menu.name}
              onClick={()=>setOpenModal(true)}
              className={`flex sm:hidden items-center hover:cursor-pointer gap-x-1 text-[#FF3B30] ${
                menu.selected && "text-[black]"
              } ${open ? "ml-[0.6rem]" : "ml-[1rem]"} mx:ml-[1rem] mb-[10%]`}
            >
              <div
                onClick={() => (setSelect(menu.active), localStorage.setItem("select", JSON.stringify(menu.active)))}
                className={`${open && "rotate-[360deg]"} duration-300 block`}
              >
                {menu.icon}
              </div>
              <div
                onClick={() => (setSelect(menu.active), localStorage.setItem("select", JSON.stringify(menu.active)))}
                className={`font-[500] text-[14px] mx:scale-0 ml-[5%] text-center ${
                  !open && "scale-0"
                } duration-300`}
              >
                {menu.title}
              </div>

              <div
                className={`${
                  !open && "scale-0"
                } duration-300 hover:cursor-pointer`}
              >
                {menu.arrow}
              </div>
            </li>
          ) : (<Link to={menu.link}>
            <li
              key={index}
              name={menu.name}
              className={`flex items-center hover:cursor-pointer gap-x-1 text-[#7C8DB5] ${
                menu.selected && "text-[black]"
              } ${open ? "ml-[0.6rem]" : "ml-[1rem]"} mx:ml-[1rem] mb-[10%]`}
            >
              <div
                onClick={() => (setSelect(menu.active), localStorage.setItem("select", JSON.stringify(menu.active)))}
                className={`${
                  menu.selected ? "text-black" : "text-[#7C8DB5]"
                } ${open && "rotate-[360deg]"} duration-300 block`}
              >
                {menu.icon}
              </div>
              <div
                onClick={() => (setSelect(menu.active), localStorage.setItem("select", JSON.stringify(menu.active)))}
                className={`font-[500] text-[14px] mx:scale-0 ml-[5%] text-center ${
                  !open && "scale-0"
                } duration-300`}
              >
                {menu.title}
              </div>

              <div
                className={`${
                  !open && "scale-0"
                } duration-300 hover:cursor-pointer`}
              >
                {menu.arrow}
              </div>
            </li>
          </Link>)}
          
          </ul>
        ))}
        <li onClick={() => {
              dispatch(logout());
              navigate("/");
              }} className={`flex md:hidden lg:hidden xl:hidden items-center hover:cursor-pointer gap-x-1 text-[#FF3B30] ml-[0.6rem] mb-[10%]`}><div><LogOut className="text-[17px] ml-[0.2rem]" /></div><div className={`font-[500] text-[14px] mx:scale-0 ml-[5%] text-center duration-300`}>Log out</div></li>
      </ul>
      <div
        onClick={() => (setOpen(!open))}
        className={` ${
          open && "px-[40%] pt-[10%] bg-white shadow-md w-[100%]"
        } sm:hidden hover:cursor-pointer mx:mx-[3rem] pb-[5%] duration-300 absolute bottom-0`}
      >
        <FaAngleLeft className={`${!open && "rotate-180 mx-[1.2rem]"} duration-300 text-xl text-[#000000] mx:hidden`} />
      </div>
    </div>
    // </div>
  );
};

export default SideNav;

