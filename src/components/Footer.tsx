import React from "react";

import fb from "../assets/fb.png";
import ig from "../assets/ig.png";

import styled from "styled-components";

const FooterContainer = styled.footer`
  margin-top: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
  padding: 40px 192px;
  background: linear-gradient(
    45deg,
    hsla(217, 99%, 29%, 1) 0%,
    hsla(156, 100%, 26%, 1) 100%
  );
  background: -moz-linear-gradient(
    45deg,
    hsla(217, 99%, 29%, 1) 0%,
    hsla(156, 100%, 26%, 1) 100%
  );
  background: -webkit-linear-gradient(
    45deg,
    hsla(217, 99%, 29%, 1) 0%,
    hsla(156, 100%, 26%, 1) 100%
  );

  @media (max-width: 1410px) {
    flex-direction: column;
  }

  @media (max-width: 992px) {
    padding: 40px 60px;
  }
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const OptionsList = styled.ul`
  color: white;
  font-weight: 600;
  font-size: 24px;
  padding-left: 0;
`;

const Title = styled.h2`
  margin-bottom: 12px;
  font-size: 24px;
  color: white;

  @media (max-width: 1476px) {
    font-size: 20px;
  }
`;

const OptionItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-bottom: 18px;

  @media (max-width: 1476px) {
    font-size: 16px;
  }

  @media (max-width: 688px) {
    flex-direction: column;
    align-items: flex-start
  }
`;

const Option = styled.p`
  font-weight: 400;
  margin: 0;
`;

const Socials = styled.div``;

const SocialsContainer = styled.div`
    display: flex;
    gap: 12px;
`;

const SocialLink = styled.a``;

const SocialLogo = styled.img``;

const MapContainer = styled.div`
`;

const Map = styled.iframe`
  border: 0;
  border-radius: 10px;
  width: 800px;
  height: 450px;

  @media (max-width: 1876px) {
    width: 600px;
  }

  @media (max-width: 1676px) {
    width: 400px;
  }

  @media (max-width: 1410px) {
    width: 528px;
  }

  @media (max-width: 688px) {
    width: 462px;
  }

  @media (max-width: 599px) {
    width: 380px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInfo>
        <OptionsList>
          <Title>Contactos</Title>
          <OptionItem>
            Morada:
            <Option>
              &nbsp;Rua Desembargador Correia Teles 188, 3860-362 Estarreja
            </Option>
          </OptionItem>

          <OptionItem>
            Email:
            <Option>&nbsp;geral@coutosuper.pt</Option>
          </OptionItem>

          <OptionItem>
            Telefone:
            <Option>&nbsp;234 843 587</Option>
          </OptionItem>
        </OptionsList>

        <Socials>
          <Title>Redes Sociais</Title>
          <SocialsContainer>
            <SocialLink
              href="https://www.facebook.com/couto.estarreja/"
              target="_blank"
            >
              <SocialLogo src={fb} alt="facebook logo" />
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/coutoestarreja/"
              target="_blank"
            >
              <SocialLogo src={ig} alt="instagram logo" />
            </SocialLink>
          </SocialsContainer>
        </Socials>
      </FooterInfo>

      <MapContainer>
        <Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.335500578782!2d-8.578320267910078!3d40.754645076830094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd239b87160b7a7d%3A0xf3ce82883ba30487!2sCouto%20-%20Food%20Products%20Markets%2C%20Ltd.!5e0!3m2!1sen!2spt!4v1665504548197!5m2!1sen!2spt"
          loading="lazy"
        />
      </MapContainer>
    </FooterContainer>
  );
};

export default Footer;
