import Banner from "@/components/modules/Banner/Banner";
import Navbar from "@/components/modules/Navbar/Navbar";
import React from "react";

const UserLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative overflow-hidden">
        {/* Background image */}
        <div
          className="
            absolute
            inset-0
            z-20
            bg-[url('/stripe.png')]
            bg-cover
            bg-center
            bg-no-repeat
          "
        />

        {/* Navbar + Banner */}
        <div className="relative z-10">
          <Navbar />
          <Banner />
        </div>
      </div>

      <div
        className={`w-full max-w-300 mx-auto min-h-screen space-y-16 lg:space-y-20 px-6 xl:px-0`}
      >
        {children}
      </div>
    </>
  );
};

export default UserLayout;
