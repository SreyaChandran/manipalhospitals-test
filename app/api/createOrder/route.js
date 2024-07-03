import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(req) {
  const { amount, currency } = await req.json();

  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, // Amount in paise
      currency: currency,
      receipt: 'order_rcptid_11',
    });
    return NextResponse.json({ orderId: order.id, amount: amount * 100 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
