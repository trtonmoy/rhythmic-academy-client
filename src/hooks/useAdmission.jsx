import React from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmission = () => {
  const { user, loading } = useAuth();
  // const token = localStorage.getItem('access-token');
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: subjects = [] } = useQuery({
    queryKey: ["admission", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/admission?email=${user?.email}`);
      // console.log("res axios", res);
      return res.data;
    },
  });

  return [subjects, refetch];
};

export default useAdmission;
