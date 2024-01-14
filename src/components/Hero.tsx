import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import ProfilePhoto from "../assets/profile-photo-trans.png";

const Home = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#77B255] text-xl sm:text-xl">👋 Hi there!</p>
        <h1 className="text-4xl sm:text-4xl font-bold">I'm Vishnu Kerasiya,</h1>
        <h2 className="text-3xl sm:text-3xl text-gray-600 w-[80%]">
          a full-stack developer who loves coding and cares about the
          environment and healthy eating. Join me on my website, where I share
          my coding adventures and tips, along with some crunchy stories about
          sustainable living and my favorite nutritious snacks. Let's make
          coding and munching on good food simple and fun! 🌱💻
        </h2>
        {/* <img className="w-250px h-250px" src={ProfilePhoto} /> */}
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
