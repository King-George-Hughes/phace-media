"use client";

import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import { navVariants } from "@/lib/motion";

const NavBar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="w-full px-5 py-2 flex items-center justify-between"
    >
      <Link href={"/"}>
        <img
          src="/images/Phace Media Logo.png"
          alt="logo"
          title="phace media"
          className="w-[70px] md:w-[100px] lg:w-fit"
        />
      </Link>

      <div className="w-[9em] h-[25px] bg-white flex items-center justify-center rounded-2xl px-5">
        <input
          type="search"
          placeholder="Search..."
          className="w-full bg-transparent outline-none text-black placeholder:text-[0.7em]"
        />
        <FaSearch className="text-black" />
      </div>
    </motion.nav>
  );
};

export default NavBar;
