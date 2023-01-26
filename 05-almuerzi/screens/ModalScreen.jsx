import { Button, StyleSheet, Text, View } from 'react-native'
import { useFetch } from '../hooks'
import { serverlessApi } from '../api/serverlessApi'

export const ModalScreen = ({ navigation }) => {
    const _id = navigation.getParam('_id')
    const { data: meal, isLoading } = useFetch(`https://serverless-rivers.vercel.app/api/meals/${_id}`)

    const createOrder = async () => {
        const { data: order, status } = await serverlessApi.post('/orders', { meal_id: _id })

        if (status !== 201) {
            return alert('La orden no pudo ser generada !')
        }

        alert('Orden generada exitosamente !')
        navigation.navigate('Meals')
    }

    if (isLoading) return (<View style={styles.container}><Text>Cargando...</Text></View>)

    return (
        <View style={styles.container}>
            <Text>{meal._id}</Text>
            <Text>{meal.name}</Text>
            <Text>{meal.desc}</Text>
            <Button
                title='Aceptar'
                onPress={createOrder}
            />
            <Button
                title='Cancelar'
                onPress={() => navigation.navigate('Meals')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})