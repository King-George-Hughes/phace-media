"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSearch, FaHamburger } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const pathname = usePathname();

  const routes = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Projects",
      url: "/projects",
    },
    {
      name: "Advertising",
      url: "/advertising",
    },
    {
      name: "Phace Media",
      url: "/phace_media",
    },
  ];

  return (
    <nav className="bg-white w-full md:h-[90px] h-[50px] z-50 text-black font-bold">
      <div className="w-full max-w-[1550px] mx-auto h-full px-5 lg:px-2 py-1 flex items-center justify-between">
        <Link href={routes[0].url}>
          <img
            src="/images/Phace Media Logo 1.png"
            alt="logo"
            title="phace media"
            className="w-[70px] md:w-[100px] lg:w-fit"
          />
        </Link>

        <div className="hidden md:block md:space-x-5 lg:space-x-24">
          {routes.map((route) => {
            return (
              <Link
                href={route.url}
                className="text-md inline-flex items-center justify-center relative text-center"
              >
                {route.name}

                {pathname === route.url ? (
                  <div className="absolute w-[10px] h-[10px] bg-yellow-500 rounded-full mt-8" />
                ) : (
                  ""
                )}
              </Link>
            );
          })}
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
                  {routes.map((route) => {
                    return (
                      <Link
                        href={route.url}
                        className="text-sm"
                        onClick={() => setShow(false)}
                      >
                        {route.name}
                      </Link>
                    );
                  })}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
