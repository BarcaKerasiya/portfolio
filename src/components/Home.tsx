import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#77B255] text-xl sm:text-xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-4xl font-bold">Vishnu Kerasiya</h1>
        <h2 className="text-3xl sm:text-3xl text-gray-600">
          I'm a Web Developer
        </h2>
        {/* <p className="text-gray-600 text-2xl mt-2">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p> */}
        <div className="mt-5">
          <Link to="work" smooth={true} offset={50} duration={500}>
            <button className="flex group justify-between items-center border border-[#77B255] hover:bg-[#77B255] px-4 py-2 rounded-md ">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-2" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
