import { Button, Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'

export const List = ({ points, handleClose }) => {
    return (
        <>
            <View style={styles.list}>
                <FlatList
                    data={points}
                    renderItem={({ item }) => <View style={styles.item}><Text>{item.name}</Text></View>}
                    keyExtractor={item => item.coordinate.latitude}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title='Cerrar'
                    onPress={handleClose}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    list: {
        height: Dimensions.get('window').height - 250,
    },
    item: {
        padding: 15,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    button: {
        padding: 20,
    },
})