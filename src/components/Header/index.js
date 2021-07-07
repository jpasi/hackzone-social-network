import React from 'react';
import { ReactComponent as LogoImg } from "../../assets/img/Logo.svg";
import { LogoGroup, Logo, Title } from './styles';

const Header = () =>{
  return(
    <LogoGroup>
      <Logo>
        <LogoImg/>
      </Logo>
      <Title>HackZone</Title>
    </LogoGroup>
  )
}

export default Header;