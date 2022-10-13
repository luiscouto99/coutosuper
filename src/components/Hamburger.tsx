import React, { useState } from 'react'

import hamburger from "../assets/hamburger.png";
import cross from "../assets/cross.png";

import styled from 'styled-components/macro';
import Navbar from './Navbar';

const HamburgerIcon = styled.img`
    position: relative;
    cursor: pointer;
    z-index: 1;
`;

const MobileNavbar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width:100vw;
  background: linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  background: -moz-linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  background: -webkit-linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  visibility: visible;
`;


const Hamburger = () => {
    const [isHamburgerActive, setIsHamburgerActive] = useState(false);

    return (
        <>
            <HamburgerIcon src={isHamburgerActive ? cross : hamburger} alt="hamburger menu icon" onClick={() => setIsHamburgerActive(!isHamburgerActive)} />
            {isHamburgerActive && (
                <MobileNavbar>
                    <Navbar mobile />
                </MobileNavbar>
            )}
        </>
    )
}

export default Hamburger