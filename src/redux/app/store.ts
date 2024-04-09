import { configureStore } from "@reduxjs/toolkit";
import blogsSlice from "../features/blog/blogSlice";

export const store = configureStore({ reducer: blogsSlice });
