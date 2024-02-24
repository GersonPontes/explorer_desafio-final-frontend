import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  > label {
    width: 100%;
    height: 5.1rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: .8rem;

    display: flex;
    align-items: center;
    justify-content: start;
    padding-left: 3rem;

    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 100%;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 1.2rem;
      padding-left: 2rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 1.6rem;
      padding-left: 3rem;
    }

    svg {
      font-size: 2.8rem;
      margin-right: .8rem;
    }
  }

  > input {
    display: none;
  }
`;