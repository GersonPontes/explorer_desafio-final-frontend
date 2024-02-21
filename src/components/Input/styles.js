import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: .8rem;

  > svg {
    margin-left: 1.6rem;
  }

  > input {
    width: 100%;
    padding: 1.6rem 1.4rem;

    border: none;
    background: transparent;

    color: ${({ theme }) => theme.COLORS.LIGHT_200};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;