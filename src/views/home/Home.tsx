import { Link } from "react-router-dom";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axiosInstance";

const Home = () => {
  const [videoUrl, setVideoUrl] = useState("");
  console.log("videoUrl", videoUrl);
  useEffect(() => {
    // Fetch the video URL from the server
    const fetchVideoUrl = async () => {
      try {
        const response = await axiosInstance.get("/video");
        console.log("response", response.data);
        setVideoUrl(response.data);
      } catch (error) {
        console.error("Error fetching video URL:", error);
      }
    };

    fetchVideoUrl();
  }, []);

  if (!videoUrl) {
    return <p>Loading video...</p>;
  }
  return (
    <>
      <section
        id="home"
        className="min-h-[80vh] bg-[#0a192f] flex items-center justify-center "
      >
        <div className="w-full max-w-4xl mx-auto px-8 text-center relative mt-[4rem]">
          <p className="text-[#77B255] text-xl">👋 Hi there!</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 animate-fadeInUp">
            I'm Vishnu Kerasiya,
          </h1>
          <p className="text-2xl sm:text-2xl lg:text-2xl text-gray-400 mt-4">
            Welcome to my website! I'm a software developer who loves writing
            code. When I'm not coding, I enjoy listening to music and watching
            football. I'm also passionate about protecting the environment, so
            I'm committed to crafting products that contribute positively to
            environmental preservation. Stick around to learn more about me and
            the things I'm interested in!
          </p>
          <br />
          <br />
          <div className="flex justify-center  right-[44%] top-[115%]">
            <Link to="https://github.com/BarcaKerasiya" target="_blank">
              <FaGithubSquare size={36} />
            </Link>
            &nbsp; &nbsp; &nbsp;
            <Link
              to="https://www.linkedin.com/in/kerasiya-vishnu-0j7j1j0j/"
              target="_blank"
            >
              <FaLinkedin size={36} />
            </Link>
          </div>
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
      <div>
        <h1>Autoplay Video</h1>
        {/* Embed the video using an iframe */}
        <iframe
          src="https://d2gcgu77m9vqg6.cloudfront.net/api/video"
          allow="autoplay"
          width="560"
          height="315"
          title="Autoplay Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default Home;
