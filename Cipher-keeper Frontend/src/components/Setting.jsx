import React, { useState } from "react";
import NavBar from "./NavBar";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, Space, Switch } from "antd";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getPasswords } from "../features/passwords/passwordsActions";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Setting = () => {
    const [personalData, setPersonalData] = useState({
        firstName: "",
        lastName: "",
        birthday: "",
        profession: "",
        address: "",
        country: "",
        region: "",
        city: "",
        zip: "",
        phone: "",
        email: "",
    });

    const [formData, setFormData] = useState({
      passwords: []
    });

    const [deletePhrase, setDeletePhrase] = useState('');

    const dispatch = useDispatch();

    const getUserPasswords = () => {
      dispatch(getPasswords())
    }

    const { passwords } = useSelector((state)=>state.passwords);

    const handleDelete = async() => {
      if (deletePhrase === 'Cipher-keeper') {
        try{
          const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'x-auth-token': `${token}`,
                    "Content-Type": "application/json"
                }
            }
          const response = await axios.post(`api/passwords/delete`, formData, config)
          if (response.status === 200 || response.status === 201 || response.status === 204) {
          toast.success("Passwords deleted!");
          setDeletePhrase('');
        }
        } catch (err) {
          const errorMsg = err?.response?.data?.message;
          toast.error(errorMsg);
        }
      } 
      }

    useEffect(()=>{
      getUserPasswords();
      setFormData({...formData, passwords: passwords.map(item=>item._id)})
    }, [])
    
    const toggleChange = (checked) => {
        console.log(`switch to ${checked}`);
      };
  return (
    <div className="w-[90%] mt-[2.2rem] mr-[4%] font-poppins">
      <NavBar />
      <div className="flex flex-col mt-[4%]">
        <span className="font-[500] text-[24px] sm:mx-[5%]">Settings</span>
      </div>

      <div className="flex sm:flex-col justify-between mt-4">
        <div className="w-[70%] sm:w-[100%] sm:mx-[5%]">
          <form>
            <div className="rounded-lg bg-white mb-[4%] py-4 px-[4%] shadow-lg">
              <p className="font-[500] text-[14px]">Personal information</p>
              <div className="flex sm:flex-col sm:gap-y-3 my-[2%] justify-between">
                <div className="flex items-center w-[50%] sm:w-[100%]">
                  <label className="font-[500] mr-[8%] text-[12px]">First Name</label>
                  <input
                    className="text-[12px] font-[500] w-[70%] px-[2%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
                    type="text"
                    value={personalData.firstName}
                    onChange={(e) => setPersonalData({...personalData, firstName: e.target.value})}
                    placeholder="First Name"
                  />
                </div>
                <div className="flex items-center w-[50%] sm:w-[100%]">
                  <label className="font-[500] mr-[8%] text-[12px]">Last Name</label>
                  <input
                    className="text-[12px] font-[500] w-[70%] px-[2%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
                    type="text"
                    value={personalData.lastName}
                    onChange={(e) => setPersonalData({...personalData, lastName: e.target.value})}
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="flex my-[2%] justify-between">
                <div className="flex items-center w-[49%]">
                  <label className="font-[500] mr-[8%] text-[12px]">
                    Birthday
                  </label>
                  <input
                    type="text"
                    name="birthday"
                    value={personalData.birthday}
                    onChange={(e) =>(setPersonalData({...personalData, birthday: e.target.value}))}
                    placeholder="MM DD YY"
                    className="text-[12px] font-[500] w-[75%] px-[2%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
                  />
                </div>
                <div className="flex items-center w-[49%]">
                  <label className="font-[500] mr-[5%] text-[12px]">
                    Profession
                  </label>
                  <input
                    type="text"
                    name="profession"
                    value={personalData.profession}
                    onChange={(e) =>(setPersonalData({...personalData, profession: e.target.value}))}
                    placeholder="Profession"
                    className="px-[2%] text-[12px] font-[500] w-[75%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="font-[500] text-[12px]">Address</label>
                <input
                  type="text"
                  name="address"
                  onChange={(e) =>(setPersonalData({...personalData, address: e.target.value}))}
                  value={personalData.address}
                  placeholder="Address"
                  className="w-[88.5%] text-[12px] font-[500] px-[1%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
                />
              </div>
              <div className="flex md:ml-[9%] lg:ml-[9%] xl:ml-[9%] my-[2%] justify-between">
                <CountryDropdown
                  className="w-[24%] px-[1%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] text-[12px] font-[500] rounded-lg bg-[white]"
                  name="country"
                  value={personalData.country}
                  onChange={(val) => (setPersonalData({...personalData, country: val}))}
                />
                <RegionDropdown
                  className="w-[24%] px-[1%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] text-[12px] font-[500] rounded-lg bg-[white]"
                  country={personalData.country}
                  value={personalData.region}
                  onChange={(val) => (setPersonalData({...personalData, region: val}))}
                />
                <input
                  type="text"
                  name="city"
                  value={personalData.city}
                  onChange={(e) =>(setPersonalData({...personalData, city: e.target.value}))}
                  placeholder="City"
                  className="w-[24%] text-[12px] font-[500] px-[1%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
                />
                <input
                  type="text"
                  name="zip"
                  value={personalData.zip}
                  onChange={(e) =>(setPersonalData({...personalData, zip: e.target.value}))}
                  placeholder="Zip code"
                  className="w-[24%] text-[12px] font-[500] px-[1%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
                />
              </div>
              <div className="flex my-[2%] w-[100%] justify-between">
                <div className="flex items-center w-[49%]">
                  <label className="font-[500] mr-[4%] text-[12px]">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="number"
                    value={personalData.phone}
                    onChange={(e) =>(setPersonalData({...personalData, phone: e.target.value}))}
                    placeholder="Phone"
                    className="text-[12px] font-[500] w-[65%] px-[2%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
                  />
                </div>
                <div className="flex items-center w-[49%]">
                  <label className="font-[500] mr-[4%] text-[12px]">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={personalData.email}
                    onChange={(e) =>(setPersonalData({...personalData, email: e.target.value}))}
                    placeholder="Email"
                    className="px-[2%] text-[12px] font-[500] w-[80%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
                  />
                </div>
              </div>
              <div className="flex my-[6%]">
                <input
                  type="submit"
                  value="Save"
                  className="bg-[#263238] hover:cursor-pointer focus:px-9 mr-2 rounded-lg px-7 py-2 text-white hover:bg-white hover:border hover:border-[#263238] hover:text-[#263238]"
                />
                <input
                  type="button"
                  value="Cancel"
                  className="bg-white hover:cursor-pointer hover:bg-[#263238] hover:text-[#ffffff] focus:px-9 rounded-lg border border-[#263238] px-6 py-2 text-[#263238]"
                />
              </div>
            </div>

            

            <div className="rounded-lg bg-white my-[4%] py-4 px-[4%] shadow-lg">
              <p className="mt-6 font-[500] text-[14px]">Company information</p>
              <div className="flex items-center justify-between">
                <label className="font-[500] text-[12px]">Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-[91%] text-[12px] font-[500] px-[1%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
                />
              </div>
              <div className="flex my-[2%] justify-between">
                <div className="flex items-center w-[49%]">
                  <label className="font-[500] mr-[8%] text-[12px]">
                    Registry Number
                  </label>
                  <input
                    type="text"
                    name="registryNumber"
                    placeholder="Registry Number"
                    className="text-[12px] font-[500] w-[60%] px-[2%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
                  />
                </div>
                <div className="flex items-center w-[49%]">
                  <label className="font-[500] mr-[5%] text-[12px]">
                    Website
                  </label>
                  <input
                    type="text"
                    name="website"
                    placeholder="Website"
                    className="px-[2%] text-[12px] font-[500] w-[70%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
                  />
                </div>
              </div>
              <div className="flex my-[6%]">
                <input
                  type="submit"
                  value="Save"
                  className="bg-[#263238] hover:cursor-pointer focus:px-9 mr-2 rounded-lg px-7 py-2 text-white hover:bg-white hover:border hover:border-[#263238] hover:text-[#263238]"
                />
                <input
                  type="button"
                  value="Cancel"
                  className="bg-white hover:cursor-pointer hover:bg-[#263238] hover:text-[#ffffff] focus:px-9 rounded-lg border border-[#263238] px-6 py-2 text-[#263238]"
                />
              </div>
            </div>

            <div className="rounded-lg bg-white my-[4%] py-4 px-[4%] shadow-lg">
              <p className="mt-6 font-[500] text-[14px]">Password change</p>
              <div className="flex my-[2%] justify-between">
                <div className="flex items-center w-[49%]">
                  <label className="font-[500] mr-[8%] text-[12px]">
                    Password
                  </label>
                  <Space
                    direction="vertical"
                    className="w-[70%] focus:outline-none"
                  >
                    <Input.Password
                      placeholder="Password"
                      type="password"
                      name="password"
                      style={{
                            borderRadius: '0.5rem',
                            outline: 'none',
                            paddingTop: '0.7rem',
                            paddingBottom: '0.7rem',
                            fontWeight: '500px',
                            fontSize: '12px'
                        }}
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                      className="text-[12px] font-[500] w-[65%] px-[2%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
                    />
                  </Space>
                </div>
                <div className="flex items-center w-[49%]">
                  <label className="font-[500] mr-[5%] text-[12px]">
                    New Password
                  </label>
                  <Space
                    direction="vertical"
                    className="w-[65%] rounded-md focus:outline-none"
                  >
                    <Input.Password
                      placeholder="New Password"
                      type="password"
                      name="newPassword"
                      style={{
                            borderRadius: '0.5rem',
                            outline: 'none',
                            paddingTop: '0.7rem',
                            paddingBottom: '0.7rem',
                            fontWeight: '500px',
                            fontSize: '12px'
                        }}
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                      className="text-[12px] font-[500] w-[70%] px-[2%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
                    />
                  </Space>
                </div>
              </div>
              <div className="flex my-[6%]">
                <input
                  type="submit"
                  value="Save"
                  className="bg-[#263238] hover:cursor-pointer focus:px-9 mr-2 rounded-lg px-7 py-2 text-white hover:bg-white hover:border hover:border-[#263238] hover:text-[#263238]"
                />
                <input
                  type="button"
                  value="Cancel"
                  className="bg-white hover:cursor-pointer hover:bg-[#263238] hover:text-[#ffffff] focus:px-9 rounded-lg border border-[#263238] px-6 py-2 text-[#263238]"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="w-[27%] sm:w-[60%] sm:mx-[5%] max-h-auto flex flex-col gap-y-6 overflow-hidden">
          <div className="rounded-lg max-h-[310px] bg-white p-6 overflow-y-scroll">
            <form>
            <div className="flex flex-col">
                <p>Delete all passwords?</p>
                <input onChange={(e)=>setDeletePhrase(e.target.value)} type="text" placeholder="Type Cipher-keeper to delete passwords" className="px-[2%] text-[12px] font-[500] w-[100%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]" />
            </div>
            <div className="flex my-[6%]">
                <input
                onClick={()=>handleDelete()}
                  type="submit"
                  value="Submit"
                  className="bg-[#263238] hover:cursor-pointer focus:px-9 mr-2 rounded-lg px-6 py-1 text-white hover:bg-white hover:border hover:border-[#263238] hover:text-[#263238]"
                />
      
              </div>
              </form>
          </div>
          <div className="rounded-lg max-h-[310px] bg-white p-6 overflow-y-scroll">
            <p className="font-[500] text-[14px]">Notifications</p>
            <div className="flex justify-between">
                <p>Enable push notifications</p>
                <Switch name='pushNotifications' onChange={toggleChange} style={{
                    backgroundColor: '#263238'
                }} />
            </div>
            <div className="flex my-[6%]">
                <input
                  type="submit"
                  value="Save"
                  className="bg-[#263238] hover:cursor-pointer focus:px-9 mr-2 rounded-lg px-6 py-1 text-white hover:bg-white hover:border hover:border-[#263238] hover:text-[#263238]"
                />
                <input
                  type="button"
                  value="Cancel"
                  className="bg-white hover:cursor-pointer hover:bg-[#263238] hover:text-[#ffffff] focus:px-9 rounded-lg border border-[#263238] px-4 py-1 text-[#263238]"
                />
              </div>
          </div>
          <div className="rounded-lg max-h-[310px] bg-white p-6">
            <p className="font-[500] text-[14px]">Social profiles</p>
            <div className="flex items-center gap-x-2 mt-3">
              <label className="font-[500] text-[12px]">Facebook</label>
              <input
                type="text"
                placeholder="Facebook"
                className="w-[80%] h-8 px-[2%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
              />
            </div>
            <div className="flex items-center gap-x-2 mt-3">
              <label className="font-[500] text-[12px]">Instagram</label>
              <input
                type="text"
                placeholder="Instagram"
                className="w-[80%] h-8 px-[2%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
              />
            </div>
            <div className="flex items-center gap-x-2 mt-3">
              <label className="font-[500] text-[12px]">Twitter</label>
              <input
                type="text"
                placeholder="Twitter"
                className="w-[80%] h-8 px-[2%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
              />
            </div>
            <div className="flex items-center gap-x-2 mt-3">
              <label className="font-[500] text-[12px]">LinkedIn</label>
              <input
                type="text"
                placeholder="LinkedIn"
                className="w-[80%] h-8 px-[2%] focus:outline-none py-[0.7rem] border border-[#E6EDFF] rounded-lg bg-[white]"
              />
            </div>
            <div className="flex my-[6%]">
                <input
                  type="submit"
                  value="Save"
                  className="bg-[#263238] hover:cursor-pointer focus:px-9 mr-2 rounded-lg px-6 py-1 text-white hover:bg-white hover:border hover:border-[#263238] hover:text-[#263238]"
                />
                <input
                  type="button"
                  value="Cancel"
                  className="bg-white hover:cursor-pointer hover:bg-[#263238] hover:text-[#ffffff] focus:px-9 rounded-lg border border-[#263238] px-4 py-1 text-[#263238]"
                />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
