import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="w-full lg:h-screen bg-[#0a192f] pt-[80px] sm:pt-40 md:pt-27 lg:pt-0 pb-8">
        <div className="w-[100%] md:w-[80%] mx-auto px-8 flex flex-col justify-center h-[80%] pt-0 sm:pt-27 md:pt-27">
          <p className="text-[#77B255] text-xl sm:text-xl">👋 Hi there!</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            I'm Vishnu Kerasiya,
          </h1>
          <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 w-full text-justify">
            Welcome to my website! I'm a software developer who loves writing
            code. When I'm not coding, I enjoy listening to music and watching
            football. I'm also passionate about protecting the environment, So
            I'm committed to crafting products that contribute positively to
            environmental preservation. Stick around to learn more about me and
            the things I'm interested in!
          </p>
        </div>
        <section className="flex justify-center m-4">
          <Link
            className="text-xl md:text-2xl font-medium text-white mb-4 underline decoration-green-500"
            to="/blogs"
          >
            Discover Our Latest Blog Post!
          </Link>
        </section>
      </div>
    </>
  );
};

export default Home;
