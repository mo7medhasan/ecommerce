import { NativeBaseProvider, Box } from "native-base";
import { I18nManager } from "react-native";
import HomeScreen from "./src/Screens/HomeScreen";

I18nManager.allowRTL(false);
export default function App() {
  return (
    <NativeBaseProvider>
      <HomeScreen />
    </NativeBaseProvider>
  );
}
