import React from "react";
import "./style.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./components/CheckoutForm";

const stripePromise = loadStripe("pk_test_51MU41UIDPEavG7mxKr1ossmTXfLMVmYkp2muEzqDucA5G0h0Yjn3B6wa0TRIodgAmGVUGL0n8CVkKjj89Zw8oSwL00XvfT1DPT");

const App = () => {
  return (
    <div className="App">
      <div className="product">
        <img
          src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress"
          alt="laptop"
          style={{ width: "100%", height: "auto" }}
        />
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default App;