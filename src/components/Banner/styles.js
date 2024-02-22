import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: .3rem;

  margin-top: 1.5rem;
  margin-bottom: 3.8rem;

  > img {
    width: 19rem;
    margin-top: -3rem;
    margin-left: -3rem;
  }
`;

export const BannerTxt = styled.div`
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  padding-top: 3.6rem;
  padding-right: 2.1rem;
  padding-bottom: 2.1rem;

  > h1 {
    font-weight: 500;
    line-height: 140%;
    font-size: 1.8rem;   
    margin-bottom: .5rem;
  }

  > p {
    font-weight: 400;
    line-height: 140%;
    font-size: 1.2rem;    
  }
`;