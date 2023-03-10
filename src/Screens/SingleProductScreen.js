import {
  View,
  Text,
  Box,
  ScrollView,
  Image,
  Heading,
  HStack,
  NumberInput,
  Spacer,
} from "native-base";
import React, { useState } from "react";
import NumericInput from "react-native-numeric-input";
import { Colors } from "../color";
import Rating from "../Components/Rating";
import Buttone from "../Components/Button";
import Review from "../Components/Review";
import { useNavigation } from "@react-navigation/native";
import { useGetProductsQuery } from "../../store/redux/product";
export default function SingleProductScreen({ route }) {
  const [valve, setValue] = useState(0);
  const navigation = useNavigation();
  const{data: products}=useGetProductsQuery();
  const id = route.params;
  const product=products&&products[id]
  return (
    <Box flex={1} bg={Colors.white}>
      <ScrollView px={3} showsVerticalScrollIndicator={false}>
        <Image
          source={{uri: product.image}}
          alt="Image"
          w="full"
          h={300}
          resizeMode={"contain"}
        />
        <Heading fontSize={15} mb={2} lineHeight={22}>
          {product.name}
        </Heading>
        {/* <Rating valve={product.rating} text={`${product.numReviews} reviews`} /> */}
        <HStack space={2}  alignItems="center" my={5}>
          {/* {product.countInStock > 0 ? (
            <NumericInput
              valve={valve}
              onChange={setValue}
              totalWidth={140}
              totalHeight={30}
              step={1}
              maxValue={product.countInStock}
              minValue={0}
              borderColor={Colors.deepGray}
              rounded
              textColor={Colors.black}
              iconStyle={{ color: Colors.white }}
              rightButtonBackgroundColor={Colors.main}
              leftButtonBackgroundColor={Colors.main}
            />
          ) : (
            <Heading bold fontSize={10} italic color={Colors.red}>
              Out Of Stock
            </Heading>
          )} */}
          <Spacer />
          <Heading bold fontSize={19} color={Colors.black}>
            {product.price}
          </Heading>
        </HStack>
        {/* <Text lineHeight={24} fontSize={12}>
          {product.description}
        </Text> */}
        <Buttone
          bg={Colors.main}
          color={Colors.white}
          mt={10}
          onPress={() => navigation.navigate("Cart")}
        >
          ADD TO CART
        </Buttone>
        {/* review */}
        {/* <Review /> */}
      </ScrollView>
    </Box>
  );
}
