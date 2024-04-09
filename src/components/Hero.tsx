const Hero = () => {
  return (
    <div className="w-full lg:h-screen bg-[#0a192f] pt-[80px] sm:pt-40 md:pt-27 lg:pt-0 pb-8">
      {/* container */}
      <div className="md:w-[80%] mx-auto px-8 flex flex-col justify-center h-full pt-0 sm:pt-27 md:pt-27">
        <p className="text-[#77B255] text-xl sm:text-xl">👋 Hi there!</p>
        <h1 className="text-4xl sm:text-4xl font-bold">I'm Vishnu Kerasiya,</h1>
        <h2 className="text-3xl sm:text-2xl text-gray-600 w-[100%] text-justify">
          Welcome to my website! I'm a software developer who loves writing
          code. When I'm not coding, I enjoy listening to music and watching
          football. I'm also passionate about protecting the environment, So I'm
          committed to crafting products that contribute positively to
          environmental preservation. Stick around to learn more about me and
          the things I'm interested in!
        </h2>
      </div>
    </div>
  );
};

export default Hero;
