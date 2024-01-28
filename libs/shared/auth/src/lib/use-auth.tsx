import { useGetUserQuery, userActions } from "@leadcode/domains/users"
import { AppDispatch } from "@leadcode/state/store"
import { useDispatch } from "react-redux"
import { Navigate, useLocation, useNavigate } from "react-router"

export function useAuth() {
  function verifyCreds() {

    

    const query = useGetUserQuery()

    
    // if (isError) {
    //   return <Navigate to={'/authentication/login'} replace />
    // }
  
    
    return query  
  }

  return {
    verifyCreds
  }
}