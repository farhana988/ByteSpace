import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { NavActionsProps } from "@/types/Navbar.interface";

const NavActions = ({ menuOpen, toggleMenu }: NavActionsProps) => {
  return (
    <div className="flex items-center gap-4 xl:gap-6 text-xs lg:text-sm xl:text-base tracking-wide ">
      <Link href={"/register"}>Sign in</Link>
      <Link href={"/login"}>Join us</Link>
      <div className="relative flex items-center">
        <Link href="/cart" aria-label="Shopping cart">
          <div className="relative">
            <Image src="/cart.png" alt="logo" width={14} height={14} />
          </div>
        </Link>
      </div>
      <button
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
        className="lg:hidden"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </div>
  );
};

export default NavActions;
