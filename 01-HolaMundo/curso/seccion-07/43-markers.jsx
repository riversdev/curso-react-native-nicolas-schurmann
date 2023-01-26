// instalar maps de expo
// npx expo install react-native-maps

import { useEffect, useState } from 'react'
import { Alert, Dimensions, StyleSheet, Text, View } from 'react-native'
import * as Location from 'expo-location'
import MapView, { Marker } from 'react-native-maps'
import Constants from 'expo-constants'

export default function App() {
    const [location, setLocation] = useState({})

    useEffect(() => {
        const searchLocation = async () => {
            try {
                const { status } = await Location.requestBackgroundPermissionsAsync()

                if (status !== 'granted') return Alert.alert('Error', 'Sin permisos necesarios para acceder a la ubicacion !')

                const location = await Location.getCurrentPositionAsync({})

                setLocation(location)
            } catch (error) {
                console.error(error)
            }
        }

        searchLocation()
    }, [])

    return (
        <View style={styles.container}>
            <MapView style={styles.map}>
                {
                    location.coords &&
                    <Marker
                        title='Titulo'
                        description='Descripcion'
                        coordinate={location.coords}
                    />
                }
            </MapView>
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