import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import VegRecipes from "./src/screens/VegRecipes";
import SurfTurfRecipes from "./src/screens/SurfTurfRecipes";
import SeafoodRecipes from "./src/screens/SeafoodRecipes";
import MeatPoultryRecipes from "./src/screens/MeatPoultryRecipes";

const navigator = createStackNavigator(
  {
    //routes
    Home: HomeScreen,
    Vegetarian: VegRecipes,
    SurfTurf: SurfTurfRecipes,
    Seafood: SeafoodRecipes,
    MeatPoultry: MeatPoultryRecipes
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Breath of the Wild: Cookbook"
    },
  });

  export default createAppContainer(navigator);
