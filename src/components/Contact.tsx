import { mail } from "../constants/constants";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-fit bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action={import.meta.env.VITE_REACT_APP_GETFORM_URL}
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
        />
        <input
          className="my-4 p-2 rounded-md focus:outline-0 text-[#77B255]"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="p-2 rounded-md focus:outline-0 text-[#77B255]"
          name="message"
          rows={6}
          placeholder="Message"
          required
        ></textarea>
        <button className="text-white border-2 border-[#77B255] hover:bg-[#77B255] hover:border-[#77B255] px-4 py-3 my-8 mx-auto flex items-center rounded-md">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
