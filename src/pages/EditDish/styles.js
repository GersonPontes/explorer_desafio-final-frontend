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
  padding: 4rem 10rem 5.4rem;

  overflow-y: auto;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 3.8rem 8rem 5.4rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 3.6rem 5.6rem 5.4rem;
  }

  > a {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    line-height: 140%;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    svg {
      font-size: 1.6rem;
    }
  }

  > h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    line-height: 140%;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    margin: 2.4rem 0;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
    gap: 2.4rem;
  }
`;

export const FormPt1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3.2rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
    flex-direction: column;
    gap: 2.4rem;
  }
`;

export const FormPt2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 3.2rem;  

  > div:nth-child(1) {
    width: 75%;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
      width: 100%;
    }
  }

  > div:nth-child(2) {
    width: 25%;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
      width: 100%;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
    flex-direction: column;
    gap: 2.4rem;  
  }
`;

export const FormPt3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 3.2rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
    align-items: center;
    gap: 2.4rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: end;
  gap: 3.2rem;



  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
    justify-content: space-between;
  }

  > div {
    width: 25%;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
      width: 100%;
    }
  }
`;