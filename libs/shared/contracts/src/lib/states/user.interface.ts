import { type JwtEntity } from '../entities'

export interface UserState {
  user?: JwtEntity
  token?: string
  isAuthenticated: boolean
  isLoading: boolean
}
