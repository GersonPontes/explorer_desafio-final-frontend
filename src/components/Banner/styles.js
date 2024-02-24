import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: .3rem;

  margin-top: 1.5rem;
  margin-bottom: 1rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin-bottom: 3.8rem;
  }

  > img {
    width: 30rem;
    margin-top: -3rem;
    margin-left: -3rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      width: 25rem;
    }
    
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      width: 19rem;
    }
  }
`;

export const BannerTxt = styled.div`
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  
  padding: 3.6rem 2.1rem 2.1rem 1rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 3.6rem 2.1rem 2.1rem .5rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 3.6rem 2.1rem 2.1rem 0;
  }

  > h1 {
    font-weight: 500;
    line-height: 140%;
    font-size: 4rem;   
    margin-bottom: 1rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 3rem;   
      margin-bottom: .7rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 1.8rem;   
      margin-bottom: .5rem;
    }
  }

  > p {
    font-weight: 400;
    line-height: 100%;
    font-size: 1.6rem;
    
    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 1.4rem; 
    }
    
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      line-height: 140%;
      font-size: 1.2rem; 
    }
  }
`;