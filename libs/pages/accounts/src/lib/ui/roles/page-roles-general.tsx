import {RoleEntity} from "@leadcode/contracts";
import {Button, EmptyState, Table, TableHeadProps, useModal} from "@leadcode/ui";
import {CreateRoleModal} from "../../form/create-role-modal";
import {TableRowRole} from "./table-row-role";

export interface PageRolesGeneralProps {
  roles?: RoleEntity[]
  isLoading?: boolean
}

export function PageRolesGeneral({ roles, isLoading }: PageRolesGeneralProps) {
  const { openModal, closeModal } = useModal()
  const columnsWidth = '20%'

  const tableHead: TableHeadProps<RoleEntity>[] = [
    {
      title: "Label"
    }
  ]

  return (
    <div className="bg-white rounded mt-2">
      {roles && roles.length ? (
        <Table
          dataHead={tableHead}
          data={roles}
          columnsWidth={columnsWidth}
        >
          {roles.map((role) => (
            <TableRowRole
              data={role}
              dataHead={tableHead}
              columnsWidth={columnsWidth}
              isLoading={isLoading}
              key={role.id}
            />
          ))}
        </Table>
      ) : (
        <EmptyState
          className="py-10"
          imageWidth="w-90"
          title="Créer ton premier rôle"
          description="Créez votre premier role afin d'utiliser les fonctionnalitées liés à ces derniers"
        >
          <Button
            onClick={() => {
              openModal({
                content: (
                 <CreateRoleModal onClose={closeModal} />
                )
              })
            }}
          >
            Créer un rôle
          </Button>
        </EmptyState>
      )}
    </div>
  )

}
