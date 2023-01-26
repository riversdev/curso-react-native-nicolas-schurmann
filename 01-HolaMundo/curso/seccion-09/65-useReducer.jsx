// HOOKS
// useReducer

import { useReducer } from 'react'
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

export default function App() {
    const [state, dispatch] = useReducer(counterReducer, initialState)

    console.log({ state })

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