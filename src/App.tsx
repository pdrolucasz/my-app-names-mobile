import React, { useEffect, useState } from 'react';
import { Linking } from 'react-native';

import dynamicLinks from '@react-native-firebase/dynamic-links';
import messaging from '@react-native-firebase/messaging';

import {
  Container,
  Title,
  ButtonNotification,
  ButtonNotificationText,
} from './homeStyle';

export default function App(): JSX.Element {
  const [name, setName] = useState('');

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  async function SendNotification() {
    const test = await messaging().sendMessage({
      to: 'https://fcm.googleapis.con/fcm/send',
      from: 'test',
      sentTime: 1,
      notification: {
        title: 'Test',
        body: 'Hello, it is my test notification',
      },
    });
    console.log(test);
  }

  useEffect(() => {
    requestUserPermission();
    dynamicLinks()
      .getInitialLink()
      .then(link => {
        if (!link) {
          Linking.openURL('https://my-app-names-frontend.vercel.app/');
        }

        setName(link ? link.url.split('?name=')[1] : 'Default');
      });
  }, []);

  return (
    <Container>
      <Title>This page is for {name}</Title>
      <ButtonNotification onPress={SendNotification}>
        <ButtonNotificationText>Send Notification</ButtonNotificationText>
      </ButtonNotification>
    </Container>
  );
}
