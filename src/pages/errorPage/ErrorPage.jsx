import { Link, useRouteError } from 'react-router-dom';
import bgColor from '../../assets/bg_color.png'
import { FaArrowLeftLong } from 'react-icons/fa6';
import AOS from 'aos';
import { useEffect } from 'react';

   
const ErrorPage = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, [])
    const errorInfo = useRouteError();
    return (
        <div className="bg-[#1f222f] h-screen text-white relative">
            <div className=' grid justify-center'>
                 <img src={bgColor} className=' h-screen  opacity-60 object-cover' alt="not found" />
            </div>
            <div className=" w-96 bg-[#35323877] absolute top-40 left-[38%]   rounded-xl" data-aos="zoom-in">
                <div className="card-body items-center text-center">
                    <h2 className="text-7xl font-extrabold">{errorInfo?.status}</h2>
                    <h2 className="text-4xl font-bold">Page not found!</h2>
                    <p className='text-[#94A3B8] font-medium'>The page you are looking for no longer exists. Perhaps you can return back to the site’s homepage.</p>
                    <div className="card-actions justify-end">
                        <Link>
                            <button className='btn bg-[#9050ccbd] text-white border-none hover:bg-[#9050cced] '>
                                <FaArrowLeftLong className=' text-md' />
                                Back Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;