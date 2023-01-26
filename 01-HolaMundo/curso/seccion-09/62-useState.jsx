// HOOKS
// useState

import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
    const [cont, setCont] = useState(0)

    return (
        <View style={styles.container}>
            <Text
                onPress={() => setCont(cont + 1)}
                style={styles.text}
            >
                {cont}
            </Text>
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
    text: {
        fontSize: 24,
    },
})