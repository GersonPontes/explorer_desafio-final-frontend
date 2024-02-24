import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas: 
  "header"
  "content"
  "footer";
`;

export const Main = styled.div`
  grid-area: "content";
  padding: 2.4rem 10rem 5.4rem;

  overflow-y: auto;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 2.4rem 8rem 5.4rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 3.6rem 5.6rem 5.4rem;
  }

  > a {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    line-height: 140%;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    svg {
      font-size: 2.8rem;

      @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        font-size: 2.2rem;
      }
    }
  }
`;