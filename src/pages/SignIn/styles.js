import styled from "styled-components";

export const Container = styled.div`
  width: 42.8rem;
  padding: 15rem 5.6rem 0;
  margin: 0 auto;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-bottom: 7.3rem;

  > svg {
    width: 4.5rem;
    height: 4.5rem;

    path {
      fill: ${({ theme }) => theme.COLORS.CAKE_100};
    }
  }

  > h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    line-height: auto;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3.7rem;
  } 
`;

export const Form = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  > a {
    justify-content: center;
  }
`;