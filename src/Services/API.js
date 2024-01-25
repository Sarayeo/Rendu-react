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
    createProduct: builder.mutation({
      query: (data) => ({
        url: `/products`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ['products'], 
    }),
    addComment: builder.mutation({
        query: (productId, username, comment) => ({
            url: `/products/${productId}/comments`,
            method: 'POST',
            body: {
                username,
                comment
            }
        }),
    }),
  }),
})

export const { useGetProductsQuery, useCreateProductMutation ,useAddCommentMutation } = productAPI