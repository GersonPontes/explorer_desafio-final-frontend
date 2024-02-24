import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas: "header content";
  grid-template-columns: 50% 50%;
  align-items: center;

  padding: 5rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    grid-template-columns: 45% 55%;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-template-areas: "header" "content";
    grid-template-rows: auto auto;
    grid-template-columns: 100%;
    width: 42.8rem;
    height: fit-content;
    padding: 15rem 5.6rem 0;
    margin: 0 auto;
  };
`;

export const Header = styled.div`
  grid-area: "header";
  width: fit-content;
  display: flex;
  align-items: center;
  justify-self: center;
  gap: 2rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin-bottom: 7.3rem;
    gap: 1rem;
  }

  > svg {
    width: 5rem;
    height: 5rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      width: 4.8rem;
      height: 4.8rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      width: 4.5rem;
      height: 4.5rem;
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
    font-size: 4.2rem;
    white-space: nowrap;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 3.8rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 3.7rem;
    };
  } 
`;

export const Form = styled.div`
  grid-area: "content";
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  gap: 3.2rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  border-radius: 1.6rem;

  padding: 5rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 3rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 100%;
    background-color: transparent;
    padding: 0;
  }

  > h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    line-height: 140%;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: none;
    }
  }

  > a {
      justify-content: center;
  }
`;