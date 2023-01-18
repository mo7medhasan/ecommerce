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
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

export default function LoginScreen({navigation }) {
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
        <Heading>LOGIN</Heading>
        <VStack space={8} pt="6">
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={20} color={"white"} />
            }
            variant={"underlined"}
            placeholder={"user@gmaiil.com"}
            w="70%"
            pl={2}
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
          onPress={()=>navigation.navigate("Bottom")}
        >
          LOGIN
        </Button>
        <Pressable mt={4}  onPress={()=>navigation.navigate("Register")}>
          <Text color={Colors.gray} >SIGN UP</Text>
        </Pressable>
      </Box>
    </Box>
  );
}
