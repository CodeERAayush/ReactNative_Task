import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductById } from '../../slices';
import CustomHeader from '../../components/CustomHeader';
import ProductDetailHeader from '../../components/ProductDetailHeader';
import { Colors } from '../../constants/color';

const DetailScreen = ({ route }) => {
  const { productId } = route.params;
  const dispatch = useDispatch();
  const { currentProduct, status, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  if (status === 'loading') {
    return <Text>Loading...</Text>;
  }

  if (status === 'failed') {
    return <Text>Error: {error}</Text>;
  }

  if (!currentProduct) {
    return null;
  }

  return (
    <View style={styles.container}>
      <CustomHeader/>
      <ProductDetailHeader
      item={currentProduct}
      />
    <ScrollView >
      {/* <Image source={{ uri: currentProduct.image }} style={styles.image} />
      <Text style={styles.title}>{currentProduct.title}</Text>
      <Text style={styles.price}>${currentProduct.price.toFixed(2)}</Text>
      <Text style={styles.category}>Category: {currentProduct.category}</Text>
      <Text style={styles.description}>{currentProduct.description}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>Rating: {currentProduct.rating.rate} / 5</Text>
        <Text style={styles.ratingCount}>({currentProduct.rating.count} reviews)</Text>
      </View> */}
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex:1,backgroundColor:Colors?.white},
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
});

export default DetailScreen;