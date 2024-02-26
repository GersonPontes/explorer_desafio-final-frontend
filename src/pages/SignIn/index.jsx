import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import { Container, Header, Form } from "./styles";
import { InputWrapper } from "../../components/InputWrapper";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignIn() {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState(""); 

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  };

  return (
    <Container>
      <Header>
        <svg viewBox="0 0 26 31" fill="none">
          <path d="M13 0.366394L25.9904 7.86639V22.8664L13 30.3664L0.00961876 22.8664V7.86639L13 0.366394Z" fill=""/>
        </svg>
        <h1>food explorer</h1>
      </Header>
      <Form>
        <h2>Faça login</h2>
        <InputWrapper 
          title="Email" 
          type="text" 
          id="email" 
          placeholder="Exemplo: exemplo@exemplo.com.br" 
          onChange={ e => setEmail(e.target.value) }
        />
        <InputWrapper 
          title="Senha" 
          type="password" 
          id="password" 
          placeholder="No mínimo 6 caracteres" 
          onChange={ e => setPassword(e.target.value) }
        />
        <Button 
          value="Entrar" 
          onClick={handleSignIn}
        />
        <ButtonText value="Criar uma conta" href="/register" />
      </Form>
    </Container>
  );
};