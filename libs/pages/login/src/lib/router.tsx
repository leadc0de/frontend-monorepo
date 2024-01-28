import { Route } from '@leadcode/routes'
import PageLoginFeature from './feature/page-login-feature'

export const ROUTER_AUTH: Route[] = [
  {
    path: '/login',
    component: <PageLoginFeature />
  }
]