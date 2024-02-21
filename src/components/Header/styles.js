import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 11.4rem;
  padding: 5.6rem 2.8rem 2.4rem;

  grid-area: "header";
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;

  > svg {
    width: 2.8rem;
    height: 2.8rem;

    path {
      fill: ${({ theme }) => theme.COLORS.CAKE_100};
    }
  }

  > h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    line-height: auto;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 2.1rem;
  } 
`

export const Cart = styled.div`
  position: relative;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;

    position: absolute;
    right: -.65rem;
    top: -.4rem;

    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    border-radius: 50%;

    font-family: "Poppins", sans-serif;
    font-weight: 500;
    line-height: 2.4rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

  }

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3rem;
  }
`;