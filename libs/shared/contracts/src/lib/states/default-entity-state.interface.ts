import { type EntityState} from '@reduxjs/toolkit'
import {MetaState} from './meta.interface'
import {LoadingStatus} from '../types'

export interface DefaultEntityState<T> extends EntityState<T, string> {
  loadingStatus: LoadingStatus
  error: string | null | undefined
  meta: MetaState | null
}
