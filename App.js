import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, Box, StatusBar } from "native-base";
import { I18nManager } from "react-native"
import BottomNav from "./src/Navigations/BottomNav";
import ProfileScreen from "./src/Screens/ProfileScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";



const  Stack=createNativeStackNavigator();
I18nManager.allowRTL(false);
export default function App() {
  return (
    <NativeBaseProvider>
    <ProfileScreen/>

    </NativeBaseProvider>
  );
}
    {/* //   <NavigationContainer>
    //     <StatusBar hidden={true}/>
    //     <Stack.Navigator initialRouteName="Bottom" screenOptions={{
    //       headerShown:false,
    //     }}>
    //       <Stack.Screen name="Login" component={LoginScreen}/>
    //       <Stack.Screen name="Register" component={RegisterScreen}/>
    //       <Stack.Screen name="Bottom" component={BottomNav}/>
       
    //     </Stack.Navigator>
    //   </NavigationContainer> */}