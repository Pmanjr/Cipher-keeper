import React, { useState } from "react";
import { createCategory, getCategory } from "../features/category/categoryActions";
import { useDispatch, useSelector } from "react-redux";
import toast from 'react-hot-toast';


const AddCategory = ({ openAddCategoryModal, setOpenAddCategoryModal }) => {

  const [name, setName] = useState('')
  
  const dispatch = useDispatch();

  const { error } = useSelector(state => state.category);

  const handleChange = (e) => {
    setName(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCategory({name}));
    if (error) {
      toast.error(error)
    }
    setOpenAddCategoryModal(false);
    dispatch(getCategory());
  }
  if (!openAddCategoryModal) return null
  return (
    <div
      className={`absolute font-poppins w-full bg-cover bg-center h-screen bg-black bg-opacity-[30%] top-0 left-0 flex justify-center px-8`}
    >
      <div className="relative flex w-[70%] sm:w-[90%] flex-col shadow-md gap-y-4 px-[5%] pb-[2%] bg-white self-start mt-32 rounded-lg max-w-screen-md">
      <div className="mt-[4%]">Add Category</div>
        <div>
            <input placeholder="Enter category name" type="text" className="w-[100%] text-[12px] font-[500] px-[1%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]" name='name' onChange={handleChange} value={name} />
        </div>
        <hr className="border absolute bottom-[30%] border-[#E6EDFF] left-0 w-full" />
        <div className="flex gap-x-4 mt-[6%] justify-center">
          <button
            onClick={() => {
              setOpenAddCategoryModal(false);
            }}
            className="border active:bg-black active:text-white hover:cursor-pointer active:border-black rounded-md px-3 py-1"
          >
            Cancel
          </button>

          <button onClick={handleSubmit} disabled={!name} className="bg-[green] focus:transition duration-300 active:bg-white active:text-[green] px-5 py-1 hover:cursor-pointer rounded-md text-white">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
