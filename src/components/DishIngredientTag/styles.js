import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: .6rem;

  padding: .4rem 1.5rem;
  border-radius: .5rem;

  background-color: ${({ theme, $isnew }) => $isnew ? "none" : `${theme.COLORS.LIGHT_600}` };
  border: ${({ theme, $isnew }) => $isnew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

  > input {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    line-height: 2.4rem;
    font-size: 1.4rem;

    color: ${({ theme, $isnew }) => $isnew ? `${theme.COLORS.LIGHT_500}` : `${theme.COLORS.LIGHT_100}` };

    border: none;
    background: none;
  }

  > button {
    border: none;
    background: none;

    svg {
      color: ${({ theme, $isnew }) => $isnew ? `${theme.COLORS.LIGHT_500}` : `${theme.COLORS.LIGHT_100}` };
    }
  }

`;