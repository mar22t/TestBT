import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import useBLE from './useBLE';
import {BleManager} from 'react-native-ble-plx';

const App = () => {
  //const bleManager = new BleManager();
  const {requestPermissions} = useBLE();

  const openModal = async () => {
    console.log('pressed');

    requestPermissions(isGranted => {
      alert('granted? ' + isGranted);
    });
  };
  return (
    <View style={styles.container}>
      <Text>BT TEST</Text>
      <Button onPress={openModal} title="Learn More" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
