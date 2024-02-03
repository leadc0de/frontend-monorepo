import { Route } from '@leadcode/routes'
import { PageUsersGeneralFeature } from './feature/page-users-general-feature'
import { PageUserFeature } from './feature/page-user-feature'
import {PageRolesGeneralFeature} from "./feature/page-roles-general-feature";

export const ROUTER_ACCOUNTS: Route[] = [
  {
    path: '/users',
    component: <PageUsersGeneralFeature />
  },
  {
    path: '/users/:userId',
    component: <PageUserFeature />
  },

  {
    path: '/roles',
    component: <PageRolesGeneralFeature />
  }
]
