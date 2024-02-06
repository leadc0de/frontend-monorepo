import {UserEntity} from '../entities/user.entity'

export interface UserState {
  user?: UserEntity
  token?: string
  isAuthenticated: boolean
  isLoading: boolean
}
