import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas: 
  "header"
  "content"
  "footer";
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  grid-area: "content";
  padding: 3.6rem 5.6rem 5.4rem;

  overflow-y: auto;
`;