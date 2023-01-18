import { View, Text, Box, ScrollView, Heading } from 'native-base'
import React from 'react'
import { Colors } from '../color'
import OrderInfo from '../Components/OrderInfo'
import  {FontAwesome5,Ionicons}  from "@expo/vector-icons" 
import OrderItem from '../Components/OrderItem'
import OrderModel from '../Components/OrderModel'
export default function OrderScreen() {
  return (
    <Box flex={1} bg={Colors.subGreen} safeArea pt={6} >
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      
            <OrderInfo
            success
          title={"SHIPPING INFO"} subTitle="Shipping: Tanzania" text={"pay Method: Paypal "}
          icon={<FontAwesome5 name="shipping-fast"  size={30}  color={Colors.white}  />}
          />
          <OrderInfo
          danger
          title={"DELIVER TO"} subTitle="Address: " text={"Egypt ,  Cairo "}
          icon={<Ionicons name="location-sharp"  size={30}  color={Colors.white}  />}
          />
        </ScrollView>
      </Box>
      {/* Order Item  */}
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
          PRODUCTS
        </Heading>
        <OrderItem />
        {/* total */}
        <OrderModel/>
      </Box>
    </Box>
  )
}