import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useTeacherAdmin = () => {
    const { user,loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isTeacherAdmin, isLoading:isTeacherLoading } = useQuery({
        queryKey: ['isTeacherAdmin', user?.email],
        enabled:!loading && !!user?.email,
        queryFn: async () => {

            const res = await axiosSecure.get(`/api/user/teacherAdmin/${user?.email}`);
            return res.data?.teacherAdmin;
        }

    });
    return [isTeacherAdmin, isTeacherLoading]
};

export default useTeacherAdmin;