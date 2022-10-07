// Packages Imports
import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

// Local Imports
import AppNavigator from "../navigation/AppNavigator";
import AuthNavigator from "../navigation/AuthNavigator";
import GlobalContext from "../types/ContextTypes";

// function component for NavigationProvider
function NavigationProvider() {
  const { User } = useContext(GlobalContext);

  // render
  return <NavigationContainer>{User ? <AppNavigator /> : <AuthNavigator />}</NavigationContainer>;
}

// exports
export default NavigationProvider;
