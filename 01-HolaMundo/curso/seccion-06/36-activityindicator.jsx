import { ActivityIndicator, StyleSheet, View } from 'react-native'

export default function App() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size='large' color='#0000ff' />
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