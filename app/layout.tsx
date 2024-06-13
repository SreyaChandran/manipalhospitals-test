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
      <head>
        <meta name="googlebot" content="noindex,nofollow" />
      </head>
      <body className={inter.className}>
        <Header/>
        <main className="flex min-h-screen flex-col items-start justify-between bg-white w-full max-w-[1660px] m-auto">
            <section className="flex flex-grow w-full flex-row gap-4">
              <div className="w-full overflow-x-hidden bg-white pb-10">{children}</div>
            </section>
            <Footer />
        </main>
      </body>
    </html>
  );
}
