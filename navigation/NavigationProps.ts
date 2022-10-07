// Utils/Types imports 
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Auth Navigator Screen Params
export type AuthStackParamsList = {
    // Auth Stack Screens 
    LoginScreen: undefined;
    RegisterScreen: undefined;
    LoginEmailOTPScreen: {
        otp_id: string;
    };
    RegisterEmailOTPScreen: {
        otp_id: string;
    };
};

// App Navigator Screen Params
export type AppStackParamsList = {
    // App Stack Screens
    HomeScreen: undefined;
};

// Props for Auth Navigator's Screens
export type AuthScreenProps<Screen extends keyof AuthStackParamsList> = NativeStackScreenProps<
    AuthStackParamsList,
    Screen
>;

// Props for App Navigator's Screens
export type AppScreenProps<Screen extends keyof AppStackParamsList> = NativeStackScreenProps<
    AppStackParamsList,
    Screen
>;

// Screen Names types for AuthNavigator
export type AuthScreenNamesTypes = {
    [key in keyof AuthStackParamsList]: any;
};

// Screen Names types for AppNavigator
export type AppScreenNamesTypes = {
    [key in keyof AppStackParamsList]: any;
};