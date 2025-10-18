import React from 'react'
import {Text, View, Image} from 'react-native'
import { images } from '@/constants'

const FullLogo = () => {
  return (
    <View>
        <Image source={images.fullLogo} style={{width:370, height:120,resizeMode:"center"}} />

    </View>
  )
}

export default FullLogo