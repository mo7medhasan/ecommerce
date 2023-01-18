import React, { useState } from "react";
import {
  Button,
  Center,
  HStack,
  Image,
  Modal,
  Pressable,
  Text,
  VStack,
} from "native-base";
import Buttone from "./Button";
import { Colors } from "../color";
import { useNavigation } from "@react-navigation/native";
const OrdersInfos = [
  { title: "Products", price: 125.77, color: "black" },
  { title: "Shipping", price: 34.0, color: "black" },
  { title: "Tax", price: 23.34, color: "black" },
  { title: "Total Amount", price: 3458.0, color: "main" },
];
export default function OrderModel() {
  const navigation=useNavigation()
  const [showModel, setShowModel] = useState(false);
  return (
    <Center>
      <Buttone
        onPress={() => setShowModel(true)}
        bg={Colors.main}
        color={Colors.white}
        mt={5}
      >
        SHOW PAYMENT & TOTAL
      </Buttone>
      <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {OrdersInfos.map((item, index) => (
                <HStack
                  key={index.toString()}
                  alignItems={"center"}
                  justifyContent="space-between"
                >
                  <Text fontWeight={"medium"}>{item.title}</Text>
                  <Text
                    color={item.color === "main" ? Colors.main : Colors.black}
                    bold
                  >
                    ${item.price}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Pressable
              w="full"
              justifyContent={"center"}
              bg={Colors.paypal}
              onPress={() => setShowModel(false)}
              h={45}
              rounded={3} overflow="hidden"
            >
              <Image
                source={require("../../assets/images/PayPal.png")}
                alt="paypal"
                resizeMode="contain"
                w="full"
                h={34}
              />
            </Pressable>
            <Button
              flex={1}
              w="full"
              bg={Colors.black}
              h={45}
              mt={2}
              _text={{
                color: Colors.white,
              }}
             
              onPress={() =>{navigation.navigate("Home");
               setShowModel(false)}}
              _pressed={{ bg: Colors.black}}
            >
             PAY LATER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
}
