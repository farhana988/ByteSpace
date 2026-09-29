"use client";
import { NavLinksProps } from "@/types/Navbar.interface";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { id: 1, href: "/", label: "Home" },
  { id: 2, href: "/courses", label: "Courses" },
  { id: 3, href: "/creators", label: "Creators" },
];

const NavLinks = ({ onClick, className = "" }: NavLinksProps) => {
  const pathname = usePathname();

  return (
    <nav
      className={`flex flex-col items-center lg:flex-row gap-4 lg:gap-5 ${className}`}
    >
      {/*  LINKS */}
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.id}
            href={link.href}
            onClick={onClick}
            className={`
            relative group text-xs lg:text-sm xl:text-base transition-transform tracking-wide

              ${isActive ? "-translate-y-1" : "hover:-translate-y-1"}
            `}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;
