import React from 'react'

import styled from 'styled-components'

const FooterContainer = styled.footer`
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    padding: 40px;
    background: linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
    background: -moz-linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
    background: -webkit-linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
`;

const OptionsList = styled.ul`
    color: white;
    font-weight: 600;
    font-size: 24px;
`;

const Title = styled.h2`
    margin-bottom: 12px;
`;

const OptionItem = styled.li`
    display: flex;
    font-size: 18px;
    align-items: center;
`;

const Option = styled.p`
    font-weight: 400;
`;

const MapContainer = styled.div`

`;

const Map = styled.iframe`
    border: 0;
    border-radius: 10px;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <OptionsList>
                <Title>Contactos</Title>
                <OptionItem>
                    Morada:
                    <Option>&nbsp;Rua Desembargador Correia Teles 188, 3860-362 Estarreja</Option>
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

            <MapContainer>
                <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.335500578782!2d-8.578320267910078!3d40.754645076830094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd239b87160b7a7d%3A0xf3ce82883ba30487!2sCouto%20-%20Food%20Products%20Markets%2C%20Ltd.!5e0!3m2!1sen!2spt!4v1665504548197!5m2!1sen!2spt" width="600" height="450" loading="lazy"></Map>
            </MapContainer>
        </FooterContainer>
    )
}

export default Footer