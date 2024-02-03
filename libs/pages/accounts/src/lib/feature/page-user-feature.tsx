import { useGetUserByIdQuery } from "@leadcode/domains/users"
import { useParams } from "react-router"
import { PageUser } from "../ui/page-user"
import { useEffect, useState } from "react"

export function PageUserFeature () {
  const { userId = '' } = useParams()

  const { data: user } = useGetUserByIdQuery(userId)

  return (

      <PageUser
        user={user}
      />

  )
}