import React, { useCallback, useEffect, useMemo } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../slices';
import CustomHeader from '../../components/CustomHeader';
import ProductsCard from '../../components/ProductsCard';
import AddProductBtn from '../../components/UtilityComponents/AddProduct';
import Loader from '../../components/Reusables/Loader';
import Empty from '../../components/Reusables/EmptyComponent';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.data);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const renderItem = ({ item }) => (
    <ProductsCard
    item={item}
    onPress={() => navigation.navigate('Detail', { productId: item.id })}
    />
  );


  // if (status === 'loading') {
  //   return <Text>Loading...</Text>;
  // }

  if (status === 'failed') {
    return <Empty/>
  }

  return (
    <View style={styles.container}>
      <CustomHeader
      onPress={()=>navigation.openDrawer()}
      />
     { status==='loading'?<Loader loading={true}/>:<>
      <AddProductBtn
      onPress={() => navigation.navigate('AddProduct')}
      />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={()=><Empty/>}
      />
      </>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  itemInfo: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    margin: 16,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;