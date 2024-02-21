import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 7.7rem;
  padding: 2.9rem 2.8rem;

  grid-area: "footer";
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  > p {
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    line-height: auto;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: .6rem;

  > svg {
    width: 2rem;
    height: 2rem;

    path {
      fill: ${({ theme }) => theme.COLORS.LIGHT_700};
    }
  }

  > h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    line-height: auto;
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    font-size: 1.5rem;
  } 
`