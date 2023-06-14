import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useInstruments = () => {
  const { user, loading } = useAuth();
  // const token = localStorage.getItem("access-token");
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: instruments = [] } = useQuery({
    queryKey: ["carts"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/instruments`);
      // console.log("res from axios", res);
      return res.data;
    },
  });

  return [instruments, refetch];
};

export default useInstruments;

// import { useQuery } from "@tanstack/react-query";

// const useInstruments = () => {
//   const {
//     data: instruments = [],
//     isLoading: loading,
//     refetch,
//   } = useQuery({
//     queryKey: ["instruments"],
//     queryFn: async () => {
//       const res = await fetch("http://localhost:5000/instruments");
//       return res.json();
//     },
//   });

//   return [instruments, loading, refetch];
// };

// export default useInstruments;
