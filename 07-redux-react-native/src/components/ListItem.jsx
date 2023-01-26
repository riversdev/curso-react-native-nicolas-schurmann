import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export const ListItem = ({ onPress, id, desc, completed }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={[styles.text, completed && styles.strike]}>{desc}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        height: 60,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    text: {
        fontSize: 18,
    },
    strike: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    },
})