import { View, Text, Box, Center, Image, VStack } from "native-base";
import React from "react";
import Colors from "../color";
export default function NotVerifyScreen() {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <Center w="full" h={250}>
        <Image
          source={require("../../assets/favicon.png")}
          alt="Logo"
          size="lg"
        />
      </Center>
        <VStack space={6} px={5} alignItems="center">

        </VStack>
    </Box>
  );
}
