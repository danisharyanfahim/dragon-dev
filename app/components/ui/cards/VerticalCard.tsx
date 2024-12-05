import React from "react";

const VerticalCard = () => {
  return (
    <div className="card">
      <figure className="graphic-container">
        <div
          className="icon"
          style={{
            maskImage: `url("/static/icons/contact-icon.png")`,
            WebkitMaskImage: `url("/static/icons/contact-icon.png")`,
          }}
        ></div>
      </figure>
      <div className="content-container">
        <h6 className="text">Morbi varius ac nulla nec consequat</h6>
        <p className="text">
          Donec id bibendum neque. Praesent tellus purus, pretium nec lectus ut,
          lacinia laoreet nunc.
        </p>
      </div>
    </div>
  );
};

export default VerticalCard;
