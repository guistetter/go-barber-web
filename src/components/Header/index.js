import React from 'react'
import {Link} from 'react-router-dom'

import Notifications from '../Notifications'

import logo from '../../assets/logo2.svg'
import {Container, Content, Profile} from './styles'
export default function Header(){
  return(
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBaber"/>
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications/>
          <Profile>
            <div>
              <strong>GUI STETTER</strong>
              <Link to="/profile">Meu Perfil</Link>
              </div>
              <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="Foto do usuario"/>
          </Profile>
        </aside>
      </Content>
    </Container>

  )
}
