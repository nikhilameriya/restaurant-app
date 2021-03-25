import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetailScreen from "./src/screens/RestaurantDetailScreen";


//We can do context api setup here for using our sqlite db setup
// A basic db setup can be done before splash screen load, for offline app we perform sqlite db queries in async calls
// SplashScreen.preventAutoHideAsync();

// const isLoadingComplete = useCachedResources();
// const isDBLoadingComplete = useDatabase();

// if (isLoadingComplete && isDBLoadingComplete) {
//   SplashScreen.hideAsync();

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
