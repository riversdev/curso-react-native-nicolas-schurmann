import { Alert, Button, StyleSheet, View } from 'react-native'

export default function App() {
    const crearDialogo = () => Alert.alert(
        'Titulo',
        'Subtitulo con un texto de descripcion mas largo, texto texto texto...',
        [
            { text: 'Cancel', style: 'cancel', onPress: () => { } },
            { text: 'Aceptar', onPress: () => console.log('Alerta aceptada') },
        ],
        { cancelable: false },
    )

    return (
        <View style={styles.container}>
            <Button
                title='Abrir dialogo'
                onPress={crearDialogo}
            />
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