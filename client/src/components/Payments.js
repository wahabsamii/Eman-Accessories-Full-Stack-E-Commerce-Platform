import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useCart } from "../context/cart";
import { useAuth } from '../context/auth';
import { serverUrl } from '../utils/api';
import toast from 'react-hot-toast';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY); 

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [auth] = useAuth();
  const [cart, setCart] = useCart();

  const [clientSecret, setClientSecret] = useState(null);
  const [loading, setLoading] = useState(false);
  const userId = auth.user._id;
  // Calculate total price dynamically
  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

  useEffect(() => {
    if (totalAmount > 0) {
      createPaymentIntent();
    }
  }, [cart]);

  const createPaymentIntent = async () => {
    try {
      const { data } = await axios.post(`${serverUrl}/api/v1/product/stripe`, {
        cart, // Send cart items to backend
        userId,
        products:[...cart]
      },
      {
        headers:{
          Authorization: `Bearer ${auth?.token}`,
        }
      }
    );
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.error("Error creating PaymentIntent:", error);
    }
  };

  const handlePayment = async () => {
    if (!stripe || !elements || !clientSecret) return;

    setLoading(true);
    try {
      const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (error) {
        toast.error(`Payment failed: ${error.message}`);
      } else if (paymentIntent.status === "succeeded") {
        toast.success("Payment successful! 🎉");
      }
    } catch (error) {
      console.error("Payment Error:", error);
      toast.error("Payment failed!");
    }
    setLoading(false);
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Stripe Payment</h1>
      <p className='text-2xl font-semibold mb-4'>Total: ${totalAmount.toFixed(2)}</p>

      <div className="border-2 border-gray-400 rounded-md p-4 bg-gray-100">
        <CardElement />
      </div>

      <button 
        onClick={handlePayment} 
        className="bg-blue-500 text-white px-6 py-3 rounded-md mt-4"
        disabled={loading || !stripe}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
};

const Payments = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default Payments;
