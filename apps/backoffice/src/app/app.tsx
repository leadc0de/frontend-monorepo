import { Route, Routes } from 'react-router'
import { ROUTER } from './router.main'
import { match } from 'ts-pattern'

export default function App() {
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
