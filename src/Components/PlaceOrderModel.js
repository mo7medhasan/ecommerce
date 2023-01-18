import React, { useState } from "react";
import { Button, Center, HStack, Modal, Text, VStack } from "native-base";
import Buttone from "./Button";
import { Colors } from "../color";
import { useNavigation } from "@react-navigation/native";
const OrdersInfos = [
  { title: "Products", price: 125.77, color: "black" },
  { title: "Shipping", price: 34.0, color: "black" },
  { title: "Tax", price: 23.34, color: "black" },
  { title: "Total Amount", price: 3458.0, color: "main" },
];
export default function PlaceOrderModel() {
  const navigation=useNavigation()
  const [showModel, setShowModel] = useState(false);
  return (
    <Center>
      <Buttone
        onPress={() => setShowModel(true)}
        bg={Colors.black}
        color={Colors.white}
        mt={5}
      >
        SHOW TOTAL
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
                  <Text color={item.color==="main"? Colors.main:Colors.black} bold>
                    ${item.price}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button 
            flex={1}
              bg={Colors.main}
              h={45}
              _text={{
                color: Colors.white,
              }}
              onPress={() => {navigation.navigate("order");
              setShowModel(false)}}
              _pressed={{ bg: Colors.main }}
            >
              PLACE AN ORDER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
}
