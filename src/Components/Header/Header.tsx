import React from "react";
import "./Header.scss";

interface Props {}

const Header: React.FunctionComponent<Props> = (props) => {
  return (
    <header className="header-container">
      <div className="header-title">
        <span>
          <h2>Country Randomizer</h2>
        </span>
      </div>
      <div className="header-repo-link-button">
        <a
          href="https://github.com/Katert/CountryRandomizer"
          target="_blank"
          rel="noreferrer"
        >
          Repo
        </a>
      </div>
    </header>
  );
};

export default Header;
