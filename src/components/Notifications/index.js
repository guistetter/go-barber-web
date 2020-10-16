import React,{useState, useEffect} from 'react'
import { MdNotifications} from 'react-icons/md'
import { parseISO, formatDistance} from 'date-fns'
import pt from 'date-fns/locale/pt'

import { Container, Badge ,NotificationList, Scroll, Notification} from './styles'

import api from '../../services/api'

export default function Notifications(){
  const [visible, setVisible] = useState(false)
  const [ notifications, setNotifications] = useState([])

  useEffect(() => {
    async function loadNotifications(){

      const response = await api.get('notifications')

      const data = response.data.map(notification => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          {addSuffix: true, locale: pt}
          )
      }))
      setNotifications(data)
    }
    loadNotifications()
  },[])

  function handleToggleVisible(){
    setVisible(!visible)
  }

return (
  <Container>
    <Badge onClick={handleToggleVisible} hasUnread>
      <MdNotifications size={20} color="#7159c1"/>
    </Badge>
    <NotificationList visible={visible}>
      <Scroll>
        {notifications.map(notification =>(
          <Notification unread>
          <p>Você possui um novo agendamento para amanhã</p>
          <time>há 2 dias</time>
          <button type="button">Marcar como lida</button>
        </Notification>
        ))}
      </Scroll>
    </NotificationList>
  </Container>
)
}
