import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-[80vh] bg-[#0a192f] flex items-center justify-center"
      >
        <div className="w-full max-w-4xl mx-auto px-8 text-center">
          <p className="text-[#77B255] text-xl">👋 Hi there!</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 animate-fadeInUp">
            I'm Vishnu Kerasiya,
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mt-4">
            Welcome to my website! I'm a software developer who loves writing
            code. When I'm not coding, I enjoy listening to music and watching
            football. I'm also passionate about protecting the environment, so
            I'm committed to crafting products that contribute positively to
            environmental preservation. Stick around to learn more about me and
            the things I'm interested in!
          </p>
        </div>
      </section>
      <section
        id="about"
        className="min-h-[20vh] bg-[#0a192f] flex justify-center items-center py-8"
      >
        <div className="container text-center">
          <Link
            className="text-xl md:text-2xl font-medium text-white underline decoration-green-500"
            to="/blogs"
          >
            Discover Our Latest Blog Post!
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
