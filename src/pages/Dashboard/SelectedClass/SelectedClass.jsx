import React from "react";
import useAdmission from "../../../hooks/useAdmission";
import { AiOutlineDelete } from "react-icons/ai";
import { FaAmazonPay } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useInstructors from "../../../hooks/useInstructors";
import { Link } from "react-router-dom";

const SelectedClass = () => {
  const [subjects] = useAdmission();
  const [, refetch] = useInstructors();
  const [AxiosSecure] = useAxiosSecure();

  const handleDelete = (subject) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        AxiosSecure.delete(`/admission/${subject._id}`).then((res) => {
          console.log("deleted res", res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <section className="w-full px-4">
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Delete</th>
                <th>Pay</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {subjects.map((subject) => (
                <tr key={subject._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-full h-24">
                          <img src={subject.image} alt="Image" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{subject.name}</td>
                  <td className="">{subject.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(subject)}
                      className="p-2 bg-red-500 rounded-xl text-2xl"
                    >
                      <AiOutlineDelete></AiOutlineDelete>
                    </button>
                  </td>
                  <td>
                    <Link to="/dashboard/pay">
                      <button className="p-2 bg-lime-500 rounded-xl text-2xl">
                        <FaAmazonPay></FaAmazonPay>
                      </button>
                    </Link>
                  </td>
                  <td className="">Pending</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SelectedClass;
