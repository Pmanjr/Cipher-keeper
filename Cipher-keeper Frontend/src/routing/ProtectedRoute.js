import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
// import { ReactComponent as FeatureImage } from "../assets/featureimage.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
// import { Input, Button } from "antd";
// import { BsFacebook } from "react-icons/bs";
// import { BsTwitter } from "react-icons/bs";
// import { BsYoutube } from "react-icons/bs";
// import { BsInstagram } from "react-icons/bs";
import Section1 from "./Section1";

const ProtectedRoute = () => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const user = localStorage.getItem("token");

  const showMenu = () => {
    setActive(!active);
  };

  if (user === null) {
    return (
      <div id='landingPage' className="font-poppins backdrop-filter backdrop-blur-lg">
        <div className="flex bg-black text-white justify-between py-3 px-14 items-center sticky top-0 z-30">
          <div className="font-nova text-[32px]">
            <Link
              className="text-white hover:text-white"
              to="top"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Cipher-keeper
            </Link>
          </div>
          <div className="flex sm:hidden gap-x-4">
            <span
              className="hover:cursor-pointer
            "
            >
              <Link
                className="text-white select-none hover:text-white"
                to="overview"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Overview
              </Link>
            </span>
            <span>
              <Link
                className="text-white select-none hover:text-white"
                to="features"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Features
              </Link>
            </span>
            {/* <span>
              <Link
                className="text-white select-none hover:text-white"
                to="pricing"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Pricing
              </Link>
            </span> */}
            <span>
              <Link
                className="text-white select-none hover:text-white"
                to="faqs"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                FAQs
              </Link>
            </span>
          </div>
          <div className="flex sm:hidden gap-x-2">
            <button
              onClick={() => navigate("/login")}
              className="px-2 py-1 select-none rounded-md"
            >
              Log in
            </button>
            <button
              onClick={() => navigate("signup")}
              className="px-2 py-1 select-none text-white bg-purple-500 rounded-md"
            >
              Create an account
            </button>
          </div>

          <div className="md:hidden lg:hidden xl:hidden">
            <GiHamburgerMenu
              className="text-[32px] cursor-pointer"
              onClick={showMenu}
            />
          </div>
        </div>
        <ul
          className={
            active
              ? "fixed inset-0 z-30 bg-black/40 backdrop-blur-md justify-center right-1/4 gap-3 flex flex-col items-center md:hidden lg:hidden xl:hidden text-white text-[18px]"
              : "hidden"
          }
        >
          <AiOutlineClose
            className="text-[28px] absolute top-4 right-4 hover:cursor-pointer"
            onClick={showMenu}
          />
          <li className="hover:cursor-pointer">
            <Link
              onClick={showMenu}
              className="text-white hover:text-white"
              to="overview"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Overview
            </Link>
          </li>
          <li className="hover:cursor-pointer">
            <Link
              onClick={showMenu}
              className="text-white hover:text-white"
              to="features"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Features
            </Link>
          </li>
          {/* <li className="hover:cursor-pointer">
            <Link
              onClick={showMenu}
              className="text-white hover:text-white"
              to="pricing"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Pricing
            </Link>
          </li> */}
          <li className="hover:cursor-pointer">
            <Link
              onClick={showMenu}
              className="text-white hover:text-white"
              to="faqs"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              FAQs
            </Link>
          </li>
          <li
            className="hover:cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Log in
          </li>
          <li
            className="hover:cursor-pointer"
            onClick={() => navigate("signup")}
          >
            Sign up
          </li>
        </ul>
        <div
          id="top"
          className="flex py-[8%] text-white items-center flex-col"
        >
          <span className="font-[700] text-center w-[60%] sm:w-[85%] sm:text-[24px] text-[32px]">
          A simple but powerful password management app to help you keep track of your online accounts.
          </span>
          {/* <span className="text-[18px] sm:text-[16px] text-center w-[70%] sm:w-[85%] font-[400] mt-6">
            Allows you to create, send, and share invoices in an instant. Unlike
            other inviting apps, Titaja gives you full control over your
            professional image and branding. We believe everyone should be able
            to create an invoice in less than 2 minutes
          </span> */}
          <button onClick={() => navigate("/login")} className="shadow shadow-purple-100 text-[18px] rounded-xl px-4 py-3 sm:px-3 sm:py-2 bg-purple-500 mt-6">Get started</button>
        </div>
        <Section1 />
        <div className=" pb-[30%] relative" id="features">
          {/* <div className="text-[32px] select-none pt-[4%] sm:pt-[12%] text-center text-white font-[700]">
            FEATURES
          </div>
           <div className="flex sm:hidden relative rounded-3xl justify-between gap-x-[10%] px-[5%] w-[90%] h-[15rem] mt-[5%] bg-white shadow-lg mx-auto overflow-visible">
            <div className="rounded-t-3xl absolute bg-[#e4e4e4] bottom-0 h-[20rem] w-[18rem] px-6">
              <div className="w-12 h-12 rounded-full bg-white mt-[4rem] mb-[1rem]"></div>
              <p className="text-[20px] font-[600]">Add a Product</p>
              <p className="">
                With a super easy to use platform, Titaja will let you add,
                edit, and manage all your products with ease.
              </p>
            </div>
            <div className="w-[30%] mt-[5%] ml-[40%]">
              <p className="text-[16px] font-[600]">Add a Customer</p>
              <p>
                Titaja is a simple & convenient app which helps you add all your
                customers in one app. It gives you an overview of their accounts
                and transactions.
              </p>
            </div>
            <div className="w-[30%] mt-[5%]">
              <p className="text-[16px] font-[600]">Create an Invoice</p>
              <p>
                Create an invoice in seconds. It's simple, modern and extremely
                quick to use.
              </p>
            </div>
          </div>
          <div className="my-[3%] sm:hidden flex items-center mx-[12%]">
            <div className="relative rounded-full ml-[] border border-white w-5 h-5">
              <div className="absolute top-[18%] left-[18%] rounded-full  bg-white w-3 h-3"></div>
            </div>
            <hr className="border w-[100%] border-white" />
          </div>
          <FeatureImage className="mx-[12%] sm:hidden absolute" />
          <div className="relative md:hidden lg:hidden xl:hidden">
            <div className="rounded-t-3xl bg-[#e4e4e4] h-[15rem] w-[15rem] px-6 pt-[5%] mx-auto">
              <div className="w-12 h-12 rounded-full bg-white mb-[1rem]"></div>
              <p className="text-[20px] font-[600]">Add a Product</p>
              <p className="">
                With a super easy to use platform, Titaja will let you add,
                edit, and manage all your products with ease.
              </p>
            </div>
            <div className="flex rounded-3xl justify-between gap-x-[10%] px-[5%] w-[90%] h-[15rem] bg-white shadow-lg mx-auto overflow-visible">
              <div className="mt-[5%] w-[50%]">
                <p className="text-[14px] font-[600]">Add a Customer</p>
                <p className="text-[12px]">
                  Titaja is a simple & convenient app which helps you add all
                  your customers in one app. It gives you an overview of their
                  accounts and transactions.
                </p>
              </div>
              <div className="mt-[5%] w-[50%]">
                <p className="text-[14px] font-[600]">Create an Invoice</p>
                <p className="text-[12px]">
                  Create an invoice in seconds. It's simple, modern and
                  extremely quick to use.
                </p>
              </div>
            </div>
            <div className="my-[3%] flex items-center mx-[12%]">
              <div className="relative rounded-full ml-[] border border-white w-5 h-5">
                <div className="absolute top-[18%] left-[18%] rounded-full  bg-white w-3 h-3"></div>
              </div>
              <hr className="border w-[100%] border-white" />
            </div>
            <FeatureImage className="mx-auto w-[90%] left-[5%] top-[75%] absolute" />
          </div> */}
        </div>
       {/* <div>
       <div className="relative sm:hidden bg-[#242424] h-[25rem] mt-[30rem]">
           <FeatureDashBoard className="absolute left-[7rem] mx:left-[4rem] bottom-0" />
           <FeatureSetting className="absolute top-[-7rem] mx:left-[24rem] left-[34rem]" />
           <FeatureDashBoard className="absolute right-[7rem] mx:right-[4rem] bottom-0" />
         </div>
        <div className="relative md:hidden lg:hidden xl:hidden bg-[#242424] h-[18rem] mt-[30rem]">
          <SmDashboard className="absolute w-[40%] left-[1rem] bottom-[-5%]" />
          <SmSettings className="absolute w-[40%] bottom-[-5%] right-[1rem]" />
        </div>
       </div> */}
        {/* <div id="pricing">
          <div className="text-[32px] select-none font-[700] text-black text-center sm:pt-[2rem] pt-[10rem]">
            OUR PRICING PLANS
          </div>
          <div className="flex sm:flex-col sm:gap-y-4 justify-between gap-x-[7%] mx-[8%] my-[3%]">
            <div className="flex hover:text-white hover:bg-[#242424] hover:border-none flex-col rounded-xl border border-[#242424] p-5">
              <span className="text-[24px] font-[700]">Basic Plan</span>
              <span className="text-[18px] font-[600]">Features</span>
              <div className="flex justify-between items-center mt-[2%]">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <GiCheckMark className="text-[green]" />
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <GiCheckMark className="text-[green]" />
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <GiCheckMark className="text-[green]" />
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <GiCheckMark className="text-[green]" />
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <GiCheckMark className="text-[green]" />
              </div>
              <button className="w-[60%] hover:bg-white hover:text-[#242424] mx-[20%] mt-[2%] rounded-xl text-white py-2 bg-[#242424]">
                Select Plan
              </button>
            </div>
            <div className="flex hover:text-white hover:bg-[#242424] hover:border-none flex-col rounded-xl border border-[#242424] p-5">
              <span className="text-[24px] font-[700]">Premium Plan</span>
              <span className="text-[18px] font-[600]">Features</span>
              <div className="flex justify-between items-center mt-[2%]">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <GiCheckMark className="text-[green]" />
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <GiCheckMark className="text-[green]" />
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <GiCheckMark className="text-[green]" />
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <GiCheckMark className="text-[green]" />
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <GiCheckMark className="text-[green]" />
              </div>
              <button className="w-[60%] hover:bg-white hover:text-[#242424] mx-[20%] mt-[2%] rounded-xl text-white py-2 bg-[#242424]">
                Select Plan
              </button>
            </div>
            <div className="flex hover:text-white hover:bg-[#242424] hover:border-none flex-col rounded-xl border border-[#242424] p-5">
              <span className="text-[24px] font-[700]">Standard Plan</span>
              <span className="text-[18px] font-[600]">Features</span>
              <div className="flex justify-between items-center mt-[2%]">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <GiCheckMark className="text-[green]" />
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <GiCheckMark className="text-[green]" />
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <GiCheckMark className="text-[green]" />
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <GiCheckMark className="text-[green]" />
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <GiCheckMark className="text-[green]" />
              </div>
              <button className="w-[60%] hover:bg-white hover:text-[#242424] mx-[20%] mt-[2%] rounded-xl text-white py-2 bg-[#242424]">
                Select Plan
              </button>
            </div>
          </div>
        </div> */}
        {/* <div className="mx-[12%]" id="faqs">
          <div className="uppercase text-[32px] font-[700] select-none text-center text-[#000000] mt-[4%]">
            Frequently Asked Questions
          </div>
          <HelpFaqs />
        </div> */}
        {/* <div className="text-center mt-[4%] select-none bg-[#5b5b5b] text-[48px] font-[700] p4-6 text-white">
          Titaja
        </div> */}
        <div className=" mt-[20%]">
          {/* <div className="flex sm:flex-col sm:gap-y-4 items-center pt-[4%] px-[10%] justify-between">
            <div className="flex flex-col gap-y-4 text-white">
              <span className="text-[24px] font-[700]">
                Start your journey with us today
              </span>
              <span className="text-[16px] font-[400]">
                Create your account with Cipher-keeper now, and start managing your
                business activities.
              </span>
            </div>
            <button
              onClick={() => navigate("/signup")}
              className="text-[#242424] bg-white px-6 py-2 rounded-lg"
            >
              Create an account
            </button>
          </div>
          <hr className="my-[3%] mx-[10%]" />
          <div className="flex justify-between px-[10%] text-white">
            <div>
              <p className="text-[18px] font-[700]">Menu</p>
              <ul>
                <li className="hover:cursor-pointer">Features</li>
                <li className="hover:cursor-pointer">Features</li>
                <li className="hover:cursor-pointer">Features</li>
                <li className="hover:cursor-pointer">Features</li>
                <li className="hover:cursor-pointer">Features</li>
              </ul>
            </div>
            <div>
              <p className="text-[18px] font-[700]">Menu</p>
              <ul>
                <li className="hover:cursor-pointer">Features</li>
                <li className="hover:cursor-pointer">Features</li>
                <li className="hover:cursor-pointer">Features</li>
                <li className="hover:cursor-pointer">Features</li>
                <li className="hover:cursor-pointer">Features</li>
              </ul>
            </div>
            <div>
              <p className="text-[18px] font-[700]">Menu</p>
              <ul>
                <li className="hover:cursor-pointer">Features</li>
                <li className="hover:cursor-pointer">Features</li>
                <li className="hover:cursor-pointer">Features</li>
                <li className="hover:cursor-pointer">Features</li>
                <li className="hover:cursor-pointer">Features</li>
              </ul>
            </div>
            <div>
              <p className="text-[18px] font-[700]">Support</p>
              <ul>
                <li className="hover:cursor-pointer">Features</li>
                <li className="hover:cursor-pointer">Features</li>
                <li className="hover:cursor-pointer">Features</li>
                <li className="hover:cursor-pointer">Features</li>
                <li className="hover:cursor-pointer">Features</li>
              </ul>
            </div>
            <div className="w-[30%] sm:hidden">
              <p className="text-[18px] font-[700]">
                Subscribe to our newsletter
              </p>
              <Input.Group compact>
                <Input
                  style={{
                    width: "70%",
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px",
                    color: "white",
                    backgroundColor: "#242424",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                  }}
                  defaultValue="Enter your email"
                />
                <Button
                  style={{
                    borderTopRightRadius: "10px",
                    borderBottomRightRadius: "10px",
                    color: "#242424",
                    height: "36px",
                  }}
                  type="light"
                >
                  Subscribe
                </Button>
              </Input.Group>
              <p className="text-[18px] mt-[4%] font-[700]">Connect with us</p>
              <div className="flex mt-2 text-[12px] font-[400] gap-x-4">
                <BsFacebook className="text-white text-[20px]" />
                <BsYoutube className="text-white text-[20px]" />
                <BsInstagram className="text-white text-[20px]" />
                <BsTwitter className="text-white text-[20px]" />
              </div>
            </div>
          </div>
          <div className="text-white text-center md:hidden lg:hidden xl:hidden">
              <p className="text-[18px] font-[700]">
                Subscribe to our newsletter
              </p>
              <Input.Group compact>
                <Input
                  style={{
                    width: "70%",
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px",
                    color: "white",
                    backgroundColor: "#242424",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                  }}
                  defaultValue="Enter your email"
                />
                <Button
                  style={{
                    borderTopRightRadius: "10px",
                    borderBottomRightRadius: "10px",
                    color: "#242424",
                    height: "36px",
                  }}
                  type="light"
                >
                  Subscribe
                </Button>
              </Input.Group>
              <p className="text-[18px] mt-[4%] font-[700]">Connect with us</p>
              <div className="flex mt-2 ml-[37%] text-[12px] font-[400] gap-x-4">
                <BsFacebook className="text-white text-[20px]" />
                <BsYoutube className="text-white text-[20px]" />
                <BsInstagram className="text-white text-[20px]" />
                <BsTwitter className="text-white text-[20px]" />
              </div>
            </div>
          <hr className="mx-[10%] my-[3%]" /> */}
          <p className="text-white select-none text-[16px] font-[700] text-center pb-[3%]">
            &copy; Cipher-keeper Ltd 2022
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
};

export default ProtectedRoute;
