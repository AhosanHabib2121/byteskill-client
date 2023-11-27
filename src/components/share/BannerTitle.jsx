import AOS from 'aos';
import { useEffect } from 'react';

const BannerTitle = ({ title, subTitle }) => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, [])
    return (
        <div>
            <div className='relative '>
                <div className="hero h-[350px] overflow-hidden">
                    <div className="hero-content" data-aos="fade-down">
                        <div className='-mt-10'>
                            <h1 className="text-5xl md:text-6xl text-center font-bold mb-4">{title} </h1>
                            <p className="text-center text-lg max-w-lg">{subTitle}</p>
                        </div>
                    </div>
                </div>

                <div className=" absolute bottom-0 right-0 w-4/6 min-h-screen bg-gradient-to-tl from-[#9050cce3] to-transparent via-transparent opacity-60 rounded-br-[40px] "></div>
            </div>
        </div>
    );
};

export default BannerTitle;