import { Link } from 'react-router-dom';
import teacherPhoto from '../../assets/teacher.jpg'
import Button from '../button/Button';

const TeachersJoin = () => {
    return (
        <div className=" mt-14">
            {/* Section title here */}
            <div className=" text-center">
                <h2 className='text-4xl font-bold'>Teachers to Join</h2>
                <p className='max-w-xl mx-auto mt-2 text-[#94A3B8]'>where passionate educators come together, fostering learning environments and shaping future generations with expertise and enthusiasm.</p>
            </div>

            {/* main content here */}
            <div className="hero h-[560px] lg:h-[400px] ">
                <div className="hero-content flex-col lg:flex-row gap-8">
                    <img src={teacherPhoto} className="max-w-xs md:max-w-md rounded-lg " />
                    <div className=''>
                        <h1 className="text-5xl font-bold">Become an instructor</h1>
                        <p className="py-6 max-w-xl text-[#94A3B8]">A Teacher or Instructor is an education professional responsible for imparting knowledge and facilitating learning experiences for students.</p>
                        <Link to='/teachnByteskill'>
                            <Button
                                label={'Start teaching today'}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeachersJoin;