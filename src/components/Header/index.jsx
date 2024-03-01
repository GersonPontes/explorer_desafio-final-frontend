import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

import { Container, Logo, LogoName, Search, Cart, Logout, Menu, MenuHeader, MenuMain, MenuFooter } from "./styles";
import { Button } from "../Button";
import { Input } from "../Input";
import { ButtonText } from "../ButtonText";

import { FiMenu, FiX } from "react-icons/fi";
import { PiNewspaperClipping } from 'react-icons/pi';
import { RxExit } from "react-icons/rx";
import { CgSearch } from "react-icons/cg";

import { USER_ROLE } from "../../utils/roles";

export function Header({ onClick, ...rest}) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleSignOut() {
    signOut();
    navigate("/");
  };

  function handleGoHome() {
    navigate("/");
  };

  function handleNewDish() {
    navigate("/newdish");
  };

  function openMenu() {
    setMenuIsOpen(true)
  }

  function closeMenu() {
    setMenuIsOpen(false)
  }

  return (
    <Container>
      <Menu data-menu-is-open={menuIsOpen}>
        <MenuHeader>
          <FiX onClick={closeMenu}/>
          <h1>Menu</h1>
        </MenuHeader>
        <MenuMain>
          <Input 
            placeholder="Busque por pratos ou ingredientes"   
            icon={CgSearch} 
            {...rest} 
          />
        </MenuMain>
        <MenuFooter>
          {
            user.role == USER_ROLE.ADMIN &&
            <ButtonText value="Novo prato" onClick={handleNewDish} />
          }
          <ButtonText value="Sair" onClick={handleSignOut} />
        </MenuFooter>
      </Menu>

      <FiMenu onClick={openMenu}/>

      <Logo onClick={handleGoHome}>
        <LogoName>
          <svg viewBox="0 0 26 31" fill="none">
            <path d="M13 0.366394L25.9904 7.86639V22.8664L13 30.3664L0.00961876 22.8664V7.86639L13 0.366394Z" fill=""/>
          </svg>
          <h1>food explorer</h1>
        </LogoName>
        
        {
          user.role == USER_ROLE.ADMIN &&
          <p>admin</p>
        }
      </Logo>

      {
        user.role != USER_ROLE.ADMIN ?
        <Cart>
          <span>0</span>
          <PiNewspaperClipping />
        </Cart> :
        <Cart></Cart>
      }

      <Search>
        <Input 
          placeholder="Busque por pratos ou ingredientes"  
          icon={CgSearch} 
          {...rest}
        />

        {
          user.role == USER_ROLE.ADMIN ? 
          <Button value={"Novo prato"} onClick={handleNewDish} />
          :
          <Button icon={PiNewspaperClipping} value="Pedidos (0)" />
        }

        
      </Search>

      <Logout onClick={handleSignOut}>
        <RxExit />
      </Logout> 

    </Container>
  );
};