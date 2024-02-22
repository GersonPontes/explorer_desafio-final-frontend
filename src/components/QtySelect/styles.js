import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  
  > svg {
    font-size: 3.3rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > p {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    line-height: 160%;
    font-size: 2.2rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`;