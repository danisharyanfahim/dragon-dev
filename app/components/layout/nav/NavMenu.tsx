"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import NavButton from "./NavButton";
import SideNav from "./SideNav";
import { BtnInfo } from "@/app/types/types";

const NavMenu = ({ btnInfo }: { btnInfo: BtnInfo[] }) => {
  const [showing, setShowing] = useState<boolean>(false);
  const pathname = usePathname();

  const hideMenu = () => {
    setShowing(false);
  };

  return (
    <>
      <button
        className="nav-menu-button"
        onClick={() => setShowing((prev) => !prev)}
      ></button>
      {showing && (
        <SideNav>
          <div className="nav-menu">
            {btnInfo.map((btn, index) => {
              const isActive = btn.url === pathname;
              return (
                <NavButton
                  key={btn.name + index}
                  btnInfo={btn}
                  isActive={isActive}
                  onClick={hideMenu}
                />
              );
            })}
          </div>
        </SideNav>
      )}
    </>
  );
};

export default NavMenu;
