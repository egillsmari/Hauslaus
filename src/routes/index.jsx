import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../views/Main';
import Games from '../views/Games';
import HauslausGame from "../views/HauslausGame";

const StackNavigator = createStackNavigator({
  Games: {
    screen: Games,
    navigationOptions: {
      headerShown: false,
    },
  },
  Main: {
    screen: Main,
    navigationOptions: {
      headerShown: false,
    },
  },
  HauslausGame: {
    screen: HauslausGame,
    navigationOptions: {
      headerShown: false,
    },
  },
});
export default createAppContainer(StackNavigator);
 