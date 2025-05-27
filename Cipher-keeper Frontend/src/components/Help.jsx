import React, { useState } from "react";
import NavBar from "./NavBar";
import HelpOverview from "./HelpOverview";
import HelpCallUs from "./HelpCallUs";
import HelpCustomerRep from "./HelpCustomerRep";
import HelpTandC from "./HelpTandC";
import HelpFaqs from "./HelpFaqs";
// import { Link } from "react-router-dom";

const Help = () => {
  const [help, setHelp] = useState({
    callUs: false,
    chatWithUs: false,
    faq: false,
    customerRep: false,
    termsAndConditions: false,
  });
  localStorage.setItem("help", JSON.stringify(help));
  const state = JSON.parse(localStorage.getItem("help"));
  return (
    <div className="w-[90%] mt-[2.2rem] mr-[4%] font-poppins">
      <NavBar />
      <div className="flex flex-col mt-[4%]">
        <span className="font-[500] text-[24px] sm:mx-[5%]">Help Center</span>
        <div className="my-2 flex gap-x-12 justify-between sm:w-[100%] sm:mx-[5%]">
          <div className="w-[30%]">
            <p
              // eslint-disable-next-line
              onClick={() => (
                setHelp({
                  ...help,
                  callUs: true,
                  chatWithUs: false,
                  faq: false,
                  customerRep: false,
                  termsAndConditions: false,
                  // eslint-disable-next-line
                }),
                localStorage.setItem(
                  "help",
                  JSON.stringify({
                    callUs: true,
                    chatWithUs: false,
                    faq: false,
                    customerRep: false,
                    termsAndConditions: false,
                  })
                )
              )}
              className={`w-[100%] ${
                state.callUs ? "bg-[#263238] text-white" : "text-black bg-white"
              } duration-300 p-3 hover:cursor-pointer font-[500] text-[14px] rounded-md shadow-md`}
            >
              Call us
            </p>
            <p
              className={`w-[100%] ${
                state.chatWithUs
                  ? "bg-[#263238] text-white"
                  : "text-black bg-white"
              } duration-300 p-3 mt-2 hover:cursor-pointer font-[500] text-[14px] rounded-md shadow-md`}
              // eslint-disable-next-line
              onClick={() => (
                setHelp({
                  ...help,
                  callUs: false,
                  chatWithUs: true,
                  faq: false,
                  customerRep: false,
                  termsAndConditions: false,
                }),
                localStorage.setItem(
                  "help",
                  JSON.stringify({
                    callUs: false,
                    chatWithUs: true,
                    faq: false,
                    customerRep: false,
                    termsAndConditions: false,
                  })
                )
              )}
            >
              Chat with us
            </p>
            <p
              className={`w-[100%] ${
                state.faq ? "bg-[#263238] text-white" : "text-black bg-white"
              } duration-300 p-3 mt-2 hover:cursor-pointer font-[500] text-[14px] rounded-md shadow-md`}
              onClick={() => (
                setHelp({
                  ...help,
                  callUs: false,
                  chatWithUs: false,
                  faq: true,
                  customerRep: false,
                  termsAndConditions: false,
                }),
                localStorage.setItem(
                  "help",
                  JSON.stringify({
                    callUs: false,
                    chatWithUs: false,
                    faq: true,
                    customerRep: false,
                    termsAndConditions: false,
                  })
                )
              )}
            >
              FAQs
            </p>
            <p
              className={`w-[100%] ${
                state.customerRep
                  ? "bg-[#263238] text-white"
                  : "text-black bg-white"
              } duration-300 p-3 mt-2 hover:cursor-pointer font-[500] text-[14px] rounded-md shadow-md`}
              onClick={() => (
                setHelp({
                  ...help,
                  callUs: false,
                  chatWithUs: false,
                  faq: false,
                  customerRep: true,
                  termsAndConditions: false,
                }),
                localStorage.setItem(
                  "help",
                  JSON.stringify({
                    callUs: false,
                    chatWithUs: false,
                    faq: false,
                    customerRep: true,
                    termsAndConditions: false,
                  })
                )
              )}
            >
              Customer representative
            </p>
            <p
              className={`w-[100%] ${
                state.termsAndConditions
                  ? "bg-[#263238] text-white"
                  : "text-black bg-white"
              } duration-300 p-3 mt-2 hover:cursor-pointer font-[500] text-[14px] rounded-md shadow-md`}
              onClick={() => (
                setHelp({
                  ...help,
                  callUs: false,
                  chatWithUs: false,
                  faq: false,
                  customerRep: false,
                  termsAndConditions: true,
                }),
                localStorage.setItem(
                  "help",
                  JSON.stringify({
                    callUs: false,
                    chatWithUs: false,
                    faq: false,
                    customerRep: false,
                    termsAndConditions: true,
                  })
                )
              )}
            >
              Terms and Conditions
            </p>
          </div>
          <div className="w-[65%] bg-white shadow-md rounded-lg p-10 sm:p-4">
            {state.callUs ? (
              <HelpCallUs />
            ) : state.customerRep ? (
              <HelpCustomerRep />
            ) : state.termsAndConditions ? (
              <HelpTandC />
            ) : state.faq ? (
              <HelpFaqs />
            ) : (
              <HelpOverview />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
