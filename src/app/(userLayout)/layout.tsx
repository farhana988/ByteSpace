import Banner from "@/components/modules/Banner/Banner";
import Footer from "@/components/modules/Footer/Footer";
import Navbar from "@/components/modules/Navbar/Navbar";
import React from "react";

const UserLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-20 bg-[url('/stripe.png')] bg-cover bg-center bg-no-repeat" />

        {/* Navbar + Banner */}
        <div className="relative z-10">
          <Navbar />
          <Banner />
        </div>
      </div>

      <div className={`w-full max-w-360 mx-auto min-h-screen`}>{children}</div>
      <Footer />
    </>
  );
};

export default UserLayout;
