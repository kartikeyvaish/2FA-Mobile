// Packages Imports
import { useContext, useState } from "react";
import { View, StyleSheet, Keyboard } from "react-native";
import { Formik } from "formik";

// Local Imports
import AppButton from "../components/AppButton";
import { AuthScreenProps } from "../navigation/NavigationProps";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import GlobalContext from "../types/ContextTypes";
import LoginSchema from "../schemas/LoginSchema";
import messages from "../config/messages";
import PasswordTextInput from "../components/PasswordInput";
import ScreenNames from "../navigation/ScreenNames";
import { SendLoginEmailOTP } from "../api/API";

// function component for LoginScreen
function LoginScreen({ navigation }: AuthScreenProps<"LoginScreen">) {
  // contexts
  const { showSnack } = useContext(GlobalContext);

  // Local States
  const [Loading, SetLoading] = useState<boolean>(false);

  // handle login button press
  const onLoginPress = async (values: typeof LoginSchema.InitialValues) => {
    try {
      Keyboard.dismiss();

      SetLoading(true);
      const apiResponse: any = await SendLoginEmailOTP(values);
      SetLoading(false);

      if (apiResponse.ok) {
        navigation.navigate(ScreenNames.LoginEmailOTPScreen, {
          otp_id: apiResponse.data.otp_id,
        });
      } else {
        showSnack(apiResponse.data.message, "red");
      }
    } catch (error) {
      SetLoading(false);
      showSnack(messages.serverError, "red");
    }
  };

  // render
  return (
    <View style={styles.container}>
      <AppText text="Login to Continue" style={styles.headingStyle} />

      <Formik
        initialValues={LoginSchema.InitialValues}
        onSubmit={onLoginPress}
        validationSchema={LoginSchema.ValidationSchema}
      >
        {({ handleSubmit, errors, touched, handleChange }) => (
          <>
            <AppTextInput
              placeholder="Email"
              marginTop={20}
              error={touched["email"] ? errors.email : undefined}
              onChangeText={handleChange("email")}
            />

            <PasswordTextInput
              placeholder="Password"
              error={touched["password"] ? errors.password : undefined}
              onChangeText={handleChange("password")}
            />

            <AppButton title="Log in" marginTop={5} onPress={handleSubmit} loading={Loading} disabled={Loading} />
          </>
        )}
      </Formik>

      <View style={styles.footer}>
        <AppText text="Don't have an account? " style={{ textAlign: "center" }} marginTop={30} />
        <AppButton title="Sign Up." mode="text" onPress={() => navigation.navigate("RegisterScreen")} />
      </View>
    </View>
  );
}

// exports
export default LoginScreen;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "white",
  },
  headingStyle: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 40,
    fontWeight: "600",
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
