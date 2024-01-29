import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-5 bg-black text-white flex items-center justify-between">
      <div className="logo">
        <h1 className="text-[1.5rem] font-[600]">Color Generator</h1>
      </div>
      <ul className="flex items-center gap-5 font-[600]">
        <Link to={"/"}>RGB</Link>
        <Link to={"/hex"}>HEX</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
