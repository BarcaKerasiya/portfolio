// import { axiosInstance } from "../../api/axiosInstance";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const VerifyEmail = () => {
  const query = useQuery();
  const token = query.get("token");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        // if (!token) {
        //   throw new Error("No token provided or invalid token format");
        // }
        // const response = await axiosInstance.post("/verify", null, {
        //   params: { token },
        // });
        // setMessage(response.data.message);
      } catch (error) {
        // setMessage(error.response?.data?.message || error.message);
      }
    };

    verifyEmail();
    // Perform your token verification logic here
    console.log("Token:", token);
    // Example: make an API call to verify the token
  }, [token]);
  return (
    <div
      id="contact"
      className="w-full h-fit bg-[#0a192f] flex justify-center items-center p-4"
    >
      <div className="max-w-[1000px] mx-auto p-4 pt-[10rem] flex flex-col justify-center w-full h-full">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#77B255] text-green">
              Verify Email
            </p>
          </div>
        </div>
        <button>Verify your account</button>
      </div>
    </div>
  );
};

export default VerifyEmail;
