import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { blogs: [{ id: "1", blog: "dd" }] };

export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      const blog = { id: nanoid(), blog: action.payload };
      state.blogs.push(blog);
    },
  },
});

export const { addBlog } = blogsSlice.actions;
export default blogsSlice.reducer;
