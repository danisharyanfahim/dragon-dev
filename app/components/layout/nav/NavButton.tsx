import { BtnInfo } from "@/app/types/types";
import Link from "next/link";
import React from "react";

const NavButton = ({
  btnInfo,
  isActive,
  onClick,
}: {
  btnInfo: BtnInfo;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <Link
      className={`nav-button ${
        isActive ? "active" : ""
      } ${btnInfo.name.toLocaleLowerCase()}`}
      href={btnInfo.url}
      onClick={onClick}
    >
      {btnInfo.name}
    </Link>
  );
};

export default NavButton;
