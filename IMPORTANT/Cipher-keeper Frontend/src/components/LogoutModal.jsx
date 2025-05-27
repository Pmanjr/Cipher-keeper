import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";

const LogoutModal = ({ openModal, setOpenModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div
      className={`absolute ${
        openModal === false && "hidden"
      } font-poppins w-full bg-cover h-[100%] bg-black bg-opacity-[60%] top-[0%] flex justify-center px-8`}
    >
      <div className="flex flex-col shadow-md gap-y-4 px-[14%] py-[8%] bg-white self-start mt-32 rounded-lg max-w-screen-md">
        <div className="font-[500] text-[24px] text-center">Logging Out?</div>
        <div className="flex flex-col text-center">
          <span>Are you sure you want to log out?</span>
          <span>This will end your session.</span>
        </div>
        <div className="flex gap-x-2 justify-center">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="border focus:transition duration-300 focus:bg-black focus:text-white hover:cursor-pointer border-black rounded-md px-4 py-2"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              dispatch(logout());
              navigate("/");
              }}
            className="bg-[#EB5757] focus:transition duration-300 focus:bg-white focus:border focus:border-[#EB5757] focus:text-[#EB5757] px-4 py-2 hover:cursor-pointer rounded-md text-white"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
