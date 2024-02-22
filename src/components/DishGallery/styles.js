import styled from "styled-components";

export const Container = styled.div`
  > h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    line-height: 140%;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    margin-bottom: 2.4rem;
  }
`;

export const DishList = styled.div`
  display: flex;
  gap: 1.6rem;
`;