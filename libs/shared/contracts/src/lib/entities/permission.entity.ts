import { type BaseEntity} from "./base.entity"
import { type RoleEntity } from './role.entity'
export interface PermissionEntity extends BaseEntity {
  identifier: string
  roles?: RoleEntity[]
}
