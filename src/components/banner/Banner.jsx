import { useEffect } from 'react';
import bannerPhoto1 from '../../assets/banner/byteSkill1.png'
import bannerPhoto2 from '../../assets/banner/byteSkill2.png'
import bannerPhoto3 from '../../assets/banner/byteSkill3.png'
import Button from '../button/Button';
import AOS from 'aos';


const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            delay: 300, 
        });
    }, [])
    return (
        <div className='relative '>
            <div className="hero min-h-screen overflow-hidden">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                    <div className=' relative' data-aos="fade-up">
                        <img src={bannerPhoto1} className="max-w-sm md:max-w-xl -mb-4 mt-24  " />

                        <div className='absolute overflow-hidden top-40 md:top-60'>
                            <img src={bannerPhoto2} className="md:w-[80px] w-[70px] " />
                            <img src={bannerPhoto3} className="md:w-[80px] w-[70px] ml-16 mt-8 " />
                        </div>

                    </div>
                    <div className=' mt-28 lg:mt-0' data-aos="fade-down">
                        <h1 className="text-xl font-bold mb-4">Welcome to <span className=' text-[#b675f6ec]'>BYTESKILL</span></h1>
                        <h2 className="text-5xl font-bold ">The Best Online Courses You'll Find</h2>
                        <p className="py-6 max-w-lg">Etiam interdum arcu metus, eget ultricies eros euismod ut. Aenean fermentum vestibulum risus, et volutpat elit. Suspendisse potenti amatug.</p>
                        <div>
                            <Button
                                label={'Get Started'}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className=" absolute bottom-0 right-0 w-4/6 min-h-screen bg-gradient-to-tl from-[#9050cc9f] to-transparent via-transparent opacity-50 rounded-br-[40px] "></div>
        </div>
    );
};

export default Banner;