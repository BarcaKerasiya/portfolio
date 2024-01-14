const BlogContentSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:w-2/3 lg:w-1/2 mx-auto">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
        Blog Post Title
      </h1>
      <p className="text-gray-600 mb-4">
        Published on <span className="text-gray-400">September 9, 2023</span> by{" "}
        <span className="text-blue-500">Author Name</span>
      </p>
      <img
        src="blog-image.jpg"
        alt="Blog Post"
        className="rounded-lg mb-4 w-full"
      />
      <p className="text-gray-800 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
        mauris eget dolor tristique auctor. Nullam euismod vitae elit in
        vulputate. Nullam ut hendrerit tellus.
      </p>
      <p className="text-gray-800 leading-relaxed">
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Duis feugiat bibendum nisl, a suscipit erat
        faucibus non. Fusce ut semper justo. Donec scelerisque, ex id malesuada
        convallis.
      </p>
      {/* Add more paragraphs and content as needed */}
    </div>
  );
};

export default BlogContentSection;
