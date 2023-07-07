import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bgFooter w-full p-5">
      <div className="container flex flex-col items-center justify-center p-5 gap-10">
        <h1 className="text-md md:text-lg">FOLLOW US</h1>
        <div className="inline-flex gap-8">
          <FaFacebook size={40} />
          <FaInstagram size={40} />
          <FaTwitter size={40} />
        </div>
        <h1 className="text-md md:text-lg">ABOUT</h1>
        <div className="inline-flex items-center gap-3 md:gap-5">
          <Link href={"#"} className="text-sm md:text-md">
            Our Story
          </Link>
          <Link href={"#"} className="text-sm md:text-md">
            Out learn
          </Link>
          <Link href={"#"} className="text-sm md:text-md">
            Customer service
          </Link>
          <Link href={"#"} className="text-sm md:text-md">
            Media
          </Link>
        </div>
        <div className="flex items-center justify-center gap-5">
          <Link
            href={"tel:+233249630826"}
            className="inline-flex items-center gap-1"
          >
            <FaPhone /> +233249630826
          </Link>
          <Link
            href={"tel:+233545366884"}
            className="inline-flex items-center gap-1"
          >
            <FaWhatsapp /> +233545366884
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
