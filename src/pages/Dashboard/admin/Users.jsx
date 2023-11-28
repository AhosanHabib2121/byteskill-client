import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";
import loader from '../../../assets/loader.gif'
import Container from "../../../components/share/Container";

const Users = () => {
    const axiosSecure = useAxiosSecure();
    
    // get user data
    const { data:users, isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/user');
            return res?.data;
        }
    })

    // make admin
    const handleMakeAdmin = user => {
        axiosSecure.patch(`/api/user/admin/${user._id}`)
            .then(res => {
                refetch();
                if (res.data.matchedCount == 1) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an admin now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    // loading here
    if (isLoading) {
        return <div className=" grid justify-center items-center h-screen">
            <img src={loader} alt="not found" />
        </div>
    }
    return (
        <Container>
            <div className="overflow-x-auto h-screen rounded-lg">
                <table className="table table-zebra ">
                    {/* head */}
                    <thead className=" bg-[#9050cc] text-white text-lg">
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Images</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, inx) => <tr key={user._id}>
                                <th>{inx + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>
                                    {
                                        user.role == 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="btn hover:bg-[#7433b1] bg-[#9050cc] btn-md normal-case">
                                            <FaUsers className=" text-xl text-white" />
                                        </button>
                                    }
                                </td>
                                <td>
                                    <img src={user?.image} className="w-20 rounded-full" alt="not found" />
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
       </Container>
    );
};

export default Users;