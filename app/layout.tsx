import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecaptchaProvider from "@/components/RecaptchaProvider"; // Import your new wrapper

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// This stays here safely in the Server Component
export const metadata: Metadata = {
  title: "20 de Junio",
  description: "Logística integral para la salud",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RecaptchaProvider>
          <div className="min-h-screen">{children}</div>
        </RecaptchaProvider>

        <Navbar />
        <Footer />
        <Toaster richColors />
      </body>
    </html>
  );
}
