const Hero = () => {
  return (
    <div className="w-full lg:h-screen bg-[#0a192f] pt-[80px] sm:pt-40 md:pt-27 lg:pt-0 pb-8">
      {/* container */}
      <div className="md:w-[80%] mx-auto px-8 flex flex-col justify-center h-full pt-0 sm:pt-27 md:pt-27">
        <p className="text-[#77B255] text-xl sm:text-xl">👋 Hi there!</p>
        <h1 className="text-4xl sm:text-4xl font-bold">I'm Vishnu Kerasiya,</h1>
        <h2 className="text-3xl sm:text-2xl text-gray-600 w-[100%] text-justify">
          a full-stack developer who loves coding and cares about the
          environment and healthy eating. Join me on my website, where I share
          my coding adventures and tips, along with some crunchy stories about
          sustainable living and my favorite nutritious snacks. Let's make
          coding and munching on good food simple and fun! 🌱💻
        </h2>
      </div>
    </div>
  );
};

export default Hero;
