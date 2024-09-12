import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/color'
import { heightPxToDP, widthPxToDP } from '../../constants/screen'
import { Font } from '../../assets/fonts'
import TextHOC from '../TextComponentHOC'
import LeftIconBtn from '../LeftIconBtn'
import Icon, { Icons } from '../../assets/icons'

const AddProductBtn = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TextHOC style={styles.heading}>All Products </TextHOC>
      <View style={[styles?.flex_row,styles?.flex_between,{marginTop:heightPxToDP(2),paddingHorizontal:4}]}>
        <Pressable
        style={{backgroundColor:Colors?.white,elevation:5,padding:18,borderRadius:5}}
        >
            <Icon
            name="search1"
            type={Icons.AntDesign}
            color={Colors?.black}
            size={18}
            />
        </Pressable>
       <LeftIconBtn
       onPress={onPress}
       btnStyle={{width:widthPxToDP(65)}}
       iconType={Icons.AntDesign}
       iconName={'plus'}
       size={18}
       color={Colors?.white}
       textStyle={{color:Colors?.white,fontFamily:Font.SemiBold}}
       >
        Add Products
       </LeftIconBtn>
      </View>
    </View>
  )
}

export default AddProductBtn

const styles = StyleSheet.create({
    flex_row: {
        flexDirection: 'row'
    },
    flex_between: {
        justifyContent: 'space-between'
    },
    container:{
        backgroundColor:Colors?.white,
        padding:widthPxToDP(5)
    },
    heading:{
        fontSize:28,
        fontFamily:Font.SemiBold,
        letterSpacing:0.2,
        lineHeight:32,
        color:Colors?.black
    },
})