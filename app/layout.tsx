import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/header'
import Footer from '@/components/footer'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-start justify-between bg-white min-w-screen 2xl:max-w-[1480px] mx-auto">
            <Header />
            <section className="flex flex-grow w-full flex-row gap-4">
              <div className="w-full overflow-x-scroll bg-white pb-10">{children}</div>
            </section>
            <Footer />
        </main>
      </body>
    </html>
  );
}
