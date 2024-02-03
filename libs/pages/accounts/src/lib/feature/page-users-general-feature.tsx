import {PageUsersGeneral} from '../ui/page-users-general'
import {useGetUsersQuery} from '@leadcode/domains/users'

export function PageUsersGeneralFeature() {
  const { data: response , isLoading } = useGetUsersQuery()

  console.log(response);


  return (
    <PageUsersGeneral
      users={response && response.data || []}
    />
  )
}
