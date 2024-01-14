import { Link } from "react-scroll";
import VisitorCounter from "./VisitorCounter";
import { BsArrowUp } from "react-icons/bs";
const Footer = () => {
  // #0a192f
  return (
    <div
      id="footer"
      className=" relative w-full h-fit bg-[#0a192f] text-[#77B255]"
    >
      <div className="grid grid-cols-3 divide-x-[0px]">
        <div className=""></div>
        <div className=" p-4  h-full flex justify-center">
          <VisitorCounter />
        </div>
        <div className="flex justify-end p-4">
          <Link to="navbar" smooth={true} offset={50} duration={500}>
            <BsArrowUp className="hover:text-[#77B255] duration-300 cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
