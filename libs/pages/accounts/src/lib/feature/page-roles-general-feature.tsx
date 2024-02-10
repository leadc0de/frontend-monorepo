import {PageRolesGeneral} from "../ui/roles/page-roles-general";
import {useGetRolesQuery} from "@leadcode/domains/users";

export function PageRolesGeneralFeature () {

  const { data: rolesResponse } = useGetRolesQuery({})
  return (
    <PageRolesGeneral
      isLoading={true}
      roles={rolesResponse && rolesResponse.data || []}
    />
  )
}
