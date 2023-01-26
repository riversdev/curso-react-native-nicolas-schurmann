import { useState } from 'react'
import { Button, Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'

// const { width, height } = Dimensions.get('window') // dimensiones de la ventana

export default function App() {
    const [text, setText] = useState('')
    const [submit, setSubmit] = useState('')

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text>Texto: {submit}</Text>
                <TextInput
                    placeholder='Escribe aqui'
                    value={text}
                    onChangeText={value => setText(value)}
                    style={styles.input}
                />
                <Button
                    title='Aceptar'
                    onPress={() => {
                        setSubmit(text)
                        alert('Texto enviado con exito !')
                    }}
                />
            </ScrollView>
            {/* <TouchableHighlight
                underlayColor='#999'
                activeOpacity={0.2}
                onPress={() => {
                    setSubmit(text)
                    alert('Texto enviado con exito !')
                }}
            >
                <Text>Aceptar</Text>
            </TouchableHighlight> */}
            {/* TouchableNativeFeedback SOLO FUNCIONA EN ANDROID */}
            {/* <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('#00f', true)}
                onPress={() => {
                    setSubmit(text)
                    alert('Texto enviado con exito !')
                }}
            >
                <View style={styles.view}><Text>Aceptar</Text></View>
            </TouchableNativeFeedback> */}
            {/* <TouchableOpacity
                style={styles.touchableOpacity}
                onPress={() => {
                    setSubmit(text)
                    alert('Texto enviado con exito !')
                }}
            >
                <View style={styles.view}><Text>Aceptar</Text></View>
            </TouchableOpacity> */}
            {/* <TouchableWithoutFeedback
                style={styles.touchableOpacity}
                onPress={() => {
                    setSubmit(text)
                    alert('Texto enviado con exito !')
                }}
            >
                <View style={styles.view}><Text>Aceptar</Text></View>
            </TouchableWithoutFeedback> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        width: '100%', // todo el ancho
        // width: Dimensions.get('window').width, // todo el ancho
        // backgroundColor: '#eee',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    view: {
        height: 40,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchableOpacity: {
        backgroundColor: '#eee'
    },
    scrollView: {
        width: Dimensions.get('window').width,
    },
})