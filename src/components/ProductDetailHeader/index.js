import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextHOC from '../TextComponentHOC'
import { Colors } from '../../constants/color'
import { Font } from '../../assets/fonts'
import { heightPxToDP, widthPxToDP } from '../../constants/screen'
import IconBtn from '../IconBtn'
import LeftIconBtn from '../LeftIconBtn'
import { Icons } from '../../assets/icons'

const ProductDetailHeader = ({item}) => {
  return (
    <View style={{padding:widthPxToDP(5),backgroundColor:Colors?.white,borderBottomWidth:1, borderColor:Colors?.lightGray,marginBottom:heightPxToDP(2)}}>
       <View style={styles?.top_items}>
                    <Image source={{ uri: item.image||'https://via.placeholder.com/150' }} resizeMode={'contain'} style={styles.product_image} />
                    <View style={{ width: '80%' }}>
                            <TextHOC style={styles?.item_tag}>Products/Product Details</TextHOC>
                        <TextHOC
                            numberOfLines={1} ellipsizeMode="tail"
                            style={styles?.item_label}>{item.title || "_________"}</TextHOC>
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:heightPxToDP(4),marginBottom:heightPxToDP(1.5)}}>
                    <IconBtn
                    iconName={'arrow-left'}
                    iconType={Icons.FontAwesome5}
                    color={Colors?.black}
                    />
                    <IconBtn
                    iconName={'arrow-right'}
                    iconType={Icons.FontAwesome5}
                    color={Colors?.black}
                    />
                    <LeftIconBtn
                    btnStyle={{width:widthPxToDP(50),backgroundColor:Colors?.btnDark}}
                    iconType={Icons.FontAwesome5}
                    iconName={'eye'}
                    color={Colors?.white}
                    size={18}

                    textStyle={{color:Colors?.white,fontFamily:Font.SemiBold}}
                    >
                        Preview
                    </LeftIconBtn>
                </View>
    </View>
  )
}

export default ProductDetailHeader

const styles = StyleSheet.create({
    product_image: {
        height: '90%',
        width: '15%',
        marginRight: widthPxToDP(5),
        backgroundColor:Colors?.white
    },
    top_items: {
        flexDirection: 'row',
        width: widthPxToDP(90),
        alignItems: 'flex-start',
    },
    item_label: {
        fontFamily: Font?.SemiBold,
        color: Colors?.black,
        fontSize: 24
    },
    item_tag: {
        fontFamily: Font?.Medium,
        color: Colors.gray,
        fontSize: 16
    },
    item_category: {
        fontFamily: Font?.Medium,
        color: Colors.white,
        fontSize: 12
    },
    category_holder: {
        backgroundColor: Colors?.lightGray,
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 5
    },
    felx_row: {
        flexDirection: 'row'
    },
    flex_between: {
        justifyContent: 'space-between'
    },
    width_full: {
        width: '100%'
    },
})