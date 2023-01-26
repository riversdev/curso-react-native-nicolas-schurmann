import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { ListItem } from '../components/ListItem'

export const PostsScreen = ({ navigation }) => {
    const userId = navigation.getParam('id', 0)
    const userName = navigation.getParam('name', '')
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        (async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()

            setPosts(data.filter(post => post.userId === userId))
            setIsLoading(false)
        })()
    }, [])

    return (
        <View style={styles.container}>
            {
                isLoading
                    ? <Text>Cargando...</Text>
                    : <FlatList
                        data={posts}
                        keyExtractor={x => String(x.id)}
                        renderItem={({ item }) => <ListItem title={item.title} onPress={() => navigation.navigate('Detail', { ...item, userName })} />}
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