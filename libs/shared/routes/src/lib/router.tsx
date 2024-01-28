import { ReactNode } from "react"

export const INDEX_URL = '/'

export interface Route {
  component: ReactNode
  path: string
}