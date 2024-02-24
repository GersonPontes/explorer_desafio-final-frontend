import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  > label {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 100%;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    margin-bottom: 1.6rem;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 17.2rem;
  padding: 1.6rem 1.7rem;

  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: 100%;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  
  border: none;
  border-radius: .8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_800};

  resize: none;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    font-size: 1.2rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-size: 1.6rem;
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`;