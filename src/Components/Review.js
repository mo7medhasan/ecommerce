import React, { useState } from "react";
import {
  Box,
  CheckIcon,
  FormControl,
  Heading,
  Select,
  Text,
  TextArea,
  VStack,
} from "native-base";
import { Colors } from "../color";
import Rating from "./Rating";
import Message from "./Notfications/Message";
import Buttone from "./Button";

export default function Review() {
const [ratings, setRatings] = useState("2")


  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        Review
      </Heading>
      {/*         IF THERE IS NO REVIEW */}
{/* 
      <Message
        bg={Colors.deepGray}
        color={Colors.main}
        size={10}
        bold
        children={"NO REVIEW"}
      /> */}

      {/* REVIEW */}
      <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          User Doe
        </Heading>
        <Rating valve={4} />
        <Text my={2} fontSize={11}>
          Jan 12 2023{" "}
        </Text>
        <Message
          color={Colors.black}
          bg={Colors.white}
          size={10}
          children={
            " has roots in a piece of classical Latin literature from 45 BC, making it over "
          }
        />
      </Box>
      {/* WRITE REVIEW */}
      {/* <Box mt={6}>
        <Heading fontSize={15} color={Colors.black}>
          REVIEW THIS PRODUCT
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label _text={{ fontSize: "12px", fontWeight: "bold" }}>
              Rating
            </FormControl.Label>
            <Select
              bg={Colors.subGreen}
              borderWidth={0}
              rounded={5}
              py={4}
              placeholder="Choose"
              _selectedItem={{
                bg: Colors.subGreen,
                endIcon: <CheckIcon size={3} />,

              }}
              selectedValue={ratings}
              onValueChange={(e)=>setRatings(e)}
            >
              <Select.Item label="1 - Poor" value="1" />
              <Select.Item label="2 - Fair" value="2" />
              <Select.Item label="3 - Good" value="3" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{ fontSize: "12px", fontWeight: "bold" }}>
              Comment
            </FormControl.Label>
              <TextArea  h={24} w="full"
              placeholder="this product is good ....."
              borderWidth={0}
              bg={Colors.subGreen}
              py={4}
              _focus={{
                bg:Colors.subGreen
              }}
              />

            </FormControl>
            <Buttone bg={Colors.main} color={Colors.white}>
                SUBMIT
            </Buttone>

            <Message
          bg={Colors.black}
          color={Colors.white}
          size={10}
          children={
        "Please Login to Write a review"
          }
        />
        </VStack>
      </Box> */}
    </Box>
  );
}
