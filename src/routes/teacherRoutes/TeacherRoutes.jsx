import useAuth from "../../hooks/useAuth";
import useTeacherAdmin from "../../hooks/useTeacherAdmin";
import loader from '../../assets/loader.gif';
import { Navigate } from "react-router-dom";

const TeacherRoutes = ({children}) => {
    const { user, loading } = useAuth();
    const [isTeacherAdmin, isTeacherLoading] = useTeacherAdmin();

    if (loading || isTeacherLoading) {
        return <div className=" grid justify-center items-center h-screen">
            <img src={loader} alt="not found" />
        </div>
    }

    if (user && isTeacherAdmin) {
        return children;
    }

    return <Navigate to='/signIn'>Sign In</Navigate>
};

export default TeacherRoutes;