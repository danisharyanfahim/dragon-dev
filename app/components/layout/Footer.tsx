import React from "react";
import FlexContainer from "../ui/containers/FlexContainer";
import Link from "next/link";
import { footerInfo, navBtnInfo } from "@/app/global/pageInfo";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <FlexContainer containerName="footer">
          <section className="mission-container">
            <figure className="logo-container">
              <img src="" alt="logo" />
            </figure>
            <p className="mission-text">
              Our mission is to provide you with the most advanced and effective
              security services to protect your business from evolving digital
              threats
            </p>
            {/* <div className="social-media-icons-container"></div> */}
          </section>
          <section className="links-container">
            <h4>Links</h4>
            {navBtnInfo.map((navBtn, index) => {
              return (
                <Link href={navBtn.url} key={index}>
                  <p>{navBtn.name}</p>
                </Link>
              );
            })}
          </section>
          <section className="info-container">
            {footerInfo.map((info, index) => {
              return (
                <div className="information-card">
                  <figure className="icon-container">
                    <div
                      style={{
                        mask: `url(${info.iconUrl})`,
                        maskSize: "contain",
                        maskPosition: "center",
                        maskRepeat: "no-repeat",
                        WebkitMask: `url(${info.iconUrl})`,
                        WebkitMaskSize: "contain",
                        WebkitMaskPosition: "center",
                        WebkitMaskRepeat: "no-repeat",
                      }}
                      className={info.name + " icon"}
                    ></div>
                  </figure>
                  <div className="content-container">
                    <p className="info-text">{info.text}</p>
                  </div>
                </div>
              );
            })}
          </section>
        </FlexContainer>
        <section className="copyright-container">
          <p className="copyright-text">
            © 2024 DragonDev. All rights reserved.
          </p>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
