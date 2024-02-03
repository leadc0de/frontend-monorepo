import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {useOidc, useOidcAccessToken} from "@axa-fr/react-oidc";
import {RootState} from "@leadcode/state/store";
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3333/',
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const { user } = getState() as RootState
      console.log(user)
      headers.set('Authorization', `Bearer ${user.token}`)
    }
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
    getUserById: builder.query<any, string>({
      query: (userId) => `/users/${userId}`
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
  }),
})

export const {
  useGetUserQuery,
  useLoginMutation,
  useGetUsersQuery,
  useGetUserByIdQuery,
  useStoreUserMutation
} = userApi
