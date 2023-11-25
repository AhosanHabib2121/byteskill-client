import Banner from "../../components/banner/Banner";
import PartnerSection from "../../components/partnerSection/PartnerSection";
import Container from "../../components/share/Container";
import TeachersJoin from "../../components/teachersJoin/TeachersJoin";

const Home = () => {
    return (
        <div>
            <Container>
                {/* banner part here */}
                <Banner />

                {/* Partner section here */}
                <PartnerSection />
                
                {/* teachers join section here */}
                <TeachersJoin />
                
            </Container>
        </div>
    );  
};

export default Home;