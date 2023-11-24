import axios from "axios";

const useImageUpload = async (image) => {
    const formData = new FormData();
    formData.append('image',image);
    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_SECRET_KEY}`, formData)

    return data;
};

export default useImageUpload;