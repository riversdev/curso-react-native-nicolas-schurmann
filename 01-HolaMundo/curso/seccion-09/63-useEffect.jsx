// HOOKS
// useEffect

import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
    const [cont, setCont] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])

    return (
        <View style={styles.container}>
            <Text
                onPress={() => setCont(cont + 1)}
                style={styles.text}
            >
                {isLoading ? 'Cargando...' : cont}
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