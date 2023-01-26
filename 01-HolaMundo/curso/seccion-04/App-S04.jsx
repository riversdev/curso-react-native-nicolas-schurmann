import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Texto = ({ style }) => {
  const [texto, setTexto] = useState('Hola Mundo')

  const actualizaTexto = () => setTexto('Chao Mundo')

  return (
    <Text onPress={actualizaTexto} style={[styles.text, style]}>{texto}!</Text>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Texto style={styles.red} />
      <Texto style={styles.green} />
      <Texto style={styles.blue} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 24,
    color: 'white',
    height: 100,
    // width: 100,
  },
  red: {
    // flex: 1,
    backgroundColor: 'red'
  },
  green: {
    // flex: 2,
    backgroundColor: 'green'
  },
  blue: {
    // flex: 3,
    backgroundColor: 'blue'
  },
})