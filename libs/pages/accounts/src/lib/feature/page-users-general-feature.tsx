import {PageUsersGeneral} from '../ui/page-users-general'
import {useGetUsersQuery} from '@leadcode/domains/users'

export function PageUsersGeneralFeature() {
  const { data, isLoading } = useGetUsersQuery()

  return (
    <PageUsersGeneral
      users={isLoading ? [] : data.data}
    />
  )
}
