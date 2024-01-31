import { BaseEntity } from "./base.entity";

export interface RoleEntity extends BaseEntity {
  label: string
  power: number
}