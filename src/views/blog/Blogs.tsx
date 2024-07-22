import { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axiosInstance";
import { useDebounce } from "use-debounce";
import Tag from "../../components/Tag";
import { blogInterface, tagInterface } from "../../constants/constants";
import Blog from "../../components/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState<blogInterface[]>([]);
  const [tags, setTags] = useState<tagInterface[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [value] = useDebounce(searchQuery, 500);
  const [tagQuery, setTagQuery] = useState("");

  const fetchTagsData = async () => {
    try {
      const response = await axiosInstance.get("/tags");
      setTags(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
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
    <>
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

          <Tag
            tags={tags}
            setTagQuery={setTagQuery}
            setSearchQuery={setSearchQuery}
          />
          <Blog blogs={blogs} />
        </div>
      </div>{" "}
    </>
  );
};

export default Blogs;
