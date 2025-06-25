import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 flex items-center justify-between px-6 py-2 text-sm font-medium shadow-sm z-10">
      <div className="flex items-center gap-2">
        <span className="font-bold text-lg flex items-center gap-1">
          <span className="text-blue-900 font-extrabold">NG</span>
          <span className="text-black">NUMERIX CONSULTANTS</span>
        </span>
      </div>
      <div className="hidden md:flex items-center gap-6 text-gray-700">
        <div className="flex items-center gap-2">
          <span className="material-icons text-base">call</span>
          <span>+91-8630876257</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-icons text-base">email</span>
          <span>Saavtika.Jain@NumerixConsultants.in</span>
        </div>
        <a href="#" className="flex items-center gap-1 hover:underline">
          <span className="material-icons text-base">linkedin</span>
          <span>LinkedIn</span>
        </a>
      </div>
      <div className="flex items-center gap-4">
        <a href="#" className="px-3 py-1 rounded hover:bg-gray-100">Home</a>
        <a href="#services" className="px-3 py-1 rounded hover:bg-gray-100">Our Services</a>
        <button className="bg-gray-800 text-white px-4 py-1.5 rounded hover:bg-gray-700 transition">Contact us</button>
      </div>
    </nav>
  );
};

export default Navbar; 