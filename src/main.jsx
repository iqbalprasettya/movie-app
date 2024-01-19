import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detail from "./pages/Detail";
import { MovieEditor } from "./pages/MovieEditor";

const router = createBrowserRouter([
  {
    path: "/detail",
    element: <Detail />,
  },

  {
    path: "/movie-editor",
    element: <MovieEditor />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
