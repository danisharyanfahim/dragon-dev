import React from "react";
import NavMenu from "./NavMenu";
import HomeButton from "./HomeButton";
import { navBtnInfo } from "@/app/global/pageInfo";
import ThemeToggle from "../../ThemeToggle";
import SearchBar from "../SearchBar";

const Navbar = () => {
  return (
    <nav className="navbar">
      <HomeButton />
      <ThemeToggle />
      <SearchBar type="onSubmit" />
      <NavMenu btnInfo={navBtnInfo} />
      <div className="border"></div>
    </nav>
  );
};

export default Navbar;
