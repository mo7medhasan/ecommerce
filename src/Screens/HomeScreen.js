import { View, Text, Box } from 'native-base'
import React, { useContext } from 'react'
import { FavoritesContext } from '../../store/context/FavoritesContext'
import { Colors } from '../color'
import HomeProducts from '../Components/HomeProducts'
import HomeSearch from '../Components/HomeSearch'

export default function HomeScreen() {
// const favoriteIds=useContext(FavoritesContext)
// console.log(favoriteIds.ids);
  return (
    <Box flex={1} bg={Colors.subGreen}>
     <HomeSearch/>

     <HomeProducts/>
     
    </Box>
  )
}