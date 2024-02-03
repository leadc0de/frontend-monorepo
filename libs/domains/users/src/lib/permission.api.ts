import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {PermissionsResponse} from "@leadcode/contracts";
export const permissionApi = createApi({
  reducerPath: 'permissionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3333',
    credentials: 'include'
  }),
  endpoints: (builder) => ({
    getPermissions: builder.query<PermissionsResponse, void>({
      query: () => '/permissions'
    }),
  })
})

export const {
  useGetPermissionsQuery
} = permissionApi
