import React, { useState } from 'react'

import styled, { css } from 'styled-components/macro';

const HorarioContainer = styled.section`
    margin: 24px 0 60px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const HorarioTitle = styled.h2`
background: -webkit-linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

type ContainerProps = {
    isFirstActive?: boolean,
    isSecondActive?: boolean,
    isThirdActive?: boolean,
}
const Container = styled.div<ContainerProps>`
  width: 100%;
  border-radius: 10px;
  padding: 3px;
  color: var(--logo-blue);
  background: hsla(217, 99%, 29%, 1);
  background: linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  background: -moz-linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  background: -webkit-linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#013893", endColorstr="#008651", GradientType=1 );
  cursor: pointer;

  ${(props) => (props.isFirstActive || props.isSecondActive || props.isThirdActive) && css`
    & ${Block} {
        background-color: white;
        color: var(--logo-blue);
    }  
  `}
`;

const Block = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: transparent;
    color: white;

    height: 100%;
    padding: 12px 24px;
`;

const DaysContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Days = styled.h4`
    margin: 12px 0;
`;

const Plus = styled.h2`
    margin: 12px 0;
    border-radius: 50%;
    padding: 1px 8px;
    color:white;
`;

const Hours = styled.p`
    margin: 0;
    line-height: 1.5;
`;



const Horario = () => {
    const [isFirstActive, setIsFirstActive] = useState(true);
    const [isSecondActive, setIsSecondActive] = useState(false);
    const [isThirdActive, setIsThirdActive] = useState(false);

    const handleFirstClick = () => {
        setIsFirstActive(true);
        setIsSecondActive(false);
        setIsThirdActive(false);
    }

    const handleSecondClick = () => {
        setIsFirstActive(false);
        setIsSecondActive(true);
        setIsThirdActive(false);
    }

    const handleThirdClick = () => {
        setIsFirstActive(false);
        setIsSecondActive(false);
        setIsThirdActive(true);
    }

    return (
        <HorarioContainer>
            <HorarioTitle>Horário</HorarioTitle>
            <Container onClick={() => handleFirstClick()} isFirstActive={isFirstActive}>
                <Block>
                    <DaysContainer>
                        <Days>Segunda, Quarta, Quinta e Sexta</Days>
                        {!isFirstActive && <Plus>+</Plus>}
                    </DaysContainer>
                    {isFirstActive && (
                        <>
                            <Hours>08h00 - 13h00</Hours>
                            <Hours>14h30 - 20h30</Hours>
                        </>
                    )}
                </Block>
            </Container>

            <Container onClick={() => handleSecondClick()} isSecondActive={isSecondActive}>
                <Block>
                    <DaysContainer>
                        <Days>Terça e Sábado</Days>
                        {!isSecondActive && <Plus>+</Plus>}
                    </DaysContainer>

                    {isSecondActive && (
                        <Hours>08h00 - 20h30</Hours>
                    )}
                </Block>
            </Container>

            <Container onClick={() => handleThirdClick()} isThirdActive={isThirdActive}>
                <Block>
                    <DaysContainer>
                        <Days>Domingo</Days>
                        {!isThirdActive && <Plus>+</Plus>}
                    </DaysContainer>

                    {isThirdActive && (
                        <Hours>Encerrados</Hours>
                    )}
                </Block>
            </Container >
        </HorarioContainer>
    )
}

export default Horario