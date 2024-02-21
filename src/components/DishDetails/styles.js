import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  > img {
    width: 26.4rem;
    height: 26.4rem;

    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
  }

  > h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    line-height: 140%;
    font-size: 2.7rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    margin-bottom: 2.4rem;
  }

  > p {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    line-height: 140%;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    text-align: center;
    
    margin-bottom: 2.4rem;
  }
`;

export const IngredientsList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  div {
      width: fit-content;
      margin-bottom: 2.4rem;
    }
`;