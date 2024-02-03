import { PropsWithChildren } from "react";
import { useSelector } from 'react-redux'
import { getUserState } from '@leadcode/domains/users'
import { Navigate, useLocation } from "react-router";
import {useOidc} from "@axa-fr/react-oidc";

export function ProtectedRoute({ children }: PropsWithChildren) {
  //const { isAuthenticated } = useSelector(getUserState)
  const { login, isAuthenticated } = useOidc()
  const location = useLocation()

  if (!isAuthenticated) {
    //return <Navigate to={"/authentication/login"} replace />
    login('/')
    return null
  }

  return children
}
