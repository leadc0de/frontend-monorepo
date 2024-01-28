import { PropsWithChildren } from 'react'
import {Button, Header, Icon, Tabs, useModal} from '@leadcode/ui'
import { IconAwesomeEnum, IconEnum } from '@leadcode/enums'
import {useLocation} from "react-router";
import {CreateUserModal} from "../form/create-user-modal";

export function Container({ children }: PropsWithChildren) {
  const { pathname } = useLocation()
  const { openModal, closeModal } = useModal()

  const isUserTab = pathname.includes('/accounts/users')
  const isRoleTab = pathname.includes('/accounts/roles')

  const tabsItems = [
    {
      icon: <Icon name={IconAwesomeEnum.LAYER_GROUP} />,
      name: 'Utilisateurs',
      active: isUserTab,
      link: '/accounts/users/general'
    },
    {
      icon: <Icon name="icon-solid-browser" className="text-sm text-inherit" />,
      name: 'Roles',
      active: isRoleTab,
      link: `/accounts/roles/general`,
    },
  ]

  const contentTabs = (
    <div className="flex justify-center items-center px-5 border-l h-14 border-neutral-200">
      <Button
        onClick={() => {
          openModal({
            content: (
              <CreateUserModal onClose={closeModal} />
            )
          })
        }}
      >
        Nouveau utilisateur
      </Button>
    </div>
  )

  return (
    <>
      <div className="flex-1 flex-col h-full p-2 relative">
        <Header
          title='Test'
          icon={IconEnum.APPLICATION}
          iconClassName='w-16'
          actions={<div>prout</div>}
        />
        <Tabs
          items={tabsItems}
          contentRight={contentTabs}

        />

        <div className="bg-white h-full">
          { children }
        </div>

      </div>
    </>
  )
}
