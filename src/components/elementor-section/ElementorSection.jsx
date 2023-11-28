import Button from '../button/Button';
import './ElementorSection.css'

const ElementorSection = () => {
    return (
        <div>
            <div className="hero min-h-screen elementorBg" >
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl" data-aos="fade-up">
                        <h1 className="mb-5 text-4xl font-bold" > Start your learning journey today! Enroll now in our online course.</h1>
                        <p className="mb-5" >
                            Unlock new opportunities and enhance your skills with our cutting-edge online course! Enroll now to gain access to expert-led modules, interactive learning materials, and a supportive community. 
                        </p>
                        <Button
                            label={'Discover more'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ElementorSection;
