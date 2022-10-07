// Packages Imports
import { useContext } from "react";
import { View, StyleSheet } from "react-native";

// Local Imports
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import GlobalContext from "../types/ContextTypes";

// function component for HomeScreen
function HomeScreen() {
  // Contexts
  const { User, SetUser } = useContext(GlobalContext);

  // if user does not exist, show null
  if (!User) return null;

  // render
  return (
    <View style={styles.container}>
      <AppText text="Logged In " marginBottom={20} />

      <AppText text={`Name : ${User.name}`} />
      <AppText text={`Email : ${User.email}`} />

      <AppButton title="Logout" onPress={() => SetUser(null)} marginTop={20} />
    </View>
  );
}

// exports
export default HomeScreen;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "white",
  },
});
