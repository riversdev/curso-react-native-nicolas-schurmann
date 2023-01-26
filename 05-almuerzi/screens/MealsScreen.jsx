import { FlatList, StyleSheet, Text, View } from 'react-native'
import { ListItem } from '../components'
import { useFetch } from '../hooks'

export const MealsScreen = ({ navigation }) => {
    const { data: meals, isLoading } = useFetch('https://serverless-rivers.vercel.app/api/meals')

    return (
        <View style={styles.container}>
            {isLoading && <Text>Cargando...</Text>}
            <FlatList
                data={meals}
                keyExtractor={x => x._id}
                style={styles.list}
                renderItem={({ item }) => <ListItem onPress={() => navigation.navigate('Modal', { _id: item._id })} {...item} />}
            />
        </View>
    )
}

MealsScreen.navigationOptions = ({
    title: 'Comidas disponibles'
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    list: {
        alignSelf: 'stretch',
    },
})