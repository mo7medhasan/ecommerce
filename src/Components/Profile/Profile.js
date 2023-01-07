import React from "react";
import { Box, FormControl, Input, ScrollView, VStack } from "native-base";
import { Colors } from "../../color";
import Buttone from "../Button";

const Inputs = [
  { label: "USERNAME", type: "text" },
  { label: "EMAIL", type: "text" },
  { label: "NEW PASSWORD", type: "password" },
  { label: "CONFIRM PASSWORD", type: "password" },
];

export default function Profile() {
  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {Inputs.map((item, index) => (
            <FormControl key={index}>
              <FormControl.Label
                _text={{
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {item.label}
              </FormControl.Label>
              <Input
                borderWidth={0}
                bg={Colors.subGreen}
                py={4}
                type={item?.type}
                color={Colors.main}
                fontSize={15}
                _focus={{
                  bg: Colors.subGreen,
                  borderColor: Colors.main,
                  borderWidth: 1,
                }}
              />
            </FormControl>
          ))}
          <Buttone
            bg={Colors.main} color={Colors.white}  >
              UPDATE PROFILE
            </Buttone>
        </VStack>
      </ScrollView>
    </Box>
  );
}
