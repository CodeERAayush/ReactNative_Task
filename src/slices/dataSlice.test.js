import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import dataReducer, { fetchProducts, fetchProductById, addProduct } from './index';
import { saveData, loadData } from '../utils/offlineStorage';
import FakeStoreApi from 'fake_store_api';

jest.mock('../utils/offlineStorage');
jest.mock('fake_store_api');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('dataSlice', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      data: {
        products: [],
        currentProduct: null,
        status: 'idle',
        error: null,
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchProducts', () => {
    it('should fetch products successfully', async () => {
      const mockProducts = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];
      FakeStoreApi.DefaultApi.prototype.productsGet = jest.fn().mockResolvedValue(mockProducts);

      await store.dispatch(fetchProducts());
      const actions = store.getActions();

      expect(actions[0].type).toBe(fetchProducts.pending.type);
      expect(actions[1].type).toBe(fetchProducts.fulfilled.type);
      expect(actions[1].payload).toEqual(mockProducts);
      expect(saveData).toHaveBeenCalledWith('products', mockProducts);
    });

    it('should use cached data when API call fails', async () => {
      const mockError = new Error('API Error');
      const cachedProducts = [{ id: 1, name: 'Cached Product' }];

      FakeStoreApi.DefaultApi.prototype.productsGet = jest.fn().mockRejectedValue(mockError);
      loadData.mockResolvedValue(cachedProducts);

      await store.dispatch(fetchProducts());
      const actions = store.getActions();

      expect(actions[0].type).toBe(fetchProducts.pending.type);
      expect(actions[1].type).toBe(fetchProducts.fulfilled.type);
      expect(actions[1].payload).toEqual(cachedProducts);
    });
  });

  describe('fetchProductById', () => {
    it('should fetch a product by id successfully', async () => {
      const mockProduct = { id: 1, name: 'Product 1' };
      FakeStoreApi.DefaultApi.prototype.productsIdGet = jest.fn().mockResolvedValue(mockProduct);

      await store.dispatch(fetchProductById(1));
      const actions = store.getActions();

      expect(actions[0].type).toBe(fetchProductById.pending.type);
      expect(actions[1].type).toBe(fetchProductById.fulfilled.type);
      expect(actions[1].payload).toEqual(mockProduct);
    });

    it('should handle errors when fetching a product by id', async () => {
      const mockError = new Error('API Error');
      FakeStoreApi.DefaultApi.prototype.productsIdGet = jest.fn().mockRejectedValue(mockError);

      await store.dispatch(fetchProductById(1));
      const actions = store.getActions();

      expect(actions[0].type).toBe(fetchProductById.pending.type);
      expect(actions[1].type).toBe(fetchProductById.rejected.type);
      expect(actions[1].payload).toBe(mockError.message);
    });
  });

  describe('addProduct', () => {
    it('should add a new product successfully', async () => {
      const newProduct = { name: 'New Product', price: 10 };
      const expectedProduct = {
        ...newProduct,
        id: expect.any(Number),
        rating: { rate: 0, count: 0 }
      };

      await store.dispatch(addProduct(newProduct));
      const actions = store.getActions();

      expect(actions[0].type).toBe(addProduct.pending.type);
      expect(actions[1].type).toBe(addProduct.fulfilled.type);
      expect(actions[1].payload).toMatchObject(expectedProduct);
    });
  });

  describe('dataReducer', () => {
    it('should handle initial state', () => {
      expect(dataReducer(undefined, { type: 'unknown' })).toEqual({
        products: [],
        currentProduct: null,
        status: 'idle',
        error: null,
      });
    });

    it('should handle fetchProducts.fulfilled', () => {
      const mockProducts = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];
      const action = { type: fetchProducts.fulfilled.type, payload: mockProducts };
      const state = dataReducer(undefined, action);

      expect(state.status).toBe('succeeded');
      expect(state.products).toEqual(mockProducts);
    });

    it('should handle fetchProductById.fulfilled', () => {
      const mockProduct = { id: 1, name: 'Product 1' };
      const action = { type: fetchProductById.fulfilled.type, payload: mockProduct };
      const state = dataReducer(undefined, action);

      expect(state.status).toBe('succeeded');
      expect(state.currentProduct).toEqual(mockProduct);
    });

    it('should handle addProduct.fulfilled', () => {
      const initialState = {
        products: [{ id: 1, name: 'Existing Product' }],
        currentProduct: null,
        status: 'idle',
        error: null,
      };
      const newProduct = { id: 2, name: 'New Product' };
      const action = { type: addProduct.fulfilled.type, payload: newProduct };
      const state = dataReducer(initialState, action);

      expect(state.status).toBe('succeeded');
      expect(state.products).toHaveLength(2);
      expect(state.products[0]).toEqual(newProduct);
    });
  });
});