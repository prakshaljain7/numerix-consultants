import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#183232] text-white text-center py-4 text-sm mt-auto">
      &copy; {new Date().getFullYear()} Numerix Consultants. All rights reserved.
    </footer>
  );
};

export default Footer; 