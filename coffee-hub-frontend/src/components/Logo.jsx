import React from "react";

const Logo = ({
  coffeeColor = "#4e342e",
  hubColor = "#d4a373",
  className = "",
}) => {
  return (
    <div
      className={`text-xl tracking-widest font-light uppercase ${className}`}
    >
      <span style={{ color: coffeeColor }}>COFFEE</span>
      <span style={{ color: hubColor }}>HUB</span>
    </div>
  );
};

export default Logo;
