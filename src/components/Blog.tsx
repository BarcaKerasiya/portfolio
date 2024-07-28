import { Link } from "react-router-dom";
import { timeConvert } from "../utils/timeConversion";
import { blogInterface } from "../constants/constants";

interface blogProps {
  blogs: blogInterface[];
}
const Blog = ({ blogs }: blogProps) => {
  return (
    <>
      <div className="flex flex-wrap items-stretch justify-center gap-3 mt-8">
        {blogs.length > 0 ? (
          blogs.map((post) => (
            <article
              key={post._id}
              className="flex flex-col justify-between w-full  hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25"
            >
              <div className="rounded-[10px] bg-gray-900 p-4 sm:p-6 dark:bg-gray-900 flex flex-col h-full">
                <time
                  dateTime={post.datetime}
                  className="block text-xs text-gray-400 dark:text-gray-400"
                >
                  {timeConvert(post.createdAt)}
                </time>

                <Link to={`/blog/${post._id}`} className="flex-grow">
                  <h3 className="mt-0.5 text-lg font-medium text-white dark:text-white">
                    {post.title}
                  </h3>
                </Link>

                <div className="mt-4 flex flex-wrap gap-1">
                  {post.tagIds.map((tag) => (
                    <span
                      key={tag.tagName}
                      className="whitespace-nowrap rounded-full bg-purple-600 px-2.5 py-0.5 text-xs text-purple-100 dark:bg-purple-600 dark:text-purple-100"
                    >
                      {tag?.tagName}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))
        ) : (
          <>No Blogs.... </>
        )}
      </div>
    </>
  );
};

export default Blog;
