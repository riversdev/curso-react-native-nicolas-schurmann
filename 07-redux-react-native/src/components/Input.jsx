import { StyleSheet, TextInput } from 'react-native'

export const Input = ({ value, onChange, onSubmit }) => {
    return (
        <TextInput
            value={value}
            onChangeText={onChange}
            onSubmitEditing={onSubmit}
            style={styles.input}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#eee',
        height: 34,
        alignSelf: 'stretch',
        paddingHorizontal: 10,
    },
})