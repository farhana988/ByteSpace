import React from "react";

const AuthLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="min-h-screen bg-secondary">
      {children}
    </main>
  );
};

export default AuthLayout;
