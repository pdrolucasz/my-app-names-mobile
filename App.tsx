import React, { useEffect } from 'react';
import { View } from 'react-native';
import dynamicLinks from '@react-native-firebase/dynamic-links';

function Listener() {
  useEffect(() => {
    dynamicLinks()
      .getInitialLink()
      .then(link => {
        console.log(link);
        console.log(link?.url);
      });
  }, []);

  return <View />;
}

export default function App(): JSX.Element {
  return (
    <View>
      <Listener />
    </View>
  );
}
