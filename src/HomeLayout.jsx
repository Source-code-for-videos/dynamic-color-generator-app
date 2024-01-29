import React from "react";

import Navbar from "./Navbar";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default HomeLayout;
