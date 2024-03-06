import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  tagIds: tagInterface[]; // Add this property
}

interface tagInterface {
  id: number;
  tagName: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const Blog = () => {
  const [blogs, setBlogs] = useState<postInterface[]>([]);
  const [tags, setTags] = useState<tagInterface[]>([]);
  // console.log("blogs", blogs);
  useEffect(() => {
    const fetchTagsData = async () => {
      try {
        const response = await axiosInstance.get("/tags"); // Relative URL, it appends to the baseURL
        setTags(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTagsData();
  }, []);
  useEffect(() => {
    const fetchBlogsData = async () => {
      try {
        const response = await axiosInstance.get("/blogs"); // Relative URL, it appends to the baseURL
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBlogsData();
  }, []);
  // projects file
  //   const project = data;
  //setProject(data);

  return (
    <div id="work" className="w-full md:h-fit text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 pt-[10rem] flex flex-col justify-center w-full h-full">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#77B255] text-green">
              Blogs
            </p>
            <p className="py-6">Check out my blogs</p>
          </div>
          <div>
            <input
              placeholder="Search post by title..."
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
            />
          </div>
        </div>

        <p className="py-6">Tags</p>
        <div className="flex justify-start items-center flex-wrap">
          {tags.map((item) => {
            return (
              <span className="p-[0.5rem] bg-[#77B255]  rounded-lg m-[0.5rem]">
                {item.tagName}
              </span>
            );
          })}
        </div>
        {/* container for blogs */}
        <div className="grid gap-8 lg:grid-cols-2 p-10">
          {blogs.map((post) => {
            // console.log("post", post);
            return (
              <article
                key={post._id}
                className={` ${post._id} flex max-w-xl flex-col items-start justify-between bg-[#77B255] p-[1rem] rounded-lg`}
              >
                <Link to={`/blog/${post._id}`}>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-[#D1D5DB]">
                      {post.date}
                    </time>
                    {post.tagIds.map((tag) => {
                      return (
                        <span
                          // to={post.category.href}
                          className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                        >
                          {tag?.tagName}
                        </span>
                      );
                    })}
                  </div>
                  <div className="group">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <span className="text-white">{post.title}</span>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-[#D1D5DB]">
                      {parse(post?.content)}
                    </p>
                  </div>
                  {/* <div className="mt-8 flex items-center gap-x-4">
                    <img
                      src={post.author.imageUrl}
                      alt=""
                      className="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <span className="text-white">{post.author.name}</span>
                      </p>
                      <p className="text-[#D1D5DB]">{post.author.role}</p>
                    </div>
                  </div> */}
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
