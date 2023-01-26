import { useState } from 'react'
import { Button, Modal, StyleSheet, Text, View } from 'react-native'

export default function App() {
    const [modal, setModal] = useState(false)

    return (
        <View style={styles.container}>
            <Modal
                animationType='slide'
                transparent
                visible={modal}
                onRequestClose={() => { }}
            >
                <View style={styles.center}>
                    <View style={styles.content}>
                        <Text>Soy un modal</Text>
                        <Button
                            title='Cerrar'
                            onPress={() => setModal(!modal)}
                        />
                    </View>
                </View>
            </Modal>
            <Button
                title='Abrir'
                onPress={() => setModal(!modal)}
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
    center: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor:'rgba(0,0,0,0.3)',
    },
    content: {
        flex: 1,
        // width: '100%', // asi o alignItems: 'stretch', en el padre
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
        padding: 10,
        margin: 25,
    },
})