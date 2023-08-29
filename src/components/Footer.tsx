import { Link } from "react-scroll";
import VisitorCounter from "./VisitorCounter";
import { BsArrowUp } from "react-icons/bs";
const Footer = () => {
  // #0a192f
  return (
    <div id="footer" className=" relative w-full h-fit bg-[#aeb9ca] text-green">
      <div className="flex">
        <div></div>
        <div className="max-w-[1000px] mx-auto p-4 flex justify-between h-full bg-slate-500">
          <div></div>
          <VisitorCounter />
        </div>
        <Link to="navbar" smooth={true} offset={50} duration={500}>
          <div>
            <BsArrowUp className="hover:text-[#77B255] duration-300 cursor-pointer" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
