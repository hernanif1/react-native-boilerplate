import { createStackNavigator } from 'react-navigation';

import Home from './pages/Home/Home';
import Details from './pages/Details/Details';

const screens = {
  LaunchScreen: Home,
  NextPage: Details,
};

const Navigation = createStackNavigator(
  { ...screens },
  {
    headerMode: 'none',
    initialRouteName: 'LaunchScreen',
  }
);
export default Navigation;
