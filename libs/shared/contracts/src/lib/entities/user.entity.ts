import {BaseEntity} from './base.entity'
import {RoleEntity} from './role.entity'



export interface UserEntity extends BaseEntity {
  firstname: string
  lastname: string
  username: string
  email: string
  roles?: RoleEntity[]
}
