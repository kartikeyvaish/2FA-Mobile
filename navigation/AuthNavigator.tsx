// Packages Imports
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { useTheme } from "@react-navigation/native";

// Types/components/Navigators imports
import { AuthStackParamsList } from "./NavigationProps";

// Screen imports
import LoginScreen from "../screens/LoginScreen";
import LoginEmailOTPScreen from "./../screens/LoginEmailOTPScreen";
import RegisterScreen from "../screens/RegisterScreen";
import RegisterEmailOTPScreen from "../screens/RegisterEmailOTPScreen";

// Create a Stack Navigator
const Stack = createNativeStackNavigator<AuthStackParamsList>();

// Function for AuthNavigator
function AuthNavigator() {
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
      <Stack.Screen name={"LoginScreen"} component={LoginScreen} />
      <Stack.Screen name={"LoginEmailOTPScreen"} component={LoginEmailOTPScreen} />
      <Stack.Screen name={"RegisterScreen"} component={RegisterScreen} />
      <Stack.Screen name={"RegisterEmailOTPScreen"} component={RegisterEmailOTPScreen} />
    </Stack.Navigator>
  );
}

// Exporting AuthNavigator
export default AuthNavigator;
