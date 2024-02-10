import { IconAwesomeEnum } from "@leadcode/enums";
import { NavigationLeftLinkProps } from "@leadcode/ui";

export function getUserLinks (userId: string): NavigationLeftLinkProps[] {
  return [
    {
      title: 'General',
      icon: IconAwesomeEnum.WHEEL,
      url: `/accounts/users/${userId}/general`,
    },
    {
      title: 'Danger zone',
      icon: 'ri:alarm-warning-fill',
      url: `/accounts/users/${userId}/danger-zone`,
      className: (isActive) => isActive
        ? 'is-active text-red-500 bg-red-50 hover:text-red-600 hover:bg-red-100'
        : 'text-red-600 hover:text-red-700 hover:bg-red-100',
    }
  ]
}
