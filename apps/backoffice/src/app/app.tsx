import { Route, Routes } from 'react-router'
import { ROUTER } from './router.main'
import { match } from 'ts-pattern'
import {useGetUserQuery, useLoginMutation, userActions} from "@leadcode/domains/users";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@leadcode/state/store";

export default function App() {
  const [login, result] = useLoginMutation()
  const dispatch = useDispatch<AppDispatch>()



  useEffect(() => {
    login({ email: 'nathael.bonnal@gmail.com', password: 'nathael' })
  }, [])

  useEffect(() => {
    if (result.status === 'fulfilled') {
      const { data } = result
      console.log(result, data)

      dispatch(userActions.setUser(data))
    }

  }, [result]);

  return (
    <div className="text-white">
      <Routes>
        {ROUTER.map((route) =>
          match(route)
            .when((r) => r.layout, (r) => (
              <Route
                key={r.path}
                path={r.path}
                element={
                  <Layout>
                    {r.protected ? <>{r.component}</> : r.component}
                  </Layout>
                }
              />
            ))
            .otherwise((r) => (
              <Route
                key={r.path}
                path={r.path}
                element={!r.protected ? r.component : <>{r.component}</>}
              />
            ))
        )}
      </Routes>
    </div>
  )
}
