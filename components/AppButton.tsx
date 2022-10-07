// Packages Imports
import { View } from "react-native";
import { Button } from "react-native-paper";

// Local Imports
import { AppButtonProps } from "../types/ComponentTypes";

// function component for AppButton
function AppButton(props: AppButtonProps) {
  // Destructuring props
  const { title, margin, marginBottom, marginLeft, marginRight, marginTop, ...otherProps } = props;

  // container Styles
  const containerStyles = {
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
  };

  // render
  return (
    <View style={containerStyles}>
      <Button mode="contained" {...otherProps}>
        {title}
      </Button>
    </View>
  );
}

// exports
export default AppButton;
