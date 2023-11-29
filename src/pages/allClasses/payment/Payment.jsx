import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Container from "../../../components/share/Container";
import CheckOutForm from "../../../components/checkOutForm/CheckOutForm";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
    const {id} = useParams();

    return (
        <div className="pt-28">
            <Container>
            {/* payment gateway in stripe */}
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        id={id}
                    />
                </Elements>
           </Container>
        </div>
    );
};

export default Payment;
