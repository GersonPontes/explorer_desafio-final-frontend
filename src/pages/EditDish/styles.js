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
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    svg {
      font-size: 1.6rem;
    }
  }

  > h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    line-height: 140%;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    margin: 2.4rem 0;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3.2rem;
`;