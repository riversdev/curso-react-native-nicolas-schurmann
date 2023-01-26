// HOOKS
// useMemo

import { useMemo, useReducer } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const initialState = {
    counter: 0
}

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                counter: state.counter + 1
            }

        case 'deincrement':
            return {
                ...state,
                counter: state.counter - 1
            }

        default:
            return state
    }
}

const users = [
    { name: 'lala', age: 2 },
    { name: 'lele', age: 3 },
]

export default function App() {
    const [state, dispatch] = useReducer(counterReducer, initialState)

    const totalAge = useMemo(() => {
        let age = 0

        console.log('calculando...')

        users.forEach(x => {
            age = age + x.age
        })

        return age
    }, [users])

    console.log({ totalAge })

    return (
        <View style={styles.container}>
            <Button title='+1' onPress={() => dispatch({ type: 'increment' })} />
            <Text style={styles.text}>Counter: {state.counter}</Text>
            <Button title='-1' onPress={() => dispatch({ type: 'deincrement' })} />
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