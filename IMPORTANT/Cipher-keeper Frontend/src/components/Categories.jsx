import React, { useEffect, useState } from 'react';
import NavBar from "./NavBar";
import { useDispatch, useSelector } from 'react-redux';
import { getCategory, deleteCategory } from '../features/category/categoryActions';
import UpdateCategory from './UpdateCategory';
import { FaEdit } from "react-icons/fa";
import { BsTrashFill } from "react-icons/bs";
import Pagination from '../Pagination/Pagination';
import AddCategory from './AddCategory';

const Categories = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openAddCategoryModal, setOpenAddCategoryModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoriesPerPage] = useState(5);
  const [itemData, setItemData] = useState({});

  const dispatch = useDispatch();

  const getCategories = () => {
    dispatch(getCategory());
  };

  const deleteCategoryHandler = (categoryId) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      dispatch(deleteCategory(categoryId));
    }
  };

  const { loading, categories, error } = useSelector(state => state.category);

  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategory = categories?.slice(indexOfFirstCategory, indexOfLastCategory);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => currentPage < Math.ceil(categories.length / categoriesPerPage) && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage >= 2 && setCurrentPage(currentPage - 1);

  const handleAdd = () => {
    setOpenAddCategoryModal(true);
  };

  const handleClick = (item) => {
    setOpenModal(true);
    setItemData(item);
  };

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, !openAddCategoryModal, !!openAddCategoryModal, getCategory]);

  return (
    <div className="w-[90%] mt-[2.2rem] md:mr-[4%] lg:mr-[4%] xl:mr-[4%] font-poppins">
      <NavBar />
      <div className="mt-[4%] py-6 h-[80%] sm:h-[90%] sm:ml-[5%] border rounded-lg bg-white shadow-md">
        <div className="mx-6">
          <div className='flex justify-between items-center'>
            <span className='text-[14px]'>Categories</span>
            <button onClick={handleAdd} className='hover:cursor-pointer text-[14px] hover:text-[#263238] hover:bg-[#fff] max-h-10 bg-[#263238] px-4 py-2 rounded-md text-white'>Add</button>
          </div>

          <div className="mt-[4%] bg-[#263238] text-[14px] text-white rounded-md px-5 py-[1%]">Category Title</div>
          {loading ? (<p className="text-center mt-[4%]">Please wait...</p>) : (
            <div className="">
              {error ? (<p className="mt-[4%] text-center">{error}</p>) : categories && categories != null && categories !== [] && categories.length > 0 && currentCategory.length > 0 ? (
                currentCategory.map((item) => {
                  return (
                    <div key={item._id} className="flex px-5 py-2 text-[14px] justify-between hover:bg-[#f1f1f1] rounded-md">
                      <span className="">{item.name}</span>

                      <div className="flex gap-x-4">
                        <button type="button" onClick={() => handleClick(item)} className="flex gap-x-2 items-center hover:cursor-pointer hover:text-[#263238] max-h-8 hover:bg-[#fff] bg-[#263238] px-4 py-2 rounded-md text-white"><FaEdit /></button>
                        <button type="button" onClick={() => deleteCategoryHandler(item._id)} className="flex gap-x-2 items-center hover:cursor-pointer hover:text-[red] hover:bg-[#fff] max-h-8 bg-[red] px-4 py-2 rounded-md text-white"><BsTrashFill /></button>
                      </div>
                    </div>
                  );
                })
              ) : (<p className="mt-[4%] text-center">Sorry, you have not created any category</p>)}
              <Pagination categoriesPerPage={categoriesPerPage} totalCategories={categories.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
              <UpdateCategory openModal={openModal} item={itemData} setOpenModal={setOpenModal} />
            </div>
          )}
        </div>
      </div>
      <AddCategory openAddCategoryModal={openAddCategoryModal} setOpenAddCategoryModal={setOpenAddCategoryModal} />
    </div>
  );
};

export default Categories;
