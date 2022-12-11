import {PermissionsAndroid, Platform} from 'react-native'

export default function useBLE() {
    const requestPermissions = async (permissionType) => {
        if (Platform.OS === 'android') {
            const grantedStatus = await PermissionsAndroid.request(permissionType)
           return grantedStatus === PermissionsAndroid.RESULTS.GRANTED;
        } else {
            return 'lalalala';
        }
    }
    return { requestPermissions }
}