import type { Metadata } from "next";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";

export const metadata: Metadata = {
 title: "My Ecommerce SaaS",
 description: "Learning Next.js By building"
};

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return(
    <html lang="en">
      <body>
        <Navbar />

        <main className="mx-auto max-w-6xl p-6">
          {children}
        </main>

        <Footer/>
      </body>
    </html>
  );
}