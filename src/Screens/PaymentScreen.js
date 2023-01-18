import {
  Text,
  Box,
  Center,
  ScrollView,
  VStack,
  FormControl,
  Input,
  HStack,
  Image,
} from "native-base";
import React from "react";
import { Colors } from "../color";
import Buttone from "../Components/Button";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const paymentMethods = [
  { image:require( "../../assets/images/PayPal.png"), alt: "PayPal", icon: "Ionicons" },
  { image:require( "../../assets/images/card.png"), alt: "card", icon: "FontAwesome" },
  { image:require( "../../assets/images/sepa.png"), alt: "sepa", icon: "FontAwesome" },
];
export default function PaymentScreen() {
  const navigation=useNavigation()

  return (
    <Box flex={1} safeArea bg={Colors.main} py={5}>
      {/*Header  */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          PAYMENT METHOD
        </Text>
      </Center>
      {/* Selection */}
      <Box h={"full"} bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {paymentMethods.map((item,index)=>(
            <HStack key={index}
              alignItems={"center"}
              justifyContent="space-between"
              bg={Colors.white}
              px={3}
              py={1}
              rounded={10}
            >
              <Box>
                <Image
                  source={item.image}
                  alt={item.alt}
                  resizeMode="contain"
                  w={60}
                  h={50}
                />
              </Box>
              {item.icon==="Ionicons"?( <Ionicons name="checkmark-circle" size={30} color={Colors.main} />)
              :(<FontAwesome name="circle-thin" size={30} color={Colors.main} />)}
             
            </HStack>))}
            <Buttone bg={Colors.main} color={Colors.white} mt={5} onPress={()=>navigation.navigate("Placeorder")}>
              CONTINUE
            </Buttone>
            <Text italic textAlign={"center"}>
              Payment method is <Text bold > " Paypal " </Text> by default
            </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}
