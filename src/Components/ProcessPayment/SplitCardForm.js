import React, { useMemo } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";


const useOptions = () => {
    const options = useMemo(
      () => ({
        style: {
          base: {
            fontSize:'16px',
            color: "#424770",
            letterSpacing: "0.025em",
            fontFamily: "Source Code Pro, monospace",
            "::placeholder": {
              color: "#9e2146",
            }
          },
          invalid: {
            color: "#9e2146"
          }
        }
      }),
      []
    );
  
    return options;
  };

const SplitCardForm = () => {
    const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async event => {
    const donateData = {
      name: event.name,
      email: event.email,
      amount: event.amount,
  };
  const url = `http://localhost:4000/addDonation`;
  console.log('donate event', donateData);
  fetch(url, {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(donateData)
  })
      .then(res => console.log('server side response', res))
      alert('Donation done successfully.');
    // event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    console.log("[PaymentMethod]", payload);
  };

  return (
    <form onSubmit={handleSubmit} style={{marginLeft:"30px"}}>
      <label>Name</label>
      <br/>
      <input placeholder="Name" name="name" type="text" required style={{padding:"10px",border:"none",borderRadius:"10px"}}/>
      <br/>
      <label>Email</label>
      <br/>
      <input placeholder="Email" name="email" type="email" required style={{padding:"10px",border:"none",borderRadius:"10px"}}/>
      <br/>
      <label>Amount</label>
      <br/>
      <input placeholder="Amount" name="amount" type="number" required style={{padding:"10px",border:"none",borderRadius:"10px"}}/>
      <br />
      <label>
        Card number
        <CardNumberElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br />
      <label>
        Expiration date
        <CardExpiryElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br />
      <label>
        CVC
        <CardCvcElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br/>
      
      <button type="submit" disabled={!stripe} style={{ backgroundImage: "linear-gradient(yellow,aqua)", color: "black", border:"none", borderRadius: "7px", fontFamily: "Secular One", marginTop: "30px", padding:"20px", paddingLeft:"35px",paddingRight:"35px" ,marginBottom:"30px"}}>
        Pay
      </button>
    </form>
  );
};

export default SplitCardForm;