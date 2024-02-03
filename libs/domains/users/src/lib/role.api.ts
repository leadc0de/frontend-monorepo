import {RoleSchema, RolesResponse} from "@leadcode/contracts";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const roleApi = createApi({
  reducerPath: 'roleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3333',
    credentials: "include"
  }),
  tagTypes: ['roles'],
  endpoints: (builder) => ({
    getRoles: builder.query<RolesResponse, { searchParams?: string }>({
      query: (props) => `/roles?${props.searchParams}`,
      providesTags: ['roles']
    }),
    storeRole: builder.mutation<any, RoleSchema>({
      query: (payload) => ({
        url: '/roles',
        method: 'POST',
        body: payload
      }),
      invalidatesTags: ['roles']
    })
  })
})

export const {
  useGetRolesQuery,
  useStoreRoleMutation
} = roleApi
