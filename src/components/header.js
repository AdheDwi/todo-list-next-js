import React from "react";
import { Link } from "../routes";

const Header = () => {
  return (
    <div className="header" data-cy="header">
      <div className="container">
        <Link href="/">
          <a className="brand-text" data-cy="back-home">
            To Do List App
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
