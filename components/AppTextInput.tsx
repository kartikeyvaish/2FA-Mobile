// Packages Imports
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { TextInput, HelperText } from "react-native-paper";

// Local Imports
import { AppTextInputProps } from "../types/ComponentTypes";

// function component for AppTextInput
function AppTextInput(props: AppTextInputProps) {
  // Destructuring props
  const { error, margin, marginBottom, marginLeft, marginRight, marginTop, ...otherProps } = props;

  // ViewStyles
  const containerStyles: StyleProp<ViewStyle> = [
    styles.container,
    {
      margin,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
    },
  ];

  // render
  return (
    <View style={containerStyles}>
      <TextInput mode="outlined" {...otherProps} />

      <HelperText type="error" visible={error ? true : false}>
        {error}
      </HelperText>
    </View>
  );
}

// exports
export default AppTextInput;

// styles
const styles = StyleSheet.create({
  container: {},
});
