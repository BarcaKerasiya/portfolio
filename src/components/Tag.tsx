interface tagInterface {
  _id: string;
  tagName: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

interface TagProps {
  tags: tagInterface[];
  setTagQuery: (tagId: string) => void;
  setSearchQuery: (query: string) => void;
}
const Tag = ({ tags, setTagQuery, setSearchQuery }: TagProps) => {
  return (
    <>
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
          className=" font-bold p-[0.5rem] bg-[#c85858]  rounded-lg m-[0.5rem] cursor-pointer"
        >
          Clear All
        </span>
      </div>
    </>
  );
};

export default Tag;
