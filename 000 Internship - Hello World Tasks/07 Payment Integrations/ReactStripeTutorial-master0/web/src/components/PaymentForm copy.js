import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
const ACCESS_TOKEN="47e9095912b5457963916d3fc90ed6d2ed0552588e55faa73d0278479e018d8bed3e1869965610444d418b7d2dbdd4c08fc604327e359bdb8e9574581276a5220b9eecd38e70bddf4c2f5caf6f55f4a2d49ced66fc04dd1230d08ed20cec94021ed9d6e9902d553469c8ff2971d6abd7646229a6b7efe73eea27e106407406d0";


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    const cartObject = {"data":{
        "Customer":{
            "id":105
        } 
        ,
        "shippingDetails": {
                fullName: "fullName",
                email: "email",
                phone: "0230230",
                deliveryAddress: "deliveryAddress",
                additionalNote: "additionalNote"
        },
        "totalAmount":1000,

    }}

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try {
            // const {id} = paymentMethod
            axios.post('http://localhost:1337/api/orders', 
            cartObject,
            {
            headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`
            } }
       ).then(()=> {
        console.log("ORder payment submited successfully")
       })
      

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}

    return (
        <>
        {!success ? 
        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button>Pay</button>
        </form>
        :
       <div>
           <h2>You just bought a sweet spatula congrats this is the best decision of you're life</h2>
       </div> 
        }
            
        </>
    )
}
