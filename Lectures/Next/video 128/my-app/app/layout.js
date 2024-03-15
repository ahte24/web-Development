import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Facebook - Conntct with friends and the world around you",
  description: "Facebook is a social utility that connects people with friends and other who work, study and live around then. people use Facebook to keep up with friends, upload an unlimited number of photos, post links and videos, and learh more about the people they meet.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
