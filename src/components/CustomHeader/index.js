import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextHOC from '../TextComponentHOC'
import { Font } from '../../assets/fonts'
import { heightPxToDP, widthPxToDP } from '../../constants/screen'
import { Colors } from '../../constants/color'
import { Images } from '../../assets/images'
import Icon, { Icons } from '../../assets/icons'

const CustomHeader = () => {
  return (
    <View style={styles.header_container}>
     <Icon
     name="menu"
     type={Icons.Feather}
     size={heightPxToDP(3)}
     color={Colors?.black}
     />
      <Image
      source={Images?.appNameIcon}
      resizeMode='contain'
      style={styles?.appImg}
      />
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
    header_container:{
        width:widthPxToDP(100),
        backgroundColor:Colors.white,
        height:heightPxToDP(8),
        paddingHorizontal:widthPxToDP(5),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    appImg: {
        height:heightPxToDP(8),
        width:widthPxToDP(32),
        transform:[{translateX:-widthPxToDP(28)}]
    }
})