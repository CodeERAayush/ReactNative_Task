import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../slices';
import CustomHeader from '../../components/CustomHeader';

const AddProductScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!title || !price || !description || !category) {
      Alert.alert('Error', 'Please fill all required fields');
      return;
    }

    const newProduct = {
      title,
      price: parseFloat(price),
      description,
      category,
      image: image || 'https://via.placeholder.com/150',
    };

    dispatch(addProduct(newProduct))
      .unwrap()
      .then(() => {
        Alert.alert('Success', 'Product added successfully');
        navigation.goBack();
      })
      .catch((error) => {
        Alert.alert('Error', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <CustomHeader/>
    <ScrollView >
      <Text style={styles.label}>Title*</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter product title"
      />

      <Text style={styles.label}>Price*</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="Enter product price"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Description*</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter product description"
        multiline
      />

      <Text style={styles.label}>Category*</Text>
      <TextInput
        style={styles.input}
        value={category}
        onChangeText={setCategory}
        placeholder="Enter product category"
      />

      <Text style={styles.label}>Image URL</Text>
      <TextInput
        style={styles.input}
        value={image}
        onChangeText={setImage}
        placeholder="Enter image URL (optional)"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Product</Text>
      </TouchableOpacity>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  textArea: {
    height: 100,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddProductScreen;