import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);
const Pay = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-red-600 bg-orange-200 py-4 my-12 text-center">
        Welcome To Payment Dashboard
      </h1>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Pay;
