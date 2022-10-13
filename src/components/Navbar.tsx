import React from 'react'
import { NavLink } from "react-router-dom";

import styled, { css } from "styled-components/macro";

type NavbarContainerProps = {
    mobile?: boolean;
}
const NavbarContainer = styled.nav<NavbarContainerProps>`
  display: flex;
  gap: 20px;

  ${(props) => props.mobile && css`
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;
    color: white;
  `};
`;

type NavbarLinkProps = {
    mobile?: boolean;
}
const NavbarLink = styled(NavLink)<NavbarLinkProps>`
  font-weight: 500;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--logo-green);
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  &:hover:before {
    visibility: visible;
    width: 100%;
  }
  
  &.active {
    color: var(--logo-green);
    font-weight: 600;
  }

  ${(props) => props.mobile && css`
    font-size: 48px;
    font-weight: 600;

    &:before {
        height: 4px;
    }
  `};
`;

const Navbar = ({mobile} : {mobile?: boolean}) => {
    return (
        <NavbarContainer mobile={mobile}>
            <NavbarLink mobile={mobile} to="/sobre-nos">Sobre Nós</NavbarLink>
            <NavbarLink mobile={mobile} to="/produtos">Produtos</NavbarLink>
            <NavbarLink mobile={mobile} to="/promocoes">Promoções</NavbarLink>
            <NavbarLink mobile={mobile} to="/contactos">Contactos</NavbarLink>
        </NavbarContainer>
    )
}

export default Navbar