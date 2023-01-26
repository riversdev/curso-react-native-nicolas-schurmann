import { ImageBackground, StyleSheet, Text, View } from 'react-native'

export default function App() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={{
                    uri: 'https://placekitten.com/200/200'
                }}
                style={styles.photo}
            >
                <Text style={styles.text}>HIHIHIH</Text>
            </ImageBackground>
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
    photo: {
        height: 200,
        width: 200,
    },
    text: {
        backgroundColor: '#fff',
        opacity: 0.7,
        textAlign: 'center',
    },
})