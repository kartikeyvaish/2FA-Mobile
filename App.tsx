// Local Imports
import GlobalProvider from "./providers/GlobalProvider";
import NavigationProvider from "./providers/NavigationProvider";

// function component for App
function App() {
  // render
  return (
    <GlobalProvider>
      <NavigationProvider />
    </GlobalProvider>
  );
}

// exports
export default App;
