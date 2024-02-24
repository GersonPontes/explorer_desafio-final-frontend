import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  padding: 5.6rem 10rem 2.4rem;

  grid-area: "header";
  display: flex;
  align-items: center;
  gap: 3.2rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 5.6rem 6rem 2.4rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 5.6rem 2.8rem 2.4rem;
    justify-content: space-between;
    gap: 0;
  }

  > svg {
    display: none;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: flex;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 3rem;
    }
  }

  > div:nth-child(4) {
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: none;
    }
  }

  > div:nth-child(5) {
    max-width: fit-content;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: none;
    }
  }

  > svg:nth-child(6) {
    font-size: 8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: none;
    }
  }
`;

export const Logo = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    gap: .8rem;
  }

  > svg {
    width: 3rem;
    height: 3rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      width: 2.5rem;
      height: 2.5rem;
    }

    path {
      fill: ${({ theme }) => theme.COLORS.CAKE_100};
    }
  }

  > h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    line-height: auto;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 2.4rem;
    white-space: nowrap;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 2.1rem;
    }
  } 
`

export const Cart = styled.div`
  display: none;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    position: relative;
    display: block;
  }

  > span {
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;

      position: absolute;
      right: -.65rem;
      top: -.4rem;

      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      border-radius: 50%;

      font-family: "Poppins", sans-serif;
      font-weight: 500;
      line-height: 2.4rem;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  > svg {
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 3rem;
    }
  }
`;