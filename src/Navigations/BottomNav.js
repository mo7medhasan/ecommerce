import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Center, Pressable } from "native-base";
import HomeScreen from "../Screens/HomeScreen";
import SingleProductScreen from "../Screens/SingleProductScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import LoginScreen from "../Screens/LoginScreen";

import { Colors } from "../color";
import {
  Entypo,
  AntDesign,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { StyleSheet } from "react-native";
const Tab = createBottomTabNavigator();
const CustomTab = ({ children, onPress }) => (
<Pressable onPress={onPress}  w={70}  h={70} rounded="full"
bg={Colors.main} top={-30} shadow={2}>
    {children}
</Pressable>
    );
export default function BottomNav() {
  return (
    <Tab.Navigator
      backBehavior="main"
      initialRouteName="main"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { ...styles.tab },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Main"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Entypo name="home" size={24} color={Colors.main} />
              ) : (
                <AntDesign name="home" size={24} color={Colors.black} />
              )}
            </Center>
          ),
        }}
      />
      {/* Cart */}

      <Tab.Screen
        name="Cart"
        component={SingleProductScreen}
        options={{
            tabBarButton:(props)=><CustomTab {...props} />,
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <FontAwesome5 name="shopping-basket" size={24}
                  color={Colors.white}
                />
              ) : (
                <MaterialCommunityIcons
                  name="shopping-outline"
                  size={24}
                  color={Colors.white}
                />
              )}
            </Center>
          ),
        }}
      />
      {/* profile */}
      <Tab.Screen
        name="Profile"
        component={LoginScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <FontAwesome name="user" size={24} color={Colors.main} />
              ) : (
                <AntDesign name="user" size={24} color={Colors.black} />
              )}
            </Center>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tab: {
    elevation: 0,
    backgroundColor: Colors.white,
    height: 60,
  },
});
