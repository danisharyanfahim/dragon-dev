import React from "react";
import FlexContainer from "../ui/containers/FlexContainer";
import VerticalCard from "../ui/cards/VerticalCard";

const Footer = () => {
  return (
    <footer>
      <FlexContainer>
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
      </FlexContainer>
    </footer>
  );
};

export default Footer;
