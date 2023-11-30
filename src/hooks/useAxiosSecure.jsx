import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://byteskill-server-ass12.vercel.app',
    withCredentials: true,
})

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    axiosSecure.interceptors.response.use(res => {
        return res
    }, error => {
        console.log(error);
        if (error.response.status == 401 || error.response.status == 403) {
            logOut()
             .then(() => {
                 navigate("/signIn");
             })
            .catch((error) => console.log(error));
            }
    })
    
    return axiosSecure;
};

export default useAxiosSecure;