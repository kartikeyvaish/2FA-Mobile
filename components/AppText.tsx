// Packages Imports
import { View } from "react-native";
import { Text } from "react-native-paper";

// Local Imports
import { AppTextProps } from "../types/ComponentTypes";

// function component for AppText
function AppText(props: AppTextProps) {
  // Destructuring props
  const { text, style, ...margins } = props;

  // render
  return (
    <View style={{ ...margins }}>
      <Text style={style}>{text}</Text>
    </View>
  );
}

// exports
export default AppText;
