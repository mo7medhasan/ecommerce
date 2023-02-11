import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, Box, StatusBar } from "native-base";
import { I18nManager } from "react-native"
import BottomNav from "./src/Navigations/BottomNav";

import LoginScreen from "./src/Screens/LoginScreen";
import OrderScreen from "./src/Screens/OrderScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
import FavoritesContextProvider from "./store/context/FavoritesContext";



const  Stack=createNativeStackNavigator();
I18nManager.allowRTL(false);
export default function App() {
  return (<>
        <StatusBar hidden={true}/>
  
     <FavoritesContextProvider>  <NativeBaseProvider>
       <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{
          headerShown:false,
        }}>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Register" component={RegisterScreen}/>
          <Stack.Screen name="order" component={OrderScreen}/>

          <Stack.Screen name="Bottom" component={BottomNav}/>
       
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider></FavoritesContextProvider></>
  );
}
   