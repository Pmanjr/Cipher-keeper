import React from "react";
import NavBar from "./NavBar";
import { createCategory } from "../features/category/categoryActions";
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const NewCategory = ({ formData, setFormData }) => {
 
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.category);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCategory(formData));
    if (error) {
      toast.error(error)
    }
    toast.success('Category added successfully')
    setFormData({
      name: "",
    });
  }

  const handleCancel = (e) => {
    e.preventDefault();
    setFormData({name: ""})
  }
  
  return (
    <div className="w-[90%] mt-[2.2rem] mr-[4%] font-poppins">
      <NavBar />
      <div className="flex flex-col mt-[4%] sm:text-center">
        <span className="font-[500] text-[24px]">Add Password category</span>
      </div>
      <div className="mt-[4%] w-[100%] sm:ml-[5%] shadow-md py-10 bg-white rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="mx-6 gap-x-10 flex items-center">
            <label className="font-[500] text-[12px]">Title</label>
            <input
              type="text"
              placeholder="Title"
              value={formData.name}
              name="name"
              onChange={handleChange}
              className="w-[70%] text-[12px] font-[500] px-[1%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
            />
            </div>
          <div className="flex mt-[2%] mx-6">
            <input
              type="submit"
              value="Save"
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
  );
};

export default NewCategory;
