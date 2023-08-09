import { Footer, NavBar } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Phace Media",
  description:
    "A production site for my movie studio. Entetainment, Fun, Drama, Narrative, Acting.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className={inter.className}>
        <main className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
          <div className="gradient" />
          <div className="gradient-white" />
          <NavBar />
          <div className="absolute w-[250px] h-[250px] lg:w-[450px] lg:h-[450px] bg-[rgba(255,255,255,0.8)] -right-[160px] -top-[100px] lg:-right-[200px] lg:-top-[120px] z-30 rounded-full" />
          <div className="absolute w-[250px] h-[250px] lg:w-[450px] lg:h-[450px] -left-[190px] -top-[140px] lg:-left-[260px] lg:-top-[190px] -z-10 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900 to-yellow-800 blur-[90px]" />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
