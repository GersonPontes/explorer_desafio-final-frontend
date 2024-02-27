import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 23%;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: .6rem;

  padding: .4rem 1.5rem;
  border-radius: .5rem;

  background-color: ${({ theme, $isnew }) => $isnew ? "none" : `${theme.COLORS.LIGHT_600}` };
  border: ${({ theme, $isnew }) => $isnew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

  @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
    width: 31%;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 47%;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 30%;
  }

  > input {
    width: 100%;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    line-height: 2.4rem;
    font-size: 1.4rem;

    color: ${({ theme, $isnew }) => $isnew ? `${theme.COLORS.LIGHT_500}` : `${theme.COLORS.LIGHT_100}` };

    border: none;
    background: none;
  }

  > button {
    border: none;
    background: none;

    svg {
      color: ${({ theme, $isnew }) => $isnew ? `${theme.COLORS.LIGHT_500}` : `${theme.COLORS.LIGHT_100}` };
    }
  }

`;