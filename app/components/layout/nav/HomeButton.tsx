import React from "react";
import Link from "next/link";
import { navBtnInfo } from "@/app/global/pageInfo";

const HomeButton = () => {
  return <Link className="home-button" href={navBtnInfo[0].url}></Link>;
};

export default HomeButton;
