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

  > select {
    width: 100%;
    padding: 1.6rem 1.4rem;

    border: none;
    background: transparent;

    color: ${({ theme }) => theme.COLORS.LIGHT_200};

    option {
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      color: red;
    }
  }
`;