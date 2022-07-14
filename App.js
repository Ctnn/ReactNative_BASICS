import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import ButtonScreen from "./src/screens/ButtonScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import ChangebleScreen from "./src/screens/ChangebleScreen";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    Buttons:ButtonScreen,
    Image:ImageScreen,
    Counter:CounterScreen,
    Color:ColorScreen,
    Changeble:ChangebleScreen,
  },
  {
    initialRouteName: "Buttons",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
