import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: grid;
  grid-template-areas: 
  "dishImg dishDescription" 
  "dishImg dishIngredients" 
  "dishImg dishOrder";

  .btnEdit {
    width: fit-content;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-template-areas: 
    "dishImg" 
    "dishDescription" 
    "dishIngredients"
    "dishOrder";

    .btnEdit {
      width: 100%;      
    }
  }
`;

export const DishImg = styled.div`
  grid-area: dishImg;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.6rem;
  margin-bottom: 1.6rem;
  margin-right: 4.7rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-right: 3.7rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: row;
    align-items: center;
    margin-right: 0;
  }

  > img {
    width: 40rem;
    height: 40rem;
    border-radius: 50%;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      width: 28rem;
      height: 28rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      width: 26.4rem;
      height: 26.4rem;
    }
  }
`;

export const DishDescription = styled.div`
  height: max-content;
  grid-area: dishDescription;
  margin-bottom: 2.4rem;
  text-align: start;
  margin-top: 10rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-top: 5rem;
  } 

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    text-align: center;
    margin-top: 0;
  }

  > h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    line-height: 140%;
    font-size: 4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    margin-bottom: 2.4rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 3rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 2.7rem;
    }
  }

  > p {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    line-height: 140%;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 1.8rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 1.6rem;
    }
  }
`;

export const IngredientsList = styled.div`
  height: max-content;
  grid-area: dishIngredients;
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 4.8rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    justify-content: center;
  }

  div {
    width: fit-content;
  }
`;

export const DishOrder = styled.div`
  width: 100%;
  height: max-content;

  grid-area: dishOrder;
  display: flex;
  align-items: center;
  gap: 1.6rem;  

  > div:nth-child(2) {
    width: fit-content;
    
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      width: 100%;
    }
  }
`;