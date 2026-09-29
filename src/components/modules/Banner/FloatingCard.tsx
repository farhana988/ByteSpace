import React from "react";

interface FloatingCardProps {
  className?: string;
  children: React.ReactNode;
}

const FloatingCard = ({
  className = "",
  children,
}: FloatingCardProps) => {
  return (
    <div
      className={`absolute z-50 rounded-2xl bg-white px-4 py-3 text-left shadow-2xl ${className}`}
    >
      {children}
    </div>
  );
};

export default FloatingCard;
