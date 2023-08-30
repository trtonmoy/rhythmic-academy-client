import React from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmission = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: subjects = [] } = useQuery({
    queryKey: ["admission", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/admission?email=${user?.email}`);
      return res.data;
    },
  });

  return [subjects, refetch];
};

export default useAdmission;
