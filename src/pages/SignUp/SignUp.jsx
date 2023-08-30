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
        // console.log("user", user);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const savedUser = {
              name: data.name,
              email: data.email,
              role: "user",
            };

            fetch("https://rhythmic-academy-server.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(savedUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  logOut()
                    .then(() => {})
                    .catch((err) => {
                      console.log(err.message);
                    });
                  navigate("/login");
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
          .catch((error) => {
            console.log(error.message);
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
              <div>
                <label
                  htmlFor="photoURL"
                  className="text-gray-700 font-medium mb-2 block"
                >
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photoURL"
                  id="photo"
                  placeholder="Provide a photo URL here..."
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-purple-500"
                />
              </div>
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Sign Up
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
