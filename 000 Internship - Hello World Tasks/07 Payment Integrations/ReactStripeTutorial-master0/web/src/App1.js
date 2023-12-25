import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import StripeCheckout from 'react-stripe-checkout';
import "./style.css";

const STRIPE_KEY = "pk_test_51MU41UIDPEavG7mxKr1ossmTXfLMVmYkp2muEzqDucA5G0h0Yjn3B6wa0TRIodgAmGVUGL0n8CVkKjj89Zw8oSwL00XvfT1DPT"

const App = () => {
  const onToken = (token) => {
    console.log("OnToken", token);
  }

  return (
    <div className="App">
      <div className="product">
        <img
          src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress"
          alt="laptop"
          style={{ width: "100%", height: "auto" }}
        />

        <StripeCheckout
          token={onToken}
          stripeKey={STRIPE_KEY}
          currency="USD"
          amount={1000000}
          closed={() => alert("Tanks for payment")}
          allowRememberMe 
        />
      </div>
    </div>
  );
};

export default App;