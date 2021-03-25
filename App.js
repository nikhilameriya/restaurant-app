import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetailScreen from "./src/screens/RestaurantDetailScreen";

const navigator = createStackNavigator(
  {
    Search: HomeScreen,
    ResultsShow: RestaurantDetailScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Restaurant List",
    },
  }
);

export default createAppContainer(navigator);
