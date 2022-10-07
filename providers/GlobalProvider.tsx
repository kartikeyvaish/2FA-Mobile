// Packages Imports
import { useState } from "react";
import { Snackbar } from "react-native-paper";

// Local Imports
import { ChildrenProps, UserProps } from "../types/GlobalTypes";
import GlobalContext from "../types/ContextTypes";

// function component for GlobalProvider
function GlobalProvider(props: ChildrenProps) {
  // Destructuring props
  const { children } = props;

  // Local States
  const [User, SetUser] = useState<UserProps | null>(null);
  const [ShowSnack, SetShowSnack] = useState<boolean>(false);
  const [SnackText, SetSnackText] = useState<string>("");
  const [SnackColor, SetSnackColor] = useState<string>("");

  // show snack with configs
  const showSnack = (text: string, color: string = "red") => {
    SetSnackText(text);
    SetSnackColor(color);
    SetShowSnack(true);
  };

  // context values
  const contextValues = {
    User,
    SetUser,
    showSnack,
  };

  // hide the snack
  const hideSnack = () => {
    SetShowSnack(false);
  };

  // render
  return (
    <GlobalContext.Provider value={contextValues}>
      {children}

      <Snackbar visible={ShowSnack} onDismiss={hideSnack} style={{ backgroundColor: SnackColor }} duration={3000}>
        {SnackText}
      </Snackbar>
    </GlobalContext.Provider>
  );
}

// exports
export default GlobalProvider;
