import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../api/axiosInstance";
import { useDebounce } from "use-debounce";
import { timeConvert } from "../../utils/timeConversion";

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
  createdAt: string;
  updatedAt: string;
}

interface tagInterface {
  _id: string;
  tagName: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const Blog = () => {
  const [blogs, setBlogs] = useState<postInterface[]>([]);
  const [tags, setTags] = useState<tagInterface[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [value] = useDebounce(searchQuery, 500);
  const [tagQuery, setTagQuery] = useState("");

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
        let query = `/blogs?`;
        if (value.length > 0 || tagQuery.length > 0) {
          if (value.length > 0) {
            query = query + `search_query=${value}`;
          }
          if (tagQuery.length > 0) {
            query = query + `&tag=${tagQuery}`;
          }
          const response = await axiosInstance.get(query); // Relative URL, it appends to the baseURL
          setBlogs(response.data);
        } else {
          const response = await axiosInstance.get("/blogs"); // Relative URL, it appends to the baseURL
          setBlogs(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBlogsData();
  }, [value, tagQuery]);

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
              value={searchQuery}
              defaultValue={"hello"}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <p className="py-6">Tags</p>
        <div className="flex justify-start items-center flex-wrap">
          {tags.map((tag) => {
            return (
              <span
                onClick={() => setTagQuery(tag._id)}
                className="p-[0.5rem] bg-[#77B255]  rounded-lg m-[0.5rem] cursor-pointer"
              >
                {tag.tagName}
              </span>
            );
          })}
          <span
            onClick={() => {
              setTagQuery("clearAll");
              setSearchQuery("");
            }}
            className="text-red-600 font-bold p-[0.5rem] bg-[#77B255]  rounded-lg m-[0.5rem] cursor-pointer"
          >
            Clear All
          </span>
        </div>
        {/* container for blogs */}
        <div className="grid gap-8 lg:grid-cols-2 pt-8">
          {blogs.length > 0 &&
            blogs.map((post) => {
              return (
                <article
                  key={post._id}
                  className={` flex flex-col items-start justify-between bg-[#77B255] p-[1rem] rounded-lg`}
                >
                  <div className="flex items-center justify-between gap-x-4 text-xs w-[100%]">
                    <span>
                      {post.tagIds.map((tag) => {
                        return (
                          <span
                            // to={post.category.href}
                            className="rounded-full bg-gray-50 px-3 mr-1 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                          >
                            {tag?.tagName}
                          </span>
                        );
                      })}
                    </span>
                    <time dateTime={post.datetime} className="text-[#D1D5DB]">
                      {timeConvert(post.createdAt)}
                    </time>
                  </div>
                  <Link to={`/blog/${post._id}`}>
                    <div className="group">
                      <h3 className="mt-3 text-lg font-semibold leading-6  group-hover:text-gray-600 text-white hover:underline">
                        <span className="text-white">{post.title}</span>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-[#D1D5DB]">
                        {/* {parse(post?.content)} */}
                      </p>
                    </div>
                  </Link>
                </article>
              );
            })}

          {blogs.length === 0 && <>No Blogs.... </>}
        </div>
      </div>
    </div>
  );
};

export default Blog;
