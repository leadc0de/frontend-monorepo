import {UserEntity} from "@leadcode/contracts";
import {BlockContent, BlockContentDelete, Header, NavigationLeft} from "@leadcode/ui";
import {IconAwesomeEnum, IconEnum} from "@leadcode/enums";
import {useParams} from "react-router";
import {useFormContext} from "react-hook-form";

export interface PageUserDangerZoneProps {
  deleteUser: () => void
  user?: UserEntity
}

export function PageUserDangerZone({ deleteUser, user }: PageUserDangerZoneProps) {
  const { userId = '' } = useParams()

  const userLinks = [
    {
      title: 'General',
      icon: IconAwesomeEnum.WHEEL,
      url: `/accounts/users/${userId}/general`,
    },
    {
      title: 'Danger zone',
      icon: 'game-icons:death-skull',
      url: `/accounts/users/${userId}/danger-zone`,
    }
  ]

  return (
    <div className="bg-white h-full rounded-t-sm">
      <div className="grid grid-cols-12 divide-x h-full">
        <div className="col-span-2 p-4 py-10">
          <NavigationLeft
            title={"Utilisateur"}
            links={userLinks}
          />
        </div>

        <div className="col-span-10 p-4 py-10 max-w-content-with-navigation-left h-full">
          <BlockContentDelete
            title="Delete user"
            ctaLabel="Delete user"
            customModalConfirmation={deleteUser}
          />
        </div>
      </div>
    </div>
  )
}
