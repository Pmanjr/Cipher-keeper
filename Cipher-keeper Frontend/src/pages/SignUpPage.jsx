import React, { useState } from "react";
import { Input } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const SignUpPage = () => {
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    password: "",
    confirmPassword: "",
    isAdmin: false,
    acceptTerms: false,
  })

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setFormData({ ...formData, [name]: value });
  }

  const navigate = useNavigate();

  const handleSubmit = async() => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (formData.firstName === "" || formData.firstName.length < 2) {
      toast.error('Please enter your full name');
      setFirstNameError(true);
    }
    else if (formData.lastName === "" || formData.lastName.length < 2) {
      toast.error('Please enter your full name');
      setLastNameError(true);
    }
    else if (formData.email === "" || !formData.email.match(validRegex)) {
      setEmailError(true);
      toast.error('Please enter a valid email address');
    }
    else if (formData.password.length < 8) {
      setPasswordError(true);
      toast.error('Your password must be at least 8 characters long')
    }
    else if (formData.company.length < 6 || formData.company.length < 1) {
      toast.error("Company can not be empty and must be at least 6 characters long")
    }
    else if (formData.password !== formData.confirmPassword) {
      setPasswordError(true);
      toast.error("Passwords do not match");
    }
    else if (formData.acceptTerms === false) {
      toast.error("Please agree to the terms and conditions");
    }else{
      setFirstNameError(false);
      setLastNameError(false);
      setEmailError(false);
      setPasswordError(false);

      try {
        const dataCopy = Object.assign({}, formData);
        delete dataCopy.confirmPassword;
        const response = await axios.post(`/api/users/`, dataCopy)
        console.log('response', response);
        if (response.status === 200 || response.status === 201 || response.status === 204) {
          toast.success("Registration successful");
          setLoading(false);
          navigate('/login');
        }
      } catch (err) {
          const errorMsg = err?.response?.data?.message;
          toast.error(errorMsg);
        }

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false,
      })
      
    }
  }
  const style = {
    borderRadius: "0.25rem",
  }

  return (
    <div className="font-poppins flex justify-between">
      <div className="w-[50%] sm:w-[100%] ml-[3%]">
        <div onClick={()=>navigate('/')} className="sticky font-nova mt-[4%] ml-[6%] cursor-pointer z-0 text-[32px] font-[400] top-0">
          Cipher-keeper
        </div>
        <div className="my-[5%] ml-[6%] flex flex-col">
          <span className="font-[500] text-[20px] text-[#000000]">
            Set up your Cipher-keeper account
          </span>
        </div>
        <form className="mt-[4%] ml-[6%] w-[80%]">
          <div className="flex flex-col">
            <label className="font-[500] text-[14px] text-[#000000]">
              First Name
            </label>
            <Input
              value={formData.firstName}
              name="firstName"
              style={style}
              onChange={handleChange}
              className={`${firstNameError && 'border border-red-500'} font-[400] text-[14px] text-[#000000] mt-[1%] px-[1%] h-[2.2rem] w-[100%] border border-black rounded`}
              type="text"
              placeholder="First name"
            />
          </div>
          <div className="mt-[2%] flex flex-col">
            <label className="font-[500] text-[14px] text-[#000000]">
              Last Name
            </label>
            <Input
              value={formData.lastName}
              name="lastName"
              style={style}
              onChange={handleChange}
              className={`${lastNameError && 'border border-red-500'} font-[400] text-[14px] text-[#000000] mt-[1%] px-[1%] h-[2.2rem] w-[100%] border border-black rounded`}
              type="text"
              placeholder="Last name"
            />
          </div>
          <div className="mt-[2%] flex flex-col">
            <label className="font-[500] text-[14px] text-[#000000]">
              Email
            </label>
            <Input
              value={formData.email}
              onChange={handleChange}
              name="email"
              style={style}
              className={`${emailError && 'border border-red-500'} invalid:text-red-500 font-[400] text-[14px] text-[#000000] mt-[1%] px-[1%] h-[2.2rem] w-[100%] border border-black rounded`}
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div className="mt-[2%] flex flex-col">
            <label className="font-[500] text-[14px] text-[#000000]">
              Company Name
            </label>
            <Input
              value={formData.company}
              name="company"
              style={style}
              onChange={handleChange}
              className="font-[400] text-[14px] text-[#000000] mt-[1%] px-[1%] h-[2.2rem] w-[100%] border border-black rounded"
              type="text"
              placeholder="Company Name"
            />
          </div>
          <div className="mt-[2%] flex flex-col">
            <label className="font-[500] text-[14px] text-[#000000]">
              Password
            </label>
            <Input.Password
              value={formData.password}
              name="password"
              style={style}
              onChange={handleChange}
              className={`${passwordError && 'border border-red-500'} font-[400] text-[14px] text-[#000000] mt-[1%] px-[1%] h-[2.2rem] w-[100%] border border-black rounded`}
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="mt-[2%] flex flex-col">
            <label className="font-[500] text-[14px] text-[#000000]">
              Confirm Password
            </label>
            <Input.Password
              value={formData.confirmPassword}
              name="confirmPassword"
              style={style}
              onChange={handleChange}
              className="font-[400] text-[14px] text-[#000000] mt-[1%] px-[1%] h-[2.2rem] w-[100%] border border-black rounded"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="mt-[2%] w-[100%] flex justify-between">
            <div className="flex items-center">
              <input
                value={formData.acceptTerms}
                name="acceptTerms"
                onChange={handleChange}
                checked={formData.acceptTerms}
                className="required:border-red-500 checked:bg-black hover:cursor-pointer mr-[1rem] rounded"
                type="checkbox"
                required={true}
              />
              <label className="font-[400] text-[14px] text-[#000000]">
                I agree to the{" "}
                <span className="hover:cursor-pointer font-[700]">
                  Terms & Conditions
                </span>{" "}
                and{" "}
                <span className="hover:cursor-pointer font-[700]">
                  Privacy Policy
                </span>
              </label>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-[100%] hover:cursor-pointer font-[500] mt-[2%] rounded h-[2.2rem] text-[#ffffff] text-[16px] bg-[#3A3A3A]"
            type="button">Create an account{loading && <svg className="w-5 h-5 border border-b-2 absolute right-[40%] top-[30%] border-white rounded-full animate-spin"></svg>}</button>
          

          <div className="my-[2%] leading-[21px] text-center font-[400] text-[14px]">
            Already have an account?{" "}
            <Link to="/login"><span className="hover:cursor-pointer text-black font-[500]">Log in</span></Link>
          </div>
        </form>
      </div>
      <div id="banner-right" className="w-[50%] rounded-tl-[8rem] rounded-bl-[8rem] sm:hidden h-screen sticky top-0 overflow-hidden">
        {/* <Right /> */}
      </div>
    </div>
  );
};

export default SignUpPage;
