import React from 'react';
import {Form, Input} from '@rocketseat/unform'

import {Container} from './styles'

export default function Profile() {
  return (
    <Container>
      <Form>
        <Input name="name" placeholder="Nome Completo"/>
        <Input name="email" placeholder="Seu endereço de e-mail"/>
        <hr/>
        <Input type="password" name="oldPassword" placeholder="Sua senha antiga"/>
        <Input type="password" name="password" placeholder="Sua nova senha"/>
        <Input type="password" name="confirmPassword" placeholder="Confirme sua nova senha"/>
        <button type="submit">Atualizar Perfil</button>
      </Form>
      <button type="button">Sair do GoBarber</button>
    </Container>
  )
}
