import { RoleEntity } from "../entities";
import { MetaState } from "../states";

export interface RolesResponse {
  data: RoleEntity[]
  meta: MetaState
}