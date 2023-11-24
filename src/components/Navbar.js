import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        Home
        <Link to="/about">the list of prouduct</Link>
      </div>
    </div>
  );
};

export default Navbar;
