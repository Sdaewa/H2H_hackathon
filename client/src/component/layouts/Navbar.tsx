import React from "react";
import navbar from "../../scss/components/navbar.module.scss"

const Navbar: React.FC = (): JSX.Element => {
  return (
    <>
      <nav className={navbar.desktop}></nav>
      <nav className={navbar.mobile}></nav>
    </>
  );
};

export default Navbar;
