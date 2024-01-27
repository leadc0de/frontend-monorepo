import {UserEntity} from '../entities/user.entity'

export interface UserState {
  user?: UserEntity
  isAuthenticated: boolean
  isLoading: boolean
}
