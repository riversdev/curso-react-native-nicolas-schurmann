import { StyleSheet, Text, TextInput, View } from 'react-native'

export const Input = ({ title, ...props }) => {
    return (
        <View style={styles.wrapper}>
            <Text>{title}</Text>
            <TextInput {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: 40,
    },
})