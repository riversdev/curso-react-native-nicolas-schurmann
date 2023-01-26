import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { Input, List, Map, ModalR, Panel } from './components'

export const PointsApp = () => {
    const [points, setPoints] = useState([])
    const [pointName, setPointName] = useState('')
    const [tempPoint, setTempPoint] = useState({})
    const [visibleOfNew, setVisibleOfNew] = useState(false)
    const [visibleOfList, setVisibleOfList] = useState(false)
    const [showingPoints, setShowingPoints] = useState(true)

    const handleLongPress = ({ nativeEvent }) => {
        const { coordinate } = nativeEvent

        setTempPoint({ coordinate })
        setVisibleOfList(false)
        setVisibleOfNew(true)
    }

    const handleInputChange = value => setPointName(value)

    const handleSubmit = () => {
        const newPoint = { ...tempPoint, name: pointName }

        setPoints([...points, newPoint])
        setPointName('')
        setTempPoint({})
        setVisibleOfNew(false)
    }

    const handleShowList = () => {
        setVisibleOfNew(false)
        setVisibleOfList(true)
    }

    const toggleShowingPoints = () => setShowingPoints(!showingPoints)

    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <Map
                points={points}
                handleLongPress={handleLongPress}
                showingPoints={showingPoints}
            />
            <ModalR
                visible={visibleOfNew}
                onRequestClose={() => {
                    setPointName('')
                    setTempPoint({})
                    setVisibleOfNew(false)
                }}
            >
                <View style={styles.form}>
                    <Input
                        title='Nombre'
                        placeholder='Nombre del punto'
                        value={pointName}
                        onChangeText={handleInputChange}
                    />
                    <View style={styles.button}>
                        <Button
                            title='Agregar'
                            onPress={handleSubmit}
                        />
                    </View>
                </View>
            </ModalR>
            <ModalR
                visible={visibleOfList}
                onRequestClose={() => {
                    setVisibleOfList(false)
                }}
            >
                <List
                    points={points}
                    handleClose={() => setVisibleOfList(false)}
                />
            </ModalR>
            <Panel
                handleShowList={handleShowList}
                toggleShowingPoints={toggleShowingPoints}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    form: {
        padding: 20,
    },
    button: {
        marginTop: 20,
        alignItems: 'flex-end',
    }
})