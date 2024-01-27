import {BaseEntity} from './base.entity'

export interface UserEntity extends BaseEntity {
  username: string
  firstname: string
  lastname: string
  email: string
}
