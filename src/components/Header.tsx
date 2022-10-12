import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.jpg";

import styled, { css } from "styled-components/macro";

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
`;

const LogoLink = styled(Link)`
  width: 100px;
`;

const Logo = styled.img`
  width: 100%;
`;

const NavbarContainer = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavbarLink = styled(Link)`
  font-weight: 500;
`;

const Header = () => {
  const [yOffset, setYOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setYOffset(window.pageYOffset);

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <HeaderContainer offset={yOffset}>
      <LogoLink to="/">
        <Logo src={logo} alt="Logótipo Supermercado Couto" />
      </LogoLink>

      <NavbarContainer>
        <NavbarLink to="/sobre-nos">Sobre Nós</NavbarLink>
        <NavbarLink to="/produtos">Produtos</NavbarLink>
        <NavbarLink to="/promocoes">Promoções</NavbarLink>
        <NavbarLink to="/contactos">Contactos</NavbarLink>
      </NavbarContainer>
    </HeaderContainer>
  );
};

export default Header;
