import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import loader from '../../assets/loader.gif';

const OurTeacher = () => {
    const axiosPublic = useAxiosPublic();

    const { data: allTeacher, isLoading} = useQuery({
        queryKey: ['allTeacher'],
        queryFn: async () => {
            const res = await axiosPublic.get('/api/teacherAll');
            return res?.data;
        }
    })
    if (isLoading) {
        return <div className=" grid justify-center items-center h-screen">
            <img src={loader} alt="not found" />
        </div>
    }

    return (
        <div className="mt-16">
            {/* Section title here */}
            <div className=" text-center">
                <h2 className='text-4xl font-bold'>Our all teacher</h2>
                <p className='max-w-xl mx-auto mt-2 text-[#94A3B8]'>The details and pictures of the selected teacher are given for you.</p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    allTeacher.map((teacher, inx) => <div key={teacher._id} data-aos="zoom-out-up" data-aos-delay={(inx + 1) * 300} className="card   border-2 border-[#9333EA]">
                        <figure><img src={teacher?.image} className=" w-48 h-48 mt-7 rounded-full" alt="not found" /></figure>
                        <div className="card-body text-center">
                            <h2 className=" text-2xl text-[#7e32c4] ">{teacher?.name}</h2>
                            <h2 className=" text-base"><span>Category: </span> {teacher?.category}</h2>
                            <h2 className="text-base"><span>Experience:</span> {teacher?.experience}</h2>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default OurTeacher;