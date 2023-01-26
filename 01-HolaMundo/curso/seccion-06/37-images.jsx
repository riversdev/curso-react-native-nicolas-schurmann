import { Image, StyleSheet, View } from 'react-native'

export default function App() {
    return (
        <View style={styles.container}>
            {/* <Image
                source={require('./assets/splash.png')}
                style={styles.photo}
            /> */}
            <Image
                source={{
                    uri: 'https://placekitten.com/200/200'
                }}
                style={styles.photo}
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
    photo: {
        height: 200,
        width: 200,
    },
})