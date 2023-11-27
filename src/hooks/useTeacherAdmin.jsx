import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useTeacherAdmin = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isTeacherAdmin, isPending, } = useQuery({
        queryKey: ['isTeacherAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/user/teacherAdmin/${user?.email}`);
            return res.data?.teacherAdmin;
        }

    });
    return [isTeacherAdmin, isPending]
};

export default useTeacherAdmin;