import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3333/',
    credentials: "include"
  }),
  endpoints: (builder) => ({
    getUser: builder.query<any, void>({
      query: () => `/authentication/me`
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

export const { useGetUserQuery, useLoginMutation } = userApi
