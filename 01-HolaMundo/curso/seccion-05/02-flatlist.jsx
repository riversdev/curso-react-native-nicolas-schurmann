import { FlatList, StyleSheet, Text, View } from 'react-native'

export default function App() {

    return (
        <View style={styles.container}>
            <FlatList
                data={[
                    { key: '1', name: 'Rivers' },
                    { key: '2', name: 'Chanchito feliz' },
                    { key: '3', name: 'Chanchito triste' },
                    { key: '4', name: 'Fluffykins' },
                    { key: '5', name: 'Pelusa' },
                    { key: '6', name: 'Rivers' },
                    { key: '7', name: 'Chanchito feliz' },
                    { key: '8', name: 'Chanchito triste' },
                    { key: '9', name: 'Fluffykins' },
                    { key: '10', name: 'Pelusa' },
                    { key: '11', name: 'Rivers' },
                    { key: '12', name: 'Chanchito feliz' },
                    { key: '13', name: 'Chanchito triste' },
                    { key: '14', name: 'Fluffykins' },
                    { key: '15', name: 'Pelusa' },
                    { key: '16', name: 'Rivers' },
                    { key: '17', name: 'Chanchito feliz' },
                    { key: '18', name: 'Chanchito triste' },
                    { key: '19', name: 'Fluffykins' },
                    { key: '20', name: 'Pelusa' },
                ]}
                renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
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
    item: {
        padding: 10,
        fontSize: 22,
        height: 50,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
})