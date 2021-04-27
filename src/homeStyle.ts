import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #121214;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  margin: 64px 0 24px;
`;

export const ButtonNotification = styled.TouchableOpacity`
  background: #7159c1;
  border-top-width: 1px;
  border-color: #232129;
  border-radius: 16px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ButtonNotificationText = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-left: 16px;
`;
