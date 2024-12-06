import React from "react";
import NavMenu from "./NavMenu";
import HomeButton from "./HomeButton";
import { navBtnInfo } from "@/app/global/pageInfo";
import ThemeToggle from "../../ThemeToggle";

const Navbar = () => {
  return (
    <nav className="navbar">
      <HomeButton />
      <ThemeToggle />
      <NavMenu btnInfo={navBtnInfo} />
      <div className="border"></div>
    </nav>
  );
};

export default Navbar;
