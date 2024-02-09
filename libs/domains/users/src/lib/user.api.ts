import {BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError} from '@reduxjs/toolkit/query/react'
import { type RootState } from '@leadcode/state/store'
import {useStore} from "react-redux";
import {userActions} from "./user.slice";
import {UserEntity, UserResponse} from "@leadcode/contracts";


const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3333/',
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const { user } = getState() as RootState
    headers.set('Authorization', `Bearer ${user.token}`)
  }
})

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  tagTypes: ['users'],
  endpoints: (builder) => ({
    getUser: builder.query<any, void>({
      query: () => `/authentication/me`
    }),
    getUsers: builder.query<UserResponse, void>({
      query: () => `/users`,
      providesTags: ['users']
    }),
    getUserById: builder.query<UserEntity, string>({
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
    deleteUserById: builder.mutation<any, string>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['users']
    }),
    login: builder.mutation<any, { username: string, password: string }>({
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
  useStoreUserMutation,
  useDeleteUserByIdMutation
} = userApi
