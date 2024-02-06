import { IconAwesomeEnum } from "@leadcode/enums"
import { Avatar, Icon, Menu, MenuAlign, MenuData, MenuDirection } from "@leadcode/ui"
import { useNavigate } from "react-router"

export interface MenuAccountProps {
  user: {
    username?: string
    email?: string
    picture?: string
  }
  handleLogout: () => void
}

export function MenuAccount ({ user, handleLogout }: MenuAccountProps) {
  const navigate = useNavigate()

  const menus: MenuData = [
    {
      items: [
        {
          itemContentCustom: (
            <div className="w-full flex items-center justify-between">
              <div className="flex">
                <Avatar
                   className="mr-3 object-cover"
                   size={40}
                   url={user?.picture}
                   username={user.username || ''}
                   noTooltip
                />
                <div>
                  <p className="text-neutral-400 dark:text-neutral-100 text-sm font-medium">
                    { user?.username}
                  </p>
                  <span className="text-neutral-350">{ user.email }</span>
                </div>
              </div>

            </div>
          ),
          containerClassName: '!h-14',
          onClick: () => navigate('/settings'),
        }
      ]
    },
    {
      items: [
        {
          itemContentCustom: (
            <div className="text-neutral-400 dark:text-neutral-100 text-ssm font-medium">
              <Icon name={IconAwesomeEnum.ARROW_RIGHT_FROM_BRACKET} className="text-brand-500 mr-3" />
              Logout
            </div>
          ),
          onClick: () => handleLogout(),
        }
      ]
    }
  ]

  return (
    <Menu
      trigger={
        <div>
          <Avatar
            size={40}
            username={user?.username || ''}
            url={user?.picture}
            noTooltip
          />
        </div>
      }
      direction={MenuDirection.RIGHT}
      arrowAlign={MenuAlign.END}
      menus={menus}
    />
  )
}
