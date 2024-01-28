import { UserEntity } from '@leadcode/contracts'
import {Button, EmptyState, Table, TableHeadProps} from "@leadcode/ui";
import {TableRowUser} from "./table-row-user";

export interface PageUsersGeneralProps {
  users?: UserEntity[]
  isLoading?: boolean
}

export function PageUsersGeneral({ users, isLoading }: PageUsersGeneralProps) {
  const columnWidth = '20% 30% 15% 10%'
  const tableHead: TableHeadProps<UserEntity>[] = [
    {
      title: 'Email'
    },
    {
      title: 'Username'
    },
    {
      title: "Prénom"
    },
    {
      title: "Nom"
    }
  ]

  return (
    <div className="bg-white rounded-t-sm mt-2">
      { users && users.length ? (
        <Table
          dataHead={tableHead}
          data={users}
          columnsWidth={columnWidth}
        >
          { users.map((user) => (
            <TableRowUser
              data={user}
              dataHead={tableHead}
              columnsWidth={columnWidth}
              isLoading={isLoading}
              key={user.id}
            />
          ))}
        </Table>
      ) : (
        <EmptyState
          className={"pt-10"}
          imageWidth={"w-90"}
          title="Créer ton premier utilisateur"
          description="Créez votre premier utilisateur afin d'utiliser les fonctionnalités liés à ces derniers."
        >
          <Button>
            Créer un utilisateur
          </Button>
        </EmptyState>
      )}

    </div>
  )
}
