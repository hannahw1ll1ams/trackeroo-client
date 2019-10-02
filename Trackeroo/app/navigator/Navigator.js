import HomeScreen from '../screens/Home';
import RegisterScreen from '../screens/Register';
import PasswordResetScreen from '../screens/PasswordReset';
import LoginScreen from '../screens/Login'



import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';



const HomeStack = createStackNavigator({ LoginScreen, RegisterScreen, HomeScreen, PasswordResetScreen })


const AppContainer = createAppContainer(HomeStack);


export default AppContainer;