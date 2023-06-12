import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, logOut, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        reset();
        console.log("user", user);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            console.log("user profile updated");
          })
          .catch((error) => {
            console.log(error.message);
          });
        logOut();
        navigate("/login");
        Swal.fire({
          position: "top",
          icon: "success",
          title: "You have sign up successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <section>
      <div>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700">
          <div className="bg-white shadow-lg rounded-lg p-8 w-96">
            <h2 className="text-3xl text-center text-gray-800 mb-6">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="text-gray-700 font-medium mb-2 block"
                >
                  Name
                </label>
                <input
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Your Name...."
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-purple-500"
                />
                {errors.name && (
                  <span className="text-red-600 text-sm">
                    Name should be given
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-gray-700 font-medium mb-2 block"
                >
                  Email
                </label>
                <input
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="Your Email......"
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-purple-500"
                />
                {errors.email && (
                  <span className="text-red-600 text-sm">
                    Email is required
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-gray-700 font-medium mb-2 block"
                >
                  Password
                </label>
                <input
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="Your Password...."
                  type="password"
                  id="password"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-purple-500"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="text-gray-700 font-medium mb-2 block"
                >
                  Confirm Password
                </label>
                <input
                  name="confirm"
                  {...register("confirm", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="Confirm Your Password...."
                  type="password"
                  id="confirmPassword"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-purple-500"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Confirm Your Password</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">
                    Password has to be 6 characters
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    It has to be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password should contain a Uppercase a Lower case, a digit
                    and a special character.
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Sign Up
              </button>
              <div className="text-center mt-4">
                <span className="text-gray-600">Or</span>
              </div>
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-md w-full flex items-center justify-center border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500">
                <span className="text-purple-600 mr-2">
                  Sign In with Google
                </span>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM19.44 9.5H12V14.5H15.54C15.3 15.75 14.34 16.79 13.08 17.05V19.5H16.61C19.23 18.06 20.5 15.24 19.91 12C19.5 9.59 17.41 7.5 15 7.5H19.44V9.5ZM9.47 14.5C7.39 14.5 5.7 12.81 5.7 10.7C5.7 9.05 6.79 7.61 8.36 7.08V4.64C5.1 5.37 3 7.91 3 10.7C3 14.08 5.92 17 9.3 17C11.68 17 13.63 15.62 14.19 13.47H11.75V11.03H15.89C15.74 11.78 15.23 12.38 14.51 12.63C15.26 12.17 15.75 11.39 15.75 10.5C15.75 9.11 14.61 8 13.22 8H13.19L11.75 8.03V5.58H14.19C16.84 5.58 18.94 7.68 18.94 10.33C18.94 12.26 17.75 13.95 15.94 14.6C15.73 14.66 15.5 14.7 15.26 14.7H9.47V14.5Z" />
                </svg>
              </button>
              <div className="text-center mt-4">
                <span className="text-gray-600">
                  Already have an account?{" "}
                  <Link to="/login" className="text-purple-600 font-medium">
                    Log in
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
