//src/features/products/api/productApi.js 

import { createApi, fetchBaseQuery } from '@/api/axiosClient';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/products' }),
    endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/',
    }),
    getProductById: builder.query({
        query: (id) => `/${id}`,
    }),
    createProduct: builder.mutation({
        query: (product) => ({
            url: '/',
            method: 'POST',
            body: product,
        }),
    }),
    updateProduct: builder.mutation({
        query: ({ id, ...product }) => ({
            url: `/${id}`,
            method: 'PUT',
            body: product,
        }),
    }),
    deleteProduct: builder.mutation({
        query: (id) => ({
            url: `/${id}`,
            method: 'DELETE',
        }),
    }),
  }),
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
} = productApi;


