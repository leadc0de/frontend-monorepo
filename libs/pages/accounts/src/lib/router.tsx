import { Route } from '@leadcode/routes'
import { PageUsersGeneralFeature } from './feature/page-users-general-feature'
import { PageUserFeature } from './feature/page-user-feature'
import {PageRolesGeneralFeature} from "./feature/page-roles-general-feature";
import {PageUserDangerZoneFeature} from "./feature/page-user-danger-zone-feature";

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
    path: '/users/:userId/danger-zone',
    component: <PageUserDangerZoneFeature />
  },

  {
    path: '/roles',
    component: <PageRolesGeneralFeature />
  }
]
