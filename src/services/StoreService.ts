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
        getCategories: builder.query<string[], void>({
            query: () => ({
                url: `products/categories`,
            })
        }),
        addNewProduct: builder.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: `products`,
                method: "POST",
                body: product,
            })
        }),
    })
})

export const { useGetProductsQuery, useLazyGetSpecifilteredCategoryQuery, useGetCurrentProductQuery, useAddNewProductMutation, useGetCategoriesQuery } = storeAPI;
