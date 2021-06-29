import React from 'react';
import { Link } from 'react-router-dom';

import { Title1, Title2, Button } from '../../components';

const SignIn =() =>{
  return(<>
    <Title1>A rede dos programadores</Title1>
    <Title2>Venha compartilhar conhecimento, código e café</Title2>
    <Link to="/dashboard">
    <Button>Entrar</Button>

    </Link>
    <Button>Criar Conta</Button>

  </>)
}

export default SignIn;