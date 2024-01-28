import { Route } from '@leadcode/routes'
import { PageGeneralFeature } from './feature/page-general-feature'

export const ROUTER_HOME: Route[] = [
  {
    path: '/',
    component: <PageGeneralFeature />
  }
]