import React, { useState, useEffect } from "react";
import { Input } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { userLogin } from "../features/auth/authActions";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [seePassword, setSeePassword] = useState(false);
  const { loading, user, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [navigate, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataCopy = Object.assign({}, formData);
    delete dataCopy.rememberMe;
    dispatch(userLogin(dataCopy));
    if (error) {
      toast.error(error);
    }
  };

  const handleSeePassword = (index) => {
    setSeePassword(!seePassword);
  }

  return (
    <div className="font-poppins flex justify-between">
      <div className="w-[50%] sm:w-[100%] ml-[3%]">
        <div onClick={()=>navigate('/')} className="text-[32px] font-nova font-[400] cursor-pointer sticky mt-[4%] ml-[6%] z-0">
          Cipher-keeper
        </div>
        <div className="mt-[15%] ml-[6%] flex flex-col">
        </div>
        <form className="mt-[8%] ml-[6%] w-[80%]">
          <div className="flex flex-col">
            <label className="font-[500] text-[16px] text-[#000000]">
              Email
            </label>
            <Input
              value={formData.email}
              name="email"
              style={{
                borderRadius: '0.25rem',
              }}
              onChange={handleChange}
              className="font-[400] text-[14px] text-[#000000] mt-[1%] px-[1%] h-[2.2rem] w-[100%] border border-black rounded"
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-[3%] flex flex-col relative">
            <label className="font-[500] text-[16px] text-[#000000]">
              Password
            </label>
            <input
              value={formData.password}
              onChange={handleChange}
              name="password"
              style={{
                borderRadius: '0.25rem',
              }}
              className="font-[400] text-[14px] text-[#000000] mt-[1%] px-[1%] h-[2.2rem] w-[100%] border border-black rounded"
              type={seePassword ? "text" : "password"}
              placeholder="Password"
            />
            {seePassword ? <div  onClick={handleSeePassword} className="hover:cursor-pointer text-[grey] text-[18px] absolute top-9 right-3"><AiFillEyeInvisible /></div>
                          : <div onClick={handleSeePassword} className="hover:cursor-pointer text-[grey] text-[18px] absolute top-9 right-3"><AiFillEye /></div>}
          </div>
          <div className="mt-[3%] w-[100%] flex justify-between">
            <p className="font-[400] select-none text-[14px] text-[#636363] hover:cursor-pointer">
              Forgot Password?
            </p>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="w-[100%] relative text-center hover:cursor-pointer font-[500] mt-[3%] rounded h-[2.5rem] text-[#ffffff] text-[16px] bg-[#3A3A3A]"
            
          >Log in{loading && <svg className="w-5 h-5 border border-b-2 absolute right-[40%] sm:right-[60%] sm:top-[25%] top-[30%] border-white rounded-full animate-spin"></svg>}</button>

          <div className="mt-[3%] leading-[21px] text-center font-[400] text-[14px]">
            New User?{" "}
            <Link to="/signup">
              <span className="font-[500] text-black">Create an account</span>
            </Link>
          </div>
        </form>
      </div>
      <div id="banner-right" className="w-[50%] rounded-tl-[8rem] rounded-bl-[8rem] h-screen sm:hidden overflow-hidden">
        {/* <Right /> */} 
        
      </div>
    </div>
  );
};

export default LoginPage;
