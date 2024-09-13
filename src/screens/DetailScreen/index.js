import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductById } from '../../slices';
import CustomHeader from '../../components/CustomHeader';
import ProductDetailHeader from '../../components/ProductDetailHeader';
import { Colors } from '../../constants/color';
import TextHOC from '../../components/TextComponentHOC';
import { heightPxToDP, widthPxToDP } from '../../constants/screen';
import { Font } from '../../assets/fonts';
import ProductInfo from '../../components/ProductInfoTable';
import { Images } from '../../assets/images';
import Loader from '../../components/Reusables/Loader';
import Empty from '../../components/Reusables/EmptyComponent';

const DetailScreen = ({ route,navigation }) => {
  const { productId } = route.params;
  const dispatch = useDispatch();
  const { currentProduct, status, error } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  if (status === 'failed') {
    return <Empty />
  }

  if (!currentProduct) {
    return <Empty />
  }

  return (
    <View style={styles.container}>
      <CustomHeader
      goBack={()=>navigation.goBack()}
      />
      {status === 'loading' ? <Loader loading={true} /> : <>
        <ProductDetailHeader
          item={currentProduct}
        />
        <ScrollView >
          <View style={{ paddingHorizontal: widthPxToDP(5) }}>
            <TextHOC
              style={{ color: Colors?.black, fontFamily: Font?.SemiBold, fontSize: 20 }}
            >
              Product Information
            </TextHOC>
            <ProductInfo
              label1={'Product Name'}
              label2={'Price'}
              value1={currentProduct?.title}
              value2={'USD'}
              number={currentProduct?.price}
            />

            <ProductInfo
              label1={'Product Unique Id'}
              label2={'Weight'}
              value1={`# ${(Math.random() * 1000).toFixed(12)}`}
              value2={'KG'}
              number={'2.5'}
            />

            <TextHOC
              style={styles?.labelText}
            >
              Description
            </TextHOC>
            <View>
              <View style={styles.description_toolbar}>
                <Pressable>
                  <Text style={[styles?.labelText, { color: Colors?.btnDark }]}>H1 ▿</Text>
                </Pressable>
                <Image
                  source={Images?.tools}
                  resizeMode='contain'
                  style={{ height: heightPxToDP(3), width: widthPxToDP(60) }}
                />
              </View>
              <TextInput
                aria-disabled
                placeholderTextColor={Colors?.gray}
                value={currentProduct?.description}
                style={styles?.description_text}
                multiline
              />
            </View>

          </View>
          <View style={{marginTop:heightPxToDP(2)}}/>
        </ScrollView>
      </>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors?.white },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  category: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  ratingCount: {
    fontSize: 14,
    color: '#888',
  },
  labelText: {
    color: 'black',
    marginVertical: heightPxToDP(1),
    fontFamily: Font?.Medium,
    fontSize: 15
  },
  description_toolbar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: widthPxToDP(3), borderWidth: 1, borderRadius: 5, borderColor: Colors?.lightGray, borderBottomWidth: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, paddingVertical: heightPxToDP(1) },
  description_text:{ maxHeight: heightPxToDP(30), borderWidth: 1, borderColor: Colors?.lightGray, borderRadius: 5, borderTopLeftRadius: 0, borderTopRightRadius: 0, fontFamily: Font?.Regular, fontSize: 16, padding: heightPxToDP(2),color:Colors?.black }
});

export default DetailScreen;