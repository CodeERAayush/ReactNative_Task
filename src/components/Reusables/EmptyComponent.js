import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { heightPxToDP as hp } from '../../constants/screen'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Font } from '../../assets/fonts'
import TextHOC from '../TextComponentHOC'

const Empty = () => {
  return (
    <View>
      <LottieView
      source={require('../../assets/Animations/emptyCart.json')}
      autoPlay
      loop
      style={styles?.animation}
      />
      <TextHOC style={styles.empty_text}>
        No Items Found
      </TextHOC>
    </View>
  )
}

export default Empty

const styles = StyleSheet.create({
    animation:{
        height:hp(25),
    },
    empty_text:{
        color:Colors?.black,
        alignSelf:'center',
        fontFamily:Font?.Bold,
        letterSpacing:0.8,
    }
})