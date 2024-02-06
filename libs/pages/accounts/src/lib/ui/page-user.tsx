import {UserEntity} from "@leadcode/contracts";
import {IconAwesomeEnum, IconEnum} from "@leadcode/enums";
import {Header, NavigationLeft} from "@leadcode/ui";

export interface PageUserProps {
  user?: UserEntity
}

export function PageUser({ user }: PageUserProps) {
  const userLinks = [
    {
      title: 'General',
      icon: IconAwesomeEnum.WHEEL,
      url: 'general',
    },
    {
      title: 'Danger zone',
      icon: IconAwesomeEnum.SKULL,
      url: 'danger-zone'
    }
  ]
  return (
    <div className="h-full">
      <Header
        title={user?.email}
        icon={IconEnum.DATABASE}
        iconClassName="w-16"
      />

      <div className="bg-white h-full rounded-t-sm mt-2">
        <div className="grid grid-cols-12 divide-x h-full">
          <div className="col-span-2">
            <NavigationLeft
              title={"Utilisateur"}
              links={userLinks}

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
