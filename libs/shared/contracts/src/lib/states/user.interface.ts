import {UserEntity} from '../entities/user.entity'

export interface UserState {
  user?: UserEntity
  token?: any
  isAuthenticated: boolean
  isLoading: boolean
}
