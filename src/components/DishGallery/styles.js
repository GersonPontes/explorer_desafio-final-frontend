import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  > h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    line-height: 140%;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    margin-bottom: 2.4rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 2.4rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 1.8rem;
    }
  }
`;

export const DishList = styled.div`
  display: flex;
  gap: 1.6rem;
`;