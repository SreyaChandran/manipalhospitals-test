// app/page.js
import dynamic from 'next/dynamic';

// Dynamically import the CheckoutButton as a client component
const CheckoutButton = dynamic(() => import('@/components/CheckoutButton'), { ssr: false });

export default function Home() {
  return (
    <main>
      <h1 className='w-full text-center mt-12'>Welcome to the Payment Page</h1>
      <CheckoutButton />
    </main>
  );
}
