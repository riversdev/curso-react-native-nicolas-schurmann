// instalar location de expo
// npx expo install expo-location

import { useEffect } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import * as Location from 'expo-location'
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
            <Text>HIHI</Text>
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
})