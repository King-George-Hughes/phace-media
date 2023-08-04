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
      className="bgFooter w-full py-2 md:py-5 z-20"
    >
      <motion.div
        variants={listVariantParent}
        initial="hidden"
        whileInView="show"
        className="container flex flex-col items-center justify-center p-5 gap-8 md:gap-10"
      >
        <motion.h1 variants={listVariant} className="text-sm md:text-2xl">
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
        <motion.h1 variants={listVariant} className="text-sm md:text-2xl">
          ABOUT
        </motion.h1>
        <motion.div
          variants={listVariant}
          className="inline-flex items-center gap-3 md:gap-10"
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
          className="flex items-center justify-center gap-5"
        >
          <Link
            href={"tel:+233249630826"}
            className="inline-flex items-center gap-1 text-sm md:text-lg"
          >
            <FaPhone /> +233249630826
          </Link>
          <Link
            href={"https://api.whatsapp.com/send?phone=0545366884"}
            target="_blank"
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
