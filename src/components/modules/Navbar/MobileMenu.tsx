import { MobileMenuProps } from "@/types/Navbar.interface";
import NavLinks from "./NavLinks";

const MobileMenu = ({ isOpen, closeMenu }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="absolute top-full right-0 bg-[#003BE2] backdrop-blur-md 
    lg:hidden px-6 py-4 text-center w-2/3 md:w-1/2 "
    >
      <NavLinks onClick={closeMenu} />
    </div>
  );
};

export default MobileMenu;
