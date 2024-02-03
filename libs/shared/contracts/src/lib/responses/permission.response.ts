import { type PermissionEntity } from '../entities'
import { type MetaState} from '@leadcode/contracts'
export interface PermissionsResponse {
  data: PermissionEntity[]
  meta: MetaState
}
