import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: .6rem;

  padding: .4rem 1.5rem;
  border-radius: .5rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_1000} ;

  font-family: "Poppins", sans-serif;
  font-weight: 500;
  line-height: 2.4rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  text-align: center;

  &.light {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_600} ;
  }
`;