import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './NavBar';
import { BiDotsVertical } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { getPasswords } from '../features/passwords/passwordsActions';
import AddPassword from './AddPassword';
import Pagination from '../Pagination/Pagination';
import UpdatePassword from './UpdatePassword';
import toast from 'react-hot-toast';

const PasswordManager = () => {
  const [openModal, setOpenModal] = useState(false);
  const { loading, passwords, error } = useSelector((state) => state.passwords);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoriesPerPage] = useState(5);
  const [openAddPasswordModal, setOpenAddPasswordModal] = useState(false);
  const [seePassword, setSeePassword] = useState([]);
  const [itemData, setItemData] = useState({});
  const [showMod, setShowMod] = useState([]);

  const dispatch = useDispatch();

  const getUserPasswords = () => {
    dispatch(getPasswords())
  }

  useEffect(() => {
    getUserPasswords();
  }, [dispatch, !openAddPasswordModal, !!openAddPasswordModal, getPasswords])

  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentPasswords = passwords?.slice(indexOfFirstCategory, indexOfLastCategory);
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const nextPage = () => currentPage < Math.ceil(passwords?.length / categoriesPerPage) && setCurrentPage(currentPage + 1)
  const prevPage = () => currentPage >= 2 && setCurrentPage(currentPage - 1)

  const handleAdd = () => {
    setOpenAddPasswordModal(true);
  }

  const handleClick = (item) => {
    setOpenModal(true);
    setItemData(item);
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then((x)=>{
      toast.success('Password copied!')
      console.log(x, 'do something')
    }).catch((error)=>{
      toast.error('Failed to copy password:'+ error);
    })
  }
  
  return (
    <div className="w-[90%] sm:h-screen mt-[2.2rem] mr-[4%] font-poppins">
      <NavBar />
      <div className='mt-[4%] py-6 h-[80%] sm:w-[100%] sm:mx-[5%]  sm:overflow-x-scroll sm:overflow-hidden border rounded-lg bg-white shadow-md'>
        <div className='mx-4 h-12 flex justify-between items-center'>
          <span className='text-[14px]'>Saved Passwords</span>
          <button onClick={handleAdd} className='hover:cursor-pointer text-[14px] hover:text-[#263238] hover:bg-[#fff] max-h-10 bg-[#263238] px-4 py-2 rounded-md text-white'>Add</button>
        </div>
        <div className='w-[100%] sm:w-[150%] mt-[4%]'>
          <div className="grid grid-cols-12 gap-4 px-[5%] py-[1%] mt-4 mx-2 rounded-lg bg-[#263238] font-[400] text-white text-[14px]">
            <div className="col-span-4">Site</div>
            <div className="col-span-4">Username</div>
            <div className="col-span-3">Password</div>
          </div>
          {loading ? (<p className="mt-[4%] text-[14px] text-center">Please wait...</p>) : (<div className="text-[14px]">
            {error ? (<p className="mt-[4%] text-[14px] text-center">{error}</p>) : passwords && passwords != null && passwords !== [] && !passwords[0]?.message && currentPasswords.length > 0 ? (
              currentPasswords.map((item, index) => {
                
                return (
                  <div key={index} className='grid grid-cols-12 gap-6 px-[5%] py-[1%]'>
                    <div className="text-left text-black col-span-4">{item.fancyName}</div>
                    <div className="col-span-4">{item.username}</div>
                    <input disabled type={seePassword.includes(index) ? 'text' : 'password'} value={item.password} className="col-span-3 bg-white"></input>
                    {/* <p onClick={()=>copyToClipboard(item.password)}>{item.password}</p> */}
                    <div className="flex gap-x-2 sm:mr-[2%]">
                      <div onClick={() => {
                        if (seePassword.includes(index)) {
                          setSeePassword(seePassword.filter(i => i !== index));
                        } else {
                          setSeePassword([...seePassword, index]);
                        }
                      }}>
                        {seePassword.includes(index) ? <div className="hover:cursor-pointer text-[18px]"><AiFillEyeInvisible /></div>
                          : <div className="hover:cursor-pointer text-[18px]"><AiFillEye /></div>}
                      </div>
                      <BiDotsVertical onClick={() => {
                        if (showMod.includes(index)) {
                          setShowMod(showMod.filter(i => i !== index));
                        } else {
                          setShowMod([...showMod, index]);
                        }
                      }} className="text-[18px] cursor-pointer" />
                     {showMod.includes(index) ? <div onClick={()=>setShowMod([])} className='absolute w-full bg-cover bg-center h-screen top-0 left-0'><div className='absolute bg-white flex flex-col gap-y-2 rounded-xl shadow-lg shadow-black py-4 right-1 top-[40%]'>
                        <span onClick={()=>copyToClipboard(item.password)} className='cursor-pointer hover:bg-[#fcfcfc] p-2 w-[100%] text-center'>Copy password</span>
                        <span onClick={() => handleClick(item)} className='cursor-pointer hover:bg-[#fcfcfc] p-2 w-[100%] text-center'>Edit password</span>
                        <span className='cursor-pointer hover:bg-[#fcfcfc] p-2 w-[100%] text-center'>Remove</span>
                      </div></div> : null}
                    </div>
                  </div>
                )
              })
            ) : (<p className="mt-[4%] text-center">Sorry, you have not created any password</p>)}
            <Pagination categoriesPerPage={categoriesPerPage} totalCategories={passwords?.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
            <UpdatePassword openModal={openModal} item={itemData} setOpenModal={setOpenModal} />
          </div>)}
        </div>
      </div>
      <AddPassword openAddPasswordModal={openAddPasswordModal} setOpenAddPasswordModal={setOpenAddPasswordModal} />
    </div>
  )
}

export default PasswordManager