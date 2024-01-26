import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productAPI = createApi({
  tagTypes: ['products'], 
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://iim.etherial.fr' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
      providesTags: ['products'], 
    }),
  fetchProducts: builder.query({
      query: (productId) => ({
          url: `/products/${productId}/comments`,
          method: 'GET',
      }),
      invalidatesTags: ['products'], 
  }),
  }),
})
export const { useGetProductsQuery, useFetchProductsQuery, } = productAPI
