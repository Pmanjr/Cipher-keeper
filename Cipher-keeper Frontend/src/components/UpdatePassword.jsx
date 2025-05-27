import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from 'react-hot-toast';
import { getCategory } from "../features/category/categoryActions";
import { getPasswords, updatePassword } from "../features/passwords/passwordsActions"


const UpdatePassword = ({ openModal, setOpenModal, item }) => {

  const [formData, setFormData] = useState({
    fancyName: "",
    categoryId: "",
    password: "",
    username: "",
    description: "",
  });

  const dispatch = useDispatch();

  const { error } = useSelector(state => state.passwords);
  const { categories } = useSelector(state => state.category);

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setFormData({ ...formData, [name]: value });
  }

  const getUserCategory = () => {
    dispatch(getCategory());
  }

  useEffect(() => {
    getUserCategory();
    // eslint-disable-next-line
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePassword({ id: item._id, ...formData }));
    if (error) {
      toast.error(error)
    }
    setOpenModal(false);
    dispatch(getPasswords());
  }

  useEffect(() => {
    setFormData({
      fancyName: item.fancyName,
      categoryId: item?.category?._id,
      password: item.password,
      username: item.username,
      description: item.description
    })
  }, [item?.category?._id, item.fancyName, item.password, item.username, item.description])

  if (!openModal) return null
  return (
    <div
      className={`absolute font-poppins w-full bg-cover bg-center h-screen bg-black bg-opacity-[30%] top-0 left-0 flex justify-center px-8`}
    >
      <div className="relative flex w-[70%] sm:w-[90%] flex-col shadow-md gap-y-4 pr-[5%] pl-[2%] pb-[2%] bg-white self-start mt-32 rounded-lg max-w-screen-md">
        <div className="my-[4%] text-[16px]">Update Password</div>
        <form>
          <div className="mx-6 gap-x-4 w-[100%] flex sm:gap-y-2 sm:flex-col justify-between">
            <div className="w-[48%] sm:w-[100%] flex flex-col justify-between">
              <label className="font-[500] text-[12px] w-[20%]">Link</label>
              <input
                type="text"
                value={formData.fancyName}
                name="fancyName"
                onChange={handleChange}
                placeholder="Link"
                className="w-[100%] text-[12px] font-[500] px-[1%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
              />
            </div>
            <div className="w-[48%] sm:w-[100%] flex flex-col justify-between">
              <label className="font-[500] text-[12px] w-[20%] sm:w-[30%]">Category</label>
              <select
                value={formData.categoryId}
                onChange={(e) => (setFormData({ ...formData, categoryId: e.target.value }))}
                name="categoryId"
                className="w-[100%] sm:w-[70%] text-[12px] font-[500] px-[1%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
              >
                <option value="">Select category</option>
                {categories && categories.map((item) => (
                  <option key={item._id} value={item._id}>{item.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex w-[100%] sm:flex-col sm:gap-y-3 mx-6 mt-[2%] justify-between">
            <div className="flex flex-col justify-between w-[48%] sm:w-[100%]">
              <label className="font-[500] w-[20%] text-[12px] md:mr-[21%] lg:mr-[21%] xl:mr-[21%]">Password</label>
              <input
                type="text"
                value={formData.password}
                name="password"
                onChange={handleChange}
                placeholder="Password"
                className="w-[100%] text-[12px] font-[500] md:mr-[5%] lg:mr-[5%] xl:mr-[5%] px-[2%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
              />
            </div>
            <div className="flex flex-col justify-between w-[48%] sm:w-[100%]">
              <label className="font-[500] mr-[5%] text-[12px]">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className="px-[2%] text-[12px] font-[500] md:mr-[5%] lg:mr-[5%] xl:mr-[5%] w-[100%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
              />
            </div>
          </div>
          <div className="flex w-[100%] flex-col mx-6 justify-between mt-[2%]">
            <label className="font-[500] text-[12px] sm:w-[25%]">Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-[100%] sm:w-[100%] text-[12px] font-[500] px-[2%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
            />
          </div>
          <hr className="border absolute bottom-[20%] border-[#E6EDFF] left-0 w-full" />
          <div className="flex gap-x-4 justify-center mt-[10%]">
            <button
              onClick={()=>setOpenModal(false)}
              className="border active:bg-black active:text-white hover:cursor-pointer active:border-black rounded-md px-3 py-1"
            >
              Cancel
            </button>

            <button onClick={handleSubmit} disabled={!formData.fancyName && !formData.categoryId && !formData.description && !formData.password && !formData.username} className="bg-[green] focus:transition duration-300 active:bg-white active:text-[green] px-5 py-1 hover:cursor-pointer rounded-md text-white">
              Save
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
