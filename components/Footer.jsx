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
      className="bgFooter w-full p-5"
    >
      <motion.div
        variants={listVariantParent}
        initial="hidden"
        animate="show"
        className="container flex flex-col items-center justify-center p-5 gap-8 md:gap-10"
      >
        <motion.h1 variants={listVariant} className="text-sm md:text-lg">
          FOLLOW US
        </motion.h1>
        <motion.div
          variants={listVariant}
          className="inline-flex gap-5 md:gap-8"
        >
          <FaFacebook size={30} />
          <FaInstagram size={30} />
          <FaTwitter size={30} />
        </motion.div>
        <motion.h1 variants={listVariant} className="text-sm md:text-lg">
          ABOUT
        </motion.h1>
        <motion.div
          variants={listVariant}
          className="inline-flex items-center gap-3 md:gap-5"
        >
          <Link href={"#"} className="text-[0.8em] md:text-md">
            Our Story
          </Link>
          <Link href={"#"} className="text-[0.8em] md:text-md">
            Out learn
          </Link>
          <Link href={"#"} className="text-[0.8em] md:text-md">
            Customer service
          </Link>
          <Link href={"#"} className="text-[0.8em] md:text-md">
            Media
          </Link>
        </motion.div>
        <motion.div
          variants={listVariant}
          className="flex items-center justify-center gap-5"
        >
          <Link
            href={"tel:+233249630826"}
            className="inline-flex items-center gap-1 text-sm md:text-lg"
          >
            <FaPhone /> +233249630826
          </Link>
          <Link
            href={"tel:+233545366884"}
            className="inline-flex items-center gap-1 text-sm md:text-lg"
          >
            <FaWhatsapp /> +233545366884
          </Link>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
