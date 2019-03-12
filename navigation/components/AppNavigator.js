import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Tabs from './Tabs'

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Tabs: { screen: Tabs },
});
const App = createAppContainer(AppNavigator)

export default App;