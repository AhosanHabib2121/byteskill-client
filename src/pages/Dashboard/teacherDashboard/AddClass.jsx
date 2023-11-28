/* eslint-disable react-hooks/rules-of-hooks */
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useImageUpload from "../../../hooks/useImageUpload";
import Container from "../../../components/share/Container";

const AddClass = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const onSubmit = async (data) => {
        // image upload to imgbb
        const imageUpload = await useImageUpload(data?.image[0])

        const addClassData = {
            title: data?.title,
            name: user?.displayName,
            email: user?.email,
            price: data?.price,
            image: imageUpload?.data?.display_url,
            description: data?.description,
        }
        // add class data save to database
        const requestRes = await axiosSecure.post('/addClass', addClassData);
        if (requestRes?.data?.insertedId) {
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: 'Added to the new class',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <div>
            <Container>
                <div className=" mt-16 max-w-2xl mx-auto bg-[#e5e5e5] p-10 rounded">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* name here */}
                        <div className="form-control w-full mb-6 text-black">
                            <label className="label">
                                <span className="label-text text-lg font-medium"> Title</span>
                            </label>
                            <input
                                {...register("title")}
                                type="text"
                                placeholder="title" className="input input-bordered w-full "
                            />
                        </div>
                        {/* name and email here */}
                        <div className=" flex gap-6">
                            {/* name here */}
                            <div className="form-control w-full mb-6 text-black">
                                <label className="label">
                                    <span className="label-text text-lg font-medium"> Name</span>
                                </label>
                                <input
                                    {...register("name")}
                                    type="text"
                                    defaultValue={user?.displayName}
                                    className="input input-bordered w-full "
                                    disabled
                                />
                            </div>
                            {/* email here */}
                            <div className="form-control w-full mb-6 text-black">
                                <label className="label text-lg font-medium">
                                    <span className="label-text"> Email</span>
                                </label>
                                <input
                                    {...register("email")}
                                    type="email"
                                    defaultValue={user?.email}
                                    className="input input-bordered w-full "
                                    disabled
                                />
                            </div>

                        </div>

                        {/* price and image */}
                        <div className=" flex gap-6">
                            {/* price here */}
                            <div className="form-control w-full mb-6 text-black">
                                <label className="label">
                                    <span className="label-text text-lg font-medium"> Price</span>
                                </label>
                                <input
                                    {...register("price", { required: true })}
                                    type="number"
                                    placeholder="price" className="input input-bordered w-full " />
                            </div>

                            {/* image here */}
                            <div className="form-control w-full mb-6 text-black">
                                <label className="label">
                                    <span className="label-text text-lg font-medium"> Image</span>
                                </label>
                                <input
                                    {...register("image", { required: true })}
                                    required
                                    type='file'
                                />
                            </div>
                        </div>
                        {/* title here */}
                        <div className="form-control w-full mb-6 text-black">
                            <label className="label">
                                <span className="label-text text-lg font-medium"> Description</span>
                            </label>
                            <textarea
                                {...register("description", { required: true })}
                                placeholder="Description" className="textarea textarea-bordered w-full " >
                            </textarea>
                        </div>
                        <div>
                            <div className=" mt-6">
                                <input
                                    type="submit"
                                    className="btn bg-[#9333EA] text-white normal-case text-lg hover:bg-[#7517cc] border-0"
                                    value="Add Class"
                                />
                            </div>
                        </div>
                    </form>
                </div>
           </Container>
        </div>
    );
};

export default AddClass;