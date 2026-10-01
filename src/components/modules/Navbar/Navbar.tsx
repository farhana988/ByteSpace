"use client";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";
import MobileMenu from "./MobileMenu";
import { useNavbar } from "@/hooks/useNavbar";

const Navbar = () => {
  const { menuOpen, toggleMenu, closeMenu } = useNavbar();
  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50`}>
        <div className="max-w-360 mx-auto bg-secondary">
          <div className="max-w-300 mx-auto px-6 xl:pl-0 h-20 lg:h-24 xl:h-30 flex justify-between items-center">
            {/* Logo component */}
            <Logo />
            {/* Desktop navigation links*/}
            <div className="hidden lg:flex">
              <NavLinks />
            </div>

            {/* Right-side icons (login/cart) */}
            <NavActions menuOpen={menuOpen} toggleMenu={toggleMenu} />

            {/* Mobile menu component */}
            <MobileMenu isOpen={menuOpen} closeMenu={closeMenu} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
