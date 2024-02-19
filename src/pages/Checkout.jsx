import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51NwGSBFSf4AIOY8sFkmIpex8XZLhTHK01qiqQRUReh2gEthOkkdiawDdwlpS3kbKItd2FOcT4TGRMjUx4hFwXRSY00NR2NMSFu"
);
export default function Checkout() {
  const options = {
    mode: "payment",
    currency: "usd",
    amount: 100,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
}
