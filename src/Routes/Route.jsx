import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../pages/Home/HomePage";
import Instructor from "../pages/Instructor/Instructor";
import AllInstructors from "../pages/Instructor/Allinstructors";
import Classes from "../pages/Classes/Classes";
import SignUp from "../pages/SignUp/SignUp";
import LogIn from "../pages/LogIn/LogIn";

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
        path: "/instructors",
        element: <AllInstructors></AllInstructors>,
      },
      {
        path: "/instructors/:id",
        element: <Instructor></Instructor>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/instructors/${params.id}`),
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/login",
    element: <LogIn></LogIn>,
  },
]);
