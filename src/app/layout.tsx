import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const interSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Travel App",
  description: "Travel App for camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" >
      <body
        className={`${interSans.variable} `}
      >
        <Navbar />
        <main className="relative overflow-hidden">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
