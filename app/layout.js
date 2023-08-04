import { Footer, NavBar } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Phace Media",
  description: "A production site for my studio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
