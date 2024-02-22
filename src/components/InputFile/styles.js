import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  position: relative;

  > label {
    width: 100%;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: .8rem;

    display: flex;
    align-items: center;
    justify-content: start;
    position: absolute;
    padding-left: 3rem;

    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 100%;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};

    svg {
      font-size: 2.8rem;
      margin-right: .8rem;
    }
  }

  > input {
    display: none;
  }
`;