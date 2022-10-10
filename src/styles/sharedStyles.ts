import { Link } from 'react-router-dom'
import styled, {css} from 'styled-components/macro'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  background-color: var(--background-color);
  color: var(--primary-color);
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  /*justify-content: center;
  align-items: center; */
  margin: 0 64px;
  gap: 10px;
`;

type ButtonLinkProps = {
  secondary?: boolean;
}
export const ButtonLink = styled(Link)<ButtonLinkProps>`
  width: fit-content;
  padding: 12px 32px;
  border-radius: 3px;
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin-top: 24px;
  background: linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  background: -moz-linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
  background: -webkit-linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);

  ${(props) => props.secondary && css`
    background: -webkit-linear-gradient(45deg, hsla(217, 99%, 29%, 1) 0%, hsla(156, 100%, 26%, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-color: white;
  `}
`;

export const LinkContainer = styled.div`
    width: fit-content;
    background-color: white;
    border-radius: 3px;
    padding: 12px 0;
`;

