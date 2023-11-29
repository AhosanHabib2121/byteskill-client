import { Helmet } from "react-helmet-async";
import Container from "../../../components/share/Container";

const AdminDashboard = () => {

    return (
        <div>
            {/* website naming title */}
            <Helmet>
                <title>ByteSkill | Dashboard</title>
            </Helmet>

            <Container>
                <div className="hero h-[300px] bg-base-200 mt-2">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Dashboard</h1>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AdminDashboard;