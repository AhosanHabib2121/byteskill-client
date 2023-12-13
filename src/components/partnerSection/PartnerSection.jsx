import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const PartnerSection = () => {
    const [partner, setPartner] = useState([]);

    useEffect(() => {
        fetch('/partner.json')
            .then(res => res.json())
            .then(data => setPartner(data))
    }, [partner])
    return (
        <div className='my-10'>
            {/* Section title here */}
            <div className=" text-center">
                <h2 className='text-4xl font-bold'>World-class brands</h2>
                <p className='max-w-xl mx-auto mt-2 text-[#94A3B8]'>As a matter of course, ByteSkill became familiar with many of the biggest bands</p>
            </div>
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                    bulletClass: 'false',
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className=" mt-10"
            >
                {
                    partner.map((data, inx) => <SwiperSlide  key={inx}>
                        <img src={data.img} className="  text-white" alt="not found" />
                    </SwiperSlide>)
                }
                
            </Swiper>

        </div>
    );
};

export default PartnerSection;