import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../slices';
import CustomHeader from '../../components/CustomHeader';
import { Colors } from '../../constants/color';
import { Font } from '../../assets/fonts';
import { heightPxToDP, widthPxToDP } from '../../constants/screen';
import TextHOC from '../../components/TextComponentHOC';
import { Images } from '../../assets/images';
import ProductDetailHeader from '../../components/ProductDetailHeader';

const ProductForm = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [weight, setWeight] = useState('');
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const validateForm = () => {
    let newErrors = {};

    if (!title.trim()) {
      newErrors.title = 'Product name is required';
    }

    if (!price.trim()) {
      newErrors.price = 'Price is required';
    } else if (isNaN(parseFloat(price)) || parseFloat(price) <= 0) {
      newErrors.price = 'Price must be a positive number';
    }

    if (!description.trim()) {
      newErrors.description = 'Description is required';
    }

    if (!category.trim()) {
      newErrors.category = 'Category is required';
    }

    if (weight && (isNaN(parseFloat(weight)) || parseFloat(weight) <= 0)) {
      newErrors.weight = 'Weight must be a positive number';
    }

    if (image && !isValidUrl(image)) {
      newErrors.image = 'Invalid image URL';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const newProduct = {
        title,
        price: parseFloat(price),
        description,
        category,
        image: image || 'https://via.placeholder.com/150',
        weight: weight ? parseFloat(weight) : 0,
      };
  
      dispatch(addProduct(newProduct))
        .unwrap()
        .then(() => {
          Alert.alert('Success', 'Product added successfully');
          
          // Clear form fields
          setTitle('');
          setPrice('');
          setDescription('');
          setCategory('');
          setImage('');
          setWeight('');
          
          navigation.goBack();
        })
        .catch((error) => {
          Alert.alert('Error', error.message);
        });
    } else {
      Alert.alert('Error', 'Please correct the errors in the form');
    }
  };
  

  const renderProductInfo = (label1, label2, value1, value2, onChangeText1, onChangeText2, keyboardType1 = 'default', keyboardType2 = 'default', error1, error2, toShow) => (
    <View style={styles.productInfoContainer}>
      <View style={styles.inputContainer}>
        <TextHOC style={styles.labelText}>{label1}</TextHOC>
        <TextInput
           placeholderTextColor=
           {Colors?.gray}
           inte
          style={[styles.input, error1 && styles.inputError]}
          value={value1}
          onChangeText={(text) => {
            onChangeText1(text);
            setErrors((prev) => ({ ...prev, [label1.toLowerCase()]: null }));
          }}
          placeholder={`Enter ${label1.toLowerCase()}`}
          keyboardType={keyboardType1}
        />
        {error1 && <Text style={styles.errorText}>{error1}</Text>}
      </View>
      <View style={styles.inputContainer}>
        <TextHOC style={styles.labelText}>{label2}</TextHOC>
        <View style={[styles.combinedInput, error2 && styles.inputError]}>
        <TouchableOpacity style={styles.dropdownButton}>
            <Text style={styles.dropdownButtonText}>{toShow}   ▿  </Text>
          </TouchableOpacity>
          <TextInput
          placeholderTextColor={Colors?.gray}
            style={[styles.input, styles.combinedInputText]}
            value={value2}
            onChangeText={(text) => {
              onChangeText2(text);
              setErrors((prev) => ({ ...prev, [label2.toLowerCase()]: null }));
            }}
            placeholder={`000`}
            keyboardType={keyboardType2}
          />
        </View>
        {error2 && <Text style={styles.errorText}>{error2}</Text>}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <CustomHeader 
      onPress={()=>navigation.openDrawer()}
      />
      <ProductDetailHeader
      item={{
        image:image,
        title:title,
        description:description
      }}
      />
      <ScrollView style={styles.formContainer}>
        {/* <TextHOC style={styles.formTitle}>Add New Product</TextHOC> */}
        
        {renderProductInfo('Product Name', 'Price', title, price, setTitle, setPrice, 'default', 'numeric', errors.title, errors.price,"USD")}
        {renderProductInfo('Category', 'Weight', category, weight, setCategory, setWeight, 'default', 'numeric', errors.category, errors.weight,"KG")}
        
        <TextHOC style={styles.labelText}>Description</TextHOC>
        <View style={styles.descriptionContainer}>
          <View style={styles.descriptionToolbar}>
            <TouchableOpacity>
              <Text style={[styles.labelText, { color: Colors?.btnDark }]}>H1 ▿</Text>
            </TouchableOpacity>
            <Image
                  source={Images?.tools}
                  resizeMode='contain'
                  style={{ height: heightPxToDP(3), width: widthPxToDP(60) }}
                />
          </View>
          <TextInput
          placeholderTextColor={Colors?.gray}
            style={[styles.descriptionInput, errors.description && styles.inputError]}
            value={description}
            onChangeText={(text) => {
              setDescription(text);
              setErrors((prev) => ({ ...prev, description: null }));
            }}
            placeholder="Enter product description"
            multiline
          />
          {errors.description && <Text style={styles.errorText}>{errors.description}</Text>}
        </View>

        <TextHOC style={styles.labelText}>Image URL</TextHOC>
        <TextInput
        placeholderTextColor={Colors?.gray}
          style={[styles.input, errors.image && styles.inputError]}
          value={image}
          onChangeText={(text) => {
            setImage(text);
            setErrors((prev) => ({ ...prev, image: null }));
          }}
          placeholder="Enter image URL (optional)"
        />
        {errors.image && <Text style={styles.errorText}>{errors.image}</Text>}

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Add Product</Text>
        </TouchableOpacity>
        <View style={{marginBottom:heightPxToDP(5)}}/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors?.white,
  },
  formContainer: {
    padding: widthPxToDP(5),
  },
  formTitle: {
    fontSize: 24,
    fontFamily: Font?.SemiBold,
    color: Colors?.black,
    marginBottom: heightPxToDP(3),
  },
  productInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: heightPxToDP(2),
  },
  inputContainer: {
    width: '48%',
  },
  labelText: {
    color: Colors?.black,
    marginVertical: heightPxToDP(1),
    fontFamily: Font?.Medium,
    fontSize: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors?.lightGray,
    borderRadius: 5,
    padding: heightPxToDP(1),
    fontFamily: Font?.Regular,
    fontSize: 16,
    textAlign:'center',
    color:Colors?.black
  },
  combinedInput: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors?.lightGray,
    borderRadius: 5,
  },
  combinedInputText: {
    flex: 1,
    borderWidth: 0,
  },
  dropdownButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: widthPxToDP(2),
    borderRightWidth: 1,
    borderRightColor: Colors?.lightGray,
    width:'40%'
  },
  dropdownButtonText: {
    fontFamily: Font?.SemiBold,
    fontSize: 16,
    color: Colors?.black,
  },
  descriptionContainer: {
    marginBottom: heightPxToDP(2),
  },
  descriptionToolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: widthPxToDP(3),
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors?.lightGray,
    borderBottomWidth: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingVertical: heightPxToDP(1),
  },
  descriptionInput: {
    color:Colors?.black,
    borderWidth: 1,
    borderColor: Colors?.lightGray,
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    fontFamily: Font?.Regular,
    fontSize: 16,
    padding: heightPxToDP(2),
    height: heightPxToDP(20),
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: Colors?.btnDark,
    padding: heightPxToDP(2),
    borderRadius: 5,
    alignItems: 'center',
    marginTop: heightPxToDP(3),
  },
  submitButtonText: {
    color: Colors?.white,
    fontSize: 18,
    fontFamily: Font?.SemiBold,
  },
  inputError: {
    borderColor: Colors?.error || 'red',
  },
  errorText: {
    color: Colors?.error || 'red',
    fontSize: 12,
    fontFamily: Font?.Regular,
    marginTop: heightPxToDP(0.5),
  },
});

export default ProductForm;