import { useQuery } from "@tanstack/react-query";
import Button from "../../components/button/Button";
import BannerTitle from "../../components/share/BannerTitle";
import Container from "../../components/share/Container";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import loader from '../../assets/loader.gif';
import { useEffect } from "react";
import AOS from 'aos';
import { Link } from "react-router-dom";

const AllClasses = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            delay: 300,
        });
    }, [])
    
    const axiosPublic = useAxiosPublic();
    const { data: allCalss, isLoading } = useQuery({
        queryKey: ['allCalss'],
        queryFn: async () => {
            const res = await axiosPublic.get('/addClass/approved');
            return res.data;
        }

    });


    if (isLoading) {
        return <div className=" grid justify-center items-center h-screen">
            <img src={loader} alt="not found" />
        </div>
    }

    return (
        <div className=" pt-28">
            <Container>
                {/* BannerTitle section here */}
                <BannerTitle
                    title={'See all class'}
                    subTitle={'Enroll your IT potential with ByteSkill today and embark on a journey of learning and growth!'}
                />
                <div className=" mt-8">
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            allCalss?.map((data, inx) => <div key={data?._id} className="card card-compact bg-slate-700 shadow-xl" data-aos="fade-up" data-aos-delay={(inx + 1) * 300}>
                                <figure><img src={data?.image} className=" w-full h-60 object-cover" alt="not found" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{data?.title}</h2>
                                    <p>Name: {data?.name}</p>
                                    <p>Price: ${data?.price}</p>
                                    <div className="card-actions justify-end mt-3">
                                        <Link to={`/classesDetails/${data?._id}`}>
                                            <Button
                                                label={'Enroll'}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AllClasses;