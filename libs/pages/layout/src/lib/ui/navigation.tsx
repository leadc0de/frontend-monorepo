import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { ButtonIcon, ButtonIconStyle, Tooltip } from '@leadcode/ui'
import { HomeIcon, ChatBubbleLeftRightIcon, UserGroupIcon } from '@heroicons/react/20/solid'
import { classNames } from '@leadcode/utils'
import { IconAwesomeEnum } from '@leadcode/enums'
import { MenuAccountFeature } from '../feature/menu-account-feature'
import {useSelector} from "react-redux";
import {getUserState} from "@leadcode/domains/users";

export function Navigation () {
  const { pathname } = useLocation()

  const matchHomeRoute = pathname.includes('/home')
  const matchAccountsRoute = pathname.includes('/accounts')
  const matchBlogRoute = pathname.includes('/blogs')
  const matchSettingsRoute = pathname.includes(`/settings`)

  return (
    <div className='w-16 h-screen dark:bg-neutral-650 bg-white flex flex-col'>
      <Link
        to={"/home"}
        className="flex w-16 h-16 items-center justify-center border-b z-10 dark:border-neutral-500 border-neutral-200"
      >
        <img src="/luffy.png" className='p-3' alt="" />
      </Link>

      <div className="flex flex-col justify-between px-2.5 py-5 flex-grow">
        <div className='flex flex-col gap-3'>
          <Tooltip content={"Accueil"} side="right">
            <Link
              to="/home"
              className={classNames(
                'flex rounded-md p-3 mx-auto dark:hover:text-gray-100 hover:bg-neutral-200 dark:hover:bg-indigo-500 hover:text-brand-500 ease-in-out duration-200 dark:text-gray-400 ',
                matchHomeRoute ? 'bg-neutral-200 !text-brand-500 dark:bg-indigo-500' : 'text-gray-400'
              )}
            >
              <HomeIcon
                className={classNames(
                  'w-5',
                )}
              />
            </Link>
          </Tooltip>

          <Tooltip content={"Accounts"} side="right">
            <Link
              to="/accounts/users"
              className={classNames(
                'flex rounded-md p-3 mx-auto dark:hover:text-gray-100 hover:bg-neutral-200 dark:hover:bg-indigo-500 hover:text-brand-500 ease-in-out duration-200 dark:text-gray-400 ',
                matchAccountsRoute ? 'bg-neutral-200 !text-brand-500 dark:bg-indigo-500' : 'text-gray-400'
              )}
            >
              <UserGroupIcon
                className={classNames(
                  'w-5',
                )}
              />
            </Link>
          </Tooltip>

          <Tooltip content={"Blogs"} side="right">
            <Link
              to="/blogs/general"
              className={classNames(
                'flex rounded-md p-3 mx-auto dark:hover:text-gray-100 hover:bg-neutral-200 dark:hover:bg-indigo-500 hover:text-brand-500 ease-in-out duration-200 dark:text-gray-400 ',
                matchBlogRoute ? 'bg-neutral-200 !text-brand-500 dark:bg-indigo-500' : 'text-gray-400'
              )}
            >
              <ChatBubbleLeftRightIcon
                className={classNames(
                  'w-5',
                )}
              />
            </Link>
          </Tooltip>
        </div>

        <div>
          <div className="flex flex-col gap-3">
            <Tooltip content="Settings" side="right">
              <div>
                <ButtonIcon
                  className={matchSettingsRoute ? 'is-active' : ''}
                  icon={IconAwesomeEnum.WHEEL}
                  style={ButtonIconStyle.ALT}
                  link={"/settings"}
                />
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="flex w-16 h-16 mb-5 items-center justify-center border-t dark:border-neutral-500 border-neutral-200">
        <MenuAccountFeature />
      </div>
    </div>
  )
}
