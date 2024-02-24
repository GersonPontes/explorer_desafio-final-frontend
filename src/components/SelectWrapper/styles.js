import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;

  > label {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 100%;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;

export const Select = styled.select`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  padding: 1.5rem 1.4rem;
  margin-top: 1.6rem;

  border: none;
  border-radius: .8rem;

  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: 100%;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_200};

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    font-size: 1.2rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-size: 1.6rem;
  }

  option {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`;