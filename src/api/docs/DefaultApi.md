# FakeStoreApi.DefaultApi

All URIs are relative to *https://fakestoreapi.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productsCategoriesGet**](DefaultApi.md#productsCategoriesGet) | **GET** /products/categories | Get all categories
[**productsGet**](DefaultApi.md#productsGet) | **GET** /products | Get all products
[**productsIdGet**](DefaultApi.md#productsIdGet) | **GET** /products/{id} | Get a product by ID
[**productsPost**](DefaultApi.md#productsPost) | **POST** /products | Add a new product



## productsCategoriesGet

> [String] productsCategoriesGet()

Get all categories

### Example

```javascript
import FakeStoreApi from 'fake_store_api';

let apiInstance = new FakeStoreApi.DefaultApi();
apiInstance.productsCategoriesGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productsGet

> [Product] productsGet()

Get all products

### Example

```javascript
import FakeStoreApi from 'fake_store_api';

let apiInstance = new FakeStoreApi.DefaultApi();
apiInstance.productsGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Product]**](Product.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productsIdGet

> Product productsIdGet(id)

Get a product by ID

### Example

```javascript
import FakeStoreApi from 'fake_store_api';

let apiInstance = new FakeStoreApi.DefaultApi();
let id = 56; // Number | 
apiInstance.productsIdGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**Product**](Product.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productsPost

> Product productsPost(newProduct)

Add a new product

### Example

```javascript
import FakeStoreApi from 'fake_store_api';

let apiInstance = new FakeStoreApi.DefaultApi();
let newProduct = new FakeStoreApi.NewProduct(); // NewProduct | 
apiInstance.productsPost(newProduct).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newProduct** | [**NewProduct**](NewProduct.md)|  | 

### Return type

[**Product**](Product.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

