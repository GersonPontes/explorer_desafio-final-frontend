import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 7.7rem;
  padding: 2.3rem 10rem;

  grid-area: "footer";
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
    padding: 2.3rem 6rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
    padding: 2.9rem 2.8rem;
  }

  > p {
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    line-height: 160%;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
      font-size: 1.2rem;
      line-height: auto;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
    gap: .6rem;
  }

  > svg {
    width: 3rem;
    height: 3rem;

    path {
      fill: ${({ theme }) => theme.COLORS.LIGHT_700};
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
      width: 2rem;
      height: 2rem;
    }
  }

  > h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    line-height: auto;
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    font-size: 2.4rem;
    white-space: nowrap;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
      font-size: 1.5rem;
    }
  } 
`