import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.jpg";

import styled, { css } from "styled-components/macro";
import Hamburger from "./Hamburger";
import Navbar from "./Navbar";

type HeaderContainerProps = {
  offset: number;
};
const HeaderContainer = styled.header<HeaderContainerProps>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 192px;
  z-index:1;

  ${(props) =>
    props.offset > 1 &&
    css`
      box-shadow: 0 3px 6px hsla(0, 0%, 0%, 0.1),
        0 1px 4px hsla(0, 0%, 0%, 0.1), 0 2px 8px hsla(0, 0%, 0%, 0.1);
    `}

  @media (max-width: 992px) {
    padding: 20px 60px;
  }
`;

const LogoLink = styled(NavLink)`
  width: 100px;
`;

const Logo = styled.img`
  width: 100%;
`;



const Header = () => {
  const [yOffset, setYOffset] = useState(0);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('scroll', () => setYOffset(window.pageYOffset), true);
    window.addEventListener('resize', () => setWindowSize(window.innerWidth));
    return () => {
      window.removeEventListener('scroll', () => setYOffset(window.pageYOffset));
      window.removeEventListener('resize', () => setWindowSize(window.innerWidth));
    };
  }, []);


  return (
    <HeaderContainer offset={yOffset}>
      <LogoLink to="/">
        <Logo src={logo} alt="Logótipo Supermercado Couto" />
      </LogoLink>

      {windowSize >= 688 ? <Navbar /> : <Hamburger />}
    </HeaderContainer>
  );
};

export default Header;
