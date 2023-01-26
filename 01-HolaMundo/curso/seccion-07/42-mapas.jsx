// instalar maps de expo
// npx expo install react-native-maps

import { useEffect } from 'react'
import { Alert, Dimensions, StyleSheet, Text, View } from 'react-native'
import * as Location from 'expo-location'
import MapView from 'react-native-maps'
import Constants from 'expo-constants'

export default function App() {
    useEffect(() => {
        const searchLocation = async () => {
            try {
                const { status } = await Location.requestBackgroundPermissionsAsync()

                if (status !== 'granted') return Alert.alert('Error', 'Sin permisos necesarios para acceder a la ubicacion !')

                const location = await Location.getCurrentPositionAsync({})

                console.log({ location })
            } catch (error) {
                console.error(error)
            }
        }

        searchLocation()
    }, [])

    return (
        <View style={styles.container}>
            <MapView style={styles.map} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 22,
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})