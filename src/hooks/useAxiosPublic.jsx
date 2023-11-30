import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://byteskill-server-ass12.vercel.app',
})
const useAxiosPublic = () => {
    
    return axiosPublic;
};

export default useAxiosPublic;