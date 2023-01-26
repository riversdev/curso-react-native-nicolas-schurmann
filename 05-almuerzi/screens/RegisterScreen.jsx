import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useForm } from '../hooks'
import { serverlessApi } from '../api/serverlessApi'

export const RegisterScreen = ({ navigation }) => {
    const initialState = { email: '', password: '' }
    const onSubmit = async values => {
        const { data } = await serverlessApi.post('/auth/register', values)

        if (data === 'Usuario creado exitosamente !') {
            Alert.alert('Exito', data, [{ text: 'Ir al login', onPress: () => navigation.navigate('Login') }])
        } else {
            Alert.alert('Error', data)
        }
    }
    const { subscribe, inputs: { email, password }, handleSubmit } = useForm(initialState, onSubmit)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registrarme</Text>
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
                title='Registrarme'
                onPress={handleSubmit}
            />
            <Button
                title='Iniciar sesion'
                onPress={() => navigation.navigate('Login')}
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