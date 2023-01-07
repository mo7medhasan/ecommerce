import { Image, Heading, Center, Text } from "native-base";
import React from "react";
import { Colors } from "../color";
import Tabs from "../Components/Profile/Tabs";

export default function ProfileScreen() {
  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/zpune/image/upload/v1645429478/random/user_u3itjd.png"
          }}
          alt="profile"
          w={24}
          h={24}
          resizeMode="cover"
        />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white} >
          Admin Doe
        </Heading>
        <Text italic fontSize={10} color={Colors.white} px={2}>
          Joined jan  1 2023
        </Text>
      </Center>
      {/* TABS */}
      <Tabs/>
    </>
  );
}
