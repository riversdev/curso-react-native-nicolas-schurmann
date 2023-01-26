import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { ListItem } from '../components/ListItem'

export const UsersScreen = ({ navigation }) => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        (async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()

            setUsers(data)
            setIsLoading(false)
        })()
    }, [])

    return (
        <View style={styles.container}>
            {
                isLoading
                    ? <Text>Cargando...</Text>
                    : <FlatList
                        data={users}
                        keyExtractor={x => String(x.id)}
                        renderItem={({ item }) => <ListItem title={item.name} onPress={() => navigation.navigate('Posts', { ...item })} />}
                        style={styles.list}
                    />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    list: {
        alignSelf: 'stretch'
    },
})