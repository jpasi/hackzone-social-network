import React from 'react';
import { CardBoard } from './styles';
import { Button } from '../../components';
import { Link } from 'react-router-dom';

const Card = () =>{
  return(
    <CardBoard>
      <Link to="/dashboard">
        <Button large>Entrar</Button>
      </Link>
        <Button>Criar Conta</Button>
    </CardBoard>
  )
}

export default Card;