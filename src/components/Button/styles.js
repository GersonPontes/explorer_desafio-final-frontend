import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;

  padding: 1.2rem;

  font-family: "Poppins", sans-serif;
  font-weight: 500;
  line-height: 2.4rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  border: none;
  border-radius: .8rem;

  transition: all 300ms ease-in-out;

  cursor: pointer;

  &:hover{
    filter: brightness(0.8);
  }

  &.light {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

  &.dark {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }
`