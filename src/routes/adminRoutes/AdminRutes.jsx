import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";
import loader from '../../assets/loader.gif';
import { Navigate } from "react-router-dom";

const AdminRutes = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    // const [isTeacherAdmin, isTeacherLoading] = useTeacherAdmin();

    if (loading || isAdminLoading) {
        return <div className=" grid justify-center items-center h-screen">
            <img src={loader} alt="not found" />
        </div>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/signIn'>Sign In</Navigate>

    
};

export default AdminRutes;