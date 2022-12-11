import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, ActivityIndicator, PermissionsAndroid} from 'react-native';
import useBLE from './useBLE';
import {BleManager} from 'react-native-ble-plx';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  //const bleManager = new BleManager();
  const {requestPermissions} = useBLE();

  const openModal = async (permissionType) => {
    setIsLoading(true);
    console.log('pressed');

    const permission = await requestPermissions(permissionType);
    setIsLoading(false);

      alert('granted? ' + permission);
  };
  return (
    <View style={styles.container}>
      <Text>BT TEST</Text>
      <View style={styles.buttonsContainer}>
        <Button onPress={() => openModal(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)} title="Learn More" />
        <Button onPress={() => openModal(PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT)} title="Bluetooth connect permission" />
        {isLoading  && <ActivityIndicator />}
        <Button onPress={() => openModal(PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN)} title="Bluetooth scan permission" />
        <Button onPress={() => openModal(PermissionsAndroid.PERMISSIONS.BLUETOOTH_ADVERTISE)} title="Bluetooth advertise permission" />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
