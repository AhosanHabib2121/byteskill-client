import { useEffect, useState } from 'react';
import partner1 from '../../assets/partner/partner1.png'

const PartnerSection = () => {
    const [partner, setPartner] = useState([]);

    useEffect(() => {
        fetch('/partner.json')
            .then(res => res.json())
            .then(data => setPartner(data))
    },[])
    return (
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-[#7844aa59] my-8 p-3 md:p-5 rounded-lg">
            {
                partner.map((data, inx) => <div key={inx} className="card card-compact  h-52">
                    <figure><img src={data.img} className="w-44  text-white" alt="not found" /></figure>
                    <div className="card-body">
                        <p className=' text-[#94A3B8]'>{data.short_description}</p>
                    </div>
                </div>)
            }

        </div>
    );
};

export default PartnerSection;