import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 17.2rem;
  padding: 1.6rem 1.7rem;

  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: 100%;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  
  border: none;
  border-radius: .8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_800};

  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`;