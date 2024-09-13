import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from '../../assets/icons'
import { Colors } from '../../constants/color'

const IconBtn = ({iconName,iconType,onPress,...props}) => {
  return (
    <Pressable
    style={{alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:Colors?.lightGray,padding:12,paddingHorizontal:18,borderRadius:5}}
    >
      <Icon
                type={iconType}
                name={iconName}
                {...props}
            />
    </Pressable>
  )
}

export default IconBtn

const styles = StyleSheet.create({})