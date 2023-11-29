import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import loader from '../../assets/loader.gif'
import { useNavigate } from "react-router-dom";

const CheckOutForm = ({id}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const navigate = useNavigate();


    const { data: classesDetailsId, isLoading } = useQuery({
        queryKey: ['enroll'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/classesDetails/${id}`);
            return res.data;
        }

    })

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: classesDetailsId?.price })
            .then(res => {
                setClientSecret(res.data.clientSecret)
            })
    }, [axiosSecure, classesDetailsId?.price])
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error?.message)
            
        } else {
            console.log('PaymentMethod', paymentMethod);
        }

        // confirm payment
        const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || "no email",
                        name: user?.displayName || 'no name'
                    }
                }
            },
        )
        if (confirmError) {
            console.log('confirm error');
        } else {
            // console.log('payment Intent', paymentIntent);
            if (paymentIntent?.status == "succeeded") {
                navigate('/dashboard/myEnrollClass')
            }
        }

    }
    if (isLoading) {
        return <div className=" grid justify-center items-center h-screen">
            <img src={loader} alt="not found" />
        </div>
    }

    return (
        
        <div className=" mt-16 max-w-2xl mx-auto bg-[#e5e5e5] p-10 rounded">
            
            <form onSubmit={handleSubmit}>
                <div className="mb-7">
                    <p className=" text-red-500">{error}</p>
                </div>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },

                            },
                        }}
                    />
                <button type="submit" className=" mt-5 bg-[#7938b7bd] py-1 px-3 rounded-lg" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
        </div>
            
    );
};

export default CheckOutForm;