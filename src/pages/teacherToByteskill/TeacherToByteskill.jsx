import Button from "../../components/button/Button";
import Container from "../../components/share/Container";
import { useForm } from "react-hook-form"
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import BannerTitle from "../../components/share/BannerTitle";
import { Helmet } from "react-helmet-async";

const TeacherToByteskill = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const onSubmit= async(data) => {
        const requestData = {
            name: data?.name,
            title: data?.title,
            image: user?.photoURL,
            email: user?.email,
            experience: data?.experience,
            category: data?.category,
            status:'pending'
        }

        const requestRes = await axiosSecure.post('/api/teacher/request', requestData);
        if(requestRes?.data?.insertedId) {
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: 'Teacher request added!',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }


    return (
        <div className=" pt-20">
            {/* website naming title */}
            <Helmet>
                <title>ByteSkill | Teacher on ByteSkill</title>
            </Helmet>
            
            <Container>
                {/* bannerTitle section here */}
                <BannerTitle
                    title={'Add the teacher information'}
                    subTitle={''}
                />

                {/* main content here */}
                <div className=" mt-16 max-w-2xl mx-auto bg-[#e5e5e5] p-10 rounded">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* name and Title here */}
                        <div className=" flex gap-6">
                            {/* name here */}
                            <div className="form-control w-full mb-6 text-black">
                                <label className="label">
                                    <span className="label-text"> Name</span>
                                </label>
                                <input
                                    {...register("name", { required: true })}
                                    type="text"
                                    defaultValue={user?.displayName}
                                    className="input input-bordered w-full "
                                />
                            </div>
                            {/* title here */}
                            <div className="form-control w-full mb-6 text-black">
                                <label className="label">
                                    <span className="label-text"> Title</span>
                                </label>
                                <input
                                    {...register("title", { required: true })}
                                    type="text"
                                    placeholder="Title" className="input input-bordered w-full " />
                            </div>
                        </div>
                        {/* experience and category here */}
                        <div className=" flex gap-6">
                            {/* experience here */}
                            <div className="form-control w-full mb-6 text-black">
                                <label className="label">
                                    <span className="label-text"> Experience</span>
                                </label>
                                <select defaultValue='default'  {...register("experience", { required: true })} className="select select-bordered w-full" >
                                    <option disabled value='default'>Select a experience</option>
                                    <option value="beginner">Beginner</option>
                                    <option value="experienced">experienced</option>
                                    <option value="someIdea">Some Idea</option>
                                </select>
                            </div>
                            {/* category here */}
                            <div className="form-control w-full mb-6 text-black">
                                <label className="label">
                                    <span className="label-text"> Category*</span>
                                </label>
                                <select defaultValue='default'  {...register("category", { required: true })} className="select select-bordered w-full" >
                                    <option disabled value='default'>Select a category</option>
                                    <option value="webDevelopment">Web development</option>
                                    <option value="digitalMarketing">Digital marketing</option>
                                    <option value="graphic">Graphic Design</option>
                                    <option value="android">Android development</option>
                                    <option value="cyber">Cyber security</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <Button
                                label={'Submit for review'}
                            />
                        </div>
                    </form>
                </div>
           </Container>
        </div>
    );
};

export default TeacherToByteskill;