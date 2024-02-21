import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  align-items: center;
  gap: .5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  line-height: 2.4rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`