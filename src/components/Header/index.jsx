import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { Container, Logo, Cart, Logout } from "./styles";
import { Button } from "../Button";
import { Input } from "../Input";

import { FiMenu } from "react-icons/fi";
import { PiNewspaperClipping } from 'react-icons/pi';
import { RxExit } from "react-icons/rx";
import { CgSearch } from "react-icons/cg";

export function Header({...rest}) {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
    navigate("/");
  };

  function handleGoHome() {
    navigate("/");
  };

  return (
    <Container>
      <FiMenu />
      <Logo onClick={handleGoHome}>
        <svg viewBox="0 0 26 31" fill="none">
          <path d="M13 0.366394L25.9904 7.86639V22.8664L13 30.3664L0.00961876 22.8664V7.86639L13 0.366394Z" fill=""/>
        </svg>
        <h1>food explorer</h1>
      </Logo>
      <Cart>
        <span>0</span>
        <PiNewspaperClipping />
      </Cart>

      <Input 
        placeholder="Busque por pratos ou ingredientes" 
        icon={CgSearch} 
        {...rest}
      />
      <Button icon={PiNewspaperClipping} value="Pedidos (0)" />

      <Logout onClick={handleSignOut}>
        <RxExit />
      </Logout>  
    </Container>
  );
};