import { PropsWithChildren } from "react";
import { useSelector } from 'react-redux'
import { getUserState } from '@leadcode/domains/users'
import { Navigate, useLocation } from "react-router";

export function ProtectedRoute({ children }: PropsWithChildren) {
  const { isAuthenticated } = useSelector(getUserState)
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to={"/authentication/login"} replace />
  }

  return children
}