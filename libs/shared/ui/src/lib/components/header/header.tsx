import { IconEnum } from "@leadcode/enums"
import { ReactNode } from "react"
import { Icon } from "../icons/icon"
import { Skeleton } from "../skeleton/skeleton"
import { Truncate } from "../truncate/truncate"

export interface HeaderProps {
  title?: string
  icon?: IconEnum | string
  iconClassName?: string
  buttons?: ReactNode
  copyTitle?: boolean
  copyContent?: string
  actions?: ReactNode
}

export function Header(props: HeaderProps) {
  const { title, icon, buttons, actions, iconClassName = 'w-10' } = props

  return (
    <div className="flex border-b border-neutral-200 items-center justify-between bg-white rounded-t px-5 py-6 shrink-0">
      <div className="flex gap-5 ml-4 items-center">
        {icon && (
          <div className="flex items-center justify-center w-16 h-16">
            <Icon name={icon} className={iconClassName} />
          </div>
        )}
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center max-w-3xl">
            <Skeleton height={36} width={150} show={!title}>
              <span className="text-3xl font-semibold text-grey-300">{title && <Truncate text={title} truncateLimit={50} />}</span>
            </Skeleton>
          </div>
          {actions && <div className="flex gap-3 items-start">{actions}</div>}
        </div>
      </div>
      {buttons && <div className="flex self-end gap-2">{buttons}</div>}
    </div>
  )

}
