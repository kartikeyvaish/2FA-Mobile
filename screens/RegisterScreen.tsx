// Packages Imports
import { useContext, useState } from "react";
import { View, StyleSheet, Keyboard } from "react-native";
import { Formik } from "formik";

// Local Imports
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import { AuthScreenProps } from "../navigation/NavigationProps";
import GlobalContext from "../types/ContextTypes";
import messages from "../config/messages";
import PasswordTextInput from "../components/PasswordInput";
import RegisterSchema from "../schemas/RegisterSchema";
import { SendRegisterOTP } from "../api/API";
import ScreenNames from "../navigation/ScreenNames";

// function component for RegisterScreen
function RegisterScreen({ navigation }: AuthScreenProps<"RegisterScreen">) {
  // contexts
  const { showSnack } = useContext(GlobalContext);

  // Local States
  const [Loading, SetLoading] = useState<boolean>(false);

  // function to handle on register button press
  const onRegisterPress = async (values: typeof RegisterSchema.InitialValues) => {
    try {
      Keyboard.dismiss();

      SetLoading(true);
      const apiResponse: any = await SendRegisterOTP(values);
      SetLoading(false);

      if (apiResponse.ok) {
        navigation.navigate(ScreenNames.RegisterEmailOTPScreen, {
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
      <AppText text="Sign up" style={styles.headingStyle} />

      <Formik
        initialValues={RegisterSchema.InitialValues}
        onSubmit={onRegisterPress}
        validationSchema={RegisterSchema.ValidationSchema}
      >
        {({ handleSubmit, errors, touched, handleChange }) => (
          <>
            <AppTextInput
              placeholder="Name"
              marginTop={20}
              error={touched["name"] ? errors.name : undefined}
              onChangeText={handleChange("name")}
            />

            <AppTextInput
              placeholder="Email"
              error={touched["email"] ? errors.email : undefined}
              onChangeText={handleChange("email")}
              keyboardType="email-address"
            />

            <PasswordTextInput
              placeholder="Password"
              error={touched["password"] ? errors.password : undefined}
              onChangeText={handleChange("password")}
            />

            <PasswordTextInput
              placeholder="Confirm Password"
              error={touched["confirm_password"] ? errors.confirm_password : undefined}
              onChangeText={handleChange("confirm_password")}
            />

            <AppButton
              title="Create Account"
              marginTop={5}
              onPress={handleSubmit}
              loading={Loading}
              disabled={Loading}
            />
          </>
        )}
      </Formik>

      <View style={styles.footer}>
        <AppText text="Already have an account? " style={{ textAlign: "center" }} marginTop={30} />
        <AppButton title="Log In" mode="text" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

// exports
export default RegisterScreen;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 40,
    backgroundColor: "white",
  },
  headingStyle: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 20,
    fontWeight: "600",
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
