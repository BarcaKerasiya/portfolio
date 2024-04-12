import reactLogo from "../assets/technologies/react.png";
import nodeLogo from "../assets/technologies/node.png";
import dockerLogo from "../assets/technologies/docker.png";
import mongoDBLogo from "../assets/technologies/mongodb.png";
import awsCloudLogo from "../assets/technologies/awscloud.png";
import nginxLogo from "../assets/technologies/nginx.png";
import ec2Logo from "../assets/technologies/ec2.png";

const Tech = () => {
  const logos = [
    { logo: reactLogo, name: "React.js" },
    { logo: nodeLogo, name: "Node.js" },
    { logo: dockerLogo, name: "Docker" },
    { logo: mongoDBLogo, name: "MongoDB" },
    { logo: awsCloudLogo, name: "AWS Cloud" },
    { logo: nginxLogo, name: "NGINX" },
    { logo: ec2Logo, name: "EC2" },
  ];
  return (
    <div id="work" className="w-full md:h-fit text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 pt-[10rem] flex flex-col justify-center w-full h-full">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#77B255] text-green">
              Technologies
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center h-[100vh]">
          {logos.map((logo) => {
            return (
              <div className="w-full lg:w-1/4 sm:w-1/2 pt-6">
                <div className="flex items-center justify-center flex-col bg-[#0a192f] text-white">
                  <span className="text-gray-300 bg-white rounded-full p-[1rem]">
                    <img
                      src={logo.logo}
                      alt={`${logo.name} logo`}
                      className="h-24 w-24"
                    />
                  </span>
                  <span className="text-[24px] pt-3">{logo.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tech;
