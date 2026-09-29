import Navbar from '@/components/modules/Navbar/Navbar';
import React from 'react';

const UserLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
          <>
      <Navbar />
    
      <div
        className={`max-w-7xl mx-auto min-h-screen space-y-16 lg:space-y-20 px-6 mt-20 `}
      >
        {children}
      </div>
   
    </>
    );
};

export default UserLayout;