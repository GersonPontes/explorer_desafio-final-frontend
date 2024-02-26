import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: .8rem;
  
  &.dark {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }

  > svg {
    margin-left: 1.6rem;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      margin-left: .5rem;
    }
  }

  > input {
    width: 100%;
    padding: 1.6rem 1.7rem;

    border: none;
    background: transparent;

    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 100%;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      padding: 1.6rem 1rem;
    }

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};

      @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        font-size: 1.2rem;
      }

      @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        font-size: 1.6rem;
      }
    }
  }
`;