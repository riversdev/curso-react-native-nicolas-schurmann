import { Provider } from 'react-redux'
import { store } from './src/store'
import { ReduxApp } from './src/ReduxApp'

export default () => {
  return (
    <Provider store={store}>
      <ReduxApp />
    </Provider>
  )
}