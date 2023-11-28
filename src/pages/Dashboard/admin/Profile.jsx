import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import loader from '../../../assets/loader.gif'
import Container from "../../../components/share/Container";
import Swal from "sweetalert2";

const Profile = () => {
    const axiosSecure = useAxiosSecure();
    const { user, loading } = useAuth();

    const { data: profile, isLoading, refetch } = useQuery({

        queryKey: ['profileData',],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/user/${user?.email}`);
            return res?.data;
        }
    })

    // phone number insert in to the database
    const handlePhoneNumber = (e) => {
        e.preventDefault();
        const form = e.target;
        const number = form.number.value;
        const numberData = {
            number:number
        }
        axiosSecure.put(`/api/user/${user?.email}`, numberData)
            .then(res => {
                refetch();
                if (res?.data?.modifiedCount == 1 || res?.data?.matchedCount ==1) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener(
                                "mouseenter",
                                Swal.stopTimer
                            );
                            toast.addEventListener(
                                "mouseleave",
                                Swal.resumeTimer
                            );
                        },
                    });
                    Toast.fire({
                        icon: "success",
                        title: "Number added successfully",
                    });
                    
                }
            })

    }
    if (isLoading || loading) {
        return <div className=" grid justify-center items-center h-screen">
            <img src={loader} alt="not found" />
        </div>
    }

    return (
        <div>
            <Container>
                <div className="card flex-col md:flex-row card-side md:h-[300px] items-center bg-slate-500  mt-2 my-5 md:my-0">
                    <figure><img src={profile?.image} className="w-48 h-52 md:w-60 md:h-60 md:pl-4 rounded-full pt-2" alt="not found" /></figure>
                    <div className="card-body p-4 text-[#c7d5e9]">
                        <div className="">
                            <h2 className=" text-xl font-semibold">Name : {profile?.name}</h2>
                            <h2 className=" text-xl font-semibold">Email : {profile?.email}</h2>
                            <h2 className=" text-xl font-semibold">Role : {profile?.role ? `${profile?.role}` : 'student'}</h2>

                            <h2 className=" text-xl font-semibold">Phone number : {profile?.number ? `${profile?.number}` : 'N/A'}</h2>
                            
                            <div className=" flex flex-col md:flex-row md:items-center gap-2 mt-2">
                                <h2 className=" text-xl font-semibold">Phone :</h2>
                                <form onSubmit={handlePhoneNumber} className="flex-1 flex gap-3">
                                    <div className="form-control max-w-sm relative flex-1">
                                        <input
                                            type="number"
                                            name="number"
                                            placeholder="please give a number!"
                                            className="input input-bordered text-black w-full"
                                            required
                                        />
                                    </div>
                                    <input type="submit" className=" btn bg-[#6e2fa9fc] text-white hover:bg-[#7946a8fc] border-none" value="Update" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
           </Container>

        </div>
    );
};

export default Profile;