import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default function App() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getUsers = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()

            setUsers(data)
            setIsLoading(false)
        }

        getUsers()
    }, [])

    if (isLoading) return <View style={styles.center}><Text>Cargando...</Text></View>

    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
                keyExtractor={item => String(item.id)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingTop: 22,
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        padding: 10,
        fontSize: 22,
        height: 50,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
})