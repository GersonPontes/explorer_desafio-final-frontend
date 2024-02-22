import styled from "styled-components";

export const Container = styled.div`
  width: 21rem;
  height: 29.2rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: .8rem;

  position: relative;

  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  > svg {
    position: absolute;
    right: 1.6rem;
    top: 1.6rem;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > img {
    width: 8.8rem;
    height: 8.8rem;
    border-radius: 50%;

    margin-bottom: 1.2rem;
  }

  > h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    line-height: 2.4rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 100%;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.CAKE_200};

    margin: 1.2rem 0;
  }

  > :nth-child(4) {
    margin-bottom: 1.6rem;

    svg {
      font-size: 1.8rem;
    }

    p {
      font-weight: 400;
      line-height: 100%;
      font-size: 1.6rem;
    }
  }
`;