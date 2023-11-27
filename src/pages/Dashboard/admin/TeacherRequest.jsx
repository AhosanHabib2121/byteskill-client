import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import loader from '../../../assets/loader.gif'
import Swal from "sweetalert2";

const TeacherRequest = () => {
    const axiosSecure = useAxiosSecure();
    const { data:teacherRequest , isPending, refetch} = useQuery({
        queryKey: ['teacher-request'],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/teacher/request');
            return res?.data;
        }
    })

    // handleApproved here
    const handleApproved = id => {
        axiosSecure.patch(`/api/teacher/request/${id}`)
            .then(res => {
                if(res?.data?.modifiedCount){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: 'Teacher request Accepted',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            })
    }


    if (isPending) {
        return <div className=" grid justify-center items-center h-screen">
            <img src={loader} alt="not found" />
        </div>
    }

    return (
        <div>
            <div className="overflow-x-auto h-screen rounded-lg">
                <table className="table table-zebra ">
                    {/* head */}
                    <thead className=" bg-[#9050cc] text-white text-lg">
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Images</th>
                            <th>Experience</th>
                            <th>Title</th>
                            <th>category</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            teacherRequest?.map((data, inx)=> <tr key={data._id}>
                                <th>{ inx +1 }</th>
                                <td>{data?.name }</td>
                                <td>
                                    <img src={data?.image} className="w-20 rounded-full" alt="not found" />
                                </td>
                                <td>{data?.title}</td>
                                <td>{data?.experience}</td>
                                <td>{data?.category}</td>
                                <td>{data?.status}</td>
                                <td>
                                    {
                                        (data?.status == 'accepted' || data?.status == 'rejected') ? <div className="join gap-2 " >
                                            <button onClick={() => handleApproved(data?._id)} className="btn hover:bg-green-800 bg-green-700 text-white btn-md normal-case " disabled>
                                                Approved
                                            </button>
                                            <button className="btn hover:bg-red-800 bg-red-700 text-white btn-md normal-case" disabled>
                                                Reject
                                            </button>
                                        </div>
                                            : <div className="join gap-2">
                                                <button onClick={() => handleApproved(data?._id)} className="btn hover:bg-green-800 bg-green-700 text-white btn-md normal-case">
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
        </div>
    );
};

export default TeacherRequest;