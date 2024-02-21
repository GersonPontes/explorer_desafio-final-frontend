import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas: 
  "header"
  "content"
  "footer";
`;

export const Main = styled.div`
  grid-area: "content";
  padding: 3.6rem 5.6rem 5.4rem;

  overflow-y: auto;

  > a {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    line-height: 140%;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`;

export const DishOrder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  > svg {
    font-size: 7.5rem;
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