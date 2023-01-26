import { Modal, StyleSheet, View } from 'react-native'

export const ModalR = ({ children, visible = false, onRequestClose = () => { } }) => {
    return (
        <Modal
            animationType='slide'
            transparent
            visible={visible}
            onRequestClose={onRequestClose}
        >
            <View style={styles.center}>
                <View style={styles.modalView}>
                    {children}
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    modalView: {
        backgroundColor: '#fff',
        borderRadius: 4,
        // padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            height: 3,
            width: 0,
        },
        minWidth: '80%',
    }
})