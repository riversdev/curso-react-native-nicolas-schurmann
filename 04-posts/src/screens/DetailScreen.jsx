import { StyleSheet, Text, View } from 'react-native'

export const DetailScreen = ({ navigation }) => {
    const title = navigation.getParam('title', '')
    const body = navigation.getParam('body', '')
    const userName = navigation.getParam('userName', '')

    return (
        <View style={styles.container}>
            <Text>User name: {userName}</Text>
            <Text>Title: {title}</Text>
            <Text>Body: {body}</Text>
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
})