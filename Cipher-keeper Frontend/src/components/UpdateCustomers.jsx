import React, { useState, useEffect } from "react";
import { updateCustomer } from "../features/customers/customersActions";
import { useDispatch, useSelector } from "react-redux";
import toast from 'react-hot-toast';


const UpdateProducts = ({ openModal, setOpenModal, item }) => {

  const [formData, setFormData] = useState({
    firstName: item.firstName,
    middleName: item.middleName,
    lastName: item.lastName,
    email: item.email,
    phone: item.phone
  });
  
  const dispatch = useDispatch();

  const { error } = useSelector(state => state.customers);

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCustomer({id:item._id, ...formData}));
    if (error) {
      toast.error(error)
    }
    setOpenModal(false);
  }

  useEffect(()=> {
    setFormData({
     firstName: item.firstName,
     middleName: item.middleName,
     lastName: item.lastName,
     email: item.email,
     phone: item.phone
    })
   }, [item])

  if (!openModal) return null
  return (
    <div
      className={`absolute font-poppins w-full bg-cover bg-center h-screen bg-black bg-opacity-[30%] top-0 left-0 flex justify-center px-8`}
    >
      <div className="mt-[10%] overflow-hidden sm:mt-[20%] w-[70%] sm:w-[100%] h-[50%] sm:h-[65%] shadow-md py-10 bg-white rounded-lg">
                <form action="">
                    <div className="mx-6 gap-x-6 w-[97%] flex md:items-center lg:items-center xl:items-center sm:gap-y-4 sm:flex-col">
                        <div className="flex justify-between gap-x-2 items-center w-[31%] sm:w-[90%]">
                        <label className="font-[500] text-[12px]">First name</label>
                        <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First name"
                        className="w-[70%] text-[12px] font-[500] px-[1%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
                        />
                        </div>
                        <div className="flex justify-between gap-x-2 items-center w-[31%] sm:w-[90%]">
                        <label className="font-[500] text-[12px]">Middle name</label>
                        <input
                        type="text"
                        name="middleName"
                        value={formData.middleName}
                        onChange={handleChange}
                        placeholder="Middle name"
                        className="w-[68%] text-[12px] font-[500] px-[1%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
                        />
                        </div>
                        <div className="flex justify-between gap-x-2 items-center w-[31%] sm:w-[90%]">
                        <label className="font-[500] text-[12px]">Last name</label>
                        <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last name"
                        className="w-[70%] text-[12px] font-[500] px-[1%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
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
                        <label className="font-[500] w-[25%] text-[12px] sm:w-[25%]">Phone number</label>
                        <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                        className="w-[75%] sm:w-[70%] text-[12px] font-[500] px-[1%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
                        />
                        </div>
                    </div>
                    <hr className="border border-[#E6EDFF] mt-[2%] w-[100%]" />
                    <div className="flex mt-[2%] gap-x-4 mx-6">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="border active:bg-black active:text-white hover:cursor-pointer active:border-black rounded-md px-3 py-2"
          >
            Cancel
          </button>

          <button onClick={handleSubmit} className="bg-[green] focus:transition duration-300 active:bg-white active:text-[green] px-5 py-2 hover:cursor-pointer rounded-md text-white">
            Save
          </button>
          </div>
                </form>
      </div>
    </div>
  );
};

export default UpdateProducts;
