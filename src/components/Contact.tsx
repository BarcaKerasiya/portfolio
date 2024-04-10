import { axiosInstance } from "../api/axiosInstance";
import { mail } from "../constants/constants";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const postData = async () => {
    try {
      const response = await axiosInstance.post("/contact-me", formData); // Adjust the URL according to your API endpoint
      console.log("Post request response:", response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postData();

    console.log("formdata", formData);
  };
  return (
    <div
      id="contact"
      className="w-full h-fit bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex flex-col max-w-[600px] w-full pt-[10rem]"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#77B255] text-green">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email - {mail}
          </p>
        </div>
        <input
          className="p-2 rounded-md focus:outline-0 text-[#77B255]"
          type="text"
          placeholder="Name"
          name="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          className="my-4 p-2 rounded-md focus:outline-0 text-[#77B255]"
          type="email"
          placeholder="Email"
          name="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <textarea
          className="p-2 rounded-md focus:outline-0 text-[#77B255]"
          name="message"
          rows={6}
          placeholder="Message"
          required
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        ></textarea>
        <button
          type="submit"
          className="text-white border-2 border-[#77B255] hover:bg-[#77B255] hover:border-[#77B255] px-4 py-3 my-8 mx-auto flex items-center rounded-md"
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
