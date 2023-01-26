// HOOKS
// useCallback

import { memo, useCallback, useEffect, useState } from 'react'
import { Button, StyleSheet, Text as TextRN, View } from 'react-native'
import * as Font from 'expo-font'

const Text = ({ style, ...props }) => {
    return (
        <TextRN {...props} style={[{ fontFamily: 'roboto-bold' }, style]} />
    )
}

const Title = memo(({ title }) => {
    console.log('Renderizando...')

    return (
        <Text style={styles.subtitle}>{title}</Text>
    )
})

export default function App() {
    const [counter, setCounter] = useState(0)
    const [fontLoaded, setFontLoaded] = useState(false)

    useEffect(() => {
        (async () => {
            await Font.loadAsync({
                'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
                'roboto-thin': require('./assets/fonts/Roboto-Thin.ttf'),
            })

            setFontLoaded(true)
        })()
    }, [])

    const increment = useCallback(() => setCounter(counter + 1), [counter])
    const decrement = useCallback(() => setCounter(counter - 1), [counter])

    if (!fontLoaded) return null

    return (
        <View style={styles.container}>
            <Button title='+1' onPress={increment} />
            <Text style={styles.text}>Counter: {counter}</Text>
            <Button title='-1' onPress={decrement} />
            <Title title='Hello im title' />
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
    subtitle: {
        fontFamily: 'roboto-thin',
    },
})