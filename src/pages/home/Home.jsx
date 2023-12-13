import { Helmet } from "react-helmet-async";
import Banner from "../../components/banner/Banner";
import ElementorSection from "../../components/elementor-section/ElementorSection";
import PartnerSection from "../../components/partnerSection/PartnerSection";
import Container from "../../components/share/Container";
import TeachersJoin from "../../components/teachersJoin/TeachersJoin";
import OurTeacher from "../../components/ourAllTeacher/OurTeacher";

const Home = () => {
    return (
        <div>
            {/* website naming title */}
            <Helmet>
                <title>ByteSkill | Home</title>
            </Helmet>

            <Container>
                {/* banner part here */}
                <Banner />

                {/* Partner section here */}
                <PartnerSection />
                
                {/* teachers join section here */}
                <TeachersJoin />

            </Container>
            {/* elementor section  here */}
            <ElementorSection />

            <Container>
                {/* our all teacher section here */}
                <OurTeacher/>
            </Container>
        </div>
    );  
};

export default Home;