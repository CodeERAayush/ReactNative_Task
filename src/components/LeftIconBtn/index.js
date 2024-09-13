import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Icon from '../../assets/icons'
import TextHOC from '../TextComponentHOC'
import { Colors } from '../../constants/color'

const LeftIconBtn = ({ children, btnStyle ,iconType, iconName, textStyle,onPress, ...props }) => {
    return (
        <Pressable
        onPress={onPress}
        style={[{backgroundColor:Colors?.btnPrimary,flexDirection:'row',padding:15,borderRadius:5,alignItems:'center',justifyContent:'center'},btnStyle]}>
            {iconType && iconName ? <Icon
                type={iconType}
                name={iconName}
                {...props}
            /> : null}
            <TextHOC
                style={[{marginLeft:10},textStyle]}
                numberOfLines={1} ellipsizeMode="tail"
            >
                {children}
            </TextHOC>
        </Pressable>
    )
}

export default LeftIconBtn

const styles = StyleSheet.create({})