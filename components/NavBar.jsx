"use client";

import Link from "next/link";
import { FaSearch, FaHamburger } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { navVariants } from "@/lib/motion";
import { useState } from "react";

const NavBar = () => {
  const [show, setShow] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="bg-white w-full px-5 md:px-10 py-1 flex items-center justify-between z-50 text-black font-bold"
    >
      <Link href={"/"}>
        <img
          src="/images/Phace Media Logo 1.png"
          alt="logo"
          title="phace media"
          className="w-[70px] md:w-[100px] lg:w-fit"
        />
      </Link>

      <div className="hidden md:block md:space-x-20">
        <Link href={"#"} className="text-lg">
          Home
        </Link>
        <Link href={"#"} className="text-lg">
          Projects
        </Link>
        <Link href={"#"} className="text-lg">
          Advertising
        </Link>
        <Link href={"#"} className="text-lg">
          Phace Media
        </Link>
      </div>

      <div className="flex items-center gap-5">
        <div className="w-[9em] h-[25px] bg-gray-400 flex items-center justify-center rounded-2xl px-5 md:w-[15em] md:h-[35px] relative">
          <input
            type="search"
            placeholder="Search..."
            className="w-full bg-transparent outline-none text-black placeholder:text-[0.7em] md:placeholder:text-[1em]"
          />
          <FaSearch className="text-black" />
        </div>

        <div className="md:hidden">
          <FaHamburger
            size={30}
            onClick={() => setShow((prevState) => !prevState)}
            className="cursor-pointer"
          />
        </div>

        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed w-full h-screen top-0 left-0 bottom-0 right-0 bg-gradient-to-tr from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.8)] z-20"
              onClick={() => setShow(false)}
            >
              <motion.div
                initial={{ opacity: 0, y: "-100%", scale: 0 }}
                animate={{ opacity: 1, y: "0%", scale: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                className="fixed w-1/2 top-[80px] right-2 bg-gray-200 rounded-sm text-gray-700 flex flex-col items-center justify-between gap-5 p-5 z-30 uppercase font-bold"
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className="absolute bg-gray-200 w-[30px] h-[30px] -top-3 right-3 rounded-tr-full transform rotate-[135deg]"
                  onClick={() => setShow(false)}
                ></div>
                <Link href={"#"} className="text-sm">
                  Home
                </Link>
                <Link href={"#"} className="text-sm">
                  Projects
                </Link>
                <Link href={"#"} className="text-sm">
                  Advertising
                </Link>
                <Link href={"#"} className="text-sm">
                  Rentals
                </Link>
                <Link href={"#"} className="text-sm">
                  Phace Media
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default NavBar;
