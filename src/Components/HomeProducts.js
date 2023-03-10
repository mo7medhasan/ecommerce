import { useNavigation } from "@react-navigation/native";
import { Box, Flex, Heading, Image, Pressable, ScrollView, Text } from "native-base";
import { useGetProductsQuery } from "../../store/redux/product";
import { Colors } from "../color";
// import { products } from "../data/Products";
import Rating from "./Rating";

export default function HomeProducts() {
  const navigation=useNavigation()

const{data: products}=useGetProductsQuery();

  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <Flex
        flexWrap={"wrap"}
        direction="row"
        justifyContent={"space-between"}
        px={6}
      >
        {products&&Object.values(products).map((product, index) => (
          <Pressable
          onPress={()=>navigation.navigate("Single",product.id)}
            key={product.id}
            w="47%"
            bg={Colors.white}
            rounded="md"
            shadow={2}
            pb={2}
            my={3}
            overflow="hidden"
            pt={0.3}
          >
          <Image source={{uri:product.picture}} alt={product.name} w="full"  h={24} resizeMode="contain"/>
         <Box px={4} pt={1}>
            <Heading size="sm" bold>
            ${product.price}
            </Heading>
            <Text fontSize={10}mt={1} isTruncated w="full">
                {product.name}
            </Text>
        </Box> 
          </Pressable> 
        ))}
      </Flex>
    </ScrollView>
  );
}
  //  <Rating valve={product.rating}/>
  //          
  //            {/* rating */}