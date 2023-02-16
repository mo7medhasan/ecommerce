import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// const productsApi=createSlice({
//     name:"products",

// })
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://ecom-fake-api.onrender.com/products' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/`,
    }),
  }),
})

export const { useGetProductsQuery,  } = productApi