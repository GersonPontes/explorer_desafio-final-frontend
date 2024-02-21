import { Container, Header, Form } from "./styles";
import { InputWrapper } from "../../components/InputWrapper";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignUp() {
  return (
    <Container>
      <Header>
        <svg viewBox="0 0 26 31" fill="none">
          <path d="M13 0.366394L25.9904 7.86639V22.8664L13 30.3664L0.00961876 22.8664V7.86639L13 0.366394Z" fill=""/>
        </svg>
        <h1>food explorer</h1>
      </Header>
      <Form>
        <InputWrapper title="Seu nome" type="text" id="name" placeholder="Exemplo: Maria da Silva" />
        <InputWrapper title="Email" type="text" id="email" placeholder="Exemplo: exemplo@exemplo.com.br" />
        <InputWrapper title="Senha" type="password" id="password" placeholder="No mínimo 6 caracteres" />
        <Button value="Criar conta" />
        <ButtonText value="Já tenho uma conta" />
      </Form>
    </Container>
  );
};