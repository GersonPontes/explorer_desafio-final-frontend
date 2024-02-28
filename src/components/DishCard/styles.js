import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 30.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: .8rem;

  position: relative;

  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
	  width: 26.2rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
	  width: 21rem;
  }

  > svg {
    position: absolute;
    right: 1.6rem;
    top: 1.6rem;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`;

export const DishDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  > img {
    width: 17.6rem;
    height: 17.6rem;
    border-radius: 50%;

    margin-bottom: 1.5rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
	    width: 13rem;
      height: 13rem;

      margin-bottom: 1.4rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
	    width: 8.8rem;
      height: 8.8rem;
      margin-bottom: 1.2rem;
    }
  }

  > h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    line-height: 140%;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 1.8rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
	    line-height: 2.4rem;
      font-size: 1.4rem;
    }
  }

  > p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 160%;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    text-align: center;

    margin-top: 1.5rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 1.3rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: none;
    }
  }

  > h2 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 160%;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.CAKE_200};

    margin: 1.2rem 0;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 2.4rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
	    line-height: 100%;
      font-size: 1.6rem;
    }
  }
`;

export const DishOrder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: column;    
  }
`;