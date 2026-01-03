import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as a safe default for now
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fantastic Boat Cruise | Alappuzha Shikara",
  description: "Experience the premium Shikara boat cruise in Alappuzha backwaters. Luxury, comfort, and scenic beauty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen flex flex-col antialiased bg-background text-foreground`}>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
