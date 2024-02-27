import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { Container, Header, Form } from "./styles";
import { InputWrapper } from "../../components/InputWrapper";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignUp() {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos");
    };

    api.post("/users", { name, email, password })
    .then(() => {
      alert("Usuário cadastrado com sucesso");
      navigate("/");
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possivel cadastrar");
      };
    })
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
        <h2>Crie sua conta</h2>
        <InputWrapper 
          title="Seu nome" 
          type="text" 
          id="name" 
          placeholder="Exemplo: Maria da Silva" 
          onChange={ e => setName(e.target.value) }
        />
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
          value="Criar conta" 
          onClick={ handleSignUp }
        />
        <ButtonText value="Já tenho uma conta" href="/" />
      </Form>
    </Container>
  );
};