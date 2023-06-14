import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_IMAGE_TOKEN;

const AddCourse = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { handleSubmit, reset, register } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  // console.log(img_hosting_token, img_hosting_url);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const {
            name,
            email,
            price,
            small_details,
            available_seats,
            instructor_name,
          } = data;
          const newItem = {
            name,
            email,
            price: parseFloat(price),
            small_details,
            image: imgURL,
            available_seats,
            instructor_name,
            role: 'pending',
            enrolled_studs: 0,
            feedback: '',

          };
          console.log(newItem);
          axiosSecure.post("/instruments", newItem).then((data) => {
            console.log("after posting new menu item", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div>
      <div className="max-w-md mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Add Course</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold mb-1">
              Name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="files" className="block font-bold mb-1">
              Files
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              id="files"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Short Details
            </label>
            <textarea
              {...register("small_details", { required: true })}
              className="resize-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="small_details"
              rows="4"
              placeholder="Enter your message..."
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="instructor" className="block font-bold mb-1">
              Instructor
            </label>
            <input
              {...register("instructor_name", { required: true })}
              type="text"
              id="instructor"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              readOnly
              value={user?.displayName}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-1">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              readOnly
              value={user?.email}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block font-bold mb-1">
              Price
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              id="price"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="seats" className="block font-bold mb-1">
              Available Seats
            </label>
            <input
              {...register("available_seats", { required: true })}
              type="number"
              id="seats"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>

          <div className="w-full text-center my-8">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Add Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
