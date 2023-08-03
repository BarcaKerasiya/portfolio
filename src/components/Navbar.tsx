import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo1.png";
import { useState } from "react";

export const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const toggleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div className="flex justify-between items-center fixed h-[80px] bg-slate-600 w-full px-8">
      <div>
        <img src={Logo} className="h-11" />
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Skills</li>
      </ul>
      <div onClick={toggleClick} className="md:hidden  z-10">
        {!toggle ? (
          <FaBars className="md:hidden" />
        ) : (
          <FaTimes className="md:hidden" />
        )}
      </div>

      <ul
        className={
          !toggle
            ? "hidden"
            : "bg-slate-500 absolute top-0 left-0 h-screen w-full flex flex-col justify-center items-center md:hidden"
        }
      >
        <li className="py-6 text-2xl">Home</li>
        <li className="py-6 text-2xl">About</li>
        <li className="py-6 text-2xl">Contact Us</li>
        <li className="py-6 text-2xl">Skills</li>
      </ul>
    </div>
  );
};
