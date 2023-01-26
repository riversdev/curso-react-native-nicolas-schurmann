import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { serverlessApi } from '../api/serverlessApi'
import { useForm } from '../hooks/useForm'

export const LoginScreen = ({ navigation }) => {
    const initialState = { email: '', password: '' }
    const onSubmit = async values => {
        const { data } = await serverlessApi.post('/auth/login', values)

        if (data.token) {
            AsyncStorage.setItem('token', data.token)

            navigation.navigate('Meals')
        } else {
            Alert.alert('Error', data)
        }
    }
    const { subscribe, inputs: { email, password }, handleSubmit } = useForm(initialState, onSubmit)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar sesion</Text>
            <TextInput
                placeholder='Email'
                autoCapitalize='none'
                value={email}
                onChangeText={subscribe('email')}
                style={styles.input}
            />
            <TextInput
                placeholder='Password'
                autoCapitalize='none'
                value={password}
                onChangeText={subscribe('password')}
                secureTextEntry
                style={styles.input}
            />
            <Button
                title='Iniciar sesion'
                onPress={handleSubmit}
            />
            <Button
                title='Registrarme'
                onPress={() => navigation.navigate('Register')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    input: {
        height: 40,
        borderColor: '#eee',
        borderWidth: 1,
        alignSelf: 'stretch',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
})