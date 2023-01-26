import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { AuthLoading, LoginScreen, MealsScreen, ModalScreen, RegisterScreen } from './screens'

const OnBoardingNavigator = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
}, {
  initialRouteName: 'Login',
})

const AppNavigator = createStackNavigator({
  Meals: {
    screen: MealsScreen
  },
}, {
  initialRouteName: 'Meals',
})

const RootStack = createStackNavigator({
  Main: AppNavigator,
  Modal: ModalScreen,
}, {
  mode: 'modal',
  headerMode: 'none',
})

const BaseStack = createSwitchNavigator({
  Auth: AuthLoading,
  OnBoarding: OnBoardingNavigator,
  Root: RootStack,
}, {
  initialRouteName: 'Auth',
})

export default createAppContainer(BaseStack)