import {UserEntity} from "@leadcode/contracts";
import {Header, NavigationLeft} from "@leadcode/ui";
import {IconAwesomeEnum, IconEnum} from "@leadcode/enums";

export interface PageUserDangerZoneProps {
  deleteUser: () => void
  user?: UserEntity
}

export function PageUserDangerZone({ deleteUser, user }: PageUserDangerZoneProps) {
  const userLinks = [
    {
      title: 'General',
      icon: IconAwesomeEnum.WHEEL,
      url: 'general',
    },
    {
      title: 'Danger zone',
      icon: IconAwesomeEnum.SKULL,
      url: 'danger-zone',
      link: 'danger-zone'
    }
  ]

  return (
    <div className="h-full">
      <Header
        title={user?.email}
        icon={IconEnum.CONTAINER}
        iconClassName="w-16"
      />

      <div className="bg-white h-full rounded-t-sm mt-2">
        <div className="grid grid-cols-12 divide-x h-full">
          <div className="col-span-2">
            <NavigationLeft
              title={"Utilisateur"}
              links={userLinks}
              link={{

              }}
            />
          </div>

          <div className="col-span-10 h-full">
            dazdada
          </div>
        </div>
      </div>
    </div>
  )
}
