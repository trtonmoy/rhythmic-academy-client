import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useInstruments = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: instruments = [] } = useQuery({
    queryKey: ["instruments"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/instruments`);
      return res.data;
    },
  });

  return [instruments, refetch];
};

export default useInstruments;

