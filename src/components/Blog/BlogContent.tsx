import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../api/axiosInstance";
import parse from "html-react-parser";

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
  id: number;
  name: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  jobTitle: string;
}
const BlogContentSection = () => {
  let { id } = useParams();
  const [blog, setBlog] = useState<postInterface | null>(null);
  console.log("blog", blog);

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
  console.log("id", id);

  const timeConvert = (createdAt: string) => {
    // const createdAt = "2024-02-29T12:04:57.591Z";
    const date = new Date(createdAt);

    // const options = { month: "short", day: "numeric", year: "numeric" };
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
    console.log(formattedDate); // Output: "Feb. 29, 2024"
  };
  return (
    <>
      <main className="pt-20 pb-16 lg:pt-32 lg:pb-24  dark:bg-gray-900 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
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
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>

                  <div>
                    {blog?.authorIds?.map((author) => {
                      return (
                        <>
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
                        </>
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
            <p>{parse(`${blog && blog.content}`)}</p>
          </article>
        </div>
      </main>
    </>
  );
};

export default BlogContentSection;
