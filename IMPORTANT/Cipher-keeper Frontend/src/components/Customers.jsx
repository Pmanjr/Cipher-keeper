import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { Link } from "react-router-dom";
import { getCustomers } from "../features/customers/customersActions";
import { useDispatch, useSelector } from "react-redux";
import Pagination from '../Pagination/Pagination';
import { FaEdit } from "react-icons/fa";
import { BsTrashFill } from "react-icons/bs";
import UpdateCustomers from "./UpdateCustomers";

const menu = (
    <Menu
      items={[
        {
          label: <Link to="" ></Link>,
          key: '0',
        },
        {
          label: <Link to="" ></Link>,
          key: '1',
        },
        {
          label: <Link to="" ></Link>,
          key: '2',
        },
      ]}
    />
  );

const Customers = () => {
  const dispatch = useDispatch();
  const { loading, customers, error } = useSelector((state) => state.customers)
  const [currentPage, setCurrentPage] = useState(1);
  const [categoriesPerPage] = useState(5);
  const [openModal, setOpenModal] = useState(false);
  const [itemData, setItemData] = useState({})

  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCustomers = customers?.slice(indexOfFirstCategory, indexOfLastCategory);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const nextPage = () => currentPage < Math.ceil(customers.length / categoriesPerPage) && setCurrentPage(currentPage + 1)
  const prevPage = () => currentPage >= 2 && setCurrentPage(currentPage - 1)

  const handleClick = (item) => {
    setOpenModal(true);
    setItemData(item);
    }

  const getUserCustomers = () => {
    dispatch(getCustomers());
  }

  useEffect(()=>{
    getUserCustomers();
    // eslint-disable-next-line
  }, [!openModal])
    return (
        <div className="w-[90%] mt-[2.2rem] mr-[4%] font-poppins">
            <NavBar />
            <div className="mt-[4%] py-6 h-[80%] sm:w-[100%] sm:mx-[5%]  sm:overflow-x-scroll sm:overflow-hidden border rounded-lg bg-white shadow-md">
                <div className="flex justify-between mx-6 items-center sticky top-0">
                    <span className="font-[500] text-[20px]">Customers</span>
                    <Dropdown overlay={menu} trigger={['hover']}>
                        <Link to="" onClick={(e) => e.preventDefault()}>
                        <Space className='flex items-center text-black p-2 rounded-lg shadow-lg'>
                            <span>Select</span>
                            <DownOutlined className='text-[11px]'/>
                        </Space>
                        </Link>
                    </Dropdown>
                </div>
                {loading ? (<p className="mt-[4%] text-center">Please wait...</p>) : (<div className="w-[100%] sm:w-[150%] mt-[4%]">
                    <div className="grid grid-cols-12 gap-4 px-[5%] py-[1%] mt-4 bg-[#263238] font-[400] text-white text-[14px]">
                    <div className="col-span-4">Full Name</div>
                    <div className="col-span-4">Email</div>
                    <div className="col-span-3">Phone Number</div>
                    </div>
                          {error ? (<p className="text-center mt-[4%]">{error}</p>) : customers && currentCustomers !== null && currentCustomers !== [] ? (currentCustomers.map(item => (
                            <>
                            <div className="grid grid-cols-12 gap-6 px-[5%] py-[1%]" key={item._id}>
                              <div className="text-left col-span-4">{item.firstName} {item.middleName} {item.lastName}</div>
                              <div className="col-span-4">{item.email}</div>
                              <div className="col-span-3">{item.phone}</div>
                              <div className="flex gap-x-2 sm:mr-[2%]">
                                <button type="button" onClick={()=>handleClick(item)} className="hover:cursor-pointer hover:text-[#263238] hover:bg-[#fff] max-h-8 bg-[#263238] px-4 py-2 rounded-md text-white"><FaEdit /></button>
                                <button type="button" className="hover:cursor-pointer hover:text-[red] hover:bg-[#fff] bg-[red] px-4 py-2 max-h-8 rounded-md text-white"><BsTrashFill /></button>
                              </div>
                            </div>
                            <hr />
                            </>
                          ))) : (<p className="text-center mt-[4%]">Sorry, you do not have any customer</p>)}
                </div>)}
                <Pagination categoriesPerPage={categoriesPerPage} totalCategories={customers.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
                <UpdateCustomers openModal={openModal} item={itemData} setOpenModal={setOpenModal} />
            </div>
        </div>
    )
}

export default Customers;