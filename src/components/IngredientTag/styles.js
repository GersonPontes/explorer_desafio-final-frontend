import styled from "styled-components";

export const Container = styled.div`
  padding: .4rem .8rem;
  border-radius: .5rem;
  margin-right: 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_1000} ;

  font-family: "Poppins", sans-serif;
  font-weight: 500;
  line-height: 2.4rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  text-align: center;
`;