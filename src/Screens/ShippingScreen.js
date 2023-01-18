import { useNavigation } from "@react-navigation/native";
import {
  Text,
  Box,
  Center,
  ScrollView,
  VStack,
  FormControl,
  Input,
} from "native-base";
import React from "react";
import { Colors } from "../color";
import Buttone from "../Components/Button";

const ShippingInputs = [
  { Label: "ENTER CITY", type: "text" },
  { Label: "ENTER COUNTRY", type: "text" },
  { Label: "ENTER POSTAL CODE", type: "text" },
  { Label: "ENTER ADDRESS", type: "text" },
];

export default function ShippingScreen() {
  const navigation=useNavigation()
  return (
    <Box flex={1} safeArea bg={Colors.main} py={5}>
      {/*Header  */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          DELIVERY ADDRESS
        </Text>
      </Center>
      {/* Inputs */}
      <Box h={"full"} bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {ShippingInputs.map((item, index) => (
              <FormControl key={index}>
                <FormControl.Label
                  _text={{
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {item.Label}
                </FormControl.Label>
                <Input
                  borderWidth={0.2}
                  borderColor={Colors.main}
                  bg={Colors.subGreen}
                  py={4}
                  type={item.type}
                  color={Colors.main}
                  _focus={{
                    bg: Colors.subGreen,
                    borderWidth: 1,
                    borderColor: Colors.main,
                  }}
                />
              </FormControl>
            ))}
            <Buttone bg={Colors.main} color={Colors.white} mt={5} onPress={()=>navigation.navigate("Checkout")}>
              CONTINUE
            </Buttone>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}
