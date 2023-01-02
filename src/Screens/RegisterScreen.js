import {
  Box,
  Image,
  Heading,
  Input,
  VStack,
  Button,
  Text,
  Pressable,
} from "native-base";
import React from "react";
import { Colors } from "../color";
import { FontAwesome, Ionicons,MaterialIcons } from "@expo/vector-icons";

export default function RegisterScreen() {
  return (
    <Box flex={1} bg={Colors.black}>
    <Image
      flex={1}
      alt="Logo"
      source={require("../../assets/cover.jpg")}
      resizeMode="cover"
      size={"lg"}
      w="full"
    />
    <Box
      w="full"
      h="full"
      position={"absolute"}
      top="0"
      px="6"
      justifyContent={"center"}
    >
      <Heading>SING UP</Heading>
      <VStack space={8} pt="6">
           {/* UserName */}
           <Input
          InputLeftElement={
            <FontAwesome name="user" size={20} color={"white"} />
          }
          type="text"
          variant={"underlined"}
          placeholder={"John Doe"}
          w="70%"
          pl={2}
          color={Colors.white}
          borderBottomColor={Colors.white}
        />
        {/* Email */}
        <Input
          InputLeftElement={
            <MaterialIcons name="email" size={20} color={"white"} />
          }
          variant={"underlined"}
          placeholder={"user@gmaiil.com"}
          w="70%"
          pl={2}
          type="text"
          color={Colors.white}
          borderBottomColor={Colors.white}
        />
        {/* password */}
        <Input
          InputLeftElement={<Ionicons name="eye" size={20} color={"white"} />}
          variant={"underlined"}
          placeholder={"********"}
          type={"password"}
          w="70%"
          pl={2}
          color={Colors.white}
          borderBottomColor={Colors.white}
        />
      </VStack>
      <Button
        _pressed={{
          bg: Colors.blue,
        }}
        my={30}
        w={"40%"}
        rounded={50}
        bg={Colors.blue}
      >SIGN UP
        
      </Button>
      <Pressable mt={4}>
        <Text color={Colors.gray} >LOGIN</Text>
      </Pressable>
    </Box>
  </Box>
  )
}