import { useQuery } from "@tanstack/react-query";
import Container from "../../../components/share/Container";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import loader from '../../../assets/loader.gif'
import Swal from "sweetalert2";

const Allclasses = () => {
    const axiosSecure = useAxiosSecure();
    const { data: allClasses, isLoading, refetch} = useQuery({
        queryKey: ['allClasses'],
        queryFn: async () => {
            const res = await axiosSecure.get('/addClass');
            return res?.data;
        }
    })
    // handleApproved here
    const handleApproved = id => {
        axiosSecure.patch(`/addClass/approved/${id}`)
            .then(res => {
                if (res?.data?.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: 'Add class Approved',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            })
    }

    if (isLoading) {
        return <div className=" grid justify-center items-center h-screen">
            <img src={loader} alt="not found" />
        </div>
    }

    return (
        <div>
            
            <Container>
                <div className="overflow-x-auto h-screen rounded-lg">
                    <table className="table table-zebra ">
                        {/* head */}
                        <thead className=" bg-[#9050cc] text-white text-lg">
                            <tr>
                                <th>No.</th>
                                <th>Title</th>
                                <th>Images</th>
                                <th>Email</th>
                                <th>Short description</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allClasses?.map((data, inx) => <tr key={data._id}>
                                    <th>{inx + 1}</th>
                                    <td>{data?.title}</td>
                                    <td>
                                        <img src={data?.image} className="w-28 h-20 rounded-full" alt="not found" />
                                    </td>
                                    <td>{data?.email}</td>
                                    <td>{data?.description}</td>
                                    <td>{data?.status}</td>
                                    <td>
                                        {
                                            (data?.status == 'approved' || data?.status == 'rejected') ? <div className="join gap-2 " >
                                                <button
                                                    className="btn hover:bg-green-800 bg-green-700 text-white btn-md normal-case " disabled>
                                                    Approved
                                                </button>
                                                <button className="btn hover:bg-red-800 bg-red-700 text-white btn-md normal-case" disabled>
                                                    Reject
                                                </button>
                                            </div>
                                                : <div className="join gap-2">
                                                    <button
                                                        onClick={() => handleApproved(data?._id)} 
                                                        className="btn hover:bg-green-800 bg-green-700 text-white btn-md normal-case">
                                                        Approved
                                                    </button>

                                                    <button className="btn hover:bg-red-800 bg-red-700 text-white btn-md normal-case">
                                                        Reject
                                                    </button>
                                                </div>
                                        }

                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </Container>           
        </div>
    );
};

export default Allclasses;