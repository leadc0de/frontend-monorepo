import {PropsWithChildren, useEffect, useState} from 'react'
import {Button, Header, Icon, Tabs, useModal} from '@leadcode/ui'
import { IconAwesomeEnum, IconEnum } from '@leadcode/enums'
import {useLocation} from "react-router";
import {CreateUserModal} from "../form/create-user-modal";
import {match, P} from "ts-pattern";
import {CreateRoleModal} from "../form/create-role-modal";

export function Container({ children }: PropsWithChildren) {
  const { pathname } = useLocation()
  const [type, setType] = useState<string | undefined>()
  const [title, setTitle] = useState<string | undefined>()
  const { openModal, closeModal } = useModal()

  useEffect(() => {
    const t = match(pathname)
      .with(P.when(x => x.includes('/accounts/users')), () => 'users')
      .with(P.when(x => x.includes('/accounts/roles')), () => 'roles')
      .otherwise(() => undefined)

    setType(t)
  }, [pathname])

  useEffect(() => {
    setTitle(
      match(type)
        .with('users', () => 'Utilisateurs')
        .with('roles', () => 'Roles')
        .otherwise(() => undefined)
    )
  }, [type])

  const isUserTab = pathname.includes('/accounts/users')
  const isRoleTab = pathname.includes('/accounts/roles')

  const tabsItems = [
    {
      icon: <Icon name={'line-md:account'} />,
      name: 'Utilisateurs',
      active: isUserTab,
      link: '/accounts/users'
    },
    {
      icon: <Icon name="line-md:text-box-multiple" className="text-sm text-inherit" />,
      name: 'Roles',
      active: isRoleTab,
      link: `/accounts/roles`,
    },
  ]

  const contentTabs = (
    <div className="flex justify-center items-center px-5 border-l h-14 border-neutral-200">
      <Button
        iconRight={'material-symbols:add'}
        onClick={() => {
          openModal({
            content: (
              <>
                {type === 'users' && (
                  <CreateUserModal onClose={closeModal} />
                )}
                {type === 'roles' && (
                  <CreateRoleModal onClose={closeModal} />
                )}
              </>
            )
          })
        }}
      >
        {match(type)
          .with('users', () => 'Nouveau utilisateur')
          .with('roles', () => 'Nouveau role')
          .otherwise(() => null)
        }
      </Button>
    </div>
  )

  return (
    <>
      <div className="flex-1 flex-col h-full p-2 relative overflow-hidden">
        {(pathname.endsWith('users') || pathname.endsWith('roles')) && (
          <>
            <Header
              title={title}
              icon={IconEnum.APPLICATION}
              iconClassName='w-16'
              //actions={<div>prout</div>}
            />
            <Tabs
              items={tabsItems}
              contentRight={contentTabs}

            />
          </>
        )}

        <div className="h-full rounded-md">
          { children }
        </div>

      </div>
    </>
  )
}
