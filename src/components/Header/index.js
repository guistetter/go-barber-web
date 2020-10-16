import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

import Notifications from '../Notifications'

import logo from '../../assets/logo2.svg'
import {Container, Content, Profile} from './styles'
export default function Header(){
  const profile = useSelector(state => state.user.profile)
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
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
              </div>
              <img src={profile.avatar.url || 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'} alt="Foto do usuario"/>
          </Profile>
        </aside>
      </Content>
    </Container>

  )
}
