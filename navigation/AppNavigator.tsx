// Packages Imports
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { useTheme } from "@react-navigation/native";

// Types/components/Navigators imports
import { AppStackParamsList } from "./NavigationProps";

// Screen imports
import HomeScreen from "./../screens/HomeScreen";

// Create a Stack Navigator
const Stack = createNativeStackNavigator<AppStackParamsList>();

// Function for AppNavigator
function AppNavigator() {
  // get the theme
  const { colors } = useTheme();

  // screen options for the stack navigator
  const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
    headerStyle: {
      backgroundColor: colors.background,
    },
  };

  // Render
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {/* App Screens */}
      <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
    </Stack.Navigator>
  );
}

// Exporting AppNavigator
export default AppNavigator;
