import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { saveData, loadData } from '../utils/offlineStorage';
const FakeStoreApi = require('fake_store_api');

const api = new FakeStoreApi.DefaultApi();



export const fetchProducts = createAsyncThunk('https://fakestoreapi.com/products', async (_, { rejectWithValue }) => {
  try {
    const response = await api.productsGet();
    await saveData('products', response);
    return response;
  } catch (error) {
    const cachedData = await loadData('products');
    if (cachedData) {
      return cachedData;
    }
    return rejectWithValue(error.message);
  }
});

export const fetchProductById = createAsyncThunk('data/fetchProductById', async (id, { rejectWithValue }) => {
  try {
    const response = await api.productsIdGet(id);
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const addProduct = createAsyncThunk('data/addProduct', async (newProduct, { rejectWithValue }) => {
  try {
    //Important: 
    //As fakeStoreApi is a read-only api and it doesn't provide functionality to add product
    //So this code will add the product in redux state
    const mockResponse = {
      ...newProduct,
      id: Date.now(),
      rating: { rate: 0, count: 0 }
    };
    return mockResponse;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    products: [],
    currentProduct: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(addProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products.unshift(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default dataSlice.reducer;