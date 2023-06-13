import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../pages/Home/HomePage";
import Instructor from "../pages/Instructor/Instructor";
import AllInstructors from "../pages/Instructor/Allinstructors";
import Classes from "../pages/Classes/Classes";
import SignUp from "../pages/SignUp/SignUp";
import LogIn from "../pages/LogIn/LogIn";
import Dashboard from "../pages/Dashboard/Dashboard";
import SelectedClass from "../pages/Dashboard/SelectedClass/SelectedClass";
import EnrolledClass from "../pages/Dashboard/EnrolledClass/EnrolledClass";
import PrivateRoute from "./PrivateRoute";
import Pay from "../pages/Dashboard/Pay/Pay";

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
        element: (
          <PrivateRoute>
            <Classes></Classes>
          </PrivateRoute>
        ),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/selected",
        element: <SelectedClass></SelectedClass>,
      },
      {
        path: "/dashboard/enrolled",
        element: <EnrolledClass></EnrolledClass>,
      },
      {
        path: "/dashboard/pay",
        element: <Pay></Pay>,
      },
    ],
  },
]);
