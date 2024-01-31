import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3333/',
    credentials: "include"
  }),
  tagTypes: ['users'],
  endpoints: (builder) => ({
    getUser: builder.query<any, void>({
      query: () => `/authentication/me`
    }),
    getUsers: builder.query<any, void>({
      query: () => `/users`,
      providesTags: ['users']
    }),
    storeUser: builder.mutation<any, any>({
      query: (payload) => ({
        url: '/users',
        method: 'POST',
        body: payload
      }),
      invalidatesTags: ['users']
    }),
    login: builder.mutation<any, { email: string, password: string }>({
      query: (credentials) => ({
        url: `/authentication/login`,
        method: 'POST',
        body: credentials
      })

    })
  })
})

export const {
  useGetUserQuery,
  useLoginMutation,
  useGetUsersQuery,
  useStoreUserMutation
} = userApi
