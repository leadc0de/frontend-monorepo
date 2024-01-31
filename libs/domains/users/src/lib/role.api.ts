import { RolesResponse } from "@leadcode/contracts";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const roleApi = createApi({
  reducerPath: 'roleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3333',
    credentials: "include"
  }),
  endpoints: (builder) => ({
    getRoles: builder.query<RolesResponse, { searchParams?: string }>({
      query: (props) => `/roles?${props.searchParams}`
    })
  })
})

export const {
  useGetRolesQuery
} = roleApi