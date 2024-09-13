import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPxToDP, widthPxToDP } from '../../constants/screen'
import { Colors } from '../../constants/color'
import TextHOC from '../TextComponentHOC'
import { Font } from '../../assets/fonts'
import Icon, { Icons } from '../../assets/icons'

const ProductCard = ({ item, onPress }) => {
    return (
        <>
            <Pressable
                onPress={onPress}
                style={styles?.product_card}
            >
                <View style={styles?.top_items}>
                    <Image source={{ uri: item.image }} resizeMode={'contain'} style={styles.product_image} />
                    <View style={{ width: '80%' }}>
                        <TextHOC
                            numberOfLines={1} ellipsizeMode="tail"
                            style={styles?.item_label}>{item.title}</TextHOC>
                        <View style={[styles.felx_row, styles.flex_between, styles.width_full]}>

                            {/* randomly auto generating this field */}

                            <TextHOC style={styles?.item_tag}>#{Math.random().toFixed(15)}</TextHOC>
                            <View style={styles.category_holder}>
                                <TextHOC style={styles?.item_category} letterSpacing={0.5}>{item?.category}</TextHOC>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles?.bottom_items}>
                    <View style={styles.container}>
                        <View style={styles.row}>
                            <TextHOC style={styles.cell}>CHANGE</TextHOC>
                            <TextHOC style={styles.headerCell}> <Icon type={Icons.MaterialCommunityIcons} name={'arrow-top-right'} color={Colors?.mintGreen} size={15} /> 5.7%</TextHOC>
                        </View>
                        <View style={styles.row}>
                            <TextHOC style={styles.cell}>PRICE</TextHOC>
                            <TextHOC style={styles.headerCell}>${item?.price.toFixed(2)}</TextHOC>
                        </View>
                        <View style={styles.row}>
                            <TextHOC style={styles.cell}>SOLD</TextHOC>
                            <TextHOC style={styles.headerCell}>6,643</TextHOC>
                        </View>
                        <View style={styles.row}>
                            <TextHOC style={styles.cell}>SALES</TextHOC>
                            <TextHOC style={styles.headerCell}>$10,331.70</TextHOC>
                        </View>
                    </View>
                </View>
            </Pressable>
            <View style={styles.line} />
        </>
    )
}

export default React.memo(ProductCard)

const styles = StyleSheet.create({
    product_card: {
        height: heightPxToDP(30),
        padding: widthPxToDP(5),
        backgroundColor: Colors?.white,
    },
    line: { width: widthPxToDP(100), height: 1, backgroundColor: Colors?.lightGray },
    product_image: {
        height: '90%',
        width: '10%',
        marginRight: 10
    },
    top_items: {
        flexDirection: 'row',
        width: widthPxToDP(90),
        alignItems: 'flex-start',
    },
    item_label: {
        fontFamily: Font?.SemiBold,
        color: Colors?.black,
        fontSize: 16,
        marginBottom:heightPxToDP(0.6)
    },
    item_tag: {
        fontFamily: Font?.Medium,
        color: Colors.gray,
        fontSize: 12
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
    bottom_items: {
        // backgroundColor:'red',
        width: '65%',
        alignSelf: 'center',
        marginTop: 10,
        marginRight: widthPxToDP(5)
    },
    container: {
        padding: 16,
        borderRadius: 8,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
    },
    headerCell: {
        fontFamily: Font?.SemiBold,
        flex: 1,
        textAlign: 'left',
        marginLeft: widthPxToDP(10),
        color: Colors?.black
    },
    cell: {
        flex: 1,
        textAlign: 'left',
        fontFamily: Font.Regular,
        color: Colors?.gray
    },
})