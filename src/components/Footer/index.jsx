import { Container, Logo } from "./styles";

export function Footer() {
  return (
    <Container>

      <Logo>
        <svg viewBox="0 0 26 31" fill="none">
          <path d="M13 0.366394L25.9904 7.86639V22.8664L13 30.3664L0.00961876 22.8664V7.86639L13 0.366394Z" fill=""/>
        </svg>
        <h1>food explorer</h1>
      </Logo>

      <p>© 2023 - Todos os direitos reservados.</p>

    </Container>
  );
};