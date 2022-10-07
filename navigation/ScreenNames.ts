// Import Types
import { AppScreenNamesTypes, AuthScreenNamesTypes, } from "./NavigationProps";

// AuthNavigator
const AuthScreen: AuthScreenNamesTypes = {
    LoginScreen: "LoginScreen",
    RegisterScreen: "RegisterScreen",
    LoginEmailOTPScreen: "LoginEmailOTPScreen",
    RegisterEmailOTPScreen: "RegisterEmailOTPScreen",
}

// AppNavigator
const AppScreen: AppScreenNamesTypes = {
    HomeScreen: "HomeScreen",
}


export default {
    ...AuthScreen, ...AppScreen,
};