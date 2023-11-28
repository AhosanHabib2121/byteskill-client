import axios from "axios";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
})

const useAxiosSecure = () => {
    // const { logOut } = useAuth();

    // console.log(user)
    
    axiosSecure.interceptors.response.use(res => {
        return res
    }, error => {
        console.log(error);
        if (error.response.status == 401 || error.response.status == 403) {
            console.log('error rediret login page');
        }
    })
    
    return axiosSecure;
};

export default useAxiosSecure;