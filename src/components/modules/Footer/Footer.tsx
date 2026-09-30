"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { footerColumns } from "@/data/footerData";
import Logo from "../Navbar/Logo";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-[#252525] max-w-360 mx-auto">
      <div className="mx-auto px-6 xl:px-0 max-w-300 mx-auto">
        {/* Main Footer */}
        <div className="flex flex-col lg:flex-row justify-between pb-[120px] pt-[72px] ">
          {/* Newsletter */}
          <div className="max-w-[520px] ">
            {/* Logo */}
            <Logo className="text-black"/>

            {/* Description */}
            <p className="max-w-[480px] text-[14px] leading-[1.55] tracking-wide text-[#333]">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Newsletter Form */}
            <form
              className="mt-[43px] flex w-full max-w-[475px] items-center gap-[22px]"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="
                  h-[50px]
                  flex-1
                  rounded-full
                  border-[#d1d1d1]
                  bg-white
                  px-[22px]
                  text-[14px]
                  text-[#222]
                  shadow-none
                  placeholder:text-[#444]
                  focus-visible:border-[#c5ff00]
                  focus-visible:ring-1
                  focus-visible:ring-[#c5ff00]
                "
              />

              <Button
                type="submit"
                className="
                  h-[44px]
                  min-w-[98px]
                  rounded-full
                  bg-primary
                  px-[22px]
                  text-[18px]
                  font-semibold
                  text-gray-900
                  shadow-none
                  hover:bg-[#baff00]
                "
              >
                Search
              </Button>
            </form>

            {/* Consent */}
            <p className="mt-[25px] max-w-[475px] text-[12px] leading-[1.5] text-[#444]">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Navigation */}
          <nav className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 md:gap-x-8 xl:gap-x-[80px] pt-10 lg:pt-0">
            {footerColumns.map((column, columnIndex) => (
              <div key={columnIndex}>
                <ul className="space-y-[17px]">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="
                          text-[14px]
                          leading-none
                          text-[#3d3d3d]
                          transition-colors
                          hover:text-[#000]
                        "
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom Border */}
        <div className="h-px w-full bg-[#d7d7d7]" />

        {/* Bottom Footer */}
        <div
          className="
            flex
            min-h-[84px]
            items-center
            justify-between
            gap-6
            py-6
            text-[12px]
            text-[#3f3f3f]
            max-md:flex-col
            max-md:items-start
          "
        >
          <p>© 2023 ByteSpace. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-x-[25px] gap-y-3">
            <Link href="#" className="transition-colors hover:text-black">
              Privacy Policy
            </Link>

            <Link href="#" className="transition-colors hover:text-black">
              Terms of Service
            </Link>

            <Link href="#" className="transition-colors hover:text-black">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/**
 * Small ByteSpace-style logo mark.
 */
function ByteSpaceLogo() {
  return (
    <svg
      width="27"
      height="31"
      viewBox="0 0 27 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3.5 2.5C3.5 1.67 4.17 1 5 1H8.5C9.33 1 10 1.67 10 2.5V28.5C10 29.33 9.33 30 8.5 30H5C4.17 30 3.5 29.33 3.5 28.5V2.5Z"
        fill="#C7FF00"
      />

      <path
        d="M10 7.5C10 6.67 10.67 6 11.5 6H15.5C21.3 6 26 10.7 26 16.5C26 22.3 21.3 27 15.5 27H10V21H15.5C18.54 21 21 18.54 21 15.5C21 12.46 18.54 10 15.5 10H10V7.5Z"
        fill="#C7FF00"
      />

      <path
        d="M10 11.5H15.5C17.71 11.5 19.5 13.29 19.5 15.5C19.5 17.71 17.71 19.5 15.5 19.5H10V11.5Z"
        fill="white"
      />
    </svg>
  );
}
