import React from 'react'
import {Text, View, Image} from 'react-native'
import { images } from '@/constants'

const HalfLogo = () => {
  return (
     <View>
        <Image source={images.halfLogo} style={{width:250, height:80, resizeMode:'contain'}} />
    
        </View>
  )
}

export default HalfLogo