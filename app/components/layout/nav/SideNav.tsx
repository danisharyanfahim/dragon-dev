import React from "react";

const SideNav = ({ children }: { children: React.ReactNode }) => {
  return <aside className="side-nav">{children}</aside>;
};

export default SideNav;
