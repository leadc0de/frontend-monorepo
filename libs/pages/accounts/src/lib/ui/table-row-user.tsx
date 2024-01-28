import {UserEntity} from "@leadcode/contracts";
import {TableHeadProps, TableRow} from "@leadcode/ui";

export interface TableRowUserProps {
  data: UserEntity
  dataHead: TableHeadProps<UserEntity>[]
  columnsWidth?: string
  isLoading?: boolean
}

export function TableRowUser(props: TableRowUserProps) {
  const {
    data,
    dataHead,
    columnsWidth = `repeat(${dataHead.length},minmax(0,1fr))`,
    isLoading
  } = props

  return (
    <TableRow
      link={`/accounts/users/${data.id}`}
      data={data}
      filter={[]}
      columnsWidth={columnsWidth}
      disabled={isLoading}
    >
      <>
        <div className="ml-4 text-slate-700">
          {data.email}
        </div>

        <div>
          <span className="text-slate-700 ml-4">{data.username}</span>
        </div>
        <div>
          <span className="text-slate-700 ml-4">{data.firstname}</span>
        </div>

        <div>
          <span className="text-slate-700 ml-4">{data.lastname}</span>
        </div>
      </>
    </TableRow>
  )
}
