import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="w-full px-5 py-2 flex items-center justify-between">
      <Link href={"/"}>
        <img
          src="/images/Phace Media Logo.png"
          alt="logo"
          title="phace media"
          className="w-[80px] md:w-fit"
        />
      </Link>

      <div className="w-[10em] h-[28px] bg-white flex items-center justify-center rounded-2xl px-5">
        <input
          type="search"
          placeholder="Search..."
          className="w-full bg-transparent outline-none text-black placeholder:text-sm"
        />
        <FaSearch className="text-black" />
      </div>
    </nav>
  );
};

export default NavBar;
