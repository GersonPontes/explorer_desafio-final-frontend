import styled from "styled-components";

export const Container = styled.div`
  > label {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 100%;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > div {
    margin-top: .8rem;
  }
`;

export const Ingredients = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  border-radius: .8rem;
  padding: .8rem;
`;