import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPxToDP, widthPxToDP } from '../../constants/screen'
import TextHOC from '../TextComponentHOC'
import { Colors } from '../../constants/color'
import { Font } from '../../assets/fonts'

const ProductInfo = ({label1,label2,value1, value2, number}) => {
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between',marginVertical:heightPxToDP(1)}}>
    <View style={{marginTop:heightPxToDP(1)}}>
      <TextHOC style={styles?.labelText}>{label1}</TextHOC>
      <View style={{borderRadius:5, borderColor:Colors?.lightGray, borderWidth:1, height:heightPxToDP(7),width:widthPxToDP(45),justifyContent:'center',alignItems:'center'}}>
        <TextHOC 
        numberOfLines={2}
        style={styles.dataText}>{value1}</TextHOC>
      </View>
    </View>
    <View style={{marginTop:heightPxToDP(1)}}>
      <TextHOC style={styles?.labelText}>{label2}</TextHOC>
      <View style={{borderRadius:5, borderColor:Colors?.lightGray, borderWidth:1,width:widthPxToDP(40),flexDirection:'row',height:heightPxToDP(7),justifyContent:'space-evenly',alignItems:'center'}}>
        <TextHOC style={styles?.dataText}>{value2} ▿</TextHOC>
       {number&& <View style={{borderLeftWidth:1,width:'35%',borderColor:Colors?.lightGray,height:'100%',alignItems:'center',justifyContent:'center'}}>
          <TextHOC style={[styles?.dataText]}>{number}</TextHOC>
        </View>}
      </View>
    </View>
  </View>
  )
}

export default ProductInfo

const styles = StyleSheet.create({
    dataText:{
        fontSize:16,
        fontFamily:Font.SemiBold,
        color:Colors?.black,

    },
    labelText:{
        color:'black',
        marginVertical:heightPxToDP(1),
        fontFamily:Font?.Medium,
        
    }
})