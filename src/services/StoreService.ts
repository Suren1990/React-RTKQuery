import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../models';

export const storeAPI = createApi({
    reducerPath: 'storeAPI',
    tagTypes: ['products'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => ({
                url: 'products',
            })
        }),
        getSpecifilteredCategory: builder.query<IProduct[], string>({
            query: (category: string) => ({
                url: `products/category/${category}`,
            })
        }),
        getCurrentProduct: builder.query<IProduct, number>({
            query: (id: number) => ({
                url: `products/${id}`,
            })
        }),
    })
})

export const { useGetProductsQuery, useLazyGetSpecifilteredCategoryQuery, useGetCurrentProductQuery } = storeAPI;
