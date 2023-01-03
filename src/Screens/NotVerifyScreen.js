import { View, Text, Box, Center, Image, VStack, Button } from "native-base";
import React from "react";
import { Colors } from "../color";
import Buttone from "../Components/Button";
export default function NotVerifyScreen() {
  return (
    <Box flex={1} bg={Colors.lightGreen} safeAreaTop>
      <Center w="full" h={250}>
        <Image
          source={require("../../assets/favicon.png")}
          alt="Logo"
          size="lg"
        />
      </Center>
      <VStack space={6} px={5} alignItems="center">
        <Buttone bg={Colors.black} color={Colors.white}>
          REGISTER
        </Buttone>
        <Buttone bg={Colors.white} color={Colors.black}>
          REGISTER
        </Buttone>
      </VStack>
    </Box>
  );
}
