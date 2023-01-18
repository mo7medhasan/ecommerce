import { Box, HStack, Input, Pressable } from "native-base";
import React from "react";
import { Colors } from "../color";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function HomeSearch() {
  const navigation=useNavigation()
  return (
    <HStack
      space={3}
      w="full"
      px={6}
      bg={Colors.main}
      py={4}
      alignItems="center"
      safeAreaTop
    >
      <Input
        placeholder="Nike, Puma, Adidas ..."
        w="85%"
        bg={Colors.white}
        type="search"
        h={12}
        _focus={{ bg: Colors.white }}
        variant="filled"
        borderWidth={0}
      />
      <Pressable ml={3} onPress={()=>navigation.navigate("Cart")}>
        <FontAwesome5 name="shopping-basket" size={24} color={Colors.white} />
        <Box
          px={1}
          rounded="full"
          position={"absolute"}
          top={-13}
          left={2}
          bg={Colors.red}
          _text={{ color: Colors.white, fontSize: "11px" }}
        >
          5
        </Box>
      </Pressable>
    </HStack>
  );
}
