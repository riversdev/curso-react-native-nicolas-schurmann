import { SectionList, StyleSheet, Text, View } from 'react-native'

const sections = [
    {
        title: 'Grupo 1',
        data: [
            { key: '1', name: 'Rivers' },
            { key: '2', name: 'Chanchito feliz' },
            { key: '3', name: 'Chanchito triste' },
            { key: '4', name: 'Fluffykins' },
            { key: '5', name: 'Pelusa' },
        ]
    },
    {
        title: 'Grupo 2',
        data: [
            { key: '6', name: 'Rivers' },
            { key: '7', name: 'Chanchito feliz' },
            { key: '8', name: 'Chanchito triste' },
            { key: '9', name: 'Fluffykins' },
            { key: '10', name: 'Pelusa' },
        ]
    },
    {
        title: 'Grupo 3',
        data: [
            { key: '11', name: 'Rivers' },
            { key: '12', name: 'Chanchito feliz' },
            { key: '13', name: 'Chanchito triste' },
            { key: '14', name: 'Fluffykins' },
            { key: '15', name: 'Pelusa' },
        ]
    },
    {
        title: 'Grupo 4',
        data: [
            { key: '16', name: 'Rivers' },
            { key: '17', name: 'Chanchito feliz' },
            { key: '18', name: 'Chanchito triste' },
            { key: '19', name: 'Fluffykins' },
            { key: '20', name: 'Pelusa' },
        ]
    },
]

export default function App() {

    return (
        <View style={styles.container}>
            <SectionList
                sections={sections}
                renderSectionHeader={({ section }) => <Text style={styles.section}>{section.title}</Text>}
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
    section: {
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: '#eee',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    item: {
        padding: 10,
        fontSize: 22,
        height: 50,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
})