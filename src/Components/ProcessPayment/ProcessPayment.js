import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// import SimpleCardForm from './SimpleCardForm';
import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe('pk_test_51IeEEPC06cFLTUCDhCZP9ItOTiUOZupTZ31vqgXhtWfMpUj37s2AwKsYjqJushvdZPDkJ4Tlxfa6ssEO3Rkegvy200KosiAVE1');


const ProcessPayment = ({handlePayment}) => {

    return (
        <Elements stripe={stripePromise}>
            
            <SplitCardForm handlePayment={handlePayment}></SplitCardForm>
        </Elements>
    );
};

export default ProcessPayment;