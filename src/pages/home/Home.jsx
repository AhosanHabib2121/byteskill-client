import Banner from "../../components/banner/Banner";
import Container from "../../components/share/Container";

const Home = () => {
    return (
        <div>
            <Container>
                {/* banner part here */}
                <Banner />
                <h2>This is home page</h2>
            </Container>
        </div>
    );  
};

export default Home;