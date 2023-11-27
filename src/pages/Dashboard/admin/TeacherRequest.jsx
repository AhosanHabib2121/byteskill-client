import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const TeacherRequest = () => {
    const axiosSecure = useAxiosSecure();
    const { data:teacherRequest , isPending} = useQuery({
        queryKey: ['teacher-request'],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/teacher/request');
            return res?.data;
        }
    })
    if (isPending) {
        return <p className="text-red-600">loading....</p>
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
                                    <div className="join gap-2">
                                        <button className="btn hover:bg-green-800 bg-green-700 text-white btn-md normal-case">
                                            Approved
                                        </button>
                                        <button className="btn hover:bg-red-800 bg-red-700 text-white btn-md normal-case">
                                            Reject
                                        </button>
                                    </div>
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