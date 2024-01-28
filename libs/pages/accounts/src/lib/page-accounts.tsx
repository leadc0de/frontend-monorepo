import { ROUTER_ACCOUNTS } from './router'
import { Container } from './ui/container'
import { Route, Routes } from 'react-router'

export function PageAccounts() {
  return (
    <Container>
      <Routes>
        {ROUTER_ACCOUNTS.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
    </Container>
  )
}
