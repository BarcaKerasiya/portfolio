// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";
import { Suspense } from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </Provider>
);
