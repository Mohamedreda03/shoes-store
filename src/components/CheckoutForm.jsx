import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { paymentRequest } from "../utils/api";
import { useState } from "react";
import { Link } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const cart = useSelector((store) => store.cart.cartItems);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleError = (error) => {
      setLoading(false);
      setErrorMessage(error.message);
    };

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }

    const clientSecret = await paymentRequest("/api/orders");

    const result = await stripe.confirmPayment({
      clientSecret,
      elements,
      confirmParams: {
        return_url: "http://localhost:5173/",
      },
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };

  return (
    <div className="max-w-screen-lg flex gap-7 md:flex-row flex-col-reverse mx-auto mt-10 px-8">
      <div className="flex-[1.1]">
        {cart.map((product) => (
          <div className="flex md:max-w-lg w-full py-5 gap-3 md:gap-5 border-b">
            <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
              <img
                src={product?.attributes?.thumbnail?.data?.attributes.url}
                alt="prodact img"
              />
            </div>
            <div className="w-full flex flex-col py-1">
              <div className="text-[20px] font-semibold">
                {product.attributes.name}
              </div>

              <div className="opacity-50">{product.attributes.subtitle}</div>
              <div className="font-semibold text-md opacity-80">
                MRP : {product.totalProductQuantityPrice}$
              </div>
              <div className="font-semibold text-md opacity-80">
                Quantity : {product.quantity}
              </div>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex-[0.9]">
        <PaymentElement />

        <Link
          to="/productcar/success"
          className="mt-5 flex items-center justify-center w-full bg-black text-white py-3 rounded-md"
        >
          Submit
        </Link>
      </form>
    </div>
  );
};

export default CheckoutForm;
