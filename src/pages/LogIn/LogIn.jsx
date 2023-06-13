import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const LogIn = () => {
  const { googleSignIn, setUser, logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        const savedUser = { name: user.displayName, email: user.email };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              navigate(from, { replace: true });
              Swal.fire({
                position: "top",
                icon: "success",
                title: "You have sign up successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const onSubmit = (data) => {
    console.log(data);
    logIn(data.email, data.password)
      .then((result) => {
        setUser(result.user);
        navigate("/");
        reset();
        Swal.fire({
          position: "top",
          icon: "success",
          title: "You have logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-purple-400">
        <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
          <h2 className="text-2xl text-center mb-6">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Username Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                id="username"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your username"
              />
              {errors.email && (
                <span className="text-red-600 text-sm">Email is required</span>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                Password
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                name="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
              {errors.password && (
                <span className="text-red-600 text-sm">
                  Password is required
                </span>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Log In
            </button>

            {/* Redirect to Sign Up Page */}
            <p className="mt-4 text-center text-gray-500 text-sm">
              Do not have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:text-blue-600">
                Sign Up
              </Link>
            </p>

            {/* Log in with Google Button */}
            <button
              onClick={handleGoogleLogin}
              type="button"
              className="mt-4 w-full py-2 px-4 border border-gray-300 rounded-md flex items-center justify-center text-sm font-medium text-white bg-purple-400 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2C5.03 2 1 6.03 1 11c0 2.93 1.16 5.59 3.06 7.53L10 20l5.94-1.47C17.84 16.59 19 13.93 19 11c0-4.97-4.03-9-9-9zm0 16V11h6.4c-.26 1.65-1.11 3.06-2.4 4.28L10 18zm4.26-5.72C13.92 13.27 12.05 14 10 14c-1.99 0-3.89-.73-5.32-2.06l-1.52 1.52C4.74 15.45 7.23 16 10 16c3.93 0 7-3.07 7-7h-2z"
                  clipRule="evenodd"
                />
              </svg>
              Log in with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
