import { Dimensions, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

export const Map = ({ points = [], handleLongPress, showingPoints }) => {
    return (
        <MapView
            onLongPress={handleLongPress}
            style={styles.map}
        >
            {
                showingPoints && points.map(({ name, coordinate }) => (
                    <Marker
                        key={JSON.stringify(coordinate)}
                        title={name}
                        coordinate={coordinate}
                    />
                ))
            }
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: Dimensions.get('window').height - 150,
    },
})