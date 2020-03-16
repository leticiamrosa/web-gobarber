import React, { useState, useEffect } from 'react';
import { parseISO, formatDistance } from 'date-fns';
import { get } from 'lodash';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';
import { colors } from '~/styles/styles';

import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  NotificationList,
  Notification,
  Scroll,
} from './index.styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function loadNotification() {
      const response = await api.get('notifications');

      const data = response.data.map(notification => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          {
            addSuffix: true,
            locale: pt,
          }
        ),
      }));

      setNotifications(data);
    }

    loadNotification();
  }, []);

  async function handleMarkAsRead(id) {
    await api.put(`notifications/${id}`);

    setNotifications(
      notifications.map(notification =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    );
  }

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread>
        <MdNotifications color={colors.primary.main} size={20} />
      </Badge>

      <Scroll>
        <NotificationList visible={visible}>
          {notifications.map(notification => {
            return (
              <Notification key={notification._id} unread={!notification.read}>
                <p>{notification.content}</p>
                <time>{notification.timeDistance}</time>
                {!notification.read && (
                  <button
                    type="button"
                    onClick={() => handleMarkAsRead(notification._id)}
                  >
                    Marcar como lida
                  </button>
                )}
              </Notification>
            );
          })}
        </NotificationList>
      </Scroll>
    </Container>
  );
}
