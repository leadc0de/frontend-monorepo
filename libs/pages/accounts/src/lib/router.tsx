import { Route } from '@leadcode/routes'
import { PageUsersGeneralFeature } from './feature/page-users-general-feature'

export const ROUTER_ACCOUNTS: Route[] = [
  {
    path: '/users/general',
    component: <PageUsersGeneralFeature />
  }
]