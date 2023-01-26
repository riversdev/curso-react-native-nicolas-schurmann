import { Button, StyleSheet, View } from 'react-native'

export const Panel = ({ handleShowList, toggleShowingPoints }) => {
    return (
        <View style={styles.panel}>
            <Button title='Lista' onPress={handleShowList} />
            <Button title='Mostrar / Ocultar' onPress={toggleShowingPoints} />
        </View>
    )
}

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
})