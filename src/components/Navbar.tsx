import { FaBars, FaTimes } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo1.png";
import { useState } from "react";
// import { linkedin, github, mail } from "../constants/constants";
import { NavLink } from "react-router-dom";
// import resume from "../assets/pdfs/vishnu_kerasiya.pdf";

export const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div
      // id="navbar"
      className="flex justify-between items-center fixed h-[80px] bg-[#0a192f] w-full px-4"
    >
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
        {/* <li>
          <NavLink className="hover:text-[#77B255] duration-300" to="about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="hover:text-[#77B255] duration-300" to="skills">
            Skills
          </NavLink>
        </li> */}
        <li>
          <NavLink className="hover:text-[#77B255] duration-300" to="/blogs">
            Blogs
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            className="hover:text-[#77B255] duration-300"
            to="work"
            smooth={true}
            offset={50}
            duration={500}
          >
            Work
          </NavLink>
        </li> */}
        <li>
          <NavLink className="hover:text-[#77B255] duration-300" to="contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <div onClick={toggleClick} className="md:hidden  z-10">
        {!toggle ? (
          <FaBars className="md:hidden cursor-pointer" />
        ) : (
          <FaTimes className="md:hidden cursor-pointer" />
        )}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !toggle
            ? "hidden"
            : "bg-slate-500 absolute top-0 left-0 h-screen w-full flex flex-col justify-center items-center md:hidden"
        }
      >
        <li className="py-6 text-2xl">
          <NavLink
            onClick={toggleClick}
            to="/"
            className="hover:text-[#77B255] duration-300"
          >
            Home
          </NavLink>
        </li>
        {/* <li className="py-6 text-2xl">
          {" "}
          <NavLink
            onClick={toggleClick}
            to="about"
            className="hover:text-[#77B255] duration-300"
          >
            About
          </NavLink>
        </li>
        <li className="py-6 text-2xl">
          <NavLink
            onClick={toggleClick}
            to="skills"
            className="hover:text-[#77B255] duration-300"
          >
            Skills
          </NavLink>
        </li> */}
        <li className="py-6 text-2xl">
          {" "}
          <NavLink
            onClick={toggleClick}
            to="blogs"
            className="hover:text-[#77B255] duration-300"
          >
            Blogs
          </NavLink>
        </li>
        {/* <li className="py-6 text-2xl">
          {" "}
          <NavLink
            onClick={toggleClick}
            to="work"
            smooth={true}
            offset={50}
            duration={500}
            className="hover:text-[#77B255] duration-300"
          >
            Work
          </NavLink>
        </li> */}
        <li className="py-6 text-2xl">
          {" "}
          <NavLink
            onClick={toggleClick}
            to="contact"
            className="hover:text-[#77B255] duration-300"
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* social media icons */}
      {/* <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="flex justify-center items-center w-[125px] h-[40px] ml-[-85px] hover:ml-[0px] duration-300 bg-blue-600 px-0 rounded-r-lg">
            <a
              href={linkedin}
              target="_blank"
              className="flex items-center justify-between w-full ml-2"
            >
              LinkedIn
              <FaLinkedin size={25} className="mr-2" />
            </a>
          </li>
          <li className="flex justify-center items-center w-[125px] h-[40px] ml-[-85px] hover:ml-[0px] duration-300 bg-[#333333] px-0 rounded-r-lg">
            <a
              href={github}
              target="_blank"
              className="flex items-center justify-between w-full ml-2"
            >
              Github
              <FaGithub size={25} className="mr-2" />
            </a>
          </li>
          <li className="flex justify-center items-center w-[125px] h-[40px] ml-[-85px] hover:ml-[0px] duration-300 bg-[#6fc2b0] px-0 rounded-r-lg">
            <a
              href={`mailto:${mail}`}
              className="flex items-center justify-between w-full ml-2"
            >
              Email
              <HiOutlineMail size={25} className="mr-2" />
            </a>
          </li>
          <li className="flex justify-center items-center w-[125px] h-[40px] ml-[-85px] hover:ml-[0px] duration-300 bg-[#565f69] px-0 rounded-r-lg">
            <a
              href={resume}
              target="_blank"
              className="flex items-center justify-between w-full ml-2"
            >
              Resume
              <BsFillPersonLinesFill size={25} className="mr-2" />
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};
