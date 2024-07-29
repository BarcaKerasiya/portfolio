import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo1.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center h-[80px] bg-[#0a192f] w-full px-4">
        <div>
          <NavLink to="/">
            <img src={Logo} className="h-11" />
          </NavLink>
        </div>
        <ul className="hidden md:flex">
          <li>
            <NavLink className="hover:text-[#77B255] duration-300" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:text-[#77B255] duration-300" to="/blogs">
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:text-[#77B255] duration-300" to="/tech">
              Tech
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:text-[#77B255] duration-300"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div onClick={toggleClick} className="md:hidden z-10">
          {!toggle && <FaBars className="md:hidden cursor-pointer" />}
        </div>
      </div>
      {/* Mobile Menu Overlay */}

      {/* Mobile Menu */}

      <ul
        className={`fixed top-0 left-0 h-screen w-full flex flex-col justify-center items-center bg-[#0a192f] transition-transform duration-300 ${
          toggle ? "translate-x-0" : "-translate-x-full"
        } md:hidden z-50`}
      >
        <FaTimes
          className="md:hidden cursor-pointer absolute top-[33px] right-[15px]"
          onClick={toggleClick}
        />
        <li className="py-6 text-2xl">
          <NavLink
            onClick={toggleClick}
            to="/"
            className="hover:text-[#77B255] duration-300"
          >
            Home
          </NavLink>
        </li>
        <li className="py-6 text-2xl">
          <NavLink
            onClick={toggleClick}
            to="/blogs"
            className="hover:text-[#77B255] duration-300"
          >
            Blogs
          </NavLink>
        </li>
        <li className="py-6 text-2xl">
          <NavLink
            onClick={toggleClick}
            to="/tech"
            className="hover:text-[#77B255] duration-300"
          >
            Tech
          </NavLink>
        </li>
        <li className="py-6 text-2xl">
          <NavLink
            onClick={toggleClick}
            to="/contact"
            className="hover:text-[#77B255] duration-300"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
