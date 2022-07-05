import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import ButtonScreen from "./src/screens/ButtonScreen";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    Buttons:ButtonScreen,
  },
  {
    initialRouteName: "Buttons",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
