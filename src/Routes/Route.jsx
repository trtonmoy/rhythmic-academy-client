import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../pages/Home/HomePage";
import Instructor from "../pages/Instructor/Instructor";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/instructors/:id",
        element: <Instructor></Instructor>,
      },
    ],
  },
]);
