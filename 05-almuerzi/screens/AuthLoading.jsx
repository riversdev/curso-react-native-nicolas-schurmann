import { useEffect } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { serverlessApi } from '../api/serverlessApi'

export const AuthLoading = ({ navigation }) => {
    useEffect(() => {
        (async () => {
            const token = await AsyncStorage.getItem('token')

            if (!token) return navigation.navigate('OnBoarding')

            serverlessApi.interceptors.request.use(config => {
                config.headers.Authorization = token

                return config
            })

            navigation.navigate('Root')
        })()
    }, [])

    return (
        <View style={styles.container}>
            <ActivityIndicator size='large' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})