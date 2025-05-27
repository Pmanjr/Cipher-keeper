import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../features/customers/customersActions";

const CreateInvoice = () => {
  // eslint-disable-next-line
  const [formData, setFormData] 
  = useState({
    customerId: "",
    invoiceDate: '',
    dueDate: '',
  })
  const dispatch = useDispatch();

  const getUserCustomers = () => {
    dispatch(getCustomers())
  }

  useEffect(() => {
    getUserCustomers();
    // eslint-disable-next-line
  }, [])

  const { customers } = useSelector((state) => (state.customers))

  const handleChange = (e) => {
    console.log(e.target.value)
  }

  const newDate = new Date();
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  
  const date = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  return (
    <div className="shadow-md h-[26rem] sm:h-[18rem] font-poppins rounded-lg bg-white p-4">
      <p>Create invoice</p>
      <hr />
      <form>
        <div>
          <div className="border flex flex-col gap-y-4 border-black rounded-lg p-2 mt-3 sm:flex sm:flex-col sm:gap-y-2">
            <select onChange={handleChange} name="Select customer" id="customer" className="px-1 font-[500] text-[12px] focus:outline-none">
              <option value="">
                Select customer <FaChevronDown />
              </option>
              {customers && !customers[0]?.message && customers.map((item) => {
                return (
                  <option key={item._id} value={item._id}>
                    {item.firstName} {item.lastName}
                  </option>
                );
              })}
            </select>
            <label className="px-2 text-[12px] font-bold">Invoice Date:</label>
            <input onChange={handleChange} type="date" name="invoiceDate" min={date} max="2030-12-31" placeholder="Invoice Date" className="px-2 font-[500] text-[12px] focus:outline-none" />
            <label className="px-2 text-[12px] font-bold">Due Date:</label>
            <input onChange={handleChange} type="date" name="dueDate" min={date} max="2030-12-31" placeholder="Due Date" className="px-2 font-[500] text-[12px] focus:outline-none" />
          </div>
        </div>
        <button className="hover:cursor-pointer active:bg-white text-center rounded-lg w-[35%] mt-[45%] sm:mt-[5%] ml-[60%] text-white font-[400] text-[14px] p-2 bg-[#263238]">
          Next
        </button>
      </form>
    </div>
  );
};

export default CreateInvoice;
