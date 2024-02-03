import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router'
import { ROUTER } from './router.main'
import { match } from 'ts-pattern'
import {getUserState, useGetUserQuery, useLoginMutation, userActions} from "@leadcode/domains/users";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "@leadcode/state/store";
import { Layout } from '@leadcode/layout'
import { PageAuth } from '@leadcode/pages/login'
import { ProtectedRoute, useAuth } from '@leadcode/auth'
import { LoadingScreen } from '@leadcode/ui';
import {useOidc, useOidcAccessToken} from "@axa-fr/react-oidc";

export default function App() {
  const { isLoading } = useSelector(getUserState)
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const { verifyCreds } = useAuth()
  const { pathname } = useLocation()
  const { login, isAuthenticated } = useOidc()
  const { accessTokenPayload, accessToken } = useOidcAccessToken()

  useEffect(() => {
    if (!isAuthenticated) {
      login('/')
    }
  }, [isAuthenticated])

  useEffect(() => {
    console.log(accessToken, accessTokenPayload)
    if (accessTokenPayload) {
      dispatch(userActions.setUser({ user: accessTokenPayload, token: accessToken }))
    }
  }, [])

  if (isLoading && !pathname.includes('authentication')) {
    return (
      <LoadingScreen />
    )
  }

  return (
    <div>
      <Routes>
        <Route path='/authentication/*' element={<PageAuth />} />
        {ROUTER.map((route) =>
          match(route)
            .when((r) => r.layout, (r) => (
              <Route
                key={r.path}
                path={r.path}
                element={
                  <Layout>
                    {r.protected ? <ProtectedRoute>{r.component}</ProtectedRoute> : r.component}
                  </Layout>
                }
              />
            ))
            .otherwise((r) => (
              <Route
                key={r.path}
                path={r.path}
                element={!r.protected ? r.component : <ProtectedRoute>{r.component}</ProtectedRoute>}
              />
            ))
        )}
      </Routes>
    </div>
  )
}
