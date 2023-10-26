import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

const getToken = async () => {
  const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);

  if (status !== "granted") {
    return;
  }

  const token = await Notifications.getExpoPushTokenAsync();
  console.log(token);

  return token
}

export default class App extends React.Component{
  ComponentDidMount(){
    getToken();
  }
  render(){
    return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
