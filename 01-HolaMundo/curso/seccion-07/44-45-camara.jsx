// instalar camara de expo
// npx expo install expo-camera

import { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { Camera, CameraType } from 'expo-camera'
import Constants from 'expo-constants'

export default function App() {
    const [permisos, setPermisos] = useState(null)
    const [type, setType] = useState(CameraType.back)

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync()

            setPermisos(status === 'granted')
        })()
    }, [])

    if (permisos === null) return <View><Text>Esperando permisos...</Text></View>
    if (permisos === false) return <View><Text>Sin acceso a la camara</Text></View>

    return (
        <View style={styles.container}>
            <Camera
                type={type}
                style={styles.camera}
            >
                <Button
                    title='Voltear'
                    onPress={() => setType(type === CameraType.back ? CameraType.front : CameraType.back)}
                />
            </Camera>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingTop: 22,
    },
    camera: {
        flex: 1,
    },
})