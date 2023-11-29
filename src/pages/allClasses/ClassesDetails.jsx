import { Link, useParams } from "react-router-dom";
import BannerTitle from "../../components/share/BannerTitle";
import Container from "../../components/share/Container";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import loader from '../../assets/loader.gif'
import Button from "../../components/button/Button";
import { useEffect } from "react";
import AOS from 'aos';

const ClassesDetails = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, [])

    const { id } = useParams();
    const axiosSecure = useAxiosSecure();

    const { data: classesDetails, isLoading } = useQuery({
        queryKey: ['enroll'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/classesDetails/${id}`);
            return res.data;
        }

    })

    if (isLoading) {
        return <div className=" grid justify-center items-center h-screen">
            <img src={loader} alt="not found" />
        </div>
    }

    return (
        <div className=" pt-28">
            <Container>
                <BannerTitle
                    title={`Explore [${classesDetails?.title}] Excellence: Enroll Today!`}
                    
                />
                {/* content details */}
                <div className=" grid grid-cols-1 gr md:grid-cols-2 gap-8 items-center my-7">
                    <div className=" flex flex-col-reverse md:flex-col gap-4 ">
                        <img src={classesDetails?.image} className=" rounded-xl" alt="not found" data-aos="zoom-in" />
                        <p className="text-[#94A3B8] text-lg">
                            {classesDetails?.description}
                        </p>
                    </div>
                    <div data-aos="fade-down">
                        <div className=" space-y-2" >
                            <h2 className=" text-2xl font-semibold text-[#94A3B8]">Title : <span className=" text-lg">{classesDetails?.title}</span></h2>
                            <h2 className=" text-2xl font-semibold text-[#94A3B8]">Name : <span className=" text-lg">{classesDetails?.name}</span></h2>
                            <h2 className=" text-2xl font-semibold text-[#94A3B8]">Email : <span className=" text-lg">{classesDetails?.email}</span></h2>
                            <h2 className=" text-2xl font-semibold text-[#94A3B8]">Price : <span className=" text-lg">${classesDetails?.price}</span></h2>
                        </div>
                        <div className=" mt-4">
                            <Link to={`/payment/${classesDetails?._id}`}>
                                <Button
                                    label={'Pay'}
                                />
                            </Link>
                        </div>
                    </div>
               </div>
            </Container>
        </div>
    );
};

export default ClassesDetails;