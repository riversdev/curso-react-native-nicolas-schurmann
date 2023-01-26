import { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// navigation.push('Detail') // agrega Detail a la pila y lo muestra
// navigation.navigate('Detail',{}) // agrega Detail a la pila, lo muestra y le envia datos

const Logo = () => <Text>Lalalalala</Text>
const headerControls = () => <Button title='Alert' color='#222' onPress={() => alert('lalala')} />
const headerControlsDetail = ({ onPress }) => {
  return (
    <Button
      title='Mas 1'
      color='#555'
      onPress={onPress}
    />
  )
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Pantalla de inicio</Text>
      <Button
        title='Ir a detail'
        onPress={() => navigation.navigate('Detail', { message: 'lala', id: 2 })} // podria pasar el title aqui
      />
    </View>
  )
}
HomeScreen.navigationOptions = {
  title: 'Home screen',
  headerStyle: {
    backgroundColor: '#f00', // esto sobreescribe los estilos globales en el AppNavigator
  },
  // headerTintColor: '#222',
  // headerTitleStyle: {
  //   fontWeight: '900'
  // }
  headerTitle: Logo, // asi se puede poner un componente en el header
  // headerRight: headerControls, // asi se puede poner un componente en el header a la derecha :v
}

const DetailScreen = ({ navigation }) => {
  const message = navigation.getParam('message', 'Valor por defecto')
  const [counter, setCounter] = useState(0)
  const increment = () => setCounter(counter + 1)

  useEffect(() => {
    navigation.setParams({ increment })
  }, [counter])

  return (
    <View style={styles.container}>
      <Text>Soy la pantalla de detalle: {message}</Text>
      <Text>Counter: {counter}</Text>
      <Button
        title='Ir a home'
        onPress={() => navigation.goBack()}
      />
      <Button
        title='Set title'
        onPress={() => navigation.setParams({ title: 'Custom title' })}
      />
      <Button
        title='Show modal'
        onPress={() => navigation.navigate('MyModal')}
      />
    </View>
  )
}
DetailScreen.navigationOptions = ({ navigation, navigationOptions }) => {
  const title = navigation.getParam('title', 'Cargando...')

  return {
    title: title,
    headerRight: headerControlsDetail({ onPress: () => navigation.getParam('increment')() }), // ejecucion de la funcion increment
    // headerTintColor: '#5e5',
    headerStyle: {
      backgroundColor: navigationOptions.headerStyle.backgroundColor
    }
  }
}

const MyModal = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>My modal component</Text>
      <Button
        title='Go back'
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Detail: {
    screen: DetailScreen,
  }
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#fec',
    },
    headerTintColor: '#555',
    headerTitleStyle: {
      fontWeight: '900'
    }
  }
})

const RootStack = createStackNavigator({
  Main: AppNavigator,
  MyModal: MyModal,
}, {
  mode: 'modal',
  headerMode: 'none',
})

export default createAppContainer(RootStack)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})