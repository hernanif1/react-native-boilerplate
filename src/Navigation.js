import { createStackNavigator } from 'react-navigation';

import Home from './pages/Home/Home';
import Details from './pages/Details/Details';

const screens = {
  LaunchScreen: Home,
  NextPage: Details,
};

const navigationOptions = {
  initialRouteName: 'LaunchScreen',
};

const Navigation = createStackNavigator(screens, navigationOptions);
export default Navigation;
