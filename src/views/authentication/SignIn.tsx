import { useState } from "react";
import { axiosInstance } from "../../api/axiosInstance";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { email, password };
    try {
      const response = await axiosInstance.post("/auth/login", data);
      console.log(response);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div
      id="signin"
      className="w-full h-fit bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex flex-col max-w-[600px] w-full pt-[10rem]"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#77B255] text-green">
            Sign In
          </p>
          <p className="text-gray-300 py-4">
            {/* Submit the form below or shoot me an email - {mail} */}
          </p>
        </div>
        <input
          className="p-2 rounded-md focus:outline-0 text-[#77B255]"
          type="email"
          placeholder="Email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="my-4 p-2 rounded-md focus:outline-0 text-[#77B255]"
          type="text"
          placeholder="Password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="text-white border-2 border-[#d4ffbb] hover:bg-[#77B255] hover:border-[#77B255] px-4 py-3 my-8 mx-auto flex items-center rounded-md"
        >
          Sign In
        </button>
        <p>
          Don't have an account yet?{" "}
          <span>
            <Link to="/sign-up">Create one.</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
