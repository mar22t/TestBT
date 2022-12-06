import {PermissionAndroid, Platform} from 'react-native'

type PermissionCallback = (result: boolean) => void


interface BluetoothLowEnergyApi {
    requestPermissions(callback: PermissionCallback): Promise <void>;
}

export default function useBLE(): BluetoothLowEnergyApi {
    const requestPermissions = async (callback: PermissionCallback) => {
        if (Platform.OS === 'android') {
            const grantedStatus = await PermissionAndroid.request(
                PermissionAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                 {
                title: "Location Permission",
                message: "BLE needs location permission",
                buttonNegative: 'cancel',
                buttonPositive: 'ok'
            })
           callback(grantedStatus === PermissionAndroid.RESULTS.GRANTED)
           //callback(true)
        } else {
            callback(true)
        }
    }
    return { requestPermissions,}
}