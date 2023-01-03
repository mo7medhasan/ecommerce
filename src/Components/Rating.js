import React from "react";
import { HStack, Text } from "native-base";
import { Colors } from "../color";
import { FontAwesome } from "@expo/vector-icons";
export default function Rating({ valve, text }) {
  const color = Colors.orange;
  const size = 8;
  return (
    <HStack space={0.4} mt={1} alignItems="center">
      <FontAwesome
        name={valve >= 1 ? "star" : valve >= 0.5 ? "star-half-o" : "star-o"}
        color={color}
        size={size}
      />
      <FontAwesome
        name={valve >= 2 ? "star" : valve >= 1.5 ? "star-half-o" : "star-o"}
        color={color}
        size={size}
      />
      <FontAwesome
        name={valve >= 3 ? "star" : valve >= 2.5 ? "star-half-o" : "star-o"}
        color={color}
        size={size}
      />
      <FontAwesome
        name={valve >= 4 ? "star" : valve >= 3.5 ? "star-half-o" : "star-o"}
        color={color}
        size={size}
      />
      <FontAwesome
        name={valve >= 5 ? "star" : valve >= 4.5 ? "star-half-o" : "star-o"}
        color={color}
        size={size}
      />
     {text?( <Text fontSize={12} ml={2}>{text}</Text>):null}
    </HStack>
  );
}
