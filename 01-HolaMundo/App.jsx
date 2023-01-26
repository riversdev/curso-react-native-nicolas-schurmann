// HOOKS
// useCallback

import { useCallback, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function App() {
    const [counter, setCounter] = useState(0)

    const increment = useCallback(() => setCounter(counter + 1), [counter])
    const decrement = useCallback(() => setCounter(counter - 1), [counter])

    return (
        <View style={styles.container}>
            <Button title='+1' onPress={increment} />
            <Text style={styles.text}>Counter: {counter}</Text>
            <Button title='-1' onPress={decrement} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row-reverse',
    },
    text: {
        fontSize: 24,
    },
})