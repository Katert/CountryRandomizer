import React from "react";
import "./Footer.scss";

interface Props {}

const Footer: React.FunctionComponent<Props> = () => {
  return (
    <footer className="footer-container">
      <span>
        <p>by Wesley Kater</p>
      </span>
    </footer>
  );
};

export default Footer;
