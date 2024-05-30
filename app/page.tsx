import Image from "next/image";
import { redirect } from 'next/navigation'
export default function Home() {
  redirect('/dashboard')
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
        Welcome to Manipal Hospitals <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
      </h1>
    </main>
  );
}
