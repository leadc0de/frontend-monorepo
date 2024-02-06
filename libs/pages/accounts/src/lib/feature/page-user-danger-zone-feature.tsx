import {PageUserDangerZone} from "../ui/page-user-danger-zone";

export function PageUserDangerZoneFeature() {
  return (
    <PageUserDangerZone
      deleteUser={() => console.log('delete user')}
      user={undefined}
    />
  )
}
