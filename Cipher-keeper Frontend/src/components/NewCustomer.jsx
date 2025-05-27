import React, { useState } from "react";
import NavBar from "./NavBar";
import { useDispatch, useSelector } from "react-redux";
import { createCustomer } from "../features/customers/customersActions";
import toast from "react-hot-toast";


const NewCustomer = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        phone: ""
    });

    const dispatch = useDispatch();

    const { error } = useSelector((state) => state.customers)

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createCustomer(formData))
        if (error) {
          toast.error(error)
        }
        else{
        toast.success(`${formData.firstName} added successfully`)
        }
        setFormData({
            ...formData,
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            phone: ""
        });
      };
    
      const handleCancel = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            phone: ""
        });
      }

    return (
        <div className="w-[90%] mt-[2.2rem] mr-[4%] font-poppins">
            <NavBar />
            <div className="flex flex-col mt-[4%] sm:text-center">
                <span className="font-[500] text-[24px]">Add new customer</span>
                <span className="font-[400] text-[14px] text-[#7C8DB5]">To start creating an invoice, please set up your account</span>
            </div>
            <div className="mt-[4%] w-[100%] sm:mx-[5%] shadow-md py-10 bg-white rounded-lg">
                <form action="">
                    <div className="mx-6 gap-x-6 flex md:items-center lg:items-center xl:items-center sm:gap-y-4 sm:flex-col">
                        <div className="flex justify-between gap-x-2 items-center w-[31%] sm:w-[100%]">
                        <label className="font-[500] text-[12px]">First name</label>
                        <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First name"
                        className="w-[75%] text-[12px] font-[500] px-[1%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
                        />
                        </div>
                        <div className="flex justify-between gap-x-2 items-center w-[31%] sm:w-[100%]">
                        <label className="font-[500] text-[12px]">Middle name</label>
                        <input
                        type="text"
                        name="middleName"
                        value={formData.middleName}
                        onChange={handleChange}
                        placeholder="Middle name"
                        className="w-[72%] text-[12px] font-[500] px-[1%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
                        />
                        </div>
                        <div className="flex justify-between gap-x-2 items-center w-[31%] sm:w-[100%]">
                        <label className="font-[500] text-[12px]">Last name</label>
                        <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last name"
                        className="w-[75%] text-[12px] font-[500] px-[1%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
                        />
                        </div>
                    </div>
                    <div className="mx-6 mt-6 sm:mt-4 gap-x-2 sm:gap-y-4 flex sm:flex-col items-center justify-between">
                        <div className="flex justify-between w-[48%] sm:w-[100%] items-center">
                        <label className="flex font-[500] w-[20%] text-[12px]">Email</label>
                        <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-[80%] text-[12px] font-[500] px-[1%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
                        />
                        </div>
                        <div className="flex justify-between w-[48%] sm:w-[100%] items-center">
                        <label className="font-[500] w-[20%] text-[12px] sm:w-[25%]">Phone number</label>
                        <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                        className="w-[80%] sm:w-[75%] text-[12px] font-[500] px-[1%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
                        />
                        </div>
                    </div>
                    <hr className="border border-[#E6EDFF] mt-[2%] w-[100%]" />
                    <div className="flex mt-[2%] mx-6">
                        <input
                        type="button"
                        value="Save"
                        onClick={handleSubmit}
                        className="px-[3%] py-[0.7%] hover:cursor-pointer hover:bg-white hover:border hover:border-[#263238] hover:text-[#263238] rounded-lg bg-[#263238] text-white text-[14px] font-[400] mr-[1%]"
                        />
                        <input
                        type="button"
                        value="Cancel"
                        onClick={handleCancel}
                        className="px-[2.5%] py-[0.7%] hover:cursor-pointer hover:bg-[#263238] hover:text-[#ffffff] rounded-lg border border-[#263238] text-[#263238] text-[14px] font-[400]"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewCustomer;