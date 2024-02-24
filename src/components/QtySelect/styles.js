import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    gap: 1rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    gap: 1.6rem;
  }
  
  > svg {
    font-size: 3.3rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 2.4rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 3.3rem;
    }
  }

  > p {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    line-height: 160%;
    font-size: 2.2rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 1.8rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 2.2rem;
    }
  }
`;