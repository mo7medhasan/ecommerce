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
import Buttone from "../Components/Button"
import Review from "../Components/Review";
export default function SingleProductScreen() {
  const [valve, setValue] = useState(0);

  return (
    <Box flex={1} bg={Colors.white}>
      <ScrollView px={3} showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../assets/images/1.png")}
          alt="Image"
          w="full"
          h={300}
          resizeMode={"contain"}
        />
        <Heading fontSize={15} mb={2} lineHeight={22}>
          New Adidas Shoe From Azamon
        </Heading>
        <Rating valve={4} />
        <HStack space={2} alignItems="center" my={5}>
          <NumericInput
            valve={valve}
            totalWidth={140}
            totalHeight={30}
            step={1}
            maxValue={15}
            minValue={0}
            borderColor={Colors.deepGray}
            rounded
            textColor={Colors.black}
            iconStyle={{ color: Colors.white }}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main}
          />
          <Spacer />
          <Heading bold fontSize={19} color={Colors.black}>
            $400
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.{" "}
        </Text>
        <Buttone bg={Colors.main} color={Colors.white} mt={10}>
          ADD TO CART
        </Buttone>
        {/* review */}
        <Review/>
      </ScrollView>
    </Box>
  );
}
