import styled from 'styled-components';
import { FaDropbox } from 'react-icons/fa';

export const Container = styled.div`
  background: var(--bg-color);
  position: relative;
  --padding-top: 100px;
  --padding-bottom: 120px;
  --heading-font-size: 32px;
  --content-width: 100%;

  &.blue {
    --bg-color: var(--color-primary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-secondary);
  }

  &.beige {
    --bg-color: var(--color-secondary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-primary);
  }

  &.white {
    --bg-color: var(--color-tertiary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-blue);
  }

  &.black {
    --bg-color: var(--color-quaternary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-blue);
  }

  &:first-child {
    --padding-top: 130px;
    --heading-font-size: 51px;

    @media (min-width: 1024px) {
      --heading-font-size: 71px;
      --content-width: 50%;
    }
  }
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--bg-color);
  clip: rect(auto, auto, auto, auto);
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--bg-color);
  max-width: 1440px;
  margin: 0 auto;
  padding: 16px 32px;
  z-index: 3;

  > h1 {
    display: flex;
    align-items: center;

    > span {
      color: var(--text-color);
      margin-left: 10px;
      font-size: 29px;
    }
  }

  > button {
    color: var(--text-color);
    background: none;
    border: none;
    outline: none;
    font-size: 16px;
    cursor: pointer;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

export const DropboxLogo = styled(FaDropbox)`
  height: 32px;
  width: 36px;
  fill: var(--logo-color);
`;

export const Content = styled.div`
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding: var(--padding-top) 32px var(--padding-bottom);
  z-index: 2;

  > h2 {
    font-size: var(--heading-font-size);
    color: var(--logo-color);
    max-width: var(--content-width);
  }

  > p {
    margin-top: 20px;
    font-size: 16px;
    color: var(--text-color);
    max-width: var(--content-width);
  }
`;
