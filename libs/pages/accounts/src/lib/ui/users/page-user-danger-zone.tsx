import {UserEntity} from "@leadcode/contracts";
import {BlockContentDelete, NavigationLeft} from "@leadcode/ui";
import {useParams} from "react-router";
import { getUserLinks } from "./config";

export interface PageUserDangerZoneProps {
  deleteUser: () => void
  user?: UserEntity
}

export function PageUserDangerZone(props: PageUserDangerZoneProps) {
  const { userId = '' } = useParams()
  const userLinks = getUserLinks(userId)

  return (
    <div className="bg-white h-full rounded-t-sm">
      <div className="grid grid-cols-12 divide-x h-full">
        <div className="col-span-2 p-4 py-10">
          <NavigationLeft
            title="Utilisateur"
            links={userLinks}
          />
        </div>

        <div className="col-span-10 p-4 py-10 max-w-content-with-navigation-left h-full">
          <BlockContentDelete
            title="Delete user"
            ctaLabel="Delete user"
            customModalConfirmation={props.deleteUser}
          />
        </div>
      </div>
    </div>
  )
}
