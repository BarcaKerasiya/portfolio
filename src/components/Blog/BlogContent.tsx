import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { axiosInstance } from "../../api/axiosInstance";
import parse from "html-react-parser";
import { timeConvert } from "../../utils/timeConversion";
import { FaArrowLeftLong } from "react-icons/fa6";

interface postInterface {
  _id: number;
  title: string;
  href: string;
  content: string;
  date: string;
  datetime: string;
  category: { title: string; href: string };
  author: {
    name: string;
    role: string;
    href: string;
    imageUrl: string;
  };
  authorIds: Author[];
  createdAt: string;
}

interface Author {
  _id: number;
  name: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  jobTitle: string;
}
const BlogContentSection = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<postInterface | null>(null);

  useEffect(() => {
    const fetchTagsData = async () => {
      try {
        const response = await axiosInstance.get(`/blogs/${id}`); // Relative URL, it appends to the baseURL
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTagsData();
  }, []);

  return (
    <>
      <main className="pt-20 pb-16 lg:pt-32 lg:pb-24  bg-[#0a192f] antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          {blog ? (
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <header className="mb-4 lg:mb-6 not-format">
                <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                    <NavLink
                      className="hover:text-[#77B255] duration-300"
                      to="/blogs"
                    >
                      <FaArrowLeftLong size={24} className="text-white mr-5" />
                    </NavLink>

                    <div className="-z-50 relative w-10 h-10 mr-4  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                      <svg
                        className="absolute w-12 h-12 text-gray-400 -left-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>

                    <div>
                      {blog?.authorIds?.map((author) => {
                        return (
                          <section key={author._id}>
                            <a
                              href="#"
                              rel="author"
                              className="text-xl font-bold text-white dark:text-white"
                            >
                              {author?.name}
                            </a>
                            <p className="text-base text-gray-500 dark:text-gray-400">
                              {author?.jobTitle}
                            </p>
                          </section>
                        );
                      })}

                      <p className="text-base text-gray-500 dark:text-gray-400">
                        <time title="February 8th, 2022">
                          {blog && timeConvert(blog?.createdAt)}
                        </time>
                      </p>
                    </div>
                  </div>
                </address>
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white lg:mb-6 lg:text-4xl dark:text-white">
                  {blog && blog.title}
                </h1>
              </header>
              <div>{parse(`${blog && blog.content}`)}</div>
            </article>
          ) : (
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <header className="mb-4 lg:mb-6 not-format">
                <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                    <div className="-z-50 relative w-10 h-10 mr-4  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                      <svg
                        className="absolute w-12 h-12 text-gray-400 -left-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>

                    <div>
                      <section>
                        <a
                          href="#"
                          rel="author"
                          className="text-xl font-bold text-white dark:text-white"
                        >
                          {/* {author?.name} */}
                        </a>
                        <p className="text-base text-gray-500 dark:text-gray-400">
                          {/* {author?.jobTitle} */}
                        </p>
                      </section>

                      <p className="text-base text-gray-500 dark:text-gray-400">
                        <time title="February 8th, 2022">
                          {/* {blog && timeConvert(blog?.createdAt)} */}
                        </time>
                      </p>
                    </div>
                  </div>
                </address>
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white lg:mb-6 lg:text-4xl dark:text-white">
                  {/* {blog && blog.title} */}
                </h1>
              </header>
              <div></div>
            </article>
          )}
        </div>
      </main>
    </>
  );
};

export default BlogContentSection;
