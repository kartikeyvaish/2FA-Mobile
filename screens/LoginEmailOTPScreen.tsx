// Packages Imports
import { useContext, useState } from "react";
import { View, StyleSheet, Keyboard, StatusBar } from "react-native";
import { Formik } from "formik";

// Local Imports
import AppButton from "../components/AppButton";
import { AuthScreenProps } from "../navigation/NavigationProps";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import GlobalContext from "../types/ContextTypes";
import messages from "../config/messages";
import OTPSchema from "../schemas/OTPSchema";
import { VerifyLoginOTP } from "../api/API";

// function component for LoginEmailOTPScreen
function LoginEmailOTPScreen({ route }: AuthScreenProps<"LoginEmailOTPScreen">) {
  // contexts
  const { showSnack, SetUser } = useContext(GlobalContext);

  // Local States
  const [Loading, SetLoading] = useState<boolean>(false);

  // function to verify login OTP
  const onSubmitOTPPress = async (values: typeof OTPSchema.InitialValues) => {
    try {
      Keyboard.dismiss();

      SetLoading(true);
      const apiResponse: any = await VerifyLoginOTP({
        otp_id: route.params.otp_id,
        otp: values.otp,
      });
      SetLoading(false);

      if (apiResponse.ok) {
        showSnack(messages.loggedIn, "green");
        SetUser(apiResponse.data);
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
      <AppText text="Enter 2FA OTP sent to your mail." style={styles.headingStyle} />

      <Formik
        initialValues={OTPSchema.InitialValues}
        onSubmit={onSubmitOTPPress}
        validationSchema={OTPSchema.ValidationSchema}
      >
        {({ handleSubmit, errors, touched, handleChange }) => (
          <>
            <AppTextInput
              placeholder="OTP"
              keyboardType="number-pad"
              marginTop={20}
              onChangeText={handleChange("otp")}
              error={touched["otp"] ? errors.otp : undefined}
              maxLength={6}
            />

            <AppButton title="Verify OTP" onPress={handleSubmit} loading={Loading} disabled={Loading} marginTop={10} />
          </>
        )}
      </Formik>
    </View>
  );
}

// exports
export default LoginEmailOTPScreen;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "white",
    paddingTop: StatusBar.currentHeight,
  },
  headingStyle: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 20,
    fontWeight: "600",
  },
});
