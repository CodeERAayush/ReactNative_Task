import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TextHOC = ({children,style,...props}) => {
  return (
    <Text
    allowFontScaling={false}
    style={style}
    {...props}
    >{children}</Text>
  )
}

export default TextHOC;
