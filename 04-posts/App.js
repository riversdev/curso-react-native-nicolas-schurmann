import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { DetailScreen, PostsScreen, UsersScreen } from './src/screens'

const AppNavigator = createStackNavigator({
  Users: {
    screen: UsersScreen,
  },
  Posts: {
    screen: PostsScreen,
  },
  Detail: {
    screen: DetailScreen,
  },
}, {
  initialRouteName: 'Users',
})

export default createAppContainer(AppNavigator)