import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { heightPxToDP as hp } from '../../constants/screen'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Font } from '../../assets/fonts'

const Empty = () => {
  return (
    <View>
      <LottieView
      source={require('../../assets/Animations/emptyCart.json')}
      autoPlay
      loop
      style={styles?.animation}
      />
      <Text allowFontScaling={false} style={styles.empty_text}>
        No Items Found
      </Text>
    </View>
  )
}

export default Empty

const styles = StyleSheet.create({
    animation:{
        height:hp(25),
    },
    empty_text:{
        color:Colors?.black45,
        alignSelf:'center',
        fontFamily:Font?.Bold,
        letterSpacing:0.8
    }
})