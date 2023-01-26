import { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Button, StyleSheet, Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

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
DetailScreen.navigationOptions = ({ navigation }) => {
  const title = navigation.getParam('title', 'Cargando...')

  return {
    title: title,
    headerRight: headerControlsDetail({ onPress: () => navigation.getParam('increment')() }), // ejecucion de la funcion increment
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

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Detail: {
    screen: DetailScreen,
  }
}, {
  initialRouteName: 'Home',
  // defaultNavigationOptions: {
  //   tabBarOptions: {
  //     activeTintColor: '#e91e63',
  //     inactiveTintColor: 'grey',
  //     labelStyle: {
  //       fontSize: 16,
  //     },
  //     style: {
  //       backgroundColor: '#fec',
  //     }
  //   }
  // }
  // tambien puede recibir una funcion
  defaultNavigationOptions: ({ navigation }) => {
    return {
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName = ''

        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`
        } else {
          iconName = 'ios-options'
        }

        return <Ionicons name={iconName} size={20} tintColor={tintColor} />
      },
      tabBarOptions: {
        activeTintColor: navigation.state.routeName === 'Home' ? '#e91e63' : 'orange',
        inactiveTintColor: 'grey',
        labelStyle: {
          fontSize: 16,
        },
        style: {
          backgroundColor: '#fec',
        }
      }
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