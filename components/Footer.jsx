"use client";

import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { footerVariants, listVariant, listVariantParent } from "@/lib/motion";

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="bgSection w-full py-3 md:py-7 z-20"
    >
      <motion.div
        variants={listVariantParent}
        initial="hidden"
        whileInView="show"
        className="container flex flex-col items-center justify-center p-5 gap-8 md:gap-10"
      >
        <motion.h2 variants={listVariant} className="text-sm md:text-2xl">
          FOLLOW US
        </motion.h2>
        <motion.div
          variants={listVariant}
          className="inline-flex gap-5 md:gap-20 text-black"
        >
          <FaFacebook className="transform scale-[2] md:scale-[4]" />
          <FaInstagram className="transform scale-[2] md:scale-[4]" />
          <FaTwitter className="transform scale-[2] md:scale-[4]" />
        </motion.div>
        <motion.h2
          variants={listVariant}
          className="text-sm md:text-2xl md:mt-10"
        >
          ABOUT
        </motion.h2>
        <motion.div
          variants={listVariant}
          className="inline-flex items-center gap-3 md:gap-10 lg:gap-20 text-black"
        >
          <Link href={"#"} className="text-[0.8em] md:text-xl">
            Our Story
          </Link>
          <Link href={"#"} className="text-[0.8em] md:text-xl">
            Out learn
          </Link>
          <Link href={"#"} className="text-[0.8em] md:text-xl">
            Customer service
          </Link>
          <Link href={"#"} className="text-[0.8em] md:text-xl">
            Media
          </Link>
        </motion.div>
        <motion.div
          variants={listVariant}
          className="flex items-center justify-center gap-5 md:mt-8"
        >
          <Link
            href={"tel:+233249630826"}
            className="inline-flex items-center gap-1 lg:gap-3 text-sm md:text-lg text-black"
          >
            <FaPhone className="transform scale-[1] md:scale-[2]" />{" "}
            +233249630826
          </Link>
          <Link
            href={"https://api.whatsapp.com/send?phone=0545366884"}
            target="_blank"
            className="inline-flex items-center gap-1 lg:gap-3 text-sm md:text-lg text-black"
          >
            <FaWhatsapp className="transform scale-[1] md:scale-[2]" />{" "}
            +233545366884
          </Link>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
