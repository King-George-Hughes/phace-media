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
        <main className="w-full min-h-screen flex flex-col items-center justify-center">
          <div className="gradient" />
          <div className="gradient-white" />
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
