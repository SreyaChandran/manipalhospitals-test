'use client';

import React, {useEffect, useState} from 'react';
import { Button } from './ui/button';

const CheckoutButton = () => {
    const [message, setMessage] = useState("")
    useEffect(() => {
        // Load Razorpay script dynamically
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
      }, []);
        
  const handlePayment = async () => {
    // Fetch order ID from your API
    setMessage("");
    const res = await fetch('/api/createOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 1, currency: 'INR' }), // Example amount
    });
    
    const { orderId } = await res.json();
    // console.log("res-orderId",orderId)
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Your Razorpay Key ID
      amount: 1, // Amount in paise
      currency: 'INR',
      name: 'Manipal Hospitals',
      description: 'Test Transaction',
      order_id: orderId,
      handler: async function (response) {
        // Verify payment signature on your server
        const res = await fetch('/api/verifyPayment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id,
            signature: response.razorpay_signature,
          }),
        });
        console.log("response")
        const data = await res.json();
        console.log("data",data)
        if (data.success) {
            setMessage('Payment successful!');
        } else {
            setMessage('Payment verification failed');
        }
      },
      prefill: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        contact: '9999999999',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
   <div className='min-h-[100px] w-full flex flex-col items-center justify-center gap-2'>
    <Button variant="default" onClick={handlePayment}>Pay Now</Button>
    <p className='min-h-4'>{message}</p>
   </div>
)
};

export default CheckoutButton;
