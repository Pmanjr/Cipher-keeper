import React, { useState, useEffect } from "react";
import { getCategory, updateCategory } from '../features/category/categoryActions';
import { useDispatch, useSelector } from "react-redux";
import toast from 'react-hot-toast';


const UpdateCategory = ({ openModal, setOpenModal, item }) => {

  const [name, setName] = useState(item.name)
  
  const dispatch = useDispatch();

  const { error } = useSelector(state => state.category);

  const handleChange = (e) => {
    setName(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCategory({id:item._id,name}));
    if (error) {
      toast.error(error)
    }
    setOpenModal(false);
    dispatch(getCategory());
  }

  useEffect(()=> {
    setName(item.name)
  }, [item.name])

  if (!openModal) return null
  return (
    <div
      className={`absolute font-poppins w-full bg-cover bg-center h-screen bg-opacity-[30%] top-0 left-0 flex justify-center px-8`}
    >
      <div className="relative flex w-[70%] flex-col shadow-md gap-y-4 px-[5%] pb-[2%] bg-white self-start mt-32 rounded-lg max-w-screen-md">
      <div className="mt-[4%]">Update Category</div>
        <div>
            <input placeholder="Enter category name" type="text" className="w-[100%] text-[12px] font-[500] px-[1%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]" name='name' onChange={handleChange} value={name} />
        </div>
        <hr className="border absolute bottom-[30%] border-[#E6EDFF] left-0 w-full" />
        <div className="flex gap-x-4 mt-[6%] justify-center">
          <button
            onClick={() => {
              setOpenModal(false);
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

export default UpdateCategory;
