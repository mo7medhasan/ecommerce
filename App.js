import { NativeBaseProvider, Box } from "native-base";
import { I18nManager } from "react-native";
import NotVerifyScreen from "./src/Screens/NotVerifyScreen";

I18nManager.allowRTL(false);
export default function App() {
  return (
    <NativeBaseProvider>
      <NotVerifyScreen />
    </NativeBaseProvider>
  );
}
