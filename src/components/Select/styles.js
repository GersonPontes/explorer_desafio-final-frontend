import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: .8rem;
  padding-right: 1.7rem;
  
  > label {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 100%;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > select {
    width: 100%;
    padding: 1.6rem 1.4rem;

    border: none;
    background: transparent;

    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 100%;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};

    option {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;