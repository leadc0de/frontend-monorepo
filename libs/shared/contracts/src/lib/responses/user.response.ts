import { type UserEntity } from "../entities"
import { type MetaState } from '../states'

export interface UserResponse {
  data: UserEntity[]
  meta: MetaState
}
