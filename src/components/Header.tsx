import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.jpg'

import styled from 'styled-components/macro'

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 160px;
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
    return (
        <HeaderContainer>
            <LogoLink to='/'>
                <Logo src={logo} alt="Logótipo Supermercado Couto" />
            </LogoLink>

            <NavbarContainer>
                <NavbarLink to='/'>Bem Vindo</NavbarLink>
                <NavbarLink to='/sobre-nos'>Sobre Nós</NavbarLink>
                <NavbarLink to='/produtos'>Produtos</NavbarLink>
                <NavbarLink to='/promocoes'>Promoções</NavbarLink>
                <NavbarLink to='/contactos'>Contactos</NavbarLink>
            </NavbarContainer>

        </HeaderContainer>
    )
}

export default Header