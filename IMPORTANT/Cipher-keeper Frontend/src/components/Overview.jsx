import React, { useEffect } from "react";
import { ReactComponent as Clients } from "../assets/clients.svg";
import { ReactComponent as Bars } from "../assets/bars.svg";
import BarChart from "./BarChart";
import NavBar from "./NavBar";
import { useSelector, useDispatch } from "react-redux";
import { getPasswords } from "../features/passwords/passwordsActions";
import { getCustomers } from "../features/customers/customersActions";
import { BiSync } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { getCategory } from "../features/category/categoryActions";

const Overview = () => {
  const firstName = localStorage.getItem("user");
  const dispatch = useDispatch();

  const getUserPasswords = () => {
    dispatch(getPasswords());
  };

  useEffect(() => {
    getUserPasswords();
  }, []);

  const getUserCustomers = () => {
    dispatch(getCustomers());
  };

  useEffect(() => {
    getUserCustomers();
  }, []);

  const getCategories = () => {
    dispatch(getCategory());
  }

  useEffect(()=> {
    getCategories();
  }, [])

  const { categories } = useSelector((state) => state.category);
  const { passwords } = useSelector((state)=>state.passwords)

  return (
    <div className="font-poppins mr-[4%] mt-[2.2rem] w-[90%]">
      <NavBar
        welcome={`Welcome to Cipher-keeper, ${firstName.split(" ")[0]}`}
        message="Here is the information about your account"
      />
      <div className="sm:flex sm:w-[100%] sm:justify-between sm:mx-[5%]">
        <div className="flex font-poppins sm:flex-col mt-[5%] sm:w-[48%]">
          <div className="flex w-[50%] sm:w-[100%] sm:mb-6 shadow-md items-center md:mr-[2%] lg:mr-[2%] xl:mr-[2%] justify-between px-[2%] py-1 rounded-lg bg-[white]">
            <div className="flex flex-col">
              <span className="font-[600] text-[22px]">{passwords && !passwords[0]?.message ? passwords.length : "0"}</span>
              <span className="font-[400] text-[14px] sm:text-[12px]">
                All Passwords
              </span>
            </div>
            <div className="shadow-md p-2 rounded-md">
              <Clients />
            </div>
          </div>
          <div className="flex w-[50%] sm:w-[100%] sm:mb-6 shadow-md justify-between items-center md:mr-[2%] lg:mr-[2%] xl:mr-[2%] px-[2%] py-1 rounded-lg bg-[white]">
            <div className="flex flex-col">
              <span className="font-[600] text-[22px]">
                {categories && !categories[0]?.message ? categories.length : "0"}
              </span>
              <span className="font-[400] text-[14px] sm:text-[12px]">
                All Category
              </span>
            </div>
            <div className="shadow-md p-2 rounded-md">
              <RiLockPasswordFill className='text-[18px]' />
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-col sm:items-center">
        <div className="text-[white] font-poppins px-5 bg-[#263238] w-[70%] sm:w-[100%] sm: mt-[3%] sm:ml-[10%] rounded-l-lg sm:rounded-lg">
          <div>
            <BarChart />
          </div>
        </div>
        <div className="text-[white] font-poppins md:py-2 lg:py-2 xl:py-2 md:px-5 lg:px-5 xl:px-5 sm:ml-[10%] md:bg-[#263238] lg:bg-[#263238] xl:bg-[#263238] w-[30%] sm:w-[100%] height-[181px] mt-[3%] rounded-r-lg sm:rounded-lg">
          <div className="font-[500] text-[12px] sm:flex sm:flex-col sm:gap-y-4">
            <div className="sm:bg-[#263238] sm:rounded-lg sm:px-4 sm:py-4 sm:justify-between sm:items-center sm:flex">
              <p className="">Saved Passwords</p>
              <hr className="mr-[10%] sm:mr-[0%] mt-[4%] sm:hidden" />
              <p className="mt-[2%]">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
