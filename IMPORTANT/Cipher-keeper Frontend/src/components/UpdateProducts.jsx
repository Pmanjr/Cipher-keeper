import React, { useState, useEffect } from "react";
import { updateProduct } from '../features/passwords/passwordsActions';
import { getCategory } from "../features/category/categoryActions";
import { useDispatch, useSelector } from "react-redux";
import toast from 'react-hot-toast';


const UpdateProducts = ({ openModal, setOpenModal, item }) => {

    const [formData, setFormData] = useState({
        name: "",
        categoryId: "",
        price: 0,
        numberInStock: 0,
        tag: "",
        description: "",
        trackQuantity: false,
      });
  
  const dispatch = useDispatch();

  const { error } = useSelector(state => state.products);
  const { category } = useSelector(state => state.category);

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setFormData({ ...formData, [name]: value });
  }

  const getUserCategory = () => {
    dispatch(getCategory());
  }

  useEffect(()=> {
    getUserCategory();
    // eslint-disable-next-line
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({id:item._id, ...formData}));
    if (error) {
      toast.error(error)
    }
    setOpenModal(false);
  }

  useEffect(()=> {
    setFormData({
        name: item.name,
        categoryId: item?.category?._id,
        price: item.price,
        numberInStock: item.numberInStock,
        tag: item.tag,
        description: item.description,
        trackQuantity: item.trackQuantity,
    })
  }, [item.name, item?.category?._id, item.price, item.numberInStock, item.tag, item.description, item.trackQuantity])

  if (!openModal) return null
  return (
    <div
      className={`absolute font-poppins w-full bg-cover bg-center h-screen bg-black bg-opacity-[30%] top-0 left-0 flex justify-center px-8`}
    >
      <div className="mt-[10%] overflow-hidden sm:mt-[20%] w-[70%] sm:w-[100%] h-[50%] sm:h-[65%] shadow-md py-10 bg-white rounded-lg">
        <form>
          <div className="mx-6 gap-x-4 sm:flex-col sm:gap-y-2 flex items-center justify-between">
            <div className="w-[50%] sm:w-[100%] flex justify-between items-center">
            <label className="font-[500] text-[12px]">Title</label>
            <input
              type="text"
              value={formData.name}
              name="name"
              onChange={handleChange}
              placeholder="Title"
              className="w-[80%] text-[12px] font-[500] px-[1%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
            />
            </div>
            <div className="w-[50%] sm:w-[100%] flex justify-between items-center">
            <label className="font-[500] text-[12px]">Category</label>
            <select
              value={formData.categoryId}
              onChange={(e) => (setFormData({...formData, categoryId: e.target.value}))}
              name="categoryId"
              className="w-[80%] sm:w-[75%] text-[12px] font-[500] px-[1%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
            >
              <option value="">Select category</option>
              {category && category.map((item) => (
                <option key={item._id} value={item._id}>{item.name}</option>
              ))}
            </select>
          </div>
            </div>
          <div className="flex sm:flex-col sm:gap-y-2 mx-6 mt-[2%] justify-between">
            <div className="flex items-center w-[33.33%] sm:w-[100%] sm:justify-between">
              <label className="font-[500] text-[12px] md:mr-[21%] lg:mr-[21%] xl:mr-[21%]">Price</label>
              <input
                type="text"
                value={formData.price}
                name="price"
                onChange={handleChange}
                placeholder="Price"
                className="w-[100%] sm:w-[80%] text-[12px] font-[500] md:mr-[5%] lg:mr-[5%] xl:mr-[5%] px-[2%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
              />
            </div>
            <div className="flex items-center justify-between w-[33.33%] sm:w-[100%]">
              <label className="font-[500] mr-[5%] text-[12px]">Stock</label>
              <input
                type="text"
                name="numberInStock"
                value={formData.numberInStock}
                onChange={handleChange}
                placeholder="Stock"
                className="px-[2%] text-[12px] font-[500] md:mr-[5%] lg:md:mr-[5%] xl:md:mr-[5%] w-[100%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
              />
            </div>
            <div className="flex items-center justify-between w-[33.33%] sm:w-[100%]">
              <label className="font-[500] mr-[5%] text-[12px]">Tag</label>
              <input
                type="text"
                name="tag"
                value={formData.tag}
                onChange={handleChange}
                placeholder="Tag"
                className="px-[2%] text-[12px] font-[500] w-[100%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
              />
            </div>
          </div>
          <div className="flex mx-6 items-center justify-between mt-[2%]">
            <label className="font-[500] text-[12px]">Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-[90%] sm:w-[75%] text-[12px] font-[500] px-[2%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
            />
          </div>
          <div className="mt-[2%] mx-6 flex items-center">
            <input
              type="checkbox"
              value={formData.trackQuantity}
              onChange={handleChange}
              checked={formData.trackQuantity}
              name="trackQuantity"
            />
            <span className="ml-[2%] text-[12px] font-[400]">
              Track quantity
            </span>
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
