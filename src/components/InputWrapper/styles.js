import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  
  > label {
    width: 100%;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 100%;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > div {
    margin-top: 1.6rem;
  }
`;